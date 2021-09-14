import React, { useState, useCallback, useEffect } from 'react'
import { FlatList } from 'react-native';
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

interface JournalProps {
  id: string;
  date: string;
  body: string;
  category: string;
}

export function Home() {
  const navigation = useNavigation();
  const { user, signOut } = useAuth();
  const [data, setData] = useState<Journal[]>();

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
    return () => {
      setData([]); // This worked for me
    };
  }, []);

  return (
    <>
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
            <Title>Posts Recentes</Title>
            <Button onPress={() => navigation.navigate('AppStack', { screen: 'AddPost' })}>
              <Text>Novo  +</Text>
            </Button>
          </ViewPost>
            {data === null ?
            <FlatList
              data={data}
              keyExtractor={item => item._id}
              renderItem={({item}) => (
                <Content onPress={() =>
                  navigation.navigate('AppStack', {
                    screen: 'PostDetails',
                    params: {postId: item.postId},
                  })
                }>
                  {/* <Image source={imageTravel} /> */}
                  <ViewJournal>
                    <TitlePost>
                      {format(parseISO(String(item.createdAt)), 'dd/MM/yyyy')}
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
              )}
            />
            : <ViewEmpty>
                <TitlePost>Adicione uma Memoria</TitlePost>
                <TitlePost>Ela vai aparecer aqui</TitlePost>
              </ViewEmpty>
          }
        </View>
      </Container>
    </>
  )
}
