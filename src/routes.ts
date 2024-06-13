import { Application } from "express";
import path from "path";
import fs from "fs";

export const initializedRoutes = (app: Application) => {
  const modulesDir = path.join(__dirname, "modules");

  initializedController(modulesDir, app);
};

const initializedController = (dir: string, app: Application) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.lstatSync(filePath);

    if (stat.isDirectory()) {
      initializedController(filePath, app);
    } else {
      if (file.endsWith(".controller.ts")) {
        app.use(require(filePath).default);
      }
    }
  });
};
