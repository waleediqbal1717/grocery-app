import {Navigation} from 'react-native-navigation';
import Loading from './src/screens/Loading';
Navigation.registerComponent(LOADING_SCREEN, () => Loading);

Navigation.events().registerAppLaunchedListener(() => {
  hydrateStores().then(() => {
    Navigation.setDefaultOptions({
      topBar: {
        background: {
          color: theme.colors.primary,
        },
      },
      layout: {orientation: ['portrait']},
    });

    Navigation.setRoot({
      root: {
        stack: {
          id: AUTH_NAV_ID,
          children: [
            {
              component: {
                name: LOADING_SCREEN,
                options: {
                  topBar: {
                    visible: false,
                  },
                },
              },
            },
          ],
        },
      },
    });
  });
});
import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'mobx-persist';
import {productManager} from './src/managers';
import {AUTH_NAV_ID, LOADING_SCREEN} from './src/navigation';
import theme from './src/theme';
async function hydrateStores() {
  const hydrate = create({storage: AsyncStorage});
  // await hydrate('ProductStore', productManager);
}
