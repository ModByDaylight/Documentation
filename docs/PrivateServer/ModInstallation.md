# Installing Mods

## Prerequisites

- [UnrealPak Script](https://cdn.discordapp.com/attachments/838158112749781000/929249085154803802/UnrealPak.zip)

## Creating Pak Mods

The following steps explain how to create pak files which can be used to install any mod without unpacking your game files.

1. Download and extract the UnrealPak Script.
1. Double click `gamepath.txt` and enter your Dead By Daylight game path.
1. Create a new folder named `pakchunk41-WindowsNoEditor` inside the UnrealPak folder.
1. Place the DeadByDaylight folder of the mod you downloaded into this folder.
1. Drag and drop the `pakchunk41-WindowsNoEditor` folder onto the `UnrealPak-With-Compression.bat` file. This will pack your files and will automatically move them into the `Paks` folder in your game files. (`DeadByDaylight/Content/Paks`)
1. Launch Dead By Daylight and your mods should be installed.

!!! tip

    The number in the pakchunk name should be increased by one each time you install a new mod. Text can also be placed after the number in the pak file name. This should be done to avoid conflicting Paks.

## Installing Pak Mods

The following steps explain how to to install pak file mods.

1. Download the `.pak` and `.sig` files for the respective mod.
1. Drag and drop the `.pak` and `.sig` files into the `~mods` folder in your game files. (`DeadByDaylight/Content/Paks/~mods`)
1. Launch Dead By Daylight and your mods should be installed.