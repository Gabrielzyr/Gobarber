import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new appointment', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });
    expect(user).toHaveProperty('id');
  });

  //   it('should not be able to create a new appointment on the same time', async () => {
  //     const fakeUsersRepository = new FakeUsersRepository();
  //     const createUser = new CreateUserService(fakeUsersRepository);

  //     const appointmentDate = new Date(2020, 4, 10, 11);

  //     await createUser.execute({
  //       date: appointmentDate,
  //       provider_id: '123123',
  //     });

  //     expect(
  //       createUser.execute({
  //         date: appointmentDate,
  //         provider_id: '123123',
  //       }),
  //     ).rejects.toBeInstanceOf(AppError);
  //   });
});
