import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isOpenModalState, navigateToState } from "../recoil/atoms";

const Modal = () => {
  const [time, setTime] = useState(3);
  const [navigateTo] = useRecoilState(navigateToState);
  const setIsOpen = useSetRecoilState(isOpenModalState);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);

      if (time < 0) {
        setIsOpen(false);
        navigate(navigateTo);
        clearInterval(timer);
      }
    }, 1000);
  }, [time]);

  return (
    <ModalDiv>
      <Timer>
        <div>
          <p>{time}</p>
        </div>
      </Timer>
    </ModalDiv>
  );
};

const ModalDiv = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  height: 100vh;
  background-color: #0000009e;
  color: white;
  z-index: 1;
`;

const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    height: 25vh;
    border-radius: 1rem;
    font-size: 3.5rem;
  }
`;

export default Modal;
