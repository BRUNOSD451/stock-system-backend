
import { users } from "../database/db";
import { Response } from "express";
export class UserRepository{

    async findAll(){
        return users
    }
    
async findById(id:number){

    return users.find((u)=> u.id == id)

}

async create(user:any){
 
    users.push(user)
return user
}


async delete(id:number){

    const index = users.findIndex((u)=> u.id == id)

    users.splice(index,1)

    return users
}

}