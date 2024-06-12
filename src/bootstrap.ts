import { Application } from "express";

/**
 * Initializes the application
 * @param app - The express "Application"
 */

const Bootstrap = async (app: Application) => {
  const PORT: Number = parseInt(`${process.env.PORT}`, 10) || 8000;

  app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`);
  });
};

export default Bootstrap;
