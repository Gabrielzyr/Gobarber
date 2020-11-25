import { Router } from 'express';

import UserMap from '@shared/infra/http/routes/mappers/UserMap';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import UsersRepository from '../../typeorm/repositories/UsersRepository';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const usersRepository = new UsersRepository();
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService(usersRepository);

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  const mappedUser = UserMap.toDTO(user);
  return response.json({ mappedUser, token });
});

export default sessionsRouter;
