import { inputItems } from "../database/db";

export class InputItemRepository {
    async findAll() {
        return inputItems;
    }

    async findById(id: number) {
        return inputItems.find((i) => i.inputItemId == id);
    }

    async create(newInputItem: any) {
        inputItems.push(newInputItem);
        return inputItems;
    }

    async delete(id: number) {
        const index: number = inputItems.findIndex((i) => i.inputItemId == id);
        inputItems.splice(index, 1);
        return inputItems;
    }

    async update(updateData: any, id: number) {
        const inputItem = inputItems.find((i) => i.inputItemId == id);
        if (!inputItem) {
            return null;
        }
        Object.assign(inputItem, updateData);
        return inputItem;
    }

async input(listProducts:any , stockInputId :number){

for(let i = 0 ; i < listProducts.length; i++ ){
const item = listProducts[i]

const newData ={
      "inputItemId": 10,
    "stockInputId": stockInputId, 
    "productId": item.productId,
    "quantity": item.productQuantity,
}

inputItems.push(newData)

}

}


}
