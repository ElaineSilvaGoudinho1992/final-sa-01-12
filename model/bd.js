import 'dotenv/config';
import { Sequelize } from 'sequelize';

const conexao = new Sequelize(process.env.link)
export { conexao };

