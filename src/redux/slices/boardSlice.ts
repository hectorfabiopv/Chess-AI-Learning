import { createSlice } from '@reduxjs/toolkit';

// Definir las piezas iniciales
const initialPieces = [
  { type: 'rook', color: 'black', row: 0, col: 0 },
  { type: 'rook', color: 'black', row: 0, col: 7 },
  { type: 'rook', color: 'white', row: 7, col: 0 },
  { type: 'rook', color: 'white', row: 7, col: 7 },
  { type: 'knight', color: 'black', row: 0, col: 1 },
  { type: 'knight', color: 'black', row: 0, col: 6 },
  { type: 'knight', color: 'white', row: 7, col: 1 },
  { type: 'knight', color: 'white', row: 7, col: 6 },
  { type: 'bishop', color: 'black', row: 0, col: 2 },
  { type: 'bishop', color: 'black', row: 0, col: 5 },
  { type: 'bishop', color: 'white', row: 7, col: 2 },
  { type: 'bishop', color: 'white', row: 7, col: 5 },
  { type: 'queen', color: 'black', row: 0, col: 3 },
  { type: 'king', color: 'black', row: 0, col: 4 },
  { type: 'queen', color: 'white', row: 7, col: 3 },
  { type: 'king', color: 'white', row: 7, col: 4 },
  { type: 'pawn', color: 'black', row: 1, col: 0 },
  { type: 'pawn', color: 'black', row: 1, col: 1 },
  { type: 'pawn', color: 'black', row: 1, col: 2 },
  { type: 'pawn', color: 'black', row: 1, col: 3 },
  { type: 'pawn', color: 'black', row: 1, col: 4 },
  { type: 'pawn', color: 'black', row: 1, col: 5 },
  { type: 'pawn', color: 'black', row: 1, col: 6 },
  { type: 'pawn', color: 'black', row: 1, col: 7 },
  { type: 'pawn', color: 'white', row: 6, col: 0 },
  { type: 'pawn', color: 'white', row: 6, col: 1 },
  { type: 'pawn', color: 'white', row: 6, col: 2 },
  { type: 'pawn', color: 'white', row: 6, col: 3 },
  { type: 'pawn', color: 'white', row: 6, col: 4 },
  { type: 'pawn', color: 'white', row: 6, col: 5 },
  { type: 'pawn', color: 'white', row: 6, col: 6 },
  { type: 'pawn', color: 'white', row: 6, col: 7 },
];

// Crear un tablero vacío de 8x8
const initialState = Array(8)
  .fill(null)
  .map(() => Array(8).fill(null));

// Colocar las piezas iniciales en el tablero
initialPieces.forEach(piece => {
  initialState[piece.row][piece.col] = {
    type: piece.type,
    color: piece.color,
  };
});

// Slice del tablero
const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    // Agregar acciones para mover piezas u otras funcionalidades
    movePiece: (state, action) => {
      const { from, to } = action.payload;
      const piece = state[from.row][from.col];
      state[from.row][from.col] = null;
      state[to.row][to.col] = piece;
    },
  },
});

export const { movePiece } = boardSlice.actions;
export const selectBoardState = (state: any) => state.board;
export default boardSlice.reducer;
