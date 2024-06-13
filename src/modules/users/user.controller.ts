import API_VERSION from "@/utils/version";
// import API_VERSION from "../../utils/version";
import BaseController from "@/common/base-controller";
import { UserService } from "./user.service";

class UserController extends BaseController {
  protected initializedRoutes(): void {
    this.router.put(`${API_VERSION}/user/:userId`, this.service.updateUser);
    this.router.get(`${API_VERSION}/user/all_users`, this.service.getUsers);
    this.router.get(`${API_VERSION}/user/:userId`, this.service.getUserById);
    this.router.post(
      `${API_VERSION}/user/create_user`,
      this.service.createUser
    );
  }
}

export default new UserController({
  service: new UserService(),
}).getRouter();
