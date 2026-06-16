import { Request, Response } from "express";
import { StockOutputService } from "../services/stockOutputService";

export class StockOutputController {
  private stockOutputService = new StockOutputService();

  async findAll(req: Request, res: Response) {
    try {
      const stockOutputs = await this.stockOutputService.findAll();
      return res.status(200).json(stockOutputs);
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

      const stockOutput = await this.stockOutputService.findById(id);
      return res.status(200).json(stockOutput);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  async output(req: Request, res: Response) {
    try {
      const newStockOutput: any = req.body;

      if (!newStockOutput || Object.keys(newStockOutput).length === 0) {
        return res.status(400).json({ error: "Request body is required" });
      }

      const stockOutput = await this.stockOutputService.output(newStockOutput);
      return res.status(201).json(stockOutput);
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

      const result = await this.stockOutputService.delete(id);
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

      const stockOutput = await this.stockOutputService.update(updateData, id);
      return res.status(200).json(stockOutput);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}
