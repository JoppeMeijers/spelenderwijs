import React, {Component} from 'react';
import {Platform, StyleSheet,ScrollView, Text, ViewScrollView, Dimensions, View, FlatList, Image, Button,TouchableOpacity} from 'react-native';
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

class documentScreen extends Component {


    render() {
      const width = {
       width: (Dimensions.get('window').width),
      };
      return (
        <ScrollView>
        <SafeAreaView>
           
          <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Details',{})}>
          <View style={styles.cards} onPress={() =>this.props.navigation.navigate('Details',{output: result.data})}>
            <View style={styles.leftcolum}>
              <Avatar
                rounded
                icon={{name: 'file',color: 'grey', type: 'font-awesome'}}
                overlayContainerStyle={{backgroundColor: 'white', borderColor: 'grey', borderStyle:'solid', borderWidth: 2}}
              />
            </View>
            <View style={styles.middlecolum}>
              <Text style={styles.title}>Ouderbrief sept.</Text>
              <Text style={styles.undertitle}>01-01-2024</Text>
            </View>
            <View style={styles.rightcolum} onPress={() => this.props.navigation.navigate('Details',{})}>
              <Icon name='arrow-forward' />
            </View>

          </View>
          </TouchableOpacity>

          {/*  delete this cards after loop works */}

          <View style={styles.cards}>
          <View style={styles.leftcolum}>
          <Avatar
            rounded
            icon={{name: 'file',color: 'grey', type: 'font-awesome'}}
            overlayContainerStyle={{backgroundColor: 'white', borderColor: 'grey', borderStyle:'solid', borderWidth: 2}}
          />
          </View>
            <View style={styles.middlecolum}>
              <Text style={styles.title}>Ouderbrief Okt.</Text>
              <Text style={styles.undertitle}>01-01-2024</Text>
            </View>
            <View style={styles.rightcolum}>
            <Icon name='arrow-forward' />
            </View>

          </View>



          <View style={styles.cards}>
            <View style={styles.leftcolum}>
              <Avatar
                rounded
                icon={{name: 'file',color: 'grey', type: 'font-awesome'}}
                overlayContainerStyle={{backgroundColor: 'white', borderColor: 'grey', borderStyle:'solid', borderWidth: 2}}
              />
            </View>
            <View style={styles.middlecolum}>
              <Text style={styles.title}>Ouderbrief nov.</Text>
              <Text style={styles.undertitle}>01-01-2024</Text>
            </View>
            <View style={styles.rightcolum}>
              <Icon name='arrow-forward' />
            </View>
          </View>

          <View style={styles.cards}>
          <View style={styles.leftcolum}>
          <Avatar
            rounded
            icon={{name: 'file',color: 'grey', type: 'font-awesome'}}
            overlayContainerStyle={{backgroundColor: 'white', borderColor: 'grey', borderStyle:'solid', borderWidth: 2}}
          />
          </View>
            <View style={styles.middlecolum}>
              <Text style={styles.title}>Ouderbrief dec.</Text>
              <Text style={styles.undertitle}>01-01-2024</Text>
            </View>
            <View style={styles.rightcolum}>
            <Icon name='arrow-forward' />
            </View>

          </View>

          {/* end of loop */}


          <View style={styles.cardLast}>
            <View style={styles.leftcolumlast}>
              <Text style={styles.textLast}>Specifieke{"\n"}vraag{"\n"}over iets?</Text>
              <Button title={'klik hier'}  color="#095382"/>
            </View>
            <View style={styles.rightcolumlast}>
               <Image source={require( './assets/images/all/crocodile-great.png')} style={{ marginBottom: -20,width: 140, height: 142}}/>
            </View>
          </View>

          </View>
    
          
      </SafeAreaView>
    </ScrollView>
    

      );
    }
  }

  const styles = StyleSheet.create({
    cards:{
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#ddd',
      marginTop: 20,
      marginRight: 10,
      marginLeft: 10,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      paddingBottom: 20,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    },
    stars:{
      marginTop: 10,
    },
    leftcolum:{
      width: '10%',
      paddingTop: 4,
    },
    middlecolum:{
      width: '77%',
      paddingLeft: 20,
    },
    rightcolum:{
      width: '10%',
      paddingTop:10,
      paddingLeft:5,
    },
    title:{
      fontSize: 17,
      marginTop: 0,
      fontWeight: '800',
    },
    undertitle:{
      fontSize: 12,
      fontWeight: '200',
    },
    avatar:{
      marginTop: 5,
    },
    cardLast:{
      backgroundColor: '#FE406A',
      borderRadius: 10,
      marginTop: 20,
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
      paddingBottom: -30,
    },
    textLast:{
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      paddingBottom: 15,
    }
 
    
    
   
  });
  
  export default documentScreen;