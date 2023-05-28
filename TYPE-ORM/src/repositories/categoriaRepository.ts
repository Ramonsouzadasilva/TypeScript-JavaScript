import { dataBaseConfig } from "../database-config";
import { Categorias } from "../entities/Categoria";

export const categoriaRepository = dataBaseConfig.getRepository(Categorias);
