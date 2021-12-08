import express from "express";
import mongoose from 'mongoose';
import product from "./models/product.js";
// import fetch from "node-fetch";
import {readFile} from 'fs/promises';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;



const app = express();
app.use(express.json());
app.use(express.static('client/build'));



app.get('/api/products', async (req, res) => {
  const { term } = req.query;
  if (term) {
    console.log(term);
    res.send(await product.find({ title: {'$regex': term, '$options' : 'i' } }));
  } else res.send(await product.find());  
});

app.post('/api/products', async (req, res) => {
  const { title, price, category, image } = req.body;
  const data = new product({ title, price, category, image });
  await data.save();
  res.send(data);
})

app.get('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  res.send(await product.findById(id));
})

app.put('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  let updatedProduct = await product.findById(id);
  for (const prop in body) {
    updatedProduct[prop] = body[prop];
  }
  await product.findByIdAndUpdate(id, updatedProduct, { returnOriginal: false });
  res.send({ msg: 'product\'s updated' });
})

app.delete('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  await product.findByIdAndRemove(id);
  res.send(await product.find());
})

async function initData () {
  const checkDB = await product.find();
  if (!checkDB.length) {
    const data = JSON.parse(await readFile('./products.json', 'utf-8'));
    const updatedData = data.map(singleProduct => ({ ...singleProduct, id: null }));
    await product.insertMany(updatedData);
  } 
}

app.get(`*`, async (req, res) => {
  res.sendFile(__dirname + 'client/public/index.html');
})

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`, err => {
  if (err) {
    console.log(err);
  } else {
    initData(); 
    app.listen(process.env.PORT || 8080);
  }
});
