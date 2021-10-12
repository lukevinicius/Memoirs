import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth'

import theme from '../../global/styles/theme'
import { Text, View } from '../Home/styles'

import { Container, TextInput, TitleInput, Button, CreateButton } from './styles'
import { api } from '../../services/api';
import { Journal } from '../../models/Journal'

interface Params {
  postId: Journal
}


export function UpdatePost() {
  const navigation = useNavigation()
  const route = useRoute()
  const { user } = useAuth();
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const { postId } = route.params as Params

  async function findPost() {
    const response = await api.get(`api/posts/${postId}`)
    setTitle(response.data.title);
    setBody(response.data.body);
  }

  useEffect(() => {
    findPost()
  }, []);

  async function handleUpdatePost() {
    try {
      const schema = Yup.object().shape({
        title: Yup.string()
          .required('O titulo é obrigatorio'),
        body: Yup.string()
          .required('É necessario um texto')
          .min(120, 'O seu texto é muito curto')
      });

      await schema.validate({ title, body });

      await api.put('posts', {
        title,
        body,
        category: 'default'
      })
      .then(() => {
        navigation.navigate('Home')
      })
      .catch((res) => {
        /* Alert.alert('Opa', res); */
        console.log(res)
      });
    } catch (error) {
      if(error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message);
      } else {
        Alert.alert('Opa', error);
      }
    }
  }

  return (
    <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex: 1}}
      >
        <Container>
          <TitleInput
            name="Title"
            placeholderTextColor={theme.colors.primary}
            placeholder="Titulo"
            onChangeText={setTitle}
            value={title}
          />
          <TextInput
            multiline={true}
            name="Body"
            placeholderTextColor={theme.colors.primary}
            placeholder="Seu dia..."
            onChangeText={setBody}
            value={body}
          />
        </Container>
        <View style={{ backgroundColor: theme.colors.primaryDark }}>
          <CreateButton onPress={handleUpdatePost}>
            <Text>Editar Memoria</Text>
          </CreateButton>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
