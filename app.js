const express = require('express');
var cors = require('cors');

const connectToMongo = require('./db');

require('dotenv').config()

connectToMongo(process.env.MONGO_URI);

const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());


//Available routes
app.use('/api/user',require('./routes/user'));
app.use('/api/note',require('./routes/note'));
app.use('/api/todo',require('./routes/todo'));
app.use('/api/multipage',require('./routes/multipage'));

app.get('/',(req,res)=>{
   res.send('Hello Sir!')
})

app.listen(port,()=>{
  console.log('good')  
})

