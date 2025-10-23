import { Formik } from "formik";
import { Container } from "../Container/Container";
import { Button } from "../Button/Button";
import {
  UserRegistartionWraper,
  Label,
  Input,
  AlreadyWithUsText,
  ToLoginPageButton,
  AlreadyWithUs,
  RequiredMark,
  FlexCenter,
  SubTitle,
  TabletRegistration,
} from "./UserRegistration.styled";
import { useEffect, useState } from "react";
import { AuthIntro } from "../AuthIntro/AuthIntro";

export const UserRegistration = () => {
  const [isTablet, setIsTablet] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsTablet(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <TabletRegistration>
      <Container>
        <FlexCenter>
          <UserRegistartionWraper>
            <Button type="googleButton" mb="20px">
              Google
            </Button>
            <Formik
              initialValues={{ email: "", password: "", userName: "" }}
              // Валідація форми, додати після нарисання форми
              // validate={(values) => {
              //   const errors = {};
              //   if (!values.email) {
              //     errors.email = "Обов'язково";
              //   } else if (
              //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              //   ) {
              //     errors.email = "Невірна електронна пошта";
              //   }
              //   return errors;
              // }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}>
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <Label htmlFor="userName">
                    Ім’я <RequiredMark>*</RequiredMark>
                  </Label>
                  <Input
                    placeholder="..."
                    type="text"
                    name="userName"
                    id="userName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userName}
                  />
                  <Label htmlFor="email">
                    Електронна адреса <RequiredMark>*</RequiredMark>
                  </Label>
                  <Input
                    placeholder="your@email.com"
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <Label htmlFor="password">
                    Пароль <RequiredMark>*</RequiredMark>
                  </Label>
                  <Input
                    placeholder="..."
                    id="password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && errors.password}
                  <Label htmlFor="password">
                    Підтвердити пароль <RequiredMark>*</RequiredMark>
                  </Label>
                  <Input
                    placeholder="..."
                    id="password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <Button
                    type="main"
                    mb={"20px"}
                    w="100%"
                    disabled={isSubmitting}>
                    Зареєструватися
                  </Button>
                </form>
              )}
            </Formik>
            <AlreadyWithUs>
              <AlreadyWithUsText>Вже з нами?</AlreadyWithUsText>
              <ToLoginPageButton>Увійти</ToLoginPageButton>
            </AlreadyWithUs>
          </UserRegistartionWraper>
        </FlexCenter>
      </Container>
      <SubTitle>
        <Container>{isTablet && <AuthIntro />}</Container>
      </SubTitle>
    </TabletRegistration>
  );
};
