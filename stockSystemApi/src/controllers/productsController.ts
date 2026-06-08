import { Response, Request } from "express";
import { ProductsService } from "../services/productsServices";


export class ProductsController{
    private productsService = new ProductsService()

async findAll(req:Request, res:Response){

    const products = await this.productsService.findAll()

return    res.status(200).json(products)
}


async findById(req:Request , res:Response){

    const id: number = Number(req.params.id)
const product = await this.productsService.findById(id)

 return res.status(200).json(product)

}

async create(req:Request, res:Response){

    const newProduct :any = req.body

const produtos = await this.productsService.create(newProduct)

return res.status(201).json(produtos)

}


async delete(req:Request, res:Response){

    const id :number =  Number(req.params.id) 

const produtos = await this.productsService.delete(id)

return res.status(201).json(produtos)

}

async update(req:Request, res:Response){

    const id:number = Number(req.params.id)
    const updateData:any = req.body

    const product = await this.productsService.update(updateData, id)

    return res.status(200).json(product)

}


}