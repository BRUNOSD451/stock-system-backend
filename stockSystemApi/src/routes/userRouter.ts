import { Router, Request, Response, response } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();

const userController = new UserController();

router.get("/", (req:Request, res:Response) =>
  userController.getAll(req, res)
);

router.get("/:id", (req:Request, res:Response) => {
  return userController.findById(req, res)
})

router.post("/",(req:Request,res:Response ) =>{
    return userController.create(req,res)
})

router.delete("/:id",(req:Request,res:Response)=>{

    return userController.delete(req,res)
})

export default router;