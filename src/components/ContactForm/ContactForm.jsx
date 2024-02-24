import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3).max(50).required('Required'),
  number: Yup.string().min(3).max(50).required('Required'),
});

const initialValues = { name: '', number: '' };

const ContactForm = ({ onAddContact }) => {
  const nameFieldId = nanoid(9); 
  const numberFieldId = nanoid(9);

  const handleSubmit = (values, actions) => {
    onAddContact({ id: nanoid(9), name: values.name, number: values.number });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.form}>
        <label htmlFor={nameFieldId} className={styles.label}>Name</label>
        <Field type="text" name="name" id={nameFieldId} className={styles.input} />
        <ErrorMessage name="name" component="span" className={styles.error} />

        <label htmlFor={numberFieldId} className={styles.label}>Number</label>
        <Field type="text" name="number" id={numberFieldId} className={styles.input} />
        <ErrorMessage name="number" component="span" className={styles.error} />

        <button type="submit" className={styles.button}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

