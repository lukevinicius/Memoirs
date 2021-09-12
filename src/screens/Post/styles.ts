import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  flex: 1;
  padding: 70px 40px 0 40px;
`
export const Image = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 150px;
`
export const DateJournal = styled.Text`
  color: ${({ theme }) => theme.colors.secundary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.secundary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 24px;
`
export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 12px;
`
export const Button = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  align-self: center;
  border-radius: 30px;
  width: 30%;
  align-items: center;
`
