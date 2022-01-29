# Developer Build Setup (Fiddler)

!!! note

    Setting up Fiddler is not necessary if you use the server from [Server Setup](Server/Setup.md) and vice versa.

!!! warning

    Game data is still sent to BHVR using this method.


## Prerequisites

- [Developer Build (3.0.0)](https://www.mediafire.com/file/w0flhwditpyt4wy/DevBuild.zip/file)
- [Fiddler](https://www.telerik.com/download/fiddler)

## Instructions

1. Download and extract the dev build folder.
1. Download and install Fiddler.
1. In Fiddler, go to `Tools` → `Options` → `HTTPS`.
1. Check the boxes "Capture HTTPS CONNECTs", "Decrypt HTTPS traffic", and "Ignore server certificate errors".

    ![](/img/screenshots/DevBuild/fiddler-options.png)

1. Click to the pop-up asking to trust Fiddler's certificate.
1. Open the Fiddler script editor by going to `Rules` → `Customize Rules`.
1. Replace everything in the file with the contents of [this paste](https://pastebin.com/6HbtkGam) and save.
1. Launch the dev build by double-clicking one of the .bat files in the dev build root folder. Always keep Fiddler open when running the dev build.

!!! note

    You need to be logged into a Steam account which owns Dead by Daylight for the developer build to work with Steam. A banned account will not work.

If doing all these steps in Fiddler takes your internet away, go to Windows Proxy settings and uncheck "Use a proxy server".