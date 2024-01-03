import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Complete = () => {
  return (
    <View style={styles.complete}>
      <View style={[styles.startbutton, styles.startbuttonLayout]}>
        <View style={[styles.startbutton1, styles.startbuttonLayout]} />
        <Text style={[styles.starttext, styles.starttextTypo]}>시작하기</Text>
      </View>
      <Text style={[styles.bowler, styles.bowlerPosition]}>BOWLER</Text>
      <Text style={[styles.welcometext, styles.bowlerPosition]}>
        가입을 환영합니다!
      </Text>
      <View style={styles.ad1} />
    </View>
  );
};

const styles = StyleSheet.create({
  startbuttonLayout: {
    height: 65,
    width: 335,
    position: 'absolute',
  },
  starttextTypo: {
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
  },
  bowlerPosition: {
    color: '#323232',
    left: '50%',
    position: 'absolute',
  },
  startbutton1: {
    top: 0,
    left: 0,
    borderRadius: 33,
    backgroundColor: '#626980',
  },
  starttext: {
    marginTop: -14.5,
    marginLeft: -45.5,
    top: '50%',
    fontSize: 25,
    color: '#fff',
    textAlign: 'left',
    left: '50%',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    position: 'absolute',
  },
  startbutton: {
    top: 717,
    left: 29,
  },
  bowler: {
    marginLeft: -94.5,
    top: 139,
    fontSize: 40,
    fontWeight: '700',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'left',
  },
  welcometext: {
    marginLeft: -161.5,
    top: 188,
    fontSize: 21,
    textAlign: 'center',
    width: 323,
    height: 55,
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
  },
  ad1: {
    width: '69.47%',
    top: 283,
    right: '15.27%',
    left: '15.27%',
    borderRadius: 26,
    backgroundColor: '#d9d9d9',
    height: 384,
    position: 'absolute',
  },
  complete: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 852,
    overflow: 'hidden',
  },
});

export default Complete;
