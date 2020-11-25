import bcrypt from 'bcrypt'

const data = {

    users: [
        {
            name:"Nikko",
            email:"admin@example.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name:"James",
            email:"james@example.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        }
    ],


    products:[
        {
            _id:'1',
            name: 'Nice suit',
            category:'suits',
            image:'/images/p1.jpg',
            price: 300,
            countInStock:50,
            brand: 'Versachi',
            rating: 0.6,
            numReviews: 10,
            description: 'Good looking suit',
        },

        {
            _id:'2',
            name: 'Shirt',
            category:'shirt',
            image:'/images/p2.jpg',
            price: 100,
            countInStock:0,
            brand: 'Versachi',
            rating: 4.7,
            numReviews: 10,
            description: 'Good looking suit',
        },

        {
            _id:'3',
            name: 'Jacket',
            category:'suit',
            image:'/images/p3.jpg',
            price: 200,
            countInStock:20,
            brand: 'Versachi',
            rating: 2.7,
            numReviews: 10,
            description: 'Good looking suit',
        },

        {
            _id:'4',
            name: 'Pants',
            category:'pants',
            image:'/images/p4.jpg',
            price: 150,
            countInStock:30,
            brand: 'Versachi',
            rating: 2.5,
            numReviews: 10,
            description: 'Good looking suit',
        },

        {
            _id:'5',
            name: 'Pants',
            category:'pants',
            image:'/images/p5.jpg',
            price: 50,
            countInStock:0,
            brand: 'Levis',
            rating: 2.5,
            numReviews: 10,
            description: 'Good looking pants',
        },
    ]
}

export default data