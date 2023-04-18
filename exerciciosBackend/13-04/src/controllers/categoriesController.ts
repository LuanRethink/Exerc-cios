import { Request, Response } from "express";
import knex from "knex";
import config from "../../knexfile";

const knexInstance = knex(config);

type Categorie = {
  id?: number;
  name: string;
};

const index = async (req: Request, res: Response) => {
  try {
    const categories: Categorie[] = await knexInstance("categories")
      .select("*")
      .join("categories", "categories.id", "=", "products.category_id");
    res.status(200).json(categories);
  } catch (error) {
    res.send(error);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const categorie = await knexInstance("categories")
      .select("*")
      .join("categories", "categories.id", "=", "products.category_id")
      .where({ id });
    if (!categorie.length) throw new Error("Essa categoria não existe");

    res.status(200).json(categorie);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const insert = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const id: number[] = await knexInstance("categories").insert({
      name,
    });

    res.status(201).json({
      id: id[0],
      name,
    });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name } = req.body;
    const updatedData: Categorie = {
      name,
    };

    const categorie = await knexInstance("categories")
      .update(updatedData)
      .where({ id });

    res.status(200).json(categorie);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const categorie = await knexInstance("categories").delete().where({ id });

    if (!categorie) throw new Error("Essa categoria não existe");

    res.status(200).json({ msg: "Categoria deletada" });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

export default { insert, index, show, update, remove };
