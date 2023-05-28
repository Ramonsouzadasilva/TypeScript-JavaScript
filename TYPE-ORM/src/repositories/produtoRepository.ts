import { dataBaseConfig } from "../database-config";
import { Produtos } from "../entities/Produto";

export const produtoRepository = dataBaseConfig.getRepository(Produtos);
