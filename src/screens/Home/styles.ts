import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  flex: 1;
`
export const View = styled.View`
  padding: 0px 30px;
`
export const Title = styled.Text`
  padding: 50px 0 0 0;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
`
export const ViewCategory = styled.View`
  align-items: center;
  justify-content: center;
`
export const ImageCategory = styled.Image`
  border-radius: 10px;
  margin: 10px 10px 10px 0;
  width: 140px;
  height: 120px;
`
export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`
export const Button = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  align-self: center;
  border-radius: 30px;
  width: 35%;
  align-items: center;
`
export const Content = styled.View`
  flex-direction: row;
`
export const Image = styled.Image`
  border-radius: 10px;
  margin: 30px 20px 10px 0;
  width: 80px;
  height: 120px;
`
export const ViewJournal = styled.View`
  flex: 1;
  justify-content: center;
`
export const TitlePost = styled.Text`
  color: ${({ theme }) => theme.colors.secundary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
`
export const DateJournal = styled.Text`
  color: ${({ theme }) => theme.colors.secundary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 14px;
`
export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 12px;
`
