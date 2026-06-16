
export interface User {
    userId: number;
    userName: string;
    userCpf: string;
    userPosition: 'administrador' | 'supervisor' | 'funcionario';
    password: number | string;
}

export interface Category {
    categoryId: number; 
    categoryName: string;
}

export interface Product {
    productId: number;
    productName: string;
    productDescription: string | null;
    stockQuantity: number;
    categoryId: number | null;
  
}

export interface Supplier {
    supplierId: number;
    supplierName: string;
    supplierCnpj: string | null;
    supplierPhone: string | null;
    
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
    outputObservation: string | null;

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
        userName: "bruno",
        userCpf: "10974311936",
        userPosition: "administrador",
        password: 12345
    },
 
  
];

export const categories: Category[] = [
    { categoryId: 1, categoryName: "Alimentos" },
    { categoryId: 2, categoryName: "Higiene" },
   
];

export const products: Product[] = [
    {
        productId: 1,
        productName: "Arroz Integral 1kg",
        productDescription: "Arroz integral tipo 1",
        stockQuantity: 50,
        categoryId: 1,
     
    },
   
];

export const suppliers: Supplier[] = [
    {
        supplierId: 1,
        supplierName: "Rodinei Madeira",
        supplierCnpj: "12346532223",
        supplierPhone: "41930475983",
     
    },
   
];

export const stockInputs: StockInput[] = [
 
];

export const inputItems: InputItem[] = [
  
];

export const stockOutputs: StockOutput[] = [
  
];

export const outputItems: OutputItem[] = [
   
];

