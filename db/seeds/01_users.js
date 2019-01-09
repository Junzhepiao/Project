
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
    {name: 'Chris', password:'abcd', confirm_password:'abcd', rating: 5, email:'chris@gmail.com', venmo:'chris0101', address:'1234 w hayward ave'},
    {name: 'Alec', password:'efgh', confirm_password:'efgh', rating: 3, email:'alec@gmail.com', venmo:'alec0102', address:'3214 e hayward ave'},
    {name: 'Bill', password:'ijkl', confirm_password:'ijkl', rating: 1, email:'bill@gmail.com', venmo:'bill0103', address:'7890 s hayward ave'},
    {name: 'Shelly', password:'laugh', confirm_password:'laugh', rating: 4, email:'shelly@gmail.com', venmo:'shelly0104', address:'4566 n hayward ave'},
    {name: 'Simpson', password:'songs', confirm_password:'songs', rating: 2, email:'simpson@gmail.com', venmo:'simpson0102', address:'456 w hayward ave'}
      ]);
    });
};
