FREE API LIST: https://github.com/public-apis/public-apis
Pick those with `CORS: yes` or `CORS: unknown`
You'll need CORS to access the API through your code

# NPM Crash Course

PERSONAL TERMS & SYMBOLS:

- Dependencies+ => Dependencies and devDependencies
- `*` => if found beside a terminal line description, it means the code was found on a library's dedicated webpage, and may be outdated at some point

TOPICS WE'LL LEARN

> Install, remove, update, and list packages	Understanding package.json
> Local and Global Packages					 Dependencies vs devDependencies	
> Commands and Shortcuts					  Versioning
> NPM scripts and NPX

SOURCE: https://www.youtube.com/watch?v=jHDhaSSKmB0

### Introduction

To use NPM, you'll need to have NodeJS installed first

- NPM comes as part of the NodeJS installation
- NPX is also a part for the installation, and it becomes useful when we start doing local installs

Node Package manager is both a software on our computer and a package repository
It's a new and superior way to manage our code's dependencies, and we'll be using it to locally install our 3rd party packages

IN THE OLD DAYS:

People used to include libraries and 3rd party packages via additional script tags placed before the main.js file in their HTML. This led to a few problems when it came to large projects...

- Having our HTML file download all our JS is just messy
- Many times, we would have to download library files to our computer directly, which led to some tedious maintenance issues
- When a new version of the library would come out, you'd have to visit their site again, redownload the new version, and change the script tag (all manually)

#### Finding Packages

- Although you can search for libraries and frameworks on google, all major packages can be found on this site: https://www.npmjs.com/
- The site will link to a page that gives you the line to enter so you can NPM install the package through your terminal
- It also lets you access the package's GitHub repository, which likely has its own tutorials and explanations

![image-20210525164610015](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210525164610015.png)

#### NPM Basics

BEGINNER NPM COMMANDS:

```powershell
npm --version 		"tells you the version of NPM you have installed"
npm help 			"gives you a list of commands you can use in NPM"
```

Keep in mind that many commands have a short version that explains less when seen, but is faster to type out

Ex. `npm --version` and `npm -v` do the same thing

 

### Command Line Basics

All the build tools available on NPM only work in the command line, which we'll be learning the basics of.

- Move around and navigating the file system

- Create files and folders, copy them... etc

START:

The latest line that appears when you open the terminal for the first time should tell you the current location

![image-20210524013535974](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210524013535974.png)

You have multiple options for how you can use your computer's terminal
Use Git Bash or VS Code's built-in terminal 

#### Commands

Use up/down arrow keys to cycle through your recent commands when in the terminal

NAVIGATION:

```
ls					shows all files in current folder (use to see where you are)
dir 				same ^^

cd 					change directory- can go higher or deeper into the file tree
cd..				go 1 level higher
cd../..				go 2 levels higher
cd folderName		enter a file folder whose level you're currently on (goes deeper)
```

Deleting files and folders:

```
del map.js			delete the file named map.js
rmdir foldername	delete an empty folder
rm -r foldername	delete a folder with content inside (non reversible)
```

Adding files and folders:

```
mkdir name				create a new folder with a new name you specify
edit noo.js				add a new JS file to current folder (works with all filetypes)
edit map.js utils.js	add multiple new files to folder at once (good for modules)

mv map.js../		move map.js up 1 level to its parent folder
```

Creating a package.json file

```
npm init		creates a new package.json file and asks you questions 
npm init -y		^^ same but skips the questions
```

Other Actions

```
clear				clears console (does not reset position)
live-server			broadcasts your code environment just like the extension
```

#### Experimenting

![image-20210524014437155](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210524014437155.png)

You can't really see my screen, but this is what happened when I entered certain commands

`dir` :			![image-20210524014355816](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210524014355816.png)

`cd JS` => `dir` : ![image-20210524014632615](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210524014632615.png)

`mkdir foldah` => `dir` :

​			![image-20210524014950732](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210524014950732.png) ![image-20210524015034409](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210524015034409.png)

#### Files/Folders with Symbols in Names

Some files are just tougher to access than others because of the way they're named. Take this for example:

![image-20210524021741372](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210524021741372.png)

If we wanted to delete this folder and all its contents...

```
rm -r starter - Copy		 gives an error
rm -r "starter - Copy"  	 WORKS!
```



### About package.json

When it comes to NodeJS, package.json is the single most important file to understand
In many future examples, we'll assume you've created this file first

- This file holds all the dependencies and devDependencies that your application needs 
- It holds their version numbers too, since new/old versions may have some major syntax differences that can break your webpages
- In addition to that, it holds other information like your application name, version, and author

#### Build package.json 

You can build a package.json file manually, but that's a waste of time when you can use these terminal commands:

```JS
npm init 			"Option 1: Asks a few questions"
npm init -y 		"Option 2: Creates a JSON file quickly with all default answers"
```

- The questions will help you customize the JSON file that Node will build. 
- You can just hit enter several times to say "yes" on all the default answers after `npm init` if you're performing a really simple task. 
- Then the outcome of `npm init` and `npm init -y` will be the same

![image-20210525171959104](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210525171959104.png)

CHANGING DEFAULT VALUES

```powershell
npm set init-license 		'MIT change the default license to MIT instead'
npm set init-author-name 	'Brad Jones'
```

CHECKING/RESETTING DEFAULTS:

```powershell
npm get init-author-name			'checks default value for author name'
npm config delete init-author-name	'deletes your newly set default value'
```

#### dependencies VS devDependencies

- Libraries like LoDash, Leaflet are directly used in our code to add new features, so we consider them to be dependencies
- Frameworks like React and jQuery are also counted as dependencies as well
- Tools like webpack and Parcel aid us with project development only, so we consider them devDependencies

We install devDependencies slightly differently in NPM, and the tool gets placed in a separate object than the 3rd party libraries

in package.json when you install locally: ![image-20210524165041973](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210524165041973.png)

###### commonJS vs JS-modules

Many of your dependencies will rely on commonJS, which won't work with your modern ES modules syntax. 

- Name collisions will likely be all over the place, which is why we need Parcel's automatic transforms or Babel. 
- They revert ES6 syntax to ES5, which allows us to use new features while still being compatible with old standards



#### NPM Scripts

By default, a standard package.json file will only give you this for your script

![image-20210526143200390](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210526143200390.png)

NPM scripts can do a ton of things, and I can't describe them all here- and it is beyond the scope of what I needed when writing this

- You could have a script that automatically starts the live server when a new dev runs a command
- You could possibly have a start script that tells what the entry point is

#### For more Details...

Description of each property in package.json: 
https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/



### Global or Local?

You have the option to install Parcel or 3rd party packages globally or locally. 
In most cases, you should stick to installing locally

GREAT ARTICLE ON TOPIC: 
https://codeburst.io/maybe-dont-globally-install-that-node-js-package-f1ea20f94a00

- Local installs create a `node_modules` folder in your project environment, which you should delete after you're done working on a project 
- Any future viewers can recover all the files you deleted with a simple `npm install`

#### Issues with Global

ISSUE 1: MISMATCHING VERSIONS

Let's say you download Gulp locally and globally for a project, and everything works fine because the versions match. Weeks later, you download an older project which relies on an outdated version of Gulp

- Now your global Gulp version is different than the local Gulp used in multiple projects. There's a good chance that these version mismatches are eventually going to conflict and cause problems. 
- Your global `# gulp` command is going to try to do something that a project’s local Gulp is incompatible with (or vice-versa). That’s an obvious problem

ISSUE 2: PROJECT SELF-CONTAINMENT

Projects should contain everything they need to work in the file folder they come in. 

- If you're contributing to projects and it requires you to globally install a bunch of packages, what happens after you're done with the project and delete it? 
- You'll have a bunch of globally installed software on your OS, which has the potential to cause further problems down the line thanks to issue 1

This doesn’t mean that a project shouldn’t depend on external services like a database or 3rd-party API. I’m only referring to Node dependencies for Node projects

#### NPM: Node Package Manager

NPM lets you globally install any package on your machine

- You can manage packages in your project with NPM
  Packages can range from frameworks like React, to libraries like LoDash
- Packages used with NPM are installed globally, which is not preferred in most cases due to issues described earlier (versioning, mainly)

#### NPX: Node Package Execute

NPX is most commonly used to run scripts located in `./node_module/bin`


- Packages used by NPX are not installed globally
  Local installs which produce `mode_modules` folders in your root folder will suffice

- The NPX command is required in every app life cycle only once

This package gets invisibly installed globally whenever you install `npm` 
It's great for avoiding versioning/dependency issues



### Installing and Removing Packages w/ NPM

We'll be learning how to install packages using NPM, which opens the floodgates for what we can do with our code

The installs can be global OR local

- You can tell something's local if it shows up in "node_modules"
- You can tell something's installed globally with a certain command, or if the terminal line had -g or --global in it

DEPENDENCY OR DEV-DEPENDENCY

The installed packages will be treated as dependencies, or dev dependencies. 
The terminal lines for adding both are a bit different

YOU CAN'T USE THESE LIBRARIES YET: 

- You'll need a bundler to actually use these packages, even if you install them with npm- this is thanks to NPM's reliance on commonJS modules
- The exception is if you install an ES-modules build of your library (ex. Lodash)
- I wouldn't bother using ES Module builds though, the bundling process is straightforward and explained well in the next chapter

#### Installing & Removing Dependencies+ 

- You can find the syntax for installs by checking out a library's dedicated page
- You also don't need to include < > in your terminal lines

———————————————————————————————————————————————————————————————
A) Removing a local package from your `node_modules` directory:

```powershell
npm uninstall <package_name>					"unscoped package"
npm uninstall <@scope/package_name>				"scoped package"
```

Optional** To confirm that the uninstall worked correctly, check that the node_modules directory no longer contains a directory for the uninstalled package(s)

```
dir node_modules

TO SEE VISUAL CHANGES IN VSC =>		
CTRL shift P => select reload window  
(or else node_modules will not be updated visually)
```

———————————————————————————————————————————————————————————————
B) Removing a local package from the `package.json` dependencies:

```powershell
npm uninstall --save <package_name>				"unscoped package"
npm uninstall --save <@scope/package_name>		"scoped package"
```

To check, just look inside package.json and see if the dependency is gone or not

———————————————————————————————————————————————————————————————
C) Uninstall global package from OS:

```powershell
npm uninstall -g <package_name> 
"uninstall synonyms: remove, rm, r, un, unlink"
"can also manually delete files (see challenge 2)"

npm list -g --depth=0 
"use to check list of globally installed packages"
```

Scoped vs Unscoped Packages: 
https://stackoverflow.com/questions/36667258/what-is-the-meaning-of-the-at-prefix-on-npm-packages

#### Install/Remove Examples

ASSUMPTION: You've created a package.json file already (see lesson for how)

CHALLENGE 1: Add/remove dependencies

a) Install easytimer.js as a dependency
b) Remove it as a dependency from package.json
c) Delete that library's contents from the node_modules folder

Assumption: package.json has already been created

![image-20210526120047012](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210526120047012.png) ![image-20210526120119020](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210526120119020.png) ![image-20210526122723519](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210526122723519.png)

```powershell
npm install easytimer.js 				"* install easytimer as a dependency"
npm remove easytimer.js --save-dev		"removes easytimer from package.json"
npm uninstall easytimer.js				"removes easytimer from node_modules folder"
```

———————————————————————————————————————————————————————————————

CHALLENGE 2: Add/Remove dev dependencies

a) Globally install gulp & nodemon (both are dev dependencies)
b) Add both of them as dev dependencies on your package.json file
c) Remove them as dev dependencies from package.json
d) Uninstall the global packages from your OS

After B) ![image-20210526111123176](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210526111123176.png) After C) ![image-20210526111428196](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210526111428196.png)

```powershell
'————————————————【 A 】—————————————————————'
npm install --global gulp-cli 		"* install gulp globally"
npm install -g nodemon 				"* install nodemon globally"
'————————————————【 B 】—————————————————————'
npm install --save-dev gulp			"* add gulp as a dev dependency"
npm install --save-dev nodemon 		"* add nodemon as a dev dependency"
'————————————————【 C 】—————————————————————'
npm remove gulp --save-dev
npm remove nodemon --save-dev
'————————————————【 D 】—————————————————————'
'See the Managing Global Installs subsection (video)'
```

ALTERNATE LINES FOR TERMINAL:

There are different keywords you can use to remove dependencies...
'remove', 'uninstall', 'rm'...etc

```powershell
npm uninstall gulp --save-dev
npm uninstall nodemon --save-dev
```



#### Managing Global Installs on your OS

To see what you have installed globally:

```powershell
npm list -g --depth=0 
"lists installed packages in console"
"lets you open up the global packages folder in VS-code (delete what you want)"
```

![image-20210526001514561](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210526001514561.png) ![image-20210526001643436](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210526001643436.png) <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210526001807714.png" alt="image-20210526001807714" style="zoom:80%;" />

- Use the output this line gives to uninstall global packages you no longer want
  You open packages folder in VSC and delete your files there
- You can locate the path to do delete your files in the file explorer as well



CHALLENGE 2 PART D) Delete gulp and nodemon from your OS

> < video src="Typora-vids/global_uninstall_pkg.mp4" controls> </video>

Drive version: https://drive.google.com/file/d/1tyA0LzIWqGRnsoQWulBP90m6frLmf2qy/view



#### Sharing dependencies+

When you copy your project someplace else, you should never include the giant node_modules folder that contains your 3rd party packages 

- This will slow you down, especially in large projects where you're using several
- 3rd party packages are stored in NPM regardless, so they can be accessed by anyone

TLDR: 
Delete your node_modules folder or use git ignore when you store your code
Use 1 of these lines to redownload what the creator used to make his/her project

