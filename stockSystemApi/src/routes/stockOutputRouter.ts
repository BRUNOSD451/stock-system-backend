import { Router, Request, Response } from "express";
import { StockOutputController } from "../controllers/stockOutputController";

const StockOutputRouter = Router();
const stockOutputController = new StockOutputController();

StockOutputRouter.get("/", (req: Request, res: Response) =>
    stockOutputController.findAll(req, res)
);

StockOutputRouter.get("/:id", (req: Request, res: Response) => {
    return stockOutputController.findById(req, res);
});

StockOutputRouter.post("/output", (req: Request, res: Response) => {
    return stockOutputController.output(req, res);
});

StockOutputRouter.delete("/:id", (req: Request, res: Response) => {
    return stockOutputController.delete(req, res);
});

StockOutputRouter.patch("/update/:id", (req: Request, res: Response) => {
    return stockOutputController.update(req, res);
});

export default StockOutputRouter;
