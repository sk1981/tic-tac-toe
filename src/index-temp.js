const cellElementList = document.getElementsByClassName('cell');
const gameBoard = document.getElementsByClassName('game-board')[0];

const initialBoardState = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

const userX = 'X';
const userO = 'O';

let boardState = initialBoardState;
let currentUser = userX;
let movesLeft = initialBoardState.length * initialBoardState.length;

const getNextUser = (currentUser) => {
  return currentUser === userX ? userO:  userX;
};

const updateBoardState = (boardState, cellPosition, value) => {
  const {cellRow, cellColumn} = cellPosition;
  let isUpdated = false;
  if(boardState[cellRow][cellColumn].length === 0) {
    boardState[cellRow][cellColumn] = value;
    isUpdated = true;
  }
  return isUpdated;
};

checkArrayWin = (arr, value) => {
  return arr.reduce((previous, rowValue) => {
    return previous && rowValue === value;
  }, true);
};

const rowWin = (boardState, rowIndex, value) => {
  const row = boardState[rowIndex];
  return checkArrayWin(row, value);
};

const columnWin = (boardState, columnIndex, value) => {
  const columnDataArr = boardState.map(boardRow => boardRow[columnIndex]);
  return checkArrayWin(columnDataArr, value);
};

const diagonalWin = (boardState, value) => {
  const rightDiagonalArr = boardState.map((row, index) => boardState[index][index]);
  const leftDiagonalArr = boardState.map((row, index) => boardState[index][boardState.length - 1 - index]);
  return checkArrayWin(rightDiagonalArr, value) ||  checkArrayWin(leftDiagonalArr, value);
};

const checkWin = (boardState, value,  cellRow, cellColumn) => {
  return rowWin(boardState, cellRow, value) ||
         columnWin(boardState, cellColumn, value) ||
         (isDiagonal(boardState, cellRow, cellColumn) && diagonalWin(boardState, value))
};

const isDiagonal = (boardState, cellRow, cellColumn) => {
  return cellRow === cellColumn || (cellRow + cellColumn === boardState.length - 1);
};

const updateDOM = (cellRow, cellColumn, value) => {
  const domCellListIndex = cellRow * boardState.length + cellColumn;
  console.log(domCellListIndex);
  cellElementList[domCellListIndex].textContent = value;
};

const showStatusMessage = (message) => {
  console.log(message);
};

gameBoard.addEventListener("click", (clickEvent) => {
  const target = clickEvent.target;
  const cellRow = +target.getAttribute('data-row');
  const cellColumn = +target.getAttribute('data-column');
  const isUpdated = updateBoardState(boardState, {cellRow, cellColumn}, currentUser);
  if(isUpdated) {
    updateDOM(cellRow, cellColumn, currentUser);
    const hasWon = checkWin(boardState, currentUser, cellRow, cellColumn);
    if(hasWon) {
      showStatusMessage(`User ${currentUser} has won`);
    } else {
      movesLeft--;
      if(movesLeft === -1) {
        showStatusMessage(`Game is a draw!`);
      } else {
        currentUser = getNextUser(currentUser);
        console.log(JSON.stringify(boardState));
      }
    }
  }
});