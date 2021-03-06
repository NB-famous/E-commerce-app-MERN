
//// Must include to make require work
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
////////////////////

import express from 'express';
import mongoose from 'mongoose'
//import data from './data.js';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';

// to upload you must import path
// this is a built in node package

import path from 'path'


//when not using require we can import dotenv & use
// dotenv.config();
const cors = require('cors');
require('dotenv').config();



const uri = process.env.ATLAS_URI;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());


mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})


/////// This is before we emplimented mongodbDatabase////// Re-factored in productRouter.js go see how its implemented
// app.get('/api/products/:id', (req, res) => {
//     const product = data.products.find((x) => x._id === req.params.id); // moved this from homeScreen component
//     if(product){
//         res.send(product);

//     }else{
//         res.status(404).send({message: 'Product not Found'});
//     }
// })

// Static data api 
// app.get('/api/products', (req, res) => {
//     res.send(data.products)
// });
////////////////////////////////

app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID);
})
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads' )))
app.get('/', (req, res) => {
    res.send('Server is running...');
});

/// This is an error catcher middle wear
app.use((error, req, res, next) => {
    res.status(500).send({message: error.message})
})

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Now listening to port ${port}`)
});