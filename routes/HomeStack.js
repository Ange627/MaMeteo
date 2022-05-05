

/*


import About from "../components/About";
import Search from "../components/Search"
import Meteo from "../components/Meteo"
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Async await à utiliser


const Tab = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Rechercher',
        },
    },
    Meteo: {
        screen: Meteo,
        navigationOptions: {
            title: 'Meteo',
        },
    },
})
const tabBarOptions = {
    activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
    inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
    scrollEnabled: true,
    labelStyle: {
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '900',
    },
    style: {
        backgroundColor: 'lightgrey',
    },
}

const MeteoTabNavigator = createBottomTabNavigator(
    {
        Search: {
            screen: Search,
            navigationOptions: {
                tabBarLabel: '🔍',
            },
        },
        Home: {
            screen: About,
            navigationOptions: {
                tabBarLabel: '♥',
            },
        },
    },
    {
        tabBarOptions: tabBarOptions,
    },
)

export default createAppContainer(MeteoTabNavigator)

*/












import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Image, Text, View } from 'react-native'
import About from '../components/About'
import Meteo from '../components/Meteo'
import Search from '../components/Search'
import style from '../style'

const Stack = createStackNavigator()

function StackScreen() {
    return (
        <Stack.Navigator initialRouteName="Rechercher" headerMode="none">
            <Stack.Screen name="Rechercher" component={Search} />
            <Stack.Screen name="Meteo" component={Meteo} />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator()



const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'abstolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    borderradius: 15,
                    height: 90,
                    backgroundcolor: '#FFFFFF',
                    ...style.shadow

                }
            }}
        >

            <Tab.Screen style={style.header} name="Accueil" component={About} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Image
                            source={require('../assets/home.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94'

                            }}
                        />
                        <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Home</Text>
                    </View>
                )

            }} />
            <Tab.Screen name="Recherche" component={StackScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Image
                            source={require('../assets/search.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94'

                            }}
                        />
                        <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Search</Text>
                    </View>
                )

            }} />

        </Tab.Navigator>
    );
}

export default Tabs;