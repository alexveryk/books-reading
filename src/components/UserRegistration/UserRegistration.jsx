import { Formik } from "formik";
import { Container } from "../Container/Container";
import { Button } from "../Button/Button";
import { UserRegistartionWraper } from "./UserRegistration.styled";

export const UserRegistration = () => {
    return (
        <Container>
          <UserRegistartionWraper >
          <Button type="googleButton" mb="20px">Google</Button>
                   <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = "Обов'язково";
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Невірна електронна пошта';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
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
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={isSubmitting}>
             Зареєструватися
           </button>
         </form>
       )}
     </Formik>
     </UserRegistartionWraper>
        </Container>

  
    )
}