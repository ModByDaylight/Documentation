# Installing Mods

*Prerequisites*

- [UnrealPak Script](https://cdn.discordapp.com/attachments/838158112749781000/929249085154803802/UnrealPak.zip)

## Custom Pak Mods

The following steps explain how to create pak files which can be used to install any mod without unpacking your game files.

1. Download and extract the UnrealPak Script.
2. Double click `gamepath.txt` and enter your Dead By Daylight game path.
3. Create a new folder named `pakchunk40-WindowsNoEditor` inside the UnrealPak folder.

!!! tip

    The number in the `pakchunk40-WindowsNoEditor` folder name should be increased by one each time you install a new mod. Text can also be placed after the number in the pak file name. This should be done to avoid conflicting Paks.

4. Place the DeadByDaylight folder of the mod you downloaded into this folder.
5. Drag and drop the `pakchunk40-WindowsNoEditor` folder onto the `UnrealPak-With-Compression.bat` file. This will pack your files and will automatically move them into the Paks folder in your game files. (`DeadByDaylight/Content/Paks`)
6. Launch Dead By Daylight and your mods will be installed.