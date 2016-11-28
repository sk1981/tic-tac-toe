const GAME_BOARD_SIZE = 3;

const USER = {value: 'X', winMessage: 'You Won'};
const COMPUTER = {value: 'O', winMessage: 'Computer Wins'};

export default {
  updateBoardState(boardState, cellPosition, value) {
    const {cellRow, cellColumn} = cellPosition;
    let isUpdated = false;
    if (boardState[cellRow][cellColumn].length === 0) {
      boardState[cellRow][cellColumn] = value;
      isUpdated = true;
    }
    return isUpdated;
  },

  /**
   * Switches between current and next user
   * @param currentUser
   * @returns {string}
   */
  getNextUser(currentUser) {
    return currentUser === USER ? COMPUTER:  USER;
  },


  getInitialBoardState() {
    var initialBoardState =[];
    // Use loop to create array which is more efficient
    // than any shortcut method using split/join or new Array
    for(let row = 0; row < GAME_BOARD_SIZE; row++) {
      initialBoardState[row] = [];
      for (let column = 0; column < GAME_BOARD_SIZE; column++) {
        initialBoardState[row][column] = '';
      }
    }
    return initialBoardState;
  },

  getInitialUser() {
    return USER;
  },

  getBoardSize() {
    return GAME_BOARD_SIZE;
  }
}