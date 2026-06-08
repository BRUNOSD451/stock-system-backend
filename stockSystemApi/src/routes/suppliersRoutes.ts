import { Router,Request,Response } from "express";
import { SupplierController } from "../controllers/suppliersController";

const SupplierRouter = Router()

const supplierController = new SupplierController()

SupplierRouter.get("/",(req:Request,res:Response)=>{
return supplierController.findAll(req,res)
})

SupplierRouter.get("/:id", (req:Request,res:Response)=>{
    return supplierController.findById(req,res)
})

SupplierRouter.post("/create",(req:Request,res:Response )=>{
    return supplierController.create(req,res)
})

SupplierRouter.delete("/:id",(req:Request , res:Response)=>{
    return supplierController.delete(req,res)
})

SupplierRouter.patch("/update/:id",(req:Request, res:Response)=>{
    return supplierController.update(req,res)
})

export default SupplierRouter