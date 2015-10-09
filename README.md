Getting Started

    $ mfp cordova create myapp -p android -t mfp-vs-templates

To use in Visual Studio 2015 open CordovaApp.sln or CordovaApp.jsproj

use ios platform on a Mac/OSX
use android platfowm on Mac/OSX, Windows, or Linux

Known Issues:
- Ripple doesn't work with MFP APIs, wlCommonInit doesn't runs, WL.* not available
Use `$mfp preview` to run app in Browser with MBS or Simple Preview
- Running iOS from VS2015 to remote Mac/OSX not supportted it gives build errors, incompatible cordova-ios
Use `$mfp cordova emulate|run -p ios` 

