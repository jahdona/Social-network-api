const express = require('express');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app =express();
const routes = require('./routes');

// Middleware expression

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(routes);

//allows server listen for requests nad responses
db.once("open",()=>{
    app.listen(PORT,()=>{
        console.log('Server running on port', PORT);
    });
})