import React, { useState } from 'react';

function FormularioAdocao({ goToPerfil }) {
  const [formData, setFormData] = useState({
    localAdequado: '',
    outrosAnimais: '',
    jaTeveAnimais: '',
    motivo: '' // Adicionei um campo extra para ficar mais completo
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envia os dados para o Backend
      const response = await fetch('http://localhost:3001/api/adocao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        alert('Solicitação enviada com sucesso! Nossa equipe entrará em contato.');
        goToPerfil(); // Volta para a tela do animal
      } else {
        alert('Houve um erro no envio.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro de conexão com o servidor.');
    }
  };

  return (
    <div className="form-container">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Formulário de Adoção</h2>
      <p style={{ textAlign: 'center', color: '#000000ff', marginBottom: '30px' }}>
        Responda com sinceridade para encontrarmos o par perfeito.
      </p>

      <form onSubmit={handleSubmit}>

        <label style={{ display: 'block', marginBottom: '10px', color: '#000000ff' }}>
          Sua casa possui espaço adequado e seguro?
        </label>
        <select
          name="localAdequado"
          value={formData.localAdequado}
          onChange={handleChange}
          className="input-field"
          required
        >
          <option value="">Selecione...</option>
          <option value="sim">Sim, é telada/murada</option>
          <option value="nao">Não, é aberta</option>
          <option value="apto">Moro em apartamento telado</option>
        </select>

        <label style={{ display: 'block', marginBottom: '10px', color: '#000000ff' }}>
          Possui outros animais?
        </label>
        <select
          name="outrosAnimais"
          value={formData.outrosAnimais}
          onChange={handleChange}
          className="input-field"
          required
        >
          <option value="">Selecione...</option>
          <option value="nao">Não</option>
          <option value="sim_gatos">Sim, gatos</option>
          <option value="sim_caes">Sim, cães</option>
          <option value="sim_ambos">Sim, roedores</option>
          <option value="sim_ambos">Sim, aves</option>
          <option value="sim_ambos">Sim, outros</option>
        </select>

        <label style={{ display: 'block', marginBottom: '10px', color: '#000000ff' }}>
          Já teve outros animais antes?
        </label>
        <select
          name="jaTeveAnimais"
          value={formData.jaTeveAnimais}
          onChange={handleChange}
          className="input-field"
          required
        >
          <option value="">Selecione...</option>
          <option value="sim">Sim</option>
          <option value="nao">Não, é o primeiro</option>
        </select>

        <label style={{ display: 'block', marginBottom: '10px', color: '#000000ff' }}>
          Por que você quer adotar?
        </label>
        <textarea
          name="motivo"
          value={formData.motivo}
          onChange={handleChange}
          className="input-field"
          placeholder="Conte um pouco sobre sua rotina..."
          rows="3"
        />

        <button type="submit" className="btn-primary">
          Enviar Solicitação
        </button>

        <p className="link-text" onClick={goToPerfil}>
          Cancelar e Voltar
        </p>

      </form>
    </div>
  );
}

export default FormularioAdocao;