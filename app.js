import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';



const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const port = 8080;


// HandleBars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));


// const myLogged = (req, res, next) => {
//     console.log('Authenticated');
//     next();
// }
// app.use(myLogged);


// Servidr contenido estatico
app.use( express.static('public') );



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Fercho',
        titulo: 'Cursito Node'
    });
})


app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Generic',
        titulo: 'Generic'
    });
})


app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Elements',
        titulo: 'Elements'
    });
})


app.get(/.*/, (req, res) => {
    res.sendFile( __dirname + '/public/404.html')
})



app.listen(port, () => {
    console.log(`Example app listering at htt://localhost:${port}`);
})
