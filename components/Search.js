import React from 'react'
import { Text, View, TextInput, Button } from "react-native"
import style from '../style'
import { withNavigation } from 'react-navigation';
import { MyStack } from '../routes/searchstack'



class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            city: ''
        }
        this.search = ""
    }

    _searchTextInputChanged(text) {

        this.search = text // Modification du texte recherché à chaque saisie de texte, sans passer par setState
    }


    submit() {
        this.setState({ city: this.search })

    }


    render() {
        return (
            <View style={style.container}>
                <TextInput
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    style={style.input}

                />
                <Button color={style.color} onPress={() => this.submit()} title="Rechercher" />
            </View>
        )
    }
}


export default withNavigation(Search)