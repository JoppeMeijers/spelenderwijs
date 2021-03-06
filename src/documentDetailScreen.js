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

class documentDetailScreen extends Component {


    render() {
      const width = {
       width: (Dimensions.get('window').width),
      };
      return (
        <ScrollView>
    
                <View style={styles.container}>
                    <Text style={styles.title}>Ouderbrief sept.</Text>
                    <Text style={styles.date}>01-01-2024</Text>

                    {/* loop text  */}

                    <Text style={styles.subtitle}>Over Ukke Puk</Text>
                    <Text style={styles.continuText}>
                        Bij peutercentrum Ukkepuk is altijd wel iets te beleven; elke dag is een avontuur! Bij ons vindt uw kind veiligheid, warmte, uitdaging en persoonlijke aandacht. Een goede basis voor groei en ontwikkeling. Alle kinderen hebben hun eigen talenten en bij ons krijgenze de ruimte om die te ontwikkelen. Dit kunnen ze samen doen met ons vriendje Puk. Hij speelt een belangrijke rol in de onderwijsmethodiek Uk en Puk die wij gebruiken.
                    </Text>
                    <Text style={styles.subtitle}>Over Ukke Puk</Text>
                    <Text style={styles.continuText}>
                        Bij peutercentrum Ukkepuk is altijd wel iets te beleven; elke dag is een avontuur! Bij ons vindt uw kind veiligheid, warmte, uitdaging en persoonlijke aandacht. Een goede basis voor groei en ontwikkeling. Alle kinderen hebben hun eigen talenten en bij ons krijgenze de ruimte om die te ontwikkelen. Dit kunnen ze samen doen met ons vriendje Puk. Hij speelt een belangrijke rol in de onderwijsmethodiek Uk en Puk die wij gebruiken.
                    </Text>
                    <View style={styles.cardLast}>
            <View style={styles.leftcolumlast}>
              <Text style={styles.textLast}>Meer documenten lezen?</Text>
              <Button title={'klik hier'}  color="#095382"/>
            </View>
            <View style={styles.rightcolumlast}>
               <Image source={require( './assets/images/all/crocodile-great.png')} style={{ marginBottom: -20,width: 140, height: 142}}/>
            </View>
          </View>
                    <View  style={styles.footer} >
                        <Image style={{ width: 110,height: 50, marginBottom: 20, marginTop:10,}} source={require('./assets/images/all/spelenderwijs.png')} />
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
        paddingBottom: -20,
      },
      textLast:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 15,
      }
   
  });
  
  export default documentDetailScreen;