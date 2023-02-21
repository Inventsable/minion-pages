const fs = require("fs");
const path = require("path");

const writeFile = (filePath: string, data: any): Promise<Error | boolean> => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      path.resolve(filePath),
      data,
      { encoding: "utf-8" },
      (err: Error): void => {
        if (err) reject(err);
        else resolve(true);
      }
    );
  });
};

const makeFolder = (targetPath: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    fs.mkdir(path.resolve(targetPath), (err: Error): void => {
      return err ? reject(false) : resolve(true);
    });
  });
};

const readFile = (targetPath: string, verbose: boolean): Promise<any> => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.resolve(targetPath),
      "utf-8",
      (err: Error, data: any): void => {
        if (err) reject(err);
        else resolve(isJSON(data) ? JSON.parse(data) : data);
      }
    );
  });
};

const readDir = async (targetPath: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!exists(targetPath) || !isFolder(targetPath))
      reject("Path is not a folder or does not exist");
    fs.readdir(
      path.resolve(targetPath),
      { encoding: "utf-8" },
      (err: Error, files: string[]) => {
        if (err) reject(err);
        resolve(files);
      }
    );
  });
};

const isFolder = (targetPath: string): boolean => {
  return fs.lstatSync(path.resolve(targetPath)).isDirectory();
};

const exists = (targetPath: string): boolean => {
  return fs.existsSync(path.resolve(targetPath));
};

function isJSON(data: string): boolean {
  try {
    JSON.parse(data);
    return true;
  } catch (err) {
    return false;
  }
}

module.exports = {
  writeFile,
  makeFolder,
  readDir,
  readFile,
  exists,
};
