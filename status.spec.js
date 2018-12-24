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
})
