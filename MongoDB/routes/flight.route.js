const router = require('express').Router();
const { createFlight, findFlightByNumber, findAllFlights, deleteFlight, updateFlight} = require('../controllers/flight.controller');

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
        const flight = await findFlightByNumber(req.params.id);
        res.status(201).json(flight);
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        await deleteFlight(req.params.id);
        res.status(201);
    } catch (err) {
        res.status(err?.status || 500).json(err);
    }
})

router.put("/:id", async (req, res) => {
    try {
        const flight = await updateFlight(req.params.id, req.body);
        res.status(201).json(flight);
    } catch (err) {
        res.status(err?.status || 500).json(err);
    }
})

module.exports = router;