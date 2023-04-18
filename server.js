const express = require('express')
const sqlite = require('sqlite3').verbose()
const axios = require('axios')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
var cron = require("node-cron");

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

//INFO - get all users
app.get('/users', (req, res) => {
    sql = 'SELECT * FROM users;'
    db.all(sql, [], (err, response) => {
        //console.log('response: 😁 ', response)
        if (err) return console.error(err)
        res.send(response)
    })
})

//INFO - create user
app.post('/createuser/', bodyParser.json(), async (req, res) => {
    //NOTE - id generator -> nanoid
    //var id = nanoid(10)
    //console.log('req.body (): ', req.body)
    var member = req.body
    sql = "INSERT INTO users (username, emil, password,isinmember) VALUES (?,?,?,?)"
    await db.run(sql, [member.username, member.emil, 'alma', true],
        (err) => {
            if (err) return console.error(err)
        })
    //res.end()
    res.header("Access-Control-Allow-Origin", "*");

    sql = 'SELECT * FROM users;'
    await db.all(sql, [], (err, response) => {
        //console.log('response: 😁😁😁😁😁😁 ', response)
        if (err) return console.error(err)
        res.send(response)
    })

    /* res.send('new user added...') */
})

//INFO - delete user
app.delete('/deleteuser/:id', (req, res) => {
    var id = (req.params.id)
    //console.log('req.params.id:(get ONE user) 😁 ', [id])
    sql = `DELETE FROM users WHERE id=?`
    //console.log(sql)
    db.run(sql, [id], (err, response) => {
        response = `the id: ${id} user deleted...`
        //console.log('response:(delete ONE user) 😁 ', response)
        if (err) return console.error(err)
        res.send(response)
    })
})

//INFO:TODO:INFO: get data
//getAllData()
async function getAllData() {
    sql = 'SELECT * FROM users;'
    await db.all(sql, [], (err, response) => {
        //console.log('response: 😁 ', response)
        if (err) return console.error(err)
        response.forEach((row) => {
            console.log(row.emil)
        })
    })
}

//INFO - get all trainings
app.get('/trainings', (req, res) => {
    sql = 'SELECT * FROM trainings;'
    db.all(sql, [], (err, response) => {
        //NOTE - CTRL ALT L * turbo console log
        //console.log("🚀 ~ file: server.js:85 ~ db.all ~ response:", response)
        //console.log('response: 😁 ', response)
        if (err) return console.error(err)
        res.send(response)
    })
})

//INFO - create training booking
app.post('/createtrainingbooking/', bodyParser.json(), async (req, res) => {
    //NOTE - id generator -> nanoid
    //var id = nanoid(10)
    //console.log('req.body (): ', req.body)
    var member = req.body
    //var bookingDATE = new Date()
    //console.log('bookingDATE: ', bookingDATE)
    sql = "INSERT INTO trainings (trainingID, name, trainingDATE, personID, bookingDATE) VALUES (?,?,?,?,?)"
    await db.run(sql, [member.trainingID, member.name, member.trainingDATE, member.personID, member.bookingDATE],
        (err) => {
            if (err) return console.error(err)
        })
    //res.end()
    res.header("Access-Control-Allow-Origin", "*");
    res.send('new training booking added...')
})

//INFO - training booking
app.delete('/deletetrainingbooking/:id', (req, res) => {
    var id = (req.params.id)
    //console.log('req.params.id:(get ONE training) 😁 ', [id])
    sql = `DELETE FROM trainings WHERE id=?`
    //console.log(sql)
    db.run(sql, [id], (err, response) => {
        response = `the id: ${id} training deleted...`
        //console.log('response:(delete ONE training) 😁 ', response)
        if (err) return console.error(err)
        res.send(response)
    })
})

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

// NOTE
//cron.schedule("*/5 * * * * *", () => { // INFO - 5 seconds
//cron.schedule("36 15 * * *", () => {   // INFO - At 15:35. 
cron.schedule("* * * * 1", () => {       // INFO - at 2023-04-24 00:00:00 (now 04-18) all Monday 
    getdata()
})

async function getdata() {
    let actualDate = new Date().getTime()
    //BUG actualDate = testDate(actualDate) //BUG - 2023-04-18 comment!!! 
    //console.log('actualDate', actualDate)
    sql = 'SELECT * FROM trainings;'
    await db.all(sql, [], (err, response) => {
        for (let row of response) {
            if (row.trainingDATE < actualDate) {
                deleteTraining()
                async function deleteTraining() {
                    let id = (row.ID)
                    let sql = `DELETE FROM trainings WHERE id=?`
                    await db.run(sql, [id], (err, response) => {
                        response = `the id: ${id} training deleted...`
                        if (err) return console.error(err)
                    })
                }
            }
        }
        if (err) return console.error(err)
    })
}

function testDate(actualDate) {
    let actualMonday = new Date(actualDate).setDate(17)
    actualMonday = new Date(actualMonday).setHours(2)
    actualMonday = new Date(actualMonday).setMinutes(0)
    actualMonday = new Date(actualMonday).setSeconds(0)
    actualMonday = new Date(actualMonday).setMilliseconds(0)
    //console.log("🚀 ~ file: server.js:170 ~ testDate ~ actualMonday:", new Date(actualMonday))
    //console.log("🚀🚀🚀 ~ file: server.js:170 ~ testDate ~ actualMonday:", actualMonday)
    return actualMonday
}
/* {
      "ID": 0,
      "bookingDATE": 0,
      "name": "",
      "personID": 0,
      "trainingDATE": 0, //INFO - past date delete 
      "trainingID": ""
   } */