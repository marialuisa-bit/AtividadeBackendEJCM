const prisma = require("../prisma/client");
const { generatePassword } = require("../utils/password");

async function criarUsuario(dados, file) {
  const { senha, ...outrosDados } = dados;
  const { hash, salt } = generatePassword(senha);

  const foto = file ? file.filename : null;

  return await prisma.usuario.create({
    data: {
      ...outrosDados,
      hash,
      salt,
      foto_perfil: foto
    }
  });
}

async function listarUsuarios() {
  return await prisma.usuario.findMany({
    select: {
      id_usuario: true,
      nome: true,
      cpf: true,
      email: true,
      telefone: true,
      foto_perfil: true
    }
  });
}

async function buscarUsuario(id) {
  return await prisma.usuario.findUnique({
    where: {
      id_usuario: Number(id)
    },
    select: {
      id_usuario: true,
      nome: true,
      cpf: true,
      email: true,
      telefone: true,
      foto_perfil: true
    }
  });
}

async function atualizarUsuario(id, dados) {
  return await prisma.usuario.update({
    where: {
      id_usuario: Number(id)
    },
    data: dados
  });
}

async function excluirUsuario(id) {
  return await prisma.usuario.delete({
    where: {
      id_usuario: Number(id)
    }
  });
}

module.exports = {
  criarUsuario,
  listarUsuarios,
  buscarUsuario,
  atualizarUsuario,
  excluirUsuario
};