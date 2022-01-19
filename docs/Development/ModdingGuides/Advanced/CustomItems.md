# Custom Items Guide

This guide will show you how you can add your own items with the use of data tables and blueprints.

*Prerequisites*

- [Project Setup](Development/UnrealEngine/ProjectSetup.md)

## Item Data Table

1. Navigate to `Content/Data/Dlc` (or any subdirectory of `Data/Dlc` of your choosing, you can even create new directories) and right click to create a new data table asset.

    ![](https://images-ext-2.discordapp.net/external/YOyREGb16pP1RPJEWkn6er6Iej5f2XuO0GJP1HNVca8/https/lh4.googleusercontent.com/_B7CS8FFJfQtOxosP5tmznH9hJA_Cid3aJe4AsG3EaYdQquEuQ0zGL-lh8gwV1jhGN67_ZyEkFpehUBK2txQppTffHD2_UTXbcIOpGJB4o2Yq-031XURKXwB4wqXgDg9vLDFhgE4)

2. Select "Item Data” as the Row Structure.

    ![](https://media.discordapp.net/attachments/917649484450775061/919373171168247888/unknown.png)

3. You can now name your data table whatever you wish, however it is recommended to give it a name descriptive of its contents.
4. Click on “Add” to add a new row to the data table.

    ![](https://media.discordapp.net/attachments/917649484450775061/919373767136907314/unknown.png)

5. Double click on the row name to change it to a custom item ID. It can be anything, but make sure to try and use a unique name, so no two items or mods overlap. Some ingame item IDs are:
    ```
    Item_Camper_Flashlight (Uncommon Flashlight)
    Item_Camper_MedKit (Common Med-Kit)
    Item_Camper_Toolbox (Common Toolbox)
    ```

    ![](https://media.discordapp.net/attachments/917649484450775061/919375028695470100/unknown.png)

6. Start filling out the fields under the "Item Data" category.

    | Property | Value
    | --- | ----------- |
    | `Item Mesh` | The skeletal mesh for the item in the lobby.
    | `Hand Position` | How the item is held in the lobby.
    | `Role` | Camper
    | `Rarity` | The rarity of the item in game.
    | `Inventory` | True
    | `Chest` | Spawns this item in chests. (Optional)
    | `Availability` | Available
    | `DLCId` | 0
    | `Cloud Inventory Id` | -1
    | `Community Id` | 0
    | `Bloodweb` | Spawns this item in the Bloodweb. (Optional).
    | `Can Keep in Loadout` | True
    | `Item Type` | The item type.

    ![](https://media.discordapp.net/attachments/917649484450775061/919449056453996564/unknown.png)

7. Fill out the fields under the "Base Item Data" category.

    | Property | Value
    | --- | ----------- |
    | `ID` | Item ID. Should be the same as the row name.
    | `Type` | Item
    | `Display Name` | The name of the item in game.
    | `Description` | The description of the item in game.
    | `Icon File Path List` | Add a new array entry and in that the path to the icon for your item (.png) 
    Eg. “UI/Icons/Items/iconItems_flashlight.png”
    | `Item Blueprint` | Your item's blueprint. (You haven't created this yet)

    ![](https://media.discordapp.net/attachments/917649484450775061/919450838366289970/unknown.png)

## Item Blueprint

1. Navigate to `Content/Blueprints/GameplayElements/Item/Common`. Right click and create a `Blueprint Class` and set the class to `BaseCamperCollectable`. 

    Create a dummy blueprint for each of the following. Make sure they have the exact same names.

    ![](https://media.discordapp.net/attachments/917649484450775061/919458822194593792/unknown.png)

(Make sure you don't replace these blueprints when cooking)

2. Right click on the item blueprint which is the same type of item as the one you are creating and select `Create Child Blueprint Class`.

    ![](https://media.discordapp.net/attachments/917649484450775061/919460281690767411/unknown.png)

    Give the child blueprint a name you can remember.

3. Double-click on the child blueprint and navigate to the `Details` tab.

4. Start filling out the fields under the "Collectable" category.

    You will only need to change a few properties since your item is using the properties from the blueprint you parented it to.

    | Property | Value
    | --- | ----------- |
    | `Item ID` | The same ID you set in your item data table.

    ![](https://media.discordapp.net/attachments/917649484450775061/919464030735847504/unknown.png)

5. Go back to your item data table and set the `Item Blueprint`.
6. Save all and select `File` → `Cook Content for Windows`.

### Item Modifiers
This part will provide some information on how to set modifier values for your item using the event graph.

By using the `Set Base Item Modifier` and `Set Modifier Value` nodes, you can set different modifier values for your item.

The example below shows the node graph you can use to modify the amount of charges your item will have in game.

![](https://media.discordapp.net/attachments/917649484450775061/919466835169148968/unknown.png)