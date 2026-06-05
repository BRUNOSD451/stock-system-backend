import { Request, Response } from "express";
import { StockOutputService } from "../services/stockOutputService";

export class StockOutputController {
    private stockOutputService = new StockOutputService();

    async findAll(req: Request, res: Response) {
        const stockOutputs = await this.stockOutputService.findAll();
        return res.status(200).json(stockOutputs);
    }

    async findById(req: Request, res: Response) {
        const id: number = Number(req.params.id);
        const stockOutput = await this.stockOutputService.findById(id);
        if (!stockOutput) {
            return res.status(404).json({ error: "StockOutput not found" });
        }
        return res.status(200).json(stockOutput);
    }

    async output(req: Request, res: Response) {
        const newStockOutput: any = req.body;
        const stockOutput = await this.stockOutputService.output(newStockOutput);
        return res.status(201).json(stockOutput);
    }

    async delete(req: Request, res: Response) {
        const id: number = Number(req.params.id);
        const result = await this.stockOutputService.delete(id);
        return res.status(200).json(result);
    }

    async update(req: Request, res: Response) {
        const id: number = Number(req.params.id);
        const updateData: any = req.body;
        const stockOutput = await this.stockOutputService.update(updateData, id);
        return res.status(200).json(stockOutput);
    }
}
