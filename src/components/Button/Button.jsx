import { SecondaryButton, MainButton } from "./Button.styled";

export const Button = ({ children, type }) => {
  console.log(type);
  if (type === "secondary") {
    return <SecondaryButton>{children}</SecondaryButton>;
  }

  if (type === "main") {
    return <MainButton>{children}</MainButton>;
  }
};
