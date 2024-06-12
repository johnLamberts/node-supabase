import BaseController from "@/common/base-controller";
import { UserService } from "./user.service";

class UserController extends BaseController {
  protected initializedRoutes(): void {
    this.router.get("/all_users", this.service.getUsers);
  }
}

export default new UserController({
  service: new UserService(),
});
