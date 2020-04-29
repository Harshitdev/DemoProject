import React from 'react';
import {
    Alert,
    View,
    Dimensions,
    Text,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';

import styles from './styles';
import Colors from '../../assets/Colors/Colors';
import { SvgUri } from 'react-native-svg';
import Images from "../../assets/Images/Images";
const { height, width } = Dimensions.get('window');
const URL = "https://restcountries.eu/rest/v2/name/";
const weatherURL = "http://api.weatherstack.com/current?access_key=";
const weatherAccessToken = "cd56befb23fe3cb75c98296191b29f7e"

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryList: [],
            weatherData: {},
            currentIndex: ""
        };
    }
    async UNSAFE_componentWillMount() {
        try {
            const { navigation = {} } = this.props;
            const { state = {} } = navigation;
            const { params = {} } = state;
            let response = await fetch(URL + params.country);
            let json = await response.json();
            console.log(json, "jsonjsonjsonjson")
            this.setState({
                countryList: json
            });
        } catch (error) {
            console.error(error);
            this.setState({
                countryList: []
            });
        }
    }

    async getWeather(item, index) {
        try {
            const { navigation = {} } = this.props;
            const { state = {} } = navigation;
            const { params = {} } = state;
            let response = await fetch(weatherURL + weatherAccessToken + "&query=" + item.capital);
            let json = await response.json();
            console.log(json, "jsonjsonjsonjsonjsonjson====")
            this.setState({
                weatherData: json, currentIndex: index
            });
        } catch (error) {
            this.setState({
                weatherData: {}
            });
            console.error(error);
        }
    }
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    };

    render() {
        const { countryList = [], currentIndex = "", weatherData = {} } = this.state;
        const { navigation = {} } = this.props;
        console.log(currentIndex, "currentIndexcurrentIndexcurrentIndexcurrentIndex")
        return (
            <View style={styles.container}>
                <View style={[styles.headerStyle]}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.backButtonStyle]}>
                        <Image source={Images.backIcon} style={[styles.backButtonStyle]} />
                    </TouchableOpacity>
                    <Text style={{ marginTop: 12, color: Colors.grey, textAlign: "center" }}>
                        Country List
                    </Text>
                    <View style={{ width: 50 }} />
                </View>

                <FlatList
                    keyExtractor={item => item.id}
                    data={countryList}
                    extraData={this.state}
                    renderItem={({ item, index }) =>
                        <View key={index.toString()} style={styles.listView}>
                            <SvgUri
                                width={100}
                                height={100}
                                uri={item.flag}
                            />
                            <Text style={styles.text}>Name: {item.name}</Text>
                            <Text style={styles.text}>Capital: {item.capital}</Text>
                            <Text style={styles.text}>Population: {item.population}</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text>Lat & long:</Text>
                                {item.latlng.map((element, _index) => {
                                    return (
                                        <View key={_index} style={{ marginLeft: 5, flexDirection: "row" }}>
                                            <Text style={styles.text}>{element}{index == 0 && ","}</Text>
                                        </View>
                                    );
                                })
                                }
                            </View>

                            <TouchableOpacity
                                style={[styles.buttonActive]}
                                onPress={() => this.getWeather(item, index)}
                            >
                                <Text style={[styles.searchText]}>
                                    Search Weather
                                </Text>
                            </TouchableOpacity>
                            {currentIndex !== "" &&
                                <View>
                                    {currentIndex == index ?
                                        <View style={{ marginTop: 5 }}>
                                            <Text style={styles.text}>Temperature: {weatherData.current.temperature}</Text>
                                            <Text style={styles.text}>Wind Speed: {weatherData.current.wind_speed}</Text>
                                            <Text style={styles.text}>Precip: {weatherData.current.precip}</Text>
                                        </View>
                                        : null
                                    }
                                </View>
                            }
                        </View>
                    }
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View >
        )
    }
}