import express from 'express';
import data from './data.js'

const port = process.env.PORT || 5001;

const app = express();

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id); // moved this from homeScreen component
    if(product){
        res.send(product);

    }else{
        res.status(404).send({message: 'Product not Found'});
    }
})

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.get('/', (req, res) => {

    res.send('Server is running...');
});

app.listen(port, () => {
    console.log(`Now listening to port ${port}`)
});