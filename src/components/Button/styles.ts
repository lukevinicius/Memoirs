import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  align-self: center;
  border-radius: 30px;
  padding: 8px;
  width: 35%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  width: 100%;
  flex: 0.5;
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
`;
