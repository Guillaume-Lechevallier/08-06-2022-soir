// ./src/index.js
// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mysql = require('mysql');
const app = express();
const db = mysql.createConnection({
    host     : 'SLBDm027I0',
    user     : 'tel_usr',
    password : '-JnCmfH69YGzONRfVMA6',
    database : 'telephonie'
});

db.connect();
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

//page d'acceuil de l'API
app.get('/', (req, res) => {
    res.send("<h1 style='font-size : 30px; font-family: Roboto,serif'>Vous êtes sur l'API telephonie !</h1>");
});


//route Showuser de l'API qui affichera les enregistrements
app.get("/:showuser", (req, res) => {
    let showuser = req.params.showuser;
    let url = 'https://www.nothing.com?'+showuser;
    let params = (new URL(url)).searchParams;
    let mail = params.get('mail');
    let numero = params.get('numero');
    let numerocourt = params.get('numerocourt');
    let commentaire = params.get('commentaire');
    let operateur = params.get('operateur');
    let site = params.get('site');
    let tag = ['mail', 'numero','numerocourt','commentaire', 'operateur','site'];
    let objet = [mail,numero,numerocourt,commentaire,operateur,site];
    console.log(tag);
    console.log(objet)


    db.query("SELECT * from tel_sda", function (err, result) {
        if (err) throw err;
        console.log(result);});

    db.query("SELECT * from tel_sda")







    res.send("<div>"+tag+"</div><div>"+objet+"</div>")
    });



//démarrage du serveur
app.listen(3001, () => {
    console.log('Serveur ouvert');
});
