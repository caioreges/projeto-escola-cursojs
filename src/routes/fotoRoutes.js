import { Router } from 'express';
import fotoController from '../controllers/FotoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, fotoController.store);

export default router;

/*
Nomenclaturas de controllers:

index -> lista todos os usuários
store/create -> cria um novo usuário
delete -> deleta um usuário
show -> mostra um
update -> atualiza usuário
*/
