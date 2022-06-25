import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isOpenModalState, navigateToState } from "../recoil/atoms";
import { StyledModal, Timer } from "./styles/Modal.styled";

const Modal = () => {
  const [time, setTime] = useState(3);
  const [navigateTo] = useRecoilState(navigateToState);
  const setIsOpen = useSetRecoilState(isOpenModalState);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      if (time >= 1) {
        setTime((prev) => prev - 1);
        clearInterval(timer);
      }

      if (time <= 0) {
        setIsOpen(false);
        navigate(navigateTo);
        clearInterval(timer);
      }
    }, 1000);
  }, [navigate, navigateTo, setIsOpen, time]);

  return (
    <StyledModal>
      <Timer>
        <div>
          <p>{time}</p>
        </div>
      </Timer>
    </StyledModal>
  );
};

export default Modal;
