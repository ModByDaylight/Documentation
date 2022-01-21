# Dev Build Server Setup

## Prerequisites

- [Developer Build (3.0.0)](https://www.mediafire.com/file/w0flhwditpyt4wy/DevBuild.zip/file)
- [DBD Dev Server](https://github.com/Preston159/dbd-server/releases)

## Instructions

1. Open Notepad as Administrator and open `C:\Windows\system32\drivers\etc\hosts`. Add these three lines to the bottom of the file and save.
```
127.0.0.1   latest.dev.dbd.bhvronline.com
127.0.0.1   cdn.dev.dbd.bhvronline.com
0.0.0.0     analytic.live.dbd.bhvronline.com
```
If you're having trouble with this step, check out [this guide](https://www.howtogeek.com/howto/27350/beginner-geek-how-to-edit-your-hosts-file/).

1. Navigate to your dev build game files and find `DeadByDaylight/Config/DefaultEngine.ini`. Add these lines to the end.
(This step can be skipped if you downloaded the dev build from the [Developer Build](../index.md) page, as this modification is already included)
```ini
[/Script/Engine.NetworkSettings]
n.VerifyPeer=false
```
1. Download and install [NodeJS 14.x.x](https://nodejs.org/en/).
1. Download and extract the latest release of the [server](https://github.com/Preston159/dbd-server/releases) using the "Source code (zip)" link.
![](/img/screenshots/DevBuild/dev-server-release.png)
1. Navigate to the folder where you extracted the server files and run `setup.bat`. You should see an output like this:
![](/img/screenshots/DevBuild/dev-server-setup.bat.png)
1. Run `run.bat` to start the server. You should see an output like this:
![](/img/screenshots/DevBuild/dev-server-run.bat.png)
1. You should be done, so start your game! Repeat step 6 each time you want to start the server.

## Common Errors

`EACCES` or `EADDRINUSE`: Something on your system is using port 80 or port 443, both of which are necessary for the server to function. To find out what, run PowerShell as Administrator and run `Get-Process -Id (Get-NetTCPConnection -LocalPort 80).OwningProcess` (replacing 80 with 443 if necessary). `EACCES` can also be caused by not having permission to access the necessary ports on Linux.

## Tinkering

Many of the server's settings can be changed by modifying the HJSON configuration files in the settings folder. These settings include the amount of starting bloodpoints, default player level/devotion, whitelist, and which event is active (if any). Instructions can be found [here](Config.md).

## Bugs and Feature Requests

If you find a bug or missing feature, feel free to create an issue https://github.com/Preston159/dbd-server/issues[here]. +
Please be sure to include as much information as possible, especially when concerning bugs.