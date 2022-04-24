# Emission Maps Guide

This guide will show you how to change the values of emission maps, such as the color and position.

## Prerequisites

- [UE Viewer](https://www.gildor.org/en/projects/umodel)
- [HxD](https://mh-nexus.de/en/hxd/)

## How to change the color of EM Maps

1. Open your Dead By Daylight folder in UE Viewer.

    ![](https://cdn.discordapp.com/attachments/756720238967390312/967661168346935366/unknown.png)

2. Find a material with an EM map and export it with ++ctrl+x++.
3. Find the exported material and open the `props.txt` file. You can find where it exported in UE Viewer by going to `Tools` → `Open export folder`.

    ![](https://images-ext-1.discordapp.net/external/wL-IQOvWwgF45izD7s5F6b3utOfQwoYrdTJubwTwEaI/https/media.discordapp.net/attachments/797628786530713621/797634032007381062/unknown.png)

4. Find the EM color values.
    ```
    R = Red
    G = Green
    B = Blue
    A = Alpha (0 = Transparent, 1 = Opaque)
    ```

    ![](https://media.discordapp.net/attachments/797628786530713621/797634255404269578/unknown.png)

5. [Pick the color](https://htmlcolorcodes.com/color-picker/) you want your EM Color to be.
6. Take each value and divide them by 255. (Ex: This would be 0, 0.09803921568, 1)

    ![](https://images-ext-1.discordapp.net/external/3AstwqrnNkvslWhTcI_WK7itjuxwU0ltnD4M835ajF8/https/media.discordapp.net/attachments/797628786530713621/797635848623357972/color.jpg)

7. Open HxD
8. Drag in the original .uexp file. 

    You should now be here.

    ![](https://images-ext-1.discordapp.net/external/bMPKLPVzDT59TRpW9PFpqVZfnqWmByL1W9zjJN9kcYc/https/media.discordapp.net/attachments/797628786530713621/797639662129905674/unknown.png)

9. Go back to the `props.txt` file and use ++ctrl+f++ for the most unique value. For example, my original values in `props.txt` are 1, 0.552359, 0.212663, and 1

    I shouldn't search for 1 because it is a generic number which will have multiple results. Instead search for the more specific numbers because they will only appear one time.

    ![](https://images-ext-1.discordapp.net/external/l7WthovwDL3yzDeCnvcr9uakH422ViJtdswAPwVqo08/https/media.discordapp.net/attachments/797628786530713621/797641092878303252/unknown.png)

    It should look something like this after searching. (It won't be exactly the same)

    ![](https://images-ext-2.discordapp.net/external/EfV5u15UUy3ehWTlxEeJHHHlhdiZEC6IQwLfUn5pNXo/https/media.discordapp.net/attachments/797628786530713621/797641415516880896/unknown.png)

10. Select up a couple lines from where you are highlighted.

    ![](https://images-ext-1.discordapp.net/external/LeQyxcj3CTuN1_OGLikBdMOTH98PfELPRBT5OMBoNME/https/media.discordapp.net/attachments/797628786530713621/797642241904082964/Hnet-image.gif)

11. ++ctrl+f++ and search for the original red value. Make sure you search forward.

    ![](https://images-ext-1.discordapp.net/external/cLcgtRY01iZO9UMkBhKsVosbvjwkUs276rIKiRnX3kc/https/media.discordapp.net/attachments/797628786530713621/797642609731960882/unknown.png)

12. When it is selected in blue, select the original value and change it to the red value you got earlier.
In my case, I am changing the Single (float32) at the right from a 1 to a 0.

    ![](https://images-ext-1.discordapp.net/external/xpKyGtXeE2QS4NFh3tZQgOReDM6zUQNC0gbwYsytLoY/https/media.discordapp.net/attachments/797628786530713621/797643454112595999/unknown.png)

13. ++ctrl+f++ for the next value (blue) and repeat the above steps. Make sure to select forward. You do not need to go up any lines, keep your selection where it is.
14. `File` → `Save`.
Your uasset is now edited with custom EM color values, a backup of the original uasset is automatically created as the .bak file. Just remove the .bak file ending to bring back the original.

    ![](https://images-ext-2.discordapp.net/external/OyhwolHWHYom6zBju6PYbDGrKOTIKLq1dJk6VJ4X70Q/%3Fwidth%3D786%26height%3D779/https/media.discordapp.net/attachments/797628786530713621/797646327818223616/unknown.png)

EM Intensity can be changed in pretty much the same way, this will change the Intensity of the brightness.

## How to change the position of EM Maps

1. Open your Dead By Daylight folder in UE Viewer.

    ![](https://images-ext-2.discordapp.net/external/aHO1nQ_Mz4-lg48MPivnC5yDjQMqIMH7zccCU9q3kbQ/https/media.discordapp.net/attachments/833812099263627335/833852232449261578/unknown.png)

2. Find the BDE texture of an EM map you want to change the positioning of. Open the texture and export it with ++ctrl+x++. Keep default settings.

    ![](https://images-ext-1.discordapp.net/external/nc-rKHShhCVvNIXDkrO6VvEjdmUj6UB4Ed-saZXMbLM/https/media.discordapp.net/attachments/797628786530713621/797649544213037106/unknown.png)

3. Find the exported texture and open it in your photo editing software of choice (Paint.net, Gimp, and Photoshop all work well.) You can find where it exported in UE Viewer by going to `Tools` → `Open export folder`.
4. Edit the texture with a side-by-side view of the original for comparison on where to paint.

    ![](https://images-ext-2.discordapp.net/external/J-g_KPyoaZSUIu2hgVYZgyWzO2LZtYhl3QefPWGN3NQ/https/media.discordapp.net/attachments/797628786530713621/797658686205460520/unknown.png)

    Ignore green, its a bug when exporting with UE Viewer. The brightness of the blue and where you place it determines how the legacy will look. If you paint with blue at max brightness it will be the most bright, if you paint with half it will be half, etc.

Here is an example of a custom BDE by @vic<3#1848 on Discord.

![](https://media.discordapp.net/attachments/797660510287691786/797826177154285578/legacyBDE.png?width=700&height=700)

Continue in the [Custom Textures Guide](../Textures/#editing-cooking).

!!! success "Congrats!"
    
    ![](https://media.discordapp.net/attachments/788081160328183858/797910592035225600/unknown.png?width=410&height=700){ align=left }
    
    The same can be done for changing the flashlight beam color by editing `MI_FlashLightBeam_01` and `MI_FlashLightBeam_02`. (`Content/Effects/Materials`)