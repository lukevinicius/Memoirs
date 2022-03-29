import React, { useState, useCallback, useEffect } from 'react'
import { ScrollView, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { parseISO, format } from 'date-fns';

import {
  Container,
  View,
  ViewEmpty,
  ViewPost,
  Title,
  ViewJournal,
  TitlePost,
  Description,
  Content,
  Text,
  InfoPost,
  InfoText,
  Icon,
  Button
} from './styles'

import { useAuth } from '../../hooks/auth';

import { Journal } from '../../models/Journal'
import { api } from '../../services/api';

export function Home() {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const { user, signOut } = useAuth();
  const [data, setData] = useState<Journal[]>();
  const [email, setEmail] = useState(true)

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
      try {
        await api.get(`posts/${user.id}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          if (err.response.status === 403) {
            signOut()
          }
        })
        setRefreshing(false)
      } catch (error) {
        console.error(error);
      }
    }, [refreshing]);

  async function findPosts() {
    await api.get(`posts/${user.id}`)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      if (err.response.status === 403) {
        signOut()
      }
    })
  }

  useEffect(() => {
    findPosts()
  }, []);

  return (
    <>
    <ScrollView
      contentContainerStyle={{flex: 1}}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <Container>
        {/* <View>
          <Title>Your Journal</Title>
          <FlatList
            data={DATA}
            renderItem={renderCategory}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
          />
          <Button title="teste" onPress={() => { }}>
            <Text>Add New +</Text>
          </Button>
        </View> */}
        <View>
          <ViewPost>
            <Title>Suas Memorias</Title>
            <Button onPress={
              () => user.emailConfirm ? navigation.navigate('AppStack', { screen: 'AddPost' })
              : navigation.navigate('AppStack', { screen: 'ConfirmEmail' })
              }>
              <Text>Novo  +</Text>
            </Button>
          </ViewPost>
            {data ?
            data.map(item => (
              <Content key={item._id} onPress={() =>
                navigation.navigate('AppStack', {
                  screen: 'PostDetails',
                  params: {postId: item.postId},
                })
              }>
                {/* <Image source={imageTravel} /> */}
                <ViewJournal>
                  <TitlePost>
                  {item.title} - {format(parseISO(String(item.createdAt)), 'dd/MM/yyyy')}
                  </TitlePost>
                  <Description numberOfLines={1}>
                    {item.body}
                  </Description>
                  <InfoPost>
                    <InfoText style={{marginRight: 10}}>
                      <Icon name="clock" size={12} color="#666360" />
                      {format(parseISO(String(item.createdAt)), 'HH:mm')}
                    </InfoText>
                    {/* <InfoText>
                      <Icon name="bookmark" size={12} color="#666360" />{item.category}
                    </InfoText> */}
                  </InfoPost>
                </ViewJournal>
              </Content>
            ))
            : <ViewEmpty>
                <TitlePost>Adicione uma Memoria</TitlePost>
                <TitlePost>Ela vai aparecer aqui</TitlePost>
              </ViewEmpty>
          }
        </View>
      </Container>
      </ScrollView>
    </>
  )
}
