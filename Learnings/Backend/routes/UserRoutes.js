// make sure the package.json file has "type": "module" to use ES6 module syntax
import express from 'express'

import { handleHomePage, handleAboutPage, handleContactPage } from '../controller/userController.js' 
// importing the functions from the controller file to be used in the routes file  

const userRouter = express.Router()

// create a user    


//----------------------------------------------------------

// userRouter.get('/', (req, res) => {

//     console.log("User requesting for ", req.originalUrl);
//     res.send("Welcome to the Home page of the user")

// })


// userRouter.get('/about', (req, res) => {

//     console.log("User requesting for ", req.originalUrl);
//     res.send("Welcome to the About page of the user")

// })


//Eth full Controller.js folderil ond


//----------------------------------------------------------

userRouter.get('/',handleHomePage)
userRouter.get('/about',handleAboutPage)


//make sure in index.js app.use('/',userRouter) call cheythirikkanam

// eth index.jsil kodukan shredhikkanam, import userRouter from './routes/UserRoutes.js' // importing the user router from the routes folder



export default userRouter


//oru fileil or export default mathre pattullu repeat ettal error  varum
// instead export mathram aytt use akkam
