const express = require("express");

// database access using knex
const db = require("../data/db-config.js");

const router = express.Router();

router.post("/", (req, res) => {
    const carInfo = req.body;

    db.select("*")
        .from("cars")
        .insert(carInfo)
        .then(res.status(201).json(carInfo))
        .catch(err =>
            res.status(500).json({ message: `error inserting car`, error: err })
        );
});

router.get("/", (req, res) => {
    db.select("*")
        .from("cars")
        .then(cars => res.status(200).json(cars))
        .catch(err =>
            res.status(500).json({ message: `error getting cars`, error: err })
        );
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    db.select("*")
        .from("cars")
        .where("id", "=", id)
        .then(car => {
            if (car[0]) {
                res.status(200).json(car[0]);
            } else {
                res.status(404).json({
                    message: `car with id: ${id} does not exist`,
                    error: err
                });
            }
        })
        .catch(err =>
            res.status(500).json({ message: `error getting car`, error: err })
        );
});

module.exports = router;
