import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    registerContainer: {
        marginHorizontal: 40,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 15,
    },
    registerContent: {
        flexDirection: 'column',
    },
    textInfor: {
        fontSize: 16,
        marginBottom: 10,
    },
    inputInfor: {
        borderWidth: 1,
        height: 40,
        paddingLeft: 10,
        borderRadius: 10,
        marginBottom: 10,
    },

    btnContainer: {},

    registerBtn: {
        marginTop: 50,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#45849f',
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
});

export default styles;
