# Console Usage

Here you'll learn the basics of console usage.

By default, the console key is set to F10. Pressing it once will bring up a small single-line console, and pressing it again opens a bigger one allowing you to see its output. You'll find all the console output in the log file as well if needed.
The console key can be changed at the bottom of `DefaultInput.ini` in `DeadByDaylight/Config`.

In the console, you'll see text in 3 different colors. Green means it is a console variable (CVar), grey means it's a readonly CVAR and purple means that it is a command / function.

![](https://media.discordapp.net/attachments/797750180853186560/798223650322251786/unknown.png)

To see the value of a CVar, simply type it's name and hit enter in the console.

![](https://media.discordapp.net/attachments/797750180853186560/798223975359578152/unknown.png)

To set a value of a CVar, type it's name followed by a spacebar and the new value.

![](https://media.discordapp.net/attachments/797750180853186560/798224642165833728/unknown.png)

You can not set the value of readonly CVars with the console. If you want to set a readonly variable, it has to be done before launch in one of the configs. You can use the `[SystemSettings]` section in `/DeadByDaylight/Config/DefaultEngine.ini` or you can modify the `[Windows DeviceProfile]` section in `/DeadByDaylight/Config/DefaultDeviceProfiles.ini`.
Both of those achieve the same result, so it doesn't matter which one you use.

![](https://media.discordapp.net/attachments/797750180853186560/798229270140026930/unknown.png)

To learn what a CVar does or affects, you can type in its name followed by a spacebar and a question mark.

![](https://media.discordapp.net/attachments/797750180853186560/798231727872147466/unknown.png)

Console commands can require from zero to multiple arguments. The arguments specify their type as well as their name.

*Argument value types:*<br>
int32 = basic whole number<br>
float = number with decimals<br>
bool = either TRUE or FALSE (can be typed in as 1 or 0)<br>
FString = text<br>
FName = text

![](https://media.discordapp.net/attachments/797750180853186560/798245646342815824/unknown.png)

!!! note

    Many of the CVars / commands only work if the host of the match does them. Sometimes to get it working properly everyone else has to do it too.

!!! warning

    While running the game with steam, do NOT execute commands such as `online.resetachievements` as this will CLEAR ALL DBD ACHIEVEMENTS FROM YOUR PROFILE AND RESET STATS. There are other commands similar to this, so just refrain from trying anything that you suspect might have permanent effects.
