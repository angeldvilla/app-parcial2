import React from 'react';
import { View, StyleSheet } from 'react-native';

const Triangle = ({ width, height, color, direction }) => {
  const triangleStyles = {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: width / 2,
    borderRightWidth: width / 2,
    borderBottomWidth: height,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: color,
    transform: [{ rotate: direction === 'left' ? '92deg' : '-92deg' }],
  };

  return <View style={triangleStyles} />;
};

const Triangles = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Triangle width={100} height={100} color="red" direction="left" />
        <Triangle width={100} height={100} color="blue" />
      </View>
    </View>
  );
};

/* ESTILOS */
const styles = StyleSheet.create({
  container: {
    marginTop: 33,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});

export default Triangles;