
export interface User {
    userId: number;
    name: string;
    cpf: string;
    position: 'admin' | 'supervisor' | 'funcionario';
    password: number | string;
}

export interface Category {
    categoryId: number; 
    name: string;
}

export interface Product {
    productId: number;
    name: string;
    description: string | null;
    stockQuantity: number;
    categoryId: number | null;
  
}

export interface Supplier {
    supplierId: number;
    name: string;
    cnpj: string | null;
    phone: string | null;
    
}

export interface StockInput {
    stockInputId: number; 
    supplierId: number;
    inputDate: Date | string;

}

export interface InputItem {
    inputItemId: number;
    stockInputId: number; 
    productId: number;
    quantity: number;
   
}

export interface StockOutput {
    stockOutputId: number;
    outputDate: Date | string;
    observation: string | null;

}

export interface OutputItem {
    outputItemId: number; 
    stockOutputId: number; 
    productId: number;
    quantity: number;
   
}


export const users: User[] = [
    {
        userId: 1,
        name: "bruno",
        cpf: "10974311936",
        position: "admin",
        password: 12345
    },
    {
        userId: 2,
        name: "ana",
        cpf: "1211292930",
        position: "supervisor",
        password: 12345
    },
    {
        userId: 3,
        name: "mateus",
        cpf: "1029384833",
        position: "funcionario",
        password: 12345
    }
];

export const categories: Category[] = [
    { categoryId: 1, name: "Alimentos" },
    { categoryId: 2, name: "Higiene" },
    { categoryId: 3, name: "Eletrônicos" }
];

export const products: Product[] = [
    {
        productId: 1,
        name: "Arroz Integral 1kg",
        description: "Arroz integral tipo 1",
        stockQuantity: 50,
        categoryId: 1,
     
    },
    {
        productId: 2,
        name: "Shampoo Neutro",
        description: "Shampoo para todos os tipos de cabelo",
        stockQuantity: 30,
        categoryId: 2,
    
    },
    {
        productId: 3,
        name: "Mouse Sem Fio",
        description: "Mouse óptico usb bluetooth",
        stockQuantity: 15,
        categoryId: 3,
    }
];

export const suppliers: Supplier[] = [
    {
        supplierId: 1,
        name: "Rodinei Madeira",
        cnpj: "12346532223",
        phone: "41997441148",
     
    },
    {
        supplierId: 2,
        name: "Madeiras São José",
        cnpj: "98765432000199",
        phone: "4133445566",
       
    }
];

export const stockInputs: StockInput[] = [
 
];

export const inputItems: InputItem[] = [
  
];

export const stockOutputs: StockOutput[] = [
  
];

export const outputItems: OutputItem[] = [
   
];

