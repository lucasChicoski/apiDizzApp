import { Request, Response } from 'express'
import { getRepository, Repository } from 'typeorm'
import { UserTeste } from '../entity/User_teste';

class UserControllerTeste {

    async store(req: Request, res: Response) {

        const repository = getRepository(UserTeste);
        const user = repository.create(req.body)

            
        

        await repository.insert(user)

        res.send(req.body);
    }

}

export default new UserControllerTeste();