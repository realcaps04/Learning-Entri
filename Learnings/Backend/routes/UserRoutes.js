// make sure the package.json file has "type": "module" to use ES6 module syntax
import express from 'express'

const userRouter = express.Router()

// create a user    

userRouter.get('/', (req, res) => {

    console.log("User requesting for ", req.originalUrl);
    res.send("Welcome to the Home page of the user")

})


userRouter.get('/about', (req, res) => {

    console.log("User requesting for ", req.originalUrl);
    res.send("Welcome to the About page of the user")

})


//make sure in index.js app.use('/',userRouter) call cheythirikkanam

// eth index.jsil kodukan shredhikkanam, import userRouter from './routes/UserRoutes.js' // importing the user router from the routes folder



export default userRouter