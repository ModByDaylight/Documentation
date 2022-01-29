# Cinematics

## How to get in game cinematics

There are a few methods of doing this.

1. After loading into a match, press ++single-quote++ and ++tab++ to enter into freecam mode. This will leave you with a menu top left so it is not the cleanest. 

    ![](https://cdn.discordapp.com/attachments/798181143596892161/798184755576832060/unknown.png)

2. After loading into a match, press your console key (default should be ++f10++) and type the command `toggledebugcamera`. This will bring you into a freecam mode but there is still an overlay. You can remove this overlay by hitting ++backspace++.

    ![](https://media.discordapp.net/attachments/798181143596892161/798185512317878323/unknown.png)
    
    ![](https://cdn.discordapp.com/attachments/798181143596892161/798186552371052554/unknown.png)

3. Download the program [Universal Unreal Unlocker](https://framedsc.github.io/GeneralGuides/universal_ue4_consoleunlocker.htm). Once downloaded, run the program and select `Dead By Daylight` and inject the dll.

    ![](https://media.discordapp.net/attachments/798181143596892161/798186997038186506/unknown.png)
    
    ![](https://cdn.discordapp.com/attachments/798181143596892161/798187093355397120/unknown.png)
    
    ![](https://cdn.discordapp.com/attachments/798181143596892161/798187132439101440/unknown.png)

    It should look like this if all goes well.
    
    ![](https://cdn.discordapp.com/attachments/798181143596892161/798187308536168478/unknown.png)
    
    You can set key bindings for all the different things here.
    
    ![](https://cdn.discordapp.com/attachments/798181143596892161/798188095115362354/unknown.png)
    
    To enter camera mode press whichever key you have this set to while in game. This camera also works in the lobby and other places the 2 previous methods don't.
    
    ![](https://cdn.discordapp.com/attachments/798181143596892161/798188529103798272/unknown.png)
    
    ![](https://cdn.discordapp.com/attachments/798181143596892161/798188849448353852/unknown.png)
    
    Read through and play around with all the options you now have available.

### Other useful things for cinematics

In debug camera you can use the scroll wheel to change speeds.

Commands:

`Fov` (enter number from 0-180).

`Slomo` (0 freezes all movement in the game, 1 is regular speed, 2 is double speed etc).

### Remove HUD while in the lobby

`DBD_ContextSystemRequestTransition 0 14 0`
<br>(You will need to restart your game after using this.)