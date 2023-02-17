import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import ContactForm from "./components/ContactForm";
import HistorySection from "./components/HistorySection";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";

function App() {
  const products = [
    {
      id: 1,
      name: "Ração para Cães Adultos",
      description: "Ração sabor frango para cães adultos com 10kg",
    },
    {
      id: 2,
      name: "Shampoo Antipulgas",
      description:
        "Shampoo para cães com fórmula antipulgas e antisséptica com 500ml",
    },
    {
      id: 3,
      name: "Brinquedo para Gatos",
      description: "Brinquedo de pelúcia para gatos em formato de ratinho",
    },
    {
      id: 4,
      name: "Cama para Cães",
      description: "Cama de tecido confortável para cães de pequeno porte",
    },
    {
      id: 5,
      name: "Coleira para Cães",
      description:
        "Coleira de nylon com fecho de plástico para cães de médio porte",
    },
    {
      id: 6,
      name: "Comedouro para Gatos",
      description: "Comedouro de cerâmica para gatos com estampa de patinhas",
    },
    {
      id: 7,
      name: "Guia para Cães",
      description: "Guia retrátil para cães com 3m de comprimento",
    },
    {
      id: 8,
      name: "Ração para Gatos Filhotes",
      description: "Ração sabor salmão para gatos filhotes com 2kg",
    },
    {
      id: 9,
      name: "Areia Higiênica para Gatos",
      description:
        "Areia higiênica para gatos de grão fino com aroma de lavanda com 2kg",
    },
    {
      id: 10,
      name: "Escova para Cães e Gatos",
      description: "Escova com cerdas macias para cães e gatos de pelo curto",
    },
  ];

  const services = [
    { id: 1, name: "Banho", description: "Banho e tosa para o seu pet" },
    {
      id: 2,
      name: "Consulta",
      description: "Consulta veterinária com profissionais qualificados",
    },
    {
      id: 3,
      name: "Vacinação",
      description: "Vacinação para seu pet com preços acessíveis",
    },
  ];

  const text = {
    title: "Nossa História",
    content: [
      "O PetShop XYZ foi fundado em 2005 com o objetivo de fornecer produtos e serviços de qualidade para os animais de estimação de nossos clientes. Desde então, temos nos esforçado para manter nossa reputação de excelência em atendimento ao cliente e cuidados com animais.",
      "Ao longo dos anos, expandimos nossos serviços para incluir banho e tosa, hospedagem e treinamento de cães. Além disso, estamos constantemente procurando maneiras de inovar e melhorar nossos serviços para atender às necessidades em constante evolução de nossos clientes e seus animais de estimação.",
      "Nossa equipe é composta por profissionais qualificados e experientes que amam animais e estão comprometidos em fornecer o melhor atendimento possível. Estamos ansiosos para ajudá-lo a cuidar de seus animais de estimação e esperamos vê-lo em breve em nosso PetShop!",
    ],
  };

  const TestimonialData = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, velit vitae bibendum efficitur.",
      author: "João Silva",
      company: "Empresa ABC",
    },
    {
      id: 2,
      text: "Sed vitae leo at elit fringilla gravida. Aliquam consectetur arcu sed dui lacinia, nec commodo odio blandit.",
      author: "Maria Souza",
      company: "Empresa XYZ",
    },
    {
      id: 3,
      text: "Donec rhoncus ullamcorper nisi, ac hendrerit purus auctor eget. Sed quis sapien ut lacus tincidunt euismod.",
      author: "José Santos",
      company: "Empresa 123",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container">
        <ProductList type="products" tasks={products} />
        <ProductList type="services" tasks={services} />
        <ContactForm />
        <HistorySection title={text.title} content={text.content} />
        <TestimonialSection testimonials={TestimonialData} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
