
import { users } from "../database/db";

export class UserRepository{

    async findAll(){
        return users
    }
    
async findById(id:number){

    return users.find((u)=> u.userId == id)

}

async create(user:any){
 
    users.push(user)
return user
}


async delete(id:number){

    const index = users.findIndex((u)=> u.userId == id)

    users.splice(index,1)

    return users
}


async update(updateData:any , id : number){

const user = users.find((u)=>u.userId==id)

if(!user){
    return null
}

Object.assign(user , updateData)


return user
}


}