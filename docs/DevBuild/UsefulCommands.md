# Useful Commands

!!! note

    This just a small list of handpicked commands and there are many more available. Find more information on the [Console Usage](ConsoleUsage.md) page

| Console Command | Description
| --- | ----------- |
| `DBD_ForceStartMatch` | Forcibly starts the match.
| `DBD_BackToIIS` | Forcibily causes the player to be sent back to the start screen. Can be used if you get stuck in a loading screen.
| `SetBind <key> <command>` | Allow the player to set a key to execute a console command. (Ex: `SetBind v Ghost` will make the `V` Key execute the `Ghost` command when pressed.)
| `DBD_AddAllItemsAddonsOfferingsToInventory <count>` | Gives the selected character all items, add-ons, and offerings in their inventory.
| `DBD_AddCells <count>` | Add Auric Cells (Ex: `DBD_AddCells 100000`)
| `DBD_SpawnItem <item>` | Allows you to spawn any item (Ex: `DBD_SpawnItem Item_Camper_Flashlight` will spawn a yellow flashlight.)
| `DBD_ListDBItems` | Lists the database of item names. Useful for finding arguments for the previous command.
| `DBD_SpawnItemAddon <add-on>` | Allows you to spawn any add-on (Ex: `DBD_SpawnItemAddon Addon_Flashlight_001` will spawn a brown battery.)
| `DBD_ListDBItemAddons` | Lists the database of add-on names. Useful for finding arguments for the previous command.
| `DBD_SpawnPerk <perk> <tier>` | Allows you to spawn any perk (Ex: `DBD_SpawnPerk Bamboozle 3` will spawn Bamboozle Level 3.)
| `DBD_ListDBPerks` | Lists the database of perk names. Useful for finding arguments for the previous command.
| `ToggleDebugCamera`| Toggles the debug freecam. For cinematics it is recommended you go to cinematics instead of using this camera.
| `Ghost` | Activates noclip and flight.
| `Summon <class>` | Summons an object of the specified class. (Ex: `Summon BP_Brl_BigTree_01_C` will spawn a big tree.) You can find classes by going into debug camera, looking at an object, and looking at the name under HitActor Class.
| `Slomo <multiplier>` | Controls speed of the game. 1 is default, higher is faster and lower is slower.
| `ChangeSize <multiplier>` | Changes the players size. 1 is default, 0.5 is half, 2 is 2x size.
| `Fov <fov>` | Changes field of view. 90 is default FOV. 
| `DBD_AllowKilling` | Makes all survivors able to be killed (mori). Only works if the host is killer and does the command.
| `DBD_ComeToMeMyChildren` | Teleports all characters to the player.
| `Exit` | Forcibly closes the game.
| `dbd_setkillerheadvisibility <true|false>` | Fixes issues where the killer appears distorted in freecam. (Ex: `dbd_setkillerheadvisibility true`)
| `DBD_AddHP` | Adds one health state to the survivor.
| `DBD_RemoveHP` | Removes one health state from the survivor.
| `DBD_SpawnCamperByName <name>` | Spawns a survivor by the name you type (Ex: `DBD_SpawnCamperByName Jake`)
| `DBD_SpawnCharacter <id>` | Spawns a killer or survivor. (Ex: `DBD_SpawnCharacter 268435456 false` will spawn The Trapper. Other parameters can be changed, such as outfit selection. A full list of character IDs can be found [here](CharacterIds.md).

!!! note

    Add-on and perk spawn commands stack past the allowed amount, meaning you can have more than 2 add-ons and more than 4 perks. Only the first 2 add-ons and first 4 perks will be visible on the HUD.

| Console Variable | Description
| --- | ----------- |
| `r.dbd.HideAllHUD <0|1>` | Hides all HUD components. (Ex: `r.dbd.HideAllHUD 1` will hide the HUD, `r.dbd.HideAllHUD 0` will show the HUD.)
| `dbd.FlashlightInfiniteEnergy <0|1>` | Toggle if flashlights have infinite energy.
| `DBD.DisableDLCChecks <0|1>` | Disables the DLC checking, just like the command line version, but dynamically.
| `r.PostProcessAAQuality <0..6>` | Defines the postprocess anti aliasing method which allows to adjust for quality or performance. <br>0:off, 1:very low (faster FXAA), 2:low (FXAA), 3:medium (faster TemporalAA), 4:high (default TemporalAA), 5:very high, 6:max.
| `DBD.GenerationSeed <seed>` | The generation seed to use to generate the level. If smaller than 0, the generation seed is considered invalid.
| `dbd.UnlockAllCustomizationItems <0|1>` | Unlock all customization items.
| `dbd.SpawnExposerEnabled <0|1>` | Toggles the spawning of crows.
| `t.MaxFPS <fps>` | Caps FPS to the given value.  Set to <= 0 to be uncapped.