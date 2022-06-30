import { StyledInput } from "./styles/InputComp.styled";

const InputComp: React.FC<{
  placeHolder?: string;
  onChange: () => void;
  onDoubleClick?: () => void;
  value: string;
  readOnly?: boolean;
  onClick?: () => void;
}> = ({ placeHolder, onChange, value, readOnly, onClick, onDoubleClick }) => {
  if (readOnly || onClick) {
    return (
      <StyledInput
        theme={readOnly}
        type="text"
        placeholder={placeHolder}
        onChange={onChange}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        value={value}
        readOnly
      />
    );
  }

  return (
    <StyledInput
      type="text"
      placeholder={placeHolder}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputComp;
