// DO YOUR MAGIC
const express = require('express');
const Car = require('./cars-model');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll();
        res.status(200).json(cars);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
try {
    res.json(`getting a car with id ${req.params.id}`);
} catch (error) {
    next(error);    
}    
});

router.post('/', async (req, res, next) => {
    try {
        res.json('posting a new car');
    } catch (error) {
        next(error);    
    }
});

router.put('/', async (req, res, next) => {
    try {
        res.json('editing a new car');
    } catch (error) {
        next(error);    
    }
});

module.exports = router;




