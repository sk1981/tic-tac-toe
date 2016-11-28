import GameBoardDOM from './dom/GameBoardDOM';
import GameBoard from './GameBoard';

import ResetButton from './dom/ResetButton';

/**
 * Listen to cell events
 */

GameBoard.initialize();

GameBoardDOM.getGameBoardDOM().addEventListener("click", (clickEvent) => {
  GameBoard.handleClickMove(clickEvent, GameBoardDOM);
});

/**
 * Listent to reset events
 */
ResetButton.addCallback(() => {
  GameBoardDOM.resetGameBoard();
  GameBoard.initialize();
});