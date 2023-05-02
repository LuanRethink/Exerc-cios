import knex from "knex";
import config from "../../knexfile";

const knexInstance = knex(config);

export type Categorie = {
  id?: number;
  name: string;
};

const index = async () => {
  try {
    return await knexInstance("categories").select("*");
  } catch (error) {
    throw error;
  }
};

const selectByName = async (name: string) => {
  try {
    const category = await knexInstance("categories")
      .select("*")
      .where({ "categories.name": name });
    return category;
  } catch (error) {
    throw error;
  }
};

const selectById = async (id: number) => {
  try {
    return await knexInstance("categories")
      .select("*")
      .where({ "categories.id": id });
  } catch (error) {
    throw error;
  }
};

const insert = async (category: Categorie) => {
  try {
    return await knexInstance("categories").insert(category);
  } catch (error) {
    throw error;
  }
};

const update = async (categoryId: number, name: Categorie) => {
  try {
    return await knexInstance("categories")
      .update({ name })
      .where({ id: categoryId });
  } catch (error) {
    throw error;
  }
};

const remove = async (id: number) => {
  try {
    return await knexInstance("categories").delete().where({ id });
  } catch (error) {
    throw error;
  }
};

export default { index, selectByName, selectById, insert, update, remove };
