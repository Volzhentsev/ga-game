import { Card, CardId } from '../features/card/types/Card';
import { User, UserId } from '../features/users/types/User';

type Action =
  | { type: 'GET_CARD'; payload: Card[] }
  | { type: 'GET_USERS'; payload: User[] }
  | { type: 'REMOVE_USER'; payload: UserId }
  | { type: 'SIGN_IN'; payload: User }
  | { type: 'SIGN_UP'; payload: User }
  | { type: 'LOG_OUT' }
  | { type: 'CHECK_USER'; payload: User };

export default Action;
