require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;
const getPokemon = require("./library/getPokemon");

app.get("/pokemon", getPokemon);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
