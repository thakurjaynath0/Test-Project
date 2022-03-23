const Data = require('../models/Data');
const {StatusCodes} = require('http-status-codes');
const customError = require('../errors');




const getData = async(req,res)=>{
    const getData = await Data.find({});
    if(!getData){
        throw new customError.NotFoundError('No data found');
    }
    res.status(StatusCodes.OK).json(getData);
};


module.exports = {getData};