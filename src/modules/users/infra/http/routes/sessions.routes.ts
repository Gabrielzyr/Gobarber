import { Router } from 'express';
import { container } from 'tsyringe';

import UserMap from '@shared/infra/http/routes/mappers/UserMap';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = container.resolve(AuthenticateUserService);

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  const mappedUser = UserMap.toDTO(user);
  return response.json({ mappedUser, token });
});

export default sessionsRouter;
