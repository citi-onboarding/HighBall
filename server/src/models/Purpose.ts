import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Purpose {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    purpose: string

    @Column()
    description: string

}
