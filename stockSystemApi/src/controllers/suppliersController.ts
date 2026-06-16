import { SuppliersService } from "../services/suppliersServices";
import { Response, Request } from "express";

export class SupplierController {
  private supplierService = new SuppliersService();

  async findAll(req: Request, res: Response) {
    try {
      const suppliers = await this.supplierService.findAll();
      return res.status(200).json(suppliers);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id: number = Number(req.params.id);

      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID parameter" });
      }

      const supplier = await this.supplierService.findById(id);
      return res.status(200).json(supplier);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const newSupplier: any = req.body;

      if (!newSupplier || Object.keys(newSupplier).length === 0) {
        return res.status(400).json({ error: "Request body is required" });
      }

      const suppliers = await this.supplierService.create(newSupplier);
      return res.status(201).json(suppliers);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id: number = Number(req.params.id);

      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID parameter" });
      }

      const suppliers = await this.supplierService.delete(id);
      return res.status(200).json(suppliers);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id: number = Number(req.params.id);

      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID parameter" });
      }

      const updateData: any = req.body;

      if (!updateData || Object.keys(updateData).length === 0) {
        return res.status(400).json({ error: "Request body is required" });
      }

      const supplier = await this.supplierService.update(updateData, id);
      return res.status(200).json(supplier);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}
