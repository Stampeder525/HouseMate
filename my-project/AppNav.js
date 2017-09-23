
import { StackNavigator } from 'react-navigation';
import App from './App.js';
import SignUpProfile from './SignUpProfile.js';
import SignUpBanking from './SignUpBanking.js';
import SignUpNotifs from './SignUpNotifs.js';
import ConfigWheel from './ConfigWheel.js';

const AppNav = StackNavigator({
    App: { screen: App },
  Profile: { screen: SignUpProfile },
  Banking: { screen: SignUpBanking },
  Notifications: { screen: SignUpNotifs },
  ConfigWheel: { screen: ConfigWheel }
});

export default AppNav;
