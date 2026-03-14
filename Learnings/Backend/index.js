const express = require('express'); // express module importing to the project
const app = express() // creating an instance of express
const Eventemitter = require('events') // importing the events module to create an event emitter


const emitter = new Eventemitter() // creating an instance of event emitter

emitter.on("page visited", (url)=>{
    console.log("User visited the page",url);
    
})

//emitter has two methods, one is on and the other is emit. 
// on method is used to listen to an event and emit method is used to emit an event.

app.get('/', (req, res) => { // slash is the route, req is the request object and res is the response object
    res.send('Hello World!') // sending a response to the client as hello world

    emitter.emit("page visited", req.originalUrl) // emitting the event when the user visits the page and 
                                                  // passing the original url of the request as an argument to the event listener
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


//-------------------------req.OriginalUrl-----------------------------

//------ this will give the original url of the request made by the client--------



