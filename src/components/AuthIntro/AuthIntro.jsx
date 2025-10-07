import { Container } from "../Container/Container";
import { ListItem, SubTitle, Title } from "./AuthIntro.styled";

export const AuthIntro = () => {
  return (
    <Container>
      <Title>Books Reading</Title>
      <SubTitle>Допоможе вам</SubTitle>
      <ul>
        <ListItem>Швидше сформулювати свою ціль і розпочати читати</ListItem>
        <ListItem>Пропорційно розподілити навантаження на кожний день</ListItem>
        <ListItem>Відстежувати особистий успіх</ListItem>
      </ul>
      <SubTitle>Також ви зможете </SubTitle>
      <ul>
        <ListItem>Формувати особисту думку незалежну від інших</ListItem>
        <ListItem>
          Підвищити свої професійні якості опираючись на нові знання
        </ListItem>
        <ListItem>Стати цікавим співрозмовником</ListItem>
      </ul>
    </Container>
  );
};
