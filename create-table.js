import {sql} from './db.js'

/*
sql`DROP TABLE IF EXISTS accounts;`.then(() => {
    console.log('Tabela apagada!')
})
*/



sql`
    CREATE TABLE IF NOT EXISTS accounts (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        firstname VARCHAR(50) NOT NULL,
        lastname VARCHAR(50) NOT NULL,
        password VARCHAR(255) NOT NULL,
        age INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
`.then(() => {
    console.log('Tabela criada!')
})
