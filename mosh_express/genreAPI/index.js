const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const genres = [
  { id: 1, name: "Ação" },
  { id: 2, name: "Terror" },
  { id: 3, name: "Romance" },
];

function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(genre, schema);
}

app.get("/genres", (request, response) => {
  response.send(genres);
});
app.get("/genres/:id", (request, response) => {
  const { error } = validateGenre(req.body);
  if (error) return response.status(400).send(error.details[0].message);

  response.send(genre);
});

app.post("/genres", (request, response) => {
  const { error } = validateGenre(req.body);
  if (error) return response.status(400).send(error.details[0].message);

  const genre = {
    id: genres.length + 1,
    name: request.body.name,
  };
  genres.push(genre);
  response.send(genre);
});

app.put("/genres/:id", (request, response) => {
  const genre = genres.find((c) => c.id === parseInt(request.params.id));
  if (!genre) return response.status(404).send("ID não retornou nenhum gênero");

  const { error } = validateGenre(request.body);
  if (error) return response.status(400).send(result.error.details[0].message);

  genre.name = req.body.name;
  response.send(genre);
});

app.delete("/api/genres/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("ID não retornou nenhum gênero");

  const index = genres.indexOf(genre);
  genres.splice(index, 1);
  res.send(genre);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Na porta ${port}`);
});
