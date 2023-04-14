import React, { useContext } from 'react';
import './styles/navbar.scss';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from './styles/bear.png';
import { RootState } from '../../redux/store';
// import stateContext from '../../context';

function NavBar(): JSX.Element {
  // const { state, dispatch } = useContext(stateContext);
  const { auth } = useSelector((store: RootState) => store.auth);
  const dispatch = useDispatch();
  const logOut = (): void => {
    fetch('/auth/logout')
      .then((res) => res.json())
      .then(() => dispatch({ type: 'LOG_OUT' }));
  };
  return (
    <>
      <div className="nav__container">
        <div className="nav__logo" style={{fontSize:"25px"}}>
          СВОЯ ИГРА
        </div>
        {auth && <h3>Hello, {auth.name}!</h3>}
         <ul className="nav__menu">
          <li>
            <NavLink to="/">Main</NavLink>
          </li>
          {!auth ? (
            <>
              <li>
                <NavLink to="/signin">signIn</NavLink>
              </li>
              <li>
                <NavLink to="/signup">signUp</NavLink>
              </li>
            </>
          ) : (
            <li>
              <Link onClick={logOut} to="#">
                LogOut
              </Link>
            </li>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
