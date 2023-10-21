import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './src/screens/splash/Splash';
import OnBoarding1 from './src/screens/onBoarding1/OnBoarding1';
import OnBoarding2 from './src/screens/onBoarding2/OnBoarding2';
import HomePage from './src/screens/HomePage';
import Navigation from './src/components/navigation/Navigation';
// import HelpInfomation from './src/screens/HelpInfomation';
import PartnerInfomation from './src/screens/PartnerInfomation';

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
                <Stack.Screen name="PartnerInfomation" component={PartnerInfomation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
