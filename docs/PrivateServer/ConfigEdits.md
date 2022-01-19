# Config Edits

The config files can be edited to change certain console variables. This can be done by editing the `DefaultDeviceProfiles.ini` config file and replacing it with a pak mod.

This example unlocks all customization items.

```ini
[Windows DeviceProfile] 
+CVars=dbd.UnlockAllCustomizationItems=1
```

## Console Variables

The following console variables can be added below the `[Windows DeviceProfile]` section of the config file to configure these options.

| Console Variable | Description
|---------|---------|
| dbd.AllowPrivateMatchWithOnePlayer | Allow private match with one player.
| DBD.ChestItemOverride | Force the chests to give you this item.
| dbd.DisableInteractions | Disable interactions progressively, where each level is loosely related to a callstack depth level
| DBD.DisableInvalidRoleCancellation | Disables the cancellation of games due to invalid role.
| dbd.EnableMaxGeneratorsAndHooks | If non-zero, forces maximum number of generators and hooks to spawn regardless of actual player count.
| DBD.ForcedSurvivorStartItem | The start item survivors will start with.
| DBD.ForceItemAvailable | Force all items to be available.
| DBD.GenerationSeed | The generation seed to use to generate the level. If smaller than 0, the generation seed is considered invalid.
| dbd.IgnoreGameEndConditions | Game will never end even if conditions are met.
| dbd.ReplaceDisconnectedPlayersWithBots | Replaces disconnected players with bots.
| dbd.SpawnExposerEnabled | Toggles the spawning of crows.
| dbd.UnlockAllCustomizationItems | Unlock all customization items.
| r.dbd.HideAllHUD | Hides all HUD components.