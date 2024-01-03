import * as React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

const Register = () => {
  return (
    <View style={styles.register}>
      <View style={styles.descriptionframe}>
        <Text style={[styles.registertext, styles.registertextTypo]}>
          회원가입
        </Text>
        <View style={[styles.undo, styles.undoLayout]}>
          <View style={[styles.undobutton, styles.undobuttonPosition]} />
          <Image
            style={styles.undoicon}
            resizeMode="cover"
            src="UndoIcon.png"
          />
        </View>
      </View>
      <View style={styles.basicinfroframeParent}>
        <View style={styles.basicinfroframe}>
          <View style={styles.idbox}>
            <Text style={[styles.idtext, styles.idtextTypo]}>
              <Text style={styles.text}>{`* `}</Text>
              <Text style={styles.text1}>아이디</Text>
            </Text>
            <View style={[styles.idinput, styles.vectorLayout]}>
              <View style={[styles.vector6, styles.vectorBorder]} />
              <Text style={[styles.idtext1, styles.proofTypo1]}>
                사용하실 아이디를 입력해주세요
              </Text>
            </View>
            <View style={[styles.usebox, styles.text8Layout]}>
              <View style={[styles.usevector, styles.text8Layout]} />
              <Text style={[styles.possible, styles.proofTypo]}>사용 가능</Text>
            </View>
          </View>
          <View style={[styles.passwordbox, styles.lifeboxPosition]}>
            <View style={[styles.vector7, styles.vector7Position]} />
            <Text style={[styles.passwordtext, styles.proofTypo1]}>
              **********
            </Text>
            <Image
              style={styles.invisibleicon}
              resizeMode="cover"
              src="InvisibleIcon.png"
            />
            <Text style={[styles.passwordtext1, styles.idtextTypo]}>
              <Text style={styles.text}>{`* `}</Text>
              <Text style={styles.text1}>비밀번호</Text>
            </Text>
          </View>
          <View style={[styles.passwordcheckbox, styles.lifeboxPosition]}>
            <View style={[styles.vector7, styles.vector7Position]} />
            <Text style={[styles.passwordtext, styles.proofTypo1]}>
              **********
            </Text>
            <Image
              style={styles.invisibleicon}
              resizeMode="cover"
              src="InvisibleIcon.png"
            />
            <Text style={[styles.passwordtext1, styles.idtextTypo]}>
              <Text style={styles.text}>{`* `}</Text>
              <Text style={styles.text1}>비밀번호 확인</Text>
            </Text>
          </View>
          <View style={[styles.numbercheckbox, styles.lifeboxPosition]}>
            <View style={[styles.proofbutton, styles.vector7Position]}>
              <View style={[styles.button1, styles.vectorBorder]} />
              <Text style={[styles.proof, styles.proofTypo]}>인증하기</Text>
            </View>
            <Text style={[styles.passwordtext1, styles.idtextTypo]}>
              <Text style={styles.text}>*</Text>
              <Text style={styles.text1}>{` 전화번호 `}</Text>
            </Text>
            <View style={[styles.numberbox, styles.vector7Position]}>
              <View style={[styles.vector12, styles.vectorBorder]} />
              <View style={[styles.text8, styles.text8Layout]}>
                <Text style={[styles.phonenumbertext, styles.proofTypo1]}>
                  010-2278-4451
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.hardinfoframe}>
          <View style={styles.hardinfo}>
            <Text style={[styles.hardinfotext, styles.completePosition]}>
              맞춤정보
            </Text>
            <Image
              style={[styles.leftlineIcon, styles.iconLayout]}
              resizeMode="cover"
              src="LeftLine.png"
            />
            <Image
              style={[styles.rightlineIcon, styles.iconLayout]}
              resizeMode="cover"
              src="RightLine.png"
            />
          </View>
          <View style={[styles.lifebox, styles.lifeboxPosition]}>
            <View style={[styles.vector7, styles.vector7Position]} />
            <Text style={[styles.passwordtext1, styles.idtextTypo]}>
              <Text style={styles.text}>{`* `}</Text>
              <Text style={styles.text1}>거주지</Text>
            </Text>
            <Image
              style={styles.arrowbuttonIcon}
              resizeMode="cover"
              src="ArrowButton.png"
            />
            <Text style={[styles.lifeselecttext, styles.proofTypo1]}>
              자신의 거주지를 선택해주세요
            </Text>
          </View>
          <View style={[styles.levelcheckbox, styles.lifeboxPosition]}>
            <View style={[styles.vector7, styles.vector7Position]} />
            <Text style={[styles.passwordtext1, styles.idtextTypo]}>
              <Text style={styles.text}>{`* `}</Text>
              <Text style={styles.text1}>볼링 실력</Text>
            </Text>
            <Image
              style={styles.arrowbuttonIcon}
              resizeMode="cover"
              src="ArrowButton.png"
            />
            <Text style={[styles.lifeselecttext, styles.proofTypo1]}>
              자신의 볼링 실력을 선택해주세요
            </Text>
          </View>
          <View style={[styles.throwbox, styles.lifeboxPosition]}>
            <View style={[styles.vector7, styles.vector7Position]} />
            <Text style={[styles.passwordtext1, styles.idtextTypo]}>
              <Text style={styles.text}>{`* `}</Text>
              <Text style={styles.text1}>선호 투구법</Text>
            </Text>
            <Image
              style={styles.arrowbuttonIcon}
              resizeMode="cover"
              src="ArrowButton.png"
            />
            <Text style={[styles.lifeselecttext, styles.proofTypo1]}>
              선호하는 투구법을 선택해주세요
            </Text>
          </View>
          <View style={[styles.finishbutton, styles.finishbuttonLayout]}>
            <View style={[styles.finishbutton1, styles.finishbuttonLayout]} />
            <Text style={[styles.complete, styles.completePosition]}>완료</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registertextTypo: {
    textAlign: 'left',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    position: 'absolute',
  },
  undoLayout: {
    height: 40,
    width: 40,
    position: 'absolute',
  },
  undobuttonPosition: {
    left: 0,
    top: 0,
  },
  idtextTypo: {
    fontSize: 15,
    left: '0%',
    top: 0,
    textAlign: 'left',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    position: 'absolute',
  },
  vectorLayout: {
    height: 36,
    position: 'absolute',
  },
  vectorBorder: {
    borderColor: '#9f9f9f',
    borderRadius: 4,
    left: '0%',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#fff',
  },
  proofTypo1: {
    fontSize: 12,
    color: '#9f9f9f',
  },
  text8Layout: {
    height: 15,
    position: 'absolute',
  },
  proofTypo: {
    textAlign: 'center',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    position: 'absolute',
  },
  lifeboxPosition: {
    right: '15.27%',
    width: '69.47%',
    height: 61,
    left: '15.27%',
    position: 'absolute',
  },
  vector7Position: {
    top: 25,
    height: 36,
    position: 'absolute',
  },
  completePosition: {
    marginLeft: -22.5,
    textAlign: 'left',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    left: '50%',
    position: 'absolute',
  },
  iconLayout: {
    height: 0,
    width: '36.25%',
    maxWidth: '100%',
    top: 9,
    position: 'absolute',
    overflow: 'hidden',
  },
  finishbuttonLayout: {
    height: 65,
    width: 335,
    position: 'absolute',
  },
  registertext: {
    marginLeft: -39.5,
    top: 21,
    fontSize: 21,
    color: '#000',
    left: '50%',
  },
  undobutton: {
    borderRadius: 20,
    height: 40,
    width: 40,
    position: 'absolute',
  },
  undoicon: {
    left: 14,
    width: 11,
    height: 21,
    top: 9,
    position: 'absolute',
  },
  undo: {
    top: 14,
    left: 12,
  },
  descriptionframe: {
    borderColor: '#e0e0e0',
    height: 68,
    width: 393,
    borderWidth: 1,
    borderStyle: 'solid',
    overflow: 'hidden',
  },
  text: {
    color: '#d65454',
  },
  text1: {
    color: '#323232',
  },
  idtext: {
    width: '80.43%',
  },
  vector6: {
    marginTop: 18,
    right: '0%',
    height: 36,
    position: 'absolute',
    top: '50%',
    width: '100%',
  },
  idtext1: {
    color: '#9f9f9f',
    left: '6.59%',
    width: '93.41%',
    fontSize: 12,
    textAlign: 'left',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    position: 'absolute',
    marginTop: -7,
    top: '50%',
  },
  idinput: {
    marginTop: -5.5,
    width: '98.91%',
    right: '1.09%',
    top: '50%',
    left: '0%',
  },
  usevector: {
    width: '86.81%',
    right: '6.59%',
    borderRadius: 3,
    backgroundColor: '#63d654',
    left: '6.59%',
    top: 0,
  },
  possible: {
    top: '6.67%',
    fontSize: 10,
    color: '#fff',
    left: '0%',
    width: '100%',
  },
  usebox: {
    width: '32.97%',
    top: 2,
    left: '67.03%',
    right: '0%',
  },
  idbox: {
    width: '70.23%',
    top: 30,
    right: '14.5%',
    height: 61,
    left: '15.27%',
    position: 'absolute',
  },
  vector7: {
    borderColor: '#9f9f9f',
    borderRadius: 4,
    left: '0%',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#fff',
    right: '0%',
    width: '100%',
  },
  passwordtext: {
    width: '85.71%',
    top: 38,
    left: '14.29%',
    color: '#9f9f9f',
    textAlign: 'left',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    position: 'absolute',
  },
  invisibleicon: {
    width: '6.59%',
    top: 37,
    right: '90.11%',
    left: '3.3%',
    height: 18,
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  passwordtext1: {
    width: '100%',
  },
  passwordbox: {
    top: 102,
  },
  passwordcheckbox: {
    top: 174,
  },
  button1: {
    right: '0%',
    height: 36,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  proof: {
    marginTop: -8,
    left: '23.86%',
    color: '#9f9f9f',
    fontSize: 12,
    top: '50%',
  },
  proofbutton: {
    width: '32.23%',
    left: '67.77%',
    right: '0%',
  },
  vector12: {
    width: '94.59%',
    right: '5.41%',
    height: 36,
    position: 'absolute',
    top: 0,
  },
  phonenumbertext: {
    marginTop: -7.5,
    color: '#9f9f9f',
    top: '50%',
    left: '0%',
    textAlign: 'left',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    position: 'absolute',
    width: '100%',
  },
  text8: {
    width: '79.12%',
    left: '20.88%',
    marginTop: -7,
    top: '50%',
    right: '0%',
  },
  numberbox: {
    width: '67.77%',
    right: '32.23%',
    left: '0%',
  },
  numbercheckbox: {
    top: 246,
  },
  basicinfroframe: {
    height: 336,
    width: 393,
    overflow: 'hidden',
  },
  hardinfotext: {
    fontSize: 13,
    color: '#9f9f9f',
    top: 0,
  },
  leftlineIcon: {
    right: '63.75%',
    left: '0%',
  },
  rightlineIcon: {
    left: '63.75%',
    right: '0%',
  },
  hardinfo: {
    marginLeft: -166.5,
    width: 331,
    height: 16,
    top: 0,
    left: '50%',
    position: 'absolute',
  },
  arrowbuttonIcon: {
    top: 34,
    left: 244,
    width: 19,
    height: 19,
    position: 'absolute',
    overflow: 'hidden',
  },
  lifeselecttext: {
    top: 36,
    color: '#9f9f9f',
    left: '6.59%',
    width: '93.41%',
    fontSize: 12,
    textAlign: 'left',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    position: 'absolute',
  },
  lifebox: {
    top: 41,
  },
  levelcheckbox: {
    top: 113,
  },
  throwbox: {
    top: 185,
  },
  finishbutton1: {
    borderRadius: 33,
    backgroundColor: '#626980',
    left: 0,
    top: 0,
  },
  complete: {
    marginTop: -14.5,
    fontSize: 25,
    color: '#fff',
    top: '50%',
  },
  finishbutton: {
    top: 313,
    left: 26,
  },
  hardinfoframe: {
    height: 448,
    width: 393,
    overflow: 'hidden',
  },
  basicinfroframeParent: {
    height: 784,
    alignItems: 'center',
    width: 393,
  },
  register: {
    flex: 1,
    height: 852,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: '#fff',
  },
});

export default Register;
