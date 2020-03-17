import * as React from 'react';
import { Text, View, Image, StatusBarIOS } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Container, Header, Thumbnail, Left, Body, Right, Button, Icon, Title, Segment, Content , Card, CardItem, Item, Input, Form} from 'native-base';
import { WebView } from 'react-native-webview';
import ProyEu from './proyEu'
import Equip from './equip'

function HomeScreen({ navigation }) {
  //Estaría bien incluir los posibles estudios que realizamos, linkados a nuestra página web
  return (
    <Container>
          <Header>
          <Left/>
          <Body>
            <Title>DGRII</Title>
          </Body>
          <Right />
      </Header>
      <Card style={{heigth: 100}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('./SRI.png')} />
                <Body>
                  <Text>Sistema Riojano de Innovación</Text>
                  <Text note>DGRII</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                  <Text>
                  En esta app encontrarás las últimas noticias acerca de noticias sobre vigilancia de mercados, 
                  noticias sobre innovación Tecnológica y no Tecnológica, 
                  últimas acciones llevadas a cabo desde la dirección
                  </Text>
              </Body>
            </CardItem>
          </Card>
      <WebView
        source={{ html: 
        '<a class="twitter-timeline" href="https://twitter.com/riojainnovacion?ref_src=twsrc%5Etfw">Tweets by thinktic</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
       }}
      />
    </Container>
    
  );
}

function ThinkTICScreen() {
  // Aquí falta subir los cursos ofrecidos por el ThinkTIC
  return (
    <Container>
          <Header>
          <Left/>
          <Body>
            <Title>DGRII</Title>
          </Body>
          <Right />
      </Header>
      <Card style={{heigth: 100}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('./ThinkTic.jpg')} />
                <Body>
                  <Text>ThinkTIC</Text>
                  <Text note>DGRII</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                  <Text>
                    Aquí encontrarás los últimos cursos ofertados en el ThinkTIC, así como las noticias más interesantes que hemos encontrado:
                  </Text>
              </Body>
            </CardItem>
          </Card>
      <WebView
        source={{ html: 
        '<a class="twitter-timeline" href="https://twitter.com/thinktic?ref_src=twsrc%5Etfw">Tweets by thinktic</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
       }}
      />
    </Container>
  );
}


function EuropaScreen() {
  /*Falta linkarlo con las convocatorias Europeas abiertas, que puedo generarlas ampliando mi api y 
  listando todos los que han sido introducidos durante la última semana*/
  /* En primer lugar vamos a preguntar a la API para que nos de la información que se requiere*/
  return (
    <Container>
    <Header>
          <Left/>
          <Body>
            <Title>DGRII</Title>
          </Body>
          <Right />
      </Header>
      <Card style={{heigth: 100}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('./horizon.jpg')} />
                <Body>
                  <Text>Convocatorias Europeas</Text>
                  <Text note>H2020</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Aquí encontrarás las últimas convocatorias abiertas</Text>
              </Body>
            </CardItem>
        </Card>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ProyEu />
      </View>
    </Container>
  );
}

function equipamientoScreen () {
  return(
    <Container>
    <Header>
          <Left/>
          <Body>
            <Title>DGRII</Title>
          </Body>
          <Right />
      </Header>
      <Card style={{heigth: 100}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('./SRI.png')} />
                <Body>
                  <Text>Equipamiento</Text>
                  <Text note>Inventario</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Aquí encontrarás el equipamiento disponible para el SRI</Text>
              </Body>
            </CardItem>
        </Card>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Equip />
      </View>
    </Container>
  )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="ThinkTIC" component={ThinkTICScreen} />
      <Tab.Screen name="Convocatorias Europeas" component={EuropaScreen} />
      <Tab.Screen name="Equipamiento" component={equipamientoScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}