import Action from './Action';
import { User } from '../features/users/types/User';
import { Card } from '../features/card/types/Card';

export type State = {
  users: User[];
  card: Card[];
  auth: User | undefined;
};

export type ContextState = {
  state: State;
  dispatch: (value: Action) => void;
};
