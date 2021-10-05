let express = require('express')
const controller = require('./controller')
let app = express()

app.use(express.json())

app.post('/lorem', controller)

let port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port ${port}`))