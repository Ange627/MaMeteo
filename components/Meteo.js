import React from "react"
import { View, Text, StyleSheet, Button } from 'react-native'
import { withNavigation } from "react-navigation";
import style from '../style'



class Meteo extends React.Component {

    render() {

        console.log(this.props)
        const { data } = this.props.route.params
        return (
            <View style={style.container} >
                <Text style={style.title}>
                    {"Meteo température : " + data.main.temp}
                </Text>

            </View>
        )
    }
}


export default withNavigation(Meteo)