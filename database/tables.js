import { DataTypes } from "sequelize";
import mysql from "./mysql.js";

const Cliente = mysql.define('Cliente',{
nome: DataTypes.STRING,
bairro: DataTypes.STRING,
telefone: DataTypes.STRING,
email: DataTypes.STRING
});

const Produto = mysql.define('Produto',{
nome: DataTypes.STRING,
preco: DataTypes.DECIMAL
});

const Entrega = mysql.define('Entrega',{
data: DataTypes.DATE,
rua: DataTypes.STRING,
numero_rua: DataTypes.INTEGER,
bairro: DataTypes.STRING
});

const Categoria = mysql.define('Categoria',{
nome: DataTypes.STRING
});

const Funcionario = mysql.define('Funcionario',{
nome: DataTypes.STRING,
telefone: DataTypes.STRING,
cargo: DataTypes.STRING,
cpf: DataTypes.STRING
});

const Venda = mysql.define('Venda',{
data: DataTypes.DATE,
valor: DataTypes.DOUBLE,
quantidade_produtos: DataTypes.INTEGER,
numero_venda: DataTypes.INTEGER
});



Venda.belongsTo(Cliente);
Cliente.hasMany(Venda);

Venda.belongsTo(Entrega);
Entrega.hasMany(Venda);

Venda.belongsTo(Funcionario);
Funcionario.hasMany(Venda);

Produto.belongsTo(Categoria);
Categoria.hasMany(Produto);

Produto.belongsToMany(Venda, {through: 'Venda_Produto'});
Venda.belongsToMany(Produto, {through: 'Venda_Produto'});

 // mysql.sync({ force: true });
mysql.sync();

export { Cliente, Produto, Entrega, Categoria, Funcionario, Venda };