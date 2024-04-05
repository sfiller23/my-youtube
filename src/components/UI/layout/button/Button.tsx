import { ReactNode, useState } from "preact/compat";
import { StyledButton } from "./Button.styles";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  $showBackground?: boolean;
  $showComponentOnClick?: ReactNode;
}

const Button = (props: IButtonProps) => {
  const [toggleComponent, setToggleComponent] = useState<boolean>(false);
  const { $showComponentOnClick } = props;
  return (
    <>
      <StyledButton
        onClick={() => {
          setToggleComponent((s) => !s);
        }}
        {...props}
      >
        {props.children}
      </StyledButton>
      {toggleComponent && $showComponentOnClick && $showComponentOnClick}
    </>
  );
};

export default Button;
