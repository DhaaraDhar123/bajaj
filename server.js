const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('main.ejs', { jsonData: null });
});

app.post('/submit', (req, res) => {
    try {
        let jsonData = JSON.parse(req.body.jsonInput);

        res.render('main', { jsonData });
    } catch (error) {
        res.render('main', { jsonData: { error: 'Invalid JSON' } });
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
