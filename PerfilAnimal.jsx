import React from 'react';

function PerfilAnimal({ pet, goToForm }) {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      
      {/* Área Hero do Pet */}
      <div className="pet-hero">
        <h1 className="pet-title">{pet.nome}</h1>
        <p className="pet-details">
          {pet.idade} • {pet.raca} • {pet.localizacao}
        </p>
        <div style={{ marginTop: '15px' }}>
          <span className="tag-badge">{pet.porte}</span>
          <span className="tag-badge">{pet.vacinas ? 'Vacinado' : ''}</span>
          <span className="tag-badge">{pet.compatibilidade}</span>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        <h3>História</h3>
        <p style={{ color: 'bla', lineHeight: '1.6' }}>{pet.descricao}</p>

        <hr style={{ borderColor: '#718FC8', margin: '20px 0' }} />

        <h3>Saúde e Cuidados</h3>
        <ul style={{ color: '#ffffffff' }}>
            <li>Vacinas: {pet.vacinas ? 'Em dia' : 'Pendentes'}</li>
            <li>Vermífugo: {pet.desvermifugado ? 'Sim' : 'Não'}</li>
        </ul>

        <button className="btn-primary" onClick={goToForm} style={{ marginTop: '30px' }}>
          Quero Adotar
        </button>
      </div>
    </div>
  );
}

export default PerfilAnimal;