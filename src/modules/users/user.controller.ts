import BaseController from "../../common/base-controller";
import { UserService } from "./user.service";

class UserController extends BaseController {
  protected initializedRoutes(): void {
    this.router.get("/all_users", this.service.getUsers);
    this.router.post("/create_user", this.service.createUser);
  }
}

export default new UserController({
  service: new UserService(),
}).getRouter();
