import { Request, Response } from "express";
import { InputItemService } from "../services/inputItemService";

export class InputItemController {
  private inputItemService = new InputItemService();

  async findAll(req: Request, res: Response) {
    try {
      const inputItems = await this.inputItemService.findAll();
      return res.status(200).json(inputItems);
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

      const inputItem = await this.inputItemService.findById(id);
      return res.status(200).json(inputItem);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const newInputItem: any = req.body;

      if (!newInputItem || Object.keys(newInputItem).length === 0) {
        return res.status(400).json({ error: "Request body is required" });
      }

      const inputItem = await this.inputItemService.create(newInputItem);
      return res.status(201).json(inputItem);
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

      const result = await this.inputItemService.delete(id);
      return res.status(200).json(result);
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

      const inputItem = await this.inputItemService.update(updateData, id);
      return res.status(200).json(inputItem);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}
