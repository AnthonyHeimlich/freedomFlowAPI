import { randomUUID} from 'node:crypto'
import {sql} from "./db.js";

export class DatabasePostgres{

    async createAchievement(achievement){
        const {user_id, date, achievement_type} = achievement

        await sql`insert into achievements (user_id, date, achievement_type) VALUES (${user_id}, TO_CHAR(CURRENT_TIMESTAMP, \\'HH24:MI\\'), ${achievement_type})`
    }

    async list(search){
        let accounts

        if (search){
            accounts = sql`select * from accounts where user ilike ${'%' +search + '%' }`
        } else {
            accounts = await sql`select * from accounts`
        }

        return accounts

    }

    async create(account){
        const {username, email, firstname, lastname, password, age, created_at, updated_at} = account

        await sql`insert into accounts (username, email, firstname, lastname, password, age, created_at, updated_at) VALUES (${username}, ${email}, ${firstname}, ${lastname}, ${password}, ${age}, ${created_at}, ${updated_at})`
    }

    async update(id, account){
        const {username, email, firstname, lastname, password, age, created_at, updated_at} = account

        await sql`update accounts set username = ${username}, email = ${email}, firstname = ${firstname}, lastname = ${lastname}, password = ${password}, age = ${age}, created_at = ${created_at}, updated_at = ${updated_at} where id = ${id}`
    }

    async delete(id){
        await sql`delete from accounts where id = ${id}`
    }


}


