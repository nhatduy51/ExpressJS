const express = require('express');
const path = require('path');

const messageRouter = require('./routes/messages.route');
const friendsRouter = require('./routes/friends.route');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

app.use((req, res, next) => {
    const start= Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}`);
})

app.use('/site',express.static(path.join(__dirname,'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {
        title: 'My friends are very clever',
        caption: 'Let\'s go skiing'
    });
});
app.use('/friends', friendsRouter);
app.use('/messages', messageRouter);


app.listen(PORT, () => {
    console.log(`listening on ${PORT}...`);
});