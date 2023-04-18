const Joi = import("joi");
const { genres } = import("./routes/genres");
const express = import("express");
const app = express();

app.use(express.json());
app.use("/api/genres", genres);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Na porta ${port}`);
});
