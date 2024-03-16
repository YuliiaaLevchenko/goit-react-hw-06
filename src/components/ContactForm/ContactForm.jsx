import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from './ContactForm.module.css'

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("This is required!"),
  number: Yup.string()
  .min(3, "Too short!")
  .max(50, "Too long!")
  .required("This is required!"),
});

const ContactForm = ({ onFormSubmit }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

    return (
      <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={(values, actions) => {
        onFormSubmit(values);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label className={css.name} htmlFor={nameFieldId}>Name</label>
          <Field className={css.input} type="text" name="name" id={nameFieldId} />
          <ErrorMessage
            className={css.error}
            name="name"
            component="span"
          />
        </div>

        <div>
          <label className={css.number} htmlFor={numberFieldId}>Number</label>
          <Field className={css.input} type="text" name="number" id={numberFieldId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.button} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm
