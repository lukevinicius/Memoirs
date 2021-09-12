import React, { useEffect, useRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles'

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
  <Container>
    <Icon name={icon} size={20} style={{ marginRight: 5 }} color="#666360" />

    <TextInput
    placeholderTextColor="#666360"
    {...rest}
    />
  </Container>
)
}

export default Input;
