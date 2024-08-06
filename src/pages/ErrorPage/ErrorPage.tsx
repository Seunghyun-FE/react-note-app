import React from "react";
import { Container } from "./ErrorPage.styles";
import img from "../../assets/images.jpg";
import { ButtonFill } from "../../styles/styles";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="error__img">
        <img src={img} alt="pageNotFound"></img>
      </div>
      <div className="error__text">
        <h1>404</h1>
        <div>error 발생</div>
        <ButtonFill onClick={() => navigate("/")}>
          <span>to MainPage</span>
        </ButtonFill>
      </div>
    </Container>
  );
};

export default ErrorPage;
