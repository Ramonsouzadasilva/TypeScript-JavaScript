const Produto = require("../models/produtoModel");

exports.getAllProdutos = async (req, res) => {
	try {
		const produtos = await Produto.find({});
		res.status(200).json(produtos);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.getProdutoById = async (req, res) => {
	try {
		const { id } = req.params;
		const produto = await Produto.findById(id);
		res.status(200).json(produto);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.createProduto = async (req, res) => {
	try {
		const produto = await Produto.create(req.body);
		res.status(200).json(produto);
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: error.message });
	}
};

exports.updateProduto = async (req, res) => {
	try {
		const { id } = req.params;
		const produto = await Produto.findByIdAndUpdate(id, req.body);
		if (!produto) {
			return res
				.status(404)
				.json({ message: `Cannot find any product with ID ${id}` });
		}
		const updatedProduto = await Produto.findById(id);
		res.status(200).json(updatedProduto);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.deleteProduto = async (req, res) => {
	try {
		const { id } = req.params;
		const produto = await Produto.findByIdAndDelete(id);
		if (!produto) {
			return res
				.status(404)
				.json({ message: `Cannot find any product with ID ${id}` });
		}
		res.status(200).json(produto);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
