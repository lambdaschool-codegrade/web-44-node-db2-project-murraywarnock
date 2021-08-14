// STRETCH
const cars = [
    {
        vin: "111111111111111",
        make: "toyota",
        model: "prius",
        mileage: 25009,
        title: "clean",
        transmission: "manual"
    },{
        vin: "111111111111111",
        make: "ford",
        model: "focus",
        mileage: 25009,
        title: "clean",
    },{
        vin: "111111111111111",
        make: "volkswagon",
        model: "bug",
        mileage: 25009,
    },
];

// exports.seed = function(knex) {
//     return knex('cars')
//     .truncate().then(() => {
//         return knex('cars').insert(cars);
//     });
// };

//OR USE async/await

exports.seed = async function(knex) {
    await knex('cars').truncate();
    await knex('cars').insert(cars);
};
