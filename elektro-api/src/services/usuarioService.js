const prisma = require("../prisma/client");

async function criarUsuario(dados) {
    return await prisma.usuario.create({
        data: dados
    });
}

async function listarUsuarios() {
    return await prisma.usuario.findMany();
}


async function buscarUsuario(id) {
    return await prisma.usuario.findUnique({
        where: {
            id_usuario: Number(id)
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