```powershell
npm install 				'Access devDependencies and dependencies'
npm install --production 	'Access dependencies only'
```



### Versioning

#### What Version Numbers Mean

 						<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210526135041787.png" alt="image-20210526135041787" style="zoom:67%;" /> 

- If a new major version is released, there's a decent chance you'll have to update your code to abide by any new syntax they may have replaced old code with

#### Version Symbols in package.json

In your package.json, you can determine which package versions you share with others if you use the correct symbols

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210526134455478.png" alt="image-20210526134455478"  />

| symbol   | `npm install` will download...                               |
| -------- | ------------------------------------------------------------ |
| "^4.3.4" | the latest minor version                                     |
| "~4.3.4" | the latest patch                                             |
| "*"      | the absolute latest version, even if a new major version's out<br />usually a bad idea |
| "4.3.4"  | version 4.3.4, no matter what else gets released             |

Scenarios:

> - If we type "^4.3.4", and a version 4.4.0 is released => new devs receive 4.4.0
> - If we type "^4.3.4", and a version 5.0.0 is released => 
>   new devs receive the last 4. version, whatever it was. 4.9.9 maybe? Who knows
> - If we type "*", and a version 5.0.0 is released => new devs receive 5.0.0

#### Downgrading & Updating Dependencies

EXAMPLE: Downgrade a library we already installed then update it

At the moment, Lodash's most recent version is 4.5.0- downgrade to 4.4.0 for me

```powershell
npm install lodash.clonedeep@4.4.0 --save 		"install older 4.4.0 version"
npm update lodash.clonedeep						"return to most recent version"
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210526134102446.png" alt="image-20210526134102446" style="zoom:80%;" />  <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210526134455478.png" alt="image-20210526134455478" style="zoom:80%;" />   <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210526134102446.png" alt="image-20210526134102446" style="zoom:80%;" />

We're using a 1-feature version of Lodash right now, but you get the point
Before this example, we already had it pre-installed



# 3rd Party Packages & Bundling

This chapter is not about the JS language itself. It focuses on the development process and the modern tools/ecosystem centered around JS that all developers use

### Overview of Modern JS Development

![image-20210523103948469](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210523103948469.png)

#### Bundling:

- Nowadays, we divide our projects into multiple modules and bundle them all together into one file afterwards- it makes code more organized and maintainable
- Bundling helps to eliminate unused code and suppress what's left as well
  It's also good for performance to only deploy 1 file for production
- Older browsers don't support modules at all, so they won't be recognized by those browsers without this step

#### NPM and 3rd Party Packages:

- Modules often include 3rd party packages to be used alongside your regular JS code
- 3rd party packages/modules is the technical term for open source libraries
  EX. React framework, jQuery, Leaflet, Lodash...etc
- NPM is the repository where we store, install, and manage our 3rd party packages and tools (Babel, Parcel, and webpack can all be accessed via NPM)

#### Transpile/Polyfill:

- This converts modern JS syntax and features to old ES5 syntax, so that old browsers will be able to read it
- To use 3rd party packages without ES module builds in your JS code, you'll need to convert their commonJS-reliant builds with Babel

LANGUAGE SUPERSETS

- When you use language supersets like SASS or Typescript, you'll need a bundler to help you compile them at runtime after Parcel/Webpack does its work
- Parcel's documentation is very intuitive and gives explicit instructions for how to compile most technologies you'll rely on 

Many more down the list: ![image-20210525162052339](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210525162052339.png)

### Parcel and its Features

Parcel is the easier-to-use but less popular version of webpack. 

- It's ready out-the-box and requires no configuration if all you want is basic module loading and asset bundling
- If you want to use Parcel with frameworks like React, there may be some configuration required, but nothing as daunting as webpack 
- You can either install Parcel locally or globally (the procedure differs)
  In general, you should use the local install approach

 FEATURES: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210524235441952.png" alt="image-20210524235441952" style="zoom:90%;" />



#### Hot module replacement 

```js
if(module.hot) module.hot.accept(); 	// put in your main JS file
```

- Does what the live server extension in VSC does (automatically)
- If you add the above line, the webpage will still update after changes, but it won't be forced to reload
- The hot module feature works when you change JS/CSS/HTML/SASS...and more

This is awesome for maintaining a certain webpage's state
Ex. When designing Bankist, we had to sign back into user profiles after every single change we made in our JS file (annoying AF)

#### Code splitting

The splitting of code into various bundles or components which can then be loaded on demand or in parallel.

- As an application grows in complexity or is maintained, CSS and JS files or bundles grow in byte size, especially as the number and size of included third-party libraries increases. 
- To prevent the requirement of downloading ginormous files, scripts can be split into multiple smaller files. 
- Then features required at page load can be downloaded immediately with additional scripts being lazy loaded (only when needed) after the page or application is interactive, thus improving performance.
- While the total amount of code is the same (and perhaps even a few bytes larger), the amount of code needed during initial load can be reduced

#### Asset bundling

Parcel takes multiple JS files and dependencies then converts them into 1 single large file which will be used by the browser to load everything (the bundle)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210525111804468.png" alt="image-20210525111804468" style="zoom:40%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210525111835270.png" alt="image-20210525111835270" style="zoom:52%;" />

- Your dependencies also likely have their own dependencies
  Parcel makes a dependency graph to keep track of how things should be put together
- You just tell the bundler what your ENTRY POINT is, then it will look at all your imports/dependencies and try to piece everything together into that single file
- The entry point will usually be index.html



### MAIN LESSON: Parcel Bundling & NPM Scripts

Following the "Building for Production" section of Parcel's Getting Started page

OBJECTIVES:

1. Bundle 3 things together; `script.js`, `clean.js`, and Lodash library

script.js : Our central JS file that we use to make our site dynamic
clean.js : A file we import a function from to use inside script.js

2. Use Parcel as a local dev dependency, not as a globally installed package
   Every dependency should be installed locally, even Parcel (RECOMMENDED)

- By doing this, our project will be ready out-the-box as soon as any future devs type "npm install" to clone our npm_modules folder
- If we were using a global version of Parcel, only a few commands would change (we wouldn't preface anything with `npx`)

#### Starter Files

Starter file folder: ![image-20210527011819018](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210527011819018.png) 

clean.js :	  	 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210527171437171.png" alt="image-20210527171437171"  />

main.js code: (we'll be adding more onto it later during our procedure)

```js
import {roundNumber} from './clean.js'  // import function from clean.js
console.log("Parcel is online!")  // should see when viewing the webpage preview
//—————————————————————【 Use imported function 】——————————————————————————
let toBeRounded= roundNumber(9.666,2)
console.log(toBeRounded) // should be 9.67
//—————————————————————【 use lodash 】——————————————————————————
let _= require("lodash")
const girl={ name: "Kath", age: 29, family: ["Sis", "Father"] }
const girlClone= _.cloneDeep(girl)	 // deepclone the girl object then test it out

girlClone.age=25; 
girlClone.family.push("Horse")	
console.log('orig girl:', girl);
console.log('clone girl:', girlClone);
```

After we're done: ![image-20210527171929696](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210527171929696.png)

- You can have all this JS code ready from the start if you want, or you can adjust it during the process I'm about to describe
- You're not forced into using 1 import method; use any 1 of the 4 you prefer

#### Procedure in Depth

!!! Before we begin, remove type="module" from your script tags

—————————————————————————————————————————————————————————————
Step 1: Create package.json and install all dependencies you'll need

```powershell
npm init 						"create package.json (set index.html as entry pt)"
npm i parcel --save-dev 		"install parcel locally as a dev dependency"
npm install --save-dev sass		"install SASS as a dev dependency"

npm i --save lodash				"install lodash as a dependency"
npm install core-js				"locally install core JS for polyfilling purposes"
npm i regenerator-runtime		"locally install pkg that polyfills async JS"
```

—————————————————————————————————————————————————————————————
Step 2: Directly edit your package.json file and set up your npm scripts

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210527175243923.png" alt="image-20210527175243923" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210527234847485.png" alt="image-20210527234847485" style="zoom:80%;" />
>
> Forgot to add SASS in our first go around (that's why it's not in the devdependencies list)
> Carry on! Nothing about the rest of the procedure changes
>
> If you run into issues, change 
> "main": "index.html" 		to 			"default": "index.html"

- Set the "main" property to our future entry point => `index.html`
  Added a dev and build script which targets the entry point => `index.html`
- Decide which versions of libraries future contributors will receive when they enter "npm install" to clone your node_modules folder (change version symbols)

———————————————————————————————————————————————————————————————
Step 3: Specify an entry point with NPX, then enable hot module reloads

```powershell
npx parcel index.html	
"specify entry point and get offered a live-server style preview"
```

We need to preface "parcel index.html" with NPX because we're using Parcel locally
If using GLOBAL parcel, skip the npx part

——————————————————————————————————————————————————————————————-
Step 4: Paste the following lines into your central JS file 

```js
if (module.hot) module.hot.accept() 	// "enables hot module replacement"
import 'core-js/stable'; 				// "enables polyfills"
import 'regenerator-runtime/runtime' 	//"enables polyfills for async JS"
```

These will enable certain features that you'll need to use hot module replacement and to property set up your conversion/polyfilling

Step 5: During development you can run your webpage using the following command

```
npm run build
```

———————————————----————【 TIME SKIP 】——————————————————————————————
Step 6: Once your project is finished being worked on, build your final bundle
More detailed instructions in the "Final Project Build" lesson in Deployment Chapter

```powershell
npx parcel build index.html			"bundle code and convert to ES5 via Babel"
```

![image-20210527173950028](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210527173950028.png)

- This step compresses everything and has dead code elimination for all parts of libraries that aren't being used
- It will give you the sizes of all the files that'll be send over for production

———————————————————————————————————————————————————————————

#### Replacing NPX with NPM Scripts

- As an alternative to NPX commands, you can type out NPM scripts inside your package.json to achieve the same results
- You don't even have to pick 1 or the other- Use them whenever each is convenient
- Ex. Want to re-bundle everything or specify a new entry point? Use an npm script if you don't feel like using NPX

NPX:

```powershell
npx parcel index.html			"step 3"
npx parcel build index.html		"step 6"
```

NPM SCRIPTS:		![image-20210628152328957](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210628152328957.png)

Once these are typed, just enter the following into the terminal to run them

```powershell
npm run dev				"step 3"
npm run build 			"step 6"
```

If you close your VSC window and want to re enter your project, simply re-enter steps 3 and 5. 

#### End Result and Future Proofing

FUTURE PROOFING:

- The way things work might change in a couple years, so this procedure may not even work properly past a certain point
- To get around that, install the same versions that we used today when locally installing packages later on

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210527234847485.png" alt="image-20210527234847485" style="zoom:80%;" />

END RESULT:

After all our actions, Parcel will bundle up our code and create a new folder called "dist", which stands for distribution

- This folder is what will be sent to the browser, and it is thoroughly optimized to the point where we can hardly read what's going on inside

![image-20210527011242125](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210527011242125.png)

#### Compiling SASS with Parcel

FYI: You don't have to follow this procedure 
(you'll do these steps in the default procedure anyway, and Parcel does this autonomusly)

1. Inside index.html, have a link tag point to the main SASS file in your project
2. Use NPX or an NPM script like so...

```
<link rel="stylesheet" href="src/sass/main.scss" />		have ready in HTML
——————————————————————————————————————————————————————
npx parcel index.html			input to terminal		
```

![image-20210628153513764](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210628153513764.png)

#### Where these Commands originate

- Whenever we use a new library, we just go to their dedicated webpage and check out the documentation and "Getting started section"
- Even if we don't understand what's going on, we experiment and troubleshoot with the commands and actions we do know

LEARNING HOW TO USE A LIBRARY

- Not all libraries are popular enough to have a Youtube series about them
- Read their documentation, rework their simple examples, and tweak other projects you find online to learn how to use them

EXAMPLE: How I learned to use Lodash the first time

![image-20210527020335713](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210527020335713.png) <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210527020542061.png" alt="image-20210527020542061" style="zoom:80%;" />

​				

### Configuring Babel and Polyfills

Babel will convert ES6+ code back to ES5 for the folks using outdated operating systems that won't let them update their browser. 

This conversion already happened during the last lesson's procedure. 
If you look in your bundled JS file, you'll notice its all in ES5

#### Understanding Babel

- Babel can be configured so you can specify exactly which browsers you want your code to support, but that's a lot of work
- Instead, we let Babel make several default choices for us
- They cover our bases for the most part, and most of the market share will be able to experience our website properly

Presets and Plugins: 

- Babel's code transformations are enabled by applying plugins to your config file
- Babel has plugins for most ES6 features like arrow functions, template literals...etc

#### Polyfills

Babel can only convert syntax back to ES5 if the code acted as syntactic sugar or had alternatives back then

- Ex. Arrow functions are converted back to regular function declarations, because they both accomplish the same task
- Truly new features like Promises or the find() method are brand new to the language They have no ES5 alternatives, so these require polyfills



This lesson continues on from last lesson's final product
We've bundled our code, so now its time to convert that it back to ES5 with Babel

> Drive Version
> https://drive.google.com/drive/folders/1vOhozvWZNNX7T7Hpt4I3Q7ijaUi6nRPE?usp=sharing
>
> Local Version
> /Study Projects/node/root_test3

Fortunately for us, Parcel will automatically apply Babel



### Manage Packages with NPM: Fast Notes

#### Dependencies

Install lodash 

```
npm install lodash
```

Install old version of lodash (will override other installed versions)

```
mpm install lodash@4.17.3
```

Uninstall lodash

```
npm uninstall lodash
```

#### dev-dependencies

Install SASS as a dev dependency

```
npm install sass --save-dev 
OR
npm install --save-dev sass
```

Uninstall SASS as a dev dependency

```
npm uninstall sass
```

#### Global Installs

Install nodemon globally

```
npm install --global nodemon
```

See a list of all global installs

```
npm list -g --depth=0
```

Uninstall a global package

```
npm uninstall -g  nodemon
```



# Deployment

### Final Project Build 

Once you're finished building your project (at least for now), it's time to compress your code and get it ready for deployment

#### Creating your Final Build

1.  Delete your `.parcel-cache` and `dist` folders from your stack
   (ASK PERMISSION BEFORE YOU DO THIS, if you're working at a company)

![image-20210711125220933](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210711125220933.png)

2.  Modify your package.json file

BEFORE:  ![image-20210711125645767](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210711125645767.png)

AFTER: 	![image-20210711130022819](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210711130022819.png)

Parcel V2 beta has a bug that can only be fixed with `--dist-dir ./dist`
This may be patched out, resulting in slightly different syntax later on

3. Run `npm run build` in the terminal

PARCEL V1:
The commands may change depending on the version of parcel you're using

- If using Parcel V1, use `--out-dir` instead of `--dist-dir`
- Also, the import syntax for icons in your project will be different as well 
  (relevant in the forkify project, but may not be in another)



### Netlify: Front-end Only

When deploying our site to Netlify, we have 2 options for how we'd like to do so; the manual deploy, and the continuous integration deploy method

#### Continuous Integration Method

Continuous integration links our project to a git repository
Whenever we make a change in that repo, it gets deployed to our site on Netlify

TO CHANGE OUR LIVE WEBSITE:

1. Have your final project build ready (see prev. lesson)
2. Make your changes locally on your laptop
3. Push those changes up to Github
   The site will get updated automatically

PROCEDURE:

1. Go to the sites tab and hit the "New site from Git" button

2. Select your repo from the list

3. Fill in the fields to deploy your site properly

- Make sure your build command coincides with your package.json file

- `dist` should be the folder containing your optimized build, if you followed the previous lesson 
    And If your site is simple enough to not need a bundler, just use a manual deploy 

![image-20210711164015896](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210711164015896.png)

4. Once deployed, your site is visible to everyone that has its URL
   Enter it's settings to change the URL name, delete the project...etc

#### Manual Deploy Method

With this method we just upload our local version of our project to Netlify

PROCEDURE

1. Have your final project build ready (see prev. lesson)
2. Log into your Netlify account, then hit the "Sites" tab
3. Drag and drop your `dist` folder inside 

![image-20210711161247752](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210711161247752.png)

#### Netlify Perks and Limitations

PERKS:

- Your website gets an SSL certificate, meaning your link will be HTTPS instead of HTTP
- Your site will be spread across multiple servers worldwide, meaning people will get routed to the nearest one when they search for your site (helps speed)

LIMITATIONS: Front-end only

Netlify is a free service that lets you host static front-end websites. 
You are free to use API's and libraries, so long as no backend code is part of your build



# Yarn 3.0: Faster NPM

Yarn is just NPM but with much faster install speeds and slightly different syntax
The differences between yarn 1-3 make it real tough to use if you need global installs though

### Installation & Advantages 

#### What is it?

Yarn is an alternative to NPM which is pretty colose to it in terms of speed (it's a tad faster)

- Any package that can be installed with npm can be installed with yarn
- NPM is built into NodeJS while yarn is not

#### Installation & package.json

1. Check if yarn is already installed with `yarn -v`

2. If it isn't follow the instructions on the Yarn Homepage
   Is currently [here](https://yarnpkg.com/getting-started/install) but this will change as new versions get released

3. Check to see what version of yarn you have available with `yarn -v` again

- Yarn 2.0 has a strange way of installing itself in its early 2.0 versions
- If the version is still v1, then follow the remaining steps

------

4. Create a local package.json file using yarn and answer all the prompts

```
yarn init 
```

Add your scipts too:		 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210527175243923.png" alt="image-20210527175243923" style="zoom:80%;" />

5. Enter the following in your terminal

```
yarn policies set-version berry
```

#### Don't mix NPM/Yarn

Don't install packages with Yarn then install others with NPM

- It can work sometimes, but it introduces potential complications
- If someone does and it raises issues, try deleting the node_modules folder, then run `yarn install` again to install everything in package.json with yarn exclusively



### Installing Packages with Yarn

Yarn's syntax differs from NPM, but they both do the same things (mostly)

FIND A YARN INSTALL FOR YOUR FAVORITE PACKAGES:
https://yarnpkg.com/package/nodemon

#### Dependency Installs

Install the latest Lodash version as a dependency

```
yarn add lodash
```

Install an old version of Lodash  
This will override the previous install and can be used to upgrade or downgrade

```
yarn add lodash@4.17.3
```

Uninstall Lodash as a dependency

```
yarn remove lodash
```

#### dev-dependency Installs

Install Lodash as a dev-dependency

```
yarn add lodash -D
```

Uninstall Lodash as a dev-dependency

```
yarn remove lodash
```



#### Global Installs (avoid)

As of early 2022 using Yarn 3.1.1 or higher, try not to globally install anything using yarn

- I can't find a clear explanation for how to globally install using yarn
- I also can't find an answer for how to check for a list of globally installed packages using yarn either

There were old solutions for this, but they have been patched out as of Yarn 2.0

![image-20211227231747431](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211227231747431.png)

#### npm install alternative

When you recieve a project with a package.json, you can easily install all its package dependencies in 1 go with `npm install` . Yarn can do the same thing, with a different command line

```
yarn install
```

#### Check for Outdated Packages

Yarn can identify which packages you have installed for your project are outdated

YARN 1:

```
yarn outdated
```

------

This useful feature was actually removed for some reason
In Yarn 2.0 and onwards, you need to quickly install a plugin to get this old command to work

YARN 2.0+

```
yarn plugin import https://github.com/mskelton/yarn-plugin-outdated/raw/main/bundles/@yarnpkg/plugin-outdated.js

