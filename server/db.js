// First we require the mongoose library, which is an ODM
const mongoose = require('mongoose');
const faker = require('faker');

// const db = mongoose.connection;

// create database URL. We don't need to first create the fullstack-demo
// database. Mongo will automatically create the database for us.
const dbURL = 'mongodb://localhost/review-module';


// Connect!
mongoose.connect(dbURL, { useNewUrlParser: true });
const db = mongoose.connection;

let reviewSchema = new mongoose.Schema({
    author: String,
    profile: String,
    createdAt: Date,
    body: String
});

let Review = mongoose.model('Review', reviewSchema);

console.log(`
  A random city:................${ faker.address.city() }
`);

for (let i = 0; i < 101; i++) {
    let reviewObj = {
        author: faker.name.firstName(),
        createdAt: faker.date.month() + ' ' + faker.random.number({
            'min': 2012,
            'max': 2019
        }),
        body: faker.lorem.sentence(),
    }
    let reviewDocument = new Review(reviewObj)
    reviewDocument.save((err, review) => {
    if (err) return console.log(err);
    console.log(`saved ${i} document`)
  });
}

// This will let us know if something goes wrong
db.on('error', err => console.error(`An error has occured: ${err}`));
// This will let us know when we are successfully connected.
db.once('open', () => console.log(`Database connected on ${dbURL}`));

module.exports = db;
