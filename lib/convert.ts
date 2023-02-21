const lib = require("./utils.ts");
const p = require("path");

interface fileObj {
  index: number;
  title: string;
  content: string;
}

const init = async (): Promise<void> => {
  let pageList = await getPagesArray("./pages");
  console.log(pageList);
};

const getPagesArray = async (filepath: string): Promise<any[]> => {
  let list = await lib.readDir(filepath),
    result = [];
  list.sort((a: string, b: string) => {
    //@ts-ignore - Object is possibly null but we know it won't be
    return Number(a.match(/^\d{1,}/)[0]) - Number(b.match(/^\d{1,}/)[0]);
  });
  for (let file of list) {
    console.log(file);
    let temp = {} as fileObj;
    //@ts-ignore
    temp["index"] = Number(file.match(/^\d{1,}/)[0]);
    temp["title"] = file
      .replace(/\.md$/, "")
      .match(/(?<=\W)[\w\s]*$/)[0]
      .trim();
    temp["content"] = await lib.readFile(
      p.join(p.resolve(filepath), file),
      false
    );
    result.push(temp);
  }
  return result;
};

init();
