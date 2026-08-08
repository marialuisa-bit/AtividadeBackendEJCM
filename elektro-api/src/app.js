const express = require("express");
const path = require("path");
const passport = require("passport");

//gera os rsa automaticamente caso elas nao existam
require("./config/generateKeys");

const app = express();

app.use(express.json());
app.use(passport.initialize());

//pasta de fotos do perfil
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

const usuarioRoutes = require("./routes/usuarioRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/auth", authRoutes);
app.use("/usuarios", usuarioRoutes);

module.exports = app;