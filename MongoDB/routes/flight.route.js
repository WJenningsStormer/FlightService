const router = require('express').Router();
const { createFlight, findFlightById, findAllFlights } = require('../controllers/flight.controller');

router.get('/', async (req, res) => {
    const flights = await findAllFlights();
    res.json(flights);
});

router.post('/', async (req, res) => {
    try {
        const flightId = await createFlight(req.body);
        res.status(201).json({_id: flightId});
    } catch (err) {
        res.status(err?.status || 500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const flight = await findFlightById(req.params.id);
        res.json(flight);
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
})

module.exports = router;