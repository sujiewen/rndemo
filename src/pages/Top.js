
import {
    createMaterialTopTabNavigator, createAppContainer
} from 'react-navigation';

import EnterpriseAddPage from '../main/EnterpriseAddPage'
import GroupListPage from '../main/GroupListPage'
import PersonPage from '../main/PersonAddPage'

const TabNavigator = createMaterialTopTabNavigator({
    PopularTab1: {
        screen: EnterpriseAddPage,
        navigationOptions: {
            tabBarLabel: "企业通讯录"
        }
    },
    PopularTab2: {
        screen: GroupListPage,
        navigationOptions: {
            tabBarLabel: "我的群组"
        }
    },
    PopularTab3: {
        screen: PersonPage,
        navigationOptions: {
            tabBarLabel: "个人通讯录"
        }
    }
});

export const TabNavigatorContainer = createAppContainer(TabNavigator);

const TabNavigator2 = createMaterialTopTabNavigator({
    PopularTab1: {
        screen: PersonPage,
        navigationOptions: {
            tabBarLabel: "我的属员"
        }
    },
    PopularTab2: {
        screen: EnterpriseAddPage,
        navigationOptions: {
            tabBarLabel: "企业通讯录"
        }
    },
    PopularTab3: {
        screen: GroupListPage,
        navigationOptions: {
            tabBarLabel: "我的群组"
        }
    },
    PopularTab4: {
        screen: PersonPage,
        navigationOptions: {
            tabBarLabel: "个人通讯录"
        }
    }
});
export const TabNavigator2Container = createAppContainer(TabNavigator2);
