const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/ping', (req,res) => {
res.send('pong');

});

require('./controllers/authController')(app);

app.listen(3300);