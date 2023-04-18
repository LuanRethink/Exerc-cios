import express from "express";
import { log } from "./logger";
const app = express();

const items = [
  { id: 1, name: "livro", price: 81 },
  { id: 2, name: "bola", price: 24 },
  { id: 3, name: "jacaré", price: 40 },
];
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(log);

app.use(function (request, resolve, next) {
  console.log("Pós logging..");
  next();
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Na porta ${port}`);
});

app.get("/items", (request, response) => {
  response.send(items);
});

app.get("/item/:id", (request, response) => {
  const item = items.find((c) => c.id === parseInt(request.params.id));
  if (!item) response.status(404).send("ID não retornou nenhum item");
  response.send(item);
});

app.post("/items", (request, response) => {
  const it = request.body;

  const item = {
    id: items.length + 1,
    name: it.name,
    price: it.price,
  };

  items.push(item);
  response.send(items);
});

app.delete("/items/:id", (request, response) => {
  const item = items.find((c) => c.id === parseInt(request.params.id));
  if (!item) response.status(404).send("Id não encontrado");
  response.send(item);
});

app.put("/items/:id", (request, response) => {
  const body = request.body;
  const item = items.find((c) => c.id === parseInt(request.params.id));
  if (!item) response.status(404).send("Id não encontrado");

  const newItem = {
    id: item.id,
    name: body.name || item.name,
    price: body.price || item.price,
  };
  items[item.id - 1] = newItem;
  response.send(newItem);
});
