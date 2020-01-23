exports.up = async knex => {
  await knex.schema.createTable("Users", table => {
    table.increments();
    table.string("Username", 255).notNullable();
  });
};

exports.down = async knex => {
  // undo the operation in up
  await knex.schema.dropTableIfExists("Users");
};
