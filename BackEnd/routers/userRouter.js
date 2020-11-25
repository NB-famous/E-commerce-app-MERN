import express from 'express';
import expressAsyncHandler from 'express-async-handler'
import data from '../data.js';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async(req, res) => {

    // this will delete and reseed your database each refresh -> comment this out once data base is reseeded
    //await User.remove({});
    /////////////////
    const createdUsers = await User.insertMany(data.users);
    res.send({
        createdUsers
    })

}))

export default userRouter;