let express = require('express');
require('dotenv').config();
let app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
console.log(mongoose.version,'<========')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('connetec to the db'))
.catch(err => console.error('error connecting',err))
//console.log('mongoose version;',mongoose.version)

app.use(bodyParser.urlencoded({extended:false}))
app.use((req, res, next)=> {
  const str = req.method + ' ' + req.path + ' - ' + req.ip
  console.log(str); 
  next();
});

console.log("Hello World");
app.use('/public',express.static(__dirname + '/public'));
app.get('/',function(req,res){
  res.sendFile(__dirname + '/views/index.html');
})
app.get('/json', (req, res)=>{
  if (process.env.MESSAGE_STYLE === "uppercase") {
  res.json({message:"HELLO JSON"});
} else {
  res.json({message:"Hello json"});
}
});


app.get('/now', (req, res, next) => {
     req.time = new Date().toString();
     next()
}, (req, res) => {
    res.json({
      'time': req.time
    })

});

app.get('/:word/echo',(req,res)=>{
  const word = req.params.word;
  res.json({echo:word})
})
app.get('/name',(req, res) => {
  const first = req.query.first;
  const last = req.query.last;
  const {first: firstName, last: lastName } = req.query;
  res.json({name:`${firstName} ${lastName}`})
})

app.post('/name', (req, res) => {
  const {first: firstName, last: lastName } = req.body;
  res.json({name: `${firstName} ${lastName}`})
})



































 module.exports = app;





// let Person;

// const createAndSavePerson = (done) => {
//   done(null /*, data*/);
// };

// const createManyPeople = (arrayOfPeople, done) => {
//   done(null /*, data*/);
// };

// const findPeopleByName = (personName, done) => {
//   done(null /*, data*/);
// };

// const findOneByFood = (food, done) => {
//   done(null /*, data*/);
// };

// const findPersonById = (personId, done) => {
//   done(null /*, data*/);
// };

// const findEditThenSave = (personId, done) => {
//   const foodToAdd = "hamburger";

//   done(null /*, data*/);
// };

// const findAndUpdate = (personName, done) => {
//   const ageToSet = 20;

//   done(null /*, data*/);
// };

// const removeById = (personId, done) => {
//   done(null /*, data*/);
// };

// const removeManyPeople = (done) => {
//   const nameToRemove = "Mary";

//   done(null /*, data*/);
// };

// const queryChain = (done) => {
//   const foodToSearch = "burrito";

//   done(null /*, data*/);
// };

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

// exports.PersonModel = Person;
// exports.createAndSavePerson = createAndSavePerson;
// exports.findPeopleByName = findPeopleByName;
// exports.findOneByFood = findOneByFood;
// exports.findPersonById = findPersonById;
// exports.findEditThenSave = findEditThenSave;
// exports.findAndUpdate = findAndUpdate;
// exports.createManyPeople = createManyPeople;
// exports.removeById = removeById;
// exports.removeManyPeople = removeManyPeople;
// exports.queryChain = queryChain;
