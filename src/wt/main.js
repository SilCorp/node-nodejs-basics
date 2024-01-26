import { Worker } from "worker_threads";
import {fileURLToPath} from "url";
import os from "node:os";

async function nthFibonacci(n) {
  return new Promise((resolve, reject) => {
    const workerScriptPath = fileURLToPath(new URL("./worker.js", import.meta.url))
    const worker = new Worker(workerScriptPath, { workerData: n });

    worker.on("message", (value) => resolve(value));
    worker.on("error", (error) => reject(error));
    worker.on("exit", (exitCode) => {
      if (exitCode !== 0) {
        reject(new Error(`Worker stopped with exit code ${exitCode}`));
      }
    })
  })
}

function formatSettledPromise(settledPromise){
  const { status: resolution, value } = settledPromise;
  const isResolved = resolution === "fulfilled";

  const status = isResolved ? "resolved" : "error";
  const data = isResolved ? value : null;

  return { status, data };
}
const performCalculations = async () => {
  const numOfCPUCores = os.cpus().length;
  const fibonacciStartNum = 10;
  const fibonacciPromises = Array(numOfCPUCores).fill(null).map((_, index) => (
    nthFibonacci(fibonacciStartNum + index)
  ))

  const settledPromises = await Promise.allSettled(fibonacciPromises);
  const formattedOutput = settledPromises.map(item => formatSettledPromise(item))

  console.log(formattedOutput);
};

await performCalculations();