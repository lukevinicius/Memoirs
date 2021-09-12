import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`
export const Title = styled.Text`
  font-size: 28px;
  margin: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
`

export const SubTitle = styled.Text`
  font-size: 23px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};
`

export const ForgotPassword = styled.View`
  margin-top: 20px;
`;

export const ButtonAccount = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  align-self: center;
  margin: 3px;;
`;

export const TextAccount = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
`

export const Button = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  align-self: center;
  border-radius: 5px;
  padding: 8px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 20px;
`
