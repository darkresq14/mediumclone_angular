import { CurrentUserInterface } from './currenUser.interface';

export interface CurrentUserRequestInterface {
  user: CurrentUserInterface & { password: string };
}
