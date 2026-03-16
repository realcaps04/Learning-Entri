const express = require('express'); // express module importing to the project
const app = express() // creating an instance of express
const Eventemitter = require('events') // importing the events module to create an event emitter


const emitter = new Eventemitter() // creating an instance of event emitter

const os = require('os') // importing the os module to get the operating system information

emitter.on("page visited", (url)=>{
    console.log("User visited the page",url);
    
})

// import express from 'express' // using ES6 module syntax to import express module
// import Eventemitter from 'events' // using ES6 module syntax to import events module

// 1. FS
// import fs from 'fs'
// import { json } from 'stream/consumers';


//files creation using fs module, when the user visits the page, we can write the data to a file using the fs module
// creation of a normal .txt file using FS module
// fs.writeFile('log.txt', 'User visited the page', (err) => { // writing the data to a file named log.txt

//     if (err) throw err; // if there is an error, throw the error
//     console.log('Data has been written to the file and Contented assigned'); // if the data is written successfully, log a message to the console
// })

// let user = {
//     name: "John Doe",
//     age: 30,
//     email: "john@example@gmail.com"
// }

// //convertion of object to json format and writing it to a file using fs module

// let userData = JSON.stringify(user) // converting the user object to json format using JSON.stringify() method





// FS methode just to write the data to a file when the user visits the page, 
// we can use the fs module to write the data to a file

//emitter has two methods, one is on and the other is emit. 
// on method is used to listen to an event and emit method is used to emit an event.

app.get('/', (req, res) => { // slash is the route, req is the request object and res is the response object
    res.send('Hello World!') // sending a response to the client as hello world

//     emitter.emit("page visited", req.originalUrl) // emitting the event when the user visits the page and 
//                                                   // passing the original url of the request as an argument to the event listener
})

//     fs.writeFile('user.json', userData, (err) => { 
//     // writing the json data to a file named user.json
//     if(err){
//         console.log("Error writing to file", err); // if there is an error, log the error message to the console
//     }
//     console.log('new user data inserted');
    
//     })
// })


// fs.readFile('user.json', 'utf-8', (err, data) => { // reading the data from the user.json file
//     if(err){
//         console.log("Error reading the file", err); // if there is an error, log the error message to the console
//     }
//     console.log("Data read from the file", data); // if the data is read successfully, log the data to the console
//     console.log(JSON.parse(userData)); // converting the json data back to an object using JSON.parse() method and logging it to the console
//     console.log("json data parsed and fecthed successfully");
    
// })



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


//2. HTTP Module

// import http from 'http' // using ES6 module syntax to import http module


// const server = http.createServer((req, res) => { // creating a server using the http module and passing a callback function to handle the request and response            
//     res.write('Hello World') // sending a response to the client as hello world
//     res.end() // ending the response

// })

// server.listen(3000, () => { // listening to the server on port 3000 and passing a callback function to log a message when the server is running
//     console.log('Server is running on port 3000'); // logging a message to the console when the server is running
// })


//3. Path Module (package.jsoni type: "commonjs" akki kodukkanam)

//import path from 'path' // using ES6 module syntax to import path module


// chela casesi path module use cheyyunnath file paths handle cheyyan vendi aanu
// ethelum files access cheyth athile filesi okke write cheyanda casesil path module use cheyyunnath
//  file paths handle cheyyan vendi aanu



// const path = require('path') // importing the path module using require syntax
// //const url = require('url') // importing the url module using require syntax

// console.log(path.basename(__filename)); // currently work cheyunna filename access cheyan
// console.log(path.basename(dir_name)); // currently work cheyunna directory name access cheyan (root folder name)
// console.log(path.dirname(__filename)); // currently work cheyunna fileinte directory access cheyan


//os module use cheyyunnath system information access cheyyan vendi aanu, like operating system information
// Cpu information, memory information etc.

//example of os module

// console.log(os.platform()); // getting the platform of the operating system
// console.log(os.arch()); // getting the architecture of the operating system
// console.log(os.cpus()); // getting the CPU information
// console.log(os.totalmem()); // getting the total memory information
// console.log(os.freemem()); // getting the free memory information



//-------HTTP Methods------------------

//http methods are used to specify the type of request made by the client to the server, 
// like GET, POST, PUT, DELETE, PATCH etc.

//request method is used to specify the type of request made by the client to the server,
//response method is used to specify the type of response sent by the server to the client


//get used for sending/retrieving a response to the client when the user visits a specific route, like slash, about, home etc.

//post used for sending data to the server from the client, like when the user submits a form, 
// we can use post method to send the data to the server

//PUT is used for updating the  entire specific data on the server, like when the user wants to update their profile information,
//existing resource update cheyyan vendi aanu PUT method use cheyyunnath

//DELETE is used for deleting the data from the server, like when the user wants to delete their account,
//existing resource delete cheyyan vendi aanu DELETE method use cheyyunnath


//patch is used for updating the data partially on the server, like when the user wants to update their profile information,
//existing resource update cheyyan vendi aanu PATCH method use cheyyunnath, but it is used for updating a specific field of the resource, 
//like when the user wants to update only their email address, we can use patch method to update only the email address field of the resource


//example update only age field of the user profile using patch method