const request = require('supertest');
const app = require('./index');

let server;

beforeAll(() => {
  server = app.listen(3001); // Démarre le serveur sur un autre port pour éviter les conflits
});

afterAll((done) => {
  server.close(done); // Ferme le serveur une fois tous les tests terminés
});

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});

