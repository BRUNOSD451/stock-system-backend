import { Request,Response } from "express";
import { UserService } from "../services/userService";
export class UserController{
private userService =  new UserService();


async getAll(req:Request, res:Response){

const users = await this.userService.findAll()

return res.status(200).json(users)

}

async findById(req:Request, res:Response){
    const id: number =  Number(req.params.id)
    const user = await this.userService.findById(id)
    if(!user) {
        return res.status(404).json({error: "User not found"})
    }
    return res.status(200).json(user)
}


async create(req:Request , res:Response){

const newuser = req.body

const user = await this.userService.create(newuser)
return res.status(200).json(user)

}

async delete(req:Request,res:Response){
const id: number = Number(req.params.id)

const users = await this.userService.delete(id)
return res.status(200).json(users)
}

}