import {fileURLToPath} from "url";
import fs from "node:fs/promises";

const rename = async () => {
  const oldFilePath = fileURLToPath(new URL("./files/wrongFilename.txt", import.meta.url));
  const newFilePath = fileURLToPath(new URL("./files/properFilename.md", import.meta.url));

  try {
    const isNewFileExist = Boolean(await fs.stat(newFilePath));
    if (isNewFileExist) throw new Error("FS operation failed");
  } catch (e) {
    if (e.code !== "ENOENT") throw e;

    try {
      await fs.rename(oldFilePath, newFilePath);
    } catch (e) {
      throw new Error("FS operation failed");
    }
  }
};

await rename();