import { Platform, StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 40 : 0,
    },
    profContainer: {
        flex: 1,
        alignItems: 'center',
    },
    avatarCont: {
        marginVertical: 30,
        position: 'relative',
        borderWidth: 5,
        padding: 15,
        marginTop: 60,
        borderRadius: 100,
    },
    profAvatar: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    iconChangeContainer: {
        position: 'absolute',
        bottom: -10,
        right: -10,
        borderWidth: 2,
        borderRadius: 50,
        borderBlockColor: '#e3e3e3',
    },

    inputContainer: {
        marginTop: 30,
    },
    input: {
        marginVertical: 12,
        padding: 10,
        backgroundColor: '#e1e1e1',
        borderRadius: 20,
        width: 270,
    },
    btnTextContainer: {
        marginVertical: 40,
        backgroundColor: '#45849f',
        paddingVertical: 10,
        paddingHorizontal: 80,
        borderRadius: 15,
    },
    btnText: {
        fontSize: 18,
        padding: 5,
        color: '#ffffff',
        fontWeight: '700',
    },
});

export default styles;
