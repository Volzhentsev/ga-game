import React, { useContext, useState, useEffect } from "react";
import { Card } from "./types/Card";
import Modal from "./Modal";
import { RootState } from "../../redux/store";
import { isDisabled } from "@testing-library/user-event/dist/utils";

function CardItem({ card }: { card: Card }): JSX.Element {
  const [modal, setModal] = useState(false);
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [status, setStatus] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handModal = (): void => {
    setModal((prev) => !prev);
  };

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void=> {
    e.preventDefault();
    setStatus(true)
   // answer === card.answer ? setStatus(true) : setStatus(false);
//    console.log(e.target);
  };

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setAnswer(e.target.value) 
  };


  return (
    <>
      <div className="d-flex justify-content-center">
        {!modal && (
          <button
            type="button"
            onClick={() => {
              handModal();
            }}
            className="btn btn-primary"
          >
            <button disabled={disabled} style={{width:"150px", height:"150px", fontSize:"30px", backgroundColor:"rgb(191, 168, 168)"}}>{card.count}</button>
          </button>
        )}
        {modal && (
          <div
            className="card"
            style={{width: "22rem", position: "absolute", zIndex: "999", top:"30%", left:"30%", fontSize:"25px"}}
          >
            <div className="card-body">
              <p className="card-text" >{card.question}</p>

              <form onSubmit={onHandleSubmit}>
                <input
                  value={answer}
                  onChange={onHandleChange}
                  id="answer"
                  type="text"
                />
                <button onClick={()=> setDisabled(true)} type="submit" >Проверить ответ</button>
              </form>
              <div>{ status ? ((answer ===  card.answer  ) ? "верно" : card.answer) : ""}</div>
              <button
                type="button"
                onClick={() => {
                  handModal();
                }}
                className="btn btn-primary"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CardItem;
