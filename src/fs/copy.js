import fs from "node:fs/promises";
import path from "node:path";
import {fileURLToPath} from "url";

const copy = async () => {
  const filesFolderPath = fileURLToPath(new URL("./files", import.meta.url));
  const filesCopyFolderPath = fileURLToPath(new URL("./files_copy", import.meta.url));

  try {
    const filesArr = await fs.readdir(filesFolderPath, { withFileTypes: true });
    await fs.mkdir(filesCopyFolderPath);

    for (const file of filesArr) {
      if (file.isFile()) {
        const filePath = path.join(file.path, file.name);
        const fileCopyPath = path.join(filesCopyFolderPath, file.name);
        await fs.copyFile(filePath, fileCopyPath);
      }
    }
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();
