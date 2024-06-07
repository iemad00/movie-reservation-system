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

### Step 2: Run this command

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

