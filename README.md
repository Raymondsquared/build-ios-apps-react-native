# build-ios-apps-react-native

## Init
* react-native init GitHubBrowser

## To run your app on iOS:

* Port Number 8088:

    * inside package.json:

        ``` "start": "node node_modules/react-native/local-cli/cli.js start --port 8088"```
	
    *	In Project navigator(left) [ProjectName] / Libraries:

        Click “React.xcodeproj”. On main panel, click “Build Phases” tag. Expand “Run Script” , delete it with the cross. Update 8081 to 8088

    * In Project navigator(left) [ProjectName] / Libraries / RCTWebSocket.xcodeproj / 
    RCTWebSocketExecutor.m :
    
        Search 8081 and replace it with 8088 


    * In Project navigator(left) [ProjectName] / Libraries / React.xcodeproj / React / Base
    RCTBundleURLProvider.m :
    
        Search 8081 and replace it with 8088 

    * In Project navigator(left) [ProjectName] / Libraries / React.xcodeproj / React / Modules
    RCTDevSettings.m :
    
        Search 8081 and replace it with 8088 

    * Run Package server :
    ``` yarn start ```   

* cd /Users/rraymond/development/build-ios-apps-react-native/GitHubBrowser

    * react-native run-ios

 * Open ios/GitHubBrowser.xcodeproj in Xcode

    * Hit the Run button

## To run your app on Android:

* cd /Users/rraymond/development/build-ios-apps-react-native/GitHubBrowser

* Have an Android emulator running (quickest way to get started), or a device connected

* react-native run-android
