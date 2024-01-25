import {fileURLToPath} from "url";
import fs from "node:fs/promises";

const list = async () => {
  const filesFolderPath = fileURLToPath(new URL("./files", import.meta.url));

  try {
    const fileNames = await fs.readdir(filesFolderPath);
    console.log(fileNames);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await list();