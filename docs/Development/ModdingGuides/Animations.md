# Custom Animations Guide

This guide will be written for Blender, but it can be followed very easily in the same way with 3ds Max.

## Prerequisites

- [Unreal Engine](https://www.unrealengine.com/en-US/download) (4.25.4)
- [Animation Fix](https://cdn.discordapp.com/attachments/797693369307496498/909972913766150144/anim-newfix.7z)

*For Blender Users:*

- [Better Fbx Importer & Exporter](https://blendermarket.com/products/better-fbx-importer--exporter)
- [Psk/Psa Import/Export](https://github.com/Befzz/blender3d_import_psk_psa)

*For 3ds Max Users:*

- [ActorX Importer](https://www.gildor.org/projects/unactorx)

## Importing the Base Mesh

1. Open UModel.
2. Set the path to game files as the base of your Dead By Daylight files.
3. Check override game detection and select Unreal engine 4.25.
4. Leave all other settings at default and select OK.

    ![](https://images-ext-2.discordapp.net/external/aHO1nQ_Mz4-lg48MPivnC5yDjQMqIMH7zccCU9q3kbQ/https/media.discordapp.net/attachments/833812099263627335/833852232449261578/unknown.png)

5. Export the mesh of the survivor you would like to use. 

    ![](https://media.discordapp.net/attachments/847909063542833192/847911731967557652/unknown.png)

    I usually use Dwight_REF in Characters\Campers\Dwight\Models for males and MegSkeleton01_REF in Characters\Campers\Meg\Models for females.
    
    !!! note
    
        All survivors use the same skeleton so you may use any for reference, I just find the Dwight_REF model the easiest. For example, you can make an animation for Nea and have it work on Claudette, Dwight, etc. There may be slight differences depending on the skeleton you choose.


6. Import the psk of the mesh you just exported.

    ![](https://media.discordapp.net/attachments/847909063542833192/847912498991857684/unknown.png)

    ![](https://media.discordapp.net/attachments/847909063542833192/847912607272271882/unknown.png)

## Making your animation

**Method 1.** Using Mixamo animations.
Mixamo is a source for free and easy to use animations. This makes it incredibly easy to choose an animation and port it to DBD.
Scroll to method 2 for creating your own animations.

1. Go to `File` → `Export` and choose BetterFBX (DO NOT USE THE NORMAL FBX EXPORT)
<br>Keep it at default settings. (Remember if you unchecked scale down when importing set export scale to 1 and if you left it checked set it to 100)
For 3ds Max go to `File` → `Export` and choose Export... Leave at default settings.
2. Go to Mixamo.com and create an account.
3. After creating an account, go to the Animations tab.

    ![](https://media.discordapp.net/attachments/847909063542833192/847913373475536936/unknown.png)

5. Choose upload character and drag the FBX you exported from Blender or 3ds Max into Mixamo.
6. Find an animation from Mixamo you like and export it.

    ![](https://media.discordapp.net/attachments/847909063542833192/847914366657101874/unknown.png)

**Method 2.** Creating your own animations.
<br>With your reference model in 3ds Max, you can create any animation you want. I will drop some animation tutorials here for reccomendations.
<br>Keep in mind you may want to use the animation you're replacing as a base if you are inexperienced.

Below are a two tutorials for animation, one is in 3ds Max by myself. (This can be used just fine for Blender reference) 
    
<iframe width="640" height="360"
src="https://www.youtube.com/embed/mXz-2j5n-T4">
</iframe>

<iframe width="640" height="360"
src="https://www.youtube.com/embed/6Km2COZGYA0">
</iframe>

1. Go to `File` → `Export` and choose BetterFBX (DO NOT USE THE NORMAL FBX EXPORT)
Keep it at default settings. (Remember if you unchecked scale down when importing set export scale to 1 and if you left it checked set it to 100)
For 3ds Max go to `File` → `Export` and choose Export... Leave at default settings.

## Cooking in Unreal Engine

1. Go to your project files in File Explorer.

    ![](https://media.discordapp.net/attachments/847909063542833192/847915478165094420/unknown.png)

2. Extract the animation fix content folder into your Unreal project. 

    <video width="640" height="360" controls>
        <source src="https://cdn.discordapp.com/attachments/847909063542833192/847915716069163073/ExtractingIntoProject.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>

3. Recreate the folder structure the animation you are replacing.

    ![](https://media.discordapp.net/attachments/847909063542833192/847915783568621618/unknown.png)

4. Import your animation fbx into Unreal Engine. Make sure Import Animations is checked.
5. Select the skeleton for the mesh that you're using. For example, if I was making a survivor animation, I would select CamperMale_REF_Skeleton. Killer would be SlasherMale_REF_Skeleton and survivor lobby animations would be CamperMenu_REF_Skeleton.

    ![](https://media.discordapp.net/attachments/847909063542833192/847915892780433435/unknown.png)

6. You should now have a couple files from your imported FBX.

    ![](https://media.discordapp.net/attachments/847909063542833192/847915969149009990/unknown.png)

7. All the material files can be deleted.

    ![](https://media.discordapp.net/attachments/847909063542833192/847916048975134772/unknown.png)

8. If you're using a Mixamo animation, you can delete any of the Take animation files.

    ![](https://media.discordapp.net/attachments/847909063542833192/847916164260036688/unknown.png)

9. Rename the your animation asset to the animation from DBD you are replacing.

    ![](https://media.discordapp.net/attachments/847909063542833192/847916264772075640/unknown.png)

    The mesh and physics asset can be ignored, you dont have to do anything with them.
    
    Opening the animation file lets you preview it in Unreal Engine.

    ![](https://media.discordapp.net/attachments/847909063542833192/847916402907021363/unknown.png)

10. Save all and select `File` → `Cook Content For Windows`.
12. Get your cooked animation file in your project like shown in previous guides. (For example mine was DBDproject\Saved\Cooked\WindowsNoEditor\DBDproject\Content\Characters\Campers\Common\Animation\Male\AnimSequences\Gestures\M_PointTo)
13. Replace in your DBD folder.

## Increase animation length (OPTIONAL)

1. Download [Helios' Asset Editor](https://cdn.discordapp.com/attachments/838158112749781000/853702841272238111/Asset_Editor_v1.0.3.exe).
2. Open the AssetEditor.exe and go to `File` → `Open`.
3. Go to your DBD game files, and navigate to the montage file .uasset for your animation.
For example, if I was putting an animation over M_PointTo, I would open AM_M_PointTo.uasset in Content\Characters\Campers\Common\Animation\Male\Montage.
4. With your montage opened, navigate to `Blocks` → `Block` 1 → `AnimMontage`.
5. Check the value of the SequenceLength and remember that number (or write it down).

    ![](https://media.discordapp.net/attachments/847909063542833192/847922908113928203/unknown.png)

6. Open your .uexp montage file in [HxD](https://mh-nexus.de/en/hxd/).
7. ++ctrl+f++ for the SequenceLength value from before. Set the settings exactly like shown in the picture below.

    ![](https://media.discordapp.net/attachments/847909063542833192/847926076101361704/unknown.png)

8. Double check that its set to floating point number in the top right, and then choose "Replace All".
9. ++ctrl+s++ to save the file. The length is now set to the length of your animation.

## Add sounds and particle effects (OPTIONAL)

### Adding sounds

1. Download a .wav audio file and drag it into your Unreal project. (The audio file must be a .wav)

    ![](https://media.discordapp.net/attachments/847909063542833192/848588057678184488/unknown.png)

2. Double click on the animation file you want to add the sound to.
3. In the animation editor, open the notify track and add a sound notify.

    ![](https://media.discordapp.net/attachments/847909063542833192/848589638289326090/unknown.png)

    If you don't already have a notify track, you can insert one by clicking on the drop-down arrow.

    ![](https://media.discordapp.net/attachments/847909063542833192/848589840337207317/unknown.png)

4. Click on the anim notify you just created, and view it in the Details tab.

    ![](https://cdn.discordapp.com/attachments/847909063542833192/848590148512907305/unknown.png)

    If you dont have the Details tab, go to `Windows` → `Details` and make sure it is checked.

    ![](https://cdn.discordapp.com/attachments/847909063542833192/848590260987756554/unknown.png)

5. Select your sound and add it!

    ![](https://media.discordapp.net/attachments/847909063542833192/848590442807427092/unknown.png)

    Feel free to change any of the other settings here.
    
    Please note that the location you place your notify in is the part of the animation it plays at. 
    
    ![](https://cdn.discordapp.com/attachments/847909063542833192/848590657932492810/unknown.png)

### Adding particle effects (HARD)

1. The first thing you will need to do is create a particle system. This is not very easy, so I will link some guides for it. Please note that you will most likely have to refer to the [Material Instances Guide](MaterialInstances.md) to create the material for your particle system.

    [Particle System User Guide](https://docs.unrealengine.com/4.26/en-US/RenderingAndGraphics/ParticleSystems/UserGuide/)
    
    I HIGHLY recommend using the hair material for your material. Otherwise its not really possible to have an alpha/transparency. 
    
    Here is an example of my blood effect material.
    
    ![](https://media.discordapp.net/attachments/847909063542833192/848602221838204948/unknown.png)

2. Once your particle system is ready, you can add a notify to your animation for your particle effect.

    ![](https://media.discordapp.net/attachments/847909063542833192/848604740832591882/unknown.png)

    ![](https://media.discordapp.net/attachments/847909063542833192/848604777461448735/unknown.png)

*[DBD]: Dead by Daylight