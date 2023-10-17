import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    //service section styles
    categoryContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 20,
        marginTop: 10,
    },
    listServiceContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'start',
    },

    //end service section tyles

    //service item styles
    service: {
        backgroundColor: '#bbbbbb',
        width: '23%',
        height: 100,
        marginBottom: 10,
        borderRadius: 20,
        overflow: 'hidden',
        margin: '1%',
    },
    image: {
        width: '100%',
        height: 100,
    },
    // end service item styles
});

export default styles;
