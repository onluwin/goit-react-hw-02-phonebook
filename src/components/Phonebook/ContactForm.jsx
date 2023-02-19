import { Formik, Form, Field } from 'formik';

import { SubmitButton } from './SubmitButton';

export const ContactForm = () => {
  const initialValues = { name: '', number: null };
  return (
    <Formik initialValues={initialValues}>
      <Form autoComplete="off">
        <Field
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <SubmitButton />
      </Form>
    </Formik>
  );
};
