# Dev Build Server

Follow these instructions to get the dev build up and running without Fiddler.

!!! note

    Setting up a DBD dev build server is not necessary if you use the [Fiddler fix](../FiddlerSetup.md) and vice versa. The Fiddler fix modifies traffic to allow the game to use Behaviour's game servers, while this server emulates those servers making the fix unnecessary.

## Self Host

Instructions to run the server on your local machine can be found [here](Setup.md).

!!! warning

    If you plan to host the server on a computer other than your own (i.e. over the internet) it is highly recommended to replace the TLS certificate in `private/` (`cert.crt` and `privatekey.key`). The keys included with the server exist only for convenience, and may open the door to MITM attacks if used over the internet. Replacement keys can be self-signed but must include the domains "latest.dev.dbd.bhvronline.com" and "cdn.dev.dbd.bhvronline.com".
