import {fastify} from 'fastify'
import {DatabasePostgres} from "./database-postgres.js";

const server = fastify()

const database = new DatabasePostgres()

server.post('/accounts', async (request, reply) => {
    const { username, email, firstname, lastname, password, age, created_at, updated_at} = request.body

   await database.create({
        username: username,
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: password,
        age: age,
        created_at: created_at,
        updated_at: updated_at,
    })

    return reply.status(201).send()

})


server.get('/',  () => {
    return 'Oi meus queridos'
})

server.get('/accounts', async (request) => {
    const search = request.query.search

    const accounts = await database.list(search)

    return accounts
})

server.put('/accounts/:id', async (request, reply) => {
    const accountId = request.params.id
    const { username, email, firstname, lastname, password, age, created_at, updated_at} = request.body

    await database.update(accountId, {
        username: username,
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: password,
        age: age,
        created_at: created_at,
        updated_at: updated_at,
    })

    return reply.status(204).send()
})

server.delete('/accounts/:id', async (request, reply) => {
    const accountId = request.params.id

    await database.delete(accountId)

    return reply.status(204).send()

})


server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333,
})