
import {
    createMaterialTopTabNavigator, createAppContainer
} from 'react-navigation';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
const TabNavigator = createMaterialTopTabNavigator({
    PopularTab1: {
        screen: Tab1,
        navigationOptions: {
            tabBarLabel: "tab1"
        }
    },
    PopularTab2: {
        screen: Tab2,
        navigationOptions: {
            tabBarLabel: "tab2"
        }
    }
});

export default createAppContainer(TabNavigator);