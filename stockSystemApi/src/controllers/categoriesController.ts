import { CategoriesService } from "../services/categoriesServices";
import { Request, Response } from "express";

export class CategoriesController {
  private categoriesService = new CategoriesService();

  async findAll(req: Request, res: Response) {
    try {
      const categories = await this.categoriesService.findAll();
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id: number = Number(req.params.id);

      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID parameter" });
      }

      const searchCategory = await this.categoriesService.findById(id);
      return res.status(200).json(searchCategory);
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

      const categories = await this.categoriesService.delete(id);
      return res.status(200).json(categories);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data: any = req.body;

      if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({ error: "Request body is required" });
      }

      const categories = await this.categoriesService.create(data);
      return res.status(201).json(categories);
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

      const category = await this.categoriesService.update(updateData, id);
      return res.status(200).json(category);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}
