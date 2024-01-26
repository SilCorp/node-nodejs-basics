import {fileURLToPath} from "url";
import {createReadStream} from "node:fs";

const read = async () => {
  const filePath = fileURLToPath(new URL("./files/fileToRead.txt", import.meta.url));
  const readStream = createReadStream(filePath);

  readStream.pipe(process.stdout);
};

await read();