const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost/typeahead'

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.error(err)
  }
  const words = db.collection('words')
  words
    .deleteMany({})
    .then(() => {
      words
        .insertMany(
          [
            'time',
            'year',
            'people',
            'way',
            'day',
            'man',
            'thing',
            'woman',
            'life',
            'child',
            'world',
            'school',
            'state',
            'family',
            'student',
            'group',
            'country',
            'problem',
            'hand',
            'part',
            'place',
            'case',
            'week',
            'company',
            'system',
            'program',
            'question',
            'work',
            'government',
            'number',
            'night',
            'point',
            'home',
            'water',
            'room',
            'mother',
            'area',
            'money',
            'story',
            'fact',
            'month',
            'lot',
            'right',
            'study',
            'book',
            'eye',
            'job',
            'word',
            'business',
            'issue',
            'side',
            'kind',
            'head',
            'house',
            'service',
            'friend',
            'father',
            'power',
            'hour',
            'game',
            'line',
            'end',
            'member',
            'law',
            'car',
            'city',
            'community',
            'name',
            'president',
            'team',
            'minute',
            'idea',
            'kid',
            'body',
            'information',
            'back',
            'parent',
            'face',
            'others',
            'level',
            'office',
            'door',
            'health',
            'person',
            'art',
            'war',
            'history',
            'party',
            'result',
            'change',
            'morning',
            'reason',
            'research',
            'girl',
            'guy',
            'moment',
            'air',
            'teacher',
            'force',
            'education'
          ]
            .sort()
            .map(word => ({
              word: word
            }))
        )
        .catch(err => {
          console.error(err)
        })
    })
    .then(() => console.log('Words seeded!'))
    .then(() => db.close())
})
