import { StyledOptions } from "../styles/partyPage/Options.styled";
import { Title } from "../styles/Title.styled";
import Actions from "./Actions";
import Logger from "./Logger";

const Options = () => {
  return (
    <StyledOptions>
      <div>
        <Title>Logger</Title>
        <Logger />
      </div>
      <div>
        <Title>Actions</Title>
        <Actions />
      </div>
    </StyledOptions>
  );
};

export default Options;
