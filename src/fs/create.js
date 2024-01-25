import fs from "node:fs/promises";
import {fileURLToPath} from "url";

const create = async () => {
  const newFilePath = fileURLToPath(new URL("./files/fresh.txt", import.meta.url));
  const newFileContent = "I am fresh and young";

  try {
    const isFileExist = Boolean(await fs.stat(newFilePath));
    if (isFileExist) throw new Error("FS operation failed");
  } catch (e) {
    if (e.code !== "ENOENT") throw e;

    await fs.writeFile(newFilePath, newFileContent);
  }
};

await create();