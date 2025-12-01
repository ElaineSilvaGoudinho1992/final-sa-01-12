import React from 'react';

function ListaAnimais({ pets, onSelectPet }) {
  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>Com quem será seu Final Feliz?</h1>
      
      <div className="pet-grid">
        {pets.map((pet) => (
          <div 
            key={pet.id} 
            className="pet-card" 
            onClick={() => onSelectPet(pet)} // Ao clicar, seleciona o animal
          >
            {/* Foto do animal */}
            <div 
                style={{ 
                    backgroundImage: `url(${pet.foto})`, 
                    height: '200px', 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }} 
            />
            
            <div style={{ padding: '15px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#000000ff' }}>{pet.nome}</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#070000ff' }}>
                {pet.raca} • {pet.localizacao}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaAnimais;