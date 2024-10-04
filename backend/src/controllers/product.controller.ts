import { NextFunction, Request, Response } from "express";
import productService from "../services/product.service";

class ProductController {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const data = await productService.getAllProduct(req);
      return res.send({
        message: "fetch all product",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
  async search(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { keyword } = req.query;
      if (!keyword || typeof keyword !== "string") {
        return res.status(400).json({ message: "Keyword is required" });
      }

      const products = await productService.searchProducts(keyword);
      res.status(200).send(products);
    } catch (error) {
      next(error);
    }
  }
}
export default new ProductController();
