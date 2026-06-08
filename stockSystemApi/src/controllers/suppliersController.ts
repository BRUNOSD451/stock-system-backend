import { SuppliersService } from "../services/suppliersServices";
import { Response,Request } from "express";


export class SupplierController{

 private supplierService  = new SuppliersService()


async findAll(req:Request , res:Response){
const suppliers = await this.supplierService.findAll()

return res.status(200).json(suppliers)
}


async findById(req:Request , res:Response){

const id : number = Number(req.body.id)

const supplier = await this.supplierService.findById(id)

return res.status(200).json(supplier)

}



async create(req:Request , res:Response){

const newSupplier : any = req.body

const suppliers = await this.supplierService.create(newSupplier)

return res.status(201).json(suppliers)

}


async delete(req:Request ,res:Response){

const id :number = Number(req.params.id)

const suppliers = await this.supplierService.delete(id)

return res.status(200).json(suppliers)

}

async update(req:Request, res:Response){

    const id:number = Number(req.params.id)
    const updateData:any = req.body

    const supplier = await this.supplierService.update(updateData, id)

    return res.status(200).json(supplier)

}

}
