import { products } from "../database/db";
import { NotFoundError } from "../utils/errors";

export class ProductsRepository {
  async findAll() {
    return products;
  }

  async findById(id: number) {
    const searchproduct = products.find((p) => p.productId == id);

    if (!searchproduct) {
      throw new NotFoundError("Product not found");
    }

    return searchproduct;
  }

  async create(newProduct: any) {
    products.push(newProduct);
    return products;
  }

  async delete(id: number) {
    const index: number = products.findIndex((p) => p.productId == id);

    if (index === -1) {
      throw new NotFoundError("Product not found");
    }

    products.splice(index, 1);

    return products;
  }

  async update(updateData: any, id: number) {
    const product = products.find((p) => p.productId == id);

    if (!product) {
      throw new NotFoundError("Product not found");
    }

    Object.assign(product, updateData);

    return product;
  }

  async increase(listProduct: any) {
    for (let i = 0; i < listProduct.length; i++) {
      const item: any = listProduct[i];
      const product: any = products.find((p) => p.productId == item.productId);

      if (!product) {
        throw new NotFoundError(`Product with ID ${item.productId} not found`);
      }

      product.stockQuantity += Number(item.productQuantity);
    }
  }

  async decrease(listProduct: any) {
    for (let i = 0; i < listProduct.length; i++) {
      const item: any = listProduct[i];
      const product: any = products.find((p) => p.productId == item.productId);

      if (!product) {
        throw new NotFoundError(`Product with ID ${item.productId} not found`);
      }

      if (product.stockQuantity < Number(item.productQuantity)) {
        throw new NotFoundError(
          `Insufficient stock for product ID ${item.productId}. Available: ${product.stockQuantity}, requested: ${item.productQuantity}`
        );
      }

      product.stockQuantity -= Number(item.productQuantity);
    }
  }
}