import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import { Container, Content, FooterTab, Footer, Thumbnail, Button, Header, Left, Body, Right, Card, CardItem } from 'native-base'
import { MaterialIcons, MaterialCommunityIcons, Ionicons, FontAwesome5 ,AntDesign} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
class Home extends Component {
    render() {
        const myImage1 = 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMjF9&w=1000&q=80'
        const myImage2 = 'https://motionarray.imgix.net/preview-271702-j7MCCckCvg-high_0002.jpg'
        const myImage3 = 'https://st4.depositphotos.com/3271841/27836/v/600/depositphotos_278363316-stock-video-multicolored-motion-gradient-background-pastel.jpg'
        return (
            <Container>
                <Content padder style={{ backgroundColor: '#eff0f2' }}>
                    <View>
                        <View>
                            <Card transparent>
                                <CardItem style={{backgroundColor:"#eff0f2"}}>
                                    <Left>
                                        <Thumbnail source={{ uri: 'https://media-exp1.licdn.com/dms/image/C5603AQHbZA9Wz8xLaw/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=N1m43towijOo89hmW6ymVsOLuYWM4Q0JaxMMepYLC2c' }} />
                                        <Body style={{paddingLeft:10}}>
                                            <Text style={{color:'gray'}}>Looking for job</Text>
                                            <Text style={{color:'gray',fontWeight:'bold',fontSize:17}}>Jayaprakash</Text>
                                        </Body>
                                        <Right>
                                        <Ionicons name="ios-notifications" size={30} color="#4e00c3" />
                                        </Right>
                                    </Left>
                                    
                                </CardItem>
                            </Card>
                        </View>
                        <View style={{ paddingLeft: 23, marginBottom: 20 }}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <Card transparent style={{ width: 120, borderRadius: 8, marginRight: 20 }}>
                                    <CardItem style={{ borderRadius: 8 }}>
                                        <Left>
                                            <FontAwesome5 name="canadian-maple-leaf" size={24} color="#ff0249" />
                                            <Body>
                                                <Text>Redux</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                </Card>

                                <Card transparent style={{ width: 120, borderRadius: 8, marginRight: 20 }}>
                                    <CardItem style={{ borderRadius: 8 }}>
                                        <Left>
                                        <AntDesign name="customerservice" size={24} color="#ff0249" />
                                            <Body>
                                                <Text>React</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                </Card>


                                <Card transparent style={{ width: 120, borderRadius: 8, marginRight: 20 }}>
                                    <CardItem style={{ borderRadius: 8 }}>
                                        <Left>
                                            <FontAwesome5 name="canadian-maple-leaf" size={24} color="#ff0249" />
                                            <Body>
                                                <Text>Firebase</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                </Card>

                                <Card transparent style={{ width: 120, borderRadius: 8, marginRight: 20 }}>
                                    <CardItem style={{ borderRadius: 8 }}>
                                        <Left>
                                            <FontAwesome5 name="canadian-maple-leaf" size={24} color="#ff0249" />
                                            <Body>
                                                <Text>Redux</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                </Card>

                                <Card transparent style={{ width: 120, borderRadius: 8, marginRight: 20 }}>
                                    <CardItem style={{ borderRadius: 8 }}>
                                        <Left>
                                            <FontAwesome5 name="canadian-maple-leaf" size={24} color="#ff0249" />
                                            <Body>
                                                <Text>React</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                </Card>


                                <Card transparent style={{ width: 120, borderRadius: 8, marginRight: 20 }}>
                                    <CardItem style={{ borderRadius: 8 }}>
                                        <Left>
                                            <FontAwesome5 name="canadian-maple-leaf" size={24} color="gray" />
                                            <Body>
                                                <Text>Firebase</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                </Card>






                            </ScrollView>
                        </View>

                        <View style={{ paddingLeft: 25 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'gray' }}>My Technologies</Text>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Card transparent style={{ borderRadius: 10 }}>
                                <CardItem style={{ backgroundColor: '#eff0f2', borderRadius: 10 }}>
                                    <ImageBackground style={{ width: 250 }} imageStyle={{ borderRadius: 10 }} source={{ uri: myImage1 }}>
                                        <View style={{ padding: 20 }}>
                                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', lineHeight: 30, paddingTop: 20, paddingRight: 10 }}>
                                                Three Recent Incidents that Prove Bitcoin</Text>
                                        </View>
                                        <View style={{ padding: 20, backgroundColor: 'white', borderBottomStartRadius: 10, borderBottomEndRadius: 10 }}>
                                            <Left>
                                                <Ionicons name="ios-leaf" size={24} color="gray" />
                                                <Body>
                                                    <Text style={{ color: 'black', letterSpacing: 1, fontWeight: 'bold' }}>React Native</Text>
                                                </Body>
                                            </Left>

                                        </View>
                                    </ImageBackground>
                                </CardItem>
                            </Card>

                            <Card transparent style={{ borderRadius: 10 }}>
                                <CardItem style={{ backgroundColor: '#eff0f2', borderRadius: 10 }}>
                                    <ImageBackground style={{ width: 250 }} imageStyle={{ borderRadius: 10 }} source={{ uri: myImage2 }}>
                                        <View style={{ padding: 20 }}>
                                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', lineHeight: 30, paddingTop: 20, paddingRight: 10 }}>
                                                Three Recent Incidents that Prove Bitcoin</Text>
                                        </View>
                                        <View style={{ padding: 20, backgroundColor: 'white', borderBottomStartRadius: 10, borderBottomEndRadius: 10 }}>
                                            <Left>
                                                <Ionicons name="ios-leaf" size={24} color="gray" />
                                                <Body>
                                                    <Text style={{ color: 'black', letterSpacing: 1, fontWeight: 'bold' }}>Firebase</Text>
                                                </Body>
                                            </Left>
                                        </View>
                                    </ImageBackground>
                                </CardItem>
                            </Card>

                            <Card transparent style={{ borderRadius: 10 }}>
                                <CardItem style={{ backgroundColor: '#eff0f2', borderRadius: 10 }}>
                                    <ImageBackground style={{ width: 250 }} imageStyle={{ borderRadius: 10 }} source={{ uri: myImage3 }}>
                                        <View style={{ padding: 20 }}>
                                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', lineHeight: 30, paddingTop: 20, paddingRight: 10 }}>
                                                Three Recent Incidents that Prove Bitcoin</Text>
                                        </View>
                                        <View style={{ padding: 20, backgroundColor: 'white', borderBottomStartRadius: 10, borderBottomEndRadius: 10 }}>
                                            <Left>
                                                <Ionicons name="ios-leaf" size={24} color="gray" />
                                                <Body>
                                                    <Text style={{ color: 'black', letterSpacing: 1, fontWeight: 'bold' }}>Redux</Text>
                                                </Body>
                                            </Left>

                                        </View>
                                    </ImageBackground>
                                </CardItem>
                            </Card>


                        </ScrollView>

                        {/* ScrollView End */}
                        <View style={{ paddingLeft: 25 }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'gray' }}>Spread Information</Text>
                        </View>

                        <Card transparent style={{ borderRadius: 10 }}>
                            <CardItem style={{ backgroundColor: '#eff0f2', borderRadius: 10 }}>
                                <ImageBackground style={{ width: "100%" }} imageStyle={{ borderRadius: 10 }} source={{ uri: myImage3 }}>
                                    <View style={{ padding: 20 }}>
                                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', lineHeight: 30, paddingTop: 20, paddingRight: 10 }}>
                                            Three Recent Incidents that Prove Bitcoin</Text>
                                    </View>
                                    <View style={{ padding: 20, backgroundColor: 'white', borderBottomStartRadius: 10, borderBottomEndRadius: 10 }}>
                                        <Left>
                                            <Ionicons name="ios-leaf" size={24} color="gray" />
                                            <Body>
                                                <Text style={{ color: 'black', letterSpacing: 1, fontWeight: 'bold' }}>Redux</Text>
                                            </Body>
                                        </Left>

                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card transparent style={{ borderRadius: 10 }}>
                            <CardItem style={{ backgroundColor: '#eff0f2', borderRadius: 10 }}>
                                <ImageBackground style={{ width: "100%" }} imageStyle={{ borderRadius: 10 }} source={{ uri: myImage1 }}>
                                    <View style={{ padding: 20 }}>
                                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', lineHeight: 30, paddingTop: 20, paddingRight: 10 }}>
                                            Three Recent Incidents that Prove Bitcoin</Text>
                                    </View>
                                    <View style={{ padding: 20, backgroundColor: 'white', borderBottomStartRadius: 10, borderBottomEndRadius: 10 }}>
                                        <Left>
                                            <Ionicons name="ios-leaf" size={24} color="gray" />
                                            <Body>
                                                <Text style={{ color: 'black', letterSpacing: 1, fontWeight: 'bold' }}>React Native</Text>
                                            </Body>
                                        </Left>

                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card transparent style={{ borderRadius: 10 }}>
                            <CardItem style={{ backgroundColor: '#eff0f2', borderRadius: 10 }}>
                                <ImageBackground style={{ width: "100%" }} imageStyle={{ borderRadius: 10 }} source={{ uri: myImage2 }}>
                                    <View style={{ padding: 20 }}>
                                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', lineHeight: 30, paddingTop: 20, paddingRight: 10 }}>
                                            Three Recent Incidents that Prove Bitcoin</Text>
                                    </View>
                                    <View style={{ padding: 20, backgroundColor: 'white', borderBottomStartRadius: 10, borderBottomEndRadius: 10 }}>
                                        <Left>
                                            <Ionicons name="ios-leaf" size={24} color="gray" />
                                            <Body>
                                                <Text style={{ color: 'black', letterSpacing: 1, fontWeight: 'bold' }}>Firebase</Text>
                                            </Body>
                                        </Left>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>


                    </View>
                </Content>
                <Footer style={{ backgroundColor: 'white' }}>
                    <FooterTab style={{ backgroundColor: 'white' }}>
                        <Button>
                            <MaterialIcons name="home" size={24} color="black" />
                        </Button>
                        <Button onPress={()=>this.props.navigation.navigate('swip')}>
                            <MaterialCommunityIcons name="gesture-swipe" size={24} color="gray" />
                        </Button>
                        <Button>
                            <MaterialIcons name="person" size={24} color="gray" />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

export default Home
