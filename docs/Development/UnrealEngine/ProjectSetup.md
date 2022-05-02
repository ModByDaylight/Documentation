# Project Setup

This page will guide you through setting up the template project for Dead By Daylight.

## Prerequisites

- [Dead By Daylight Project](https://github.com/ModByDaylight/DeadByDaylightProject)
- [Unreal Engine](https://www.unrealengine.com/en-US/download) (4.27.2)
- [Visual Studio](https://visualstudio.microsoft.com/)

## Template Project

Download the Dead By Daylight Template Project from GitHub by navigating to `Code` → `Download ZIP`. Unzip `DeadByDaylightProject-master.zip` to get the Template Project files.

This will be the folder that all of your mod's files will be put into, so extract the folder somewhere convenient so you can find it later, such as your Documents folder. Of note - keep the file path as short as possible. When packing Unreal projects, some filenames can get long, so a very nested location may cause issues.

## Generate Visual Studio Files

Next, you'll need to generate the remaining files for the project with Unreal Engine's "Generate Visual Studio Project Files" tool.

To do this, right-click on the `.uproject` file and select `Generate Visual Studio project files`.

## Project Compilation

Next up is compiling the project from Visual Studio. It is possible for Unreal to compile the project as well on launch, but if there is an error, Unreal will give a very vague report as to what went wrong. As such, it's best just to always compile from Visual Studio so you don't have to build a second time to see the error report.

Open up the the .sln file in your project folder. Once Visual Studio loads, make sure that you have `Development Editor` and `Win64` selected in the top toolbar. On the right side in Solution Explorer, right click on the `DeadByDaylight` project and hit Build. This will take some time. You can monitor its progress from the Output log window if desired.

If you encounter issues during this step, consider asking for help on the Discord.

!!! success

    Now that you've built the binaries, the Editor should open without any issues.