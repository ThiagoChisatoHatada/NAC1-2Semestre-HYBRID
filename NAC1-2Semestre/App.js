import React,{useState,Component} from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, ScrollView, SafeAreaView, } from 'react-native';
import Constants from 'expo-constants';

//importações do React Navigation
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';


//módulo do Tab Navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//biblioteca de icones
import { Ionicons } from '@expo/vector-icons';

//módulo do Navigation Drawer
import {createDrawerNavigator} from '@react-navigation/drawer';


//uso de Hooks para criação de objetos
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


//header da home
function LogoTitle() {
  //uso do navigation para acionar o Drawer
  const navigation = useNavigation();
  
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Image
        style={{ width: 200, height: 50, marginLeft:50 }}
        source={require('./images/fiap.jpg')}
      />
    </View>
  );
}


//função que retorna stack referente a opções
function Cadastrar(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Options"
        options={
          {headerTitle: props => <LogoTitle/>}}>
          {props => 
              <View style={styles.container}>
              <ScrollView>
                <Text style={styles.intro}>Cadastrar Dúvida</Text>
                <Text style={styles.instructions}>Caso possua alguma duvida sobre o tema envie por aqui e receba a resposta por email</Text>
                <br/>
                <form onSubmit={this.handleSubmit}>
                <label>
                Nome:
                 <TextInput style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 2 , borderRadius: 20}}/>
                 </label>
                 <br/>
                 <br/>
                 <label>
                Email:
                 <TextInput style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 2 , borderRadius: 20}}/>
                 </label>
                 <br/>
                 <br/>
                 <label>
                Data de Nascimento:
                <input id="date" type="date" style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 2 , borderRadius: 20}} />
                 </label>
                 <br/>
                 <br/>
                 <label>
                 Duvida:
                 <textarea style={{ height: 100, width: 300, borderColor: 'gray', borderWidth: 2 , borderRadius: 20}} placeholder={'Digite sua duvida'}/>
                 </label>
                 <View style={styles.botaoEntrar}>
                 <Button color="#4169E1" title='Cadastrar'/>
                 </View>
                 </form>
                 </ScrollView>
               </View>  
          }
      </Stack.Screen>
    </Stack.Navigator>
  );
}

//função que retorna stack referente a sobre
function AboutScreen(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        options={
          {headerTitle: props => <LogoTitle/>}}>
          {props => 
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Versão do aplicativo: 1.0</Text>
                <br/>
                <br/>
                <br/>
                <br/>
                <Text>Email do Desenvolvedor:</Text>
                <Text>HTBDev@gmail.com</Text>
                <br/>
                <br/>
                <br/>
                <br/>
                <Text>Gostando do aplicativo?</Text>
                <Text>Avalie-nos na loja de apps</Text>
                <br/>
                <br/>
                <Button color="#4169E1" title='Avaliar'/>
               </View>  
          }
      </Stack.Screen>
    </Stack.Navigator>
  );
}


//tela inicial
function TelaInicial() {
  //objeto de controle de navegação
  const navigation = useNavigation();
  
  const [text, setText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

  var obj = {
          nome: 'Aluno',
          sobrenome: 'FIAP'
        };

  return(
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.intro}>Bem Vindo!</Text>
      <div style ={{border: 'solid', borderColor: '#1a1a1a', borderRadius: 20,}}>
       <Text style={styles.instructions}>{text}</Text>
       </div>
     <View style={styles.botoesTexto}>
      <Button  
        title='Texto1'
        onPress={() => setText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}
      />
      <Button 
        title='Texto2'
        onPress={() => setText("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")}
      />
      <Button
        title='Texto3'
        onPress={() => setText("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).")}
      />
      </View> 
     <View style={styles.botaoEntrar}>
      <Button color="#4169E1" 
        title='Entrar no aplicativo'
        onPress={() => navigation.navigate('Detalhes')}
      />
      </View>
      </ScrollView>
      </View>
  );
}

//tela de detalhes
function TelaDetalhes() {
  //objeto de controle de navegação
  const navigation = useNavigation();

  //recebendo dados da tela anterior
  return(
    <View style={styles.container}>
      <Text style={styles.paragraph}>Em construção</Text>
      <Button color="#4169E1" 
        title='Voltar'
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

//tela do usuario


//stacks do App da aula anterior
function AppStack(){
  return(
    <Stack.Navigator>
          
          <Stack.Screen
            name='Home'
            options={{ headerTitle: props => <LogoTitle/> }}>
            {props => <TelaInicial />}
          </Stack.Screen>

          <Stack.Screen
            name='Detalhes'
            options={{title: 'Tela de Detalhes'}}>
            {props => <TelaDetalhes />}
          </Stack.Screen>
        </Stack.Navigator>
  );
}

//renderiza os botões inferiores
function AppBottonTab({routeName}){
  return(
        <Tab.Navigator
      initialRouteName={routeName}
      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'ios-home';
        } 
        else if (route.name === 'Cadastrar') {
          iconName = focused ? 'ios-add-circle-outline' : 'ios-add-circle';
        }
        else if (route.name === 'About') {
          iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
        }

        // Qualquer componente pode ser usado
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: '#6495ED',
    }}
  >

      <Tab.Screen name="Home" component={AppStack}/>
      <Tab.Screen name="Cadastrar" component={Cadastrar}/>
      <Tab.Screen name="About" component={AboutScreen}/>

    </Tab.Navigator>

  );
}

class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='App'>
            {props => <AppBottonTab routeName='App' />}
          </Drawer.Screen>
          <Drawer.Screen name='Options'>
            {props => <AppBottonTab routeName='Options' />}
          </Drawer.Screen>
          <Drawer.Screen name='About'>
            {props => <AppBottonTab routeName='About' />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
  );
  }
} export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    height:'10px',
    textAlign: 'center',
    color: '#6495ED',
  },
    intro: {
    color: '#6495ED',
    fontStyle: 'bold',
    fontFamily: 'sans-serif-thin',
    textShadowColor: '#008B8B',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 10,
  },

  instructions: {
    color: '#1a1a1a',
    justifyContent: 'center',
    fontSize: 18,
    marginHorizontal: 18,
    marginBottom: 20,
  },

  botaoEntrar:{
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:20
  },

  botoesTexto:{
    width: '100%',
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop:20
  }
});