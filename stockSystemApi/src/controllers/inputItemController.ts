import { Request, Response } from "express";
import { InputItemService } from "../services/inputItemService";

export class InputItemController {
    private inputItemService = new InputItemService();

    async findAll(req: Request, res: Response) {
        const inputItems = await this.inputItemService.findAll();
        return res.status(200).json(inputItems);
    }

    async findById(req: Request, res: Response) {
        const id: number = Number(req.params.id);
        const inputItem = await this.inputItemService.findById(id);
        if (!inputItem) {
            return res.status(404).json({ error: "InputItem not found" });
        }
        return res.status(200).json(inputItem);
    }

    async create(req: Request, res: Response) {
        const newInputItem: any = req.body;
        const inputItem = await this.inputItemService.create(newInputItem);
        return res.status(201).json(inputItem);
    }

    async delete(req: Request, res: Response) {
        const id: number = Number(req.params.id);
        const result = await this.inputItemService.delete(id);
        return res.status(200).json(result);
    }

    async update(req: Request, res: Response) {
        const id: number = Number(req.params.id);
        const updateData: any = req.body;
        const inputItem = await this.inputItemService.update(updateData, id);
        return res.status(200).json(inputItem);
    }
}
