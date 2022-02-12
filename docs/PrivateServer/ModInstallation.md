# Installing Mods

## Prerequisites

- [Private Server](https://github.com/ModByDaylight/PrivateServer/releases)

## Creating Pak Mods

Download the Private Server folder from the releases page on GitHub. Unzip `PrivateServer.zip` to get the necessary files.

Run the `PrivateSeverLauncher.bat` and follow the setup steps. Once the setup has been completed, create a new folder named `pakchunkXX-[PlatformName]` inside the UnrealPak folder.

!!! tip

    `[PlatformName]` should be replaced with the naming the platform you are playing on uses, i.e. `WindowsNoEditor` for Steam and `EGS` for Epic Games Store. The "XX" in the pakchunk name should also be replaced with numbers that are not already being used by another pakchunk.

Place the `DeadByDaylight` folder of the unpackaged mod you are installing into this folder. If you already have the `.pak` and `.sig` files for the mod you are installing, you can skip to the [Installing Pak Mods](#installing-pak-mods) section. 

Drag and drop the `pakchunkXX-[PlatformName]` folder onto the `UnrealPak-With-Compression.bat` file. This will pack your files and will automatically move them into the `~mods` folder in your game files. (`DeadByDaylight/Content/Paks/~mods`)

### Installing Pak Mods

Download the `.pak` and `.sig` files for the respective mod drag and drop them into the `~mods` folder in your game files. (`DeadByDaylight/Content/Paks/~mods`)

!!! success

    Now that you've packaged the assets into a pak file, Dead by Daylight should launch with your mods enabled.
