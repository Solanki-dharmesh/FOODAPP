const express = require('express')
const app = express()
const port = 5000
const mongo=require('./db')
const cors=require('cors')
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}))
// app.use(express.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    
    next();
  });
app.use(express.json())
mongo()
app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api',require('./Routes/CreateUser'))
app.use('/api',require('./Routes/DisplayData'))
app.use('/api',require('./Routes/OrderData'))
app.listen(port, () => console.log(`Example amn pp listening on port ${port}!`))