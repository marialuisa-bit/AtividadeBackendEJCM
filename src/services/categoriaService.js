const prisma = require("../prisma/client");

async function criarCategoria(dados) {
    return await prisma.categoria.create({
        data: dados
    });
}

async function listarCategorias() {
    return await prisma.categoria.findMany();
}

async function buscarCategoria(id) {
    return await prisma.categoria.findUnique({
        where: {
            id_categoria: Number(id)
        }
    });
}

async function atualizarCategoria(id, dados) {
    return await prisma.categoria.update({
        where: {
            id_categoria: Number(id)
        },
        data: dados
    });
}

async function excluirCategoria(id) {
    return await prisma.categoria.delete({
        where: {
            id_categoria: Number(id)
        }
    });
}

module.exports = {
    criarCategoria,
    listarCategorias,
    buscarCategoria,
    atualizarCategoria,
    excluirCategoria
};