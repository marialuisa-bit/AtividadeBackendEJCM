const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");
const upload = require("../config/multer");
const validar = require("../middlewares/validarMiddleware");
const { usuarioSchema } = require("../schemas/usuarioSchema");
const autenticarToken = require("../middlewares/authMiddleware");

//cadastro publico (foto e zod)
router.post(
  "/", 
  upload.single("foto_perfil"), 
  validar(usuarioSchema), 
  usuarioController.criar
);

//rota protegida c/ token
router.get("/", autenticarToken, usuarioController.listar);
router.get("/:id", autenticarToken, usuarioController.buscar);
router.put("/:id", autenticarToken, usuarioController.atualizar);
router.delete("/:id", autenticarToken, usuarioController.excluir);

module.exports = router;