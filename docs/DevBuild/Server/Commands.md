# Dev Build Server Commands

!!! note

    This guide only applies if you are hosting the server yourself.

The dev build server supports a few commands which can be typed directly into the console.

- `events enable <event>`
    - Manages the active event, if any. This can be used without restarting the server, but will not affect clients which are already connected. <event> must be one of the following:
        - None (to disable the active event)
        - Winter2017
        - Lunar
        - Summer
        - Halloween2018
        - Winter2018
        - Lunar2019
        - Anniversary2019
- `help`
    - Lists all commands
- `help <command>`
    - Displays the usage for the given command
- `aliases <command>`
    - Lists all aliases of the given command
- `count connections`
    - Displays the number of active HTTP/S connections
- `count sessions`
    - Displays the number of active game sessions
- `stop`
    - Shuts down the server
