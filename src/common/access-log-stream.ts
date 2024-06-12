import fs from "fs";
import path from "path";

const rootDir = path.join(__dirname, "..", "..");

const logsDir = path.join(rootDir, "logs");

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

const logFilePath = path.join(logsDir, "access.log");

const accessLogStream = fs.createWriteStream(logFilePath, {
  flags: "a",
});

export default accessLogStream;