yarn outdated 
```

![image-20211227233248624](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211227233248624.png)



### yarn.lock file

#### Purpose

The yarn.lock file is important for fresh installs- when someone DL's a project without any dependencies installed yet

- Yarn.lock looks inside your package.json and will force your computer to install the specific versions listed there after the coder enters `yarn install`
- The versions installed may change if the dependency is listed with a certain version symbol
  Ex. `"lodash": "^4.17.21"` may cause lodash 4.18.21 to be installed one day

#### Working with it

For the most part you don't want to touch this file- it is completely managed by Yarn
There are a few scenarios that may come up however

1. Check to see if yarn.lock package versions are in sync with package.json

```
yarn check (depreciated as of Yarn 2.0)
```

2. If the yarn.lock file gets deleted, run the following

```
yarn install
```



### Run Scripts with Yarn

Just like with npm, your package.json should probably have some helpful scripts defined inside

#### Make sure they Exist

package.json example

```json
{
  "name": "yarn_canvas",
  "version": "1.0.0",
  "default": "index.html",
  "author": "jxb",
  "license": "MIT",
  "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
  },
  "packageManager": "yarn@3.1.1",
  "devDependencies": {
    "lodash": "^4.17.21",
    "parcel": "^2.0.1"
  }
}
```

#### Running Scripts

This works the same as in NPM, just with slightly different syntax

```
yarn run dev		// runs a live preview of your site using Parcel HMR
```

![image-20211228000804146](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211228000804146.png)





# ====== FEATURE CREATION ======

There are plenty of webpage features that we'll be learning
This is a collection of ones we've encountered/built 

# Dynamic Feature Creation

### Coordinates and Scroll Methods (S1)

Smooth scrolling is when you click on something which will cause your webpage to ~~smoothly scroll~ down to what that thing is referencing

ALL METHODS DEMO'D HERE: [Smooth Scrolling (codepen.io)](https://codepen.io/NFuego24-7/pen/QWdBYmM) 

There are 2 main ways of achieving this, the classic method, and the new method which isn't universally supported yet (as of early 2021)

#### Get Viewport Dimensions 

```js
// Actual syntax
let a= document.documentElement.clientHeight 
let b= document.documentElement.clientWidth
```

These give you the height and width of the current viewport. 
If you adjust the webpage's window/view area, then the values returned will change

#### Current Webpage Location Coordinates

```js
let c= window.pageXOffset
let d= window.pageYOffset
```

These tell you how far the document's viewport has scrolled vertically or horizontally at the current position. 0 for both would be the upper left corner of the webpage

Positive horiz movement: 	→ 
Positive vertical movement:  ↓

#### Get Relative Coordinates of an Element

```js
htmlEl.getBoundingClientRect()
```

This method returns a DOMRect object containing key value pairs that describe certain aspects of the element it's used on. 

They're given in pixel units, and are relative to wherever the viewport may be

- The aforementioned aspects are width, height, and left/right/bottom/top 
- The width/height take the element's content, padding, and border widths into account
  (Means if `box-sizing: border-box` is set for the element, this would be directly equal to its width/height anyway)

<img src="https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect/element-box-diagram.png" alt="img" style="zoom: 33%;" />

EXAMPLE: 

Button b1 logs its own DOMRect when pressed. We get different results when we click it in different viewport locations.

a) At the default location upon page loading (x and y offset equal 0)
b) At a point where we've scrolled down and can only see half the button

![image-20210418005923561](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210418005923561.png)

![image-20210418010150471](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210418010150471.png)

#### Scroll Viewport Relatively

```js
scrollBy(x-offset,y-offset)
```

- This object will forcibly scroll your webpage horizontally and vertically, according to the 2 pixel arguments you feed it. 
- It starts moving the viewport FROM the position it was originally
  Just like `position: relative` top/left/bottom/right movement in CSS

Positive horiz movement: 	→ 
Positive vertical movement:  ↓

EXAMPLE: A button takes you 100 px lower on click with  `.scrollBy(0,100)`

If you press that button at different scroll heights, the locations you'll be scrolled down to will differ

#### Scroll Viewport Absolutely

```js
// Ver 1 
window.scrollTo(x-coord, y-coord)

// Ver 2 (with options)
window.scrollTo({
  top: 100,
  left: 100,
  behavior: 'smooth'
});
```

We need to pass this method the coordinates of where we want it to scroll. 

- The methods explained earlier should help you find elements' coordinates
- Just make sure that the coordinates you feed this method are absolute, NOT RELATIVE
- This may require a bit pf creative math on your part 
  (adding viewport location to relative displacement of an element)



### Smooth Scrolling Implementation (S2)

Demonstration: [Smooth Scrolling (codepen.io)](https://codepen.io/NFuego24-7/pen/QWdBYmM) 

#### Old School Way

I've created a function that automates smooth scrolling to the element of your choice
If scrolls horizontally and vertically to the destination element's position
ARG: The element you want to scroll to

```js
function scrollHere(destinationEl) {
  // Relative Coordinates of the destination element
  let relY_dest = destinationEl.getBoundingClientRect().y;
  let relX_dest = destinationEl.getBoundingClientRect().x;
  // Absolute Coordinates of the Current Viewport
  let absY_Viewport = window.pageYOffset;
  let absX_Viewport = window.pageXOffset;
  // calculate the desired coordinates you want to scroll to
  let destinationY = relY_dest + absY_Viewport;
  let destinationX = relX_dest + absX_Viewport;
  window.scrollTo({
    top: destinationY,
    left: destinationX,
    behavior: "smooth",
  });
}
```

#### Logic Behind Old School Method

```
<<  absoluteCoordinates= relative position + absolute position of viewport  >>

SIMPLE EXPLANATION IN 1D: (Though this rule is true in both X and Y directions )
You want to know the exact distance between your house, and the mailbox
Your house is the starting point

You're currently 8m away from the mailbox (relative coords of destination)
You know you've walked 4m from your house already (absolute coords of viewport)
The absolute distance between the mailbox and your house is 8+4 meters
```

#### New School Way

```js
destinationEl.scrollIntoView({behavior:'smooth'})
// (not universally supported yet)
```

This does the exact same thing as the function I created manually- so use whichever you prefer. This may be universally supported at some point down the line



### Building a Tabbed Component

A tabbed component is when you have an element that changes webpage content after its clicked:

![image-20210421043717666](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210421043717666.png)

![image-20210421043756391](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210421043756391.png)

#### Useful Custom Function

You're usually just adding and removing classes that are styled in CSS to change the appearance of your webpage after a button is clicked

```js
// This ƒ() removes a classname from all potential element locations then adds it to one element of your choosing 

