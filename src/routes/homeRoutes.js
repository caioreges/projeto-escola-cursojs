import { Router } from 'express';
import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', homeController.index);

export default router;

/*
Nomenclaturas de controllers:

index -> lista todos os usuários
store/create -> cria um novo usuário
delete -> deleta um usuário
show -> mostra um
update -> atualiza usuário
*/
