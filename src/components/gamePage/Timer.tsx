import { useEffect, useState } from "react";
import { socket } from "../../conts/socket";
import { ProgessBar } from "../styles/ProgressBar.styled";
import { StyledTimer } from "../styles/Timer.styled";

const Timer = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    socket.on("send_time", (data) => {
      setTime(data.timeleft * 2);
    });
  }, []);

  return (
    <StyledTimer>
      <p>{time && time / 2} Seconds</p>
      <ProgessBar theme={time} />
    </StyledTimer>
  );
};

export default Timer;
