import React, { useState } from 'react';

const Formulario = () => {
  const [formData, setFormData] = useState({
    carimbo_de_data_hora: '',
    nome_completo: '',
    data_de_nascimento: '',
    genero: '',
    ocupacao: '',
    telefone: '',
    instagram: '',
    email: '',
    regiao_onde_mora: '',
    orgao: '',
    comunidade: '',
    origem: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3333/BaseDeDados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Erro ao enviar o formulário');
      }
      const result = await response.json();
      console.log('Dados enviados:', result);
    } catch (err) {
      console.error('Erro:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome_completo"
        value={formData.nome_completo}
        onChange={handleChange}
        placeholder="Nome Completo"
      />
      {/* Adicione mais campos conforme necessário */}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
