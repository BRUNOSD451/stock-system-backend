import { Request, Response } from "express";
import { StockInputService } from "../services/stockInputService";

export class StockInputController {
  private stockInputService = new StockInputService();

  async findAll(req: Request, res: Response) {
    try {
      const stockInputs = await this.stockInputService.findAll();
      return res.status(200).json(stockInputs);
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

      const stockInput = await this.stockInputService.findById(id);
      return res.status(200).json(stockInput);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  async input(req: Request, res: Response) {
    try {
      const newStockInput: any = req.body;

      if (!newStockInput || Object.keys(newStockInput).length === 0) {
        return res.status(400).json({ error: "Request body is required" });
      }

      const stockInput = await this.stockInputService.input(newStockInput);
      return res.status(201).json(stockInput);
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

      const result = await this.stockInputService.delete(id);
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

      const stockInput = await this.stockInputService.update(updateData, id);
      return res.status(200).json(stockInput);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}
