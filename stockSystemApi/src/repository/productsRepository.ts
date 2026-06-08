import { products } from "../database/db";



export class ProductsRepository{

async findAll(){
    return products
}

async findById(id:number){

const searchproduct = products.find((p) => p.productId == id)

return searchproduct 
}


async create(newProduct:any){

products.push(newProduct)

return products

}

async delete(id:number){

const index : number = products.findIndex((p)=> p.productId == id)

products.splice(index, 1)

return products

}

async update(updateData:any, id:number){

const product = products.find((p)=> p.productId == id)

if(!product){
    return null
}

Object.assign(product, updateData)

return product



}


async increase(listProduct:any){


for(let i = 0 ; i< listProduct.length ; i++){

const item : any = listProduct[i]       
const product :any = products.find((p)=>p.productId == item.productId) 



product.stockQuantity += Number(item.productQuantity)



}


}


async decrease(listProduct:any){

for(let i = 0 ; i< listProduct.length ; i++){

const item : any = listProduct[i]       
const product :any = products.find((p)=>p.productId == item.productId) 

product.stockQuantity -= Number(item.productQuantity)



}

}




}