const request = require('supertest');
const app = require('../server');

describe('Festivals API', () => {

  let festivalId;

  // CREATE
  it('should create a festival', async () => {
    const res = await request(app)
      .post('/festivals')
      .send({
        name: "Test Festival",
        region: "Test Region",
        tribe: "Test Tribe",
        dateSeason: "Test Month",
        duration: "1 day",
        traditions: ["dance"],
        significance: "Testing"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');

    festivalId = res.body._id;
  });

  // GET ALL
  it('should get all festivals', async () => {
    const res = await request(app).get('/festivals');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // GET ONE
  it('should get a festival by ID', async () => {
    const res = await request(app).get(`/festivals/${festivalId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('_id', festivalId);
  });

  // UPDATE
  it('should update a festival', async () => {
    const res = await request(app)
      .put(`/festivals/${festivalId}`)
      .send({ duration: "Updated duration" });

    expect(res.statusCode).toBe(200);
    expect(res.body.duration).toBe("Updated duration");
  });

  // DELETE
  it('should delete a festival', async () => {
    const res = await request(app)
      .delete(`/festivals/${festivalId}`);

    expect(res.statusCode).toBe(200);
  });

});

afterAll(async () => {
  const mongoose = require('mongoose');
  await mongoose.connection.close();
});