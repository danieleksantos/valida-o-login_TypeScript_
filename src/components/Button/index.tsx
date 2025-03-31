import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled, ...rest }: IButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled} {...rest}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
