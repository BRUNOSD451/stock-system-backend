import { categories } from "../database/db";

export class CategoryRepository{

async findAll(){
    return categories
}

async findById(id:number){
    const searchCategory = categories.find((c)=> c.categoryId == id )

    return searchCategory
}

async delete(id:number){
    const indexDelete = categories.findIndex((c)=> c.categoryId == id)
    
    categories.splice(indexDelete , 1)

    return categories
}


async create(user:any){

    categories.push(user)
return categories
}

async update(updateData:any, id:number){

const category = categories.find((c)=> c.categoryId == id)

if(!category){
    return null
}

Object.assign(category, updateData)

return category

}

}
