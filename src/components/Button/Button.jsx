import { SecondaryButton, MainButton, GoogleButton } from "./Button.styled";

export const Button = ({ children, type, mb, height }) => {
  console.log(type, mb);
  if (type === "secondary") {
    return <SecondaryButton >{children}</SecondaryButton>;
  }

  if (type === "main") {
    return <MainButton>{children}</MainButton>;
  }

  if (type === "googleButton") {
    return <GoogleButton mb={mb}>{children}</GoogleButton> 
  }
};
