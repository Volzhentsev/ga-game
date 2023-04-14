import React, { useContext } from 'react';
import { User } from './types/User';
import stateContext from '../../context';

function UserItem({ user }: { user: User }): JSX.Element {
  const { dispatch } = useContext(stateContext);
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => dispatch({ type: 'REMOVE_USER', payload: user.id })} type="button">
        X
      </button>
    </div>
  );
}

export default UserItem;
