import React, { useState  } from 'react';
import { Alert, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';

import {
  Button,
  Text,
  Title,
  Container,
  ButtonAccount,
  TextAccount,
  ForgotPassword,
  ForgotPasswordText,
} from './styles';
import Input from '../../components/Input/Index';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();
  const { signUp } = useAuth();

  async function handleSignUp() {
    try{
      if (password === confirmPassword) {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          name: Yup.string()
          .required('Nome obrigatório'),
          password: Yup.string()
            .required('A senha é obrigatória')
        });

        await schema.validate({ email, name, password });

        await signUp({ email, name, username, password }).then(() => {
          Alert.alert('Cadastro feito com sucesso!')
          navigation.navigate('SignIn');
        });
      }
    }catch(error){
      if(error instanceof Yup.ValidationError){
        Alert.alert('Opa', error.message);
      }else{
        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer sua conta, verifique seus dados'
        )
      }
    }
  }

  function handleSignIn() {
    navigation.navigate('SignIn');
  }

  return (
    <>
      <Container>
        <Title>
          Novo no Memoirs? Cadastre-se agora mesmo!
        </Title>
        <View>
          <Input
            icon="mail"
            name="email"
            placeholder="E-mail"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
          />
          <Input
            icon="person"
            name="name"
            placeholder="Nome Completo"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setName}
            value={name}
          />
          <Input
            icon="person"
            name="username"
            placeholder="Nome de usuário"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setUsername}
            value={username}
          />
          <Input
            icon="lock"
            name="password"
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
          <Input
            icon="lock"
            name="confirmPassword"
            placeholder="Confirmar a Senha"
            secureTextEntry={true}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
        </View>
        <Button onPress={handleSignUp}>
          <Text>Criar conta</Text>
        </Button>
        <ForgotPassword>
          <ButtonAccount onPress={handleSignIn}>
            <TextAccount>Voltar</TextAccount>
          </ButtonAccount>
        </ForgotPassword>
      </Container>
    </>
  );
};

export default SignIn;
