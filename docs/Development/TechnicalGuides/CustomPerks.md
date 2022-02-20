# Custom Perks Guide

This guide will show you how you can add your own perks with the use of data tables and blueprints.

## Prerequisites

- [Project Setup](../../../Development/UnrealEngine/ProjectSetup.md)

## Perk Data Table

1. Navigate to `Content/Data/Dlc` (or any subdirectory of `Data/Dlc` of your choosing, you can even create new directories) and right click to create a new data table asset.

    ![](https://media.discordapp.net/attachments/917649484450775061/934189728885010512/unknown.png)

2. Select "Perk Properties" as the Row Structure.

    ![](https://media.discordapp.net/attachments/917649484450775061/934188590706073650/unknown.png)

3. Now rename the data table asset to "PerkDB".
4. Click on “Add” to add a new row to the data table.

    ![](https://media.discordapp.net/attachments/917649484450775061/934189035033874552/unknown.png)

5. Double click on the row name to change it to a custom item ID. It can be anything, but make sure to try and use a unique name, so no two perks or mods overlap.

    ![](https://media.discordapp.net/attachments/917649484450775061/934208872829288488/unknown.png)

6. Start filling out the fields under the "Perk Properties" category.

    | Property | Value
    | --- | ----------- |
    | `Tags` | Survivor / Killer depending on if the perk is for a killer or a survivor.
    | `Associated Player Index` | -1
    | `Mandatory on Bloodweblevel` | -1
    | `Teachable on Bloodweblevel` | -1
    | `Atlanta Teachable Level` | -1
    | `Perk Category` | Select an appropriate category
    | `Perk Blueprint` | Your perk's blueprint. (You haven't created this yet)
    | `Perk Level Rarity` | Your perk's rarity for each level
    | `Perk Level Tunables` | Allows changing perk description based on the perk level. Entries in this array are indexed from 0, and each entry describes values of the placeholder on each perk level. You can refer to these values as `{0}` in the description text and so on.

    ![](https://media.discordapp.net/attachments/917649484450775061/934216465425502248/unknown.png)

7. Start filling out the fields under the "Item Data" category.

    | Property | Value
    | --- | ----------- |
    | `Role` | Select Camper / Slasher depending on if the perk is for a killer or a survivor.
    | `Inventory` | True
    | `Chest` | True
    | `Availability` | Available
    | `DLCId` | 0
    | `Cloud Inventory Id` | -1
    | `Community Id` | 0
    | `Is in Non Violent Build` | True
    | `Is Available in Atlanta Build` | True
    | `Bloodweb` | True
    | `Can Keep in Loadout` | True
    | `Item Type` | The item type.

    ![](https://media.discordapp.net/attachments/917649484450775061/934217760626573342/unknown.png)

8. Fill out the fields under the "Base Item Data" category.

    | Property | Value
    | --- | ----------- |
    | `ID` | Perk ID. Should be the same as the row name.
    | `Type` | Select Camper Perk / Slasher Perk depending on if the perk is for a killer or a survivor.
    | `Display Name` | The name of the perk in game.
    | `Description` | The description of the perk in game.
    | `Icon File Path List` | Add a new array entry and in that the path to the icon for your item (.png) <br>Eg. “UI/Icons/Perks/iconPerks_agitation.png”

    ![](https://media.discordapp.net/attachments/917649484450775061/919450838366289970/unknown.png)

## Perk Blueprint

In this example, we are going to make a simple perk using `Gameplay Modifiers`.

!!! info "Gameplay Modifiers"

    A lot of logic in Dead By Daylight is based on Gameplay Tags. They are basically tags and flags attached to various objects in the game and changing based on their lifetime and various conditions. A lot of objects have them: Survivors, Killers, Interactable Objects, but their primary effect is on the killers and survivors.

    You have multiple ways of influencing them, either by calling Set Gameplay Tag Value function directly (because if you take a closer look, Perk actually is a child of GameplayModifierContainer), or by using the properties on your perk that apply the modifiers conditionally, e.g. the property PerkLevelData. Each out of 3 values in it correspond to the perk level and has few values: Conditions, Modifiers and Flags. Conditions dictate when the modifications are applied, if you add entry and click there you will see a lot of default conditions you can use. Modifiers apply modifications to the values of chosen gameplay tags, and Flags just set the gameplay tags on the object (e.g. survivor or killer).

1. Navigate to `Content/Blueprints/Perks`. Right click and create a `Blueprint Class` and set the class to `Perk`. 
2. Double-click on the blueprint and navigate to the `Details` tab.
3. Navigate to `Perk Level Data` under the "Perk" category.

    All of the values in this array represent a different perk level. If you want to modify the perk while it's at level 3, you would go to the third value in the array.

    Add the `Modifiers` entry to the third value in the array, set `Type` to `GameplayModifierType.ModifyFOV` and `ModifierValue` to 15. This will unconditionally increase the player's FOV level by 15 degrees when the perk is equipped.

    ![](https://media.discordapp.net/attachments/917649484450775061/934225262885888070/unknown.png)

5. Go back to your perk data table and set the `Perk Blueprint`.
6. Save all and select `File` → `Cook Content for Windows`.