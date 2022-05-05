import React from "react"
import { View, Text, StyleSheet, Button } from 'react-native'
import style from '../style'



export default class About extends React.Component {

    search() {
        this.props.navigation.navigate('Recherche')
    }


    render() {
        return (
            <View style={style.container} >
                <Text style={style.title}>
                    a propos de l'application
                </Text>
                <Text>

                </Text>
                <Button color={style.color} onPress={() => this.search()} title="Rechercher une ville" />
            </View>
        )
    }
}


