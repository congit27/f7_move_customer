import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './src/screens/splashPage/Splash';
import BoardingPage from './src/screens/boardingPage/BoardingPage';
import BoardingSubPage from './src/screens/boardingSubPage/BoardingSubPage';
import HomePage from './src/screens/HomePage';
import Navigation from './src/components/navigation/Navigation';
import PartnerInformation from './src/screens/PartnerInformation';
import PhoneVerify from './src/screens/phoneVerify/phoneVerify';
import OTPVerify from './src/screens/OTPVerify/OTPVerify';

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
                initialRouteName="HomePage"
            >
                <Stack.Screen name="Splash" component={Splash} options={{ cardStyleInterpolator: forFade }} />
                <Stack.Screen name="BoardingPage" component={BoardingPage} />
                <Stack.Screen name="BoardingSubPage" component={BoardingSubPage} />
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="Navigation" component={Navigation} />
                <Stack.Screen name="PartnerInformation" component={PartnerInformation} />
                <Stack.Screen name="PhoneVerify" component={PhoneVerify} />
                <Stack.Screen name="OTPVerify" component={OTPVerify} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
