require('dotenv').config();
const connectDb = require('./db/connect');
const Data = require('./models/Data');


const createUser = async()=>{
  let data = {
    btcinr: {
      base_unit: "btc",
      quote_unit: "inr",
      low: "3200000.0",
      high: "3350000.0",
      last: "3308950.0",
      type: "SPOT",
      open: "3203955",
      volume: "339.46549",
      sell: "3318053.0",
      buy: "3308972.0",
      at: 1647970274,
      name: "BTC/INR",
    },
    xrpinr: {
      base_unit: "xrp",
      quote_unit: "inr",
      low: "63.3612",
      high: "67.0",
      last: "65.0022",
      type: "SPOT",
      open: "63.5533",
      volume: "930213.7",
      sell: "65.0022",
      buy: "65.0011",
      at: 1647970274,
      name: "XRP/INR",
    },
    ethinr: {
      base_unit: "eth",
      quote_unit: "inr",
      low: "225779.0",
      high: "235786.8",
      last: "233474.5",
      type: "SPOT",
      open: "228067.3",
      volume: "505.0016",
      sell: "233864.7",
      buy: "233459.3",
      at: 1647970274,
      name: "ETH/INR",
    },
    trxinr: {
      base_unit: "trx",
      quote_unit: "inr",
      low: "4.792",
      high: "4.9376",
      last: "4.901",
      type: "SPOT",
      open: "4.8045",
      volume: "16372078.0",
      sell: "4.901",
      buy: "4.9001",
      at: 1647970274,
      name: "TRX/INR",
    },
    eosinr: {
      base_unit: "eos",
      quote_unit: "inr",
      low: "182.56",
      high: "199.0",
      last: "193.98",
      type: "SPOT",
      open: "184",
      volume: "51578.26",
      sell: "193.98",
      buy: "192.52",
      at: 1647970274,
      name: "EOS/INR",
    },
    zilinr: {
      base_unit: "zil",
      quote_unit: "inr",
      low: "3.28",
      high: "3.7",
      last: "3.54",
      type: "SPOT",
      open: "3.33",
      volume: "2225677.0",
      sell: "3.55",
      buy: "3.53",
      at: 1647970274,
      name: "ZIL/INR",
    },
    batinr: {
      base_unit: "bat",
      quote_unit: "inr",
      low: "62.522",
      high: "64.5",
      last: "63.9",
      type: "SPOT",
      open: "63.786",
      volume: "37460.93",
      sell: "63.984",
      buy: "63.563",
      at: 1647970274,
      name: "BAT/INR",
    },
    zrxinr: {
      base_unit: "zrx",
      quote_unit: "inr",
      low: "42.1",
      high: "44.73",
      last: "44.25",
      type: "SPOT",
      open: "42.87",
      volume: "17729.07",
      sell: "44.25",
      buy: "42.9",
      at: 1647970274,
      name: "ZRX/INR",
    },
    reqinr: {
      base_unit: "req",
      quote_unit: "inr",
      low: "16.85",
      high: "17.7699",
      last: "17.0801",
      type: "SPOT",
      open: "17",
      volume: "219332.97",
      sell: "17.0909",
      buy: "16.9423",
      at: 1647970274,
      name: "REQ/INR",
    },
    nulsinr: {
      base_unit: "nuls",
      quote_unit: "inr",
      low: "108.0",
      high: "108.0",
      last: "108.0",
      type: "SPOT",
      open: 108,
      volume: "0.0",
      sell: "0.0",
      buy: "0.0",
      at: 1647970274,
      name: "NULS/INR",
    },
  };

  for(let key in data){
    await Data.create(data[key]);
  }
 

};

const start = async()=>{
  try {
    await connectDb(process.env.MONGO_URL);
    // await createUser();
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

start();