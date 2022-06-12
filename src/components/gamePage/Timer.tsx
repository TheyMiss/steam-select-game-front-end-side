import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { socket } from "../../conts/socket";

const Timer = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    socket.on("send_time", (data) => {
      setTime(data.timeleft * 2);
    });
  }, []);

  return (
    <Container>
      <p>{time && time / 2} Seconds</p>
      <ProgessBar theme={time} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  padding: 1rem 0;

  p {
    color: white;
    font-size: 1.5rem;
    font-variant: small-caps;
  }
`;

const ProgessBar = styled.div`
  width: ${(props) =>
    props.theme > 0
      ? props.theme + "0%"
      : "0%"}; // try width: 0% if prior one do not work
  background-color: gold;
  -webkit-transition: width 1s ease-in;
  -o-transition: width 1 ease-in;
  transition: width 1 ease-in;
  height: 20px;
`;

export default Timer;
