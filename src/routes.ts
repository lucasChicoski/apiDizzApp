import { Router } from 'express'
import UserControllerTeste from './controllers/UserControllerTeste'
import UserControllerRegister from './controllers/UserController'
const router = Router();

router.post('/usersteste', UserControllerTeste.store);// teste
router.post('/registeruser', UserControllerRegister.store);

export default router;