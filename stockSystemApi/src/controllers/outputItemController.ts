import { Request, Response } from "express";
import { OutputItemService } from "../services/outputItemService";

export class OutputItemController {
    private outputItemService = new OutputItemService();

    async findAll(req: Request, res: Response) {
        const outputItems = await this.outputItemService.findAll();
        return res.status(200).json(outputItems);
    }

    async findById(req: Request, res: Response) {
        const id: number = Number(req.params.id);
        const outputItem = await this.outputItemService.findById(id);
        if (!outputItem) {
            return res.status(404).json({ error: "OutputItem not found" });
        }
        return res.status(200).json(outputItem);
    }

    async create(req: Request, res: Response) {
        const newOutputItem: any = req.body;
        const outputItem = await this.outputItemService.create(newOutputItem);
        return res.status(201).json(outputItem);
    }

    async delete(req: Request, res: Response) {
        const id: number = Number(req.params.id);
        const result = await this.outputItemService.delete(id);
        return res.status(200).json(result);
    }

    async update(req: Request, res: Response) {
        const id: number = Number(req.params.id);
        const updateData: any = req.body;
        const outputItem = await this.outputItemService.update(updateData, id);
        return res.status(200).json(outputItem);
    }
}
