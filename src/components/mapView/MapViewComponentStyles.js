import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    btnTextContainer: {
        position: 'absolute',
        bottom: 20,
        left: 10,
        right: 10,
        alignItems: 'center',
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 15,
        marginBottom: 60,
    },
    btnText: {
        fontSize: 18,
        padding: 5,
        color: '#ffffff',
        fontWeight: '700',
    },
});

export default styles;
