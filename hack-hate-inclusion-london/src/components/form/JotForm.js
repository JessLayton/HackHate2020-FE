import React from 'react';
import JotformEmbed from 'react-jotform-embed';

const Form = () => (
  <JotformEmbed src={process.env.REACT_APP_JOTFORM_URL} />
);

export default Form;
