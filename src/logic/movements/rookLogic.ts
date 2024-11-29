export const getRookMoves = (position, boardState) => {
  const moves = [];
  const [row, col] = position;

  // Función auxiliar para moverse en línea recta
  const explore = (dr, dc) => {
    let r = row + dr;
    let c = col + dc;
    while (boardState[r] && !boardState[r][c]) {
      moves.push([r, c]);
      r += dr;
      c += dc;
    }
    if (boardState[r] && boardState[r][c]?.color !== boardState[row][col].color) {
      moves.push([r, c]);
    }
  };

  explore(1, 0); // Abajo
  explore(-1, 0); // Arriba
  explore(0, 1); // Derecha
  explore(0, -1); // Izquierda

  return moves;
};
