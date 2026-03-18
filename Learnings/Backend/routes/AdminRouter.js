import express from 'express';

const adminRouter = express.Router()

adminRouter.get('/admindashboard', (req, res) => {
    console.log("Admin requesting for ", req.originalUrl);
    res.send("Welcome to the Dashboard page of the admin")
})

adminRouter.get('/', (req, res) => {
    console.log("Admin requesting for ", req.originalUrl);
    res.send("Welcome to the Home page of the admin")
}) 

// main route file of admin



export default adminRouter