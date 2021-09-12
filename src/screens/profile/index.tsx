import React from 'react';
import {ScrollView, KeyboardAvoidingView, Platform} from 'react-native';

import {
  Container,
  Button,
  Text
} from './styles';
import { useAuth } from '../../hooks/auth';
import { Image } from '../Post/styles';

const Profile: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
          <Container>
            <Text>{user.name}</Text>
            <Button onPress={signOut}><Text>Sair</Text></Button>
          </Container>
      </KeyboardAvoidingView>
    </>
  );
};

export default Profile;
