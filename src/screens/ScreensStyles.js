import { Platform, StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    //home styles
    homeContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 18,
        backgroundColor: '#ffffff',
        paddingTop: Platform.OS === 'android' ? 40 : 0,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationIcon: {
        marginRight: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        marginVertical: 15,
        borderRadius: 15,
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor: '#ede9e9',
    },
    searchInput: {
        flex: 1,
        marginLeft: 5,
    },
    //end home styles

    //service styles

    //end service styles

    //help styles

    //end help styles

    //profile styles

    //end profile styles
    helpContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? 40 : 0,
    },
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: Dimensions.get('window').width,
        backgroundColor: 'white',
        flex: 1,
        elevation: 5,
    },

    //help infomation styles
    helpInfoContainer: {
        flex: 1,
        padding: 18,
    },
    helpInfoTitleSection: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10,
    },
    helpInfoInputContainer: {
        backgroundColor: '#ffffff',
        marginBottom: 10,
        flex: 1,
        marginHorizontal: 3,
    },
    helpInfoInputLabel: {
        marginBottom: 5,
    },
    colorRed: {
        color: 'red',
    },
    helpInfoInput: {
        borderColor: 'black',
        height: 50,
        backgroundColor: '#eee',
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 5,
    },
    helpInfoTextAreaContainer: {
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 10,
    },
    helpInfoTextArea: {
        textAlignVertical: 'top',
        height: 50,
        borderRadius: 10,
        justifyContent: 'flex-start',
    },
    dropdown: {
        height: 50,
        paddingHorizontal: 16,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
    },
    doubleFieldInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnTextSendReqHelpContainer: {
        alignItems: 'center',
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 15,
        marginTop: 20,
        marginBottom: 70,
    },

    abs: {
        height: 200,
        backgroundColor: 'red',
    },

    //end help infomation styles
});

export default styles;
