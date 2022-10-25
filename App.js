import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
    <View style={styles.conteiner}>
      <View style={styles.profilePicture}>
        <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        >
          <View style={styles.idModal}>
          <TextInput placeholder='ID Github' keyboardType='numeric' style={styles.textInput}></TextInput>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.buttonStart}>
            <Text style={styles.textModal}>
            <FontAwesome style={styles.iconSearch} name="search" size={20} color="black" />            
            </Text>
          </TouchableOpacity>
          </View>

        </Modal>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.modal}>
          <FontAwesome style={styles.iconSearch} name="search" size={24} color="white" />
        </TouchableOpacity>
        

      </View>
      <Text style={styles.textInitial}>Clique na lupa e escreva o nome do usuário (id) do Github que você deseja consultar!</Text>
    </View><AntDesign style={styles.iconGitHub} name="github" size={24} color="black" />
    </>

  
  );
}

function Profile({ navigation }) {
  return (
    <View style={[]}>
      <Button
        title='Bio'
        onPress={() => navigation.navigate('Bio')}
      />
      <Button
        title='Orgs'
        onPress={() => navigation.navigate('Orgs')}
      />
      <Button
        title='Repositórios'
        onPress={() => navigation.navigate('Repositórios')}
      />
      <Button
        title='Seguidores'
        onPress={() => navigation.navigate('Seguidores')}
      />
    </View>

  )
}

function Bio() {
  return (
    <View>
      <Text>Olá mundo!</Text>
    </View>
  )
}

function OrgsPage() {
  return (
    <View>
      <Text>PAGINAS ORGS</Text>
    </View>
  )
}

function RepositoryPage() {
  return (
    <View>
      <Text>PAGINA REPOSITORIOS</Text>
    </View>
  )
}

function FollowsPage() {
  return (
    <View>
      <Text>Olá mundo!</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Bio" component={Bio} />
        <Stack.Screen name="Orgs" component={OrgsPage} />
        <Stack.Screen name="Repositórios" component={RepositoryPage} />
        <Stack.Screen name="Seguidores" component={FollowsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  profilePicture: {
    borderRadius:80,
    width:200,
    height:200,
    backgroundColor:'grey',
    justifyContent:'center',
    bottom:50,
  },
  modal: {
    width:60 ,
    height:60,
    backgroundColor:'black',
    borderRadius:20,
    alignSelf:'flex-end',
    justifyContent:'center',
    top:60,
  },
  textInitial: {
    textAlign:'center',
    marginHorizontal:30,
  },
  iconSearch: {
    alignSelf:'center',
  },
  iconGitHub: {
    alignSelf:'center',
    bottom:10,
  },
  idModal: {
    width:190,
    height:100,
    backgroundColor:'#cf9bcc',
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10,
    flexDirection:'row',
    alignSelf:'center',
    
    justifyContent:'center',
    alignItems:'center',
    top:100,
  },
  textInput: {
    borderWidth:1,
    width:80,
    backgroundColor:'white',
    paddingHorizontal:6,
  },
  textModal: {
    paddingLeft:10,
  }
});

export default App;


