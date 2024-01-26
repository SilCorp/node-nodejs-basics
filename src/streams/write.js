import {fileURLToPath} from "url";
import { createWriteStream } from "node:fs";

const write = async () => {
  const outputFilePath = fileURLToPath(new URL("./files/fileToWrite.txt", import.meta.url));
  const writeStream = createWriteStream(outputFilePath);

  process.stdin.pipe(writeStream);
};

await write();