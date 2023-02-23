import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Label, Title, ContactWrapper, SubmitButton } from "./styles";
import { Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
  message: Yup.string().required("Campo obrigatório"),
  phone: Yup.string().required("Campo obrigatório"),
  address: Yup.string().required("Campo obrigatório"),
});

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <ContactWrapper id="contact">
      <Container>
        <Title>Entre em contato conosco</Title>
        <Formik
          initialValues={{ email: "", message: "", phone: "", address: "" }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Label>E-mail:</Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={touched.email && !!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Label>Telefone:</Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  isInvalid={touched.phone && !!errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formAddress">
                <Label>Endereço:</Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  isInvalid={touched.address && !!errors.address}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.address}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Label>Mensagem:</Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  isInvalid={touched.message && !!errors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message}
                </Form.Control.Feedback>
              </Form.Group>
              <SubmitButton>
                <button type="submit">Enviar</button>
              </SubmitButton>
            </Form>
          )}
        </Formik>
      </Container>
    </ContactWrapper>
  );
};

export default ContactForm;
