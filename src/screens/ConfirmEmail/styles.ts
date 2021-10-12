import styled from "styled-components/native"
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.primaryDark};
  padding: 15px;
  justify-content: center;
  align-items: center;
  flex: 1;
`
export const Title = styled.Text`
  margin-bottom: 10px;
  color: ${({theme}) => theme.colors.secundary};
  font-family: ${({ theme }) => theme.fonts.medium};
`
export const Input = styled.TextInput`
  width: 60%;
  height: 60px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  margin-bottom: 8px;
  text-align: center;

  flex-direction: row;
  align-items: center;
`
export const Button = styled(TouchableOpacity)`
  width: 60%;
  color: ${({ theme }) => theme.colors.shape};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  margin: 15px;
  border-radius: 5px;
`
