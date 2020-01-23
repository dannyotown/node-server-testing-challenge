const supertest = require("supertest");
const server = require("./index");

// beforeEach(async () => {
//   await db.seed.run();
// });
test("test route", async () => {
  const res = await supertest(server).get("/");
  expect(res.status).toBe(200);
  expect(res.type).toBe("application/json");
  expect(res.body.test).toBe("test");
});
