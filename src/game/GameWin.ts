import GameDataHelper from './GameDataHelper';

/**
 * Checks if an array contains a winning entry.
 *
 * An array will only contain a winning entry if all values are of the same type;
 *
 * @param arr
 * @param value
 * @returns boolean
 */
function checkArrayWin(arr, value){
  return arr.reduce((previous, rowValue) => {
    return previous && rowValue === value;
  }, true);
}

export default  {

  rowWin(boardState, rowIndex, value){
    const row = boardState[rowIndex];
    return checkArrayWin(row, value);
  },

  columnWin(boardState, columnIndex, value) {
    const columnDataArr = boardState.map(boardRow => boardRow[columnIndex]);
    return checkArrayWin(columnDataArr, value);
  },

  diagonalWin(boardState, value) {
    const rightDiagonalArr = boardState.map((row, index) => boardState[index][index]);
    const leftDiagonalArr = boardState.map((row, index) => boardState[index][boardState.length - 1 - index]);
    return checkArrayWin(rightDiagonalArr, value) ||  checkArrayWin(leftDiagonalArr, value);
  },

  checkWin(boardState, value,  cellRow, cellColumn) {
    return this.rowWin(boardState, cellRow, value) ||
      this.columnWin(boardState, cellColumn, value) ||
      (GameDataHelper.isDiagonal(boardState, cellRow, cellColumn) && this.diagonalWin(boardState, value))
  }
}