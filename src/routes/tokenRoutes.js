import { Router } from 'express';
import tokenController from '../controllers/TokenController';

const router = new Router();

router.post('/', tokenController.store);

export default router;

/*
Nomenclaturas de controllers:

index -> lista todos os usuários
store/create -> cria um novo usuário
delete -> deleta um usuário
show -> mostra um
update -> atualiza usuário
*/
