import {
  LoadingElements,
  Spinner,
  SpinnerInner,
  StyledLoading,
} from "./styles/Loading.styled";

const Loading = () => {
  return (
    <StyledLoading>
      <LoadingElements>
        Loading
        <Spinner>
          <SpinnerInner />
        </Spinner>
      </LoadingElements>
    </StyledLoading>
  );
};

export default Loading;
