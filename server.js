const express = require('express');

const messageRouter = require('./routes/messages.route');
const friendsRouter = require('./routes/friends.route');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    const start= Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}`);
})

app.use(express.json());


app.use('/friends', friendsRouter);
app.use('/messages', messageRouter);


app.listen(PORT, () => {
    console.log(`listening on ${PORT}...`);
});