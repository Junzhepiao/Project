
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
    {name: 'Chris', password:'abacd', confirm_password:'abcd', rating: 5},
    {name: 'Alec', password:'efgh', confirm_password:'efgh', rating: 3},
    {name: 'Bill', password:'ijkl', confirm_password:'ijkl', rating: 1},
    {name: 'Shelly', password:'laugh', confirm_password:'laugh', rating: 3},
    {name: 'Simpson', password:'songs', confirm_password:'songs', rating: 2}
      ]);
    });
};
