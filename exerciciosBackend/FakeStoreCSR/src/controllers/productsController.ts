import { Request, Response } from "express";
import productService from "../service/productService";

const index = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAll();
    res.status(200).json(products);
  } catch (error) {
    res.send(error);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const product = await productService.getByCategoryId(id);
    if (!product.length) throw new Error("Esse produto não existe");

    res.status(200).json(product);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const insert = async (req: Request, res: Response) => {
  try {
    const newProduct = req.body;
    const product = await productService.insertProduct(newProduct);

    res.status(201).json({
      product,
    });
  } catch (error: any) {
    res.send(error);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const book = await productService.updateProduct(id, req.body);

    res.status(200).json(book);
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const product = await productService.deleteProduct(id);

    if (!product) throw new Error("Esse produto não existe");

    res.status(200).json({ msg: "Produto deletado" });
  } catch (error: any) {
    res.send(error.message ? { error: error.message } : error);
  }
};

export default { insert, index, show, update, remove };
