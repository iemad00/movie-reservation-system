# Movies Reservation System

This project is a simple movies reservation system that uses MongoDB as its database. The system is containerized using Docker and Docker Compose.

## Prerequisites

- Docker
- Docker Compose

## Getting Started

### Step 1: Clone the Repository

```sh
git clone <repository-url>
cd <repository-directory>
```

### Step 2: Build and Start the Containers

``` docker compose up --build ```

### Step 3: Initialize the Database with Sample Data

Request
    URL: http://localhost:3000/movies
    Method: POST
    Headers:
    Authorization: Bearer abc

``` curl -X POST http://localhost:3000/movies -H "Authorization: Bearer abc" ```

### Step 4: Test Other Endpoints

You can now test other endpoints.


## Endpoints

### List Movies
URL: /movies
Method: GET
Description: Retrieves a list of all movies.

Example:
``` curl http://localhost:3000/movies ```

### Check Availability
URL: /movies/:movieId/:tsId
Method: GET
Description: Checks the availability of a specific time slot for a movie.

Parameters:
- movieId: The ID of the movie.
- tsId: The ID of the time slot.

Example:
``` curl http://localhost:3000/movies/<movieId>/<tsId> ```

### Reserve Time Slot
URL: /movies/reserve
Method: PUT
Description: Reserves a time slot for a specific number of people.

Body:
- movieId: The ID of the movie.
- tsId: The ID of the time slot.
- numberOfPeopleToReserveFor: The number of people to reserve seats for.

Example:
```sh 
curl -X PUT http://localhost:3000/movies/reserve -H "Content-Type: application/json" -d '{"movieId": "<movieId>", "tsId": "<tsId>", "numberOfPeopleToReserveFor": <number>}'
 ```

## Error Handling
The application uses a custom error handler to manage errors. If an error occurs, the response will include an error message and an appropriate status code.

## Contact
If you have any questions, feel free to reach out.
ealbalawi@hotmail.com

