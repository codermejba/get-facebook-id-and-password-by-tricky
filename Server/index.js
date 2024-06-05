import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'

dotenv.config()

const app = express()
app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:5173'
}))


const __dirname = path.resolve()

/* // sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });
   */
app.get('/',(req,res)=>{
    res.redirect('http://localhost:5173/')
})

let database = []
app.get('/api/login',(req,res)=>{
    res.json(database)
})

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        database.push(req.body);
        console.log('Database:', database);
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(400).json({ message: 'Invalid login details' });
    }
});


const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log('server is running on port ',port)
})