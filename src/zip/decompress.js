import {fileURLToPath} from "url";
import {createGunzip} from "node:zlib";
import {createReadStream, createWriteStream} from "node:fs";

const decompress = async () => {
  const sourcePath = fileURLToPath(new URL("./files/archive.gz", import.meta.url));
  const outputPath = fileURLToPath(new URL("./files/fileToCompress.txt", import.meta.url));

  const gunzip = createGunzip();
  const readStream = createReadStream(sourcePath);
  const writeStream = createWriteStream(outputPath);

  readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();