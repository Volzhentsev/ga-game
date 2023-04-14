import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CardItem from './CardItem';
import styleCard from "./style/card.module.scss"

function CardList(): JSX.Element {
  const { card } = useSelector((store: RootState) => store.card);
  console.log(card);
  return (
    <>
    <div id='mainRow' style={{display:"flex"}}>
    <div style={{color:" rgb(22, 129, 156);", display:"flex", justifyContent:"space-around", flexDirection:"column", fontSize:"45px", margin:"0 70px 0 0 "}}>
      <div>КОСМОС (ТЫ)</div>
      <div>ВВП</div>
      <div>ГДЕ ЛОГИКА?</div>
    </div>
      <div className={styleCard.card__container} id="listok" style={{display:"grid", position:"relative", gridTemplateColumns:"20% 20% 20% 20% 20% "}}> 
        {card.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>
      </div>
    </>
  );
}

export default CardList;
