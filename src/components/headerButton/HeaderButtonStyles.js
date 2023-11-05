import { Platform, StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#ef5252',
        paddingVertical: 10,
        paddingHorizontal: 15,
        zIndex: 1,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        marginTop: Platform.OS === 'ios' ? 36 : 0,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: '#ffffff',
    },
    btnTextContainer: {
        paddingVertical: 10,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 90,
    },
    btnText: {
        padding: 3,
        color: '#ffffff',
        fontWeight: '700',
    },
});

export default styles;
