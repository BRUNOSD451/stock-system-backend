import { Request, Response } from "express";
import { UserService } from "../services/userService";
export class UserController {
  private userService = new UserService();

  async getAll(req: Request, res: Response) {
    try {
      const users = await this.userService.findAll();
      return res.status(200).json(users);
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

      const user = await this.userService.findById(id);
      return res.status(200).json(user);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const newuser = req.body;

      if (!newuser || Object.keys(newuser).length === 0) {
        return res.status(400).json({ error: "Request body is required" });
      }

      const user = await this.userService.create(newuser);
      return res.status(201).json(user);
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

      const users = await this.userService.delete(id);
      return res.status(200).json(users);
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

      const user = await this.userService.update(updateData, id);
      return res.status(200).json(user);
    } catch (error: any) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}
