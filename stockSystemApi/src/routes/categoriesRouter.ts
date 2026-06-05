import { Router, Request, Response } from "express";
import { CategoriesController } from "../controllers/categoriesController";

const CategoriesRouter = Router();
const categoriesController =  new CategoriesController()

CategoriesRouter.get("/",(req: Request, res:Response)  =>    
    categoriesController.findAll(req,res)
)

CategoriesRouter.get("/:id",(req:Request , res:Response)=>{
    categoriesController.findById(req,res)
})

CategoriesRouter.post("/",(req:Request , res:Response)=>{
    categoriesController.create(req,res)
})

CategoriesRouter.delete("/:id",(req:Request,res:Response)=>{
    categoriesController.delete(req,res)
})

CategoriesRouter.patch("/update/:id",(req:Request, res:Response)=>{
    return categoriesController.update(req,res)
})

export default CategoriesRouter
