const express = require("express");
const router = express.Router();
const {
	getAllProdutos,
	getProdutoById,
	createProduto,
	updateProduto,
	deleteProduto,
} = require("../controllers/produtoController");

router.get("/", (req, res) => {
	res.send("Node API com JavaScript ");
});

router.get("/produtos", getAllProdutos);
router.get("/produtos/:id", getProdutoById);
router.post("/produtos", createProduto);
router.put("/produtos/:id", updateProduto);
router.delete("/produtos/:id", deleteProduto);

module.exports = router;
