const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const data = require('./students.json')

function findById(data, requestedId){
  return data.find(entry => entry.id === +requestedId)
}

app.get('/', (req, res) => {
  res.json(data)
})

app.get('/:id', (req, res) => {
  var item = findById(data, req.params.id)
  if (!item) {
    res.status(404).json({
      error: {
        message: "Item not found"
      }
    })
  }
  res.json(item)
})

const port = process.env.PORT|| 3000
app.listen(port)