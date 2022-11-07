import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Image, FlatList } from 'react-native';
import { NavigationContainer, TabRouter, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from 'react-native-gesture-handler';
import { FontAwesome, FontAwesome5, Entypo, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Skeleton from './Skeleton';


function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState("");

  function Profile() {
    navigation.push('Profile', {
      user: user
    });
  }
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
            <View style={styles.backgroundColorModal}>
              <View style={styles.idModal}>
                <TextInput
                  defaultValue={user}
                  onChangeText={newUser => setUser(newUser)}
                  placeholder='Insira o seu ID Github =)'
                  style={styles.textInput}
                ></TextInput>
                <TouchableOpacity onPress={Profile} style={styles.buttonStart}>
                  <Text style={styles.textModal}>
                    <AntDesign name="checksquare" size={33} color="black" />
                  </Text>
                </TouchableOpacity>
              </View>
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

function Profile({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [login, setlogin] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState(null);
  const [code, setCode] = useState(null);

  const user = route.params.user

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => setlogin(data.login))
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((image) => setAvatar(image.avatar_url))
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((name) => setName(name.name))
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((code) => setCode(code.id))
  }, []);

  function Bio() {
    navigation.navigate('Bio', {
      user: user
    });
  }

  function Orgs() {
    navigation.push('Orgs', {
      user: user
    });
  }

  function Repository() {
    navigation.navigate('Repositórios', {
      user: user
    });
  }

  function Reset() {
    navigation.push('Home', {
      user: null
    });
  }

  function Follows() {
    navigation.navigate('Seguidores', {
      user: user
    });
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer = setInterval(()=>{
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <Skeleton visible={loading}>
    <View style={styles.conteinerProfile}>
      <View style={styles.conteinerUpPage}>
        <Image style={styles.profilePictureCustomize} source={{ uri: avatar }}></Image>
        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          } }
        >
          <View style={styles.idModalProfile}>
            <TouchableOpacity style={styles.buttonStart}>
              <Text style={styles.textModalProfile}><Text style={[{ fontWeight: 'bold', flexDirection: 'column' }]}>User: </Text>@{user}</Text>
              <Text style={styles.textModalProfile}><Text style={[{ fontWeight: 'bold', flexDirection: 'column' }]}>ID: </Text>{code}</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.modalProfile}>
          <FontAwesome style={styles.iconSearch} name="search" size={20} color="#50327c" />
        </TouchableOpacity>
      </View>

      <Text style={styles.nameProfile}>{name}</Text>
      <Text style={styles.nicknameProfile}>@{login}</Text>

      <View>
        <TouchableOpacity style={[styles.individualButton, { borderTopStartRadius: 20, borderTopEndRadius: 20 }]} onPress={Bio}>
          <View style={styles.iconButton}><FontAwesome5 name="user" size={28} color="black" /></View>
          <View>
            <Text style={styles.textButtons}>Bio</Text>
            <Text style={styles.subtitleButton}>Um pouco sobre o usuário</Text>
          </View>
          <Text style={[styles.iconArrowButton, { marginLeft: 108 }]}> <AntDesign name="right" size={24} color="black" /> </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.individualButton} onPress={Orgs}>
          <View style={styles.iconButton}>
            <FontAwesome5 name="headset" size={28} color="black" />
          </View>
          <View>
            <Text style={styles.textButtons}>Orgs</Text>
            <Text style={styles.subtitleButton}>Organizações que o usuário faz parte</Text>
          </View>
          <Text style={[styles.iconArrowButton, { marginLeft: 55 }]}> <AntDesign name="right" size={24} color="black" /> </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.individualButton} onPress={Repository}>
          <View style={styles.iconButton}><Ionicons name="document-text-outline" size={28} color="black" /></View>
          <View>
            <Text style={styles.textButtons}>Repositórios</Text>
            <Text style={styles.subtitleButton}>Lista contendo todos os repositórios</Text>
          </View>
          <Text style={[styles.iconArrowButton, { marginLeft: 55 }]}> <AntDesign name="right" size={24} color="black" /> </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.individualButton, { borderBottomStartRadius: 20, borderBottomEndRadius: 20 }]} onPress={Follows}>
          <View style={styles.iconButton}><MaterialCommunityIcons name="face-recognition" size={28} color="black" /></View>
          <View>
            <Text style={styles.textButtons}>Seguidores</Text>
            <Text style={styles.subtitleButton}>Lista de seguidores</Text>
          </View>
          <Text style={[styles.iconArrowButton, { marginLeft: 138 }]}> <AntDesign name="right" size={24} color="black" /> </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.backgroundResetButton}>
        <TouchableOpacity style={styles.resetButton} onPress={Reset}>
          <Text style={{ fontSize: 16 }}> <Entypo name="log-out" size={20} color="black" /> Resetar</Text>
        </TouchableOpacity>
      </View>
    </View>
    </Skeleton>
  )
}

