"use client"

import React, { useState, useRef } from 'react';
import Menu from '../components/menu.tsx';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [certificadoURL, setCertificadoURL] = useState('');
  const modalRef = useRef(null);

  const openModal = (url) => {
    setCertificadoURL(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCertificadoURL('');
  };

  const handleCloseModalOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <aside className="lg:w-1/2 bg-zinc-950 bg-opacity-25 backdrop-blur-none p-8">
      <Menu />
        <div className="flex flex-col justify-center items-center lg:items-start">
           <img
               src="https://media.licdn.com/dms/image/D4E03AQGwqEWYBi2tlg/profile-displayphoto-shrink_200_200/0/1697739381460?e=2147483647&v=beta&t=HBDGFQZzw-Qkszue8uXyfAlrDe1ae3xh9fU8qysnv9M"
               className="rounded-full w-72 h-72"
               alt="Descrição da imagem"
            />
          <h1 className="text-white text-5xl lg:text-8xl mt-10">BRUNO<br /> ZANINI</h1>
          <div className="mt-14 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl text-black-400">OBJETIVO:</h1>
            <p className="mt-5 text-xl lg:text-4xl text-white p-2">
              Em busca de uma oportunidade para iniciar minha carreira e adquirir experiência, estou comprometido em aprender e crescer rapidamente, contribuindo com dedicação em um ambiente de trabalho desafiador.
            </p>
          </div>
          <div className="mt-14 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl text-black-400">EDUCAÇÃO:</h1>
            <ul className="mt-5 text-xl lg:text-4xl text-white">
              <li className="p-2">Ensino Superior Incompleto</li>
              <li className="p-2">Cursando: Análises e Desenvolvimento de Sistemas</li>
            </ul>
          </div>
          <div className="mt-14 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl text-black-400">LÍNGUAS:</h1>
            <ul className="mt-5 text-xl lg:text-4xl text-white">
              <li className="p-2">Português - Nativo</li>
              <li className="p-2">Inglês - Básico</li>
              <li className="p-2">Espanhol - Básico</li>
            </ul>
          </div>
          <div className="mt-14">
            <h1 className="text-3xl lg:text-5xl text-black-400">Contatos:</h1>
            <ul className="mt-5 text-xl lg:text-4xl text-white">
              <li className="flex items-center justify-center lg:justify-start ml-0 lg:ml-9 h-fit hover:text-blue-700">
                {/* <EnvelopeSimple size={30} /> */}
                <a href="mailto:zaninibruno0@gmail.com" className="ml-1 p-2">zaninibruno0@gmail.com</a>
              </li>
              <li className="flex items-center justify-center lg:justify-start ml-0 lg:ml-9 h-fit hover:text-blue-700">
                {/* <LinkedinLogo size={32} /> */}
                <a href="https://www.linkedin.com/in/bruno-zanini-701223135/" className="ml-1 p-2">Bruno Zanini</a>
              </li>
              <li className="flex items-center justify-center lg:justify-start ml-0 lg:ml-9 h-fit hover:text-grey-700">
                {/* <GitlabLogo size={32} /> */}
                <a href="https://github.com/" className="ml-1 p-2"></a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <section className="lg:w-1/2 bg-black-600 bg-opacity-25 p-8">
        <div className="flex flex-col justify-center items-center lg:items-start">
          <div className="mt-2 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl text-black-400">CURSOS<br /> COMPLEMENTARES:</h1>
            <hr />
            <ul className="mt-5 text-sl lg:text-4xl text-green">
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/MW9DBXQM.pdf")}>Python Data Analytics</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/7UXVWUZN.pdf")}>Santander Bootcamp Cibersegurança</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/DB5DXKJ8.pdf")}>Formação Cybersecurity Specialist</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/SMY0H5IP.pdf")}>Introdução a Banco de Dados NoSQL</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/2AJFY45C.pdf")}>Introdução a Análise de Dados com SQL (SQL)</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/2V3MOU4M.pdf")}>Introdução a Banco de Dados Relacionais (SQL)</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/STAKFUOQ.pdf")}>Primeiros Passos em SQL e NoSQL</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/F1RNEOD9.pdf")}>Fundamentos Teóricos Sobre ETL</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/46ZTOWTA.pdf")}>Fundamentos de BI: KPIs e Métricas</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/QDIYJWJL.pdf")}>Conhecendo a Linguagem de Programação Python</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/HJJWX1CD.pdf")}>Princípios de Desenvolvimento de Software Colaborativo</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/RHFN1M0K.pdf")}>Python Essencial e Desenvolvimento Colaborativo com Git</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/BBWQYTZN.pdf")}>Príncipios da Cibersegurança</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/I6GPNMBY.pdf")}>Fundamentos de Cibersegurança</li>
              <li className="p-2 hover:text-blue-700" onClick={() => openModal("https://hermes.dio.me/certificates/AWYQXIUI.pdf")}>Aceleração Internacional - Creating a Secure REST API with Python and Django</li>
            </ul>
          </div>
          <div className="mt-14 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl text-black-400">HABILIDADES:</h1>
            <hr/>
            <ul className="mt-5 text-4xl text-green list-disc">              
              <li className="ml-16 p-1">Linux</li>
              <li className="ml-16 p-1">Windows</li>
              <li className="ml-16 p-1">Pacote office</li>
              <li className="ml-16 p-1">Git</li>
              <li className="ml-16 p-1">Figma</li>
              <li className="ml-16 p-1">React</li>
              <li className="ml-16 p-1">JavaScript</li>
              <li className="ml-16 p-1">Typescript</li>
              <li className="ml-16 p-1">HTML5</li>
              <li className="ml-16 p-1">CSS3</li>
              <li className="ml-16 p-1">Tailwindcss</li>
              <li className="ml-16 p-1">Python</li>
              <li className="ml-16 p-1">SQL</li>
              <li className="ml-16 p-1">NoSQL</li>
              
            </ul>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal-container" onClick={handleCloseModalOutside}>
          <div className="modal" ref={modalRef}>
            <div className="modal-content">
              <span className="close" onClick={closeModal}><X size={25} /></span>
              <iframe title="Certificado" src={certificadoURL} width="1250" height="860"></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
