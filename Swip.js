import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { Container, Content, Button, FooterTab, Footer } from 'native-base';
import { MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';

class Swip extends React.Component {
  render() {
    const myImage1 = 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMjF9&w=1000&q=80'
    const myImage2 = 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&w=1000&q=80'
    return (
      <Container style={{ backgroundColor: '#eff0f2' }}>
        <CardStack
          style={styles.content}
          renderNoMoreCards={() => <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>No more cards :(</Text>}
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwiped={() => console.log('onSwiped')}
          onSwipedLeft={() => console.log('onSwipedLeft')}
        >
          <Card style={[styles.card, styles.card1]}>

            <ImageBackground style={{ height: '100%', width: '100%' }} imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: myImage1 }}>
              <View style={{ padding: 10 }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', lineHeight: 30, paddingTop: 20 }}>
                  Three Recent Incidents that Prove Bitcoin
               </Text>
              </View>
            </ImageBackground>
            <View style={{ height: 150, backgroundColor: 'white', borderBottomStartRadius: 10, borderBottomEndRadius: 10 }}>
              <View style={{ padding: 10 }}>
                <Text style={{ color: 'black', letterSpacing: 1, fontWeight: 'bold' }}>Three Recent Incidents that Prove Bitcoin</Text>
                <Text style={{ color: 'gray', letterSpacing: 1, paddingTop: 10 }}>Bitcoin has beaten Gold in terms of returns on investments in its existence.</Text>
              </View>
            </View>
          </Card>

          <Card style={[styles.card, styles.card1]}>
            <ImageBackground style={{ height: '100%', width: '100%' }} imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: myImage2 }}>
              <View style={{ padding: 10 }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', lineHeight: 30, paddingTop: 20 }}>
                  So your financial advisor took a PPP loan
               </Text>
              </View>
            </ImageBackground>
            <View style={{ height: 150, backgroundColor: 'white', borderBottomStartRadius: 10, borderBottomEndRadius: 10 }}>
              <View style={{ padding: 10 }}>
                <Text style={{ color: 'black', letterSpacing: 1, fontWeight: 'bold' }}>Three Recent Incidents that Prove Bitcoin</Text>
                <Text style={{ color: 'gray', letterSpacing: 1, paddingTop: 10 }}>Many independent financial advisory shops are also small businesses with a payroll</Text>
              </View>
            </View>
          </Card>

          <Card style={[styles.card, styles.card1]}>
            <ImageBackground style={{ height: '100%', width: '100%' }} imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: myImage1 }}>
              <View style={{ padding: 10 }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', lineHeight: 30, paddingTop: 20 }}>
                  Three Recent Incidents that Prove Bitcoin
               </Text>
              </View>
            </ImageBackground>
            <View style={{ height: 150, backgroundColor: 'white', borderBottomStartRadius: 10, borderBottomEndRadius: 10 }}>
              <View style={{ padding: 10 }}>
                <Text style={{ color: 'black', letterSpacing: 1, fontWeight: 'bold' }}>Three Recent Incidents that Prove Bitcoin</Text>
                <Text style={{ color: 'gray', letterSpacing: 1, paddingTop: 10 }}>Bitcoin has beaten Gold in terms of returns on investments in its existence.</Text>
              </View>
            </View>
          </Card>
        </CardStack>

        <View style={styles.footer}>
          <View style={styles.buttonContainer}>
            <Button transparent onPress={() => { this.swiper.swipeLeft() }}>
              <MaterialIcons name="arrow-back" size={24} color="black" />
            </Button>

            <Button transparent onPress={() => { this.swiper.goBackFromLeft() }}>
              <MaterialIcons name="refresh" size={24} color="black" />
            </Button>

            <Button transparent onPress={() => { this.swiper.swipeRight() }}>
              <MaterialIcons name="arrow-forward" size={24} color="black" />
            </Button>
          </View>

        </View>
        <Footer style={{ backgroundColor: 'white' }}>
          <FooterTab style={{ backgroundColor: 'white' }}>
            <Button onPress={()=>this.props.navigation.navigate('initial')}>
              <MaterialIcons name="home" size={24} color="gray" />
            </Button>
            <Button>
            <MaterialCommunityIcons name="gesture-swipe" size={24} color="black" />
            </Button>
            <Button>
            <MaterialIcons name="person" size={24} color="gray" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>




    );
  }

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  content: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 280,
    height: 200,
    backgroundColor: '#FE474C',
    borderRadius: 20,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
  },
  card1: {

  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    lineHeight: 400,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    width: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  orange: {
    width: 55,
    height: 55,
    borderWidth: 6,
    borderColor: 'rgb(246,190,66)',
    borderRadius: 55,
    marginTop: -15
  },
  green: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#01df8a',
  },
  red: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#fd267d',
  }
});

export default Swip;