//RooterNavigator
import {createAppContainer,createStackNavigator,createSwitchNavigator} from 'react-navigation';
import LoginScreen from './LoginScreen'; 
import MainNavigator from './MainNavigator';
import DetailScreen from './DetailScreen';


const navigator = createStackNavigator({
    ligin:{
        screen: LoginScreen,
     
    },
    home:{
       screen:MainNavigator,
       navigationOptions: ({navigation}) => ({
        header: null //设置页面有无标题
    })
    },
    detail:{
        screen:DetailScreen,
        
    }
});

export default createAppContainer(navigator);
