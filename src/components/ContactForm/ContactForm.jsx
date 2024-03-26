import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import 'yup-phone-lite';
import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3).max(50).required('Required'),
  number: Yup.string().min(3).max(50).required('Required'),
});

const initialValues = { name: '', number: '' };

export default function ContactForm () {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ ...values }));
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