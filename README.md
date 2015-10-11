## DotaHouse
A concept build using the MEAN stack, built with MEANJS.org

DotaHouse is meant to be an in-house Dota 2 league where users can join non-ranked games together and play along side and vs other players in their same skill bracket. In-house leagues are created for players who want to take their games slightly more seriously than public matchmaking and want to improve their gameplay mechanics.

Integrated with Steamcommunity OAuth, and because the users MMR is not available as a public call, this tool relied on a user adding a steam chat bot to it's friends, from there the bot could then access the users dota 2 MMR or Match Making Rating. Once the bot retrieved the users MMR they would recieve a steam chat message to be notified that they no longer needed to be friends and the bot would remove the user from the friends list. The MMR is a rating that would determine the users bracket that they could access for in-house match making games.

The current status of this application checks if a users MMR has been added, if it has not it alerts the user to request the friendship of the bot.

After the application has the users MMR the user is placed into a lobby where they can join sub lobbies.

##TODO:
Once a user enter's a lobby, have them 'ready-up' after all 10 users have entered. Set a time period that a user has to ready-up before they are removed due to being AFK. Once all have been ready for a certain amount of time, a lobby password is generated for the lobby host(highest ranking player), however the code is shown to all.

Once everyone is readied up, and in the game, once the game finishes, players will all report a win or a loss, if there is a dispute, the match will be flagged and players can report a player who reported incorrectly. Have enough reports, your accout will be temp. suspended. Users have "x" number of reports per week.

Below is an excerpt on how to get a MEANJS application running.

## Prerequisites
Make sure you have installed all these prerequisites on your development machine.
* Node.js - [Download & Install Node.js](http://www.nodejs.org/download/) and the npm package manager, if you encounter any problems, you can also use this [Github Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages, in order to install it make sure you've installed Node.js and npm, then install bower globally using npm:

```
$ npm install -g bower
```

* Grunt - You're going to use the [Grunt Task Runner](http://gruntjs.com/) to automate your development process, in order to install it make sure you've installed Node.js and npm, then install grunt globally using npm:

```
$ sudo npm install -g grunt-cli
```

## Downloading MEAN.JS
There are several ways you can get the MEAN.JS boilerplate: 

### Yo Generator 
The recommended way would be to use the [Official Yo Generator](http://meanjs.org/generator.html) which will generate the latest stable copy of the MEAN.JS boilerplate and supplies multiple sub-generators to ease your daily development cycles.

### Cloning The GitHub Repository
You can also use Git to directly clone the MEAN.JS repository:
```
$ git clone https://github.com/meanjs/mean.git meanjs
```
This will clone the latest version of the MEAN.JS repository to a **meanjs** folder.

### Downloading The Repository Zip File
Another way to use the MEAN.JS boilerplate is to download a zip copy from the [master branch on github](https://github.com/meanjs/mean/archive/master.zip). You can also do this using `wget` command:
```
$ wget https://github.com/meanjs/mean/archive/master.zip -O meanjs.zip; unzip meanjs.zip; rm meanjs.zip
```
Don't forget to rename **mean-master** after your project name.

## Quick Install
Once you've downloaded the boilerplate and installed all the prerequisites, you're just a few steps away from starting to develop you MEAN application.

The first thing you should do is install the Node.js dependencies. The boilerplate comes pre-bundled with a package.json file that contains the list of modules you need to start your application, to learn more about the modules installed visit the NPM & Package.json section.

To install Node.js dependencies you're going to use npm again, in the application folder run this in the command-line:

```
$ npm install
```

This command does a few things:
* First it will install the dependencies needed for the application to run.
* If you're running in a development environment, it will then also install development dependencies needed for testing and running your application.
* Finally, when the install process is over, npm will initiate a bower installcommand to install all the front-end modules needed for the application

## Running Your Application
After the install process is over, you'll be able to run your application using Grunt, just run grunt default task:

```
$ grunt
```

Your application should run on the 3000 port so in your browser just go to [http://localhost:3000](http://localhost:3000)
                            
That's it! your application should be running by now, to proceed with your development check the other sections in this documentation. 
If you encounter any problem try the Troubleshooting section.

## License
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
