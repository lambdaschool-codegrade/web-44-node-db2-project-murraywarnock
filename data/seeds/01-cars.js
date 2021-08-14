// STRETCH
const cars = [
    {
        vin: "1FTPW14V89FA80313",
        make: "toyota",
        model: "prius",
        mileage: 25009,
        title: "clean",
        transmission: "manual"
    },{
        vin: "1FTEX1CM3BFA11872",
        make: "ford",
        model: "focus",
        mileage: 25009,
        title: "clean",
    },{
        vin: "5J6RE4H53BL107376",
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
