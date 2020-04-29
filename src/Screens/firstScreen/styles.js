import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";
import Colors from '../../assets/Colors/Colors'
const { height, width } = Dimensions.get('window');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        alignContent: "center"
    },
    image: {
        flex: 1,
        height: hp('100%'),
        width: wp('100%'),
    },
    textInputView: {
        marginTop: "40%",
        alignItems: "center",
        borderRadius: 1,
        alignSelf: 'center',
        flexDirection: 'row',
        height: 45,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 2,
        width: '85%',
    },
    heading: {
        marginTop: 40
    },
    searchText: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    },
    buttonDisable: {
        marginTop: "10%",
        width: "80%",
        height: 45,
        backgroundColor: "grey",
        justifyContent: "center"
    },
    buttonActive: {
        marginTop: "10%",
        width: "80%",
        height: 45,
        backgroundColor: "green",
        justifyContent: "center"
    },

})