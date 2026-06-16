import { Router, Request, Response } from "express";
import { OutputItemController } from "../controllers/outputItemController";

const OutputItemRouter = Router();
const outputItemController = new OutputItemController();

OutputItemRouter.get("/", (req: Request, res: Response) =>
    outputItemController.findAll(req, res)
);

OutputItemRouter.get("/:id", (req: Request, res: Response) => {
    return outputItemController.findById(req, res);
});

OutputItemRouter.post("/create", (req: Request, res: Response) => {
    return outputItemController.create(req, res);
});

OutputItemRouter.delete("/:id", (req: Request, res: Response) => {
    return outputItemController.delete(req, res);
});

OutputItemRouter.patch("/update/:id", (req: Request, res: Response) => {
    return outputItemController.update(req, res);
});

export default OutputItemRouter;
