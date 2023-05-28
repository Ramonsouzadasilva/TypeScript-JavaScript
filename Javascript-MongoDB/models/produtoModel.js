const mongoose = require("mongoose");

const produtoSchema = mongoose.Schema(
	{
		nome: {
			type: String,
			required: [true, "Coloque o nome do produto"],
		},
		quantidade: {
			type: Number,
			required: [true, "Coloque a quantidade do produto"],
			default: 0,
		},
		preco: {
			type: Number,
			required: [true, "Coloque o preço do produto"],
			default: 0.0,
		},
		codigo: {
			type: String,
			required: [true, "Coloque a descriçãpo do produto"],
		},
	},
	{
		timestamps: true,
	}
);

const Produto = mongoose.model("Produto", produtoSchema);

module.exports = Produto;
