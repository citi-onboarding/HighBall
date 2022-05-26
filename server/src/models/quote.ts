import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class quote {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    phrase: string

    @Column()
    description: string

    @Column()
    link: number

}