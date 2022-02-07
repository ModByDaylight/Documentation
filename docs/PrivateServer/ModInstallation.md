# Installing Mods

## Prerequisites

- [Private Server](https://github.com/ModByDaylight/PrivateServer/releases)

## Installing Pak Mods

The following steps explain how to to install pak file mods.

1. Download the `.pak` and `.sig` files for the respective mod.
1. Drag and drop the `.pak` and `.sig` files into the `~mods` folder in your game files. (`DeadByDaylight/Content/Paks/~mods`)
1. Launch Dead by Daylight and your mods should be installed.

## Creating Pak Mods

The following steps explain how to create pak file mods.

1. Download and extract the Private Server Setup folder.
1. Run the `PrivateSeverLauncher.bat` and follow the setup steps.
1. Once the setup has been completed, create a new folder named `pakchunkXX-[PlatformName]` inside the UnrealPak folder.

    !!! tip
    
        `[PlatformName]` should be replaced with the naming the platform you are playing on uses, i.e. `WindowsNoEditor` for Steam and `EGS` for Epic Games Store. The "XX" in the pakchunk name should also be replaced with numbers that are not already being used by another pakchunk.

1. Place the `DeadByDaylight` folder of the mod you are installing into this folder.
1. Drag and drop the `pakchunkXX-[PlatformName]` folder onto the `UnrealPak-With-Compression.bat` file. This will pack your files and will automatically move them into the `~mods` folder in your game files. (`DeadByDaylight/Content/Paks/~mods`)
1. Launch Dead by Daylight and your mods should be installed.