import React, { useState, useEffect } from 'react'
import { parseISO, format } from 'date-fns';
import { useRoute } from '@react-navigation/native';

import Button from '../../components/Button'
import { Container, DatePost, Title, Text } from './styles'
import { Icon, InfoPost, InfoText, View } from '../Home/styles'
import theme from '../../global/styles/theme'

import { Journal } from '../../models/Journal'
import { api } from '../../services/api'

interface Params {
  postId: Journal
}

export function Post() {
  const route = useRoute()
  const [data, setData] = useState<Journal>({} as Journal)
  const { postId } = route.params as Params

  async function findPosts() {
    const response = await api.get(`api/posts/${postId}`)
    setData(response.data);
  }

  useEffect(() => {
    findPosts()
  }, []);

  return (
    <>
      <Container>
        <DatePost>
          {/* {format(parseISO(String(data.createdAt)), 'dd/MM/yyyy')} */}
        </DatePost>
        <Title>{data.title}</Title>
        <InfoPost>
          <InfoText>
            <Icon name="clock" size={12} color="#666360" />
            {/* {format(parseISO(String(data.createdAt)), 'HH:mm')} */}
          </InfoText>
          <InfoText>
            <Icon name="bookmark" size={12} color="#666360" />{data.category}
          </InfoText>
        </InfoPost>
        <Text>{data.body}</Text>
      </Container>
      <View style={{ backgroundColor: theme.colors.primaryDark }}>
        <Button title="Edit" icon="edit" onPress={() => { }} />
      </View>
    </>
  )
}
