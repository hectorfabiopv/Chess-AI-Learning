import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import ChessBoard from './src/UI/ChessBoard'; // Asegúrate de que la ruta sea correcta


// Obtener dimensiones de la pantalla
const { width } = Dimensions.get('window'); // Ancho de la pantalla
const BOARD_SIZE = width * 0.8; // Tablero será 80% del ancho de la pantalla
const SQUARE_SIZE = BOARD_SIZE / 8; // Cada cuadrado será 1/8 del tablero

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

// Función para obtener la imagen de una pieza
const pieceImage = (color: string, type: string) => {
  switch (type) {
    case 'rook':
      return color === 'white'
        ? require('./assets/white-rook.png')
        : require('./assets/black-rook.png');
    case 'pawn':
      return color === 'white'
        ? require('./assets/white-pawn.png')
        : require('./assets/black-pawn.png');
    case 'knight':
      return color === 'white'
        ? require('./assets/white-knight.png')
        : require('./assets/black-knight.png');
    case 'bishop':
      return color === 'white'
        ? require('./assets/white-bishop.png')
        : require('./assets/black-bishop.png');
    case 'queen':
      return color === 'white'
        ? require('./assets/white-queen.png')
        : require('./assets/black-queen.png');
    case 'king':
      return color === 'white'
        ? require('./assets/white-king.png')
        : require('./assets/black-king.png');
    default:
      return require('./assets/default.png'); // Imagen por defecto
  }
};

const App = () => {
  // Crear la estructura del tablero usando useMemo para optimizar
  const board = React.useMemo(
    () =>
      Array.from({ length: 8 }, (_, row) =>
        Array.from({ length: 8 }, (_, col) => ({
          row,
          col,
          color: (row + col) % 2 === 0 ? '#ffffff' : '#000000', // Blanco y negro
        }))
      ),
    []
  );

  return (
    <Container>
      <ChessBoard boardSize={BOARD_SIZE} initialPieces={initialPieces} />
    </Container>
  );
};

// Estilos usando styled-components
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

export default App;
