#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var os = require('os');

if (/android/i.test(process.env.CORDOVA_PLATFORMS)) {
  var android_build_fix = path.resolve(__dirname, 'android_fix/build.js');
  var android_build = path.resolve(__dirname, '../../', 'platforms/android/cordova/lib/build.js');

  copyFileSync(android_build_fix, android_build);

  var android_run_fix = path.resolve(__dirname, 'android_fix/run.js');
  var android_run = path.resolve(__dirname, '../../', 'platforms/android/cordova/lib/run.js');

  copyFileSync(android_run_fix, android_run);

}


// Buffered file copy, synchronous
// (Using readFileSync() + writeFileSync() could easily cause a memory overflow
//  with large files)
function copyFileSync(srcFile, destFile) {
  if (!fs.existsSync(srcFile))
    console.error('copyFileSync: no such file or directory: ' + srcFile);

  var BUF_LENGTH = 64 * 1024,
    buf = new Buffer(BUF_LENGTH),
    bytesRead = BUF_LENGTH,
    pos = 0,
    fdr = null,
    fdw = null;

  try {
    fdr = fs.openSync(srcFile, 'r');
  } catch (e) {
    console.error('copyFileSync: could not read src file (' + srcFile + ')');
  }

  try {
    fdw = fs.openSync(destFile, 'w');
  } catch (e) {
    console.error('copyFileSync: could not write to dest file (code=' + e.code + '):' + destFile);
  }

  while (bytesRead === BUF_LENGTH) {
    bytesRead = fs.readSync(fdr, buf, 0, BUF_LENGTH, pos);
    fs.writeSync(fdw, buf, 0, bytesRead);
    pos += bytesRead;
  }

  fs.closeSync(fdr);
  fs.closeSync(fdw);

  fs.chmodSync(destFile, fs.statSync(srcFile).mode);
}