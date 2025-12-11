import { Sequelize } from "sequelize";

import pg from 'pg';

const mysql = new Sequelize({
dialect: 'postgres',
dialectModule: pg,
host: 'dpg-d4omnlidbo4c73f7e7ug-a',
port: '5432',
database: 'database_projeto_i3a_wed7',
username: 'user_database_projeto_i3a',
password: 'MMbBkpGiqMoGCscwoOoCJJJOAYB8MlSa'
});

/*
import mysql2 from "mysql2";

const mysql = new Sequelize({
dialect: 'mysql',
dialectModule: mysql2,
host: 'localhost',
port: '3306',
database: 'mercadoa',
username: 'root',
password: 'root'
});
*/

export default mysql;