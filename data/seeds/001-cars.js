
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, vin: 'JH4KA3240HC002301', make: 'Acura', model: 'Legend', mileage: 32879, status: 'salvage'},
        {id: 2, vin: '2FAFP71W4YX101840', make: 'Ford', model: 'Crown Victoria', mileage: 201948, status: 'clean'}
      ]);
    });
};
