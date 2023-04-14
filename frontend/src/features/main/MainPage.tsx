import React, {useEffect} from 'react';
import CardList from '../card/CardList';
import { useDispatch, useSelector } from 'react-redux';
import * as api from '../../App/api';
import styleMain from "./style/main.module.scss"

function MainPage(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    api.getCard().then((data) => dispatch({ type: 'GET_CARD', payload: data }));
  }, []);

  return (
    <div className={styleMain.card__main} id="qwe" style={{display:"flex", justifyContent:"space-around"}} >
      <CardList/>
    </div>
  );
}

export default MainPage;
