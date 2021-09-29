import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export default class User {


    @Column()
    name: String

    @Column()
    lastname: String

    @Column()
    phonenumber: Number

    @PrimaryColumn()
    id_cpf: String

    @Column()
    church: String

    @Column()
    email: String

    @Column()
    password: String

}