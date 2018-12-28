const request = require('supertest')
const server = require('../server.js')
const knex = require('knex')
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development)

beforeEach(async () => {
  await db('tamagotchis').truncate()
})


describe('/create POST request', () => {
  it('should return a 201 status when something is created', async () => {
    let response = await request(server).post('/create')
      .send({tamagotchi_name: 'foo', username: 'bar'})
    expect(response.status).toBe(201)
  })

  it('should return the id of the new resource ', async () => {
    let response = await request(server).post('/create')
      .send({tamagotchi_name: 'foo', username: 'bar'})
    expect(response.body[0]).toBe(1)
  })

  it('should return 401 if no username or name ', async () => {
    let response = await request(server).post('/create')
      .send({tamagotchi_name: '', username: ''})
    expect(response.status).toBe(401)
  })
})
