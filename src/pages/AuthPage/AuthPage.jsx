import { AuthIntro } from "../../components/AuthIntro/AuthIntro";
import { Menu } from "../../components/Menu/Menu";
import { UserRegistration } from "../../components/UserRegistration/UserRegistration";
import bgImg from "../../assets/images/authBg.jpg";
import { AuthBgWraper } from "./AuthPage.styled";

export const AuthPage = () => {
  return (
    <>
      <AuthBgWraper bgImage={bgImg}>
        <Menu />

        {/* <AuthIntro /> */}
        <UserRegistration />
      </AuthBgWraper>
    </>
  );
};
