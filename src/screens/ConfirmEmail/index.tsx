import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'

import { useAuth } from '../../hooks/auth'
import { Alert } from 'react-native'
import { Container, Title, Input, Button } from './styles'
import { api } from '../../services/api'

export function ConfirmEmail() {
  const { user } = useAuth()
  const navigation = useNavigation()
  const [code, setCode] = useState(null)
  const [text, setText] = useState('')

  async function sendEmail() {
    const body = {
      name: user.name,
      email: user.email
    }
    await api.post('sendemail', body).then((res) => setCode(res.data.code))
  }

  function verifyCode() {
    if (code == text) {
      Alert.alert('Tudo OK')
    }
  }

  return (
  <Container>
    <Title>
      É necessario fazer a verificação de email, para isso vamos enviar um
      codigo para o seu email.
    </Title>
    <Input name="Codigo" keyboardType="numeric" maxLength={8} onChangeText={setText} />
    <Title>{code}</Title>
    <Button title="Enviar" onPress={sendEmail} />
    <Button title="Verificar" onPress={verifyCode} />
  </Container>
  )
}
