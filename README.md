# MongoDB Fitness Tracker
Fitness tracker built using NodeJS Express, Mongoose, and MongoDB. Users can create a new workout routine by entering a unique name, which is saved to the database. Users can then add exercises to the workout routine.
Currently deployed on Heroku at https://marvins-fitness-app.herokuapp.com/

## Approach
1. Set up a server with a connection to a MongoDB database
2. Define MongoDB schemas using Mongoose which will interact with the database
3. Get user input about whether they want to create a new workout, or continue an existing one
4. After choosing a workout, allow users to add new exercises to the workout
5. Save the workout and the exercises to the database

