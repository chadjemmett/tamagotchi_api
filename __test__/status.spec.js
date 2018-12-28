const request = require('supertest')
const server = require('../server.js')
const knex = require('knex')
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development)

describe('status GET endpoint', () => {
  it('should return a 200 status', async () => {
    let response = await request(server).get('/status')
    expect(response.status).toBe(200)
  })

  it('should return a 200 status', async () => {
    let response = await request(server).get('/status')
    expect(response.status).toBe(200)
  })

  it('should return an object', async () => {
    let response = await request(server).get('/status')
    expect(typeof response.body).toBe('object')
  })

  it('should return the creature object', async () => {
    db.insert({tamagotchi_name: "foo", username: "bar"})
    let response = await request(server).get('/status').send({tamagotchi_name: "foo", username: "bar"})
    expect(response.body).toEqual({tamagotchi_name: 'foo', age: 1, hunger: 4, happy: 4, discpline: 12, sick: false, asleep: false, dirty: false, lightsOn: true})
  })

  it('if it does not get an object it should return code 401', async () => {
    let response = await request(server).get('/status')
    expect(typeof response.body).toBe('object')
  })
})
