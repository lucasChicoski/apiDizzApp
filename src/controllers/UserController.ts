import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from '../entity/User'


class UserControllerRegister {

    async store(req: Request, res: Response) {

        const repository = getRepository(User);

        const user = repository.create(req.body);

        const teste = await repository.findOne(req.body.id_cpf);

        if (teste) {
            res.send('Usuário já cadastrado')
        } else {
            await repository.insert(user);
            res.send(req.body)
        }

    }

}

export default new UserControllerRegister