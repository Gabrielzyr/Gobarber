import User from '../../models/User';

export default class UserMap {
  // Altere de any para a sua model de User
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static toDTO(user: User): any {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };
  }
}
