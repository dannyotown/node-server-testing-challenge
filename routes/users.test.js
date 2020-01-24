const userModel = require("./users-model");
const db = require("../data/config");

beforeEach(async () => {
  await db.seed.run();
});
describe("userModel List", () => {
  test("list Users", async () => {
    const result = await userModel.list();
    expect(result).toHaveLength(3);
  });
});

describe("userModel Insert", () => {
  test("Create User", async () => {
    const result = await userModel.createUser({ Username: "Tony" });
    // expect(result.id).toBe(4);
    expect(result.Username).toBe("Tony");
  });
});

describe("userModel Delete User", () => {
  test("Delete User", async () => {
    const result = await userModel.deleteUser(1);
    expect(result).toHaveLength(2);
  });
});
