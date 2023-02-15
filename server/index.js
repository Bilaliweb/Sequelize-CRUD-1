const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()
const cors = require('cors')

///////////// Database Connection
const db = require('./config/sq_config')
db.authenticate().then(() => {
    console.log('Database connection established...')
})
.catch((err) => {
    console.log('Error occurred: ' + err)
})

const app = express()

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}))
app.use(cors("*"))

/////////// For All Routes
app.use('/', require('./routes/user_route'))

const port = 5000
db.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening to port: ${port}`)
    })
})
.catch(err => {
    console.log('Error is ' + err)
})




module.exports = router