import React, {Component} from 'react';
import {Platform, StyleSheet,ScrollView, Text, ViewScrollView, Dimensions, View, FlatList, Image, Button} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { ListItem, Card, Icon, Avatar } from 'react-native-elements';

const list = [
    {
      title: 'Appointments',
      icon: 'av-timer'
    },
    {
      title: 'Trips',
      icon: 'flight-takeoff'
    },

  ]

class informationScreen extends Component {


    render() {
      const width = {
       width: (Dimensions.get('window').width),
      };
      return (
        <ScrollView>
                <View style={styles.cardFirst}>
                    <View style={styles.leftcolumfirst}>
                        <Text style={styles.textfirst}>UKKEPUK | Sittard</Text>
                    </View>
                    <View style={styles.rightcolumfirst}>
                        <Image source={require( './assets/images/all/bunny.png')} style={{position: 'absolute', right: -20,width: 140, height: 205}}/>
                    </View>
                </View>
    
                <View style={styles.container}>

                    <View style={styles.cardLast}>
                        <View style={styles.leftcolumlast}>
                            <Text style={styles.textLast}>Meer documenten lezen?</Text>
                            <Button title={'klik hier'}  color="#095382"/>
                        </View>
                            <View style={styles.rightcolumlast}>
                            <Image source={require( './assets/images/all/crocodile-great.png')} style={{ marginBottom: -20,width: 140, height: 142}}/>
                        </View>
                    </View>

                </View>
        </ScrollView>
    

      );
    }
  }

  const styles = StyleSheet.create({
      container:{
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
      },    
    title:{
        marginTop: 20,
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
    },
    date:{
        fontSize: 12,
        fontWeight: '200',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
    },  
    subtitle:{
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
    },
    continuText:{
        marginTop: 10,
        fontSize: 15,
        paddingBottom: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    footer:{
        alignItems: 'center',
        marginTop: 20,
        bottom: 0
    },  
    cardLast:{
        backgroundColor: '#FE406A',
        borderRadius: 10,
        marginTop: 40,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
      },
      leftcolumlast:{
        width: '50%',
        paddingTop: 4,
      },
      rightcolumlast:{
        width: '50%',
        paddingTop:10,
        paddingLeft:10,
        paddingBottom: -20,
      },
      textLast:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 15,
      },
      cardFirst:{
        backgroundColor: '#FE406A',
        borderRadius: 10,
        borderTopLeftRadius:0,
        borderTopRightRadius: 0,
        marginTop: 0,
        marginRight: 0,
        marginLeft: 0,
        marginBottom: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
      },
      leftcolumfirst:{
        width: '50%',
        paddingTop: 4,
      },
      rightcolumfirst:{
        width: '50%',
        paddingTop:10,
        paddingLeft:10,
        paddingBottom: -20,

      },
      textfirst:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 90,
      }
   
  });
  
  export default informationScreen;