# Custom Cosmetics Guide

This guide will show you how you can add your own customization items with the use of data tables.

*Prerequisites*

- [Project Setup](Development/UnrealEngine/ProjectSetup.md)

## Customization Item Data Table

1. Navigate to `/Content/Data/Dlc` (or any subdirectory of `/Data/Dlc` of your choosing, you can even create new directories) and right click to create a new data table asset.

    ![](https://images-ext-2.discordapp.net/external/YOyREGb16pP1RPJEWkn6er6Iej5f2XuO0GJP1HNVca8/https/lh4.googleusercontent.com/_B7CS8FFJfQtOxosP5tmznH9hJA_Cid3aJe4AsG3EaYdQquEuQ0zGL-lh8gwV1jhGN67_ZyEkFpehUBK2txQppTffHD2_UTXbcIOpGJB4o2Yq-031XURKXwB4wqXgDg9vLDFhgE4)

2. Select “Customization Item Data” as the Row Structure.

    ![](https://images-ext-2.discordapp.net/external/JFMCvuZnV087V8nbMhcBpcg19L9RKdoYXiF3yDhlAe0/https/lh4.googleusercontent.com/C3CVuPfOJdvoTokgXndqQvP_-SmpshcqLz0Iotg_1SM08xiA-g7B1MAGn-JdFEWscC6A0PvaTzDRY-e5FmBf7mb0q6l-T-gChxi78SiYetz06Nx-f3qULChe6pS9snCbI0W9NnoG)

3. You can now name your data table whatever you wish, however it is recommended to give it a name descriptive of its contents.
4. Click on “Add” to add a new row to the data table.

    ![](https://images-ext-2.discordapp.net/external/yvvVKDgon4oIbWLSbj4VoMuCUuUPCFIasr-6dLRaNU4/https/lh3.googleusercontent.com/THsgfyuWp4BhUf-H55dUb4vjDoA9MWfI-hdYnFjcuW_CtA1MoK5_44G3pC-Vk5v9zSzxGZJ42zylQrHdWP65PnNKSCDDOiBpllXTjrMAyYMdwc2cyn8KZRqP0rQhShCqdmTYQ1x6)

5. Double click on the row name to change it to a custom cosmetic ID. It can be anything, but make sure to try and use a unique name, so no two cosmetics or mods overlap. Some ingame cosmetic IDs are:
    ```
    AV_Head01 (Ace Head)
    J_Legs02 (Jake Legs)
    HA_Body01 (Hag Body)
    ```

    ![](https://images-ext-2.discordapp.net/external/-m7TO2ZgwcnzTWPlv0DAYEwDQnBWWTkadRPvmYrXLls/https/lh5.googleusercontent.com/rzXX_DsSL08COHN_abeNYs7QlZOFh1QvHcW_712vktdOzGowBRC-aMBCkSw0ReBYxHgs5CHAohVPe3cDiyQHwVN_7kHS6l3wBGl7jFOY6FQFdtqExoe6XRdFdjGKJmS4UZGEQyZy)

6. Start filling out the fields under the "Customization Item Data" category.
| Property | Value
| --- | ----------- |
| `Category` | Select the appropriate option
| `Item Mesh` | The skeletal mesh for the cosmetic
| `Anim Class` | For special animation behavior. (Not required)
| `Item Blueprint` | A blueprint for any special behavior. (Not required)

    ![](https://images-ext-2.discordapp.net/external/8KrKnxlZUbYLEbCFoAKtxDNpjqpfvGsVdHExpiqvGQ0/https/lh6.googleusercontent.com/BurQyDdwcS25yxE-7KnlZsTpYfdxksHgV_iaE5itCenVyYgRM3Gqj-jQlCqrAXXpexuGB780TPOeb-jFoc7crwVunb93ztp8CS1iEfOyEqodHKemjhFVuHhf3_XTtmFJ21GEXXTc)

7. Fill out the fields under the "Customization Data" category.

    | Property | Value
    | --- | ----------- |
    | `ID` | Same as the row name.
    | `Associated Character` | The character ID who the cosmetic belongs to.
    | `Associated Role` | Select Camper / Slasher depending on if the cosmetic is for a killer or a survivor.
    | `Rarity` | The rarity of the customization item in game.
    | `Display Name` | The name of the customization item in game.
    | `Description` | The description of the customization item in game.
    | `Icon File Path List` | Add a new array entry and in that the path to the icon for your item (.png) <br>Eg. “UI/Icons/Items/iconItems_flashlight.png”
    | `Availability` | Available
    | `DLCId` | 0
    | `Cloud Inventory Id` | -1
    | `Community Id` | 0

    ![](https://images-ext-1.discordapp.net/external/zTyx91bwwvU4tDQ8G3nv0ppOnA3WdtINXbDBauhugNg/https/lh5.googleusercontent.com/TxkUkYy_m6-dLUFeDcWD3bXM93qssM2eidVv5H9zhF_1bjBsDneOpNAqTx8YbtcVLmHYH0bsHdUaqzWvVc0CGMi6nGn-HTX-ENBMWhTHyV5hVxIxXW26nc-dlclPrmXl-w86f_f8)

8. Repeat from step 4 for each cosmetic you want to add.
9. Save and cook as normal.