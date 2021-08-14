// DO YOUR MAGIC
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    res.json('getting all cars');
});

router.get('/:id', async (req, res, next) => {
    res.json(`getting a car with id ${req.params.id}`);
});

router.post('/', async (req, res, next) => {
    res.json('posting a new car');
});

// router.verb('/', async (req, res, next) => {
//     res.json('create a new car');
// });

module.exports = router;




