import { Router, Request, Response } from "express";
import { StockInputController } from "../controllers/stockInputController";

const StockInputRouter = Router();
const stockInputController = new StockInputController();

StockInputRouter.get("/", (req: Request, res: Response) =>
    stockInputController.findAll(req, res)
);

StockInputRouter.get("/:id", (req: Request, res: Response) => {
    return stockInputController.findById(req, res);
});

StockInputRouter.post("/input", (req: Request, res: Response) => {
    return stockInputController.input(req, res);
});

StockInputRouter.delete("/:id", (req: Request, res: Response) => {
    return stockInputController.delete(req, res);
});

StockInputRouter.patch("/update/:id", (req: Request, res: Response) => {
    return stockInputController.update(req, res);
});

export default StockInputRouter;
