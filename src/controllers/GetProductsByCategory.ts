import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class GetProductsByCategory {
  async handle(request: Request, response: Response) {
    const { id_category } = request.params;

    const products = await prismaClient.productCategory.findMany({
      where: {
        id_category,
      },
      select: {
        product: true,
      },
    });

    return response.json(products);
  }
}
