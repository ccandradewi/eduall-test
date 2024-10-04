import { Request } from "express";
import { prisma } from "../libs/prisma";

class ProductService {
  async getAllProduct(req: Request) {
    try {
      const product = await prisma.laptop_prices.findMany();
      return product;
    } catch (error) {
      throw new Error(`Error fetching orders: ${error}`);
    }
  }
  async searchProducts(keyword: string) {
    return await prisma.laptop_prices.findMany({
      where: {
        OR: [{ brand: { contains: keyword } }],
      },
    });
  }
}
export default new ProductService();
