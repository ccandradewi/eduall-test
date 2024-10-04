import { Router } from "express";
import productController from "../controllers/product.controller";

class ProductRouter {
  private router: Router;
  constructor() {
    this.router = Router();
    this.initializedRoutes();
  }
  initializedRoutes() {
    this.router.get("/", productController.getAll);
  }
  getRouter() {
    return this.router;
  }
}

export default new ProductRouter();
