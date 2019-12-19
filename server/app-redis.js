const PORT = process.env.PORT || 3000;
const COUNTER = 'counter';

const express = require('express');
const redis = require("redis");

const redisClient = redis.createClient({
  host: 'redis'
});
redisClient.on("error", (err) => {
  console.log("Error " + err);
});

const app = express();

app.get('/', (req, res, next) => {
  redisClient.get(COUNTER, (err, reply) => {
    let counter = reply || 0;
    redisClient.set(COUNTER, ++counter, redis.print);
    res.send(`Number of calls: ${counter}`);
  });
});

app.listen(PORT, () => {
  console.log(`>>Server is listening on port: ${PORT}`);
});