# Animations Guide

## Prerequisites

- [Better Fbx Importer & Exporter](https://blendermarket.com/products/better-fbx-importer--exporter) - For Blender users
- [Unreal Engine](https://www.unrealengine.com/en-US/download) (4.25.4)

!!! note

    To use this guide for Blender, you must install the Better Fbx Importer & Exporter addon and use the FBX export for it. If you unchecked scale down when importing, set the export scale to 1. If you left scale down checked then leave the export scale at 100.

## Importing your mesh into Unreal Engine

1. Import your model into Unreal Engine.
2. Make sure Create Physics Asset is checked.
3. If your model is already imported simply right click your mesh and navigate to `Create` → `Physics Asset` → `Create and Assign`.

    ![](https://media.discordapp.net/attachments/837429960196751396/837461719185358889/FBX_Import_Settings.png)

4. You should now have your mesh and Physics Asset inside the editor. 

    ![](https://media.discordapp.net/attachments/837429960196751396/837462020059693107/Mesh_and_Physics_Asset.png)

5. Rename your mesh to match the corresponding files it's going to be replacing. The Physics Asset can be named anything since it is not replacing an existing file.

## Editing the Physics Asset

!!! note

    Depending on your mesh, you don't always have to make a custom Physics Asset. Sometimes the default one will work fine. 


1. Right click on your Physics Asset and hit Edit.
2. The Physics window will open and you will see your model with these capsules all around it.

    ![](https://media.discordapp.net/attachments/837429960196751396/837463504834396190/Physics_Asset_Raw.png)

3. Resize, move, and rotate these capsules around to match your model more closely. These capsules prevent mesh with physics from clipping. You can also add or delete capsules of different shapes to fit your needs. 

    ![](https://media.discordapp.net/attachments/837429960196751396/837464021455994880/Physics_Asset_Edited.png)

4. Once you have a result you're happy with hit Save.

## Painting Cloth Physics onto your Mesh

1. Right click on the mesh you want to add physics to and hit Edit.
2. The mesh viewer window will open up.
3. Hit Section Selection up at the top and select the mesh you want to add physics to.

    ![](https://media.discordapp.net/attachments/837429960196751396/837465666348384277/Section_Selection.png)

4. Go to Window at the top and open up the Clothing window.
5. Right click on your mesh and select Create Clothing Data from Selection. Make sure the Physics Asset is set to the one you created and that Remove from Mesh is unchecked and hit Create.

    ![](https://media.discordapp.net/attachments/837429960196751396/837466971087831080/Create_Clothing_Data.png)

6. You should now have an asset under the Clothing Data tab click it and then click Activate Cloth Paint at the top.
7. Your mesh should now highlight in purple and some options should appear in the Clothing window.

    ![](https://media.discordapp.net/attachments/837429960196751396/837467765547597854/Activate_Cloth_Paint.png)

8. In the options tweak the settings to your liking. Paint Value determines how strong the physics are. A higher value will make the physics more floppy and appear more white, while a lower value will make them stiffer and appear more grey.
9. Paint the parts you want to apply physics to your mesh.

    ![](https://media.discordapp.net/attachments/837429960196751396/837469626983776306/Painting_Physics.png)

10. Use different values to blend where the physics start and end for a smoother transition.
11. Hit Deactivate Cloth Paint. Physics should now be applied to you mesh.
12. To test out physics right click on the mesh and hit Apply Clothing Data. To reset the mesh right click again and hit Remove Clothing Data.

    <video width="640" height="360" controls>
      <source src="https://cdn.discordapp.com/attachments/837429960196751396/837471346379980871/Unreal_Cloth_Physics_Floppy.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

## Cloth Configuration

1. After painting the physics onto your mesh, you can tweak how the physics work by expanding Cloth Config in the Clothing window.

    ![](https://media.discordapp.net/attachments/837429960196751396/837477440783515709/Cloth_Config.png)

2. Tweak the settings to get different physics reactions. (Increasing the X, Y, and Z values in Damping will cause the physics to be more floaty as if it were moving in water, or tweak the gravity to make the physics more floaty and ghostly)
3. As before, to test out the physics right click on the mesh and hit Apply Clothing Data. To reset the mesh right click again and hit Remove Clothing Data.

## Cooking your assets

1. Replace the mesh as you would normally. The physics asset can be anywhere as long as you copy it over.
2. Save all and select `File` → `Cook Content For Windows`.

    If all went well your mesh should have physics ingame now! 
    
    <video width="640" height="360" controls>
      <source src="https://cdn.discordapp.com/attachments/837429960196751396/837473420819169300/2B_Skirt_Physics_Test2.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>