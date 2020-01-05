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
                    <View  style={styles.footer} >
                        <Image style={{resizeMode: 'contain', flex:1, width: 100, marginBottom: 0, paddingBottom:0, bottom: 0}} source={require('./assets/images/all/spelenderwijs.png')} />
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
    },
    date:{
        fontSize: 12,
        fontWeight: '200',
        marginTop: 5,
    },  
    subtitle:{
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
    continuText:{
        marginTop: 10,
        fontSize: 15,
        paddingBottom: 20,
    },
    footer:{
        alignItems: 'center',
        marginTop: 20,
        marginBottom: -20,
        paddingBottom:-20,
        bottom: 0
    },  
 
   
  });
  
  export default documentDetailScreen;