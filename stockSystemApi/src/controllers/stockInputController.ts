import { Request, Response } from "express";
import { StockInputService } from "../services/stockInputService";

export class StockInputController {
    private stockInputService = new StockInputService();

    async findAll(req: Request, res: Response) {
        const stockInputs = await this.stockInputService.findAll();
        return res.status(200).json(stockInputs);
    }

    async findById(req: Request, res: Response) {
        const id: number = Number(req.params.id);
        const stockInput = await this.stockInputService.findById(id);
        if (!stockInput) {
            return res.status(404).json({ error: "StockInput not found" });
        }
        return res.status(200).json(stockInput);
    }

    async input(req: Request, res: Response) {
        const newStockInput: any = req.body;
        const stockInput = await this.stockInputService.input(newStockInput);
        return res.status(201).json(stockInput);
    }

    async delete(req: Request, res: Response) {
        const id: number = Number(req.params.id);
        const result = await this.stockInputService.delete(id);
        return res.status(200).json(result);
    }

    async update(req: Request, res: Response) {
        const id: number = Number(req.params.id);
        const updateData: any = req.body;
        const stockInput = await this.stockInputService.update(updateData, id);
        return res.status(200).json(stockInput);
    }
}
