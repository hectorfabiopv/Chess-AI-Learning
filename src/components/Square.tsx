import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

type SquareProps = {
  children: ReactNode;
  color: 'white' | 'black';
  size: number;
}
const Square: React.FC<SquareProps> = ({ children, color, size }) => {
  return (
    <View
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Square;
