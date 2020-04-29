import React from 'react';
import {
    Alert,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from './styles';



export default class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            isButton: false
        };
    }

    componentDidMount() {
    }
    search() {
        const { navigation = {} } = this.props;
        const { country = "" } = this.state;
        navigation.navigate("secondScreen", { country })
    }
    render() {
        const { country = "" } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.heading}> Start searching</Text>
                <View style={styles.textInputView}>
                    <TextInput
                        placeholder="Enter country"
                        onChangeText={(country) => this.setState({ country })}
                        value={this.state.country}
                    />
                </View>

                <TouchableOpacity
                    style={[country.length < 4 ? styles.buttonDisable : styles.buttonActive]}
                    onPress={() => this.search()}>
                    <Text style={[styles.searchText]}>
                        Search
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}