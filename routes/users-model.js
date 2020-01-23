const db = require("../data/config");

function list() {
  return db("Users").select("*");
}

async function createUser(body) {
  await db("Users").insert(body);
  return db("Users")
    .where("Username", body.Username)
    .first();
}

function deleteUser() {}

module.exports = {
  list,
  createUser,
  deleteUser
};
