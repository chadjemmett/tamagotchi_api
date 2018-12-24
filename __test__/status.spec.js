const request = require('supertest')
const server = require('../server.js')

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
    let response = await request(server).get('/status')
    expect(response.body).toEqual({name: 'foo', age: 1, hunger: 4, happy: 4, discpline: 12, sick: false, asleep: false, dirty: false, lightsOn: true})
  })

  it('if it does not get an object it should return code 401', async () => {
    let response = await request(server).get('/status')
    expect(typeof response.body).toBe('object')
  })
})
