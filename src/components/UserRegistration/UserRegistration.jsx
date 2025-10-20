import { Formik } from "formik";
import { Container } from "../Container/Container";
import { Button } from "../Button/Button";
import {
  UserRegistartionWraper,
  Label,
  Input,
} from "./UserRegistration.styled";

export const UserRegistration = () => {
  return (
    <Container>
      <UserRegistartionWraper>
        <Button type="googleButton" mb="20px">
          Google
        </Button>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Обов'язково";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Невірна електронна пошта";
            }
            return errors;
          }}
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
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <Label htmlFor="password">Пароль:</Label>
              <Input
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <Button type="main" w="100%" disabled={isSubmitting}>
                Зареєструватися
              </Button>
            </form>
          )}
        </Formik>
      </UserRegistartionWraper>
    </Container>
  );
};
