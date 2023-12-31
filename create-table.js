import {sql} from './db.js'

/*
sql`DROP TABLE IF EXISTS accounts;`.then(() => {
    console.log('Tabela apagada!')
})
*/

/*
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
 */



sql`
    CREATE TABLE achievements (
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES accounts(id),
        date DATE,
        achievement_type VARCHAR(255)
    );
`.then(() => {
    console.log('Tabela criada!')
})
