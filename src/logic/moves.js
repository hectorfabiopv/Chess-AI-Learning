// src/logic/moves.js
export function getValidMoves(board, piece, selected) {
  const moves = [];

  // Aquí defines los movimientos válidos para cada tipo de pieza
  // Ejemplo básico para peones (simplificado)
  if (piece.toLowerCase() === 'p') {
    const direction = piece === piece.toUpperCase() ? -1 : 1;
    const startRow = piece === piece.toUpperCase() ? 6 : 1;
    if (selected.row + direction >= 0 && selected.row + direction < 8) {
      if (board[selected.row + direction][selected.col] === '.') {
        moves.push({ row: selected.row + direction, col: selected.col });
      }
    }
  }

  return moves;
}
