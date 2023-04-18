import { Request, Response } from "express";
import knex from "knex";
import config from "../../knexfile";

const knexInstance = knex(config);

type Product = {
  id?: number;
  title: string;
  price: number;
  category_id: number;
  description: string;
  image: string;

  rate: number;
  count: number;
};
type OldProduct = {
  id?: number;
  title: string;
  price: number;
  category_id: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const index = async (req: Request, res: Response) => {
  try {
    const products: Product[] = await knexInstance("products")
      .select("*")
      .join("categories", "categories.id", "=", "products.category_id");
    res.status(200).json(products);
  } catch (error) {
    res.send(error);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = await knexInstance("products").select("*").where({ id });
    if (!product.length) throw new Error("Esse produto não existe");

    res.status(200).json(product);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const insert = async (req: Request, res: Response) => {
  try {
    const { title, price, category_id, description, image, rate, count } =
      req.body;

    const id: number[] = await knexInstance("products").insert({
      title,
      price,
      category_id,
      description,
      image,
      rate,
      count,
    });

    res.status(201).json({
      id: id[0],
      title,
      price,
      category_id,
      description,
      image,
      rate,
      count,
    });
  } catch (error: any) {
    res.send(error);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { title, price, category_id, description, image, rate, count } =
      req.body;
    const updatedData: Product = {
      title,
      price,
      category_id,
      description,
      image,
      rate,
      count,
    };

    const book = await knexInstance("products")
      .update(updatedData)
      .where({ id });

    res.status(200).json(book);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = await knexInstance("products").delete().where({ id });

    if (!product) throw new Error("Esse produto não existe");

    res.status(200).json({ msg: "Produto deletado" });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

export default { insert, index, show, update, remove };
