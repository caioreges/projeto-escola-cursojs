import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import alunoController from '../controllers/AlunoController';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', loginRequired, alunoController.store);
router.put('/:id', loginRequired, alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', loginRequired, alunoController.delete);

export default router;

/*
Nomenclaturas de controllers:

index -> lista todos os usuários
store/create -> cria um novo usuário
delete -> deleta um usuário
show -> mostra um
update -> atualiza usuário
*/
