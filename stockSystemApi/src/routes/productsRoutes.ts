import { Router, Request , Response } from "express";
import { ProductsController } from "../controllers/productsController";


const ProductsRouter = Router()

const productsController = new ProductsController()

ProductsRouter.get("/", (req:Request,res:Response)=>{
productsController.findAll(req,res)
})

ProductsRouter.get("/:id" , (req:Request,res:Response)=>{
    productsController.findById(req,res)
})

ProductsRouter.post("/create",(req:Request,res:Response)=>{
    productsController.create(req,res)
})

ProductsRouter.delete("/:id",(req:Request,res:Response)=>{
    productsController.delete(req,res)
})

ProductsRouter.patch("/update/:id",(req:Request,res:Response)=>{
    return productsController.update(req,res)
})

export default ProductsRouter