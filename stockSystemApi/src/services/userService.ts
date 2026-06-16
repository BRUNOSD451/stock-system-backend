import { UserRepository } from "../repository/userRepository";
export class UserService{
private userRepository = new UserRepository()

async findAll(){

    return  this.userRepository.findAll()
}

async findById(id:number){
return  this.userRepository.findById(id)
}


async create(userdata:any){
return this.userRepository.create(userdata)

}

async delete(id:number){
    return this.userRepository.delete(id)
}


async update(updateData:any , id:number){

    return this.userRepository.update(updateData,id)
}
}