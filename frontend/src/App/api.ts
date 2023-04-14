import { User } from '../features/users/types/User';
import { Card } from '../features/card/types/Card';

export const getUsers = (): Promise<User[]> => fetch('/api/users').then((res) => res.json());
export const getCard = (): Promise<Card[]> => fetch('/api/cards').then((res) => res.json());


export const checkUser = (): Promise<User> =>
  fetch('/auth/checkUser', {
    method: 'GET',
    credentials: 'include',
  }).then((res) => res.json());
