/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
//navigator Container
import { NavigationContainer } from '@react-navigation/native';
//bottomTabNavigator
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//importamos la libreria iconos
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/* FUNCION DE NUESTRA PANTALLA DE INICIO */
function HomeScreen(){
  return(
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"}]}>
      <Text>PANTALLA DE INICO</Text>
      {/* V-SLIDER */}
      <View style={{ flex: 1, backgroundColor: "red", justifyContent:"center",}}><Text>Slider</Text></View>
      {/* VISTA CATEGORI 1 */}
      <Text>V2-Base De Datos</Text>
      <View style={{flex:1, backgroundColor:"darkorange", justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POst-1</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POst-2</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POst-3</Text></View>
      </View>

      {/* Vista categoria 2 */}
      <Text>V3-Laravel</Text>
      <View style={{flex:1, backgroundColor:"gray", justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POST-4</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POST-5</Text></View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}><Text>POST-6</Text></View>
      </View>
    </View>
  );
}
/* FUNCION DE NUESTRA PANTALLA DE Categorias */
function CategoriesScreen(){
  return(
    <View style={{flex:1, justifyContent: 'center' ,alignItems: 'center', backgroundColor: "yellow"}}>
      <Text>PANTALLA DE CATEGORIAS</Text>
    </View>
    );
    }
    /* FUNCION DE NUESTRA PANTALLA DE POst */
    function PostScreen(){
    return(
    <View style={{flex:1, justifyContent: 'center' ,alignItems: 'center', backgroundColor: "gray"}}>
      <Text>PANTALLA DE CATEGORIAS</Text>
    </View>
    );
    }
    /* FUNCION DE NUESTRA PANTALLA DE INFO */
    function InfoScreen(){
    return(
    <View style={{flex:1, justifyContent: 'center' ,alignItems: 'center', backgroundColor: "red"}}>
      <Text>PANTALLA DE INFO</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Inicio" component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'#F32A64'} size={35} />
          ),
        }}
        />
        <Tab.Screen name="Categorias" component={CategoriesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="new-box" color={'#F32A64'} size={35} />
          ),
        }}
        />
        <Tab.Screen name="Post" component={PostScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="newspaper" color={'#F32A64'} size={35} />
          ),
        }}
        />
        <Tab.Screen name="Info" component={InfoScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information" color={'#F32A64'} size={35} />
          ),
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  }
});