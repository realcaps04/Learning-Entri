//importing the functions from the controller file to be used in the routes file

const handleHomePage = (req, res) => {
    console.log("Request started from userController.js");
    
    console.log("User requesting for ", req.originalUrl);
    res.send("Welcome to the Home page of the user")
}

const handleAboutPage = (req, res) => {
    console.log("Request started from userController.js");
    console.log("User requesting for ", req.originalUrl);
    res.send("Welcome to the About page of the user")
}

const handleContactPage = (req, res) => {
    console.log("Request started from userController.js");
    console.log("User requesting for ", req.originalUrl);
    res.send("Welcome to the Contact page of the user")
}

export { handleHomePage, handleAboutPage, handleContactPage } // exporting the functions to be used in the routes file