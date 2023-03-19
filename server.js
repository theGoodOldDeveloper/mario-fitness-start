const express = require('express')
const sqlite = require('sqlite3').verbose()
const axios = require('axios')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
let sql
let port = process.env.SERVERPORT
app.use(bodyParser.json())

app.use(cors({
    origin: true,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
}))

//INFO:TODO:INFO: database connection - https://youtu.be/_Q-i0LiRd0A?t=289
const db = new sqlite.Database("./databases/test.db", sqlite.OPEN_READWRITE, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('database connection OK')
    }

})

app.get('/users', (req, res) => {
    sql = 'SELECT * FROM users;'
    db.all(sql, [], (err, response) => {
        //console.log('response: 😁 ', response)
        if (err) return console.error(err)
        res.send(response)
    })
})

//INFO - create contact
app.post('/createuser/', bodyParser.json(), async (req, res) => {
    //NOTE - id generator -> nanoid
    //var id = nanoid(10)
    console.log('req.body (): ', req.body)
    var member = req.body
    sql = "INSERT INTO users (username, emil, password,isinmember) VALUES (?,?,?,?)"
    await db.run(sql, [member.username, member.emil, 'alma', true],
        (err) => {
            if (err) return console.error(err)
        })
    //res.end()
    res.header("Access-Control-Allow-Origin", "*");
    res.send('new person added...')
})

//INFO:TODO:INFO: get data
//getAllData()
async function getAllData() {
    sql = 'SELECT * FROM users;'
    await db.all(sql, [], (err, response) => {
        console.log('response: 😁 ', response)
        if (err) return console.error(err)
        response.forEach((row) => {
            console.log(row.emil)
        })
    })
}

//getData('https://random-data-api.com/api/users/random_user?search=20')
async function getData(url) {
    try {
        const { data } = await axios.get(url)
        console.log(data)
    } catch (error) {
        console.log(error + ' eztElBaltaztad')
    }
}

//creater table
/* sql = 'CREATE TABLE users(ID INTEGER PRIMARY KEY, username, emil, password)'
db.run(sql) */

app.listen(port, () => (console.log('the server listen: ' + port)))