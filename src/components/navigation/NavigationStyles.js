import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        minHeight: 100,
        display: 'flex',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 40 : 0,
    },
});

export default styles;
