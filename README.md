# LaunchPad.gg Server

## Table of Contents
- [Introduction](#introduction)
- [Run Locally](#run-locally)
- [Tech Stack](#tech-stack)
- [Database](#database)
  - [Game Schema](#game-schema)
  - [User Schema](#user-schema)
- [Endpoints](#endpoints)
  - [Games](#games)
  - [Favorites](#favorites)
  - [Users](#users)

## Introduction
This is the server documentation for [CARFIX](https://stark-fjord-78742.herokuapp.com/).

## Run Locally
1) Clone this repo
2) `npm i` to install dependencies
3) Run `mongod` in a terminal to start MongoDB (_requires [MongoDB](https://www.mongodb.com/download-center/community)_)
4) `npm start` in a _seperate terminal_ to spin up the server

## Tech Stack
* Node
* Express
* MongoDB
* Mongoose
* Morgan

## Database
CARFIX server uses MongoDB / Mongoose / MLab for data persistence.
The database uses the below schemas:

### TimeSlot Schema
```
timeID: {
    type: Number, 
    required: true
  },
  startTime: {
    type: String, 
    required: true
  },
  endTime: {
    type: String, 
    required: true
  },
  firstName: String,
  lastName: String,
  phoneNumber: String,
  available: Boolean
```

## Endpoints
All requests and responses are in JSON format.

### Schedule
Action | Path |
--- | --- |
GET (all) | https://scheduling-app-server.herokuapp.com/api/schedule |
POST (one) | https://scheduling-app-server.herokuapp.com/api/schedule |