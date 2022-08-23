# Material Instances Guide

This guide will show you how to create custom material instances in Dead By Daylight.

## Prerequisites

- [Unreal Engine](https://www.unrealengine.com/en-US/download)
- [Materials](https://github.com/YourlordAdam/ModbyDaylight-EditorMaterials)

## Importing the materials into your Unreal Project

Download the materials then extract the Content folder into your project's Content folder. Be sure that the path in Unreal Engine is `Content` → ETC, not `Content` → `Content` → ETC.

<video width="640" height="360" controls>
  <source src="https://cdn.discordapp.com/attachments/908765177644724294/909137455385563206/Desktop_2021.11.12_-_17.04.57.04.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Directories to never cook

There are some directories you should never cook, which can be set in the project settings. These directories are:

- `Content\Characters\Campers\Materials`
- `Content\Characters\Slashers\Materials`
- `Content\Characters\Slashers\MaterialFunctions`

<video width="640" height="360" controls>
  <source src="https://cdn.discordapp.com/attachments/908765177644724294/909137802216738866/Desktop_2021.11.12_-_17.22.59.05.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Creating your material instance and assigning it to your model

First import your model in the normal location in the import settings. Do not create materials and uncheck import textures.

Then create 2 folders. These can be named anything, but I will name them AdamMaterials and AdamTextures.
Inside the AdamMaterials folder create a Material Instance, you can name it anything. Open it and set its parent to MI_Slasher_Cust or MI_Camper_Cust depending on whether you're using a survivor or a killer model.

Then enable the textures your model will be using.
Inside AdamTextures folder import the textures you will be using on the model. These textures can be named however you want, but I do suggest keeping the normal naming formats.

<video width="640" height="360" controls>
  <source src="https://cdn.discordapp.com/attachments/908765177644724294/909137868407074816/Creating_a_Material_Instance_V2.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Enabling the Alpha Texture (OPTIONAL)

Enable Opacity Mask Texture or MaskFromOtherPart depending on whether you're using a Killer or Survivor model and assign your _M texture to it.

## Enabling the Emission Texture (OPTIONAL)

Enable Blood Dirt Emissive and assign your _BDE texture to it. then enable EM Intensity and change it to your desired amount the higher it is the brighter the emission will be. Enable EM Color and set it to your desired color. See video below for an explanation on what each of the emission values do.

<video width="640" height="360" controls>
  <source src="https://cdn.discordapp.com/attachments/908765177644724294/909138445279043604/SettingUpEmissionV2.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Hair Material setup

Parent your hair materials to MI_HairTAA. See video below for an explanation of what each of the settings do and how to use them.

<video width="640" height="360" controls>
  <source src="https://cdn.discordapp.com/attachments/908765177644724294/909138621297217556/HairMaterialGuideUpdated.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## CV Materials (OPTIONAL)

CV materials are the basic brown quality recolors from the store for BHVR created characters.
The video below will show how to make the textures required for this and how to use the settings.

<video width="640" height="360" controls>
  <source src="https://cdn.discordapp.com/attachments/908765177644724294/909140776632594512/CVMaterialsV3.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## M_Structures_v2 (OPTIONAL)

This material is meant for use on World objects for maps. supports 3 texture blending with a mask with tiling on each texture.
parent all materials to `MI_Structures_v2_AdamInstance`

## FAQ

- Diffuse is the _BC Texture.
- AORoughnessMetallic is the _ORM Texture.
- Normal is the _N Texture. 
- Blood Dirt Emissive is the _BDE Texture.
- HideHead_Mask is the _HM Texture (Only killers will have this).
- Opacity Mask Texture is the _M Texture (On a survivor this will be named MaskFromOtherPart).
- Emissive_Tileable_Texture is a color ramp which is used to give the Emissive color a different texture.
- Alpha_Mask is the _M Texture (For hair)
- Depth_Mask is your AO the _M texture works here.
- HideHead_Mask is the _HM Texture (Survivors will not use this texture)
- RootTip_Mask is a gradient texture that controls the Root Color and Tip Color White = Root Black = Tip

The other Emission settings are usable. Experimenting with them or just copying from materials in the game is recommended.

If you want to make your emission to look like Legacy, simply change your settings to match the following:

- EM Intensity = 10
- EM Noise Intensity = 2
- EM Noise Scale = 5
- EM Noise ScaleFar = 10
- EM Noise Speed X = 0.5
- EmissiveMask Custom = 5
- Emissive_Tile = 3
- EM Color R = 1 - G = 0.552359 - B = 0.212663 - Hex sRGB FFC47FFF
- Emissive Touch = R = 1 - G = 0.567833 - B = 0.25 - Hex sRGB FFC789FF

If you want your emissive area to be solid color instead of having an embers look simply change the Emissive_Tileable_Texture to a blank white box and set EM Noise Intensity to 0. (This texture is included)

- You should enable EmissiveTouch if using emission.
- The Hair material works on both killer and survivor.
- The Hide Head_Mask is just an inverted _M texture that only affects killers in first person. so for it Black is unhidden and White is hidden.

### Texture Based EM Colors

These materials work just like `MI_Camper_Cust` and `MI_Slasher_Cust` but the `Emissive_Tileable_Texture` controls the color of the emission instead of `EM Color` and `Emissive Touch`
To use these simply change your parent material to `MI_Camper_Cust_AdamEmission` for survivors or `MI_Slasher_Cust_AdamEmission`
 for killers. 
Set up your emission as usual, However leave `EM Color` and `Emissive Touch` at Their default values, then change `Emissive_Tileable_Texture` to your desired texture.
And you're good to go.

## Prerequisites
