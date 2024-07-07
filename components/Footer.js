import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";

const Tab = createStackNavigator();

const Footer = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    )
}

export default Footer;