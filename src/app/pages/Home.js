import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h2>Üdvözöllek a portfóliómban!</h2>
        <p>Pál Martin vagyok, szoftverfejlesztő gyakornok. Itt találhatók az eddigi tapasztalataim és projektjeim.</p>
        
        <h3>Tapasztalatok</h3>
        <ul>
          <li>Software Developer Intern - Rober Bosch Kft. (2022. Szeptember - 2024. Szeptember)</li>
          <li>Software Developer Intern - B. Braun Medical Kft. (2022. Február - 2022. Szeptember)</li>
        </ul>

        <h3>Oktatás</h3>
        <ul>
          <li>Óbuda University, NIK - Bachelor of IT Engineer (2020. Szeptember - Jelenleg)</li>
          <li>Demonstrator, ASP.NET Core oktatás (2024. Február - 2024. Június)</li>
        </ul>

        <h3>Technikai készségek</h3>
        <ul>
          <li>Python, Django</li>
          <li>Deep Learning, Machine Learning</li>
          <li>Git, MSSQL, MongoDB</li>
          <li>Angular, JavaScript, C#, ASP.NET Core, WPF, Docker</li>
        </ul>

        <h3>Személyes készségek</h3>
        <ul>
          <li>Csapatmunka, Kreativitás, Gyors tanulás</li>
          <li>Angol nyelvtudás (C1), Német nyelvtudás (A2)</li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Home;
