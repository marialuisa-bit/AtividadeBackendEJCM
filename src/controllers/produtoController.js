const produtoService = require("../services/produtoService");

async function criarProduto(req, res) {
    try {
        const produto = await produtoService.criarProduto(req.body);

        res.status(201).json(produto);
    } catch (error) {
        res.status(500).json({
            erro: "Erro ao criar produto",
            detalhes: error.message
        });
    }
}

async function listarProdutos(req, res) {
    try {
        const produtos = await produtoService.listarProdutos();

        res.json(produtos);
    } catch (error) {
        res.status(500).json({
            erro: "Erro ao listar produtos",
            detalhes: error.message
        });
    }
}

async function buscarProduto(req, res) {
    try {
        const produto = await produtoService.buscarProduto(req.params.id);

        if (!produto) {
            return res.status(404).json({
                erro: "Produto não encontrado"
            });
        }

        res.json(produto);
    } catch (error) {
        res.status(500).json({
            erro: "Erro ao buscar produto",
            detalhes: error.message
        });
    }
}

async function atualizarProduto(req, res) {
    try {
        const produto = await produtoService.atualizarProduto(
            req.params.id,
            req.body
        );

        res.json(produto);
    } catch (error) {
        res.status(500).json({
            erro: "Erro ao atualizar produto",
            detalhes: error.message
        });
    }
}

async function excluirProduto(req, res) {
    try {
        const produto = await produtoService.excluirProduto(req.params.id);

        res.json({
            mensagem: "Produto excluído com sucesso",
            produto
        });
    } catch (error) {
        res.status(500).json({
            erro: "Erro ao excluir produto",
            detalhes: error.message
        });
    }
}

module.exports = {
    criarProduto,
    listarProdutos,
    buscarProduto,
    atualizarProduto,
    excluirProduto
};