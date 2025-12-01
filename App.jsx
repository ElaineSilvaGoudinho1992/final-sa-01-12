import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './/pages/Login';
import CadastroUsuario from './pages/CadastroUsuario';
import PerfilAnimal from './pages/PerfilAnimal';
import FormularioAdocao from './pages/FormularioAdocao';
import ListaAnimais from './pages/ListaAnimais';
function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [listaPets, setListaPets] = useState([]);
  const [petSelecionado, setPetSelecionado] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/pets')
      .then(res => res.json())
      .then(data => setListaPets(data))
      .catch(err => console.error("Erro ao buscar pets:", err));
  }, []);

  const handleSelectPet = (pet) => {
    setPetSelecionado(pet);
    setCurrentPage('PerfilAnimal');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
             return <Login goToCadastro={() => setCurrentPage('cadastro')} onLoginSuccess={() => setCurrentPage('home')} />;
      
      case 'cadastro':
        return <CadastroUsuario goToLogin={() => setCurrentPage('login')} />;
      
      case 'home':
        return <ListaAnimais pets={listaPets} onSelectPet={handleSelectPet} />;

      case 'perfilAnimal':
       
        if (!petSelecionado) return <ListaAnimais pets={listaPets} onSelectPet={handleSelectPet} />;
        
        return (
          <div style={{position: 'relative'}}>
            <button 
                onClick={() => setCurrentPage('home')} 
                style={{position: 'absolute', top: 0, left: 0, background:'transparent', border:'none', color:'white', fontSize:'1.5rem', cursor:'pointer'}}
            >
             ⬅
            </button>
            <PerfilAnimal pet={petSelecionado} goToForm={() => setCurrentPage('adocao')} />
          </div>
        );

      case 'adocao':
        return <FormularioAdocao goToPerfil={() => setCurrentPage('perfilAnimal')} />;
      
      default:
        return <Login goToCadastro={() => setCurrentPage('cadastro')} />;
    }
  };

  return (
    <div className="app-container">
      <h1 className="logo" onClick={() => setCurrentPage('home')} style={{cursor:'pointer'}}> Final Feliz  </h1>
      {renderPage()}
    </div>
  );
}

export default App;