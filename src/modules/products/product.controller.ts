import BaseController from "../../common/base-controller";
import { ProductService } from "./product.service";

class ProductController extends BaseController {
  protected initializedRoutes(): void {
    this.router.get("/all", this.service.getProducts);
    this.router.put("/:id", this.service.updateProduct);
    this.router.post("/add", this.service.createProduct);
  }
}

export default new ProductController({
  service: new ProductService(),
}).getRouter();
