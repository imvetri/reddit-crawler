const express = require('express')
const app = express()

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(server_port, () => console.log(`Example app listening on port ${server_port}!`))