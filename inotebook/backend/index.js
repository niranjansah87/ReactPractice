const connectToMongoose = require('./db');
const express = require('express')
const cors = require('cors');
connectToMongoose();

const app = express()
const port = 5000
app.use(express.json());
// Use cors middleware
app.use(cors());
//Available Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Add other CORS headers as needed
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


