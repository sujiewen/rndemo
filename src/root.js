import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './reducers/configureStore';
import AppRootNavigator from './navigator/AppNavigator';
import storage from './common/storage'
import NavigationService from './navigator/NavigationService';

const store = configureStore();
store.subscribe(() => {
    //监听state变化
    console.log(store.getState());
});

export default class Root extends Component {
    render() {
        return (
            // 实现app和store的关联，等于整个系统的组件都被包含住了
            <Provider store={store}>
                <AppRootNavigator ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}/>
            </Provider>
        )
    }
}