import {fileURLToPath} from "url";
import fs from "node:fs/promises";

const read = async () => {
  const fileToReadPath = fileURLToPath(new URL("./files/fileToRead.txt", import.meta.url));

  try {
    const fileContent = await fs.readFile(fileToReadPath, "utf-8");
    console.log(fileContent);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await read();