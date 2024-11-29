// src/logic/game.js
import { getValidMoves } from './moves';
import { isCheckmate, isStalemate } from './rules';

export class Game {
  constructor() {
    this.board = this.initializeBoard();
    this.currentPlayer = 'white';
    this.selectedPiece = null;
    this.gameOver = false;
  }

  initializeBoard() {
    // Inicialización del tablero (definir las piezas)
    return [
      // Asegúrate de definir las piezas en su posición inicial
      ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ];
  }

  selectPiece(row, col) {
    const piece = this.board[row][col];
    if (piece && this.getPieceColor(piece) === this.currentPlayer) {
      this.selectedPiece = { row, col };
    }
  }

  movePiece(toRow, toCol) {
    if (this.selectedPiece) {
      const piece = this.board[this.selectedPiece.row][this.selectedPiece.col];
      const validMoves = getValidMoves(this.board, piece, this.selectedPiece);

      const move = validMoves.find(move => move.row === toRow && move.col === toCol);
      if (move) {
        // Realiza el movimiento
        this.board[toRow][toCol] = piece;
        this.board[this.selectedPiece.row][this.selectedPiece.col] = '.';
        this.selectedPiece = null;

        // Verifica si el juego ha terminado
        if (isCheckmate(this.board, this.currentPlayer)) {
          this.gameOver = true;
          console.log('¡Jaquemate!');
        } else if (isStalemate(this.board, this.currentPlayer)) {
          this.gameOver = true;
          console.log('¡Empate!');
        } else {
          this.switchPlayer();
        }
      }
    }
  }

  switchPlayer() {
    this.currentPlayer = this.currentPlayer === 'white' ? 'black' : 'white';
  }

  getPieceColor(piece) {
    return piece === piece.toUpperCase() ? 'white' : 'black';
  }
}
