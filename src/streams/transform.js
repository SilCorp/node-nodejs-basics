import { Transform } from "node:stream"
const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      const stringifiedData = chunk.toString();
      const charArr = stringifiedData.split("");
      const reversedData = charArr.reverse().join("");

      callback(null, reversedData + "\n");
    }
  })

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();