import { OneToMany, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Produtos } from "./Produto";

@Entity("categorias")
export class Categorias {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: "varchar", length: 50 })
	nome: string;

	@OneToMany(() => Produtos, (produto) => produto.categoria)
	produtos: Produtos[];
}
