import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    preview: {
        flex: 1,
    },
    picBtnContainer: {
        display: 'flex',
        alignSelf: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,

    },
    picBtn: {
        margin: 30,
        backgroundColor: 'blue',
        height: 50,
        width: 70,
        textAlign: 'center',

    },
    count: {
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white'
    },
    countContainer: {
        justifyContent: 'center',
        width: 80,
        height: 80,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 100,
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 6
    },
    iconContainer: {
        margin: 30,
    },
    icons: {
        color: '#fff'
    },
    iconText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },

    backgroundVideo: {
        position: 'relative',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: 300
    }
});

export default styles; 