function Bio({ route, navigation }) {

  const [bio, setBio] = useState(null);

  const user = route.params.user

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((bio) => setBio(bio.bio))
  }, []);

  return (
    <View style={styles.conteiner}>
      <View style={styles.bioCard}>
        <Text style={{ color: 'white', textAlign: 'justify', fontSize: 18, fontStyle: 'italic' }}>"{bio}"</Text>
      </View>
    </View>
  )
}

function OrgsPage({ navigation }) {
  const [orgs, setOrgs] = useState([]);

  const route = useRoute()
  const user = route.params.user

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/orgs`)
      .then((response) => response.json())
      .then((data) => setOrgs(data))
  }, []);

  return (
      <View>
        <FlatList
          data={orgs}
          renderItem={({ item }) => {
            return (
              <View style={styles.conteiner}>
                <View style={styles.cardsList}>
                  <Text style={styles.textList}>{item.login} </Text>
                </View>
              </View>
            )
          }}
        />
      </View>
  )
}

function RepositoryPage({ route, navigation }) {

  const [repository, setRepository] = useState([]);

  const user = route.params.user


  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((response) => response.json())
      .then((data) => setRepository(data))
  }, []);

  return (
    <FlatList
      data={repository}
      keyExtractor={data => data.name}
      renderItem={({ item }) => {
        return (
          <View style={styles.conteiner}>
            <View style={styles.cardsList}>
              <Text style={styles.textList}>{item.name} </Text>
            </View>
          </View>
        )
      }}
    >
    </FlatList>
  )
}

function FollowsPage({ route, navigation }) {
  const [follows, setFollows] = useState(null);

  const user = route.params.user

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/followers`)
      .then((response) => response.json())
      .then((follows) => setFollows(follows))
  }, []);


  return (
    <View>
      <FlatList
        data={follows}
        keyExtractor={data => data.follows}
        key={data => data.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.conteiner2}>
              <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 6, flexDirection: 'row' }}>
                <Image style={styles.profilePictureFollowers} source={{ uri: item.avatar_url }}></Image>
                <View style={styles.listContent}>
                  <Text style={styles.textListFollows}> {item.login} </Text>
                </View>
              </View>
            </View>
          )
        }}
      >
      </FlatList>
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
  conteiner2: {
    flex: 1,
    flexDirection: 'row',
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
  backgroundColorModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  idModal: {
    width: 300,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#50327c',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    width: 200,
    borderRadius: 10,
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
  conteinerUpPage: {
    borderRadius: 50,
    justifyContent: 'center',
  },
  profilePictureCustomize: {
    borderRadius: 50,
    width: 170,
    height: 170,
    backgroundColor: '#666666',
    justifyContent: 'center',
    marginTop: 20,
  },
  idModalProfile: {
    width: 200,
    height: 70,
    backgroundColor: '#50327c',
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    top: 160,
    right: 30,
    padding: 8,
  },
  modalProfile: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 20,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    bottom: 40,
  },
  textModalProfile: {
    color: 'white',
    textAlign: 'left',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 8,
  },
  nameProfile: {
    fontWeight: 'bold',
    fontSize: 20,
    bottom: 20,
  },
  nicknameProfile: {
    color: '#858585',
    bottom: 12,
    marginBottom: 20,
  },
  individualButton: {
    width: 380,
    height: 90,
    padding: 25,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'white'
  },
  textButtons: {
    fontWeight: 'bold',
    fontSize: 20,
    bottom: 5,
  },
  subtitleButton: {
    color: 'grey',
    fontSize: 12,
    bottom: 10,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    borderRadius: 5,
    marginRight: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconArrowButton: {
    width: 40,
    height: 40,
    top: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundResetButton: {
    marginTop: 30,
    width: 380,
    height: 120,
    backgroundColor: 'white',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    justifyContent: 'center',
  },
  resetButton: {
    width: 340,
    height: 70,
    borderRadius: 25,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bioCard: {
    width: '90%',
    height: 200,
    backgroundColor: '#50327c',
    justifyContent: 'center',
    borderRadius: 40,
    padding: 15,
  },
  listContent: {
    width: 100,
    backgroundColor: '#50327c',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
    padding: 6,
    borderBottomRightRadius: 9,
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
    marginLeft: 3,
  },
  profilePictureFollowers: {
    borderRadius: 20,
    width: 80,
    height: 80,
    backgroundColor: '#666666',
    justifyContent: 'center',
    marginTop: 20,
  },
  textListFollows: {
    alignSelf: 'center',
    color: 'white',
  },
  cardsList: {
    width: '80%',
    height: 100,
    backgroundColor: '#50327c',
    borderWidth: 2,
    borderRadius: 20,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textList: {
    fontSize: 25,
    color: 'white',
  }
});

export default App;
