const products = "https://fakestoreapi.com/products";
const categories = "https://fakestoreapi.com/products/categories";
const productCategorie = "https://fakestoreapi.com/products/category";

const oConsole = async (cb) => {
  const products = await cb;
  console.log(products);
};

const getAll = async () => {
  const result = await fetch(`${products}`)
    .then((request) => request.json())
    .catch((e) => console.log(e));
  return result;
};

const getOne = async (id) => {
  const result = await fetch(`${products}/${id}`)
    .then((request) => request.json())
    .catch((e) => console.log(e));
  return result;
};

const getCategories = async () => {
  const result = await fetch(`${categories}`)
    .then((request) => request.json())
    .catch((e) => console.log(e));
  return result;
};
const getOneCategorie = async (categorie) => {
  const result = await fetch(`${productCategorie}/${categorie}`)
    .then((request) => request.json())
    .catch((e) => console.log(e));
  return result;
};

const getRate = async (param) => {
  const result = await getAll().then((products) =>
    products.filter((el) => el.rating.rate > param)
  );

  return result;
};

const getTheOneWithMoreVotes = async () => {
  // fazer com reduce
  let count = 0;
  let result = [];
  await fetch(`${products}`)
    .then((request) => request.json())
    .then((values) => {
      values.forEach((values) => {
        if (values.rating.count > count) {
          count = values.rating.count;
          result = values;
        }
      });
    })
    .catch((e) => console.log(e));
  return result;
};

const getAverage = async () => {
  const result = await getAll()
    .then(
      (products) =>
        products.reduce((acc, curr) => (acc += curr.price), 0) / products.length
    )
    .then((num) => parseFloat(num.toFixed(2)));

  return result;
};

const theMostExpensive = async () => {
  const result = await getAll().then((products) =>
    products.reduce((acc, curr) => (acc.price < curr.price ? curr : acc))
  );

  return result;
};
const cheaper = async () => {
  const result = await getAll().then((products) =>
    products.reduce((acc, curr) => (acc.price > curr.price ? curr : acc))
  );
  return result;
};

// oConsole(cheaper());

export {
  cheaper,
  theMostExpensive,
  getAll,
  getAverage,
  getOne,
  getCategories,
  getOneCategorie,
  getRate,
  getTheOneWithMoreVotes,
};
