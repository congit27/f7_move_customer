import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 50,
        height: 250,
        marginBottom: 50,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        bottom: 0,
        left: 0,
        right: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
    },
    btnTextContainer: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 40,
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
