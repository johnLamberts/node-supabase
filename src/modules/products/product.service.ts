import supabase from "@/config/supabase";
import { Request, Response } from "express";

export class ProductService {
  async getProducts(req: Request, res: Response) {
    const { data, error } = await supabase.from("products").select();

    console.log(data, error);
    if (error)
      res.status(parseInt(`${error.code}`, 10)).send({
        error: error.message,
      });

    return res.send(data);
  }

  async createProduct(req: Request, res: Response) {
    const { error } = await supabase.from("products").insert({
      name: req.body.name,
      category: req.body.category,
    });

    if (error)
      res.status(parseInt(`${error.code || "500"}`, 10)).send({
        error: error.message,
      });

    res.json({
      message: "Success",
      content: req.body,
    });
  }

  async updateProduct(req: Request, res: Response) {
    const { data, error } = await supabase
      .from("products")
      .update({
        ...req.body,
      })
      .eq("id", parseInt(req.params.id))
      .select();

    if (error)
      return res.status(parseInt(`${error.code || "500"}`, 10)).send({
        error: error.message,
      });

    res.json({
      message: `${req.params.id} has been updated!`,
      content: data,
    });
  }
}
