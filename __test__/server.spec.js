const request = require('supertest')
const server = require('../server.js')


describe('server', () => {
  it('should return a 200 status', async () => {
    let response = await request(server).get('/')
    expect(response.status).toBe(200)
  })
})


