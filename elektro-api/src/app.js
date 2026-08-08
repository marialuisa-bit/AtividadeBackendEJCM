const express = require("express");
const path = require("path");
const passport = require("passport");

// Gera as chaves RSA automaticamente ao iniciar se não existirem
require("./config/generateKeys");

const app = express();

app.use(express.json());
app.use(passport.initialize());

// Servir a pasta de fotos de perfil estáticas
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

const usuarioRoutes = require("./routes/usuarioRoutes");
const authRoutes = require("./routes/authRoutes");
// const categoriaRoutes = require("./routes/categoriaRoutes");
// const produtoRoutes = require("./routes/produtoRoutes");

app.use("/auth", authRoutes);
app.use("/usuarios", usuarioRoutes);
// app.use("/categorias", categoriaRoutes);
// app.use("/produtos", produtoRoutes);

module.exports = app;