const R = require('ramda');
const Maybe = require('ramda-fantasy').Maybe;

const PColor = {
  WHITE: 'WHITE',
  BLACK: 'BLACK'
};

const PType = {
  PAWN: 'PAWN',
  KNIGHT: 'KNIGHT',
  BISHOP: 'BISHOP',
  ROOK: 'ROOK',
  QUEEN: 'QUEEN',
  KING: 'KING'
}

const TypeList = {
  p: PType.PAWN,
  n: PType.KNIGHT,
  b: PType.BISHOP,
  r: PType.ROOK,
  q: PType.QUEEN,
  k: PType.KING,
}

const initialBoard = [
  'rnbqkbnr',
  'pppppppp',
  '........',
  '........',
  '........',
  '........',
  'PPPPPPPP',
  'RNBQKBNR',
];

const showSquare = (square) => {
  return Maybe(showPiece(square)).getOrElse('.');
}

const readSquare = (char) => {
  return Maybe(readPiece(char)).getOrElse('Empty');
}


// Piece -> char
const showPiece = (piece) => {
  switch(piece.type){
    case PType.PAWN:
      return piece.color === PColor.WHITE ? 'P' : 'p';
    case PType.KNIGHT:
      return piece.color === PColor.WHITE ? 'N' : 'n';
    case PType.BISHOP:
      return piece.color === PColor.WHITE ? 'B' : 'b';
    case PType.ROOK:
      return piece.color === PColor.WHITE ? 'R' : 'r';
    case PType.QUEEN:
      return piece.color === PColor.WHITE ? 'Q' : 'q';
    case PType.KING:
      return piece.color === PColor.WHITE ? 'K' : 'k';
  }
}

const readPiece = (char) => {
  return R.has(char, TypeList);
  // return {
  //   type: TypeList[char.toLowerCase()],
  //   color: char === char.toUpperCase() ? PColor.WHITE : PColor.BLACK
  // }
}

console.log(readPiece('p'))
// char -> Piece
// const readPiece = (char) => {
//   switch(char){
//     case 'P':
//       return {type: PType.PAWN, color: PColor.WHITE};
//     case 'N':
//       return {type: PType.KNIGHT, color: PColor.WHITE};
//     case 'B':
//       return {type: PType.BISHOP, color: PColor.WHITE};
//     case 'R':
//       return {type: PType.ROOK, color: PColor.WHITE};
//     case 'Q':
//       return {type: PType.QUEEN, color: PColor.WHITE};
//     case 'K':
//       return {type: PType.KING, color: PColor.WHITE};
//     case 'p':
//       return {type: PType.PAWN, color: PColor.BLACK};
//     case 'n':
//       return {type: PType.KNIGHT, color: PColor.BLACK};
//     case 'b':
//       return {type: PType.BISHOP, color: PColor.BLACK};
//     case 'r':
//       return {type: PType.ROOK, color: PColor.BLACK};
//     case 'q':
//       return {type: PType.QUEEN, color: PColor.BLACK};
//     case 'k':
//       return {type: PType.KING, color: PColor.BLACK};
//   }
// }
// string -> Board
// const filterNewLines = R.filter((s) => s !== '\n');
// const readBoard = R.map(R.map(readSquare));
//
// const myBoard = readBoard(initialBoard);
//
// const showBoard = R.compose( R.join('/'), R.map(R.join('')), R.map(R.map(showSquare)));
// console.log(showBoard(myBoard));
