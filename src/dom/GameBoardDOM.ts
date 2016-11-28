import GameMessage from './GameMessage';
const cellElementList = document.getElementsByClassName('cell');
const gameBoard = document.getElementsByClassName('game-board')[0];

export default {
  showStatusMessage (message) {
    GameMessage.display(message);
  },

  resetGameBoard() {
    for(let i =0; i < cellElementList.length; i++) {
      cellElementList[i].textContent = '';
    }
    GameMessage.hide();
  },

  /**
   * Updates dom by setting the value
   *
   * @param domCellListIndex
   * @param value
   */
  updateDOM(domCellListIndex, value) {
    cellElementList[domCellListIndex].textContent = value;
  },

  getGameBoardDOM() {
    return gameBoard;
  }
}