function classMove(locationsArray, newLocationEl, classNameString) {
  locationsArray.forEach(el => {
    el.classList.remove(classNameString); // remove class names from all possible spots
  });
  newLocationEl.classList.add(classNameString);
}
```

#### Procedure

1. Make clicking any location on the button return the button element
   Event delegation (optimizes webpage performance)

2. Make the clicked tab button bounce upwards, while the others stay down
   Class moving
3. Make the tab's content appear once clicked
   Class moving

Final code for the tab event Listener with no context:

```js
const tabs = document.querySelectorAll('.operations__tab'); 
// buttons to press for tab activation
const tabsContainer = document.querySelector('.operations__tab-container'); 
// only contains btns
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', e => {
  //#1: 
  const clicked = e.target.closest('.operations__tab'); // pick nearest btn element
  if (!clicked) return; // end handler early if we get null back from closest()
  //#2: 
  classMove([...tabs], clicked, 'operations__tab--active');
  //#3: 
  let clickedData= clicked.dataset.tab // 1, 2, or 3
  let associatedDiv= document.querySelector(`.operations__content--${clickedData}`)
  classMove([...tabsContent],associatedDiv,'operations__content--active');
});
```

Each of these steps boils down to a really simple operation, but we use sophisticated concepts to make them work in this example:

- Custom functions for class adding/removing
- closest() with guard clauses to pick the right element when the parent container is clicked
- Data attributes to relate the buttons you clicked to another element

You can use more juvenile methods to get the job done, but you should probably get used to these. Find code below

https://drive.google.com/drive/folders/1UNaaxxYkkQMUM5pqusqF-PCxxhU7Twev?usp=sharing
[JSFiddle - Code Playground](https://jsfiddle.net/JasonXtuyotech/sgp2akbL/#save)

### Fade in and Out after Hovering an Element

Not hovering:		 ![image-20210421110129388](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210421110129388.png)

Hovering:			 ![image-20210421110046520](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210421110046520.png)

Not hovering again:   ![image-20210421110129388](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210421110129388.png)

#### PROCEDURE:

1. Reduce the opacity of every link element besides the one you're hovering over
   Need the mouseover event listener. Capture all anchors but the one you're hovering
2. Return opacity back to normal as soon as you stop hovering an anchor
   Need the mouseout event listener.
   The handler should be identical to step 1's but with a different opacity value

Capturing all anchors except the one you're in

![image-20210421111000674](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210421111000674.png)

mouseover event listener:

- Use closest() to capture the nearest `<ul`, then use querySelectorAll on that to capture all the anchors (depicted above)
- Delete the anchor you clicked on from the HTMLcollection
  You'll probably need to convert that to an array first, to use `splice(ind,amount)`
- Change the opacity of all the elements after that deletion to about 0.4

mouseout event listener

- Exact same as the first, just with a different event type and opacity value. 
  Great chance to use an event handler with an argument

#### JS Code

```js
const navContainer = document.querySelector('.nav__links');
function changeOpacity(e, opacity){
  const nearestUL = e.target.closest('.nav__links'); //finds nearest ul
  const anchorsIn_nearestUL = [...nearestUL.querySelectorAll('.nav__link')];
  const clickedAnchor = e.target.closest('.nav__link');

  if (!nearestUL) return;
  if (!clickedAnchor) return;

  let indexOfClickedAnchor = anchorsIn_nearestUL.findIndex(element => {
    return element == clickedAnchor;
  });
  anchorsIn_nearestUL.splice(indexOfClickedAnchor, 1); //remove anchor we clicked
  anchorsIn_nearestUL.forEach(el => {
    el.style.opacity = opacity;
  });
}
//@ Begin Focus: Use event with mouseover (that event type works with bubbling)
navContainer.addEventListener('mouseover', e => changeOpacity(e, 0.4));

//@ Exit Focus: Use event with mouseout (that event type works with bubbling)
navContainer.addEventListener('mouseout', e => changeOpacity(e, 1));
```

LEAN DEMO: [JSFiddle - Code Playground](https://jsfiddle.net/JasonXtuyotech/hqspwgzm/6/)

#### Alternative way to Pass Handler Arguments

Shown below is the last section where we call our externally defined event handler, and pass in an argument.

```js
//@ Begin Focus: Use event with mouseover (that event type works with bubbling)
navContainer.addEventListener('mouseover', e => changeOpacity(e, 0.4));

//@ Exit Focus: Use event with mouseout (that event type works with bubbling)
navContainer.addEventListener('mouseout', e => changeOpacity(e, 1));
```

This is the only legitimate way to do pass in an argument to a handler, but we can refactor it slightly using the bind() method. 

- bind() won't let us pass an argument, but we can set the "this" keyword equal to something unconventional, the opacity value. 
- Usually its equal to `eventObj.currentTarget`, but we can change that

DID NOT TRY IT. Check end of [The Complete JavaScript Course 2021: From Zero to Expert! | Udemy](https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648983#questions) if you're curious

### Sticky Navigation 

- You already know how to make a navbar stay on screen permanently- just use the fixed position value in CSS. This lesson is a twist on that.
- The navbar starts off visible at the top (as is customary)
  It is allowed to go offscreen when you scroll down (is not fixed, then)
  At a certain point the navbar returns and sticks on screen 

![image-20210421123134652](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210421123134652.png)

![image-20210421123249481](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210421123249481.png)

![image-20210421123203218](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210421123203218.png)

There are multiple ways to code this feature. 

- The first one involves using scroll events- but these are absolutely terrible for performance since an event fires every time you look up and down the page
- To avoid this, we're going to use the "Intersection Observer API"
  Relearn how it works if you need to 

#### Solution

- We add or remove a CSS class based on whether the `isIntersection` property of the "entries" object equals true or not
- The CSS class is pre-programmed to make a transparent version of the navbar appear fixed on screen
- We make the intersection event trigger a bit earlier using `rootMargin`
  The offset is not hard-coded or random
  It's offset by the exact height of the navbar so it pops in before a certain line

```js
const header = document.querySelector('.header');
const navInfo = nav.getBoundingClientRect();

//# Define options array
const obsOptions = {
  root: null,
  rootMargin: `-${navInfo.height}px`,
  // want the pop in to happen earlier. By the height of the nav
  threshold: 0,
};
//# Observe callback ƒunction
const obsCallback = function (entries) {
  let first = entries[0];
  if (first.isIntersecting === false) {
    nav.classList.add('sticky');
  } else nav.classList.remove('sticky');
};

//# API call, specify the target element
const section1Observe = new IntersectionObserver(obsCallback, obsOptions);
section1Observe.observe(header); 
```

OUTCOME:

![image-20210421191534432](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210421191534432.png)

![image-20210421191553776](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210421191553776.png)

FULL DEMO: [Sticky Nav (codepen.io)](https://codepen.io/NFuego24-7/pen/gOgQodz)
(the nav timing is off on these demo sites, but looks fine on VSC live server)



### Lazy Loading Images

Webpage performance matters, and images have a huge impact on that. Lazy loading can help create a better experience for people who have slow internet, while providing a nice visual effect for those who don't

#### Description and Procedure:

SETUP:

- You have a high resolution image you want displayed on your webpage, but it isn't loaded right at the start
- Instead, you have a smaller, lower resolution replica of that image loaded initially
  It looks terrible, but we apply a blur filter to the `img` tag with CSS 

> ​		![image-20210423111805275](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210423111805275.png) ![image-20210423103920281](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210423103920281.png)
>
> src: 	 Contains link to the blurry, low res image
> data-src: Contains link to the high resolution version we want displayed at the end

1. Use intersection observer API to detect when a user scrolls down close enough to that blurred image. Once it does, set src's value equal to data-src's instead

- If you don't want people to see the lazy loading, use a threshold of 0 and have a negative rootMargin

Be careful here! 

2. We can now remove the `lazy-img` tag from our img elements, but ONLY inside of a "load" event listener.

![image-20210423113006046](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210423113006046.png)

- The load event happens behind the scenes, after the src value is accepted and loads into the webpage. 
- It's important, because without that, people with slow internet connections will have the low res image unblurred, and the high res one will take forever to load in
- The low res image will be out in full display, looking like trash

3. Stop the API from observing an image after it's found the first time

#### EXAMPLE

https://drive.google.com/drive/folders/1pfwV_NxKLTG0xfxNpIFYl5MFNi2FaKPl?usp=sharing 

In our example, we made the threshold equal 0.15 so we can see the lazy loading happen. If you don't want people to see this, make threshold equal 0 and add a negative root margin so the detection happens early

```js
//%————————————————————————【 LAZY LOAD IMAGES 】———————————————————————
const blurredImages = document.querySelectorAll('img[data-src]');
//# Define options array
const imgScroll = {
  root: null,
  threshold: 0.15,
};
//# Observe callback ƒunction (AKA. Step 3)
const imgScrollFunction = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      entry.target.addEventListener('load', e => {
        entry.target.classList.remove('lazy-img');
        observer.unobserve(entry.target);
      });
    }
  });
};

//# API call, specify the target elements
const imgDetect = new IntersectionObserver(imgScrollFunction, imgScroll);
blurredImages.forEach(picture => {
  //^ add in lazy-img classes for all section programmatically
  picture.classList.add('lazy-img');
  imgDetect.observe(picture);
});
```



### Hash Changes 

HASH VALUE:  `#followed-by-numbers` at the end of certain web links

![image-20210629214953154](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210629214953154.png)

- The window object in JS has an `onhashchange` event that fires every time this hash value changes
- If the hash changes, it does not necessarily mean your webpage reloaded
  Click on new recipes here and see: https://forkify-v2.netlify.app/#5ed6604591c37cdc054bca5d

#### Detecting Hash Changes

Run a function after the hash value changes:

```js
window.addEventListener('hashchange', callbackF)
// OR ...
window.addEventListener('hashchange', function(){
	~~~~~ whatever ~~~~~
})
```

EXAMPLE 1: Get the hash number when it changes 

```js
window.addEventListener('hashchange', function(){
	let hashNumber= window.location.hash
    console.log(hashNumber) // do what you wish with it
})
```

EXAMPLE 2: Get the hash value currently

```js
let currentHash= window.location.hash
```

#### Practical Use Case Example

In our forkify app:

- Clicking on a certain recipe's search result will change our webpage's hash
- Our hash event listener renders visuals and cook instructions according to that same recipe
- This is done by feeding the function that renders visuals our hash, which we use to pull up info on a certain dish..render visuals/instructions...etc

Take a look: https://forkify-v2.netlify.app/#5ed6604591c37cdc054bca5d

#### Managing the Hash (2BC)

Research topics here: https://usefulangle.com/post/298/javascript-url-hash

You can deliberately change the hash of the webpage you're currently on
Clicking these anchors will change the hash value of the page

```html
<a href='#5ed6604591c37cdc054bc886'>RECIPE 1</a>
<a href='#5ed6604591c37cdc054bc90b'>RECIPE 2</a>
```



### Search Results and Pagination (Overview-only)

#### Search Results Procedure

1. Set up a search bar that accepts submissions
2. Use the submitted search term to look for something in an API 
3. If the search term is valid, reformat the info you get back from the API
   This step is optional, but it helps you rename things and exclude what isn't needed for your site
4. Store your reformatted search results in a dedicated state object
5. Render what's inside by generating new HTML based on the information stored in the state object

#### Pagination

When pulling search results from an API, you'll often get more results than you'd like to display. 
Instead of listing them all and making your webpage absurdly long, use pagination

![image-20210708020018945](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210708020018945.png)

#### Procedure:

1. Store all search results in an array, within your state object
2. Render visuals by generating HTML for only the first 10 (or whatever value you decide on)
3. Associate the first 10 results with page 1, then the next 10 with page 2... etc 
   (inside state object, possibly with a helper function)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210708022449254.png" alt="image-20210708022449254" style="zoom:80%;" />

4. If someone clicks on a Page X button, render new visuals
   The method you create to generate/render HTML needs to know which button layout to use

![image-20210708022637482](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210708022637482.png)

#### Pagination Button Layout Considerations

The button layout will change depending on your number of search results, and the page you're currently on

![image-20210708021856940](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210708021856940.png)

![image-20210708021936288](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210708021936288.png)

![image-20210708022043600](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210708022043600.png)

CODING THIS:

- Use information saved in your state object to figure out which layout is required at the moment
- Will need the total # of search results, the current page you're on, and the number of rendered results per page stored somewhere in your code
- Generate different HTML in each block

![image-20210708095753189](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210708095753189.png)



# Animated Features

### Animated Carousel/Slider

When you have a list of items that you want tablet/mobile to see, you might be limited by the horizontal space available. To remedy this, feel free to use a carousel

Project Example: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210210112331259.png" alt="image-20210210112331259" style="zoom:67%;" />

- It'll let you click or drag your way through a list of containers
- It's animated and easy to implement if you use the flickity jQuery plugin
  If you try to use pure CSS for this it's a pain in the ass

Pure CSS Example (+200 lines): https://codepen.io/Schepp/pen/WNbQByE
With flickity (<25 lines): https://codepen.io/desandro/pen/emjrBm

#### Flickity Setup

1. Put this in the head section of your HTML

```HTML
<link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css"> 
```

2. Place this at the end of the body in HTML

```HTML
<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
```

3. Make sure when you're setting up your gallery, you include the "js-clickity" class name in your wrapper

```HTML
<!--AS SEEN IN THE SYNTAX SECTION IN THIS LESSON-->
<div class="gallery js-flickity"> ~~contont~~ </div>
```

4. Put anything you want in your gallery cells

- You can make your gallery-cell a flex container
- `Gallery-cell-width = sum of all flex-item widths`  
  (perhaps the sum should be a bit less)



#### Syntax for a Numberless Carousel

The following 2 code blocks are the most significant. 
Obviously for complex projects, there will be lots more when you style things

```html
<div class="gallery js-flickity" data-flickity-options='{ "wrapAround": true }'>
  <div class="gallery-cell"></div>
  <div class="gallery-cell"></div>
  <div class="gallery-cell"></div>
</div>
```

Put whatever content you want in your gallery cells containers. 
The entire cell will be moved when you're done

```scss
* { -webkit-box-sizing: border-box; box-sizing: border-box; }

.gallery-cell {
  width: 66%; // Set the width of your cell
  height: 200px; // Set the height of your cell
  margin-right: 10px; 
  	// make higher if you don't want to see the next cell's edge
  counter-increment: gallery-cell; 
    // comment out if you don't want a number on your cell
}
```

#### Be Aware...

Flickity my have a few problems when the HTML is placed in a location where the gallery is a flex-item. 

- Try using `display:block` or `position:relative` or `position:absolute`
  Search online for a fix. 
- It worked out without any special hacks on my HipsterDev project

You shouldn't use Clickity for any commercial projects unless you pay for a dev license ($25). 
Call them to see how that would work on the job

