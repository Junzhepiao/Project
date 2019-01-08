
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
    {item_name:'Winter Jacket', price:100, date:2019-05-04, keyword:'winter', description:"Water resistant and has extra insulation. Also has a slightly longer fit in order to protect your body from the sharp, winter weather.Suitably designed for skiing and snowboarding", img_url:'https://t3.ftcdn.net/jpg/00/81/96/68/240_F_81966883_O7vZFi87BKMAt75COdqNr8EZ17bj6H7K.jpg', users_id:1},
    {item_name:'Golf Clubs', price:200, date:2019-03-10, keyword:'sports', description:"Made of sturdy iron. Proven and tested championship winning clubs. A matched set of 7 numbered irons from 3 through 9, plus a pitching wedge", img_url:'https://t4.ftcdn.net/jpg/00/54/50/05/240_F_54500532_hpi6ZglcXv1bqqaumGuwrfhbnHjXMQat.jpg', users_id:3},
    {item_name:'Programming Textbook', price:70, date:2019-02-08, keyword:'books', description:"Java text with easy simple illustrations and explanations", img_url:'https://t4.ftcdn.net/jpg/01/14/23/01/240_F_114230145_OZSXMtT5B5aKxqPCjhOnV7zykxLMjM1y.jpg', users_id: 2},
    {item_name:'Computer Monitor', price:170, date:2019-01-05, keyword:'electronic', description:"Samsung montior  that is energy-efficienct and has high performance. Also sutiable for gaming", img_url:'https://t4.ftcdn.net/jpg/00/84/61/55/240_F_84615556_5ntbbaEQ7GXsanJuF5Q0HquW6MTUQQhM.jpg', users_id:4},
    {item_name:'Hiking Boots', price:90, date:2019-04-03, keyword:'boots', description:"Vegan-friendly hiking boots and shoes are made without any animal ingredients or byproducts", img_url:'https://t3.ftcdn.net/jpg/00/58/24/54/240_F_58245420_KriXmYEczt258DvW4WmSRgeYpG5eUIZf.jpg', users_id: 5}
   ]);
 });
}
