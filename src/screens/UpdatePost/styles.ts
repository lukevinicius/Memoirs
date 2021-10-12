import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  padding: 30px;
`
export const Button = styled(TouchableOpacity)`
  margin-left: 20px;
  background-color: ${({theme}) => theme.colors.primary};
  padding: 10px;
  border-radius: 25px;
`
export const TitleInput = styled.TextInput`
  margin-bottom: 15px;
  color: ${({theme}) => theme.colors.text};
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.medium};
`
export const TextInput = styled.TextInput`
  margin-bottom: 15px;
  text-align: justify;
  color: ${({theme}) => theme.colors.text};
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.medium};
`
export const CreateButton = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  margin: 20px;
  align-self: center;
  border-radius: 30px;
  width: 35%;
  align-items: center;
`
