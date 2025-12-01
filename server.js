import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// --- "Banco de Dados" em Memória ---
const usuarios = [];
const pets = [
    {
        id: 1,
        nome: 'Bob',
        idade: '2 meses',
        localizacao: 'Brasília',
        raca: 'Vira-lata (SRD)',
        porte: 'Pequeno',
        descricao: 'Filhote resgatado, dócil e carinhoso. Adora brincar de bolinha.',
        vacinas: true,
        foto: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=300&q=80' 
    },
    {
        id: 2,
        nome: 'Mel',
        idade: '1 ano',
        localizacao: 'São Paulo',
        raca: 'Golden Retriever',
        porte: 'Grande',
        descricao: 'Alegre e cheia de energia. Precisa de espaço para correr.',
        vacinas: true,
        foto: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 3,
        nome: 'Thor',
        idade: '3 anos',
        localizacao: 'Rio de Janeiro',
        raca: 'Bulldog',
        porte: 'Médio',
        descricao: 'Calmo, adora dormir no sofá. Ótimo para apartamento.',
        vacinas: false,
        foto: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=300&q=80'
    },
{
        id: 4,
        nome: 'Mingau',
        idade: '2 anos',
        localizacao: 'Curitiba',
        raca: 'Gato Persa',
        porte: 'Médio',
        descricao: 'Um lorde. Gosta de silêncio e sachê de salmão. Muito peludo!',
        vacinas: true,
        foto: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 5,
        nome: 'Salem',
        idade: '4 anos',
        localizacao: 'São Paulo',
        raca: 'Gato Preto (SRD)',
        porte: 'Pequeno',
        descricao: 'Carinhoso e místico. Dizem que traz sorte para quem adota.',
        vacinas: true,
        foto: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 6,
        nome: 'Frajola',
        idade: '6 meses',
        localizacao: 'Belo Horizonte',
        raca: 'Malhado',
        porte: 'Pequeno',
        descricao: 'Muito brincalhão, adora perseguir brinquedos de pena.',
        vacinas: false,
        foto: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 7,
        nome: 'Tambor',
        idade: '1 ano',
        localizacao: 'Porto Alegre',
        raca: 'Mini Lionhead',
        porte: 'Pequeno',
        descricao: 'Uma bolinha de pelos! Precisa de escovação, mas é muito dócil.',
        vacinas: true,
        // Foto de um coelho bem peludo (Lionhead style)
        foto: 'https://images.unsplash.com/photo-1559214369-a6b1d7919865?auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 8,
        nome: 'Pernalonga',
        idade: '8 meses',
        localizacao: 'Campinas',
        raca: 'Coelho Comum',
        porte: 'Médio',
        descricao: 'Esperto e curioso. Adora cenoura (de verdade!).',
        vacinas: true,
        foto: 'https://images.unsplash.com/photo-1518796745738-41048802f99a?auto=format&fit=crop&w=300&q=80'
    },
    {
        id: 9,
        nome: 'Lola',
        idade: '5 meses',
        localizacao: 'Florianópolis',
        raca: 'Holland Lop',
        porte: 'Pequeno',
        descricao: 'Tem as orelhinhas caídas e é muito calma no colo.',
        vacinas: false,
        // Foto de coelho com orelha caída (Lop)
        foto: 'https://images.unsplash.com/photo-1589139268383-7d72224d4a8e?auto=format&fit=crop&w=300&q=80'
    }
];

// --- Rotas ---

// 1. Login
app.post('/api/login', (req, res) => {
    const { email, senha } = req.body;
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuario) {
        res.json({ success: true, message: 'Login realizado!', user: usuario });
    } else {
        // Backdoor para teste
        if(email === 'elaine@elaine.com' && senha === 'elaine') {
             res.json({ success: true, message: 'Login Admin', user: { nome: 'Elaine' } });
        } else {
             res.status(401).json({ success: false, message: 'Email ou senha incorretos' });
        }
    }
});

// 2. Cadastro
app.post('/api/cadastro', (req, res) => {
    const novoUsuario = req.body;
    
    if (!novoUsuario.email || !novoUsuario.senha) {
        return res.status(400).json({ success: false, message: 'Dados incompletos' });
    }
    
    usuarios.push(novoUsuario);
    console.log('Novo usuário cadastrado:', novoUsuario);
    res.json({ success: true, message: 'Usuário cadastrado com sucesso!' });
});

// 3. Pegar Pet
app.get('/api/pets', (req, res) => {
    res.json(pets);
});

// 4. Adoção
app.post('/api/adocao', (req, res) => {
    const solicitacao = req.body;
    console.log('Nova solicitação de adoção:', solicitacao);
    res.json({ success: true, message: 'Solicitação recebida!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});