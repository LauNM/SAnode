import express from "express";
import path from 'path';

const app = express();
const port = process.argv[2] || 8888;

app.set('views', path.join(__dirname, 'ressources/ejsViews/'));
app.set('view engine', 'ejs');

app.use('/', express.static('src/ressources/static'));
app.get('/', (req, res) => res.render('index', { port: port}));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/ecologie', (req, res) => res.render('ecologie'));
app.get('/entreprise', (req, res) => res.render('entreprise'));
app.get('/particulier', (req, res) => res.render('particulier'));
app.get('/qui-est-ce', (req, res) => res.render('presentation'));
app.get('/professionnel', (req, res) => res.render('professionnel'));
app.get('/references', (req, res) => res.render('references'));
app.get('/duree-de-vie', (req, res) => res.render('vie'));
app.use('/rapport', (req, res) => res.sendFile(__dirname + '/ressources/ejsViews/rapport.pdf'));



app.listen(port);