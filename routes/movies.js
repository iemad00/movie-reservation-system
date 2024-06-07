const express = require('express');
const router = express.Router();
const Movie = require("../models/movie")


// This endpoint is used to initializes the database with five different movies
router.post("/", async (req, res) => {
    const movies = [
        {
            title: "Titanic",
            timeSlots: [
                {
                    startTime: new Date(),
                    endTime: new Date(Date.now() + 2 * 60 * 60 * 1000),
                    capacity: 10,
                    booked: 7
                },
                {
                    startTime: new Date(Date.now() + 4 * 60 * 60 * 1000),
                    endTime: new Date(Date.now() + 6 * 60 * 60 * 1000),
                    capacity: 15
                }
            ]
        },
        {
            title: "Pulp Fiction",
            timeSlots: [
                {
                    startTime: new Date(),
                    endTime: new Date(Date.now() + 2 * 60 * 60 * 1000),
                    capacity: 8
                },
                {
                    startTime: new Date(Date.now() + 3 * 60 * 60 * 1000),
                    endTime: new Date(Date.now() + 5 * 60 * 60 * 1000),
                    capacity: 12
                }
            ]
        },
        {
            title: "Interstellar",
            timeSlots: [
                {
                    startTime: new Date(),
                    endTime: new Date(Date.now() + 2 * 60 * 60 * 1000),
                    capacity: 5
                },
                {
                    startTime: new Date(Date.now() + 4 * 60 * 60 * 1000),
                    endTime: new Date(Date.now() + 6 * 60 * 60 * 1000),
                    capacity: 10
                }
            ]
        },
        {
            title: "Inglourious Basterds",
            timeSlots: [
                {
                    startTime: new Date(),
                    endTime: new Date(Date.now() + 2 * 60 * 60 * 1000),
                    capacity: 7
                },
                {
                    startTime: new Date(Date.now() + 4 * 60 * 60 * 1000),
                    endTime: new Date(Date.now() + 6 * 60 * 60 * 1000),
                    capacity: 12,
                    booked: 10
                },
                {
                    startTime: new Date(Date.now() + 5 * 60 * 60 * 1000),
                    endTime: new Date(Date.now() + 7 * 60 * 60 * 1000),
                    capacity: 9
                }
            ]
        },
        {
            title: "Django Unchained",
            timeSlots: [
                {
                    startTime: new Date(),
                    endTime: new Date(Date.now() + 2 * 60 * 60 * 1000),
                    capacity: 6
                },
                {
                    startTime: new Date(Date.now() + 6 * 60 * 60 * 1000),
                    endTime: new Date(Date.now() + 8 * 60 * 60 * 1000),
                    capacity: 11
                }
            ]
        }
    ];

    try {
        await Movie.insertMany(movies);
        res.json({
            success: true,
            message: "Successfully added 5 movies"
        });
    } catch (err) {
        console.error(err);
        return res.status(400).json({
                success: false,
                message: 'An error occurred while adding the movies'
        });
    }
});

// Movie Listing Endpoint
router.get("/", async (req, res)=> {
    // Using this code you will get capacities only without booked count
    // const movies = await Movie.find(null, {'timeSlots.booked': 0})

    // Get all info about the movies, including capacaties and booked count
    const movies = await Movie.find()

    return res.status(200).json({
        success: true,
        data: movies,
        message: 'Successfully fetched movies'
    });
})


//Check Availability Endpoint
router.get("/:movieId/:tsId", async (req, res, next)=> {
    try{
        const movie = await Movie.findOne({ _id: req.params.movieId });

        if (!movie) {
            return res.status(404).json({
                success: false,
                message: "Movie not found"
            });
        }

        const timeSlot = movie.timeSlots.id(req.params.tsId);

        if (!timeSlot) {
            return res.status(404).json({
                success: false,
                message: "Time slot not found"
            });
        }

        const dto = {
            movieTitle: movie.title,
            remainingCapacity: timeSlot.capacity - timeSlot.booked
        }

        return res.status(200).json({
            success: true,
            data: dto,
            message: 'Successfully fetched time slot availability'
        });

    }catch(err){
        next(err)
    }
})


module.exports = router;
