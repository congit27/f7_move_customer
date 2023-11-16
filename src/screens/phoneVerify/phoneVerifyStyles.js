import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    loginContainer: {
        marginHorizontal: 40,
    },
    title: {
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 180,
        marginBottom: 50,
    },

    loginContent: {
        marginVertical: 15,
        gap: 10,
    },

    inputContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        height: 50,
    },

    logoSdt: {
        width: 30,
        height: 20,
        marginRight: 10,
    },
    inputSdt: {
        flex: 1,
        height: 40,
        borderLeftWidth: 1,
        paddingLeft: 10,
    },
    btnContinue: {
        backgroundColor: '#45849f',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
    },
    btnTextLogin: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },

    btnTextSignUp: {
        fontSize: 15,
        color: '#45849f',
        marginLeft: 120,
    },
});

export default styles;
