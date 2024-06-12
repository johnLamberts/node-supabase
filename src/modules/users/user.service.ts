import supabaseAdmin from "../../config/supabase-admin";
import { Request, Response } from "express";
export class UserService {
  async createUser(req: Request, res: Response) {
    try {
      const { email, password, name } = req.body;

      const { data, error } = await supabaseAdmin.auth.admin.createUser({
        email: email,
        password: password,
        user_metadata: { name: name },
      });

      if (error) {
        res.status(parseInt(`${error.status}`, 10)).send({
          error: error?.message,
          code: error.code,
        });
      }

      return res.json({
        message: "Success",
        content: data,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An unexpected error occured" });
    }
  }

  async getUsers(req: Request, res: Response) {
    // const { data, error } = await supabase.auth.admin.listUsers();
    // res.json(data);
  }
}
