import React, { useState } from 'react';

function Login({ goToCadastro, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isRecovering, setIsRecovering] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
      });
      const data = await response.json();
      if (data.success) {
        alert('Bem-vindo ao Final Feliz');
        console.log("User:", data.user);
        onLoginSuccess();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao conectar com o servidor.');
    }
  };

  const handleRecover = (e) => {
    e.preventDefault();
    alert('Função de recuperar senha será implementada em breve.');
  };

  return (
    <div className="form-container">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        {isRecovering ? 'Recuperar Senha' : 'Seja Bem Vindo!'}
      </h2>

      {isRecovering ? (
        <form onSubmit={handleRecover}>
          <input
            type="email"
            placeholder="Digite seu email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn-primary">Enviar Link</button>
          <p className="link-text" onClick={() => setIsRecovering(false)}>
            Voltar ao Login
          </p>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email ou número de telefone"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            className="input-field"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <button type="submit" className="btn-primary">Entrar</button>


          <p className="link-text" onClick={goToCadastro}>
            Cadastre-se
          </p>


          <p className="link-text" onClick={() => setIsRecovering(true)}>
            Esqueceu a senha?
          </p>
        </form>
      )}
    </div>
  );
}

export default Login;