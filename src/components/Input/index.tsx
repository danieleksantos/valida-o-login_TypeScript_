import { IInputProps } from "././types";
import { Controller } from "react-hook-form";
import { ErrorMessage, InputContainer } from "./styles";


const Input = ({control, name, errorMessage, ...rest }: IInputProps) => {
  return (
    <>
      <InputContainer>
        <Controller 
          name={name}
          control={control}
          render={({field: {onChange, onBlur, value, ref}}) => (
            <input 
              {...rest} 
              onChange={onChange} 
              onBlur={onBlur} 
              value={value} 
              ref={ref}
            />
          )} 
        />
      </InputContainer>
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </>
  );
};

export default Input;
