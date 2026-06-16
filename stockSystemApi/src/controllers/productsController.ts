import { Response, Request } from "express";
import { ProductsService } from "../services/productsServices";

export class ProductsController {
  private productsService = new ProductsService();

  async findAll(req: Request, res: Response) {
    try {
      const products = await this.productsService.findAll();
      return res.status(200).json(products);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id: number = Number(req.params.id);

      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID parameter" });
      }

      const product = await this.productsService.findById(id);
      return res.status(200).json(product);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const newProduct: any = req.body;

      if (!newProduct || Object.keys(newProduct).length === 0) {
        return res.status(400).json({ error: "Request body is required" });
      }

      const produtos = await this.productsService.create(newProduct);
      return res.status(201).json(produtos);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id: number = Number(req.params.id);

      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID parameter" });
      }

      const produtos = await this.productsService.delete(id);
      return res.status(200).json(produtos);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id: number = Number(req.params.id);

      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID parameter" });
      }

      const updateData: any = req.body;

      if (!updateData || Object.keys(updateData).length === 0) {
        return res.status(400).json({ error: "Request body is required" });
      }

      const product = await this.productsService.update(updateData, id);
      return res.status(200).json(product);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}
