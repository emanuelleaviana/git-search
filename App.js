import * as React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HomeScreen() {
  return (
    <View style={styles.conteiner}>
      <View style={styles.profilePicture}>
      <View style={styles.modal}></View>
      </View>
    </View>
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
  },
  profilePicture: {
    borderRadius:80,
    width:200,
    height:200,
    backgroundColor:'grey',
    justifyContent:'center',
    top:90,
  },
  modal: {
    width:60 ,
    height:60,
    backgroundColor:'black',
    borderRadius:20,
    alignSelf:'flex-end',
    top:70,
  }
});

export default App;


