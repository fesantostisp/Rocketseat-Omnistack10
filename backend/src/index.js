const express = require('express');
const mongoose = require('mongoose'); mongoose.set('useCreateIndex', true); 
const cors = require('cors'); 
const http = require('http');
require("dotenv").config();

const routes = require('./routes');
const { setupWebsocket } = require('./websocket'); 

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect (process.env.MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json()); //tem que ser antes do routes de forma lineaer...
app.use(routes);

server.listen(3333); 

