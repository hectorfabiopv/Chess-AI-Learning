export const getPawnMoves = (position, boardState, color) => {
  const moves = [];
  const direction = color === 'white' ? -1 : 1;
  const [row, col] = position;

  // Movimiento hacia adelante
  if (!boardState[row + direction][col]) {
    moves.push([row + direction, col]);
  }

  // Capturas diagonales
  [[-1, 1], [-1, -1]].forEach(([r, c]) => {
    if (
      boardState[row + direction] &&
      boardState[row + direction][col + c]?.color !== color
    ) {
      moves.push([row + direction, col + c]);
    }
  });

  return moves;
};
