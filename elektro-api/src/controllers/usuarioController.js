const usuarioService = require("../services/usuarioService");

async function criar(req, res) {
  try {
    const usuario = await usuarioService.criarUsuario(req.body, req.file);

    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

async function listar(req, res) {
  try {
    const usuarios = await usuarioService.listarUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

async function buscar(req, res) {
  try {
    const usuario = await usuarioService.buscarUsuario(req.params.id);

    if (!usuario) {
      return res.status(404).json({
        mensagem: "Usuário não encontrado."
      });
    }

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

async function atualizar(req, res) {
  try {
    const usuario = await usuarioService.atualizarUsuario(req.params.id, req.body);
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

async function excluir(req, res) {
  try {
    await usuarioService.excluirUsuario(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

module.exports = {
  criar,
  listar,
  buscar,
  atualizar,
  excluir
};