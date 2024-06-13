import API_VERSION from "@/utils/version";
import BaseController from "@/common/base-controller";
import { ProductService } from "./product.service";

class ProductController extends BaseController {
  protected initializedRoutes(): void {
    this.router.get(`${API_VERSION}/product/all`, this.service.getProducts);
    this.router.put(`${API_VERSION}/product/:id`, this.service.updateProduct);
    this.router.post(
      `${API_VERSION}/product/create_product`,
      this.service.createProduct
    );
  }
}

export default new ProductController({
  service: new ProductService(),
}).getRouter();
