
function  getListOfEnvParams(prefix = "") {
  return Object.keys(process.env).filter((paramName) => paramName.startsWith(prefix));
}
const parseEnv = () => {
  const rssParams = getListOfEnvParams("RSS_");
  const outputStrings = rssParams.map((paramName) => {
    const paramValue = process.env[paramName];

    return `${paramName}=${paramValue}`;
  });
  const outputString = outputStrings.join("; ");

  process.stdout.write(outputString + "\n");
};

parseEnv();