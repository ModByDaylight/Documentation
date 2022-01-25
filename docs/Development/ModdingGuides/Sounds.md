# Custom Sounds Guide

This guide will show you how to replace sounds Dead By Daylight.

## Prerequisites

- [Wwise Launcher](https://www.audiokinetic.com/download/) - Creating .wem files from audio files
- [DBD Unpacker](https://github.com/BrandonItaly/DBDUnpacker/releases/latest) - Unpacking audio files
- [BnkEditor](https://cdn.discordapp.com/attachments/844107725092290600/846589986857811968/BnkEditor.exe) - Replacing .wem files in .bnk files

*Additional Resources*

- [DBDSounds](https://github.com/Masusder/DBDSounds) - Collection of all in-game audio in the .wav audio format
- [WAV Converter](https://audio.online-convert.com/convert-to-wav) - Converting audio files to the Waveform Audio File Format

## Creating a Wwise Project

1. Open the Wwise Launcher and select the Wwise tab.
1. Install the latest version of Wwise under Install New Version. A window will appear asking you to select which Packages and Deployment Platforms you'd like to install. Leave all settings as default and press Install. 
1. Launch Wwise under Versions Installed. Create a new project by pressing New and give a title to the project. Under Import factory assets to project click Select None and press OK. 
1. Navigate to `Project` → `Project Settings...` → `Source Settings` → `Default Conversion Settings` and click on the three dots. Select Vorbis Quality High and press OK.

    ![](https://images-ext-1.discordapp.net/external/IYAFs5jubGFxID_ZaX3J7huHWfsMFzifTO1HM6YjTCY/https/media.discordapp.net/attachments/834873477500371004/844330346953965568/unknown.png)

## Importing and Exporting Audio

1. To import your audio file(s), navigate to `Project` → `Import Audio Files...` → `Add Files`, select your audio file and press Import. These audio files must be in the .wav audio format.
1. To export your audio file(s), navigate to `Project` → `Convert All Audio Files...` and press convert. This will convert all of your .wav audio files into .wem files.
1. To find your exported audio, navigate to `Project` → `File Manager...`, right click on Project Folder, and click on Open Containing Folder.

    ![](https://images-ext-2.discordapp.net/external/-hYFfeByABK4sk6JZIRK2hNi1qG5Nzb5BI1L-hcFEyI/https/media.discordapp.net/attachments/834873477500371004/844330383549923328/unknown.png)

1. A new window will be opened in File Explorer. Inside the folder, navigate to `.cache/Windows/SFX`. This is where your exported .wem files are located.

    ![](https://media.discordapp.net/attachments/917649484450775061/920230526374273054/unknown.png)

## Finding and Replacing Audio (.wem files)

1. Download and extract the latest release of the [DBD Unpacker](https://github.com/BrandonItaly/DBDUnpacker/releases/latest) from GitHub.
1. Open `DBDUnpacker.bat` and enter your Dead by Daylight game path.
1. Select `Unpack Single Pak` then enter the number 2. This will unpack the `pakchunk2-[PlatformName].pak` file which contains all of the audio files.
1. Navigate to the unpacked audio folder. (`[PlatformName]/Content/WwiseAudio/Windows`)

    ![](https://media.discordapp.net/attachments/917649484450775061/920231475155193856/unknown.png)

1. Navigate to the file called `SoundbanksInfo.xml` and open it in any text editor.
1. Use ++ctrl+f++ to easily search for the name of the audio file you want to replace. For example, you would search for `lobby_survivor` if you wanted to replace the Survivor Lobby Music.
    ```xml title="SoundbanksInfo.xml"
    <File Id="933117239" Language="SFX">
       <ShortName>Music\mu_menu_lobby_survivor.wav</ShortName>
       <Path>SFX\Music\mu_menu_lobby_survivor_0BC91DCF.wem</Path>
    </File>
    ```
1. Copy the File Id of the sound and search for it in the Dead By Daylight audio folder.

    ![](https://media.discordapp.net/attachments/917649484450775061/920231741136969768/unknown.png)

1. Rename your exported .wem file from Wwise to the File Id you searched in the audio folder.

    ![](https://media.discordapp.net/attachments/917649484450775061/920232046754951168/unknown.png)

1. Place the .wem file in the same path as the original and package as usual.

## Finding and Replacing Audio (.bnk files)

1. Download and extract the latest release of the [DBD Unpacker](https://github.com/BrandonItaly/DBDUnpacker/releases/latest) from GitHub.
1. Open `DBDUnpacker.bat` and enter your Dead by Daylight game path.
1. Select `Unpack Single Pak` then enter the number 2. This will unpack the `pakchunk2-[PlatformName].pak` file which contains all of the audio files.
1. Navigate to the unpacked audio folder. (`[PlatformName]/Content/WwiseAudio/Windows`)
1. Drag and drop the .bnk file you want to edit into RExplorer. A list of all containing .wem files will be previewed.

    ![](https://media.discordapp.net/attachments/834873477500371004/844330623333957632/unknown.png)
    
    Clicking on a .wem file in RExplorer will play a preview of the audio. The length of the audio file will be displayed at the bottom of the preview.

1. Find the File Id of the .wem file you would like to replace.
1. Now open BnkEditor and drag and drop the .bnk file you want to edit and press Enter.
1. Drag and drop the .wem file you want to replace with the audio you previewed in RExplorer and press Enter.
1. Search for the File Id of the .wem file you previewed in RExplorer in the list of .wem files in BnkEditor.
1. Enter the index of the .wem file you want to replace. A list of indexes and File IDs will be shown in the console.
1. Your edited .bnk file will be exported where the program's executable file is located.
1. Place the .bnk file in the same path as the original and package as usual.