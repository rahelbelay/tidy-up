const http = require('http');
const express = require('express');
const app = express();

const PORT = 3000;
const server =http.createServer(app);

const morgan = require('morgan');
const logger = morgan('tiny');
app.use(logger);

const helmet = require('helmet');
app.use(helmet());


const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(express.static('public'));

const bodyParser = require('body-parser')
const parseForm = bodyParser.urlencoded({
    extended: true
});



const { stuff,
        users 
} = require('./models');


app.get('/', (req, res)=> {
    res.send('HELOOOOOOOO!!!!!')
});
app.get('/create', (req, res)=>{
    console.log(stuff.all());
    res.render('form');

});
app.post('/create', parseForm ,(req, res)=> {
    console.log(`Horray a Post`);
    console.log(req.body);
    const {name, givesJoy} = req.body;
    // const name = req.body.name;
    // const givesJoy = req.body.givesJoy;
    stuff.create(name, givesJoy);
    // reading the data from the form
    res.redirect('/create/success');
});

app.get('/create/success', (req, res)=> {
    console.log(stuff.all());
    res.send('success!!!')
});
app.get('/signup', (req, res)=> {
    res.render('user-auth');
})

app.post('/signup',parseForm, (req, res)=>{
    console.log(req.body);
    const {username, password} = req.body;
    users.create(username, password);
    // console.log('body')
});

app.get('/login', (req,res)=> {
    res.render('user-auth');
})
app.post('/login', parseForm, (req, res)=> {
    const {username, password} = req.body;
    const didLogin = users.login(username, password);
    console.log(didLogin)
});



server.listen(PORT, ()=> {
    console.log(`Listining at ${PORT}`)
});

