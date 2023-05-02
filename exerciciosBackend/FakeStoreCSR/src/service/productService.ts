import categoryRepository from "../repository/categoryRepository";
import productRepository, {
  Product,
  ProductWithCategoryId,
} from "../repository/productRepository";

const getAll = async () => {
  try {
    const productsArr = await productRepository.index();
    return productsArr.map((item: Product) => {
      return {
        id: item.id,
        title: item.title,
        price: item.price,
        category: item.category,
        description: item.description,
        image: item.image,
        rating: {
          rate: item.rate,
          count: item.countRate,
        },
      };
    });
  } catch (error) {
    throw error;
  }
};

const getById = async (id: number) => {
  try {
    const productsArr: any = await productRepository.selectById(id);
    if (productsArr.length === 0) throw new Error("Product not Found");
    return productsArr.map((item: Product) => {
      return {
        id: item.id,
        title: item.title,
        price: item.price,
        category: item.category,
        description: item.description,
        image: item.image,
        rating: {
          rate: item.rate,
          count: item.countRate,
        },
      };
    });
  } catch (error) {
    throw error;
  }
};

const getByCategoryId = async (id: number) => {
  try {
    const productsArr = await productRepository.selecByCategoryId(id);
    if (productsArr.length === 0) throw new Error("Product not Found");
    return productsArr.map((item: Product) => {
      return {
        id: item.id,
        title: item.title,
        price: item.price,
        category: item.category,
        description: item.description,
        image: item.image,
        rating: {
          rate: item.rate,
          count: item.countRate,
        },
      };
    });
  } catch (error) {
    throw error;
  }
};

const hasProductInThisCategory = async (id: number) => {
  try {
    const productsArr = await productRepository.selecByCategoryId(id);
    return !(productsArr.length === 0);
  } catch (error) {
    throw error;
  }
};

const insertProduct = async (item: Product) => {
  try {
    const category: any = await categoryRepository.selectByName(item.category);
    const newProduct: ProductWithCategoryId = {
      title: item.title,
      price: item.price,
      category_id: category[0].id,
      description: item.description,
      image: item.image,
      rate: item.rate,
      countRate: item.countRate,
    };

    const answerId = await productRepository.insert(newProduct);

    return productRepository.selectById(answerId[0]);
  } catch (error) {
    throw error;
  }
};

const updateProduct = async (id: number, item: Product) => {
  try {
    const product: any = await productRepository.selectById(id);
    if (!product) throw new Error("Product was not found");
    const category: any = await categoryRepository.selectByName(item.category);
    const newProduct: ProductWithCategoryId = {
      title: product.title,
      price: product.price,
      category_id: category[0].id,
      description: product.description,
      image: product.image,
      rate: product.rating.rate,
      countRate: product.rating.count,
    };

    await productRepository.update(id, newProduct);
    return productRepository.selectById(id);
  } catch (error) {
    throw error;
  }
};

const deleteProduct = async (id: number) => {
  try {
    const product: any = await productRepository.selectById(id);
    if (!product) throw new Error("Product was not found!");
    return await productRepository.remove(id);
  } catch (error) {
    throw error;
  }
};

export default {
  getAll,
  hasProductInThisCategory,
  getByCategoryId,
  getById,
  insertProduct,
  updateProduct,
  deleteProduct,
};
