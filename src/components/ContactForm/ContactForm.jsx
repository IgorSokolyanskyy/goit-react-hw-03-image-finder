import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import { Input, Button, FormList } from './ContactForm.styled';
import { nanoid } from 'nanoid';

const nameInputId = nanoid();
const numberInputId = nanoid();

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm({ onSubmit }) {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormList autoComplete="off">
        <label htmlFor={nameInputId}>
          <p>Name</p>
          <Input
            id={nameInputId}
            type="text"
            name="name"
            placeholder="Full name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" />
        </label>

        <label htmlFor={numberInputId}>
          <p>Number</p>
          <Input
            id={numberInputId}
            type="tel"
            name="number"
            placeholder="111-11-11"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" />
        </label>

        <Button type="submit">Add contact</Button>
      </FormList>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
