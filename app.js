const express = require('express');
const cors=require('cors');
require('dotenv').config();
const Data=require('./models/Data.js');
const { default: mongoose } = require('mongoose');

const app = express();
//const port=3000;

app.use(cors());
app.use(express.json());
app.get('/backend/test', (req, res) => {
  res.json('Hello World!');
});

app.post('/backend/data',async (req,res)=>{

    //console.log(process.env.MONGO_URL);
    await mongoose.connect("mongodb+srv://pg2523414:wD58dIdFyNaXIAMe@cluster0.ainaqqa.mongodb.net/?retryWrites=true&w=majority");
    const {name,age,mob,amob,details}=req.body;

    const data=await Data.create({name,age,mob,amob,details});

    res.json(data);
});

//Fetching Api

app.get('/backend/datas',async (req,res)=>{
  await mongoose.connect("mongodb+srv://pg2523414:wD58dIdFyNaXIAMe@cluster0.ainaqqa.mongodb.net/?retryWrites=true&w=majority");
  const datas=await Data.find();
  res.json(datas);
});

//const PORT=process.env.PORT;
app.listen(4000)