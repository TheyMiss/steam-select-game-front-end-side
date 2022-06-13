import styled from "styled-components";

const InputComp: React.FC<{
  placeHolder?: string;
  onChange: () => void;
  value: string;
  readOnly?: boolean;
  onClick?: () => void;
}> = ({ placeHolder, onChange, value, readOnly, onClick }) => {
  if (readOnly || onClick) {
    return (
      <Input
        theme={readOnly}
        type="text"
        placeholder={placeHolder}
        onChange={onChange}
        onClick={onClick}
        value={value}
        readOnly
      />
    );
  }

  return (
    <Input
      type="text"
      placeholder={placeHolder}
      onChange={onChange}
      value={value}
    />
  );
};

const Input = styled.input`
  all: unset;
  background-color: #1b2839;
  color: white;
  padding: 0.5rem;
  border-radius: 0.3rem;
  ${(props) => props.theme === true && "cursor: pointer"}
`;

export default InputComp;
