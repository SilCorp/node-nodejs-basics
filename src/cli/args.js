const parseArgs = () => {
  const params = process.argv.slice(2);
  const outputStrings = [];

  for (let i = 0; i < params.length; i += 2) {
    const arg = params[i];
    const param = params[i+1];

    const outputString = `${arg} is ${param}`
    outputStrings.push(outputString);
  }
  const outputString = outputStrings.join(", ");
  process.stdout.write(outputString + "\n");
};

parseArgs();