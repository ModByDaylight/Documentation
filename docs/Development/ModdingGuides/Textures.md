# Custom Textures Guide

This guide will show you how to replace textures in Dead By Daylight.

## Prerequisites

- [UE Viewer](https://www.gildor.org/en/projects/umodel)
- [Unreal Engine](https://www.unrealengine.com/en-US/download)
- Image editor (Photoshop, GIMP, paint.net, etc)

## Exporting from Dead By Daylight

1. Open UE Viewer.
2. Set the path to game files as the base of your Dead By Daylight files.
3. Check override game detection and select Unreal engine 4.25.
4. Leave all other settings at default and select OK.

    ![](https://images-ext-2.discordapp.net/external/aHO1nQ_Mz4-lg48MPivnC5yDjQMqIMH7zccCU9q3kbQ/https/media.discordapp.net/attachments/833812099263627335/833852232449261578/unknown.png)
    
    UE Viewer will now attempt to open all DBD game files, this process can take anywhere from a couple seconds to a couple minutes. If it takes exceedingly long (>10 minutes) recheck all settings are correct and try again.

5. Find the texture you want to edit and export it with ++ctrl+x++.
6. Set where you would like the image to be saved and press OK.

    ![](https://images-ext-1.discordapp.net/external/Njqw0KE-y4jVbASzsiWu9sGJtJ5jtaP9flqAtNkHM9k/https/media.discordapp.net/attachments/833812099263627335/833852336866459698/unknown.png)

## Editing & Cooking

1. Open your TGA texture in your image editor of choice.

    ![](https://images-ext-1.discordapp.net/external/9okCbExRcZbLUlkz12CdY24TLJPK4z6BmNEiHXlVqWU/%3Fwidth%3D1668%26height%3D905/https/media.discordapp.net/attachments/833812099263627335/833852416339607563/unknown.png)

2. Edit it to your heart's content!

    ![](https://images-ext-1.discordapp.net/external/sKBqY21L7CvA3sTR8lT2Kn1lV5NrxAl1xgSmI5dTg-w/%3Fwidth%3D1664%26height%3D905/https/media.discordapp.net/attachments/833812099263627335/833852482941354014/unknown.png)

3. When you're finished, save as a .PNG with lossless compression. This will give you the best possible quality with transparency, although most file formats can be used in Unreal Engine, so dont feel forced to use .PNG
4. Open Unreal Engine.
5. Create a new project with no starter content.

    ![](https://images-ext-1.discordapp.net/external/l7D9tXQH9OJ2kEF06DeK8aTD5Bys1TgseZRvV9y0tkQ/https/media.discordapp.net/attachments/833812099263627335/833852636394160168/unknown.png)
    ![](https://images-ext-2.discordapp.net/external/fZGp9bPvThRqrMVzAi6wLYX7J4cAwagKhdZLGCutfYQ/https/media.discordapp.net/attachments/833812099263627335/833852648997781554/unknown.png)
    ![](https://images-ext-2.discordapp.net/external/xp23F1kwBstKt2WVlHhPgFeeJ8ibHo-AQmWzS2I_l1M/https/media.discordapp.net/attachments/833812099263627335/833852657814470736/unknown.png)

6. Go to `Edit` → `Project Settings` → `Packaging` and make sure "Use pak file" is unchecked.
7. Now that all project set up is done, you are going to recreate the file structure of the texture you are editing in Unreal Engine. For example, if I am editing Nea's Cropped Hoodie, I would make several folders in Unreal Engine, starting from a folder named `Characters`, then `Campers`, `Nea`, `Textures`, `Outfit009`.
8. Drag your edited image into the folder you just made, so I would drag my image into `Outfit009`.

    ![](https://images-ext-1.discordapp.net/external/db3V-f3Hn059JNeHz8BTo3UL_Nmt8Rpka0FPKwVf7F8/https/media.discordapp.net/attachments/833812099263627335/833852869043290153/unknown.png)
    ![](https://images-ext-1.discordapp.net/external/tTtOW2qvefgUKmyihz2Zv2j7css1JdQyCute1zLJ0vk/https/media.discordapp.net/attachments/833812099263627335/833853067723800586/Hnet-image_1.gif)

9. Name the image the exact same as the original file, for example the texture im replacing is called `T_NKTorso009_BC`, so after importing my image I would make sure it is named `T_NKTorso009_BC` in Unreal Engine.
10. Save all and select `File` → `Cook Content for Windows`.

Your file should now be cooking, this can take anywhere from a couple seconds to minutes, it typically takes longer the first time you cook.

## Importing into DBD

1. Find where your Unreal Engine project is saved in File Explorer. If you dont know where it is saved, you can find it in `Settings` → `Project Settings` → `Packaging` under "Staging Directory".

    ![](https://images-ext-1.discordapp.net/external/beIqlhChCrAprzE9dLFZD0uQm66c2hpIj82wwvvBRfE/https/media.discordapp.net/attachments/833812099263627335/833853416643362836/unknown.png)

2. Go to your project's `Saved\Cooked\WindowsNoEditor` folder.
3. You should now see a folder with the name of your project. Open that folder, and now follow the directory to where you saved your texture.
For example, mine would be `Content\Characters\Campers\Nea\Textures\Outfit009`.
4. Copy the texture you cooked in that path. Preferably save it somewhere and make it easy to know what it is and where it should go.

    ![](https://images-ext-1.discordapp.net/external/y4GRIeCnHIvaz5qqeVeyJd0tOq03Ms-odld4qAJsR6E/https/media.discordapp.net/attachments/833812099263627335/833853498093338645/unknown.png)

5. Place the texture in the same path as the original and package as usual.

*[DBD]: Dead by Daylight