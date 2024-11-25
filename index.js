// import json library

const jsonServer = require ('json-server')

// create the server

const mediaPlayerServer = jsonServer.create()

// middleware to parse the json format

const middleware = jsonServer.defaults()

// setup path to store data

const router = jsonServer.router('db.json')

mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

// port for server

const PORT = 4000 || process.env.PORT

// To listen to the requests from the frontend for resolving that requests

mediaPlayerServer.listen(PORT, ()=>{
    console.log(`server running successfully at port number ${PORT}`);
})

