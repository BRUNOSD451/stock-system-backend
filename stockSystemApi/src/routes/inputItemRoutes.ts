import { Router, Request, Response } from "express";
import { InputItemController } from "../controllers/inputItemController";

const InputItemRouter = Router();
const inputItemController = new InputItemController();

InputItemRouter.get("/", (req: Request, res: Response) =>
    inputItemController.findAll(req, res)
);

InputItemRouter.get("/:id", (req: Request, res: Response) => {
    return inputItemController.findById(req, res);
});

InputItemRouter.post("/input", (req: Request, res: Response) => {
    return inputItemController.create(req, res);
});

InputItemRouter.delete("/:id", (req: Request, res: Response) => {
    return inputItemController.delete(req, res);
});

InputItemRouter.patch("/update/:id", (req: Request, res: Response) => {
    return inputItemController.update(req, res);
});

export default InputItemRouter;
