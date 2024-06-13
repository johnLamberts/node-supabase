import supabase from "@/config/supabase";
import supabaseAdmin from "../../config/supabase-admin";
import { Request, Response } from "express";
export class UserService {
  async createUser(req: Request, res: Response) {
    const { email, password, name } = req.body;
    try {
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
    try {
      const { data, error } = await supabaseAdmin.auth.admin.listUsers();

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

  async getUserById(req: Request, res: Response) {
    try {
      const { data, error } = await supabaseAdmin.auth.admin.getUserById(
        req.params.userId
      );

      console.log(req.params.userId);

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

  async updateUser(req: Request, res: Response) {
    const { email, password } = req.body;
    console.log(req.params.userId);
    try {
      // const { data, error } = await supabaseAdmin.auth.admin.updateUserById(
      //   req.params.userId,
      //   {
      //     email: email,
      //   }
      // );

      // console.log(error);

      // if (error) {
      //   res.status(error.status || 400).send({
      //     error: error?.message,
      //     code: error.code,
      //   });
      // }

      return res.json({
        message: "Success",
        content: req.body,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An unexpected error occured" });
    }
  }
}
