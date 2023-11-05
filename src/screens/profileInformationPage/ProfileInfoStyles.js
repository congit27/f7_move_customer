import { Platform, StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    profContainer: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: Platform.OS === 'android' ? 40 : 0,
    },
    profbody: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    profAvatar: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginTop: 60,
    },
    profName: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        color: 'blue',
        marginVertical: 3,
    },
    profBtnCont: {
        backgroundColor: '#e3e3e3',
        paddingVertical: 5,
        paddingHorizontal: 40,
        borderRadius: 15,
        marginVertical: 10,
    },
    profBtnText: {
        fontSize: 14,
        padding: 5,
        color: 'black',
        fontWeight: '700',
    },
    profNav: {
        marginTop: 30,
    },
    profNavItemCont: {
        backgroundColor: '#e3e3e3',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginVertical: 5,
    },
    profNavItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
    },
    profNavItemTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profNavItemTitleT: {
        marginHorizontal: 10,
    },
});

export default styles;
