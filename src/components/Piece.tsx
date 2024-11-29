import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

// Define las propiedades que aceptará el componente Piece
interface PieceProps {
  source: any;
  isBlackOnBlack: boolean;
}

const StyledPiece = styled(Image)<{ isBlackOnBlack: boolean }>`
  resize-mode: contain;
  ${(props) =>
    props.isBlackOnBlack &&
    `
      shadow-color: #ffffff;
      shadow-offset: 0px 0px;
      shadow-opacity: 1;
      shadow-radius: 4px;
      elevation: 5; /* Para Android */
    `}
`;

const Piece: React.FC<PieceProps> = ({ source, isBlackOnBlack }) => {
  return (
    <StyledPiece
      source={source}
      style={{ width: 40, height: 40 }}
      isBlackOnBlack={isBlackOnBlack}
    />
  );
};

export default Piece;
