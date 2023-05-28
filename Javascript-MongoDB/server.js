const express = require("express");
const mongoose = require("mongoose");
const produtoRoutes = require("./routes/produtoRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
	.connect("mongodb://usuario:senha@localhost:27017/database_name", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		authSource: "admin",
	})
	.then(() => {
		console.log("Conectado ao MongoDB");

		app.use("/", produtoRoutes);

		app.listen(3000, () => {
			console.log("API está rodando na porta 3000");
		});
	})
	.catch((error) => {
		console.log(error);
	});
