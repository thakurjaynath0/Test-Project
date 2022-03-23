require('dotenv').config();

//express
const express = require('express');
const { connect } = require('http2');
const app = express();

//connect database
const connectDb = require('./db/connect');

//routes
const dataRouter = require('./routes/dataRoutes');

// middlewares 
const errorHandlerMiddleware = require('./middlewares/error-handler');
const notFoundMiddleware = require('./middlewares/not-found');

app.use(express.json());
app.use('/',express.static('../frontend'));

// app.get('/', (req,res)=>{
//     res.send('<h1>Test</h1>');
// });

app.use('/data',dataRouter);


app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);


//server
const port = process.env.PORT || 5000;
const start = async()=>{
    try {
        await connectDb(process.env.MONGO_URL);
        app.listen(port, ()=>{
            console.log(`Server is listening at port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
    
};

start();