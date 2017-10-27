const { MongoClient } = require('mongodb')
const express = require('express')
const url = 'mongodb://localhost/typeahead'
const app = express()

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.error(err)
  }
  const words = db.collection('words')
  app.use(express.static('./public'))

  app.get('/typeahead/words', (req, res) => {
    words
      .find({})
      .toArray()
      .then(words => res.json(words))
      .catch(err => {
        console.error(err)
        res.sendStatus(500)
      })
  })
})

app.listen(3000, () => {
  console.log('Visit http://localhost:3000')
})
