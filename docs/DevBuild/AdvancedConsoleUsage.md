# Advanced Console Usage

Welcome to the advanced dev build console usage guide!

This will show how you can read and set properties of objects as well as some general tips for console usage.

*What is a class?* 

A class is essentially a template for an object. It contains all the object's variables and properties with only the default (often blank) values. Dead By Daylight has thousands of classes with many of them having many instances in game.

*What is an object?* 

An object is an instance of a class. It's basically a filled in version with all the properties set to certain values. An object would be for example a single tile in a map (instance of eg. `BP_TL_Fr_16x16_MD01_C`), a survivor player (instance of eg. `BP_CamperMale01_C`) and so forth.  Object names usually are just the class names with the post fix "_" followed by a number. This is not true for some manually generated objects, but that's not important for now. 

*Relevant console commands:*

Remember that console output is also saved in the games log file (`DeadByDaylight/Saved/Logs/DeadByDaylight.log`). It can be very useful to look at longer console output there rather than the console itself.

| Console Command | Description
| --- | ----------- |
| `obj classes` | Prints out a list of all classes.

| `obj dump <object / class name>` | Prints out the contents of object / class. If used on a class, it shows all the properties with their default values. If used on an object, you'll see all its current values. 

| `GetAll <class name>` | Prints the name of every object of given class. 

| `set <object / class name> <property> <new value>` | Allows you to set a properties value either on an object or all instances of a class (done by using class name instead of object name). 

| `Display <object name> <property>` | Adds an on-screen display that in real time shows the value of the specified property constantly. 

| `DisplayAll <class name> <property>` | Same as Display, but shows the properties of every instance of the class. 

| `DisplayClear` | Clears the on-screen display. 

| `ListProps <class name> *` | Lists all the properties and their types (but not values) of the given class. Remember the wildcard at the end. 

## Example 1

Let's try to change something about player movement. Let's have a look at the player class first. From a list got with obj classes we can see that there's a class named "DBDPlayer".

![](https://media.discordapp.net/attachments/797737763931291668/820572243394035772/unknown.png)

We can then get all the instances of the class by using `getall dbplayer`.

![](https://media.discordapp.net/attachments/797737763931291668/820572415179489320/unknown.png)

We got 1 result, since I only loaded into the tutorial and I'm the only player. From this we know the objects name, which is `BP_CamperMale01_C_0`. We can now do an object dump for it with `obj dump BP_CamperMale01_C_0`. 

Most of the properties we see at the top look weird, but scrolling through it we can see there are many integers, booleans and floats

(Not the entire object dump in the screenshot, it's long)

![](https://media.discordapp.net/attachments/797737763931291668/820574858152771634/unknown.png)

Many properties expect another object as the value. Scrolling a bit further we can also spot CharacterMovement=CharMoveComp. CharacterMovement sounds like something we'd to modify to change movement. We can dump the contents of CharMoveComp with the command `obj dump BP_CamperMale01_C_0.CharMoveComp`.

![](https://cdn.discordapp.com/attachments/797737763931291668/820577391549349888/unknown.png)

(Again, not the entire object dump in the screenshot)

![](https://cdn.discordapp.com/attachments/797737763931291668/820577997924728842/unknown.png)

There are lots of movement related variables here. If we wanted to change the value of MaxAcceleration for example, we'd use the set command. +
`set BP_CamperMale01_C_0.CharMoveComp MaxAcceleration <new value>`

This makes our character accelerate to their maximum movement speed incredibly slowly.

![](https://media.discordapp.net/attachments/797737763931291668/820579351455203368/unknown.png)

Any of the other values can also be changed to whatever you want using the same kind of syntax.

## Example 2

Looking through the list of classes, there's a class called PhysicsSettings. That could contain interesting settings to modify, so let's look at its contents.

![](https://media.discordapp.net/attachments/797737763931291668/820581764396482571/unknown.png)

Using `getall physicssettings` doesn't give us any results, so there are no instances of PhysicsSettings. We can still dump and modify its class defaults.

![](https://media.discordapp.net/attachments/797737763931291668/820582027744903168/unknown.png)

![](https://media.discordapp.net/attachments/797737763931291668/820582246364479498/unknown.png)

The very first variable is `DefaultGravityZ`, which is a float. Since it's negative by default, making it positive would revert the current gravity. +
`set physicssettings defaultgravityz 980`

Straight away, Dwight's tie started floating up. The player model itself still stuck to the ground though. This is because gravity is not calculated on the player if they're not falling.

![](https://media.discordapp.net/attachments/797737763931291668/820583073669972008/unknown.png)

If we fly a little up into the air with `ghost`, we can start falling and see the effects of our modified gravity. 

<video width="640" height="360" controls>
  <source src="https://cdn.discordapp.com/attachments/797737763931291668/820586828779880468/gravitydemo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Extra info

You can set the value of a vector or a similar structure accordingly. Not all variables have to be specified if you're not changing its value.

![](https://media.discordapp.net/attachments/797737763931291668/820588919489429524/unknown.png)

## Conclusion

Figuring out the general structure of the classes, what inherits what, where certain stuff generally is and doing what you want to achieve *WILL TAKE TIME* and lots of trial and error, so just do object dumps on classes with interesting names and see if there's anything interesting to modify! +
There are thousands of variables to modify with the console, and many many interesting things to do.

![](https://media.discordapp.net/attachments/797737763931291668/820589565722361906/unknown.png)