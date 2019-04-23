import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import WelcomePage from '../pages/WelcomePage'
import DetailPage from '../pages/DetailPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../login/loginPage'
// import { MainNavigator } from '../main/main'

const MainNavigator = createStackNavigator({
  HomePage: {
    screen:HomePage,
    navigationOptions: {
      header: null
    }
  },
  DetailPage: {
    screen:DetailPage
  }
});

const InitNavigator = createStackNavigator({
    WelcomePage: {
    screen:WelcomePage,
    navigationOptions: {
      header: null
    }
  }
});

const LoginNavigator = createStackNavigator({
    LoginPage: {
        screen:LoginPage,
        navigationOptions: {
            header: null
        }
    }
});

const AppRootNavigator = createAppContainer(createSwitchNavigator(
  {
      Init: InitNavigator,
      Login:LoginNavigator,
      Main: MainNavigator,
  },
  {
    initialRouteName: 'Init',
  }
));

global.appRootNavigator = AppRootNavigator;

export default AppRootNavigator;
