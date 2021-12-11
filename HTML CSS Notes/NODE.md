### Checking for Node.JS Installations

You may have used chocolatey to install Node.JS on your windows machine. 
Sometimes, their custom commands to delete Node from your computer won't work properly

#### Deleting Node.JS

STEP 1. Check to see if node is installed by typing `node -v` in your CMD window

- If it is installed, the window will return a version number
- If not installed, the window will return a small paragraph telling you "Node" is not recognized

STEP 2. If you do have Node.JS installed, uninstall like you would for a video game

- Go to control panel=> uninstall or remove programs => select Node to uninstall

#### Downloading Node.JS

1. Install Git first: [Git Installation On Windows | How To Install Git on Windows 10 | Git Installation | Simplilearn - YouTube](https://www.youtube.com/watch?v=2j7fD92g-gE)

2. Install Node.JS without Chocolatey

Follow these instructions if you must: See "On Windows"
When in the power shell, command window, or Git, run as admin for these setup steps
https://github.com/nodejs/node-gyp#on-windows

- Download Python from the Microsoft store, not the official Python site
- Install a version of NodeJS from their official site, but leave the box that includes Chocolatey UNCHECKED (they cause errors that say we don't have Python, even though we do)

#### Testing to See if NodeJS Works

TEST 1: Test if Node JS is installed with `node -v` which should return a version number
Do this in the command window for windows

TEST 2: In the command window for windows, type...

`node`
`function testNode() {return "Node is working"}; testNode();`

If it works, you should get "Node is working" returned back to you

#### Errors

When trying to use packages via node in VSCode, you may receive this message: 

'cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at  https:/go.microsoft.com/fwlink/?LinkID=135170.'

SOLN: Input the following inside VS Code's terminal

```
set-ExecutionPolicy RemoteSigned -Scope CurrentUser
Get-ExecutionPolicy
Get-ExecutionPolicy -list 
```

Should work now! If not, read this article where I got my solution: https://www.c-sharpcorner.com/article/how-to-fix-ps1-can-not-be-loaded-because-running-scripts-is-disabled-on-this-sys/

#### NVM (needed when you want Node version switching)

[How to install the LTS version of Node.js using nvm | Node.js Tutorials for Beginners part 2 - YouTube](https://www.youtube.com/watch?v=vbhsySyFgPw&t=306s)

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

nvm ls-remote --lts |grep Latest


nvm install --lts
```





```

```