FOR MORE INFO:
<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210210125418134.png" alt="image-20210210125418134" style="zoom:200%;" />

#### Styling the Dots

If you're looking to style something about the carousel...

1. Go to the style section of the Flickity docs
2. Inspect elements in the dev tools so you can find the class names whose properties you need to override

ANYWAY...
Override these classes to adjust the dots

```scss
.flickity-page-dots .dot{
  background: blue; 
  // color of dots that are not selected (is sset to be semi transparent by default)
}
.flickity-page-dots .dot.is-selected{
  background: blue;
  // color of dots when selected
}
/* position dots in gallery */
.flickity-page-dots {
  bottom: 0px;
}
```

![image-20211205224249669](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211205224249669.png)

### Loading Spinners

Some use cases where they're useful include...

1. When you have an async operation that may take long enough to warrant a distraction 
2. When you're loading an image- especially large HD ones

WARNING: You may need the "Async Operation Filepath Problems" lesson when referencing images in projects where you use the Parcel bundler

SOURCE: https://www.youtube.com/watch?v=wwJcYaJg8Mc

#### for Async Operations

> DEFAULT CONTENT (spinner) -- replace with --> MEANINGFUL CONTENT (add HTML)

PROCEDURE: https://codepen.io/jason2b3/pen/poPvvjv

1. Have the spinner be present when the page loads initially
2. Empty out the innerHTML of the container holding the spinner
   Insert HTML containing meaningful content after your async operation completes

- In your projects, I'd recommend placing the spinner styling in a SCSS mixin- for compartmentalization purposes 
- Copy paste any of the premade spinners I have, or find new ones

#### for Loading Images

PROCEDURE: 

1. Use a render spinner function BEFORE any async operations, which may include loading images
   Make it one of the first steps of an async await function
2. After the async operations you need are completed, clear out the spinner with `innerHTML=""`
   Replace it by DOM adding the image you wanted loaded

GENERAL STRUCTURE: https://codepen.io/jason2b3/pen/ExmaPro

```js
function renderSpinner (parentEl) {
  parentEl.innerHTML = ''; // clear out content already there
  const markup = `<div class="loading"></div>`;
  parentEl.insertAdjacentHTML('afterbegin', markup); // insert pre-styled spinner 
};

const showRecipe = async function () {
  	renderSpinner(container) 	// PART 1: Add spinner as your default state
  	// ~~~ async stuff ~~~
    container.innerHTML = ''; 	// PART 2: Remove spinner
    const markup = `<image src="${recipe.image}">`;
    container.insertAdjacentHTML('afterbegin', markup); // PART 3: Add image
}
```

- For the record, fetchAPI isn't working in codepen, but the example works the same either way
  Instead of loading a picture of chicken, we load a broken image svg
- This procedure should work regardless whether we have a button or not
  Loading images is asynchronous by default

#### Dark theme Loaders

Source: https://codepen.io/saconway/pen/vYKYyrx?editors=1100

![image-20210629122104254](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210629122104254.png)

Beats wave: https://codepen.io/jason2b3/pen/LYyEPyv
Spinny Rings: https://codepen.io/jason2b3/pen/eYWmOwb
Moving Blocks: https://codepen.io/jason2b3/pen/PomwYJz

Bouncing Dots: https://codepen.io/jason2b3/pen/jOmENza
LR Strafe: https://codepen.io/jason2b3/pen/bGWNbQr
Drip: https://codepen.io/jason2b3/pen/RwVNbvR

#### Light theme Loaders

Standard: https://codepen.io/jason2b3/pen/PomwYGP
Neon dark: https://codepen.io/jason2b3/pen/JjNjgQB

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210629123223052.png" alt="image-20210629123223052" style="zoom:67%;" />

Pick what you need from this bank
https://codepen.io/jason2b3/pen/OJmPJJj?editors=0100



### Bouncy Hover Containers

This is when a box seems to jump out at you a bit once they're hovered over
FULL CODEPEN: https://codepen.io/NFuego24-7/pen/MWbWPxG?editors=0110

```HTML
<div class="container"> 
  <div class="box"> </div> 
  <div class="box"> </div> 
  <div class="box"> </div>
  <div class="box"> </div>
  <div class="box"> </div>
</div>
```

```CSS
.container {
  width: 90%;
  padding:10px;
  background: #ddd;
  margin: 100px auto;
  display:flex;				
  justify-content: center;
} /* ONLY THE LAST 2 LINES ABOVE MATTER IN THIS RULE */

.box {
  width: 250px;
  height: 300px;
  background: orange;
  float: left;
  margin: 0px 10px;
  transition: 0.5s; /*adjust how fast the transition is*/
  border-radius:50px;
  
}

.box:hover{
  transform:scale(1.05); /*adjust how big you want it*/
}
```



### Sliding Menus, Navbars, & Burger Icons

The comments in the codepens explain how you can customize aspects of the feature for your own projects

#### Customizable Burger Icon with Animation

> https://codepen.io/jason2b3/pen/PoJYpWP

- This burger icon can be customized simply by editing a few SCSS variables I created
- The animation to turn the burger to an X should work if you adjust variable values properly

#### Drop Down Menu

> https://codepen.io/jason2b3/pen/QWqdoew

- The above example uses a checkbox to trigger the drop down animation
- Instead, you can use JS to dynamically assign classes when an element is clicked
  That class being added can be allowed to trigger the animation instead of a checkbox 

#### Sliding Navbar Menus

LEFT → RIGHT

> https://codepen.io/jason2b3/pen/LYzxvmX

RIGHT → LEFT 

> Crude Example: (comments explain how it would be done, but looks very imperfect)
> https://codepen.io/jason2b3/pen/JjrEVzw?editors=0110



### Fullscreen Image with Animated Zoom

