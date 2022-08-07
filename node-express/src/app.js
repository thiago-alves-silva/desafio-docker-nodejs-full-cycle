const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// routes
const database = require("./routes/database");
app.use("/db", database);

const index = require("./routes/index");
app.use("/", index);

app.listen(3000, () => {
  console.log(`Rodando na porta ${3000}...`);
});
