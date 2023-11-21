import { Platform, StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 15,
        backgroundColor: '#ffffff',
        height: Dimensions.get('window').height,
    },

    //partner infomation
    partnerContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 20,
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
    },
    sectionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    avatarContainer: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    avartarPartner: {
        width: 60,
        height: 60,
        resizeMode: 'stretch',
        borderRadius: 100,
    },
    partnerInfoContainer: {
        flexDirection: 'column',
    },
    partnerName: {
        fontSize: 18,
        fontWeight: '700',
        width: 100,
        overflow: 'hidden',
    },
    compType: {
        fontSize: 11,
    },
    phoneNumb: {
        fontWeight: '500',
    },

    sectionRight: {
        flexDirection: 'row',
    },

    iconContainer: {
        marginHorizontal: 5,
        width: 55,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 50,
    },

    //price page
    colorRed: {
        color: 'red',
    },
    pricePageContainer: {
        flex: 1,
        marginTop: 15,
        marginBottom: 60,
    },
    cateTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 15,
    },
    cateItemContainer: {
        marginBottom: 20,
    },
    detailsContainer: {
        paddingVertical: 5,
        marginBottom: 20,
    },

    detailItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 2,
    },
    totalPriceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    totalPrice: {
        color: 'red',
        fontWeight: 'bold',
    },

    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    btnTextContainer: {
        backgroundColor: 'green',
        paddingVertical: 10,
        borderRadius: 15,
    },
    btnText: {
        width: 150,
        fontSize: 18,
        padding: 5,
        color: '#ffffff',
        fontWeight: '700',
        textAlign: 'center',
    },
    btnTextContainerDenied: {
        backgroundColor: 'red',
        paddingVertical: 10,
        borderRadius: 15,
    },
});

export default styles;
