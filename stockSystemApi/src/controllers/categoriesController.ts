import { CategoriesService } from "../services/categoriesServices";
import { Request,Response } from "express";



export class CategoriesController{

    private categoriesService = new CategoriesService()
    
    async findAll(req:Request,res:Response){
        const categories = await this.categoriesService.findAll()
        return res.status(200).json(categories)
    }


async findById( req:Request ,res:Response){
const id : number = Number(req.params.id)

    const searchCategory = await this.categoriesService.findById(id)

    return res.status(201).json(searchCategory)
}


async delete(req:Request , res:Response){
    const id : number = Number(req.params.id)
    const categories = await this.categoriesService.delete(id)

return res.status(200).json(categories)

}

async create(req:Request, res:Response){
const user : any = req.body

const categories = await this.categoriesService.create(user)
return res.status(201).json(categories)
}

async update(req:Request, res:Response){

    const id:number = Number(req.params.id)
    const updateData:any = req.body

    const category = await this.categoriesService.update(updateData, id)

    return res.status(200).json(category)

}

}