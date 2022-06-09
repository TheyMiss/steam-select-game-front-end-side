import styled from "styled-components";

const InputComp: React.FC<{
  placeHolder?: string;
  onChange: (value: string) => void;
  value?: string;
  readOnly?: boolean;
  onClick?: () => void;
}> = ({ placeHolder, onChange, value, readOnly }) => {
  if (readOnly) {
    return (
      <Input
        type="text"
        placeholder={placeHolder}
        onChange={(e) => onChange(e.target.value)}
        onClick={() => navigator.clipboard.writeText(value!)}
        value={value}
        readOnly
      />
    );
  }

  return (
    <Input
      type="text"
      placeholder={placeHolder}
      onChange={(e) => onChange(e.target.value)}
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
`;

export default InputComp;
