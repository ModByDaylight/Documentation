# Dev Build Server Config Edits

!!! note

    This guide only applies if you are hosting the server yourself.


The dev build server has several settings which can be changed and affect all connected clients. The settings are loaded from .HJSON files in `settings/`.

## events.hjson

This file supports enabling all in-game events for which the dev build has support. Only one may be enabled at a time. Supported events are:

- Winter Solstice (2017)
- Chinese New Year (2017)
- Scorching Summer BBQ (2018)
- Howling Grounds (2018)
- The Hallowed Blight (2018)
- Winter Solstice (2018)
- Moonrise (2019)
- 3 Year Anniversary (2019)

## starting-values.hjson

Settings in this file control players' starting bloodpoints, rank, and player level.

## server-settings.hjson

This file contains some server settings that don't directly affect the client. The most useful are:

For those who plan to use the server only for themselves

- `saveToFile`
    - Enables or disables persistent player saves. If disabled, players will have the default save each time they log in. Persistent saves only work when launching dev build using Steam.

For those who plan to host the server publicly

- `requireSteam`
    - If true, clients will only be allowed to connect if launched using Steam.
- `whitelistEnabled`
    - Enables or disables the IP whitelist. If true, only IP addresses listed in `whitelist.txt` will be allowed to connect.

## logging.hjson

Configures logging. Pretty boring.