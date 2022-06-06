import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Cup{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    link: string
}