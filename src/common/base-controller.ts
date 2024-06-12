import { Router } from "express";

abstract class BaseController {
  protected router: Router = Router();

  protected service: any;

  constructor({ service }: { service: any }) {
    this.service = service;
    this.initializedRoutes();
  }

  protected abstract initializedRoutes(): void;

  public getRouter(): Router {
    return this.router;
  }
}

export default BaseController;
