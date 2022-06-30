import { faHouse, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilValue } from "recoil";
import { joinedRoomIdState, playersTableState } from "../../recoil/atoms";
import { blTheme, brTheme } from "../../themes/ToolTip.themes";
import {
  Container,
  IconSquare,
  InfoCard,
  SimpleButton,
} from "../styles/partyPage/Header.styled";
import ToolTip from "../ToolTip";

const Header = () => {
  const currentRoomId = useRecoilValue(joinedRoomIdState);
  const playerList = useRecoilValue(playersTableState);
  const playerInRoom = Object.keys(playerList).length;

  return (
    <Container>
      <ToolTip toolTipText={"Room ID"} theme={blTheme}>
        <InfoCard>
          <IconSquare>
            <FontAwesomeIcon icon={faHouse} />
          </IconSquare>
          <SimpleButton
            onClick={() => navigator.clipboard.writeText(currentRoomId)}
          >
            {currentRoomId}
          </SimpleButton>
        </InfoCard>
      </ToolTip>
      <ToolTip toolTipText={"Maximum Players In room is 5"} theme={brTheme}>
        <InfoCard>
          <FontAwesomeIcon icon={faUsers} />

          <p>{playerInRoom}</p>
        </InfoCard>
      </ToolTip>
    </Container>
  );
};

export default Header;
