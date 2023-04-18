const express = import("express");
const router = express.Router();

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

router.get("/", (request, response) => {
  response.send(genres);
});
router.get("/:id", (request, response) => {
  const { error } = validateGenre(req.body);
  if (error) return response.status(400).send(error.details[0].message);

  response.send(genre);
});

router.post("/", (request, response) => {
  const { error } = validateGenre(req.body);
  if (error) return response.status(400).send(error.details[0].message);

  const genre = {
    id: genres.length + 1,
    name: request.body.name,
  };
  genres.push(genre);
  response.send(genre);
});

router.put("/:id", (request, response) => {
  const genre = genres.find((c) => c.id === parseInt(request.params.id));
  if (!genre) return response.status(404).send("ID não retornou nenhum gênero");

  const { error } = validateGenre(request.body);
  if (error) return response.status(400).send(result.error.details[0].message);

  genre.name = req.body.name;
  response.send(genre);
});

router.delete("/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("ID não retornou nenhum gênero");

  const index = genres.indexOf(genre);
  genres.splice(index, 1);
  res.send(genre);
});

export { router };
