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
    this.router.get("/search", productController.search);
  }
  getRouter() {
    return this.router;
  }
}

export default new ProductRouter();
