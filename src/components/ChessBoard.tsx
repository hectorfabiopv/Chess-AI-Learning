import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import Square from './Square';
import Piece from './Piece';
import { selectBoardState } from '../redux/slices/boardSlice';

// Obtener dimensiones de la pantalla
const { width } = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;
const BOARD_SIZE = screenWidth * 0.8; // Tablero será 80% del ancho de la pantalla
const SQUARE_SIZE = BOARD_SIZE / 8; // Cada cuadrado será 1/8 del tablero

const ChessBoard = () => {
  const boardState = useSelector(selectBoardState);

  const pieceImage = (color: string, type: string) => {
    switch (type) {
      case 'rook':
        return color === 'white' ? require('../assets/white-rook.png') : require('../assets/black-rook.png');
      case 'pawn':
        return color === 'white' ? require('../assets/white-pawn.png') : require('../assets/black-pawn.png');
      case 'knight':
        return color === 'white' ? require('../assets/white-knight.png') : require('../assets/black-knight.png');
      case 'bishop':
        return color === 'white' ? require('../assets/white-bishop.png') : require('../assets/black-bishop.png');
      case 'queen':
        return color === 'white' ? require('../assets/white-queen.png') : require('../assets/black-queen.png');
      case 'king':
        return color === 'white' ? require('../assets/white-king.png') : require('../assets/black-king.png');
      default:
        return require('../assets/default.png');
    }
  };

  console.log('Este es el estado inicial');
  console.log(boardState);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: BOARD_SIZE, height: BOARD_SIZE }}>
        {boardState.map((row : any[], rowIndex : number) => (
          row.map((cell : any, colIndex : number) => {

            const isBlack = (rowIndex + colIndex) % 2 === 1; // Determinar el color de la casilla

            return (
                <Square key={`${rowIndex}-${colIndex}`} color={isBlack ? 'black' : 'white'} size={SQUARE_SIZE}>
                  {cell && (
                    <Piece
                      source={pieceImage(cell.color, cell.type)}
                      isBlackOnBlack={cell.color === 'black' && (rowIndex + colIndex) % 2 !== 0}
                    />
                  )}
                </Square>
            );
          })
        ))}
      </View>
    </View>
  );
};

export default ChessBoard;
