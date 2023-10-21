import { Platform, StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: '#e1e1e1',
        marginBottom: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 7,
    },
    price: {
        color: 'red',
        fontWeight: '700',
    },
});

export default styles;
