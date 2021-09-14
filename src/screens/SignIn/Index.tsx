import React, { useState  } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Alert, ScrollView, View, KeyboardAvoidingView, Platform } from 'react-native';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';

import {
  Button,
  Text,
  Container,
  ForgotPassword,
  ButtonAccount,
  TextAccount,
  Title,
} from './styles';
import Input from '../../components/Input/Index';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const navigation = useNavigation();

  async function handleSignIn() {
    try{
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .required('A senha é obrigatória')
      });

      await schema.validate({ email, password });

      signIn({ email, password });
    }catch(error){
      if(error instanceof Yup.ValidationError){
        Alert.alert('Opa', error.message);
      }else{
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, verifique as credenciais'
        )
      }
    }
  }

  function handleSignUp() {
    navigation.navigate('SignUp');
  }

  return (
    <>
    <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex: 1}}
      >
      <Container>
        <Title>
          Faça seu login para começar
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
            icon="lock"
            name="password"
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
        </View>
        <Button onPress={handleSignIn}>
          <Text>Entrar</Text>
        </Button>
        <ForgotPassword>
          <ButtonAccount>
            <TextAccount>Esqueci a senha</TextAccount>
          </ButtonAccount>
          <ButtonAccount onPress={handleSignUp}>
            <TextAccount>Criar conta gratuita</TextAccount>
          </ButtonAccount>
        </ForgotPassword>
      </Container>
      </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
