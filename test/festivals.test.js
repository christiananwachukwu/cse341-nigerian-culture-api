
jest.setTimeout(15000);

const request = require('supertest');
const app = require('../server');

// ✅ Keep session for authenticated routes
const agent = request.agent(app);

describe('Festivals API', () => {

  let festivalId;

  // ✅ LOGIN FIRST (bypass auth for tests)
  beforeAll(async () => {
    await agent.get('/auth/test-login');
  });

  // ✅ CREATE
  it('should create a festival', async () => {
    const res = await agent
      .post('/festivals')
      .send({
        name: "Test Festival",
        region: "Test Region",
        tribe: "Test Tribe",
        dateSeason: "Summer",
        duration: "3 days",
        traditions: ["Dance", "Music"], // ✅ must be array
        significance: "Test significance"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');

    festivalId = res.body._id;
  });

  // ✅ GET ALL
  it('should get all festivals', async () => {
    const res = await agent.get('/festivals');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // ✅ GET BY ID
  it('should get a festival by ID', async () => {
    const res = await agent.get(`/festivals/${festivalId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('_id', festivalId);
  });

  // ✅ UPDATE
  it('should update a festival', async () => {
    const res = await agent
      .put(`/festivals/${festivalId}`)
      .send({ duration: "Updated Duration" });

    expect(res.statusCode).toBe(200);
    expect(res.body.duration).toBe("Updated Duration");
  });

  // ✅ DELETE
  it('should delete a festival', async () => {
    const res = await agent
      .delete(`/festivals/${festivalId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message');
  });

});

