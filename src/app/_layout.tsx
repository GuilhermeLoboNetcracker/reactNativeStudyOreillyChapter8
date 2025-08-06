import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";
import { useState } from 'react';
import { Pressable } from 'react-native';
import 'react-native-get-random-values';
import { Provider } from 'react-redux';
import AddModal from '../components/Modals/AddModal';
import { store } from '../redux/store';
import { COLORS, FONT_SIZE, FONT_WEIGHT, SPACING_HORIZONTAL } from '../styles/constants';

export default function RootLayout() {

  const [ modalIsVisible, setModalIsVisible ] = useState<boolean>(false);
  
  return(
    <Provider store={store}>
      <Tabs screenOptions={{
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          backgroundColor: COLORS.blue,
          borderWidth: 0,
        },
        headerStyle: {
          backgroundColor: COLORS.blue,
          borderWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: FONT_SIZE.small,
          fontWeight: FONT_WEIGHT.bold,
        },
        headerTitleStyle: {
          fontSize: FONT_SIZE.large,
          fontWeight: FONT_WEIGHT.bold,
        },
        headerRight: () => (
          <Pressable
            onPress={() => setModalIsVisible(true)}
            style={{marginRight: SPACING_HORIZONTAL.small}}
          >
            <Ionicons name="add" size={FONT_SIZE.extraLarge} color={COLORS.white}/>
          </Pressable>
        ),
        headerTintColor: COLORS.white,
        tabBarActiveTintColor: COLORS.yellow,
        tabBarInactiveTintColor: COLORS.white,
      }}
      >
        <Tabs.Screen 
          name="index" 
          options={{
            title: 'Recent',
            headerTitle: 'Recent Expenses',
            tabBarIcon: ({color}) => <Ionicons name="hourglass-outline" color={color} size={FONT_SIZE.large}/>,
          }}
        />
        <Tabs.Screen 
          name="allExpenses" 
          options={{
            title: 'All Expenses',
            headerTitle: 'All Expenses',
            tabBarIcon: ({color}) => <Ionicons name="calendar" color={color} size={FONT_SIZE.large}/>,
          }}
        />
      </Tabs>

      <AddModal
        modalIsVisible={modalIsVisible}
        setModalIsVisible={setModalIsVisible}
      />
    </Provider>
  );
}
