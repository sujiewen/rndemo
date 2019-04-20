import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import WelcomePage from '../pages/WelcomePage'
import DetailPage from '../pages/DetailPage'
import HomePage from '../pages/HomePage'

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

export default createAppContainer(createSwitchNavigator(
  {
    Init: InitNavigator,
    Main: MainNavigator,
  },
  {
    initialRouteName: 'Init',
  }
));
