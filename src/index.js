const express = require('express');
const res = require('express/lib/response');
const redis = require('redis');
const { default: mongoose } = require('mongoose');
const { Client } = require('pg');

const DB_USER = 'postgres';
const DB_Password = 'example';
const DB_Host = 'postgres';
const DB_Port = 5432;

const URI_Postgres = `postgresql://${DB_USER}:${DB_Password}@${DB_Host}:${DB_Port}`;
const client_postgres = new Client({
    connectionString: URI_Postgres
});

client_postgres.connect()
    .then(() => {
        console.log('Connected to PostgreSQL');
    })
    .catch((error) => {
        console.error('Error connecting to PostgreSQL:', error.message);
    });



// const DB_Redis_Host = 'redis'
// const DB_Redis_Port = '6379'

// const client = redis.createClient({
//     url: `redis://${DB_Redis_Host}:${DB_Redis_Port}`
// });

// client.on('error', err => console.log('Redis Client Error', err));
// client.on('connect', err => console.log('Redis connected'));
// client.connect();

const PORT = 4000;
const app = express();

// const DB_USER = 'root'
// const DB_Password = 'example'
// const DB_Host = 'mongo'
// const DB_Port = '27017'

// const Uri = `mongodb://${DB_USER}:${DB_Password}@${DB_Host}:${DB_Port}`
// mongoose.connect(Uri).then(()=>{console.log("success");}).catch(()=>{console.log("failed");});

// app.get('/',(req,res)=>{
//     client.set("products",".....products");
//     return res.send("<h1>Hello world www</h1>")
// })

// app.get('/data',async (req,res)=>{
//    const d = await client.get("products");
//     return res.send(`<h1>Hello world www </h1> <h1> ${d}</h1>`)
// })


app.listen(PORT,()=>{console.log(`is running at ${PORT}`)})