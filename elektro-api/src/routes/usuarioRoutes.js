const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");
const upload = require("../config/multer");
const validar = require("../middlewares/validarMiddleware");
const { usuarioSchema } = require("../schemas/usuarioSchema");
const autenticarToken = require("../middlewares/authMiddleware");

// Cadastro Público (com Foto e Zod)
router.post(
  "/", 
  upload.single("foto_perfil"), 
  validar(usuarioSchema), 
  usuarioController.criar
);

// Rotas Protegidas com Token JWT
router.get("/", autenticarToken, usuarioController.listar);
router.get("/:id", autenticarToken, usuarioController.buscar);
router.put("/:id", autenticarToken, usuarioController.atualizar);
router.delete("/:id", autenticarToken, usuarioController.excluir);

module.exports = router;