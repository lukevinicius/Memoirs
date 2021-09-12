import React, { useState, useCallback, useEffect } from 'react'
import { FlatList } from 'react-native';
import {
  Container,
  View,
  Button,
  Image,
  ViewCategory,
  ImageCategory,
  Title,
  ViewJournal,
  TitlePost,
  Description,
  DateJournal,
  Content,
  Text
} from './styles'

import { useAuth } from '../../hooks/auth';

import imageTravel from '../../assets/Images/1.jpg'

import { Journal } from '../../models/Journal'
import { api } from '../../services/api';

interface JournalProps {
  id: string;
  date: Date;
  body: string;
  category: string;
}

const Item = ({ date, body, category }: JournalProps) => (
  <Content>
    <Image source={imageTravel} />
    <ViewJournal>
      <TitlePost>
        {date}
      </TitlePost>
      <Description maxLength={30}>
        {body}
      </Description>
      <Description>
        {category}
      </Description>
    </ViewJournal>
  </Content>
);

export function Home() {
  const { user } = useAuth();
  const [data, setData] = useState<Journal[]>();

  useEffect(() => {
    findPosts()
  }, []);

  async function findPosts() {
    const response = await api.get(`posts/${user.id}`)
    setData(response.data);
  }

  const renderItem = useCallback(({ item }) => (
    <Item id={item.id} date={item.createdAt} body={item.body} category={item.category} />
  ), []);

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
          <Title>Posts Recentes</Title>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </Container>
    </>
  )
}
