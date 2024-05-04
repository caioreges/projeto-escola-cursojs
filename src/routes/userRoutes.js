import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', loginRequired, userController.index);
// router.get('/:id', userController.show);

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
Nomenclaturas de controllers:

index -> lista todos os usuários => GET
store/create -> cria um novo usuário => POST
delete -> deleta um usuário => DELETE
show -> mostra um => GET
update -> atualiza usuário => PATCH (atualiza valores) ou PUT (atualiza todo o objeto)
*/
