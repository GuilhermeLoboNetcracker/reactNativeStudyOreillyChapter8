import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";
import { useState } from 'react';
import { Pressable } from 'react-native';
import 'react-native-get-random-values';
import { Provider } from 'react-redux';
import AddModal from '../components/Modals/AddModal';
import { store } from '../redux/store';
import { COLORS, SPACING } from '../styles/constants';

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
        headerRight: () => (
          <Pressable
            onPress={() => setModalIsVisible(true)}
            style={{marginRight: SPACING.small}}
          >
            <Ionicons name="add" size={20} color={COLORS.white}/>
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
            tabBarIcon: ({color}) => <Ionicons name="hourglass-outline" color={color}/>,
          }}
        />
        <Tabs.Screen 
          name="allExpenses" 
          options={{
            title: 'All Expenses',
            headerTitle: 'All Expenses',
            tabBarIcon: ({color}) => <Ionicons name="calendar" color={color}/>,
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
