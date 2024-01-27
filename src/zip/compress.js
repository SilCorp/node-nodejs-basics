import { createGzip } from "node:zlib";
import {fileURLToPath} from "url";
import {createReadStream, createWriteStream} from "node:fs";

const compress = async () => {
    const sourcePath = fileURLToPath(new URL("./files/fileToCompress.txt", import.meta.url));
    const outputPath = fileURLToPath(new URL("./files/archive.gz", import.meta.url));

    const gzip = createGzip();
    const readStream = createReadStream(sourcePath);
    const writeStream = createWriteStream(outputPath);

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();