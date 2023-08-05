import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from 'react-native';
import { 
    Attendance, 
    History, 
    Home, 
    Notification, 
    Profile 
} from '../pages';

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    elevation: 0.1,
                    backgroundColor: '#EDEFF5',
                    height: 92,
                },
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarIcon:({focused})=>(
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image 
                            source={require('./../assets/icons/Home.png')}
                            resizeMode= 'contain'
                            style={{
                                width: 38,
                                height: 38,
                                tintColor: focused ? '#339993' : '#343435'
                            }}
                        />
                        <Text
                            style={{
                                color: focused ? '#339993' : '#343435',
                                fontSize: 10,
                            }}
                        >Home</Text>
                        <View
                            style={{
                                borderWidth: 1,
                                borderColor: focused ? '#339993' : '#EDEFF5',
                                width: 38
                            }}
                        ></View>
                    </View>
                )
            }}/>
            <Tab.Screen name="History" component={History} options={{
                headerShown: false,
                tabBarIcon:({focused})=>(
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image 
                            source={require('./../assets/icons/Calendar.png')}
                            resizeMode= 'contain'
                            style={{
                                width: 40,
                                height: 38,
                                tintColor: focused ? '#339993' : '#343435'
                            }}
                            />
                        <Text
                            style={{
                                color: focused ? '#339993' : '#343435',
                                fontSize: 10
                            }}
                            >History</Text>
                        <View
                            style={{
                                borderWidth: 1,
                                borderColor: focused ? '#339993' : '#EDEFF5',
                                width: 40
                            }}
                            ></View>
                    </View>
                )
            }}/>
            <Tab.Screen name="Notification" component={Notification} options={{
                headerShown: false,
                tabBarIcon:({focused})=>(
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        bottom: 85,
                        height: 130,
                        width: 100,
                    }}>
                        <View style={{
                            height: 150,
                            width: 100,
                            position: 'absolute',
                            paddingBottom: 17,
                            justifyContent: 'flex-end',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                height: 20,
                                width: 75,
                                backgroundColor: '#ffffff',
                                borderBottomEndRadius: 20,
                                borderBottomStartRadius: 20,
                            }}></View>
                        </View>
                        <Text
                            style={{
                                color: '#339993',
                                fontSize: 10,
                            }}
                        >Notification</Text>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: focused ? 12 : 4
                        }}>
                            <View style={{
                            width: 86,
                            height: 86,
                            borderRadius: 70,
                            backgroundColor: focused ? '#01E7E6' : '#FFFFFF00',
                            position: 'absolute',
                            opacity: 0.4
                            }}></View>
                            <View style={{
                                width: 63,
                                height: 63,
                                backgroundColor: '#ffffff',
                                borderRadius: 40,
                                borderWidth: 5,
                                borderColor: '#80D3D1',
                                justifyContent: 'center',
                                alignItems: 'center',
                                shadowColor: focused ? '#01E7E6' : '#000000',
                                shadowOffset: {width: 2, height: 2},
                                shadowOpacity: 0.2,
                                shadowRadius: 3,
                                elevation: 5
                            }}>
                                <Image 
                                    source={require('./../assets/icons/Notification.png')}
                                    resizeMode= 'contain'
                                    style={{
                                        width: 40,
                                        height: 41,
                                        tintColor: focused ? '#3BAE7E' : '#343435',
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                )
            }}/>
            <Tab.Screen name="Absensi" component={Attendance} options={{
                headerShown: false,
                tabBarIcon:({focused})=>(
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image 
                            source={require('./../assets/icons/Attendance.png')}
                            resizeMode= 'contain'
                            style={{
                                width: 47,
                                height: 38,
                                tintColor: focused ? '#339993' : '#343435'
                            }}
                        />
                        <Text
                            style={{
                                color: focused ? '#339993' : '#343435',
                                fontSize: 10
                            }}
                        >Absen</Text>
                        <View
                            style={{
                                borderWidth: 1,
                                borderColor: focused ? '#339993' : '#EDEFF5',
                                width: 38
                            }}
                        ></View>
                    </View>
                )
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{
                headerShown: false,
                tabBarIcon:({focused})=>(
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image 
                            source={require('./../assets/icons/Profile.png')}
                            resizeMode= 'contain'
                            style={{
                                width: 38,
                                height: 41,
                                tintColor: focused ? '#339993' : '#343435'
                            }}
                        />
                        <Text
                            style={{
                                color: focused ? '#339993' : '#343435',
                                fontSize: 10
                            }}
                        >Profil</Text>
                        <View
                            style={{
                                borderWidth: 1,
                                borderColor: focused ? '#339993' : '#EDEFF5',
                                width: 38
                            }}
                        ></View>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    );
}

export default Tabs;