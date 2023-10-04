import React from "react";
import { Container } from "react-bootstrap";
import "./mainPage.css"
import Me from "../../../static/Me.jpg"
const Card = () => {
  return (
    <Container fluid>
    <div class="card">
      <div class="tools">
        <div class="circle">
          <span class="red box"></span>
        </div>
        <div class="circle">
          <span class="yellow box"></span>
        </div>
        <div class="circle">
          <span class="green box"></span>
        </div>
      </div>
      <div class="card__content">
        <img src={Me} alt="profile" className="cardPicture" />
      </div>
    </div>
    </Container>
    // <div className="content">
    //   <div className="content__container">
    //     <ul className="content__container__list">
    //       <li className="content__container__list__item">Hi Visitor!!</li>
    //       <li className="content__container__list__item">Im Jeremy</li>
    //       <li className="content__container__list__item">Im a Dev!!!</li>
    //       <li className="content__container__list__item">Hire me!!!!</li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Card;
