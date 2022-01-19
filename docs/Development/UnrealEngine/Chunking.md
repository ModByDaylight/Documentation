# Preparing Assets for Chunking

How to divide assets into chunks and cook them into signed .pak files

## Required Setup

Projects do not generate chunks during cooking or packaging by default. To set your project up for chunking, open your `Project Settings` and navigate to `Project` → `Packaging`, then make sure that `Use Pak File` and `Generate Chunks` are both enabled.

![](https://media.discordapp.net/attachments/917649484450775061/917649651241480252/Packaging.png)

To enable ChunkID assignments, open your `Editor Preferences` and navigate to `General` → `Experimental`, then make sure that `Allow ChunkID Assignments` is enabled.

![](https://media.discordapp.net/attachments/917649484450775061/917649651698655232/ChunkID.png)

Projects do not sign paks during cooking or packaging by default. To set up your project for signing, open your `Project Settings` and navigate to `Project` → `Crypto`, then make sure that `Enable Pak Signing` is enabled.

![](https://media.discordapp.net/attachments/917649484450775061/917649651459555358/Signing.png)

## Organizing Your Chunking Scheme

Now that you have enabled chunking, you need to organize your assets and package them into chunks.

To assign an asset to a chunk, right-click on the asset and `Asset Actions` → `Assign to Chunk`.

![](https://media.discordapp.net/attachments/917649484450775061/917649651891597362/AssignToChunk.png)

This will bring up a new window asking you to enter a Chunk ID. Enter a number that isn't already in use.

![](https://media.discordapp.net/attachments/917649484450775061/917649652101296138/EnterChunkID.png)

## Packaging Chunks

Once you have defined your Chunk IDs, packaging your project will automatically create .pak and .sig files for each chunk. You can locate them in your project's `Saved/StagedBuilds/[PlatformName]/[ProjectName]/Content/Paks` folder.

![](https://media.discordapp.net/attachments/917649484450775061/917650910509924382/unknown.png)