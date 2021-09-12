import React from 'react'
import { View } from '../Home/styles'
import { Container, DateJournal, Title, Text } from './styles'
import Button from '../../components/Button'

import example from '../../assets/Images/1.jpg'
import theme from '../../global/styles/theme'

export function Post() {
  return (
    <>
      <Container>
        <DateJournal>Monday 17 March 2021</DateJournal>
        <Title>it's not the years in your life that count</Title>
        <Text>sadasodaçsduasbdasbduasbduasbdaosbbubdaodulasbdasbdhasbdhbashdbhasldbhasbldhasbdhabdasbdashbdaslbdasbdhashkbdashbdhasbdaskdbasdasbhdasdasdasdasasdoajduçahsudasçdusduasldnlnouasdhasloduasdhsuoadsadasdasdyasidgasbdasydbasdybsgdasbdasdbgasasdabydgaysdgagybsdsadasjduaohdusabdauosdhasuodhasudhaosçuldhasdhasldhasdhashdasudhs</Text>
      </Container>
      <View style={{ backgroundColor: theme.colors.primaryDark }}>
        <Button title="Edit" icon="edit" onPress={() => { }} />
      </View>
    </>
  )
}
