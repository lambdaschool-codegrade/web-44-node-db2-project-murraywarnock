// DO YOUR MAGIC
const express = require('express');
const Car = require('./cars-model');
const router = express.Router();
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
} = require('./cars-middleware');

router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll();
        res.status(200).json(cars);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', checkCarId, async (req, res, next) => {
    res.json(req.car);
});

router.post('/', async (req, res, next) => {
    try {
        res.json('posting a new car');
    } catch (error) {
        next(error);    
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        res.json('editing a new car');
    } catch (error) {
        next(error);    
    }
});

module.exports = router;




