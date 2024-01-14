import fs from "fs/promises";

async function logging(req, res, next) {
  try {
    const buffer = await fs.readFile("./data/logs.txt");

    const strLogHistory = buffer.toString().split("\n");

    strLogHistory.push(
      `IP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}`
    );

    const newLogsHistory = strLogHistory.join("\n");

    await fs.writeFile("./data/log.txt", newLogsHistory);

    console.log("File has been rewritten successfully");
  } catch (error) {
    console.log(error);
  }
  next();
}

export default logging;
