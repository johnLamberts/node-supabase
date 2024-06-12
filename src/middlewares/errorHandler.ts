import { CustomError } from "../errors/customError";
import { NextFunction, Request, Response } from "express";

const errorHandler = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error.message);

  if (error instanceof CustomError) {
    const { statusCode, errors, logging } = error;

    if (logging) {
      console.error(
        JSON.stringify(
          {
            code: error.statusCode,
            error: error.errors,
            stack: error.stack,
          },
          null,
          2
        )
      );
    }

    return res.status(statusCode).send({ errors });
  }

  console.error(JSON.stringify(error, null, 2));

  return res
    .status(500)
    .send({ errors: [{ message: "Something went wrong" }] });
};

export default errorHandler;
