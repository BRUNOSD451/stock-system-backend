import { Router, Request, Response } from "express";
import { UserController } from "../controllers/userController";

const UserRouter = Router();

const userController = new UserController();

UserRouter.get("/", (req:Request, res:Response) =>
  userController.getAll(req, res)
);

UserRouter.get("/:id", (req:Request, res:Response) => {
  return userController.findById(req, res)
})

UserRouter.post("/",(req:Request,res:Response ) =>{
    return userController.create(req,res)
})

UserRouter.delete("/:id",(req:Request,res:Response)=>{

    return userController.delete(req,res)
})


UserRouter.patch("/update/:id",(req:Request,res:Response)=>{
  return userController.update(req,res)
})

export default UserRouter;