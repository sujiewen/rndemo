export default class NaivgationUtil {
    static goPage(params, page) {
        const navigation  = NaivgationUtil.navigation;
        if(!navigation) {
            console.log('navigation can not be null')
            return;
        }
        navigation.navigate(
            page,
            {
                ...params
            }
        )
    }
    static goBack(navigation) {
        navigation.goback();
    }
    static resetToHomePage(params) {
        const { navigation } = params;
        navigation.navigate('Main');
    }
};