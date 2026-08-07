const prisma = require("../prisma/client");

async function criarProduto(dados) {
    return await prisma.produto.create({
        data: dados
    });
}

async function listarProdutos() {
    return await prisma.produto.findMany({
        include: {
            categoria: true,
            usuario: true
        }
    });
}

async function buscarProduto(id) {
    return await prisma.produto.findUnique({
        where: {
            id_produto: Number(id)
        },
        include: {
            categoria: true,
            usuario: true
        }
    });
}

async function atualizarProduto(id, dados) {
    return await prisma.produto.update({
        where: {
            id_produto: Number(id)
        },
        data: dados
    });
}

async function excluirProduto(id) {
    return await prisma.produto.delete({
        where: {
            id_produto: Number(id)
        }
    });
}

module.exports = {
    criarProduto,
    listarProdutos,
    buscarProduto,
    atualizarProduto,
    excluirProduto
};