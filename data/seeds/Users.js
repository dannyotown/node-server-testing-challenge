exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Users").insert([
        { id: 1, Username: "Username1" },
        { id: 2, Username: "Test2" },
        { id: 3, Username: "Mikejones" }
      ]);
    });
};
