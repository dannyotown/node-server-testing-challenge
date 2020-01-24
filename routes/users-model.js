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

async function deleteUser(id) {
  await db("Users")
    .delete()
    .where("id", id);
  return list();
}

async function updateUser(changes, id) {
  await db("users")
    .update(changes)
    .where("id", id);
  return db("users")
    .select("*")
    .where("id", id);
}
module.exports = {
  list,
  createUser,
  deleteUser,
  updateUser
};
