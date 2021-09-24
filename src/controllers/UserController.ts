import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { User } from '../entity/User';

class UserController {

    async store(req: Request, res: Response) {

        const repository = getRepository(User);
        const user = repository.create(req.body)
        await repository.insert(user)

        res.send(req.body);
    }

}

export default new UserController();