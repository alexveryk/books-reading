import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import checkIcon from "../../assets/check.svg";
import {
  List,
  ListItem,
  SubTitle,
  Title,
  ButtonWrapper,
} from "./AuthIntro.styled";

export const AuthIntro = () => {
  console.log(checkIcon);
  return (
    <Container>
      <Title>Books Reading</Title>
      <SubTitle>Допоможе вам</SubTitle>
      <List>
        <ListItem>Швидше сформулювати свою ціль і розпочати читати</ListItem>
        <ListItem>Пропорційно розподілити навантаження на кожний день</ListItem>
        <ListItem>Відстежувати особистий успіх</ListItem>
      </List>
      <SubTitle>Також ви зможете </SubTitle>
      <List>
        <ListItem>Формувати особисту думку незалежну від інших</ListItem>
        <ListItem>
          Підвищити свої професійні якості опираючись на нові знання
        </ListItem>
        <ListItem>Стати цікавим співрозмовником</ListItem>
      </List>
      <ButtonWrapper>
        <Button type={"secondary"}>Увійти</Button>
        <Button type={"main"}>Реєстрація</Button>
      </ButtonWrapper>
    </Container>
  );
};
