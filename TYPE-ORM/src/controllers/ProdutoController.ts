import { Request, Response } from "express";

import { produtoRepository } from "../repositories/produtoRepository";
import { categoriaRepository } from "../repositories/categoriaRepository";

export class ProdutoController {
	async create(req: Request, res: Response) {
		const {
			nome,
			descricao,
			quantidade,
			valor,
			categoria: categoriaid,
		} = req.body;

		if (isNaN(Number(categoriaid))) {
			return res.status(400).json({ message: "ID da categoria inválido" });
		}

		const categoria = await categoriaRepository.findOneBy({
			id: Number(categoriaid),
		});

		try {
			if (!categoria) {
				return res.status(404).json({ message: "Categoria não encontrada" });
			}
			const newProduto = produtoRepository.create({
				nome,
				descricao,
				quantidade,
				valor,
				categoria,
			});
			await produtoRepository.save(newProduto);

			return res
				.status(201)
				.json({ produto: newProduto, message: "Produto criado com sucesso" });
		} catch (error) {
			console.log(error);
			return res.status(500).json({ message: "Erro interno ao criar produto" });
		}
	}

	async list(req: Request, res: Response) {
		try {
			const produtos = await produtoRepository.find({
				relations: {
					categoria: true,
				},
			});
			return res.json({ produtos });
		} catch (error) {
			console.log(error);
			return res
				.status(500)
				.json({ message: "Erro interno ao tentar listar produtos" });
		}
	}

	async listById(req: Request, res: Response) {
		const { idProduto } = req.params;

		try {
			const produto = await produtoRepository.findOne({
				where: { id: Number(idProduto) },
				relations: ["categoria"],
			});

			if (!produto) {
				return res.status(404).json({ message: "Produto não encontrado" });
			}

			return res.json({
				produto,
			});
		} catch (error) {
			console.log(error);
			return res
				.status(500)
				.json({ message: "Erro interno ao tentar listar um produto" });
		}
	}

	async update(req: Request, res: Response) {
		const { idProduto } = req.params;
		const { nome, descricao, quantidade, valor, categoria } = req.body;

		try {
			const produto = await produtoRepository.findOneBy({
				id: Number(idProduto),
			});

			if (!produto) {
				return res.status(404).json({ message: "Produto não encontrado." });
			}

			produto.nome = nome;
			produto.descricao = descricao;
			produto.quantidade = quantidade;
			produto.valor = valor;
			produto.categoria = categoria;

			await produtoRepository.save(produto);

			return res.json({
				produto,
				message: "Produto atualizado com sucesso.",
			});
		} catch (error) {
			console.log(error);
			return res
				.status(500)
				.json({ message: "Erro interno ao tentar alterar um produto" });
		}
	}

	async remove(req: Request, res: Response) {
		const { idProduto } = req.params;
		try {
			const produto = await produtoRepository.findOneBy({
				id: Number(idProduto),
			});

			if (!produto) {
				return res.status(404).json({ message: "Produto não encontrado." });
			}

			await produtoRepository.remove(produto);

			return res.status(204).json({ message: "Produto removido com sucesso" });
		} catch (error) {
			console.log(error);
			return res
				.status(500)
				.json({ message: "Erro interno ao tentar remover um produto" });
		}
	}
}
