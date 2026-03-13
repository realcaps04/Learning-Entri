const express = require('express'); // express module importing to the project
const app = express() // creating an instance of express

app.get('/', (req, res) => { // slash is the route, req is the request object and res is the response object
    res.send('Hello World!') // sending a response to the client as hello world
})

//user side varunnath req anu and server side varunnath res anu

app.get('/about', (req, res) => { // slash is the route, req is the request object and res is the response object
    res.send('About page is loaded') // sending a response to the client as about page is loaded
})
//next mentioning a port



app.get('/home', (req, res) => { // slash is the route, req is the request object and res is the response object
    res.send('Home page is loaded') // sending a response to the client as home page is loaded
})

app.get('/ok', (req, res) => { // slash is the route, req is the request object and res is the response object
    res.send('Ok page is loaded') // sending a response to the client as ok page is loaded
})



const PORT = 3000; // defining a port number for the server to listen on

app.listen(PORT,()=>{
    console.log(`server is running at port: http://localhost:${PORT} `)  //dont use ' or '' in the console log for port running 
    //message showing ,  use http not https in the url
    
})


//use control+C for again restartng the server and then use node server.js for running the server again
// else the new route wont work



//to  prevent restarting the server every time we make changes to the code, 
// we can use NODEMON (lowercase) package which automatically restarts the server whenever we make changes to the code

//npm install nodemon -g  // for installing nodemon globally in the system
//npm install nodemon

// Then write in the package.json file, in the scripts section, add the following line:
// "start": "nodemon server.js"



// Basic Server intialization completed



