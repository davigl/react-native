import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: #09091E;
`;

export const Text = styled.Text`
  font-family: Poppins;
  font-size: 13px;
  color: #fff;
`;

export const Title = styled.Text`
  font-family: PoppinsBold;
  font-size: 40px;
  color: #fff;
`;

export const Button = styled.TouchableOpacity`
  height: 63px;
  width: 270px;
  padding: 22px 64px 22px 64px;
  margin-top: 22px;
  background-color: #4545e5;
  align-items: center;
`;
