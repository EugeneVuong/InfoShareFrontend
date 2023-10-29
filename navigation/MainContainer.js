import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screen
import ShareScreen from './screens/ShareScreen'
import PInfoScreen from './screens/PInfoScreen'
import ContactsScreen from './screens/ContactsScreen'
import CameraScreen from './screens/CameraScreen'

// Screen Names
const shareName = 'Share';
const pInfoName = 'Personal Info';
const contactsName = 'Contacts';
const cameraName = 'Camera';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={shareName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === shareName) {
                        iconName = focused ? 'share' : 'share'
                    } else if (rn === pInfoName) {
                        iconName = focused ? 'person' : 'person'
                    } else if (rn === contactsName) {
                        iconName = focused ? 'people' : 'people'
                    } else if (rn === cameraName) {
                        iconName = focused ? 'camera' : 'camera'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}
            
            >
            <Tab.Screen name={cameraName} component={CameraScreen}/>
            <Tab.Screen name={shareName} component={ShareScreen}/>
            <Tab.Screen name={contactsName} component={ContactsScreen}/>
            <Tab.Screen name={pInfoName} component={PInfoScreen}/>


            </Tab.Navigator>
        </NavigationContainer>
    )
}