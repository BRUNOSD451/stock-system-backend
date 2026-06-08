import { suppliers } from "../database/db";


export class SuppliersRepository{

    async findAll(){
        return suppliers
    }

async findById(id:number){

    const searchsupplier = suppliers.find((s) => s.supplierId == id )

    return searchsupplier

}



async create(newSupplier:any){

suppliers.push(newSupplier)
return suppliers

}



async delete(id:number){

const index : number = suppliers.findIndex((s)=>s.supplierId == id)

suppliers.splice(index,1)

return suppliers
}

async update(updateData:any, id:number){

const supplier = suppliers.find((s)=> s.supplierId == id)

if(!supplier){
    return null
}

Object.assign(supplier, updateData)

return supplier

}

}