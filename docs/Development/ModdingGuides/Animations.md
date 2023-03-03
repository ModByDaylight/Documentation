# Custom Animations Guide

This guide will be written for Blender, but it can be followed very easily in the same way with 3ds Max.

## Prerequisites

- [UE Viewer](https://www.gildor.org/en/projects/umodel)
- [Unreal Engine](https://www.unrealengine.com/en-US/download) (4.27.2)
- [Animation Fix](https://cdn.discordapp.com/attachments/969978082440146975/1067486089553641583/TamashSkeletonAnimFix.7z)

### For Blender Users

- [Better Fbx Importer & Exporter](https://blendermarket.com/products/better-fbx-importer--exporter)
- [Psk/Psa Import/Export](https://github.com/Befzz/blender3d_import_psk_psa)

### For 3ds Max Users

- [ActorX Importer](https://www.gildor.org/projects/unactorx)

## Importing the Base Mesh

1. Open UE Viewer.
2. Set the path to game files as the base of your Dead By Daylight files.
3. Check override game detection and select Unreal engine 4.27.
4. Leave all other settings at default and select OK.

    ![](/img/screenshots/UModel/UModel-Settings.png)

5. Export the mesh of the survivor you would like to use. 

    ![](/img/screenshots/UModel/UModel-Save.png)

    I usually use Dwight_REF in Characters\Campers\Dwight\Models for males and MegSkeleton01_REF in Characters\Campers\Meg\Models for females.
    
    !!! note
    
        All survivors use the same skeleton so you may use any for reference, I just find the Dwight_REF model the easiest. For example, you can make an animation for Nea and have it work on Claudette, Dwight, etc. There may be slight differences depending on the skeleton you choose.


6. Import the psk of the mesh you just exported.

    ![](/img/screenshots/Blender/Blender-Import1.png)

    ![](/img/screenshots/Blender/Blender-Import2.png)

## Making your animation

**Method 1.** Using Mixamo animations.
Mixamo is a source for free and easy to use animations. This makes it incredibly easy to choose an animation and port it to DBD.
Scroll to method 2 for creating your own animations.

1. Go to `File` → `Export` and choose BetterFBX (DO NOT USE THE NORMAL FBX EXPORT)
<br>Keep it at default settings. (Remember if you unchecked scale down when importing set export scale to 1 and if you left it checked set it to 100)
For 3ds Max go to `File` → `Export` and choose Export... Leave at default settings.
2. Go to Mixamo.com and create an account.
3. After creating an account, go to the Animations tab.

    ![](/img/screenshots/Mixamo/Mixamo-Home.png)

5. Choose upload character and drag the FBX you exported from Blender or 3ds Max into Mixamo.
6. Find an animation from Mixamo you like and export it.

    ![](/img/screenshots/Mixamo/Mixamo-Save.png)

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

    ![](/img/screenshots/Animations-Project/Animations-Explorer.png)

2. Extract the animation fix content folder into your Unreal project. 

    <video width="640" height="360" controls>
        <source src="/img/screenshots/Animations-Project/Animations-Extracting.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>

3. Recreate the folder structure the animation you are replacing.

    ![](/img/screenshots/Animations-Project/Animations-Structure.png)

4. Import your animation fbx into Unreal Engine. Make sure Import Animations is checked.
5. Select the skeleton for the mesh that you're using. For example, if I was making a survivor animation, I would select CamperMale_REF_Skeleton. Killer would be SlasherMale_REF_Skeleton and survivor lobby animations would be CamperMenu_REF_Skeleton.

    ![](/img/screenshots/Animations-Project/Animations-Import.png)

6. You should now have a couple files from your imported FBX.

    ![](/img/screenshots/Animations-Project/Animations-Imported.png)

7. All the material files can be deleted.

    ![](/img/screenshots/Animations-Project/Animations-DeletedMats.png)

8. If you're using a Mixamo animation, you can delete any of the Take animation files.

    ![](/img/screenshots/Animations-Project/Animations-DeletedMixamo.png)

9. Rename the your animation asset to the animation from DBD you are replacing.

    ![](/img/screenshots/Animations-Project/Animations-Renamed.png)

    The mesh and physics asset can be ignored, you dont have to do anything with them.
    
    Opening the animation file lets you preview it in Unreal Engine.

    ![](/img/screenshots/Animations-Project/Animations-Preview.png)

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

    ![](/img/screenshots/Animations-Project/Animations-AssetEditor.png)

6. Open your .uexp montage file in [HxD](https://mh-nexus.de/en/hxd/).
7. ++ctrl+f++ for the SequenceLength value from before. Set the settings exactly like shown in the picture below.

    ![](/img/screenshots/Animations-Project/Animations-HXD.png)

8. Double check that its set to floating point number in the top right, and then choose "Replace All".
9. ++ctrl+s++ to save the file. The length is now set to the length of your animation.

## Add sounds and particle effects (OPTIONAL)

### Adding sounds

1. Download a .wav audio file and drag it into your Unreal project. (The audio file must be a .wav)

    ![](/img/screenshots/Animations-Project/Animations-SoundPreview.png)

2. Double click on the animation file you want to add the sound to.
3. In the animation editor, open the notify track and add a sound notify.

    ![](/img/screenshots/Animations-Project/Animations-AddNotify.png)

    If you don't already have a notify track, you can insert one by clicking on the drop-down arrow.

    ![](    /img/screenshots/Animations-Project/Animations-AddNotifyTrack.png)

4. Click on the anim notify you just created, and view it in the Details tab.

    ![](/img/screenshots/Animations-Project/Animations-Details.png)

    If you dont have the Details tab, go to `Windows` → `Details` and make sure it is checked.

    ![](/img/screenshots/Animations-Project/Animations-ShowDetails.png)

5. Select your sound and add it!

    ![](/img/screenshots/Animations-Project/Animations-AddSound.png)

    Feel free to change any of the other settings here.
    
    Please note that the location you place your notify in is the part of the animation it plays at. 
    
    ![](/img/screenshots/Animations-Project/Animations-NotifyLocation.png)

### Adding particle effects (HARD)

1. The first thing you will need to do is create a particle system. This is not very easy, so I will link some guides for it. Please note that you will most likely have to refer to the [Material Instances Guide](MaterialInstances.md) to create the material for your particle system.

    [Particle System User Guide](https://docs.unrealengine.com/4.26/en-US/RenderingAndGraphics/ParticleSystems/UserGuide/)
    
    I HIGHLY recommend using the hair material for your material. Otherwise its not really possible to have an alpha/transparency. 
    
    Here is an example of my blood effect material.
    
    ![](/img/screenshots/Animations-Project/Animations-BloodPreview.png)

2. Once your particle system is ready, you can add a notify to your animation for your particle effect.

    ![](/img/screenshots/Animations-Project/Animations-AddNotifyParticles.png)

    ![](/img/screenshots/Animations-Project/Animations-ParticlePreview.png)

*[DBD]: Dead by Daylight
