import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import UserItem from './UserItem';
import { RootState } from '../../redux/store';
// import stateContext from '../../context';

function UsersList(): JSX.Element {
  // const { state } = useContext(stateContext);
  const { users } = useSelector((store: RootState) => store.users);
  return (
    <div>
      Users List
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UsersList;
