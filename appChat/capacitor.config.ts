import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'appChat',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins:{
    SplashScreen:{
      lauchnAutoHide:false,
    },
    LocalNotifications:{
      smallIcon: 'ic_stat_android',
      iconColor:'#FF0000',
    },
    PushNotifications:{
      presentationOption:['alert','sound'],
    }
  }
};

export default config;
