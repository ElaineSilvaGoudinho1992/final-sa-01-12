import { DataTypes } from "sequelize";
import { conexao } from "./bd.js";


// --- 2. Definição do Model (Mapeamento da Imagem) ---
const Pet = conexao.define('Pet', {
    // O 'id' geralmente é gerado automaticamente pelo banco, 
    // mas podemos definir explicitamente se necessário.
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idade: {
        // Na imagem está "2 meses" (string), então usamos STRING. 
        // Se fosse apenas o número, usaríamos INTEGER.
        type: DataTypes.STRING,
        allowNull: false
    },
    localizacao: {
        type: DataTypes.STRING
    },
    raca: {
        type: DataTypes.STRING
    },
    porte: {
        type: DataTypes.STRING
        // Dica: Futuramente você pode usar DataTypes.ENUM('Pequeno', 'Médio', 'Grande')
    },
    descricao: {
        // TEXT é melhor que STRING para descrições longas
        type: DataTypes.TEXT
    },
    vacinas: {
        // Na imagem é true/false
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    foto: {
        // URLs são strings longas
        type: DataTypes.STRING(2048)
    }
}, {
    // Opções do Model
    tableName: 'pets', // Nome da tabela no Supabase
    timestamps: true   // Cria colunas createdAt e updatedAt automaticamente
});

export {Pet}