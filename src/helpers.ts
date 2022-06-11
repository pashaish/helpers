import fs from "fs";

export function getDirectories(path: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    fs.readdir(path, {
      withFileTypes: true,
    }, (err, files) => {
      if (err !== null) {
        reject(err);
      } else {
        const dirs = files
          .filter(file => file.isDirectory())
          .map(file => file.name);

        resolve(dirs);
      }
    });
  });
} 

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const random = (min: number, max: number) => {
    return Math.round(min + (Math.random() * (max - min)));
}