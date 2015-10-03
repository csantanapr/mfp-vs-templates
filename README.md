Getting Started

    $ mfp cordova create myapp -p ios,android -t mfp-vs-templates

only use ios platform from Mac

TODOS:
- implement after_platform_add
move buil.js and run.js to platform/android/cordova/lib/

Known Issues:
- Ripple doesn't work with MFP APIs, wlCommonInit doesn't runs, WL.* not available
Use `$mfp preview` to run app in Browser with MBS or Simple Preview
- Running iOS from VS2015 to remote Mac not supportted build errors, incompatible cordova-ios
Use `$mfp emulate|run` from terminal on a Mac, use Windows only for Android development
- VS Emulator with Lolipop doesn't work, use VS Emulator Kitkat (4.4)
Use `$mfp emulate |run` after starting any VM Emulator manually
