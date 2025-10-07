import { Container } from "../Container/Container";
import { Logo } from "../Logo/Logo";
import { StyledMenu } from "./Menu.styled";

export const Menu = () => {
  return (
    <StyledMenu>
      <Container>
        <Logo />
      </Container>
    </StyledMenu>
  );
};
