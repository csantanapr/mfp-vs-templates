##  Experimental mfp templates for cordova apps with Visual Studio 2015


### *Warning: Use at your own risk, this is an experiment*

Getting Started

    $ mfp cordova create myapp -p android -t mfp-vs-templates

To use in Visual Studio 2015 open CordovaApp.sln or CordovaApp.jsproj

use ios platform on a Mac/OSX
use android platfowm on Mac/OSX, Windows, or Linux

Only add plugins using the `$ mfp cordova plugin add <pluginID>`
This will add the plugins compatible with mfp version of ios and andorid platforms

## Video Demo

[![Cordova Browser-Sync Plugin demo video](http://img.youtube.com/vi/JxY6un1hOg4/0.jpg)](http://www.youtube.com/watch?v=JxY6un1hOg4)


Visual Studio limitations:
- Ripple doesn't work with MFP APIs, wlCommonInit doesn't runs, WL.* not available
Use `$ mfp preview` to run app in Browser with MBS or Simple Preview
- Running iOS from VS2015 to remote Mac/OSX not supportted it gives build errors, incompatible cordova-ios
Use `$ mfp cordova emulate|run -p ios` 

