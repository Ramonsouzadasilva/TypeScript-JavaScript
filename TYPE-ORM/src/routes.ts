import { Router } from "express";
import { ProdutoController } from "./controllers/ProdutoController";
import { CategoriaController } from "./controllers/CategoriaController";

const routes = Router();

routes.post("/produtos", new ProdutoController().create);
routes.get("/produtos", new ProdutoController().list);
routes.get("/produtos/:idProduto", new ProdutoController().listById);
routes.put("/produtos/:idProduto", new ProdutoController().update);
routes.delete("/produtos/:idProduto", new ProdutoController().remove);

routes.post("/categorias", new CategoriaController().create);
routes.get("/categorias", new CategoriaController().list);
routes.get("/categorias/:idCategoria", new CategoriaController().listById);
routes.put("/categorias/:idCategoria", new CategoriaController().update);
routes.delete("/categorias/:idCategoria", new CategoriaController().remove);

export default routes;
