import styled from "styled-components/native";
import FeatherIcon from 'react-native-vector-icons/Feather'
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
export const ViewPost = styled.View`
  padding: 50px 0 0 0;
  justify-content: space-between;
  flex-direction: row;
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
export const ButtonPost = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.primary};
`
export const Content = styled(TouchableOpacity)`
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
  margin: 30px 20px 10px 0;
  justify-content: center;
`
export const TitlePost = styled.Text`
  color: ${({ theme }) => theme.colors.secundary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 14px;
`
export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 13px;
`
export const InfoPost = styled.Text`
  flex-direction: row;
  margin-top: 8px;
`
export const InfoText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 12px;
  margin-right: 10px;
`
export const Icon = styled(FeatherIcon)`
  color: ${({ theme }) => theme.colors.primary};
`;
