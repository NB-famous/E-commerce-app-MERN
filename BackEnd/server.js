import express from 'express';
import data from './data.js'

const port = process.env.PORT || 5001;

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.get('/', (req, res) => {

    res.send('Server is running...');
});

app.listen(port, () => {
    console.log(`Now listening to port ${port}`)
});