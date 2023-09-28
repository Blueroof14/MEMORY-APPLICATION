import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'

const app = express()

app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));
//this allow a cross origin request
app.use(cors())

app.get('/', (req, res) => {
  res.send('hello world')
});

const postSchema = new mongoose.Schema({
  form_title: String,
  form_message: String,
  form_tags: String,
  form_creator: String,
});

const Model = mongoose.model('posts_Model', postSchema)


app.post('/post/create', async (req, res) => {
 try{
  const post = await Model.create(req.body);
  res.json(post);
 }catch(error){
  console.log(error);
 }

});

app.get('/post/get_data', async (req, res) => {
  try{
   const post = await Model.find(req.body);
   res.json(post);
  }catch(error){
   console.log(error);
  }
 
 });
 
 


const PORT = 5000;

const CONNECTION_URI = 'mongodb+srv://val123:val123@cluster0.utwtlap.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`)))
    .catch((error) => console.log(error));