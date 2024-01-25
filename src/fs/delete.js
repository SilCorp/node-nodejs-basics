import {fileURLToPath} from "url";
import fs from "node:fs/promises";

const remove = async () => {
    const fileToRemovePath = fileURLToPath(new URL("./files/fileToRemove.txt", import.meta.url));

    try {
      await fs.unlink(fileToRemovePath);
    } catch (e) {
      throw new Error("FS operation failed");
    }
};

await remove();