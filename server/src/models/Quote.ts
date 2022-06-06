import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class quote {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    sentence: string

    @Column()
    description: string

    @Column()
    link: string
}
