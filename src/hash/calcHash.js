import {fileURLToPath} from "url";
import crypto from "node:crypto";
import {createReadStream} from "node:fs";

const calculateHash = async () => {
  const filePath = fileURLToPath(new URL("./files/fileToCalculateHashFor.txt", import.meta.url));

  const readStream = createReadStream(filePath);
  const hash = crypto.createHash("sha256");

  readStream.pipe(hash).setEncoding("hex").pipe(process.stdout);
};

await calculateHash();