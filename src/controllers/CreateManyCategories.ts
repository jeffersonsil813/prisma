import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateManyCategories {
  async handle(request: Request, response: Response) {
    const { categories } = request.body;

    const newCategories = await prismaClient.category.createMany({
      data: categories,
    });

    return response.json(newCategories);
  }
}
