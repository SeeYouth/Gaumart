import React from 'react';

import { useLocation } from 'react-router-dom';

import Footer from '../components/footer/Footer';
import FormSubmitComponent from '../components/formSubmit/FormSubmitComponent';
import NavBar from '../components/navBar/NavBar';

const FormSubmit = () => {
  const location = useLocation();
  const { formData } = location.state;
  return (
    <>
    <NavBar />
    <FormSubmitComponent formData={formData} />
    <Footer />
    </>
  );
};

export default FormSubmit;