Making an image fullscreen is fairly simple, but we want sophisticated animations like this:
Medium Zoom Library →  [see here](https://medium-zoom.francoischalifour.com/#:~:text=zoom%20with%20background%20color)

- The image enlarges to nearly be fullscreen, along with a colored background
- The image growing is animated (not instantaneous/choppy), and moves to the viewport center

#### Procedure

1. Find images and insert them into your webpage somewhere
2. If you don't care whether each image is the same size when zoomed in, skip step 2
   If you do care, resize them all to the same width using [this tool](*https://redketchup.io/image-resizer*)

2. Create a setup file then execute it on your main JS file

animatedZoom.js

```js
import mediumZoom from "medium-zoom";

export const animatedZoom = function () {
  console.log("media zoom function ran");
  // Decide margin based on viewport size
  // Some margins look good on mobile but terrible on desktop & vice versa
  let margin = 50;
  // Set up the medium-zoom click event listener
  const zoomProtocol = mediumZoom(".zoom", {
    background: "rgba(0, 0, 0, 0.5)", // transparent dark filter
    offset: 0,
    margin, // determined by viewport size
  });
  const screenshot_cell = document.querySelector(".zoom");
  if (screenshot_cell)
    screenshot_cell.addEventListener("click", () => zoomProtocol.open());
};
```

index.js

```js
// must use .js extension or HTML thinks these are HTML files
import { allClickEvents } from "./clickEvents.js"; 
import { animatedZoom } from "./animatedZoom.js"; 
//@ must apply after click events (we change img brightness on click)

// Immediately execute the imported code
allClickEvents();
animatedZoom(); //@ must apply after click events (we change img brightness on click)
```

- You may not have any file named clickEvents.js in your project
- If certain JS files program in click events, execute the setup function AFTER them
  The Medium-Zoom library deals with click events too, and it may clash with a few things

#### Demo

Check out the smash ultimate project you made back in December 2021
https://github.com/Jason2B3/nintendo_webpage

### General: Revealing Elements on Scroll with Animation

This effect is when webpage content goes from visible=>visible after a brief animation that only occurs when you scroll down far enough on your page

We're focusing on steps 1 and 3 today. The animation has been pre-prepared using vanilla CSS and will be applied simply by adding classes to the right elements

![image-20210422171620729](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210422171620729.png)

CSS ANIMATION CLASS WE'RE USING:

```css
.section--hidden { 
  opacity: 0;
  transform: translateY(8rem);
}
```

- The section--hidden class can be hardcoded to major sections on our webpage to shift them downward and make them invisible
- Once removed, they will return to their normal positions, and fade in. 
  This is more of a reverse-animation than a traditional one

Alternative to hardcoding hidden classes in HTML:

- A smarter way to implement this is to just add this class to all major sections programmatically in JS, without any events or conditions (it'll be done on page-load) 
- Some people disable JS in their browser, and having hidden classes hardcoded in their HTML would completely ruin their experience (since nothing would be visible, and that would never change)

Starter Code: [Starter for Scroll Animation (codepen.io)](https://codepen.io/NFuego24-7/pen/BapvWgP)

Ending Code: [Finished Scroll Animation (codepen.io)](https://codepen.io/NFuego24-7/pen/eYgbvaY?editors=1010)

#### SOLUTION 

```js
//%————————————————————————【 CONTENT FADE-IN AFTER SCROLL 】———————————————————————
//# Define options array
const optionsScroll = {
  root: null,
  threshold: 0.15,
};
//# Observe callback ƒunction (AKA. Step 3)
const callbackScroll = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('section--hidden');
      console.log('still observin!');
      observer.unobserve(entry.target);
    }
  });
};

//# API call, specify the target elements
const scrollObserve = new IntersectionObserver(callbackScroll, optionsScroll);
allSections.forEach(section => {
  // STEP 2: add in hidden classes for all section programmatically
  section.classList.add('section--hidden');
  scrollObserve.observe(section);
});
```

STEP 1: Import the elements we need to reach with our observer API (`allSections`)
STEP 2: Add the section--hidden class to `allSections` elements on start-up
STEP 3: Once 15% of them are on screen, remove the "section--hidden" class
STEP 4: Stop the API from observing an element once it's found the first time



# ==== LIBRARIES + API's ====

# Lodash

### pull Methods: Mutation Versions of Filter Ⓒ

| method              | purpose                                                      |
| ------------------- | ------------------------------------------------------------ |
| `_.pull(arr, 1, 2)` | filters out all instances of values from an array<br />The array is argument 1, while filter values are args 2 and etc |
| `_.pullAll`         | does the same thing as pull<br />accepts an array of filter values instead |
| `_pullAllBy`        |                                                              |
| `_.pullAllWith`     |                                                              |
| `_pullAt`           |                                                              |

———————————————————————————————————————————————————————————————

`_.pull`

```js
let a1 = [1, 2, 2, 3, 4, 4, 4, 5, 6];

let filtered = _.pull(a1, 2, 4);
console.log(filtered); //OUTPUT: [ 1, 3, 5, 6 ]
```

———————————————————————————————————————————————————————————————

`.pullAll`

Can be replaced by using _pull with a spread operator

```js
let a1 = [1, 2, 2, 3, 4, 4, 4, 5, 6];
let a2 = [2, 4];

function filterMain(main, filterOut) {
  _.pullAll(main, filterOut)
  console.log(main) //OUTPUT: [ 1, 3, 5, 6 ]
}
filterMain(a1, a2)
```

My vanilla JS Equivalent:

```js
function removeMatches(toBeFiltered, filterArr) {
  filterArr.forEach((ent) => {
    toBeFiltered= toBeFiltered.filter((val) => val !== ent);
  });
  console.log(toBeFiltered)
  return toBeFiltered // arr2 get
}
removeMatches([5, 2, 1, 4], [1, 3, 2])  //OUTPUT: [ 5, 4 ]
// remove 1, 3, and 2 from the first array arg
```



### Functions of Interest

```
_.chunk  	 Separate arrays into chunks of X size
_.random  	 get random value between upper and lower bounds
_.sample 	 pick a random element from an array
_.shuffle	 Randomize positioning of array values
_.times 	 executes the function n times. 
_.delay		 delays execution of any function for X miliseconds

_.range	 create a range of number b/t 2 values. (complex, should read)

_.sum		 get sum of all array values
_.pull		 removes all instances of value(s) you specify from an array

_.partition	
splits an array into 2 using a condition. 
First array contains values that meet the condition, while the second array houses those that don't

_.startsWith and _.endsWith	
determines if a string starts or ends with a specified string
 
_.keys function returns an array of the property names of the JavaScript object and the _.values function returns an array of their values. 
```

https://zetcode.com/javascript/lodash/   





# General Purpose API's

### Local Storage API

This API lets you save data using the web browser and vanilla JS. 

- Typically, people have used server-side code to accomplish this (PHP). 
- Local Storage API stores specifically to the domain and protocol being used
  This is usually not recommended due to the security risks

WHEN TO USE:
Use to store small amounts of user data that are harmless if public
Ex. Save display settings like themes, other UI settings or preferences

HOW DATA IS STORED:
Data is saved inside the domain's local Storage object (LSO) in the form of KVP's

- Both the key and value are saved as strings- a limitation we'll overcome later
- The order in which you add KVP's is preserved
- JS will convert the KVP value to a string, even if you feed the parameter as a number 

#### Syntax

| action                 | code                                                         |
| ---------------------- | ------------------------------------------------------------ |
| add a KVP              | `localStorage.setItem('myCat', 'Tom');`<br /> updates value if the KVP exists already |
| access an existing KVP | `const cat = localStorage.getItem('myCat');`<br /> equals null if it does not exist |
|                        |                                                              |
| delete a KVP           | `localStorage.removeItem('myCat');`<br /> if used on a non existent KVP, it does nothing |
| delete all KVP's       | `localStorage.clear();`                                      |

IMPORTANT: 

- If you save a KVP to a variable, it remains even after you clear out the entire LSO, or that 1 KVP
- Look at the entire LSO with `console.dir(localStorage)`

EXAMPLE 1: Save a few gamer friends' names and mains to a KVP

```JS
localStorage.setItem('Yoh','Sheik')
let a= localStorage.getItem("Yoh")

console.log(a) 		//OUTPUT: "Sheik"
localStorage.clear();
console.log(a) 		//OUTPUT: "Sheik" (remains after the clear)

console.log(localStorage.getItem("Yoh")) //OUTPUT: null
```

#### Extra Methods

`.key` Method && `.length` Method

Grab the key part of the KVP using an index number- remember the KVP order's saved

```js
localStorage.setItem('Yoh','Sheik')
localStorage.setItem('Anai','Mario')
localStorage.setItem('Kalm','Ganon')
localStorage.setItem('Chrimm','Diddy')

console.log(localStorage.key(0)) //OUTPUT: "Chrimm"
console.log(localStorage.key(1)) //OUTPUT: "Kalm"
console.log(localStorage.key(2)) //OUTPUT: "Anai"
console.log(localStorage.key(3)) //OUTPUT: "Yoh"
console.log(localStorage.length) //OUTPUT: 4
```

The LSO considers the most recent addition to the object as index 0's KVP
This method is fairly useful for when you want to loop over a few of your KVP's

#### Storing Objects in LSO

We're forced to save everything in the local storage API as a string, and that can be problematic when we want to save other objects or arrays

We'll need to use JSON commands to convert arrays/objects to strings for storage, then convert them back once we call upon them

```js
function setItem_Custom(keyName, obj){
  let obj_converted = JSON.stringify(obj); // turn object to string
  localStorage.setItem(keyName, obj_converted); 
    // store obj string (looks odd in storage)
}
function getItem_Custom(keyStr){
  return JSON.parse(localStorage.getItem(keyStr)); 
    // return your object in its rgeular non-string form
}
```

Test Drive 1: This alone will not save things upon reload

```js
let objec = { ben: 'gay', clear: 'eyes' };
let arrayOne = [0, 1, 2, 3, 'IV'];

setItemV2("myObject", objec)
console.log(getItemV2("myObject")) 

setItemV2("myArray", arrayOne)
console.log(getItemV2("myArray")) 
```

![image-20210508025316734](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210508025316734.png)

#### Main Example: Store Info on Reload

![image-20210508154636092](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210508154636092.png)

```js
const add = document.getElementById("add");
const clear = document.getElementById("clear");
const score = document.getElementById("score");

//# ON STARTUP: Display the stored count and log the storage 
console.log(localStorage);
displayCount(); // display count on startup (from storage)

function displayCount() {
  if (localStorage.getItem("myScore") === null) score.textContent = 0;
  else score.textContent = localStorage.getItem("myScore");
}

clear.addEventListener("click", (e) => {
  localStorage.clear(); // clear storage
  score.textContent = 0; // set counter to 0
  console.log(localStorage);
});

add.addEventListener("click", (e) => {
  let count = localStorage.getItem("myScore"); // may or may not exist
  if (!count) localStorage.setItem("myScore", "0"); // if it doesn't, set equal to 0

  let oneUp = Number(localStorage.getItem("myScore")) + 1; // increment
  localStorage.setItem("myScore", oneUp); // coerced back to string form

  score.textContent = oneUp; // display the new score
  console.log(localStorage);
});
```

TEST IT OUT: https://jsfiddle.net/JasonXtuyotech/cf0a4dmx/

ON STARTUP:

We use the `displayCount()` function which will display 1 of 2 things

- If storage is holding a "myScore" KVP, it'll display that
  If it doesn't have one, it'll display 0
- It is CRUCIAL that we don't use a global variable for the counter.
  It will get redefined after every page reload, so use storage KVP's instead

CLEAR BUTTON: Clears the local storage and sets the display counter to 0

ADD BUTTON:

- If no "myScore" KVP exist in storage, it creates one and sets the value to "0"
- We increment the myScore KVP value up by 1 (switch between strings and numbers)
- Shows the "myScore" value on the display

#### List of Issues and Limitations

1. Can only store strings, and JSON workarounds are pretty unpleasant
2. Even with JSON workarounds, you still can't store dates or functions
   These are the same limitations we deal with when deep cloning with vanilla JS
3. Is really bad for storing large amounts of data, or anything private
   The info saved with localStorage is not encrypted at all
4. Slows down site performance and doesn't mix well with extensions on Chrome apparently

JSON will not successfully store the following...

- Date, null, NaN, functions, undefined, Infinity, RegExps, Maps, Sets, Blobs, FileLists, ImageDatas, sparse Arrays, Typed Arrays or other complex types within your object

DEMONSTRATION OF DATA LOSS:

This method will lose any JS values that have no equivalent in JSON. Behold 

```js
let obj = {
  a: null,
  b: NaN,		//turns to null
  c: Infinity,	//turns to null
  d: undefined,	// DISAPPEARS
  e: function () {},	//DISAPPEARS
  f: Number,			//DISAPPEARS
  g: false,
  h: 12,
  i: 'mages',
  j: [1, 2, 3, 4],
  k: { 0: 'roserade', 1: 'leavanny' },
};

let deepClone = JSON.parse(JSON.stringify(obj));
console.log(deepClone);
```

![image-20210323091944594](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210323091944594.png)

#### View Storage in Dev Tools

You can view or even clear out the local storage from the dev tools
Be careful though- clearing it out is permanent

```
Application tab -> Storage -> Local Storage -> localhost: 3000
```

![image-20210810020058344](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210810020058344.png)







### time-based

#### timer-stopwatch

PURPOSES

1. Create a countdown from a specified time
2. Create a stopwatch

INSTRUCTIONS: https://openbase.com/js/timer-stopwatch
PROJECTS: Check premades for "stopwatch and timer" for how to implement both

#### date-fns (RETURN)

JavaScript in general does not have many great functions for working with dates. 

- Oftentimes, you're forced to create your own complex functions to switch between formats. 
- date-fns gives you more functions to perform operations, all while being more lightweight than the industry standard: moment.js

### math-based

#### Fractional

Use to convert decimals into fractions delivered in string form. (Like 1.5 into 1 1/2)
Can perform mathematical operations: add, subtract, divide, multiply...etc

INSTALL:

```js
npm i fractional 	// installs as a dependency
//—————————————————————————[ go into JS file]—————————————————————————————
var Fraction = require('fractional').Fraction
```

EXAMPLE:

```js
let numA= 4.5 // convert this to 4 1/2
let numB= new Fraction(num).toString() // "4 1/2"

// this does not permanently mutate the original number
```

GENERAL SYNTAX:

```js
// Create a new fraction with the new keyword:
(new Fraction(7,3)).multiply(new Fraction(1,2)).toString()		// 1 1/6
(new Fraction(7,3)).divide(new Fraction(1,2)).toString()		// 4 2/3
(new Fraction(3,10)).add(new Fraction(5,9)).toString()			// 77/90
(new Fraction(0.25)).add(new Fraction(1,6)).toString()			// 5/12
(new Fraction(0.35)).subtract(new Fraction(1,4)).toString()		// 1/10
```



### Random PIN Generator

Read the following site's instructions which also contains the NPM Install

https://www.npmjs.com/package/secure-pin



# Location API's

### REST Countries: Get Info on Nations

###### Get Info on Countries with a full name:

```
https://restcountries.eu/rest/v2/name/{name}?fullText=true
```

###### Get Info on Countries with 3 letter country codes:

```
https://restcountries.eu/rest/v2/alpha/{code}
```

Use fetch API to get information on a country using one of these links

More link options here: https://restcountries.eu/
Example: https://jsfiddle.net/JasonXtuyotech/gLvmu89y/1/

The example's a bit complex, but it shows you how to promise chain while supplying insightful error messages (uses the then() method instead of Async/Await but whatever)



### Reverse Geolocation: Find a Nation via Coords

SYNTAX: 

```
https://geocode.xyz/${lat},${long}?geoit=json
```

This is a Udemy coding Challenge that was explained in more detail in the AsyncJS then() chapter's final lesson

#### EXAMPLE:

We chain promises to the Promise value of the API link

REASON 1: 
Need to parse this with `.json()` then log the promise value

REASON 2: 
We add error messages at locations in our promise chain where things can go wrong

```js
function whereAmI(lat, long) {
  const request = fetch(`https://geocode.xyz/${lat},${long}?geoit=json`);
  request
    .then(response => {
      if (!response.ok) throw new Error();
      return response.json();
      // REJECT: create error object with custom msg
      // RESOLVE: parse json data
    })
    .then(parsedData => {
      if (!parsedData.country) throw new Error('Invalid coordinates');
      console.log(parsedData); // obj full of info
      console.log(`You are in ${parsedData.city}, ${parsedData.country}`);
    })
    .catch(errMSG => console.error(errMSG));
}
// whereAmI(0, 0); // undefined undefined, if we had no custom error MSG
whereAmI(52.508, 13.38); // Berlin, Germany
whereAmI(19.037, 72.873); // Mumbai, India
whereAmI(-33.933, 18.474); // Cape Town South Africa
```

Default reload error MSG: ![image-20210515134636861](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210515134636861.png)

Bad coords custom error MSG: ![image-20210515140549836](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210515140549836.png)

Resolved promise example: ![image-20210515141512188](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210515141512188.png)



# Animation Libraries

### Hover Effects with Hover.css

NO INSTALL METHOD:  [source][https://github.com/IanLunn/Hover#:~:text=it%20applied%20to.-,a.%20copy%20and%20paste%20an%20effect,-If%20you%20plan]

If you only need to use a few animations, you can copy/paste one snippet of this library's CSS to use an animation throughout your project- no install required!

#### Procedure

1. Find which animation you want to use here:
   http://ianlunn.github.io/Hover/
2. CTRL F the animation name in this library's hover/css/hover.css doc [here](https://github.com/IanLunn/Hover/blob/master/css/hover.css) 
   Copy paste the specific animation's snippet into your project

![image-20211206040654466](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211206040654466.png)

3. To apply the "grow" effect in this case, assign a class of `hvr-grow` to an element



# ====== EARLY PROJECTS ======

# Mapty: Leaflet Maps + Geolocation API

Pretty much every lesson in this project chapter builds off the previous one. 
Many of our code snippets don't do anything when pasted by themselves. 
We'd have insanely large code snippets if we decided to include everything

Have your project folder open when you look at how certain parts of 3rd party libraries or API's work. Everything is set up properly there

### Project Description

https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649157#questions

- Use a 3rd party library to give us a google-style map. 
- We can place markers on the map that save information about our workouts and allow us to travel back to that part of the map instantaneously
- Workout info should be saved even when you reload the page or open it in a new tab

![image-20210430132125211](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210430132125211.png)

For a view of the finished product, check this out on Chrome with you VPN turned off: 
https://mapty.netlify.app/

### Planning a Project

There are plenty of ways to plan a project, one of which is called "User Stories"- an excellent choice for planning small to medium sized projects

#### User Stories Description

![image-20210430141300358](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210430141300358.png)

Describe the application you're about to build from the user's perspective

- Give a high-level overview on the features your app/website will provide, without getting into the details about how it'll be coded
- All the feature descriptions put together will give you a clear description of what you need to make

Once all the features are described, we put them all in a nice flowchart

![image-20210430140334022](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210430140334022.png)

Now, we will plan out how we're going to structure our code in order to follow the flowchart. This is typically what software architects do in large companies, but its important that you learn to stop and think about how functionality is implemented on commercial projects

OTHER WAYS WE CAN BUILD PROJECTS:

- We have an infinite number of ways to build our application, and we need to prevent ourselves from building it in an unorganized/unmaintainable fashion
- Ex. We could have 1 huge file with no organization, we could divide everything into functions, we could use classes, multiple JS files, or mix everything I just said

#### How to write User Stories

> Form sentences in this format:
>
> ![image-20210430142459328](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210430142459328.png)
>
> [USER] => [ACTION] => [DESIRED EFFECT & WHY]

APPLIED TO MAPTY: 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210430143517962.png" alt="image-20210430143517962" style="zoom:75%;" />

#### User Stories → Features

- Take these wants and boil them down into features you can implement. 
- Feel free to have multiple features for a single want- they often work in tandem to accomplish one thing

![image-20210430144213188](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210430144213188.png)

Normally in large scale applications, people save data to user accounts where it gets stored. But since we're building a simple application, use the local storage API instead

#### Features → Feature Flowcharts

Feature flowcharts are not language-specific- they just mention what needs to be done, when, and in relation to what

> COLOR CODE:
> Yellow => (User) actions						Red => Asynchronous operations	
> Green => Render something in UI

What asynch-operations mean for our application:
The events that come after asynch operations must wait until after that operation completes. Everything coming afterwards is dependent on it

![image-20210430145047326](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210430145047326.png)

You will get better at creating flowcharts with practice, don't worry

- Also, don't stress about creating the perfect flowchart early on. 
  Even a rough sketch will be fine as long as you update it during implementation
- In commercial projects, people usually don't come up with the entire flow chart during the planning phase
- Features/flowcharts may change along the way depending on what clients ask for

### Geolocation API to get Current Position

Browser APIs let us do all kinds of things, and we've seen some of them used before (timers, internationalization). 

Geolocation is a fairly modern one but is supported by most modern browsers. 
It gets you the location of where you currently are
We'll be needing those coordinates for when we use a 3rd party script to use a map

#### Current Position

```js
navigator.geolocation.getCurrentPosition(successCB, errorCB)
// successCB has an inbuilt parameter; an object full of current location info
```

This function accepts 2 callbacks. 

- The first tells the browser what to do if it successfully grabs current location coordinates, while the other covers the failure scenario
- The success callback ƒ() has a built in parameter- the position object
  Name it whatever you want, but

EXAMPLE: Log the position object to the console

```js
navigator.geolocation.getCurrentPosition(function(posit){
  console.log(posit)
}, function(){
  alert ("Could not find current location")
})
```

- Some properties like speed are set to null because we're working from a desktop
  Cellphones have ways to monitor travel velocity
- The longitude and longitude are both part of a nested object called "coords", as you can see

![image-20210430165051595](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210430165051595.png) ![image-20210430165109020](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210430165109020.png)

EXAMPLE 2: 
Store your current latitude/longitude inside 2 variables and a google maps link
Use destructuring to get inside the `coords` object properties instead of dot notation

```js
navigator.geolocation.getCurrentPosition(function(posit){
  const { latitude } = posit.coords // grabbed latitude KVP from posit.coords object
  const { longitude } = posit.coords // grabbed longitude KVP
  const mapStr= `https://www.google.com/maps/@${latitude},${longitude},14z`
  console.log(latitude,longitude)
}, function(){
  alert ("Could not find current location")
})
```

![image-20210430170824256](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210430170824256.png)

The google maps string centers the screen based around the position we feed the link

#### Using "this" inside Geo Callback Functions

Even when defined inside a constructor function or ES6 class, the "this" keyword used inside one of these callbacks will never refer to the what they're inside. This needs to be fixed when using OOP 

- They are treated like regular functions defined on the global scope. 
  By default, "this" will equal undefined. 
- To fix this, you need to bind the callbacks to their object/class/constructor if you want to be able to use "this" as you would normally

![image-20210503143007235](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210503143007235.png)

We tack on `.bind(this)`, to bind our successCB to "this", the class we're inside. 
We can use "this" properly at that location because we're not inside the successCB yet

### Reading Leaflet Documentation

Once inside their documentation, find the page that'll help with what you're trying to add to your map. For example, lets figure out how to add markers and popups for those markers once you hit a location on your Leaflet map

Documentation: 				https://leafletjs.com/reference-1.7.1.html

Step 1. Travel to the part of documentation that pertains to your problem

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210502165019630.png" alt="image-20210502165019630" style="zoom:80%;" />

Step 2. Read through usage examples, and the creation section to learn how to use certain lines of code for your own specific purposes

![image-20210502192501811](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210502192501811.png)

#### Chaining Methods

You'll notice that these methods usually return the map object, making them chainable.
Travel to the "Map methods" section of the documentation and you'll notice "this" returned often

![image-20210502192751472](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210502192751472.png)

### Displaying a Map using Leaflet Library (1)

Leaflet is a free and open source library for JS devs to include map features in their applications. 

Quick Start Guide: 			https://leafletjs.com/examples/quick-start/
Documentation: 				https://leafletjs.com/reference-1.7.1.html
Grab latest version:   		https://leafletjs.com/download.html
Plugins for Extra Features:	https://leafletjs.com/plugins.html
Routing Plugin: https://developer.mapquest.com/documentation/leaflet-plugins/routing/

You can bring it into your code base in many ways

- The easiest way involves copy pasting `<link>` and `<script>` tags in your HTML head. They lead to externally hosted JS/CSS documents- find them on Leaflet's site
- It's more professional to perform an NPM install, for the record

ALTERNATIVES: 
https://developer.mapquest.com/documentation/mapquest-js/v1.3/examples/basic-map/ 

#### Setting up Leaflet Maps

Our head section:

```html
   <head>
    <!--Generic stuff that DN matter above this point-->
	<link rel="stylesheet" href="style.css" /> <!-- CSS doc -->
    <!--& ————————————————【 LEAFLET ZONE 】————————————————————— -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" /> 
    <script defer src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
    <!--& ————————————————【 LEAFLET ZONE 】————————————————————— -->
    <script defer src="script.js"></script> <!-- JS doc -->
    <title>GEO-LOCATOR</title>
  </head>
```

This is the perfect chance to use deferred script loading, since we're using 3rd party libraries 

- Everything's in the head and the script tags have `defer` attributes within
- For any of our JS code to work, we need the leaf map to be loaded
  So, place the leaflet links before our JS document

Now, leaflet is ready to be used in our JS doc. 
We have to use the functions the makers left for us to get anything done. 

GENERAL TIP FOR 3RD PARTY LIBRARIES:

Nobody has time to learn the ins and outs of every library they'll encounter
Do the following when you encounter a new one that you need t figure out quickly

a) Take other people's code and tweak it to serve your purposes
b) Youtube a tutorial on how to do exactly what you're attempting
Read the documentation to assist with A or B

#### Centering the Map around a Location and Placing a Marker

Most functions are accessed via global objects- which is why many method calls are typed like this:  `L.marker` 

STARTER CODE FOUND ON THEIR SITE:

STEP 1. Create an empty div somewhere in your HTML file with an id of "map"
		I don't think other ID names work, even if you tweak the leaflet code

STEP 2. Copy paste the following into your JS doc

- If you want to center the map around your current location, paste it in the success callback function in your geolocation API method (last lesson)
- Replace the default coordinates from Leaflet's starter code (`[51.505,-0.09,13]`) with your current location's which should be calculated by the geolocation API

```JS
const map = L.map('map').setView([51.505, -0.09], 13);
//                              lat/long/altitude (lower values raise height)
// CREATES FUNCTIONING MAP
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
```

TILE STYLES

- We're using openstreetmap.org tiles for this project because its free/open-source 
  You're free to use other types as well- Leaflet supports many 
- You can use google maps tiles to copy their look for example

```
// Here's another 
https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png
```



### Display Map Markers (2)

We want to place markers on the map when we click on a new area
That's the focus of this lesson 

Later on, we'll implement certain rules to how it should work in our application
You can see them in action in the project files

- Should only set 1 at a time
- Should not set a new marker when we're describing the first one by filling out the form's questions regarding our workout

> For instance, clicking on the map now would not create a new marker (see below)
>
> ![image-20210430195321156](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210430195321156.png)

The coordinates of click locations are known only by the map. For that reason, we can't use our standard event listeners, because we'd have no way to access the map's knowledge

#### Setting Markers at Click Locations

CODE FOR SETTING MARKERS:

```js
L.marker([51.5, -0.09]).addTo(map).bindPopup('MSG GOES HERE').openPopup();
```

We can set new coordinates for where we want it to appear
Can also change the message and styling, which will be explained soon

FIND CLICK LOCATION COORDS ON A MAP

Use the leaflet version of the classic event listener to generate an object that'll tell us the coordinates of our click location

```js
// must have a working map set up (see previous lesson)
map.on('click', function (mapEvent) {
	console.log(mapEvent);  
}); // now, click somewhere on the map
```

![image-20210430201532341](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210430201532341.png)

The `latlng` object contains the coordinates of our click location
We can use these to set new markers!

COMBINE TIME!

```JS
map.on('click', function (mapEvent) {
  console.log(mapEvent);
  const { lat, lng } = mapEvent.latlng; // take 2 KVPs fr/ this obj
  L.marker([lat, lng]).addTo(map).bindPopup('WORKOUT HERE').openPopup();
});
```

Now, clicking on our map auto-generates a new marker at that exact location, every time

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210430203217746.png" alt="image-20210430203217746" style="zoom:67%;" />

### Styling our Pop Up Message on the Marker (3)

Our popup message at the moment is just "WORKOUT HERE". We can style it with CSS and change the dimensions of the popup itself with an options object

![image-20210502193109675](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210502193109675.png)

#### Tweaking Examples fr/ Documentation

Take a look at the default syntax to make a marker; its just a bunch of methods chained together. All of them can be found in the Leaflet documentation

```js
L.marker([51.5, -0.09]).addTo(map).bindPopup('WORKOUT HERE').openPopup();
```

Instead of simply showing a message on our popup, we're going to create a brand new popup object with `L.popup({~})` which will contain a couple of options. We're placing it inside the .bindPopup method's arg parentheses

ADJUSTED MARKER SYNTAX:

```JS
L.marker([lat, lng]).addTo(map).bindPopup(
  L.popup({
    maxWidth: 250, // Max width of the popup, in pixels
    minWidth: 100, // Min width of the popup, in pixels
    //————————————————【 explained in next section 】—————————————————————
    autoClose: false, 
    closeOnClick: false,
    //————————————————【】—————————————————————
    className: 'running-popup', // assigns the pop up a custom CSS class
  })
)
.setPopupContent('Workout XX')
.openPopup();
```

![image-20210502193109675](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210502193109675.png)

The options we set in place will be explained in the next section

#### Popup Options 

Find them here: https://leafletjs.com/reference-1.7.1.html#popup

![image-20210502180317456](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210502180317456.png)

![image-20210502190255910](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210502190255910.png)

`closeOnClick + autoClose` set to true:  ![image-20210502190456388](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210502190456388.png) 

`closeOnClick + autoClose` set to false: ![image-20210502190546881](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210502190546881.png)

`className: 'running-popup'` gives the popup a CSS class, which we've pre-coded to have a green border in CSS (that's why it has green styling, unlike the default)

![image-20210502195253700](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210502195253700.png)



### Rendering Workout Input Form (4)

Code for Lessons (1)-(4): https://drive.google.com/drive/folders/1VxGo_1WAmV7fXMQ8VXWef3g8IMHnEw08?usp=sharing

#### STARTER CODE

FORM CODE: Long and contains many nested elements, all contained within 1 form element:

```js
const form = document.querySelector('.form');
```

![image-20210502202932152](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210502202932152.png)

- As expected, the form has a "hidden" class applied to it. 
  Should've guessed, since it's not in view. 
- Remove this class when the map is clicked 
  Place `classlist.remove()` inside the Leaflet `map.on()` event listener replica



#### CHALLENGE DESCRIPTION:

STEP 1) Only let marker be assigned when we fill out and submit a form

At the moment, we managed to get a styled marker on our map when we click somewhere on it. We skipped a few steps on our flowchart while trying to get marker/popups to work:

![image-20210502202217978](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210502202217978.png)

- When we click on the map, we actually want our site to generate a form that asks us questions about the workout. Only after answering, will the marker be placed
- Right now, the marker is placed with a message every single time we click on our map
  Need to take care of the section surrounded in red before we place the M...arker

![image-20210502201514197](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210502201514197.png)

The form has already been pre programmed in CSS for us. 
Our job is to code in the logic of what I described earlier

STEP 2) Once the form is submitted, hide it, clear the input field contents

STEP 3) Change "cadence" field to "elevation" when cycling is the chosen DDM option

![image-20210502233737153](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210502233737153.png) ![image-20210502233758996](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210502233758996.png)

Next steps: Structure your code in a more organized way, and find a way to accept the form's innformation to make a proper workout description

![image-20210502235551050](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210502235551050.png)

### Our Custom Architecture Diagram

The main structure of this project will revolve around classes and objects from OOP. 

- Once we properly define our structure, we can move on to further develop the functionalities of our application. 
- Although first, we must refactor the code we created in lessons (1)-(4)

#### Where and How to Store Data

The data we need to store comes right out of the user story- at least in this project.
We'll need to store what's circled in red:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210503011020224.png" alt="image-20210503011020224" style="zoom:67%;" />

Class Descriptions Table:

|                        | carries                                           |
| ---------------------- | ------------------------------------------------- |
| parent class "Workout" | duration, distance, coordinates                   |
| child class "running"  | cadence and pace (which only apply to runners)    |
| child class "cycling"  | elevationGain and speed (only applies to cyclers) |

Running and cycling are child classes because they share multiple properties/methods with the workout class. It's only logical that distance and duration apply to different kinds of workouts, isn't it?

#### Architecture Diagram: Visuals

We're given this by the prof, and need to understand it well enough to follow

![image-20210503011411585](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210503011411585.png)

VISUALS ON DIAGRAM:

Arrows: 
The pointed ends lead you to the next action that must be taken for your application to work as intended. 

- For example, we see `Load page => constructor() => _getPosition() `
  We want the site to get our current position as soon as the page loads in
- The arrows can lead you to other classes, which will be needed to code the actions that follow 

Boxed words: 
The properties or methods (not in this picture) associated with the overall class whose box they're placed in

... : 
This just implies that we're going to have many methods inherited between classes. Too many to list off in a simple diagram

#### Architecture Diagram Explanation

Start by looking at the red rectangle on the right

![image-20210503011411585](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210503011411585.png)

- Once page loads, run an aptly named function called `_getPosition`
- Once you recieve the position, run `_loadMap()`
- Click on the map, run `_showForm()`
- Change input from running to cycling or vice versa, invoke `_toggleElevationField`
- After form's submitted, create a new running/cycling object with `_newWorkout()`
  Leads to the object being filled with data from or calculated from the form
  The parent and child classes are what dictate what info gets calc'd and stored
  After the object's built, it gets stored in an array or workouts

The `_newWorkout()` function is the heart of our application, and leads to using all the classes I described in the earlier subsection. 

WHY THIS HELPS:

- We can see a clear progression of events that need to be coded into our site
- We can clearly see which functions are protected, and which are going to be part of the API
- We have classes that care exclusively about workout data

#### Practicality in IRL Projects

Simpler projects like this can get away with having an architecture that essentially covers everything in 1 block/visual. 

- Larger scale projects have more functionalities, some of which can be separated into themes and worked on semi-independently.
- Take online banking for example. We could have an architecture diagram for just the UI, and 1 for all the business and financial logic

#### More Complex Version

As we continue building our project, the architecture gets added onto

![image-20210504135533825](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210504135533825.png)

GENERAL IDEA: 

Blue "App" class is used for all the standard UI operations that would normally be on the global scope. Showing the map, placing markers, hiding and unhiding forms, placing form data into objects and arrays...etc

The green classes generate objects based on the type of exercise the user chose
They get called upon when the user submits adequate info to create a new workout

### Refactoring (OOP Edition)

In lessons (1)-(4), we wrote code in a disorganized manner while giving architecture no thought whatsoever. 

- Now we're following an OOP approach, and creating parent/child classes. 
- We're moving all code that was defined globally into objects. Need to make sure functions still have access to certain variables and values they need to operate

STARTER CODE:
https://drive.google.com/drive/folders/1VxGo_1WAmV7fXMQ8VXWef3g8IMHnEw08?usp=sharing

FINAL CODE: 
https://drive.google.com/drive/folders/1BMPGcr0Q3wkIQneK1Vj0_2iD8uAKnU0r?usp=sharing

We have a lesson about setting up OOP architecture in the "Code Structure Styles" chapter in our theory document (or at least that's where I placed it when I made it)

#### Geolocation API Callbacks and "this"

The "this" keyword inside the API's successCB/errorCB both return undefined

```js
navigator.geolocation.getCurrentPosition(successCB, errorCB)
```

![image-20210503141211771](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210503141211771.png)

It acts just like a regular function defined on the global scope

```js
function apples() { console.log(this) }
apples();  //OUTPUT: undefined
```

- The solution is to bind the this keyword to the class the `_loadMap` function is a part of (`.bind(this)` works outside of the successCB)
- This is something we do when event handlers reference variables defined in the class constructor. It shouldn't have surprised us, honestly

![image-20210503143007235](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210503143007235.png)

#### Chaining Methods

After our refactor, we have... 
a) Global variables defined in the class constructor
b) Event listeners set up in the class constructor
c) Functions defined in the prototype but invoked in the constructor 

It's set up in a way that follows our architecture diagram perfectly. (beautiful tbh)

The `_getPosition()` function block invokes the `_loadMap()` function for example
It makes sense that you want the map loaded after you find out the starting location

![image-20210504010512148](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210504010512148.png)

- Normally bind() doesn't invoke a ƒ() in 1 line, and even here it technically doesn't
- Though hard to see, `this._loadMap.bind(this)` is the successCB for the geolocation API "get current location" method

![image-20210503011411585](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210503011411585.png)



### Managing Workout Data: Creating Classes

We're going to implement classes to manage the data about our cycling and running workouts that are coming from the UI. (take a look at the architecture diagram)

#### Properties

We're going to create a singular Workout Class for all the properties/methods that running/cycling have in common. 

Then we'll create Child classes for the unique properties/methods that running and cycling have only for themselves

SHARED:

- Both cycling and running have `distance` , `duration` , and `coords` in common
- When I say they have coordinates in common, I mean you both use the coordinates for where the user clicks on the map

SPECIFIC TO 1 EXERCISE:

- Running has a unique form entry; cadence
- Cycling has a unique form entry; elevation

#### Building the Workout Class

Properties List: ID, distance, duration, coords, date

The ID is necessary for finding a Workout object later on. 

- As we save multiple workouts, they're going to be placed inside of an array- and we'd like a way to find each one 
- Usually we rely on a library to generate unique ID's for us, but for now we'll just take the last 10 characters of the current date expressed in its default format and use that as an ID instead (keeping things simple for a learning project)
- NEVER do this for a serious project, because it'll lead to multiple users having the same ID if any 2 create a a new workout object at the same time

```js
class Workout {
  date= new Date()
  id = (Date.now() + '').slice(-10); // last 10 chars in string form
  constructor(coords, distance, duration) {
    this.coords = coords; // should be found after map's clicked
    this.distance = distance; // km
    this.duration = duration; // minutes
  }
}
```

#### Building the Running and Cycling Classes

RUNNING:

```JS
class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
  }
  calcPace(){
    //& We can set new properties using Method calculations
    this.pace= this.duration / this.distance; // min per km
    return this.pace
  }
}
```

CYCLING:

```JS
class Cycling extends Workout {
  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);
    this.elevation = elevation;
  }
  calcSpeed(){
    this.speed= this.distance/(this.duration/60) // km per hr
    return this.speed;
  }
}
```

- In our application, we'll programmatically grab coordinates depending on where the map we click. 
- The remaining properties will get values based on the values we submit from our form. But for now, let's test to see if these classes work:

```js
const run1 = new Running([39, -12], 5.5, 24, 178);
const cycling1 = new Cycling([39, -12], 27, 95, 523);
console.log(run1);
console.log(cycling1);
```

![image-20210504131942180](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210504131942180.png)

### Planning Out Remaining Features

The class architecture has now been built; it's now time to look back at the feature flowchart and begin working on the part where "user submits new workout". 

- This lesson will focus on feature 5 
- That being said, there are many more things involved beneath the surface besides these simple actions

![image-20210430145047326](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210430145047326.png)

![image-20210502201514197](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210502201514197.png)

#### Feature 5 Operations List

AFTER WE HIT ENTER: 
This all happens inside of `_newWorkout` method, in the order presented here

- Accept data when ENTER is hit on a form
- Check if the data makes sense, and alert users when it doesn't (data validation)
- If workout type is running, create a running object
- If workout type is cycling, create a cycling object
- Add a new object to the workout array
- Generate a marker on the map with a hardcoded message (for now)
- Clear input fields and remove focus from them

#### Feature 6 Operations List

- Hide the Form after a workout's submitted
- Make the pop up marker display info about your wrokout instead of a hardcoded message
- Render your workout on the left, as part of a list

#### Feature 9 Operations List

- Center map screen based around a marker's location when we click the corresponding list item
- Make sure the map marker is created before we implement this feature

#### Feature 7 Operations List

Want to save our workouts after we reload the webpage

- Save the workouts array to the webpage after every change
- The site should load up all workouts from the workouts array upon startup



# Forkify App

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210628151617307.png" alt="image-20210628151617307" style="zoom:80%;" />

PROJECT OVERVIEW:

[Test working demo here](https://forkify-v2.netlify.app/#5ed6604591c37cdc054bcc4e)
[Description of app: 0:00 to 4:00](https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649531?start=30#overview)

![image-20210628151236394](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210628151236394.png)

### Milestones

#### Step 1: Pull up info on a certain recipe

- Each recipe has an ID which you can plug into a fetchAPI link to generate an object containing pertinent information on it
- The API was custom built by Jonas himself

API documentation: https://forkify-api.herokuapp.com/v2
Git commit: "Create showRecipe function"

```js
const showRecipe = async function () {
  try {
    let recipeID= '5ed6604591c37cdc054bc886'
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeID}?key=6ff36859-c745-4afa-abe5-d1acdd55cf65`
    );
    if (!res.ok) throw new Error('food cannot be found in our database'); 
    let parsedRes = await res.json();
    
    // Reformat the info captured from our fetch request so the names are simpler
    let {recipe} = parsedRes.data
    recipe= {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_Time,
      ingredients: recipe.ingredients
    }
    console.log(recipe) // show our object full of info
  } catch (err) {
    console.error(err);
  }
};
showRecipe();
```



#### Technical View of our Recipe Display

![image-20210630181346173](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210630181346173.png)

STATE OBJECT ("export state")

We will have an object named "state" which will be exported to the controller
That state object will contain nested objects for recipe, search, and bookmarks

# What I Learned Creating...

### PIG Project

#### Dry Code and Refactoring

- We needed several functions to cut down on repeat actions - especially adding up entries in an array
- We solved nearly every single requirement on our to do list normally, then just put any blocks of code we found repeated inside of a function defined at the top

See this: ![image-20210301173833219](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210301173833219.png)

Lines 178-180 are all functions that were originally in the event handler. They took up a lot of space, and were repetitious, so we called them back as functions instead

Even lines 181-186 could be placed into a no-parameter function:

```js
function enable_Buttons_And_Reset_Totals(){
// lines 181-186
}
```

Although we could make this and just invoke it to cut down on the event handler bulk, there'd be no point. It's not like we reuse this code anywhere

#### The Importance of Consistent Variable Names

Good names make programming feel like writing pseudocode on a sheet of paper. 
Look at the last photo in the previous sub section again 

- It's clear what each line of code does because of our function names and our comments 
  We don't even need to see the real JS syntax to know what's going on

Consistency is a must when you have a scenario like this where you have 2+ players. 

- The variable names for each of them should be identical except for the number

  For example, let's say I want to reset current scores for both players
  PLAYER 0: `resetP0CurrentScore()` made this function earlier*
  PLAYER 1: `resetP1CurrentScore()` would be the perfect name

This way, I don't even have to look through my code to know how to make something work for the other player

#### Storing User Inputs

START: Empty array, or an array that had one entry containing 0
ADD user dice roles: Use `array.push()`

Know that there is a difference between updating a score in JS, and having it be seen on the webpage using textContent or innerHTML. They are 2 separate actions

Keeping track of Current Score

![image-20210301180642953](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210301180642953.png)

Keeping Track of Total Score

![image-20210301181013591](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210301181013591.png)

### Bankist App

#### Filtering Out Stupidity

When it comes to form fields, you are going to have several scenarios where a user has the chance to input information that makes no sense

![image-20210405165544647](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210405165544647.png)

A logged in user may try to... 

- Send someone else negative money, send money to themselves, send to someone who does not have an account with the company, send more than they have...etc

Think about every possible thing a person may try when building your applications. 

- Include if statements in your event handlers that end the function immediately as soon as someone tries to do something nonsensical (I call them STOPGAPS) 
- use `return alert("Invalid input")` for example, then nothing that comes afterwards in the event handler will occur

```js
btnLoan.addEventListener('click', (eventObj)=>{
  eventObj.preventDefault();
  let request= Number(inputLoanAmount.value); //equals 0 if input's not a number
  //# Check if at least 1 deposit is 10% of the request
  let point1ofRequest= currentAccount.movements.some((transac)=>{
    return transac>= request*0.1 // returns true or false
  })
  
  if(request===0 || point1ofRequest===false) return alert("Invalid request") //STOPGAP
  /* EVERYTHING PAST THIS POINT
  will only happen if the info the user supplied makes sense. 
  We don't even need to write this within an else statement
  The callback ƒ() ends if the info triggers the if statement containing "return"
  */  
})
```

#### Adding Several Features to Projects

You'll likely have several features that your sites are capable of, and it can be hard to keep track of everything going on

Divide your code up into zones.
Have zones for HTML element imports, premade functions, project-oriented functions, new features...etc

When working on a new feature, include a comment section at the top describing what elements are involved, which global variables are required, what conditions you need to code in, any stopgaps you may need to implement...etc

![image-20210405170929857](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210405170929857.png)

![image-20210405171008684](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210405171008684.png)

#### Keeping Track of Important Functions

- Have a google doc open with important functions copy pasted inside. 
- Be sure to include parameters in the exact order they're required

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210405180401976.png" alt="image-20210405180401976" style="zoom:67%;" />

#### Reversing Changes Made by Events

There is no JS method than can undo a certain event that you programmed in. 

EXAMPLE WHERE THIS MATTERS: 
Make the sort button reorder all transactions from highest to lowest. 
If you click that button again, make it return the list to its default state

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210405204301927.png" alt="image-20210405204301927" style="zoom:80%;" />

- If we use the sort() method on the array of movements we used to create this list, it permanently changes it, and we cannot reverse that. 
- However, we still want our sort button to reorganize these transactions from highest to lowest. What's the play here?
- Clone the original movements array, then sort() so it can be shown on the display
  If the sort button is clicked again, re-show the original

```js
// default state for the movements display is 0
// switch the st8 value to 1, when the movements display is sorted
let st8 = 0;
btnSort.addEventListener('click', () => {
  let reorganizedClone = currentAccount.movements
    .concat([])
    .sort((num1, num2) => num2 - num1);
  if (st8 == 0) {
    displayMovements(reorganizedClone);
    st8 = 1;
    return // just here to end the handler
  }
  if (st8 == 1) {
    displayMovements(currentAccount.movements);
    st8 = 0;
    return // just here to end the handler
  }
});
```

#### CTRL F is King

When making adjustments to your site, you're likely tampering with one or more elements you brought in from HTML. 

Ctrl F what you're working on to locate it your file, then keep it activated. 
You'll have every instance of that element highlighted as you work. 

- It helps you catch bugs if you place your statements too early or late
- Lets you know what that element is attached to in your code
- Increases your maneuverability across the JS document
  You can zip between a function's initial declaration to every place it's called

### Forkify

#### Organizing your SASS/CSS

TOPIC ONE:
Let your index.html file point to your SCSS file location

- Bundling with parcel will auto-compile it to CSS for you, as long as you install SASS as a dev dependency. 
- Use HMR and the npm build preview instead of live server from now on

TOPIC TWO:
Don't have 1 long SASS/CSS files that styles every little thing on your webpage

- Instead, have a series of files dedicated to 1 subsection of your page, then import them to your central SASS file
- This keeps things organized while helping you isolate visual bugs much more easily

![image-20210628203513963](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210628203513963.png) ![image-20210628203542155](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210628203542155.png)

### Extra

Interesting use of spread operators, array destructuring, regex...etc to return altered versions of strings:

```js
// this function takes a string, remmoves all spaces, and sets letters to lowercase
const oneWord= function (str){
  let a= str.replace(/ /g,"").toLowerCase(); //remove spaces via regex
  return a;
}

// capitalizes the first word of the string you feed it
const upperFirstWord= function(str){
  const [first,...others]= str.split(' '); 
  // use destructuring on the split array version of the string argument
  return [first.toUpperCase(), ...others].join(' ')
  // return the same initial string, but with the first word capitalized
}

console.log(oneWord("By the Gods")); 
console.log(upperFirstWord("hoo-wee! I'm not sure about this, Rick!"));
```

![image-20210320031545508](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210320031545508.png)























f