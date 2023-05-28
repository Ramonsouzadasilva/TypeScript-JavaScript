import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
} from "typeorm";
import { Categorias } from "./Categoria";

@Entity("produtos")
export class Produtos {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: "varchar", length: 50 })
	nome: string;

	@Column({ type: "varchar", length: 50 })
	descricao: string;

	@Column({ type: "int" })
	quantidade: number;

	@Column({ type: "decimal", precision: 6, scale: 2 })
	valor: number;

	@ManyToOne(() => Categorias, (categoria) => categoria.produtos)
	@JoinColumn({ name: "categoriaid" })
	categoria: Categorias;
}
