import React, { useState } from 'react'
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import theme from '../../global/styles/theme'
import { Text, View } from '../Home/styles'

import { Container, TextInput, TitleInput, Button, CreateButton } from './styles'

export function AddPost() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  return (
    <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
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
            onChangeText={setText}
            value={text}
          />
        </Container>
        <View style={{ backgroundColor: theme.colors.primaryDark }}>
          <CreateButton>
            <Text>Criar Post</Text>
          </CreateButton>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
