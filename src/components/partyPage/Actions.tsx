import {
  faArrowRightFromBracket,
  faBars,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import RoomButton from "../RoomButton";
import { io } from "socket.io-client";
import { useRecoilState } from "recoil";
import { isJoinedState } from "../../recoil/atoms";

const socket = io(process.env.REACT_APP_ENDPOINT!);

const Actions = () => {
  const [isJoined] = useRecoilState(isJoinedState);

  return (
    <SectionContainer>
      {isJoined && (
        <>
          <RoomButton icon={faPlay} label="Start Game" isJoined={isJoined} />
          <RoomButton
            icon={faArrowRightFromBracket}
            label="Leave Room"
            isJoined={isJoined}
          />
        </>
      )}

      <RoomButton icon={faBars} label="To Menu" />
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  gap: 1rem;
`;

export default Actions;
