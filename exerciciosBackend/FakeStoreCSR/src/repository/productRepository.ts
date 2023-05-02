import knex from "knex";
import config from "../../knexfile";
const knexInstance = knex(config);

export type ProductWithCategoryId = {
  id?: number;
  title: string;
  price: number;
  category_id: number;
  description: string;
  image: string;
  rate: number;
  countRate: number;
};

export type Product = {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rate: number;
  countRate: number;
};

const index = async () => {
  const products: Product[] = await knexInstance("products")
    .select("*")
    .join("categories", "categories.id", "=", "products.category_id");
  return products;
};

const selectById = async (id: number) => {
  return await knexInstance("products").select("*").where({ id });
};

const selecByCategoryId = async (id: number) => {
  return await knexInstance("products")
    .select("*")
    .join("categories", "categories.id", "=", "products.category_id")
    .where({ category_id: id });
};

const insert = async (item: ProductWithCategoryId) => {
  const { title, price, category_id, description, image, rate, countRate } =
    item;
  return await knexInstance("products").insert({
    title,
    price,
    category_id,
    description,
    image,
    rate,
    countRate,
  });
};

const update = async (id: number, item: ProductWithCategoryId) => {
  try {
    const { title, price, category_id, description, image, rate, countRate } =
      item;
    const updatedData: ProductWithCategoryId = {
      title,
      price,
      category_id,
      description,
      image,
      rate,
      countRate,
    };
    return await knexInstance("products").update(updatedData).where({ id });
  } catch (error) {
    throw error;
  }
};

const remove = async (id: number) => {
  try {
    return await knexInstance("products").delete().where({ id });
  } catch (error) {
    throw error;
  }
};

export default { index, selecByCategoryId, selectById, insert, update, remove };
