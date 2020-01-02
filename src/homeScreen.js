import React, {Component} from 'react';
import {Platform, StyleSheet,ScrollView, Text, ViewScrollView, Dimensions, View, FlatList, Image, Button} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { ListItem, Card, Icon } from 'react-native-elements';

const users = [
  {
     name: 'Joppe Meijers',
     avatar: require('./assets/images/dummy/dummy-joppe.png'),
     post: require('./assets/images/dummy/dummy-1.png'),
     subtitle: 'Meester'
  },
  {
    name: 'Raoul Frissen',
    avatar: require('./assets/images/dummy/dummy-raoul.png'),
    post: require('./assets/images/dummy/dummy-2.png'),
    subtitle: 'Meester'
 },
 {
  name: 'Joppe Meijers',
  avatar: require('./assets/images/dummy/dummy-joppe.png'),
  post: require('./assets/images/dummy/dummy-1.png'),
  subtitle: 'Meester'
},
{
 name: 'Raoul Frissen',
 avatar: require('./assets/images/dummy/dummy-raoul.png'),
 post: require('./assets/images/dummy/dummy-2.png'),
 subtitle: 'Meester'
},
]

class homeScreen extends Component {


    render() {
      const width = {
       width: (Dimensions.get('window').width),
      };
      return (
        <ScrollView>
        <SafeAreaView>
           
          <View style={styles.container}>
            <View>
            <Card containerStyle={{padding: 0,elevation: 0, borderColor: "white"}} >
              {
                users.map((u, i) => {
                  return (
                    <View style={styles.post}>
                    <ListItem
                    style={styles.avatarList}
                      key={i}
                      roundAvatar
                      title={u.name}
                      titleStyle={{fontWeight: 'bold' }}
                      subtitle={u.subtitle}
                      leftAvatar={{source: u.avatar}}
                    />
                    <Image source={u.post} style={{ width: '100%', height: 250 }}/>
                    <Text style={styles.postTitle}>Wat een geweldige start | 02-01-2020</Text>
                    <Text style={styles.postText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae pellentesque neque. Pellentesque a enim sed tellus facilisis pellentesque id eu urna. </Text>
                    </View>
                  );
                })
              }
            </Card>
            
            </View>
          </View>
    
          
      </SafeAreaView>
    </ScrollView>
    

      );
    }
  }

  const styles = StyleSheet.create({
    post:{
      marginBottom: 40,
    },  
    avatarList:{
      flex: 1,
      paddingLeft: 0,
      marginLeft:0,
    },  

    postTitle:{
      marginTop: 5,

      fontSize: 16,
      fontWeight: 'bold',
    }, 
    postText:{
      marginTop: 5,

      fontSize: 13,
    }
    
   
  });
  
  export default homeScreen;