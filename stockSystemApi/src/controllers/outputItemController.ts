import { Request, Response } from "express";
import { OutputItemService } from "../services/outputItemService";

export class OutputItemController {
  private outputItemService = new OutputItemService();

  async findAll(req: Request, res: Response) {
    try {
      const outputItems = await this.outputItemService.findAll();
      return res.status(200).json(outputItems);
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

      const outputItem = await this.outputItemService.findById(id);
      return res.status(200).json(outputItem);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const newOutputItem: any = req.body;

      if (!newOutputItem || Object.keys(newOutputItem).length === 0) {
        return res.status(400).json({ error: "Request body is required" });
      }

      const outputItem = await this.outputItemService.create(newOutputItem);
      return res.status(201).json(outputItem);
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

      const result = await this.outputItemService.delete(id);
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

      const outputItem = await this.outputItemService.update(updateData, id);
      return res.status(200).json(outputItem);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}
