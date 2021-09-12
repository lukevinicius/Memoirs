import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';
import theme from '../../global/styles/theme';

interface Props extends TouchableOpacityProps {
  title: string;
  icon: string;
}

/* interface ButtonProps extends RectButtonProperties {
  children: string;
} */

export function Button({ title, icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>
        {title}
      </Title>
      <Icon name={icon} size={20} color={theme.colors.text} />
    </Container>
  )
}

export default Button;
