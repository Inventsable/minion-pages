const lib = require("./utils.ts");
const p = require("path");

interface fileObj {
  index: number;
  title: string;
  content: string;
  uuid: string;
}

if (process.argv.length <= 2) {
  console.error(
    "Must include name of folder after npm run convert command:",
    "npm run convert foo"
  );
}
const fns = require("date-fns");
const targName = process.argv[process.argv.length - 1];

const init = async (): Promise<void> => {
  let pageList = await getPagesArray(`./${targName}`);
  await lib.writeFile(
    `./results/${targName}.json`,
    JSON.stringify({
      pages: pageList,
      timestamp: Date.now(),
      date: {
        short: fns.format(new Date(), `MM/dd/yy`),
        long: fns.format(new Date(), `eeee, LLL do`),
        time: fns.format(new Date(), `h:mma`),
      },
      name: targName,
    })
  );
  console.log(`All done 👍`);
};

const getPagesArray = async (filepath: string): Promise<any[]> => {
  let list = await lib.readDir(filepath),
    result = [];
  list.sort((a: string, b: string) => {
    //@ts-ignore - Object is possibly null but we know it won't be
    return Number(a.match(/^\d{1,}/)[0]) - Number(b.match(/^\d{1,}/)[0]);
  });
  for (let file of list) {
    let temp = {} as fileObj;
    //@ts-ignore
    temp["index"] = Number(file.match(/^\d{1,}/)[0]);
    temp["title"] = file
      .replace(/\.md$/, "")
      .match(/(?<=\W)[\w\s]*$/)[0]
      .trim();
    temp["uuid"] = generateQuickGuid();
    temp["content"] = await lib.readFile(
      p.join(p.resolve(filepath), file),
      false
    );
    result.push(temp);
  }
  return result;
};

// https://stackoverflow.com/a/13403498/10307226
function generateQuickGuid(): string {
  return (
    Math.random().toString(36).substring(2, 4) +
    Math.random().toString(36).substring(2, 4)
  );
}

init();
