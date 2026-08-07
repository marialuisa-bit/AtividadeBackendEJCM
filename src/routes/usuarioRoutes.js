const express = require("express");

const router = express.Router();

const usuarioController = require("../controllers/usuarioController");

router.post("/", usuarioController.criar);

router.get("/", usuarioController.listar);

router.get("/:id", usuarioController.buscar);

router.put("/:id", usuarioController.atualizar);

router.delete("/:id", usuarioController.excluir);

module.exports = router;