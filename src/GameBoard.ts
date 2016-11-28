import GameWin from './game/GameWin';
import GameBoardState from './game/GameState';
import GameDataHelper from './game/GameDataHelper';

let boardState;
let currentUser;
let movesLeft;

export default {
  /**
   * Initialize with default data
   */
  initialize() {
    boardState = GameBoardState.getInitialBoardState();
    currentUser = GameBoardState.getInitialUser();
    movesLeft = GameBoardState.getBoardSize() * GameBoardState.getBoardSize();
  },

  /**
   * Handles click of game cells
   * 
   * @param clickEvent
   * @param gameBoardDOM
   */
  handleClickMove(clickEvent, gameBoardDOM) {
    const target:HTMLElement = <HTMLElement>(clickEvent.target);
    const cellRow = +target.getAttribute('data-row');
    const cellColumn = +target.getAttribute('data-column');
    const value = currentUser.value;
    const isUpdated = GameBoardState.updateBoardState(boardState, {cellRow, cellColumn}, value);
    if(isUpdated) {
      const cellPosition = GameDataHelper.getCellPositionInList(GameBoardState.getBoardSize(), cellRow, cellColumn);
      gameBoardDOM.updateDOM(cellPosition, value);
      const hasWon = GameWin.checkWin(boardState, value, cellRow, cellColumn);
      if(hasWon) {
        gameBoardDOM.showStatusMessage(currentUser.winMessage);
      } else {
        movesLeft--;
        if(movesLeft === 0) {
          gameBoardDOM.showStatusMessage(`Game is a draw!`);
        } else {
          currentUser = GameBoardState.getNextUser(currentUser);
          console.log(JSON.stringify(boardState));
        }
      }
    }
  }

}