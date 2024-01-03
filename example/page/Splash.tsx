import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Splash = () => {
  return (
    <View style={styles.splash}>
      <Text style={styles.bowler}>BOWLER</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bowler: {
    position: 'absolute',
    marginTop: -25,
    marginLeft: -95.5,
    top: '50%',
    left: '50%',
    fontSize: 40,
    fontWeight: '700',
    fontFamily: 'Montserrat-Bold',
    color: '#323232',
    textAlign: 'left',
  },
  splash: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 852,
    overflow: 'hidden',
  },
});

export default Splash;
