import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Hero';

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <h2>Kapcsolat</h2>
        <p>
          <strong>Email:</strong> <a href="mailto:palmartin99@gmail.com">palmartin99@gmail.com</a>
        </p>
        <p>
          <strong>Telefon:</strong> +36 20 624 05 57
        </p>
        <p>
          <strong>Cím:</strong> Budapest 1157, Kőrakás park 28, 3/7
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
