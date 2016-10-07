const R = require('ramda');
const Either = require('ramda-fantasy').Either;
const Identity = require('ramda-fantasy').Identity;
const myFirstEither = Either("left", "right");


const factorize = R.compose( R.reduce( R.multiply, 1), R.range(1), R.add(1) );

const apiReturn = [
  { cheese: 'buttercup', id: 23284540736 },
  { sauce: 'Mo', id: 23289225600 },
]

const streams =  [
    { display_name: 'ESL_SC2', id: 23284540736 },
    { display_name: 'OgamingSC2', id: 23289225600 },
    { display_name: 'cretetion', id: 23290124320 },
    { display_name: 'freecodecamp', id: 4 },
    { display_name: 'storbeck', id: 5 },
    { display_name: 'habathcx', id: 6 },
    { display_name: 'RobotCaleb', id: 7 },
    { display_name: 'noobs2ninjas', id: 8 },
  ]

const findStream = R.find(R.propEq('id'), streams);
//console.log(findItem);
// const mergeObject = R.mergeObject()
const getIDs = R.map(R.prop('id'));
const mergedList = R.compose( R.map(R.find(R.propEq('id', 23284540736))), R.map(R.prop('id')) )(apiReturn)
console.log(mergedList);
