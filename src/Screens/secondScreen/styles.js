import { StyleSheet, Platform } from 'react-native';
import { Dimensions } from "react-native";
import Colors from '../../assets/Colors/Colors'
const { height, width } = Dimensions.get('window');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default StyleSheet.create({

    container: {
        flex: 1,
    },
    heading: {
        textAlign: "center",
    },
    text: {
        fontSize: 16
    },
    listView: {
        justifyContent: "center",
        margin: 10
    },
    headerStyle: {
        width: "100%",
        height: 50,
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Platform.OS == "ios" ? 30 : 0,
        backgroundColor: Colors.AppBackgroundColor,
    },
    titleStyle: {
        color: Colors.black,
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 20
    },
    backButtonStyle: {
        margin: 5,
        width: 50,
        height: 50,
    },
    searchText: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    },
    buttonActive: {
        marginTop: "2%",
        width: "80%",
        alignSelf: "center",
        height: 45,
        backgroundColor: "green",
        justifyContent: "center"
    },

})