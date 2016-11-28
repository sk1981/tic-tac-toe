export default {
  /**
   * Checks if the cell on the given position lies on a diagonal or not
   *
   * @param boardState
   * @param cellRow
   * @param cellColumn
   * @returns {boolean}
   */
  isDiagonal(boardState, cellRow, cellColumn) {
    return cellRow === cellColumn || (cellRow + cellColumn === boardState.length - 1);
  },

  /**
   * Map the position of a cell in the gameboard 2-d array to postion in cell list
   *
   * @param boardSize
   * @param cellRow
   * @param cellColumn
   * @returns {any}
   */
  getCellPositionInList(boardSize, cellRow, cellColumn) {
    return cellRow * boardSize + cellColumn;

  }
}