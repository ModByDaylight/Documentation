# Skeletal Mesh Guide

## Prerequisites

- [UModel](https://www.gildor.org/en/projects/umodel)
- [Blender](https://www.blender.org/download/)
- [Psk/Psa Import/Export](https://github.com/Befzz/blender3d_import_psk_psa)
- [Unreal Engine](https://www.unrealengine.com/en-US/download)

## Exporting from Dead By Daylight

1. Open UModel.
2. Set the path to game files as the base of your Dead By Daylight files.
3. Check override game detection and select Unreal engine 4.25.
4. Leave all other settings at default and select OK.

    ![](https://images-ext-2.discordapp.net/external/aHO1nQ_Mz4-lg48MPivnC5yDjQMqIMH7zccCU9q3kbQ/https/media.discordapp.net/attachments/833812099263627335/833852232449261578/unknown.png)

5. Find a skeletal mesh you want to replace. Open the skeletal mesh and export it with ++ctrl+x++. Keep default settings.
6. Find the exported skeletal mesh. You can find where it exported in UModel by going to `Tools` → `Open export folder`.

## Replacing the Mesh

1. Open Blender and start a new general file.

    ![](https://media.discordapp.net/attachments/797525681608982538/797532695810146304/unknown.png)

2. Delete all the default Blender objects by selecting all the assets and pressing delete.

    ![](https://media.discordapp.net/attachments/797525681608982538/797532879785164850/unknown.png)

3. `File` → `Import` → `Skeleton Mesh .psk`.
(Make sure you have the Psk/Psa Import/Export plugin installed. Instructions are on the GitHub repository.)
4. Find your exported psk and import it. Make sure scale down is checked when importing. 

    ![](https://media.discordapp.net/attachments/797528664535072779/797581354257612840/unknown.png)

    You should now have the model in Blender. Feel free to select the object then right click to shade it smooth.
    
    ![](https://media.discordapp.net/attachments/797528664535072779/797581639790231553/unknown.png)
    
    ![](https://media.discordapp.net/attachments/797528664535072779/797581687659692032/unknown.png)

5. Go to the Shading tab in Blender.

    ![](https://media.discordapp.net/attachments/797528664535072779/797582859551375380/unknown.png)

6. Select use nodes on all the materials your object has.

    ![](https://media.discordapp.net/attachments/797528664535072779/797582940300640326/unknown.png)

    You should now have your material looking like this. You may have multiple materials to do this on.
    
    ![](https://media.discordapp.net/attachments/797528664535072779/797583511967367199/unknown.png)

7. `Add` → `Search` → `Image Texture`.

    This node will appear
    
    ![](https://media.discordapp.net/attachments/797525681608982538/797534561285701672/unknown.png)

8. Press open on the node and find the texture that goes with your model, it should be somewhere in your UModel export folder. All textures linked to the model are automatically exported with the model.

    (For example, mine were in Characters\Campers\Nea\Textures\Outfit00 and Characters\Campers\Nea\Textures\Outfit01)
    
    ![](https://media.discordapp.net/attachments/797528664535072779/797583971936501801/unknown.png)

9. Select the colored texture and select open.
10. Connect the color node to the Base Color node in the Principled BDSF.

    ![](https://media.discordapp.net/attachments/797525681608982538/797535360498270258/unknown.png)
    
    It should now look textured
    
    ![](https://media.discordapp.net/attachments/797528664535072779/797584170116317204/unknown.png)

11. Go back to the Layout tab in Blender and select viewport shading to see your textures.

    ![](https://media.discordapp.net/attachments/797528664535072779/797584311217160282/unknown.png)

12. Now, feel free to edit the model to your heart's content. If you need help using Blender feel free to look up plenty of tutorials online.

13. When you're done editing, `Export` → `Export as FBX`.

### Advanced Model Editing

This is for people who are adding extra resources to the model instead of just slightly changing the base model.

This is hard to communicate, so I will be leaving a clip of me doing different types of models and annotating as I do them.

<iframe width="640" height="360"
src="https://www.youtube.com/embed/4H0jZfNXUJY">
</iframe>

<iframe width="640" height="360"
src="https://www.youtube.com/embed/sjnxGb5b0lA">
</iframe>

<iframe width="640" height="360"
src="https://www.youtube.com/embed/NJ0EFMiGT0E">
</iframe>

## Cooking in Unreal Engine

1. Open Unreal Engine and open your project. If you havent already made one, refer to the [Custom Textures Guide](../Textures.md).
2. Now you will have to recreate the folder structure of the original mesh. For example, I would make a folder called Characters, then make a folder inside that called Campers, and so on. Remember it is case sensitive. 
3. Drag your fbx into the folder where the mesh would be in the original game.
4. Import all, make sure your settings are the same as shown.

    ![](https://media.discordapp.net/attachments/797528664535072779/797927449714360410/unknown.png)
    
    (Turn import animations off)
    
    If there are any error messages, they can most likely be ignored. 
    
    You should now have your mesh imported in. Mine looks like this
    
    ![](https://media.discordapp.net/attachments/797528664535072779/797930008088936538/unknown.png)
    
    I have the mesh, the material for the car, the base texture of the car, and my material for Jigglypuff and it's texture. There should only be one mesh. If not, make sure you joined everything together in Blender.

5. Refer to [Material Instances Guide](../MaterialInstances) for texturing your model.
6. Name your mesh the same as the mesh you are replacing.

    ![](https://media.discordapp.net/attachments/797525681608982538/797552959176179752/unknown.png)

7. Save all and select `File` → `Cook Content For Windows`.
