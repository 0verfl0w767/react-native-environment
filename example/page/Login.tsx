import * as React from 'react';
import {Text, StyleSheet, View, Image, Pressable} from 'react-native';

const Login = () => {
  return (
    <View style={styles.login}>
      <View style={styles.descriptionframe}>
        <Text style={[styles.maintext, styles.bowlerClr]}>{`볼링의 세계,
볼러에 오신걸 진심으로 환영합니다!

`}</Text>
        <Text style={[styles.subtext, styles.idiconLayout]}>
          회원이 되어 모든 기능을 사용해보세요!
        </Text>
      </View>
      <View style={[styles.loginframe, styles.adframeSpaceBlock]}>
        <View style={styles.easylogin}>
          <View style={[styles.applelogin, styles.appleloginLayout]}>
            <Text style={[styles.appletext, styles.appletextTypo]}>애플</Text>
            <Image
              style={[styles.appleimageIcon, styles.iconPosition]}
              resizeMode="cover"
              src="AppleImage.png"
            />
          </View>
          <View style={[styles.kakaologin, styles.appleloginLayout]}>
            <Text style={[styles.kakaotext, styles.appletextTypo]}>카카오</Text>
            <Image
              style={[styles.appleimageIcon, styles.iconPosition]}
              resizeMode="cover"
              src="KakaoImage.png"
            />
          </View>
          <View style={[styles.googlelogin, styles.appleloginLayout]}>
            <Text style={[styles.googletext, styles.appletextTypo]}>구글</Text>
            <Image
              style={styles.googleimageIcon}
              resizeMode="cover"
              src="GoogleImage.png"
            />
          </View>
          <View style={[styles.naverlogin, styles.registerPosition]}>
            <Text style={[styles.kakaotext, styles.appletextTypo]}>네이버</Text>
            <Image
              style={[styles.naverimageIcon, styles.iconPosition]}
              resizeMode="cover"
              src="NaverImage.png"
            />
          </View>
          <Text style={[styles.easylogintext, styles.appletextTypo]}>
            간편로그인
          </Text>
          <Image
            style={[styles.easyloginChild, styles.easyloginLayout]}
            resizeMode="cover"
            src="Line 1.png"
          />
          <Image
            style={[styles.easyloginItem, styles.easyloginLayout]}
            resizeMode="cover"
            src="Line 2.png"
          />
        </View>
        <Pressable
          style={[styles.register, styles.registerLayout]}
          onPress={() => {}}>
          <View style={[styles.registerbutton, styles.registertextPosition]} />
          <Text style={[styles.registertext, styles.registertextTypo]}>
            회원가입
          </Text>
        </Pressable>
        <View style={[styles.emailfound, styles.emailfoundLayout]}>
          <View
            style={[styles.emailfoundbutton, styles.emailfoundtextPosition]}
          />
          <Text style={[styles.emailfoundtext, styles.emailfoundtextPosition]}>
            이메일 찾기
          </Text>
        </View>
        <View style={[styles.loginbutton, styles.idPosition]}>
          <View style={styles.loginbutton1} />
          <Text style={styles.logintext}>로그인</Text>
        </View>
        <View style={[styles.passwordfound, styles.passwordfoundLayout]}>
          <View
            style={[
              styles.passwordfoundbutton,
              styles.passwordfoundtextPosition,
            ]}
          />
          <Text
            style={[
              styles.passwordfoundtext,
              styles.passwordfoundtextPosition,
            ]}>
            비밀번호 찾기
          </Text>
        </View>
        <View style={[styles.loginkeep, styles.loginkeepLayout]}>
          <View style={[styles.loginkeepbutton, styles.stateonIconPosition]} />
          <Image
            style={[styles.stateonIcon, styles.stateonIconPosition]}
            resizeMode="cover"
            src="StateOn.png"
          />
          <Text style={[styles.loginkeeptext, styles.appletextTypo]}>
            로그인 유지
          </Text>
        </View>
        <View style={[styles.password, styles.idPosition]}>
          <Image
            style={[styles.visibleicon, styles.visibleiconPosition]}
            resizeMode="cover"
            src="VisibleIcon.png"
          />
          <View style={[styles.passwordvector, styles.idvectorBorder]} />
          <Text style={[styles.passwordtext, styles.idtextTypo]}>비밀번호</Text>
          <Image
            style={[styles.passwordicon, styles.visibleiconPosition]}
            resizeMode="cover"
            src="PasswordIcon.png"
          />
        </View>
        <View style={[styles.id, styles.idPosition]}>
          <View style={[styles.idvector, styles.idvectorBorder]} />
          <Text style={[styles.idtext, styles.idtextTypo]}>아이디</Text>
          <Image
            style={[styles.idicon, styles.idiconLayout]}
            resizeMode="cover"
            src="IdIcon.png"
          />
        </View>
        <Text style={[styles.bowler, styles.bowlerClr]}>BOWLER</Text>
      </View>
      <View style={[styles.adframe, styles.adframeSpaceBlock]}>
        <View style={styles.ad1} />
      </View>
      <View style={[styles.workframe, styles.adframeSpaceBlock]}>
        <View style={styles.workframe1}>
          <Text style={[styles.worknumber, styles.emailTypo]}>
            사업자 등록 번호 02-1230-123141
          </Text>
          <Text style={[styles.companyname, styles.emailTypo]}>
            (주) 볼러 대표이사 이지환
          </Text>
          <Text style={[styles.email, styles.emailTypo]}>
            문의 uashdu@aidjiaj.com
          </Text>
          <Text style={[styles.phonenumber, styles.emailTypo]}>
            대표번호 02-1293-1234
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bowlerClr: {
    color: '#323232',
    textAlign: 'left',
    position: 'absolute',
  },
  idiconLayout: {
    height: 20,
    position: 'absolute',
  },
  adframeSpaceBlock: {
    marginTop: 1,
    overflow: 'hidden',
  },
  appleloginLayout: {
    height: 66,
    top: 39,
    width: 44,
  },
  appletextTypo: {
    fontSize: 13,
    color: '#9f9f9f',
    textAlign: 'left',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    position: 'absolute',
  },
  iconPosition: {
    marginLeft: -22,
    height: 44,
    top: 0,
    width: 44,
    left: '50%',
    position: 'absolute',
  },
  registerPosition: {
    marginLeft: -135,
    left: '50%',
    position: 'absolute',
  },
  easyloginLayout: {
    height: 0,
    maxWidth: '100%',
    width: '30.61%',
    top: 9,
    position: 'absolute',
    overflow: 'hidden',
  },
  registerLayout: {
    height: 16,
    width: 48,
  },
  registertextPosition: {
    marginLeft: -24,
    top: 0,
    left: '50%',
    position: 'absolute',
  },
  registertextTypo: {
    textDecorationLine: 'underline',
    fontSize: 13,
    textAlign: 'left',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
  },
  emailfoundLayout: {
    height: 17,
    width: 64,
  },
  emailfoundtextPosition: {
    marginLeft: -32,
    left: '50%',
    position: 'absolute',
  },
  idPosition: {
    left: '15.35%',
    right: '15.52%',
    width: '69.13%',
    height: 44,
    position: 'absolute',
    overflow: 'hidden',
  },
  passwordfoundLayout: {
    width: 76,
    height: 16,
  },
  passwordfoundtextPosition: {
    marginLeft: -38,
    top: 0,
    left: '50%',
    position: 'absolute',
  },
  loginkeepLayout: {
    width: 83,
    height: 16,
  },
  stateonIconPosition: {
    marginLeft: -41.5,
    left: '50%',
    position: 'absolute',
  },
  visibleiconPosition: {
    maxHeight: '100%',
    top: 14,
    position: 'absolute',
  },
  idvectorBorder: {
    borderWidth: 1,
    borderColor: '#9f9f9f',
    borderStyle: 'solid',
    borderRadius: 22,
    left: '0%',
    right: '0%',
    position: 'absolute',
    width: '100%',
  },
  idtextTypo: {
    fontSize: 15,
    left: 46,
    color: '#9f9f9f',
    textAlign: 'left',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    position: 'absolute',
  },
  emailTypo: {
    color: '#d9d9d9',
    fontSize: 10,
    left: '50%',
    textAlign: 'left',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    position: 'absolute',
  },
  maintext: {
    top: 34,
    width: 323,
    height: 55,
    textAlign: 'left',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    left: 30,
    fontSize: 21,
    color: '#323232',
  },
  subtext: {
    top: 89,
    fontSize: 16,
    color: '#999',
    width: 333,
    textAlign: 'left',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    left: 30,
    height: 20,
  },
  descriptionframe: {
    height: 143,
    width: 391,
    overflow: 'hidden',
  },
  appletext: {
    marginLeft: -12,
    color: '#9f9f9f',
    top: 50,
    fontSize: 13,
    left: '50%',
  },
  appleimageIcon: {
    borderRadius: 6,
    height: 44,
    top: 0,
  },
  applelogin: {
    marginLeft: 90,
    left: '50%',
    position: 'absolute',
  },
  kakaotext: {
    marginLeft: -18,
    color: '#9f9f9f',
    top: 50,
    fontSize: 13,
    left: '50%',
  },
  kakaologin: {
    marginLeft: 15,
    left: '50%',
    position: 'absolute',
  },
  googletext: {
    left: 10,
    color: '#9f9f9f',
    top: 50,
    fontSize: 13,
  },
  googleimageIcon: {
    left: 0,
    height: 44,
    top: 0,
    width: 44,
    position: 'absolute',
  },
  googlelogin: {
    left: 136,
    position: 'absolute',
  },
  naverimageIcon: {
    height: 44,
    top: 0,
  },
  naverlogin: {
    height: 66,
    top: 39,
    width: 44,
  },
  easylogintext: {
    marginLeft: -30,
    top: 0,
    color: '#9f9f9f',
    left: '50%',
  },
  easyloginChild: {
    right: '61.73%',
    left: '7.65%',
  },
  easyloginItem: {
    right: '7.91%',
    left: '61.48%',
  },
  easylogin: {
    marginLeft: -196,
    top: 318,
    height: 105,
    left: '50%',
    width: 392,
    position: 'absolute',
    overflow: 'hidden',
  },
  registerbutton: {
    height: 16,
    width: 48,
  },
  registertext: {
    marginLeft: -24,
    top: 0,
    left: '50%',
    position: 'absolute',
    color: '#9f9f9f',
  },
  register: {
    top: 271,
    marginLeft: -135,
    left: '50%',
    position: 'absolute',
  },
  emailfoundbutton: {
    height: 17,
    width: 64,
    top: 0,
  },
  emailfoundtext: {
    top: 1,
    textDecorationLine: 'underline',
    fontSize: 13,
    textAlign: 'left',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    color: '#9f9f9f',
  },
  emailfound: {
    marginLeft: 71,
    top: 270,
    left: '50%',
    position: 'absolute',
  },
  loginbutton1: {
    backgroundColor: '#626980',
    borderRadius: 22,
    left: '0%',
    right: '0%',
    height: 44,
    top: 0,
    position: 'absolute',
    width: '100%',
  },
  logintext: {
    marginLeft: -30.5,
    color: '#fff',
    top: 9,
    left: '50%',
    textAlign: 'left',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    fontSize: 21,
    position: 'absolute',
  },
  loginbutton: {
    top: 218,
  },
  passwordfoundbutton: {
    width: 76,
    height: 16,
  },
  passwordfoundtext: {
    color: '#308fff',
    textDecorationLine: 'underline',
    fontSize: 13,
    textAlign: 'left',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
  },
  passwordfound: {
    marginLeft: 59,
    top: 179,
    left: '50%',
    position: 'absolute',
  },
  loginkeepbutton: {
    width: 83,
    height: 16,
    top: 0,
  },
  stateonIcon: {
    top: 2,
    width: 13,
    height: 13,
  },
  loginkeeptext: {
    marginLeft: -22.5,
    top: 0,
    color: '#9f9f9f',
    left: '50%',
  },
  loginkeep: {
    marginLeft: -136,
    top: 179,
    left: '50%',
    position: 'absolute',
  },
  visibleicon: {
    right: 14,
    bottom: 12,
    width: 18,
    overflow: 'hidden',
  },
  passwordvector: {
    marginTop: -22,
    top: '50%',
    height: 44,
  },
  passwordtext: {
    top: 13,
  },
  passwordicon: {
    bottom: 14,
    left: 19,
    width: 17,
  },
  password: {
    top: 128,
  },
  idvector: {
    height: '100%',
    top: '0%',
    bottom: '0%',
  },
  idtext: {
    marginTop: -9,
    top: '50%',
  },
  idicon: {
    marginTop: -10,
    left: 17,
    width: 20,
    top: '50%',
  },
  id: {
    top: 69,
  },
  bowler: {
    marginLeft: -72,
    top: 10,
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'Montserrat-Bold',
    left: '50%',
    textAlign: 'left',
  },
  loginframe: {
    height: 423,
    width: 392,
  },
  ad1: {
    marginLeft: -129.5,
    top: 41,
    backgroundColor: '#d9d9d9',
    width: 260,
    height: 82,
    left: '50%',
    position: 'absolute',
  },
  adframe: {
    height: 164,
    width: 391,
  },
  worknumber: {
    marginLeft: -76,
    top: 0,
  },
  companyname: {
    marginLeft: -54,
    top: 12,
  },
  email: {
    marginLeft: -59,
    top: 24,
  },
  phonenumber: {
    marginLeft: -55,
    top: 36,
  },
  workframe1: {
    marginLeft: -75.5,
    width: 152,
    height: 48,
    top: 0,
    left: '50%',
    position: 'absolute',
  },
  workframe: {
    height: 61,
    width: 391,
  },
  login: {
    backgroundColor: '#fff',
    flex: 1,
    height: 852,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 1,
    paddingVertical: 18,
    overflow: 'hidden',
    width: '100%',
  },
});

export default Login;
