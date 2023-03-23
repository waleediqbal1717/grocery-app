import {Navigation} from 'react-native-navigation';
import Home from '../screens/Home';

import {HOME_SCREEN, DETAILS_SCREEN, CART_SCREEN, HOME_NAV} from './navs';
import Cart from '../screens/Cart';
import Detail from '../screens/Detail';
Navigation.registerComponent(CART_SCREEN, () => Cart);
Navigation.registerComponent(HOME_SCREEN, () => Home);
Navigation.registerComponent(DETAILS_SCREEN, () => Detail);
export const goToHome = () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: HOME_NAV,
        children: [
          {
            component: {
              name: HOME_SCREEN,
              options: {
                topBar: {
                  visible: false,
                },
                animations: {
                  push: {
                    waitForRender: true,
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
};
