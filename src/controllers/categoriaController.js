const categoriaService = require("../services/categoriaService");

async function criarCategoria(req, res) {
    try {
        const categoria = await categoriaService.criarCategoria(req.body);
        res.status(201).json(categoria);
    } catch (error) {
        res.status(500).json({
            erro: "Erro ao criar categoria",
            detalhes: error.message
        });
    }
}

async function listarCategorias(req, res) {
    try {
        const categorias = await categoriaService.listarCategorias();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({
            erro: "Erro ao listar categorias",
            detalhes: error.message
        });
    }
}

async function buscarCategoria(req, res) {
    try {
        const categoria = await categoriaService.buscarCategoria(req.params.id);

        if (!categoria) {
            return res.status(404).json({
                erro: "Categoria não encontrada"
            });
        }

        res.json(categoria);
    } catch (error) {
        res.status(500).json({
            erro: "Erro ao buscar categoria",
            detalhes: error.message
        });
    }
}

async function atualizarCategoria(req, res) {
    try {
        const categoria = await categoriaService.atualizarCategoria(
            req.params.id,
            req.body
        );

        res.json(categoria);
    } catch (error) {
        res.status(500).json({
            erro: "Erro ao atualizar categoria",
            detalhes: error.message
        });
    }
}

async function excluirCategoria(req, res) {
    try {
        const categoria = await categoriaService.excluirCategoria(req.params.id);

        res.json({
            mensagem: "Categoria excluída com sucesso",
            categoria
        });
    } catch (error) {
        res.status(500).json({
            erro: "Erro ao excluir categoria",
            detalhes: error.message
        });
    }
}

module.exports = {
    criarCategoria,
    listarCategorias,
    buscarCategoria,
    atualizarCategoria,
    excluirCategoria
};