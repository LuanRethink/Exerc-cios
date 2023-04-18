const Joi = import("joi");
const express = import("express");
const morgan = import("morgan");
const helmet = import("helmet");
const app = express();

const courses = [
  { id: 1, name: "luan", age: 23 },
  { id: 2, name: "lucas", age: 24 },
  { id: 3, name: "lúcio", age: 25 },
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());
app.use(morgan("tiny"));

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(course, schema);
}

app.get("/", (request, response) => {
  response.send(`alo`);
});

app.get("/courses", (request, response) => {
  response.send(courses);
});

app.get("/courses/:id", (request, response) => {
  const course = courses.find((c) => c.id === parseInt(request.params.id));
  if (!course) return response.status(404).send("ID não retornou nenhum curso");
  response.send(course);
});

app.post("/courses", (request, response) => {
  const { error } = validateCourse(request.body);
  if (error) return response.status(400).send(result.error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: request.body.name,
  };
  courses.push(course);
  response.send(courses);
});

app.get("/courses/:year/:month", (request, response) => {
  response.send(request.query);
});

app.put("/courses/:id", (request, response) => {
  const course = courses.find((c) => c.id === parseInt(request.params.id));
  if (!course) return response.status(404).send("ID não retornou nenhum curso");

  const { error } = validateCourse(request.body);
  if (error) return response.status(400).send(result.error.details[0].message);

  course.name = req.body.name;
  response.send(course);
});

app.delete("/courses/delete", (request, response) => {
  const course = courses.find((c) => c.id === parseInt(request.params.id));
  if (!course) return response.status(404).send("ID não retornou nenhum curso");
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  response.send(course);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Na porta ${port}`);
});
