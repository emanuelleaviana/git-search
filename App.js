import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from 'react-native-gesture-handler';
import { FontAwesome, FontAwesome5, Entypo, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


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
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.idModal}>
              <TextInput placeholder='ID Github' keyboardType='numeric' style={styles.textInput}></TextInput>
              <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.buttonStart}>
                <Text style={styles.textModal}>
                  <FontAwesome style={styles.iconSearch} name="search" size={20} color="#341933" />
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
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.conteinerProfile}>
      <View style={styles.profilePictureCustomize}>
        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.idModalProfile}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.buttonStart}>
              <Text style={styles.textModalProfile}>User:</Text>
              <Text style={styles.textModalProfile}>Id:</Text>
            </TouchableOpacity>
          </View>

        </Modal>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.modal}>
          <FontAwesome style={styles.iconSearch} name="search" size={28} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={styles.nameProfile}>Emanuelle Viana</Text>
      <Text style={styles.nicknameProfile}>@emanuelleaviana</Text>

      <View>
        <TouchableOpacity style={[styles.individualButton, {borderTopStartRadius:20, borderTopEndRadius:20}]} onPress={() => navigation.navigate('Bio')}>
          <View style={styles.iconButton}><FontAwesome5 name="user" size={28} color="black" /></View>
          <View>
            <Text style={styles.textButtons}>Bio</Text>
            <Text style={styles.subtitleButton}>Um pouco sobre o usuário</Text>
          </View>
          <Text style={[styles.iconArrowButton, {marginLeft:100}]}> <AntDesign name="right" size={24} color="black" /> </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.individualButton} onPress={() => navigation.navigate('Orgs')}>
          <View style={styles.iconButton}>
            <FontAwesome5 name="headset" size={28} color="black" />
          </View>
          <View>
            <Text style={styles.textButtons}>Orgs</Text>
            <Text style={styles.subtitleButton}>Organizações que o usuário faz parte</Text>
          </View>
          <Text style={[styles.iconArrowButton, {marginLeft:30}]}> <AntDesign name="right" size={24} color="black" /> </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.individualButton} onPress={() => navigation.navigate('Repositórios')}>
          <View style={styles.iconButton}><Ionicons name="document-text-outline" size={28} color="black" /></View>
          <View>
            <Text style={styles.textButtons}>Repositórios</Text>
            <Text style={styles.subtitleButton}>Lista contendo todos os repositórios</Text>
          </View>
          <Text style={[styles.iconArrowButton, {marginLeft:32}]}> <AntDesign name="right" size={24} color="black" /> </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.individualButton, {borderBottomStartRadius:20, borderBottomEndRadius:20}]} onPress={() => navigation.navigate('Seguidores')}>
          <View style={styles.iconButton}><MaterialCommunityIcons name="face-recognition" size={28} color="black" /></View>
          <View>
            <Text style={styles.textButtons}>Seguidores</Text>
            <Text style={styles.subtitleButton}>Lista de seguidores</Text>
          </View>
          <Text style={[styles.iconArrowButton, {marginLeft:138}]}> <AntDesign name="right" size={24} color="black" /> </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.backgroundResetButton}>
        <TouchableOpacity style={styles.resetButton}>
          <Text style={{fontSize:16}}> <Entypo name="log-out" size={20} color="black" /> Resetar</Text>
        </TouchableOpacity>
      </View>
      
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  conteinerProfile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  profilePicture: {
    borderRadius: 80,
    width: 200,
    height: 200,
    backgroundColor: '#50327c',
    justifyContent: 'center',
    bottom: 50,
  },
  modal: {
    width: 60,
    height: 60,
    backgroundColor: 'black',
    borderRadius: 20,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    top: 60,
  },
  textInitial: {
    textAlign: 'center',
    marginHorizontal: 30,
  },
  iconSearch: {
    alignSelf: 'center',
  },
  iconGitHub: {
    alignSelf: 'center',
    bottom: 10,
  },
  idModal: {
    width: 190,
    height: 100,
    backgroundColor: '#86626E',
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: 300,
    right: 30,
  },
  textInput: {
    borderWidth: 1,
    width: 80,
    backgroundColor: 'white',
    paddingHorizontal: 6,
  },
  textModal: {
    paddingLeft: 10,
  },
  buttonProfile: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  profilePictureCustomize: {
    borderRadius: 50,
    width: 170,
    height: 170,
    backgroundColor: '#666666',
    justifyContent: 'center',
    marginTop:20,
  },
  idModalProfile: {
    width: 150,
    height: 70,
    backgroundColor: '#86626E',
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    top: 300,
    right: 10,
  },
  textModalProfile: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 8,
  },
  nameProfile:{
    fontWeight:'bold',
    fontSize:20,
    marginTop:10,
  },
  nicknameProfile: {
    color:'#858585',
    marginBottom:20,
  },
  individualButton: {
    width: 380,
    height:90,
    padding: 25,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    flexDirection: 'row',
    alignItems:'flex-start',
    backgroundColor:'white'
  },
  textButtons: {
    fontWeight: 'bold',
    fontSize:20,
    bottom:5,
  },
  subtitleButton: {
    color: 'grey',
    fontSize:12,
    bottom:10,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderWidth:1,
    borderColor: '#e2e2e2',
    borderRadius:5,
    marginRight:10,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
  },
  iconArrowButton: {
    width: 40,
    height: 40,
    top:8,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
  },
  backgroundResetButton:{
    marginTop:30,
    width: 380,
    height:120,
    backgroundColor:'white',
    borderTopEndRadius:30,
    borderTopStartRadius:30,
    justifyContent:'center',

  },
  resetButton: {
    width:340,
    height:70,
    borderRadius:25,
    alignSelf:'center',
    borderWidth:1,
    borderColor:'black',
    alignItems:'center',
    justifyContent:'center',
  },
});

export default App;
