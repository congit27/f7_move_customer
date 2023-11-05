import { View, Text, StyleSheet, Dimensions, StatusBar, useWindowDimensions } from 'react-native';
import * as React from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';

import Confirm from './Confirm';
import History from './History';

const renderScene = SceneMap({
    first: Confirm,
    second: History,
});
export default function Service({ navigation }) {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Đã xác nhận' },
        { key: 'second', title: 'Lịch sử' },
    ]);
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
    },
    scene: {
        flex: 1,
    },
});
