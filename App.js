import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './src/screens/splashPage/Splash';
import OnBoarding1 from './src/screens/BoardingPage/OnBoarding1';
import OnBoarding2 from './src/screens/BoardingSubPage/OnBoarding2';
import HomePage from './src/screens/HomePage';
import Navigation from './src/components/navigation/Navigation';
import PartnerInformation from './src/screens/PartnerInformation';

const Stack = createNativeStackNavigator();

const App = () => {
    const forFade = ({ current }) => ({
        cardStyle: {
            opacity: 0,
        },
    });

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyleInterpolator: forFade,
                }}
                initialRouteName="Navigation"
            >
                <Stack.Screen name="Splash" component={Splash} options={{ cardStyleInterpolator: forFade }} />
                <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
                <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="Navigation" component={Navigation} />
                <Stack.Screen name="PartnerInformation" component={PartnerInformation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
