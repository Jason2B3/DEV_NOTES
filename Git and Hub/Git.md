# ========  GIT INTRO  ========

UNLESS OTHERWISE STATED

- Assume any action I make when using Git takes place on a branch tip/reference
- Most actions have the potential to incorrectly tweak a working tree if done on an older commit, which puts you in a detached HEAD state

# Introduction

GIT TOPICS:
Core: 			  Installation, Git basics, committing, branching, merging
Advanced: 	Diffing, stashing, undoing changes

GITHUB TOPICS
Core: 				Fetching/Pulling, collaborative workflows, Odds/Ends
Advanced: 	 Rebasing, interactive rebasing, tags, BTS, reflogs, custom aliases

Git Bash installation instructions: 
https://www.udemy.com/course/git-and-github-bootcamp/learn/lecture/24911522#overview

### Definitions

![image-20210614230653458](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210614230653458.png)

WORKING DIRECTORY:
Your current local directory that you are working on. 

Ex. Let's say you have `master` and `alt` as your remote branches
If you checkout the `alt` branch, then its latest commit will be your working directory

STAGING AREA:
All the files you've git added, or moved to the "Staged Files" section in GitKraken

REPOSITORY OR WORKING COPY:
The folder you used `git init` on, with all its content inside

————————————————————————————————————————————————————————————

UNTRACKED FILES:
Any files you've added to your directory, but have not committed yet

### What is Git?

Git is the world's most popular version control system (VCS)
Version control is software that tracks and manages changes to files over time

#### Git Powers

With Git, you gain the ability to...

- Track changes across multiple files
- Compare versions of a project while letting you time travel back to old versions
  A save state, but for coding
- Undo or share changes 
- Combine changes with others to collaborate

This is extremely useful when experimenting with a larger codebase. You can break your code, delete crucial files...etc. As long as you created a save state with Git, you won't face any consequences. 

DIVERGING PATHS: 
Your development won't always be sequential. 

- You can branch off and create different versions of your websites which stem off from different versions of your project
- You can even combine versions from different paths to incorporate the changes you've made to both versions (without recoding everything)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210604153431647.png" alt="image-20210604153431647" style="zoom: 50%;" />

#### Git vs GitHub

- Git is version control software that runs on people's computers and does not require internet connection or an online account
- GitHub is a web service that hosts web depositories- it holds all your projects once you upload it 

HOW COLLABORATION WORKS:

- You can use Git to help build your project, the upload it to GitHub so others can download it for themselves...or vice versa
- When someone takes a project started by someone else, they can download it, add more features, then upload their newer version to GitHub again- now others can continue development on their end

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210605144640158.png" alt="image-20210605144640158" style="zoom: 33%;" />

#### Terminal or GUI?

Git was built to be used in the command line, but there are some free graphical user interfaces (GUI's) that make it a little more user friendly and intuitive

- With GUI's, you can use your mouse to hit buttons and make choices instead of entering lines into a terminal
- It takes longer, but the visuals may help you better understand what's going on

THE ARGUMENT FOR AND AGAINST GUI'S:

![image-20210605145626048](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210605145626048.png)

THE ARGUMENT FOR AND AGAINST THE TERMINAL:

![image-20210605145811184](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210605145811184.png)



### Installing Git Bash and Git Kraken

#### Git Bash and GitKraken

Installing Git Bash is a lot easier and requires less configuration on a Mac. 

- Git was designed to be used on Unix Based interfaces, which Windows machines don't have by default- they have a command prompt instead
- When you install Git Bash, there are some extra steps you'll need to take
  https://www.udemy.com/course/git-and-github-bootcamp/learn/lecture/24911522#overview

When installing GitKraken, try to use the same email and name you'll set in Git Bash (see next section)

- As for the initial GitKraken setup, there's not much to it
  https://www.udemy.com/course/git-and-github-bootcamp/learn/lecture/24924784#overview
- Just use the email linked to your primary GitHub account



### Terminal Crash Course: Navigation

We'll be learning about basic UNIX commands in this lesson. 
They are a prerequisite to using Git effectively, even if they're not an official part of it

- Navigate through your files and folders through the terminal
- Make changes, delete files, create new ones



#### Show files in current directory

```
cd ~/Desktop		go to in desktop directory (good start location)
dir 				shows all files inside current folder
ls					shows all files inside current folder (w/ color coating in GB)
start .				shows file explorer instead of text to show location
```

![image-20210605174706210](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210605174706210.png)



#### Show files in another directory

Can use `ls <filePath>` to see what's inside other folders
Just remember it won't actually take you there

```
ls GAMES			show files inside GAMES folder
start GAMES			does same thing, but opens file explorer to illustrate
```

![image-20210605175212561](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210605175212561.png)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210605175607052.png" alt="image-20210605175607052" style="zoom:80%;" /> ![image-20210605180634325](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210605180634325.png) 



#### Complex File Names

- File names can contain all sorts of symbols that UNIX won't recognize like apostrophes, spaces...etc
- When specifying file paths with names like this, use `\` to escape the character the follows right after it
- An alternative is to just surround the file path in quotation marks

EXAMPLE: Show what's in our "Limbo" folder, which is in our "Prob won't play" folder

```
cd ~/Desktop					enter desktop directory
ls GAMES/Prob\ won\'t\ Play		SOLN 1
ls "GAMES/Prob won't Play"		SOLN 2
```

We used `\ space*` instead of space, and `\'` instead of '

![image-20210605182424759](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210605182424759.png)



#### Change Directory

The `cd` command changes the directory to whatever you type after it

```
pwd					gives filepath to exact location you're in
cd <filepath>		enter whatever directory you specify

cd <folderName>		enter a file folder whose level you're currently on (deeper)
cd ..				go 1 level higher 
cd ../..			go 2 levels higher
```





### Create & Delete Files/Folders

You can make any type of file with the touch command (.css, .js, .jpeg, .pdf)

- If you're trying to add multiple new files or folders, just separate the file/folder names with a space between
- It's easiest to navigate to the directory you're making multiple additions to- or else you'll have to repeat the file path each time you create a new file/folder



#### Create files

```
CURRENT DIRECTORY:
touch nombre.js					create 1 new file
touch exam.js noo.css			create 2+ new files 

OTHER DIRECTORY:
touch <filepath>/example.pdf				create 1 new file
touch <path>/albo.js <path>/newman.css		create 2+ new files 
```



#### Create folders

```
CURRENT DIRECTORY:
mkdir contain					create 1 new folder
mkdir contain1 contain2			create 2+ new folders 

OTHER DIRECTORY:
mkdir <path>/nooFolder					create new folder 
mkdir <path>/nFolder1 <path>/nFolder2	create 2+ new folders 
```



#### Permanence of Deletion

- Anything you delete in the terminal will be trashed permanently- it will not go into your recycling bin
- Be careful with the following commands, and make sure you have backup copies of your files or have them hosted somewhere



#### Deleting Files

```
CURRENT DIRECTORY:
rm sheet.xlsx					delete 1 file
rm spoony.txt linkara.docx		delete 2+ files

OTHER DIRECTORY:
rm <path>/jax.txt					delete 1 file
rm <path>/jax.txt <path>/tig.txt	delete 2+ files
```



#### Deleting Folders

BE CAREFUL ABOUT WHAT YOU DELETE 
The folder and the git repo with all its history will be lost permanently

```
CURRENT DIRECTORY:
rm -rf foldname					delete 1 folder (regardless of what's inside)
rm -rf foldname1 foldname2		delete 2+ folders

OTHER DIRECTORY:
rm -rf <path>/foldname					delete 1 folder
rm -rf <path>/fname1 <path>/fname2		delete 2+ folders
```



#### Deleting a Repository

Easiest with git Kraken

1. Make sure GitKraken does not have an open tab for the repo you're about to delete
2. Search for the repository, then right click the one you wish to delete
   The entire folder along with hidden files like .git will be erased fr/ your machine

![image-20210609175605935](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210609175605935.png)



### Misc. Commands & Tips

BASICS:

```
clear				clears screen, but you can scroll up to see old commands
CTRL L*				shortcut that does the same thing ^^

pwd					gives filepath to exact location you're in
CTRL Y				acts like CTRL-Z. Restore what you just deleted in your line
```

#### Copy, Pasting, and Deleting Lines

You can use your mouse to copy paste normally, but CTRL+V and CTRL+C are reserved for other actions- meaning even your keyboard bindings won't work 

COPY: 	 CTRL Insert (or use mouse)
PASTE: 	Insert 

ERASING CURRENT LINE
You can't highlight an entire line in Bash then backspace it out of existence, but there are some workarounds and alternatives

```
CTRL U		deletes all before letter cursor (so have it at the end) 
CTRL W		deletes last word only
CTRL K		deletes all after letter cursor

(Last method not recommended)
CTRL C		cancels line, but it will still be present on your screen's recent lines
```

COMMENTS

```
ALT SHIFT # 	leaves comments in your line history
```



### Documentation

The documentation for Git is pretty long and extensive

WHY'S THAT? 

- Every command has flags, which alter the command's behavior when tacked on at the end
- You likely won't be needing many of them, but they appear from time to time- which makes them important to understand on a need-to-know basis 

Git Documentation: https://www.git-scm.com/docs
The documentation should be used to look up commands, then flags that work with them

Git Manual: https://www.git-scm.com/book/en/v2
The manual is a book with a clear structured path to learn Git thoroughly




# Adding & Committing

### Git Repo Basics

Every time we have a new project, we need to create a new Git Repository

They are individual workspaces that are not linked or connected in any way- which gives each project its own unique history

#### Commands

STARTING A PROJECT: (only done once)

```
** navigate to top level folder and enter that directory **
git status 		check status of a gitrepo and its contents 
git init		create a new git repository 
```

Once you create a new repo, a hidden .git folder is created- you won't see it in the file explorer, but it's where all the git history gets saved

```
ASSUMING YOU'RE ON THE INIT DIRECTORY:
ls -a			see all files in directory (even hidden git file)
cd .git			see what's in the .git folder 		
```

#### Common Error 

ERROR: Initializing a file when you're already in a repo

- Git tracks all changes within the init folder we specify, even those nested deeply within. 
- For that reason, DON'T use `git init` inside an existing repo
  Things get confusing when Git tries to track 2 histories that are intermingled 

SOLUTION:

- This can be avoided by checking if you're in a git repo before you initialize anything (via `git status`)
- If you're not in a directory, you'll get a message like "not a git repository"

If you make this mistake, simply delete the .git folder using one of the basic UNIX commands explained in the last chapter



### git add

Git commits are like checkpoints or save states in video games. 
At certain points during development, we'll want to save the project's current version

#### The Basic Git Workflow

When creating commits, we don't treat it as if we're saving our files in a fancier way. There is an intermediate step between making changes then committing
If a set of actions have a common goal/theme/purpose, consider them all as 1 commit

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210606213008578.png" alt="image-20210606213008578" style="zoom:50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210606213102756.png" alt="image-20210606213102756" style="zoom:50%;" />

EXAMPLE: We made 7 changes to our project. How many commits does this warrant?

1. Added new team members to "about" page (first 3)
2. Added navbar with logo (last 4)

#### Definitions

The diagram that follow depicts the same process as the previous subsection's

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210606214037358.png" alt="image-20210606214037358" style="zoom:50%;" />

WORKING DIRECTORY: 
The main directory you work in- which is also the folder you initialized with `git init` 

STAGING AREA:
Where we add our changes to before making a commit

REPOSITORY:
Your hidden .git folder created after initialization
When you make commits, this folder will get updated accordingly

VISUAL REPRESENTATION OF A COMMIT:
Let's say we made 7 changes, and want to group our last 4 together to form 1 commit

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210606215307126.png" alt="image-20210606215307126" style="zoom:50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210606215334324.png" alt="image-20210606215334324" style="zoom:50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210606215412104.png" alt="image-20210606215412104" style="zoom:50%;" />

#### Git Add

This command is what allows us to group actions together in order to complete the "Add changes" step of the general workflow (also known as "staging" files)

- If you change files in your project directory without committing them, using `git status` will get you a list of "untracked files"
- Untracked files get added to the repository as soon as you use `git add` on them

SYNAX:

```
git add <filename>			Provide the file you adjusted or changed 
or...
git add <fname1> <fname2>	Provide multiple if necessary
```

ALTERNATIVE:

```
git add .		Stages all directory files that were newly added or changed
```

FTR: Usually it's best to be specific, but this is much faster

#### Viewing Staged Files, and Unstaging

IN GITKRAKEN:
You can stage/unstage files here, or use the terminal instead

![image-20210615180050555](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210615180050555.png) 	![image-20210615180316741](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210615180316741.png)

TERMINAL:

```
git diff --name-only --cached		gives list of staged file names
git restore --staged <file-path>	unstage the file you namedrop
```



### git commit and Messages

After specifying a list of changed files with `git add`, we can finally commit them

- You'll have to provide a message that summarizes that group of changes 
- In an image shown in the previous lesson, the message was "Add Branded Navbar"

SYNTAX:

```
PRESENT TENSE IMPERATIVE:
git commit -m "Add Branded Navbar"		finalize commit 
——————————————————————————————————————————————————————————————————————————
PAST TENSE IMPERATIVE: 
git commit -m "Added Branded Navbar"		finalize commit
```

#### Git message conventions

- Although not strictly required, it's recommended to use present tense imperative commit messages- or whatever your org tends to use
- Just imagine you're telling the machine to do something when you roll back to that specific commit

#### Keeping Commits Atomic

ATOMIC COMMITS:
A commit that encompasses a single feature, change, or fix (focused on 1 thing only)

- People will often recommend keeping your commits atomic, because it makes undoing changes much easier down the line. 
- Your project's code will be easier to review as well
- It does NOT mean limiting yourself to staging/committing things 1 file at a time

#### Alternative Commit Syntax

```
git commit		be careful and read the warnings below!
```

- Unless otherwise specified during installation, a Windows computer will open the vim editor after this command- which is much more confusing than VSC
- Go online and find a terminal line that'll switch your default editor if you encounter this problem



### Git Log Command

During the course of a project, you'll receive differing messages from Git. Their content is dependent on what Git has in its repo, and if the files are up to date

#### Status Changes after Actions

![image-20210606223158703](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210606223158703.png) ![image-20210606223225296](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210606223225296.png)  (both txt files start off empty)

A) Initialize main directory

```
** navigate to single folder directory **
git init		create a new git repository 
git status		look at the state of our files
```

![image-20210606223500194](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210606223500194.png)

Both text files are untracked because we never added them yet

——————————————————————————————————————————————————————————————————————————
B) Commit 1: Add the lyrics file

```
git add lyrics.txt
git commit -m "Add lyrics file"		(img 1)
git status							(img 2)
```

![image-20210606223935637](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210606223935637.png)

As you can see, the only untracked file left is artists.txt

![image-20210606224017647](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210606224017647.png)

——————————————————————————————————————————————————————————————————————————
C) Make changes to lyrics (copy paste any song lyrics in)

```
git status		reveals that one of our files was modified
```

![image-20210606224445909](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210606224445909.png)

——————————————————————————————————————————————————————————————————————————
D) Update Git to the most recent version of our project. Name the commit "Finished"

- Add the artists.txt file, and re-add the lyrics.txt to update Git on its recent changes. That should bring Git up to speed on everything
- We'll be checking the git status often to see what messages we receive

```
git add lyrics.txt artists.txt		add files
git status							check status to see all files are in repo (img 1)
git commit -m "Finished"			final commit
git status							check to see if we have a clean tree
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210606224751978.png" alt="image-20210606224751978" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210606225053754.png" alt="image-20210606225053754" style="zoom:80%;" />

#### Git Log Command

It gives a list of commits along with information regarding them
It retrieves data, but does not perform any actions

```
git log		gives list of commits (recent ones at top)	
```

It provides the contributor username/email, plus the commit date/message

![image-20210606235326371](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210606235326371.png)

That long number in yellow is the commit hash, and we'll be needing it to revisit old commits

#### Prettier Git Logs

- There are some flags you can add to `git log` so that your messages look nicer
- This becomes more important when your commit messages are extremely long, or when you begin to have more than just a few

1 line Commit Messages:

```
git log --oneline
Makes each commit message 1 line long 
The commit hash will only include the first 7 chars
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210607164849200.png" alt="image-20210607164849200" style="zoom:50%;" /> ![image-20210607164908181](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210607164908181.png) 

There are many more flags that let you customize how your commit messages will be given to you. Check out the documentation page for git-logs, then CTRL F "Commit Formatting"

https://www.git-scm.com/docs/git-log



### Fixing Commit Mistakes with Amend

Possible Mistakes

- You mistyped something inside your commit message, or just summarized the wrong set of actions
- You forgot to stage 1 file or more in your list of files for the commit

#### Amend Previous Commit

WARNING: 
This only helps you fix the last commit you made. 
Don't try this if you messed up a commit that occurred 2 or 10 rounds ago

SCENARIO: Forgot to stage a file AND your commit message has a typo

```
git add forgotten_file			(only do this step if you forgot to stage a file)
git commit --amend
```

- Your default editor will now open up, and you can fix up your message
  Edit your message, save, then close VSC
- Any currently staged files will be added to the stage list in that VSC file that opens up. You'll be able to see

### Ignore Files with Git Ignore

There will be some files in your project that you don't want Git to track or even know about- which is why git ignore exists

#### Scenarios where its Required

EXAMPLE 1: node_modules files

- There's no need for git to track this, because new devs can clone that folder with a simple node command later on (uploading it to GH would take forever)
- We're going to be adding hundreds of files at a time, which would make staging precisely an absolute nightmare

EXAMPLE 2: Private App Information

- Imagine you have an application which accepts people's credit card info, or personal emails with passwords. 
- Sure would suck if anyone with access to the codebase could view all that information, huh?

EXAMPLE 3: Irrelevant log Files

- After X amount of days, Windows might automatically create a "report" text file which has nothing to do with your project, but may show up somewhere in the repo
- It's also going to be regenerated later regardless

#### Using .gitignore

- We'll create a hidden file named `.gitignore` in the root of our repository 
  (best practice to put it there)
- Inside, we can write patterns to tell Git which files and folders to ignore

![image-20210607184144674](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210607184144674.png)

The asterisk trick can be used on all file types of file extensions

#### Procedure

```
1. CREATE FILE:
touch .gitignore		create hidden file at the root of your repo

2. TYPE WHAT TO IGNORE IN THE .gitignore TXT FILE
** open up the .gitignore file in VSC
** Type your files and patterns that should be ignored

3. COMMIT THE .gitignore file
```

After the .gitignore file is committed, any changes made to the files that fall under what you typed will go unnoticed by Git

EXAMPLE STEP 2: Ignore the private info file, and whatever's inside the secrets folder 

![image-20210607191559157](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210607191559157.png) ![image-20210607191644199](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210607191644199.png)



#### .gitignore Templates

Groups of people have come together to create templates which you can copy paste into your own .gitignore file in VSC. 

Typically, these templates are separated based on what language you're using. So if you're using JS and Python, search for gitignore templates for each of those, then paste their content in 1 by 1

JS Template: https://www.toptal.com/developers/gitignore
Search for templates per language: https://www.toptal.com/developers/gitignore



#### Advanced gitignore Usage

There are more ways to ignore different types of files, especially when you learn to incorporate regex-like features to weed out files with certain types of names

Learn how by reading the Git documentation on gitignore, if this is something you need
https://www.git-scm.com/docs/gitignore



# Branches

### Theory Behind Branches & Contexts

As you know, every commit has a hash number associated with it. 

- The number references the commit that came before it- aka parent commit
- Only the initial commit's hash doesn't reference a parent

![image-20210607234643441](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210607234643441.png)

#### Branches

In real life, we won't usually be working on an application sequentially

- You'll have a lot of different ongoing routes for your project being worked on simultaneously- and those routes will now be referred to as "branches"

- Branches are like alternate timelines for a project. 
  Making changes to one will not affect the others unless we merge them

#### Why different contexts are needed

Different contexts need to happen in isolation due to the effects they may have on other people's code (they'd look like branches off the main path in our image above)

- For example, fixing a nasty bug may require you to break several parts of your application; this could mean commenting out or deleting code
- We can't have that while other devs work on features which rely on what must be broken to fix this bug.

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210607234806974.png" alt="image-20210607234806974" style="zoom:67%;" />

#### Branch Merging

At some point, we'll want to incorporate some contexts' changes into others. 

- Perhaps our bug got fixed, and we want to combine our revised bug-free code with some of the new features that have been developed in a different context on the side
- Merging branches is what allows this. 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210608004950887.png" alt="image-20210608004950887" style="zoom: 50%;" />

### The Master Branch

Whenever we `git init` the file that holds a project, a master branch is automatically created for us ("master" is the default branch name)

#### Preferential treatment for the master

THE MASTER BRANCH IS NOTHING SPECIAL

- You can delete or rename this branch, just like you can for any of the others
- It has no unique commands or properties

Despite the above points, people often treat it differently in during the development process- so much so that it's part of the workflow at most companies

- People often treat it as the "official branch", or the working branch of their project which is never left in a broken state
- They'll get experimental on other branches, and merge if the added features they're working on are successfully implemented

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210608010703901.png" alt="image-20210608010703901" style="zoom:50%;" />

If the experimental branch is going to be scrapped, the experimental branch is left unmerged with the master branch

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210608010748866.png" alt="image-20210608010748866" style="zoom:50%;" />

#### Master branch vs main branch


These 2 terms are interchangeable

- As of 2020, GitHub's made a push to rename the "Master Branch" something less potentially offensive
- In documentation, "main branch" is our new replacement synonym for "master branch "
- A lot of old articles, questions, and answers will still refer to master branches, since this is a fairly recent change

### Head

When you check out the git logs, you'll often see (HEAD -> master) on the commit at the top of the list

![image-20210608011514317](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210608011514317.png)

#### What is HEAD?

The HEAD is simply a pointer that refers to the current "location" in your repository More specifically, it points to a particular branch reference

SIMPLE EXPLANATION

If our web application was a book, the commits would act like a bookmark
The HEAD would be the page number of what we're currently reading 

- We can only read 1 page at a time, and we jump back to earlier points in the book using bookmarks to tell
- If we choose to go back to a earlier point in the story, that's where the HEAD will point to. 

#### Where HEAD Points

If you're only working on the main branch, it points to the latest commit by default. 

![image-20210608012232459](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210608012232459.png) 		 ![image-20210608012213626](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210608012213626.png)

You can get experimental on a new branch, and the HEAD will point to the latest location on it, as you make more commits

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210608012535971.png" alt="image-20210608012535971" style="zoom: 67%;" />	 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210608012617264.png" alt="image-20210608012617264" style="zoom:67%;" />

LOOKING BACKWARDS:

At any point, we can choose to go back and look at earlier versions of our application, even on another branch. Once we do, that is where the head will point to

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210608013205590.png" alt="image-20210608013205590" style="zoom: 67%;" />

### Creating, Switching, & Viewing Branches

LIST ALL BRANCHES:

```
git branch		
gives a list of all branches (the one you're on is highlighted green)
```

You can always check what branch you're on with `git status`



#### Create/Switch to new Branches Method 1

METHOD 1: Create new branch and switch to it (all at once)

```
git switch -c <branch-name>		
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210609130738145.png" alt="image-20210609130738145" style="zoom:67%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210609130917286.png" alt="image-20210609130917286" style="zoom:50%;" />

The older alternative for this dual command would be `git checkout -b <branch-name>`, but stick to using switch instead



#### Create/Switch to new Branches Method 2

METHOD 2: Create new branch and switch to it (one step at a time)

```
git branch <branch-name>		creates new named branch (D.N include spaces)
git switch <branch-name>		after creating a new branch, switch to it with this
```

- `git branch <name>` creates a new branch based on the current HEAD 
  It does NOT switch you there, so the HEAD remains the same
- To switch branches, use `git switch <name>`

AT FIRST, 1 COMMIT WILL BELONG TO 2 BRANCHES:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210608185342059.png" alt="image-20210608185342059" style="zoom: 35%;" /> ![image-20210609000244247](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210609000244247.png)

SCENARIO:

- We've been working on our purple master branch, and make our latest commit on it
- We then decide to create a "Bugfix" branch, while the head is at the aforementioned latest commit

When we use git log right after the new branch's creation, it will say that the latest commit is on 2 branches 

- Once we make a new commit for our Bugfix branch, you won't see the last purple commit on 2 branches anymore
- To see multiple branches for commits again, you'll have to repeat the new branch process or merge 2

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210609121700207.png" alt="image-20210609121700207" style="zoom:50%;" />



#### How Branch Updates Work

After we create a new branch and switch to it, we begin changing the code. 
Add new files, delete some, adjust what's there...etc

- When we switch back to the master branch, none of our changes will be there
- It'll automatically revert to what your codebase was in that branch before you jumped to another branch

SIMPLE DEPICTION:

![image-20210608190611989](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210608190611989.png)

![image-20210608190659783](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210608190659783.png)



#### git checkout: The Older Switch Command

Before git switch was added, people relied on git checkout to move between branches. 
It has multiple added affects, which is why the devs made git switch in the first place

![image-20210608235036776](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210608235036776.png)



#### Revisit Older Commits on Branch

```
git checkout <commit hash>			find commit hash with git log
```

- This puts you in a detached head state, and you shouldn't make any major edits, as far as I can tell (need to research more)
- Much simpler and easier to visualize differences between commits on GitKraken
  You can see what files were added/modified on any commit

![image-20210609165042984](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210609165042984.png)



### Switching Branches with Unstaged Changes

It's good practice to commit all your changes before you switch branches, especially if you don't know how stashing works

Files are in Conflict: 

- Trying to switch branches in the terminal will lead to error message + abort
- Switching to another branch while we have uncommitted changes would cause those changes to be deleted/forgotten when we try to go back

No files are in Conflict: 

- If no files are in conflict, certain files will follow you over to other branches, which must be remedied with stashing
- If it isn't `git status` will keep saying that you have untracked files, even though they should only matter to other branches



#### Files in Conflict Example

TLDR: Modified files Git was tracking without committing on a branch, then tried to switch branches back to master

- We've made 2 commits in our new Dark Mode branch, but after the last one we do a little more work then save. 
- Did not commit our last bit of work, but we are trying to switch back to our master branch anyway

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210608013205590.png" alt="image-20210608013205590" style="zoom: 67%;" />

RESULT: Terminal Error Message

![image-20210609154659668](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210609154659668.png)

GITKRAKEN:

- If you're using GitKraken, the warning is given more nonchalantly, because they have an auto-stashing feature to save our uncommitted changes
- Even still, switching branches with uncommitted changes is very bad practice



#### No Files in Conflict Example

TLDR: Added new files Git is unaware of on a branch, then tried to switch back to master without committing

- We've made 2 commits in our new Dark Mode branch, but after the last one we add a new file- but didn't change any of the files we committed last time 
- Did not commit this new file's addition, but we are trying to switch back to our master branch anyway (and Git will allow this)

Git actually allows this, but there's a small problem; the newly created file we created on the Dark Mode branch will follow us. 

- The newly created file will appear even when we jump to the master branch, and `git status` will tell us it's untracked
- This leads to future problems, so it must be stashed (learned in another chapter)

![image-20210609161745586](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210609161745586.png)



### Deleting & Renaming Branches

Delete Branch

```
** switch off the branch you're trying to delete **
git branch -D <branch-name>
```

Rename Branch

```
** switch over to the branch you're renaming **
git branch -m <new-name>
```

# INTRO CHEATSHEET

### Basics and Navigation

```
LOOK AT FILES HERE OR THERE:
ls					shows all files inside current folder
ls GAMES			show files inside GAMES folder
start GAMES			does same thing, but opens file explorer to illustrate

CHANGE DIRECTORY:
cd ~/Desktop		go to in desktop directory (good start location)
cd <folderName>		enter a file folder whose level you're currently on (deeper)
cd ..				go 1 level higher 
cd ../..			go 2 levels higher

CREATE AND ANALYZE REPOSITORIES
git init		create a new git repository 
git status		look at the state of our files

ANALYZE PAST COMMITS 
git log				gives list of commits (recent ones at top)
git log --oneline	much prettier but gives shortened hash #'s
```

#### Cutting off an Ongoing Process or List

![image-20210623140707482](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210623140707482.png)

- Sometimes Git will just hang like the above image when a list is too long and must get cut off
  In that case, press Q
- In a case where a process is ongoing and you know it's failed, press Q or Shift C

#### Misc. Commands

BASICS:

```
clear				clears screen, but you can scroll up to see old commands
CTRL L*				shortcut that does the same thing ^^

pwd					gives filepath to exact location you're in
CTRL Y				acts like CTRL-Z. Restore what you just deleted in your line
```



#### Copy, Pasting, and Deleting Lines

You can use your mouse to copy paste normally, but CTRL+V and CTRL+C are reserved for other actions- meaning even your keyboard bindings won't work 

COPY: 	 CTRL Insert (or use mouse)
PASTE: 	Insert 
In 1 action => SHIFT Insert

ERASING CURRENT LINE
You can't highlight an entire line in Bash then backspace it out of existence, but there are some workarounds and alternatives

```
CTRL U		deletes all before letter cursor (so have it at the end) 
CTRL W		deletes last word only
CTRL K		deletes all after letter cursor

(Last method not recommended)
CTRL C		cancels line, but it will still be present on your screen's recent lines
```

COMMENTS

```
ALT SHIFT # 	leaves comments in your line history
```



#### Getting Hash Numbers for Commits

```
git log 			lists all commits on console
```

It's much easier to do this on GitKraken, since you can  inspect or check out commits with a few button presses, and copy their commit numbers

![image-20210615175750783](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210615175750783.png) ![image-20210615175727352](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210615175727352.png)



#### Entering the .git folder

```
** cd into your repo folder **
cd .git
start .
```



### Create & Delete Files/Folders

#### Create files:

```
CURRENT DIRECTORY:
touch nombre.js					create 1 new file
touch exam.js noo.css			create 2+ new files 

OTHER DIRECTORY:
touch <filepath>/example.pdf				create 1 new file
touch <path>/albo.js <path>/newman.css		create 2+ new files 
```



#### Create folders:

```
CURRENT DIRECTORY:
mkdir contain					create 1 new folder
mkdir contain1 contain2			create 2+ new folders 

OTHER DIRECTORY:
mkdir <path>/nooFolder					create new folder 
mkdir <path>/nFolder1 <path>/nFolder2	create 2+ new folders 
```



#### Deleting Files:

```
CURRENT DIRECTORY:
rm sheet.xlsx					delete 1 file
rm spoony.txt linkara.docx		delete 2+ files

OTHER DIRECTORY:
rm <path>/jax.txt					delete 1 file
rm <path>/jax.txt <path>/tig.txt	delete 2+ files
```



#### Deleting Folders:

BE CAREFUL ABOUT WHAT YOU DELETE 
The folder and the git repo with all its history will be lost permanently

```
CURRENT DIRECTORY:
rm -rf foldname					delete 1 folder (regardless of what's inside)
rm -rf foldname1 foldname2		delete 2+ folders

OTHER DIRECTORY:
rm -rf <path>/foldname					delete 1 folder
rm -rf <path>/fname1 <path>/fname2		delete 2+ folders
```



#### Permanence of Deletion:

- Anything you delete in the terminal will be trashed permanently- it will not go into your recycling bin
- Be careful with the following commands, and make sure you have backup copies of your files or have them hosted somewhere

### Erasing and Cloning Local Repos

#### Deleting a Repository

Remember that deleting a repo erases all the folder's content from your machine forever, not just the .git file

PROCEDURE:

1. Exit the directory and close any Kraken tabs for the repo you're deleting
   Exit out of the folder if you were working on it in VS Code
2. Search for the repository, then right click the one you wish to delete
   The entire folder along with hidden files like .git will be erased fr/ your machine

![image-20210609175605935](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210609175605935.png)



#### Cloning a Local Repository

```
git clone <local-repo-name> <new-repo-name>
```

- Both the local/new repo names are relative file paths to their respective folders in the same directory
- You can also clone a repo to another location by providing a file path into a folder that already exists elsewhere

### Adding, Committing, Amends, .gitignore

#### Add and Commit

PROCEDURE 1: Precision

```
git add <fname1> <fname2>	add files you created or changed (mayb multiple)
OR 
git add .			Stages all directory files that were newly added or changed
——————————————————————————————————————————————————————————————————————————
git commit -m "Add Branded Navbar"		finalize commit 
```

PROCEDURE 2: Faster, if you've added no new files

```
git commit -a -m "commit message"
```

Adds and commits all files present during the last commit- in 1 step
WON'T add/stage new files you created 

#### Amend Most Recent Commit

WARNING: This only helps you fix the last commit you made.
SCENARIO: Forgot to stage a file AND your commit message has a typo

```
git add forgotten_file			(only do this step if you forgot to stage a file)
git commit --amend
```

- Your default editor will now open up, and you can fix up your message
  Edit your message, save, then close VSC
- Any currently staged files will be added to the stage list in that VSC file that opens up. You'll be able to see



### Branches

#### Create and Switch to New Branch

Remember that creating a new branch is based on where the HEAD currently points to
Make sure it's at the commit you want your branch to be based on

PROCEDURE 1: Fast

```
git switch -c <branch-name>		Create new branch & switch to it at once
```

PROCEDURE 2: One step at a time

```
git branch <branch-name>		creates new named branch (D.N include spaces)
** prev. command does not switch you to the new branch automatically **
git switch <branch-name>		after creating a new branch, switch to it with this
```



#### View and Switch b/t Branches

View list of Branches:

```
git branch		lists all branches (current one green)
git status		check what branch you're on (HEAD-> branch-name)
```

Move HEAD... aka Switch Branches

```
git switch <branch-name>
```



#### Revisit Older Commits on Branch

```
git checkout <commit hash>			find commit hash with git log
```

- This puts you in a detached head state, and you shouldn't make any major edits, as far as I can tell (need to research more)
- Much simpler and easier to visualize differences between commits on GitKraken



#### Rename or Delete Branch

Delete Branch

```
** switch off the branch you're trying to delete **
git branch -D <branch-name>
```

Rename Branch

```
** switch over to the branch you're renaming **
git branch -m <new-name>
```



### Ignoring Files

#### gitignore at Project Start

type similar patterns: ![image-20210607184144674](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210607184144674.png)

```
1. CREATE FILE:
touch .gitignore		create hidden file at the root of your repo

2. TYPE WHAT TO IGNORE IN THE .gitignore TXT FILE 
** open up the .gitignore file in VSC
** Type your files and patterns that should be ignored (use above img as reference)

3. COMMIT THE .gitignore file
** After the .gitignore file is committed, any changes made to the files that fall 	 under what you typed will go unnoticed by Git
```

![image-20210715150631142](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210715150631142.png)

JS Template: https://www.toptal.com/developers/gitignore
Search for templates per language: https://www.toptal.com/developers/gitignore

#### What you can place in .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

#### If you forget gitignore at Start

https://stackoverflow.com/questions/1274057/how-can-i-make-git-forget-about-a-file-that-was-tracked-but-is-now-in-gitign

# ========   GIT PART 2  ========

# Merging Branches (Last lesson 2BC)

DEFINITIONS:

Recipient branch:  (or HEAD branch)
The branch that you want to implement your new changes into (oftentimes the master)

Merging Branch:
The branch that has your new changes/features already incorporated in it

### Understanding Branch Diagrams

- Early on, our instructors have shown us several diagrams which feature diverging paths that are easy to tell apart because of their distinct colors. 
- This is merely a visual aid, and things don't really work like that

#### Example: Fast forward merge 

With visual aid:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210609195146491.png" alt="image-20210609195146491" style="zoom: 36%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210609195313981.png" alt="image-20210609195313981" style="zoom: 36%;" />

In actuality:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210609200606306.png" alt="image-20210609200606306" style="zoom: 44%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210609200641421.png" alt="image-20210609200641421" style="zoom:44%;" />

When we switch over to the Bugfix branch, we simply make new commits where the master branch is no longer in effect.

If we merge the bugfix branch to the master branch, the master simply "catches up", and accepts all the changes we made to the files

#### Git Kraken Visuals

Master Branch => Initial Commit
Abba Branch => Remaining 2 commits

![image-20210610154426550](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210610154426550.png) ![image-20210610155241818](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210610155241818.png)

Stage 1: Made "Abba" a branch off master's "Initial Commit" (this branch includes 2 commits)
Stage 2: Made a new commit for the master branch, that Abba has no info about
Turned what would have been a fast forward into a complex commit

When GitKraken detects 2 distinct branches that can't be FF committed, they help us tell them apart with a different color. It's tough to see, but Master is teal while Abba is blue

### Fast Forward Merge

Merging Branches allows us to combine the changes present between branches 

- When working on large projects, we'll need to combine the features of different branches that were created in parallel
- If branch features built on other branches work well && you get approval to add them onto the main project, we'll need to merge branches

UNDERSTAND

1. We merge branches, not specific commits

2. We always merge to the current HEAD branch 
   (where we are / where HEAD currently is)

3. Merged Branches are not in sync forever 

   Ex. If you merge Branch9 to master, we can still switch back to Branch9 and make new commits there that won't be present on the master

ASSUMPTION

For most of our explanations in this document, we're going to assume you're treating the master branch as the central/stable version of your project (and you only work on new features and get experimental on other branches)

#### Fast Forward Merge

This is the simplest type of merge, and it has a few conditions
If these are not met, you'll have to perform a different kind of merge 

1. There are no commits on master that don't exist on the other branch (bugfix)
2. There's no conflicting information

PROCEDURE:

```
** switch to recipient branch (the one you're passing changes to) **
git merge <merging-branch-name>
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210609195146491.png" alt="image-20210609195146491" style="zoom: 36%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210609195313981.png" alt="image-20210609195313981" style="zoom: 36%;" />

If we merge the bugfix branch to the master branch, the master simply "catches up", and accepts all the changes we made to the files



### Theory Behind more Complex Merges

COMPLEX MERGES:
Recipient branch has additional commits that the merging branch does not have
This makes the merge no longer a "fast forward"

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210610131400097.png" alt="image-20210610131400097" style="zoom:50%;" />

This is no longer a case of Master needing to catch up to Bugfix
"Bugfix" has info that "Master" does not have	(expected)
"Master" has info that "Bugfix" does not have	 (new obstacle)

POTENTIAL CONFLICTS:
Git may not be able to automatically merge everything for us- it depends on the particulars of our commits

- On line 59 on a specific JS file, Bugfix and Master have different things typed out? Which wins? 
- On the master branch, a certain file gets edited- while on Bugfix that same file gets deleted

CASE TERMINOLOGY:
If we have no conflicts, Git  automatically performs a `merge commit`
If we do, our project has `merge conflicts` that need to be resolved manually

### Merge Commits (no conflicts)

If we have no conflicts, Git will perform a "merge commit" automatically, which is different than a fast forward.  It creates a new commit on the master branch

RECIPIENT BRANCH DEFINITION:
The branch that you want to implement your new changes into (oftentimes the master)

#### PROCEDURE

```
** switch to recipient branch **
git merge <merging-branch-name>
```

Your GitKraken will display the merge like this...
All the changes made to both branches will exist together, since we have no conflicts

![image-20210613144611605](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210613144611605.png) ![image-20210613144810556](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210613144810556.png)

#### Merge Commit Diagram

MULTIPLE PARENTS:
In our simpler examples, we've mainly dealt with commits having 1 parent branch
When you perform merge commits, we generate commits with multiple
Our new commit here has 2 parents- Bugfix and Master

A. Switch to recipient branch

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210610131400097.png" alt="image-20210610131400097" style="zoom:40%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210610133147966.png" alt="image-20210610133147966" style="zoom:40%;" />

B. Perform a merge commit

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210610133426125.png" alt="image-20210610133426125" style="zoom:50%;" />



### Merge Conflicts

POTENTIAL CONFLICTS:
Git may not be able to automatically merge everything- it depends on the particulars of our commits

- On line 59 on a specific JS file, Bugfix and Master have different things typed out? Which wins? 
- On the master branch, a certain file gets edited- while on Bugfix that same file gets deleted

If we do have merge conflicts, Git will give us a message like this when we attempt to merge branches
We have to follow a certain set of instructions in order to resolve them manually 

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210613151644729.png" alt="image-20210613151644729" style="zoom: 67%;" />

#### Decorated Files, and Conflict Markers

When git notices certain files that are in conflict, it adds on certain "decorations" that help you see what must be resolved

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210613152357533.png" alt="image-20210613152357533" style="zoom: 67%;" />

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210613152418344.png" alt="image-20210613152418344" style="zoom:67%;" />

#### Resolving Conflicts: Code Differences

​											<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210613152700496.png" alt="image-20210613152700496" style="zoom:80%;" />  

EXAMPLE: ![image-20210613160746675](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210613160746675.png) ![image-20210613160834684](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210613160834684.png) ![image-20210613160922785](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210613160922785.png)

PROCEDURE:

```
** switch to recipient branch **
git merge <merging-branch-name>
——————————————————————————————————————————————————————————————————————————
Will receive merge conflict error message
** Open VSC and manually fix your conflicts using the above instructions **
——————————————————————————————————————————————————————————————————————————
** Stage all changed files then commit them **
** OR mark them as resolved in GitKraken, then stage/commit **
```



#### Resolving Conflicts: File Deletion Differences (2BC)

<< WARP UNCERN1 >>

CONFLICT SCENARIO:
Master branch has files named 1, 2, 3, 4 - and the final commit edits all of them
Merging branch deleted files 2-4, and edits 1

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210613220527672.png" alt="image-20210613220527672"  /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210613220843763.png" alt="image-20210613220843763" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210613221050323.png" alt="image-20210613221050323" style="zoom:90%;" />

Open VSC, and you'll see this when you hit the source control tab
Hitting the plus symbol lets you decide to keep a file or delete it

Keep files 1-4, and include all edits from both branches:

Keep file 4 only

Keep files 2 and 3, and keep 1 with the master branch's edit 	 



# git diff 

This entire chapter centers around a single command: `git diff`
Read the slides in the `Git Diff.pdf` while you read my notes

Understand the terminal but use the GUI in this chapter:

- There's no reason to use terminal over a GUI when it comes to analyzing file changes
- That being said, understanding terminal commands for git diff is a prerequisite for using the GUI to do the same tasks effectively

### Purpose of git diff (Slides 1-4)

This command is informative- meaning it delivers useful information but does not actually make any lasting changes. Instead, it helps us understand how things have changed

<<<  SLIDE 1:	The purpose of `git diff` >>>
There are many times where we might want to know what changed between...

- Our last commit and our current working directory
- The staging area and our working directory
- 2 branches
- 2 different files over a certain number of commits
- The same file over a certain number of commits

COMMON SCENARIO:
If you make several changes that you lose track of, it will be tough to create a good commit message when it's finally time to save/commit your work- unless we use git diff

### git diff Variants

#### When to use them

| SCENARIO                                         | should probably...                             |
| ------------------------------------------------ | ---------------------------------------------- |
| working tree unclean<br />(uncommitted changes)  | check the staged/unstaged changes in our files |
| working tree CLEAN<br />(no uncommitted changes) | compare branch tips or specific commits        |

These are not strictly required. 
You can still compare different commits to each other if you have uncommitted work, for example

#### Working Tree Unclean

When we say "staged or unstaged changes", it means we're comparing our current uncommitted version to our last commit version

|                                 | lists out...                                            |
| ------------------------------- | ------------------------------------------------------- |
| Changes between all files       |                                                         |
| `git diff`                      | all unstaged changes in our directory                   |
| `git diff HEAD`                 | lists both staged and unstaged changes                  |
| `git diff --staged`             | all staged changes (exit out of command with Q)         |
| `git diff --cached`             | same as above                                           |
|                                 |                                                         |
| Changes between 1 specific file |                                                         |
| `git diff HEAD <filename>`      | list staged and unstaged differences b/t specific files |
| `git diff --staged <filename>`  | list staged differences b/t specific files              |



#### Working tree Clean

1. Compare branches (the tips of them)
   Lists changes between the tips of branch1 and branch2

```
git diff <branch1>..<branch2>		the order matters!
```

2. Compare 2 commits

```
git diff <commit1_hash>..<commit2_hash>			the order matters!
```

WHY ORDER MATTERS:

- Entering `git diff hash1..hash2` and `git diff hash2..hash1` will get you different results. 
- They will be inverses of each other since the difference will be delivered to you as if you were moving from the first typed commit to the next



### Reading Diffs (Slides 5-17)

When you use git diff, you'll get a pretty convoluted output given to you through your console. 
Certain parts are confusing to understand at first

#### How the Output Looks

<<<  SLIDES 5-7:   `git diff` output for a simple repo  >>>

We're comparing some work we've done that we haven't committed or staged just yet

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210614012846835.png" alt="image-20210614012846835" style="zoom:50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210614012910431.png" alt="image-20210614012910431" style="zoom: 70%;" />

#### Each Part of the Output in Detail

<<<  SLIDES 8-14  >>>

![image-20210614034055309](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210614034055309.png)

![image-20210614034133262](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210614034133262.png)

![image-20210614034209689](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210614034209689.png)

MARKERS:

![image-20210614034839058](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210614034839058.png)

If a file did not exist before, you'll receive a marker like this: ![image-20210614034952027](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210614034952027.png)

CHUNK HEADER:

![image-20210614015126685](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210614015126685.png) <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210614015146593.png" alt="image-20210614015146593" style="zoom: 50%;" />

CHANGES:

![image-20210614034320586](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210614034320586.png)

COMPARED FILES
Comparing old/new versions of a certain file (A/B pairs)
You'll get several sets of A/B pairs per output if git diff notices you've changed multiple docs

————————————————————【 TEXT COLORS 】————————————————————————

Be aware that the colors for files A and B may not always be the same. 

`-red`  ->	REMOVED
Came from file A, is no longer in file B

`+green` ->	ADDED
Now exists in file B, but did not in A

`black` -> UNCHANGED LINES INSIDE CHUNK (context)
Shown to provide some context- and will not include all the code that was left untouched
Ex. If you change 1 line in a 1000 line long doc, the output won't show you all 1000 lines

### Visualizing Diffs with GitKraken

When working on larger projects with tons of files, relying on the terminal's purely text output can be insufficient. For that reason, GUI's and even VS Code are excellent tools to compare changes

#### Working Tree Part of the UI

UNCLEAN WORKING TREE:
The staged an unstaged files can be seen in the R.S menu 

![image-20210614175323712](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210614175323712.png)

CLEAN WORKING TREE:
Left click a commit in the tree diagram to view the modified files in the R.S menu
Those files are what changed moving from the commit you selected to the one that preceded it

![image-20210614180938807](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210614180938807.png)

VIEWING FILE DIFFERENCES
Regardless of your tree, clicking a file in the R.S menu opens up a new window where you can compare your file differences with more intuitive features than the terminal could ever hope to have

#### File Changes Part of the UI

You have a few different modes to help you notice what's changed while "Diff View" is selected
Check the button names near the blue one I have preselected

![image-20210614182403230](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210614182403230.png)

SPLIT VIEW: 
Shows new/old file's code side by side

![image-20210614181630300](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210614181630300.png)

HUNK VIEW: (exact same as solo-terminal)
Shows chunks of code with context and headers, plus what was removed/added highlighted

INLINE VIEW: 
Hunk view, but shows the entire document instead of a tiny bit of context
Can jump from change to change quickly with arrow buttons

![image-20210614181659580](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210614181659580.png)

#### Selecting what to Compare

Comparing Differences between 2 commits:

- Left click a commit on the tree diagram -> CTRL left click another commit 
- The R.S menu will present all the files that are different
  Click them to enter the files changes UI

![image-20210614190452419](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210614190452419.png) ![image-20210614190522356](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210614190522356.png)

Comparing Differences between 3+ Commits

- Left click a commit on the tree diagram -> SHIFT left click another commit
- This one works a bit differently, as it will compare `replace John Deacon` to the project's state BEFORE  the `add early 1970s` commit 
- For this reason, the results from comparing 2 commits to 3+ are actually different

![image-20210614191827334](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210614191827334.png)

FAIR WARNING- I only tested my theory on 3+ once (explanation may be slightly inaccurate)

#### VS Code for Staged/Unstaged File Differences

- If you click on the source control tab, you can view all staged/unstaged changes for a specific file
- VSC has its own version of split view for you to use

"Changes" === unstaged changes 	&& 	"Staged changes" === staged changes

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210614155547211.png" alt="image-20210614155547211" style="zoom:80%;" />

![image-20210614154637847](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210614154637847.png)



# git stash

### Purpose of git stash

#### The Problem it Solves

What happens if we try to switch branches, but have uncommitted work saved in our project?

Scenario 1: Conflicts present

![image-20210614235047748](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210614235047748.png)

Scenario 2:  No conflicts
Your changes come with you to the destination branch (also annoying)

What people tend to do is save their progress by committing whatever work they have done, even if it's a bit premature

- Although it's not the end of the world, commits are considered to be the history of your project
  You shouldn't make commits when you're tinkering or have made next to no progress
- Avoid unnecessary commits by stashing away our uncommitted changes- return to them later on

#### Common IRL Scenario

You've worked on a certain branch of your project for a couple hours, but have not committed anything because you haven't finished on anything important enough to warrant one

- Your colleague asks you to check out their branch and see if everything's been done correctly
- You need to stash your changes, or commit your incomplete work

#### Auto-Stashing in GitKraken

- If you have uncommitted work and switch to a new branch, GitKraken will actually allow you to do that as long as you don't have any conflicts
- It will stash your uncommitted changes automatically, so you can pop/apply them later on 

### One Stash

#### Put changes in stash:

```
git stash		
stashes all uncommitted changes (staged & unstaged), but not the untracked files
reverts all changes on the branch you're working on- until you apply/pop them

git stash save		(same as above)

git stash -u
same as git stash, but includes any untracked files 
```

![image-20210615021532499](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210615021532499.png)

#### Apply what's in the stash:

```
git stash pop
applies stashed changes to the current branch you're on
removes the same changes from the stash

git stash apply
applies whatever is stashed away, without removing it from the stash
```

Git will assume you want to apply the most recent stash- which is a non factor when you have 1, but becomes important when you have multiple

- With `git stash pop`, you can stash away changes and apply them to the same branch the changes originated, or even a different one entirely
- The `git stash apply` command is useful for when you want to apply stashed changes to multiple branches

#### In GitKraken

Stash and pop are extremely easy commands when using this GUI- just remember to pop things in the correct branch, when its time

![image-20210615022112127](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210615022112127.png)

- Once you have a stash ready, right click it to select what you'd like to do (apply, delete...etc)
  Pop is so popular that it has its own dedicated button in the UI
- BEWARE, delete stash empties out the entire stash stack, even if there's multiple

![image-20210615024750943](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210615024750943.png)

#### Fixing git pop in the Wrong Location

For whatever reason, you might use git pop on the wrong branch
This will likely result in conflicts with an error message- and the "undo" button won't work

![image-20210615023026106](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210615023026106.png)

![image-20210615023452793](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210615023452793.png) ![image-20210615023841549](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210615023841549.png)

1. Hit "Mark all resolved", which should make the UI look like the second image
2. Discard all changes
   GitKraken doesn't empty out your stash if you try popping and conflicts emerge
3. Your work tree should go back to the way it was before the sloppy git pop attempt
   Your stash is still intact, so you can `git pop` again, in a better location

SIMILARITY TO BRANCH MERGING:

- Applying stash changes works about the same as merging branches, and they need to be fixed manually the same way 
- For this subsection however, I focused on explaining how to undo the changes you make to the working tree when you popped in the wrong place, and have no intention of making the code mesh properly

### Multiple Stashes

Our "stash" is actually a stack of individual stashes

- We can add multiple stashes to the stack without removing/deleting any of them
- They're stashed in the order you add them

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210615031431107.png" alt="image-20210615031431107" style="zoom: 67%;" /> ![image-20210615040750153](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210615040750153.png)

THIS IS NOT NEEDED OFTEN:

- You could easily pop a stash, add more changes to it, then re-add it as a singular stash instead of multiple. 
- In other words, you could turn the above image's 3 stashes into 1 quite easily, as long as you're working on the same branch

#### Viewing the Stash List

```
git stash list
```

> "Work in progress on branch-name", then it gives the most recent commit we were working on when the stash was created
>
> ![image-20210615031902900](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210615031902900.png)

If we use `git stash pop`, it'll pop the last/latest stash in the list- that would be stash@{2}

#### Applying Specific Stashes

Git automatically assumes that you want to apply the most recent stash when you run `git stash apply`, but you can also specify a particular stash if you'd like

```
git stash apply stash@{2}
```



### Clearing Out the Stash

You may end up wanting to remove changes you put in the stash, instead of re-implementing them in your project via `git stash pop`

```
git stash clear				removes all stashes in the stack
git stash drop stash@{n}	removes the nth stash (feed it a specific stash #)
```



# S1: Time Travelling to Old Commits

### Definitions

BRANCH REFERENCE:	(I call them branch tips)
The latest commit on a specific branch

OLD COMMIT:
A commit that is not the latest one on its respective branch

DETACHED HEAD:
The state we're in when we checkout an old commit

WIP DIRECTORY:
The area in GitKraken where you see all the staged and unstaged file changes
All these changes are active when you look through your files, but you can stash them to stop that



### COMPARE: All Main Operations in this Chapter

#### Purpose of Each

|                                                 | what it does                                                 |
| ----------------------------------------------- | ------------------------------------------------------------ |
| discard changes                                 | empties out the WIP directory, clearing all staged/unstaged file changes |
| Rollback a File to its state in an Older Commit | changes the file you specify to how it was in an older commit. Won't undo anything in the tree , it just edits your files to be how they were |
| undo commit                                     | erases commits, and keeps the file changes in the WIP or deletes them semi-permanently |
| revert commit                                   | creates a new commit where all the changes you specify are undone there |

#### Use Cases

DISCARD CHANGES ->
When you want to change your files back to how they were in your branch's most recent commit

ROLLBACK A FILE TO ITS STATE IN AN OLDER COMMIT ->
Self explanatory

REVERT COMMIT -> 
Use when you need to reverse commit changes, BUT the commits have been shared with other people

UNDO COMMIT ->
Use when you want to reverse commits that you have not shared with others



### Checking out old Commits

METHOD 1: Hash
Find the hash number with `git log`

```
git checkout <commit-hash>		go to a previous commit not on branch tip
git status						
```

METHOD 2: Relative to current HEAD
Instead of using specific git hashes, you can reference commits relative to where the HEAD is now

```
** move your HEAD to a certain commit **
git checkout HEAD~1			visit the commit right before HEAD (parent)
git checkout HEAD~2			visit the commit 2 before HEAD (grandparent)
```

#### Detached HEAD will Follow

- When checking out an older commit, you may encounter a message telling you that you've entered a detached HEAD state, if you run `git status`while there

- It's not a bad thing, or an overly complicated concept once you understand the way HEAD works

  <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210615050919284.png" alt="image-20210615050919284" style="zoom: 67%;" />	 ![image-20210615150021153](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210615150021153.png)

### git checkout and Detached Head States

UNLESS OTHERWISE STATED

- Assume any action I make when using Git takes place on a branch tip/reference
- Most actions have the potential to incorrectly tweak a working tree if done on an older commit, which puts you in a detached HEAD state

#### Detached HEAD States

HOW HEAD WORKS:

- HEAD usually points to a specific branch reference, not a commit
  A branch reference is simply just the latest commit made on the specific branch
- When we make a new commit on the branch, the aforementioned branch reference is updated
  This means that the HEAD will now point to this new commit
- If we switch branches, the HEAD moves to the destination branch's latest commit, not an older one

TLDR: 
The HEAD typically points at the latest commit on the branch you're on
So, what happens when we checkout a commit that isn't the newest on its branch? Detached HEAD

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210615051727552.png" alt="image-20210615051727552" style="zoom: 60%;" />

#### Dealing with Detached HEAD

Option 1: 
Stay in your detached head state and look around 
View the old commit's files, but don't change them

Option 2: 
Switch back to the final commit in a branch

Option 3: 
Time travel. AKA. branch off an older commit

BRANCHING OFF OLD COMMITS:

- Receiving the detached HEAD message means that you know you're checking out an old commit Don't mess around with it if you want to keep your branch intact
- Instead, you can branch off from that exact commit, and do whatever you want on it
  This is how you time travel using Git without altering your future unintentionally

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210615052501398.png" alt="image-20210615052501398" style="zoom:50%;" />

# S2: Undoing Changes with Reset/Revert

### Discarding Changes

REMEMBER: These techniques only work if you're currently working on a branch tip, and have uncommitted changes

#### Why Bother Discarding Changes?

Imagine you spend 30 minutes messing around on a project, only to decide that non of the work you did is useful. You haven't committed anything during that time either

- You've already tweaked your code a lot, and don't know what you've altered. 
- Git lets us revert our files back to how they were after the last commit

WARNING: 
This action is irreversible, no matter which method you use. 
Any uncommitted changes will be lost forever

#### How to Discard Changes

IN OTHER WORDS, WE ARE...
Rolling back a certain file back to its state in the latest commit on your branch

WITH TERMINAL:

```
** move HEAD to the branch tip/reference you're working on **
CHOOSE 1/3:
git restore <file-path>
git checkout -- <file-path>
git checkout HEAD <file-path>
```

You can use this on 2+ files at once, just separate each file name with a  space

WITH GITKRAKEN:	  ![image-20210615154544172](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210615154544172.png)

### Rollback a File to its state in an Older Commit

GOAL: 
Change the state of a file back to how it was in a particular commit- an older one
This works on most recent commits as well, but there's no point in using this method over the other

Revert to... A commit we specify with a git hash

```
** move to branch tip/reference **
git restore --source <commit-hash> <file-path>
```

Revert to... A commit relative to where the head is now:

```
** move to branch tip/reference **
git restore --source <HEAD~#> <file-path>
```



### Undoing Commits (Avoid when on a team)

Undoing commits is one method for fixing common commit mistakes
WOULD NOT recommend this when working on a team though- use git revert instead

- Maybe you made a series of commits on the master branch when you should have made them on another branch entirely
- With git reset, you can reset the repo back to a specific commit, and stash all your file changes so you can apply them elsewhere

#### GitKraken Reset Types

![image-20210615184504805](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210615184504805.png)

DEFINITIONS:

|       | File Changes                                                 | Use Cases                                                    |
| ----- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Hard  | Deleted (however, you can press undo in the GUI to retrieve) | Want to go reset back to a certain commit, and never wish to see those file changes again |
| Soft  | Staged (in WIP directory)                                    | Want to go reset back to a certain commit, but keep the file changes intact for another branch |
| Mixed | Unstaged (in WIP directory)                                  | same as soft's reasoning                                     |

The WIP directory is just the RS menu where you've staged and unstaged your files all the time



#### Regular Reset in Terminal

Regular reset in the terminal === GitKraken soft reset

```
git reset <commit-hash>		
undoes commits, and places changes in unstaged list inside WIP directory
——————————————————————————————————————————————————————
remember that staged/unstaged changes are still active in your project files
stash them if you want to save them for later
```



#### Hard Reset in Terminal

Hard reset in terminal === GitKraken hard reset

```
RESET TO A SPECIFIC COMMIT:
git reset --hard <commit-hash>

RESET RELATIVE TO THE HEAD LOCATION NOW
git reset --hard <HEAD~#>
```



### Reverting Commits- the Undo Alternative

Reverting a commit is similar to undoing one- but it has a useful twist

- You bring your project back to its state in an older commit, BUT instead of deleting commits from your working tree, you create a new one
- This quality is great for when other people have access to the same commits as you

#### PROCEDURE:

```
git revert <commit-hash>		
reverse changes up to the commit specified, & creates a new commit in your branch
```

There may be some merging errors for you to resolve
Open up VS Code and choose what you want to keep in the files affected

#### Why this matters

UNDO (bad when on a team)
Undoing commits while they work on their end (possibly branched off from them) will cause confusion

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210615194910450.png" alt="image-20210615194910450" style="zoom: 60%;" />

REVERT (good when on a team)
Instead, reverting commits lets us reverse the EFFECTS of the previous commits
It does so by creating a new commit instead of deleting existing ones

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210615195104992.png" alt="image-20210615195104992" style="zoom:60%;" />



# Rebasing in Git

- Rebasing is another way to integrate changes made on feature branches onto our master
- We RE-assign the BASE of our feature branch to the tip of the master branch

### Rebasing as a Cleanup Tool: Rewrite History (didn't do successfully yet)

SYNTAX:

```
git switch feature			move HEAD to feature branch tip
git rebase master
```

JUST REMEMBER:
The branch you switch to first is the one that gets replaced
You aren't changing history on Master in this example, you're changing Feature's

#### Explanation

I'm replacing 12 images with 1 here- it's better to read the aforementioned slides 
[SLIDES 5-16: Visualizing a rebase](https://www.canva.com/design/DAEVkyNcwWI/qt8pRN3JA1lP9ckYeImxeQ/view?utm_content=DAEVkyNcwWI&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621193029756.png" alt="image-20210621193029756" style="zoom:64%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210622001504714.png" alt="image-20210622001504714" style="zoom:63%;" />
>
> FEATURE BRANCH
> 2 commits -> first branch merge -> 1 commit -> second branch merge (none are FF merges)
>
> MASTER BRANCH
> The master has 4 commits of its own, and gets merged into twice

Upper Half:
I'm working on a collaborative project with other people- focusing on my teal colored feature branch

- After part 1 of my feature is ready after 2 commits, I perform a branch merge onto master
- I then continue working on part 2 of that feature- while still on the feature branch
- Once part 2 is finished after 1 more commit, I merge my feature branch into master again

Bottom Half
Everything works fine, but the project history's a tad messy

- I'll rewrite history by making my entire progression on the feature branch a part of the master branch- specifically placing its commits at the very tip
- The rebase removes the old merges, and instead creates new commits for each of the original feature branch commits

WHY WE MERGE BEFORE A FEATURE'S COMPLETELY BUILT
We did not want to fall too far behind the main project before continuing with the work on our branch"
Unsure if we'd have permission to do that in a realistic setting (probably not, I'd imagine)

#### GitKraken Diagram

![image-20210622015836238](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210622015836238.png)

return2: I COULDN'T MAKE THIS WORK YET

- The rebase was labelled a success by the terminal and GitKraken, but the tree visual did not change
- I couldn't get the diagram in GitKraken to go linear by rebasing. It worked when using rebase as an alternate for merge, but rewriting history didn't seem to work. 

### Rebasing as a Merge Alternative: Create Cleaner History 

SYNTAX

```
git switch feature			move HEAD to feature branch tip
git rebase master
```

JUST REMEMBER:

1. The branch you switch to first is the one that gets replaced
   You aren't changing history on Master in this example, you're changing Feature's
2. The branch you rebase will have its commits tacked on the end of the master branch (if that's what the new base is) - which sets things up perfectly for a FF commit
3. Hash numbers of the rebased branch will change

#### Explanation

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621195055598.png" alt="image-20210621195055598" style="zoom:67%;" />

- We can also wait until we are finished building a feature then rebase its branch onto master
- There is no rewriting history here- we just create a cleaner future than a git merge would give us
- With this approach, our history becomes linear
  Plus, we remove most of the commits that have 2 parents 

The feature branch commit hashes will all change after our rebase



### When NOT to Rebase

Golden Rule: NEVER rebase commits that have been shared with others

If you've pushed commits up to Github as a side branch, DON'T REBASE OR INTERACTIVE REBASE

- That is, unless you're 1000% sure no one on the team has pulled your feature branch down and is using those commits
- You do not want to rewrite any git history that other people already have. 
  It's a huge pain to reconcile the alternate histories!



### Rebase Conflicts

1 of 2 things can happen if you encounter a conflict

- You get a partial rebase, or every commit on your feature branch fails to rebase
- Either way, your approach to fix the conflict doesn't change

#### Partial Rebases

- If you attempt to rebase a branch but run into a conflict, it may result what is called a PARTIAL REBASE
- That's when only some of the feature branch commits are rebased to the master tip, but the first one to have conflicts isn't- and neither are the commits that follow

You'll get an error message in terminal giving you a few options for how to approach this (next section)

#### Options vs Rebase Conflicts

ABANDON REBASE:

```
git rebase --abort		abandon the rebase operation
```

MANUALLY FIX CONFLICT

```
** Enter VSC or GitKraken and resolve the conflict **
** add/stage your file changes, but DO NOT COMMIT **
——————————————————————————————————————————————————————
git status
** if the ouput message says "all conflicts fixed" , then continue on **
git rebase --continue
```



# Cleaning up History with rebase -i

With interactive rebasing, we can...

> edit commits		drop commits			delete commits
> reorder things		squash commits

### Interactive Rebasing Explained

We'll be rebasing a branch onto where it currently is, with some adjustments that make history look cleaner than it was initially

#### Terminal Procedure

Every interactive rebase operation uses the same terminal command, but you'll be using the text editor slightly differently each time

Open up the Interactive Editor:

```
** switch to branch you're rebasing **
git rebase -i HEAD~4		rebase 4 commits back for example
** VS Code will open up **
```

Once VS Code opens, you'll see a list of past commits with the "pick" keyword on their lefts

- If you typed HEAD~4, it'll give you a list of the last 4 commits
  The newest commits are on the bottom while the oldest are up top (opposite of git log)
- You can change the keyword to one of the following options:

![image-20210622134356228](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210622134356228.png)



#### Rules & Use Cases

The rules for rebasing still apply- the main gist is that you want to avoid rewriting history when other people have the commits you're affecting

MAIN USE-CASE: Fix history on a local branch before you show it to anyone

> When you're working on a local branch no one's pulled down...
>
> - You might have some half baked or incomplete commits that make your history look more complex than it should be
> - Before you share that code with anyone, you can tidy it up with an interactive rebase operation

Just remember that all hash numbers for that branch will change, even if you only rebase 1 commit



### PART 1: Challenge Description

Do this example again: https://github.com/Colt/interactive-rebase-demo

Take a look at the following tree:

![image-20210622132530956](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210622132530956.png) ![image-20210622133003288](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210622133003288.png)

DESIRED CHANGES
` + `  :		Combine this set of commits into one
`-`  :		Drop that commit entirely
`re`:		Reword that commit so it uses present tense imperative

#### Understand...

INTERACTIVE REBASE SYNTAX:

```
** switch to branch you're rebasing **
git rebase -i HEAD~4		rebase 4 commits back for example
** VS Code will open up **
```

`HEAD~#` (it includes the commit its on)
If you use HEAD~1, you'll rebase the latest commit 3b23c17 and that's it
If you use HEAD~9, you'll rebase up to and including cbee26b

#### Undoing Rebases

You can't undo rebases by clicking the undo button in GitKraken
Instead, hard reset a branch back to a certain commit

EXAMPLE: After Part 2's actions, we can go back to our starting state by selecting this

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210622154427480.png" alt="image-20210622154427480" style="zoom:80%;" />

### PART 2: Change Commit Messages

BEFORE AND AFTER:

 ![image-20210622132530956](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210622132530956.png) <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210622154348325.png" alt="image-20210622154348325" style="zoom:80%;" />

#### GitKraken

Right click a commit > Edit Commit Message

#### Terminal

```
** switch to branch you're rebasing **
git rebase -i HEAD~9
** VS Code will open up **
```

Find the commit whose message you want changed
Replace "pick" with "reword"		  >>>		Save and close VSC
A new session opens						>>>		Change the commit message there 
Save and close one last time

Change keyword to reword: ![image-20210622152518784](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210622152518784.png)

Change MSG here: ![image-20210622152824907](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210622152824907.png)



### PART 3: Squashing Commits to Group Multiple into One

BEFORE AND AFTER:

![image-20210622161004992](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210622161004992.png) ![image-20210622165504850](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210622165504850.png)

#### GitKraken 

CTRL left click all commits you want to combine -> right click highlighted area -> "Squash X commits"
It will keep the name of the oldest commit (which you can change easily)

![image-20210622173351171](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210622173351171.png)

#### Terminal

Best keyword for this scenario:
fixup - combines a commit with the next oldest one + keeps the oldest one's name as well

Step 1. Open interactive editor

```
** switch to branch you're rebasing **
git rebase -i HEAD~9
** VS Code will open up **
```

Step 2. Squash group of 2 commits

![image-20210622163901260](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210622163901260.png)

Step 3. Repeat steps 1-2 to squash the next group of 3 commits

![image-20210622165425268](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210622165425268.png)



### PART 4: Drop Commits

Dropping a Commit: Remove the commit you've chosen, plus all of its changes

BEFORE AND AFTER: (removed "my cat made this commit", but forgot to highlight)

![image-20210622165504850](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210622165504850.png) ![image-20210622171850218](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210622171850218.png)

#### GitKraken

Right click a commit -> Drop Commit

#### Terminal

Step 1. Open interactive editor

```
** switch to branch you're rebasing **
git rebase -i HEAD~6
** VS Code will open up **
```

Step 2. Replace "pick" with "drop" on any commits you want eliminated

![image-20210622171733322](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210622171733322.png)



# Git Tags

Tags are typically used to mark different versions or releases of a project over time

### What are they for?

Git tags are pointers that refer to a specific commit in our git history, and will never move
They have 2 types which we'll learn about in a later lesson: lightweight and annotated

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210622211650989.png" alt="image-20210622211650989" style="zoom: 50%;" />

- These tags will never move to a different commit, unless we deliberately perform that action 
- They're typically used to mark version releases of our projects

### Semantic Versioning

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210526135041787.png" alt="image-20210526135041787" style="zoom: 80%;" />

Patch releases:

- Typically don't contain ne features or significant changes
- They typically signify bug fixes and other changes that don't affect how the code is used

Minor Releases:

- Signify that optional new features or functionalities have been added, but the project remains backwards compatible
- No breaking changes or code re-writing

Major Release

- Significant changes that are no longer backwards compatible
- Features may be removed or changed substantially

### Creating Lightweight/Annotated Tags 

#### Create Tags in Terminal

Lightweight Tags:
They're just a name with a label that points to a certain commit

```
** move to the commit you want your tag on **
git tag <tagname>				creates a lightweight tag
```



Annotated Tags:
These store extra metadata like the author's name, email, date, and a tagging message 
(which is similar to a commit message)

```
** move to the commit you want your tag on **
git tag -a <tagname>
** VSCode will open and ask you for information **

—————————————————————————[ OR ]—————————————————————————————

git tag -a -m <tagname>			
skips the VSC part & lets you pass a message directly
```

Display an annotated tag's metadata:

```
git show <annotated-tagname>			shows all the metadata in the console
```



#### Tagging Commits where HEAD is not

- The previous code snippets require you to have HEAD located at the exact commit you want your tag to be placed on (pretty easy to do)
- You can apply tags with a commit's hash number instead if you want

```
git tag <tagname> <commit-hash#>			lightweight

git tag -a <tagname> <commit-hash#>			annotated
```



#### Create Tags in GitKraken

> Right click a commit -> select your tag option
> Create tag here (lightweight)
> Create annotated tag here (self explanatory)

![image-20210622234258371](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210622234258371.png) ![image-20210622234856880](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210622234856880.png)

You can see the tags on the left side of your working tree visual
I don't see an immediate difference between lightweight and annotated tags however



### Other Relevant Commands

BASICS:

```
git checkout <tag>				Visit the commit with a specific tag on them
git tag -d <tagname>			Delete a tag
```

Remember, when you visit an old commit, you'll be put in a detached HEAD state

#### Pushing Tags up to Github

Tags are not included by default when you push- so we'll have to get them to our remote repos manually with a dedicated command

```
git push --tags				pushes all tags to GH (needed b/c git push won't)
OR
git push origin <tagname>	push a specific tag up to the remote repo
```



#### Finding Old Tags

Print List of all tags in the current repo:

```
git tag
```

Print List of all tags that match a pattern:

```
git tag -l "*beta*"	
all tags that have "beta" in their names will appear on the list
——————————————————————————————————————————————————————
WHY WE HAVE * (signifies other letters)
*beta  = search for words that END in "beta"
beta*  = search for words that start with "beta"
*beta* = search for words that include "beta" somewhere
```

Show metadata for a certain annotated tag

```
git show <annotated-tagname>			shows all the metadata in the console
```



#### Moving Tag Names

- Git will yell at us if we try to reuse a tag name that's already referring to a commit, but we can use `-f` to force our name through
- This is used to place an existing tag name somewhere else (rarely ever done)

```
git tag -f <tagname>
```



#### Comparing Versions 

Use the git diff command with 2 tag names to check the difference between 2 versions
You'll probably want to do this in GitKraken for the better visual comparison though

```
git diff <tagname-1> <tagname-2>
```



# Retrieve Lost Work with Git Reflogs

This is how you undo things that seem undoable in Git

### Intro to Reflogs

Reference logs are the records Git will make when branch references are updated in a repo
It stores all these changes in a file for up to 90 days (or longer if you edit the config file)

- Any time a reference branch gets changed, Git remembers for a while
- We can view and update these logs with the git reflog command

> 3 branch references here: Main, Feature, HEAD
>
> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210623123003101.png" alt="image-20210623123003101" style="zoom: 50%;" />

Scenarios where branch references change:

- We create a new commit on a branch
- We switch branches (even to a remote one)
- Create a new branch
- After a rebase

SLIDES 3-6: [Reflog visualized ](https://www.canva.com/design/DAEWorNx5_Q/piCbRO6BWwv9_ae_mahECA/view?utm_content=DAEWorNx5_Q&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)

#### Finding the Logs

Enter your repo folder > enter .git

```
** cd into your repo folder **
cd .git
start .				open file explorer in your .git folder
——————————————————————————————————————————————————————
** enter logs folder -> enter HEAD file **
** open up the HEAD file **
```

You'll find a long but readable document filled with information about your past actions affecting HEAD
Most recent actions on the bottom, oldest ones at the top

STRUCTURE:

```
<parent-hash#> <commit-hash#> <UNIX-timestamp> ~idk~ 
<author-username> <action-descrip>
```

#### Why they're Useful

- If we make some mistake that's tough to undo, or need to access a commit that no longer appears in our git log list, reflogs can save us
- There are some commands you'll be using to interact with this file, and we'll learn about them later in this chapter

#### Limitations

1. Reflogs are strictly local 
   They only track your actions and are NOT shared with collaborators
2. They can expire as well
   Reflog references expire after 90 days, unless you edit that time limit in the config file

### Git Reflog Show Command

The git reflog command has 4 subcommands; show, expire, delete, and exists
Show is the only one that's used in most cases

Show the log of a specific reference pointer (any pointer you choose)

```
git reflog show HEAD		view logs for what happened to HEAD
——————————————————————————————————————————————————————
git reflog show main		view logs for tip of the main branch
```

This prints a list of actions to your terminal 

![image-20210623141337451](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210623141337451.png)

- The log for HEAD will likely be extremely long, since you'll see recordings for even minor actions like switching branches or checking out older commits
- Most recent actions up top, oldest at the bottom



### Relative Reflog Qualifiers

GIT REFS: Abbreviation for reflog references

#### Git Ref Qualifiers

Notice the `HEAD@{#}` before the action descriptions in the previous lesson's first photo
This refers to a specific entry in the HEAD reflog, and is called a QUALIFIER

- It changes based on what reference we're looking at logs for
- See the below image for what we get after entering `git reflog show master`:

![image-20210623141808446](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210623141808446.png)

STRUCTURE:

```
name@{qualifier}			git ref qualifier structure
```

Use it to discern which branch reference Git is talking about on that line
HEAD@{2} points to the HEAD two actions ago
master@{1} points to the master two actions

#### Checkout your Project in Past States with Reflogs

We can insert them into certain commands

MAKE FILES REFLECT PAST STATES:

```
git checkout master@{2}			checkout master's state 2 actions ago 
git checkout HEAD@{1}			checkout HEAD's state 1 action ago
```

Your repo files will change to reflect the state of what you're checking out- just like with branch switching

CHECK DIFFERENCE BETWEEN 2 STATES:

```
git diff HEAD@{0} HEAD@{4}		compare HEAD now to how it was 4 actions ago
```



#### The difference between HEAD@ and HEAD~

```
git checkout HEAD@{1}		
check HEAD's state 1 action ago (could even be a branch switch)
——————————————————————————————————————————————————————
git checkout HEAD~1			
check the parent commit (only takes you to past commits)
```



### Time-based Reflog Qualifiers (better)

Previous Lesson: 	  Git, show us our project state 3 actions ago
Current Lesson: 		Git, show us our project state yesterday, or 1 week ago...etc

- Every entry in the reference logs has a UNIX timestamp included- and we can filter entries based on time qualifiers

- Use them the exact same ways you would with the relative-to-now qualifiers from previous lessons

#### Writing Time Based Qualifiers

Use plurals or singular if you're asking to roll time back 1 day or something

> 2.minutes.ago
> 2.hours.ago
> 2.days.ago
> 2.week.ago
> 2.months.ago



LIST REFLOG ENTRIES WITHIN A TIME SPAN

```
git reflog master@{2.hours.ago}			
list all reflog entries for HEAD in the past 2 hours
```



MAKE FILES REFLECT PAST STATES:

```
git checkout main@{5.hours.ago}			checkout master's state 5 hours ago
git checkout feature@{2.days.ago}		checkout feature branch's state 1 day ago
```



CHECK DIFFERENCE BETWEEN 2 STATES:

```
git diff main@{0} main@{yesterday}			
compare main branch now to how it was yesterday
```



### Rescuing Lost Commits fr/ git reset

Typically when you perform a hard reset, commits get removed along with all their changes

SOLUTIONS:

1.  Use the undo button on GitKraken
2.  git reflogs

- The GitKraken strategy is much easier, but it's only viable for RIGHT AFTER you hard reset. 
- You shouldn't use it if the hard reset happened a long time ago. 
  You'd be regressing the project way too much

WHY REFLOGS CAN ACCESS LOST COMMITS

- When you hard reset to get rid of some commits, the commits you eliminated will no longer be connected to anything
- You won't see the commit on your working tree diagram in GitKraken, or on the git log list
- HOWEVER, they are still stored in the .git folder somewhere

#### Example

In this repo, we hard reset to our project state 2 commits ago 

> ![image-20210623172756714](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210623172756714.png) ![image-20210623172817106](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210623172817106.png)
>
> LOST: 2 commits
> ROLLED BACK TO: "describe kel" commit

OBJECTIVE: Bring the working tree state back to how it was in image 1

——————————————————————————————————————————————————————
Step 1. Take a look at the reflogs on the affected branch

```
git reflog show master
```

![image-20210623172554814](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210623172554814.png)

——————————————————————————————————————————————————————
Step 2. Soft reset to the commit you wish to return to

We want to bring our project back to how it was when "describe bud" was the last commit
Take that lost commit's hash from the terminal, and hard reset to that

ARE FREE TO USE TRIAL AND ERROR
See if your tree looks the way you expect it to
If it doesn't discard all changes and try another hash# for a rollback

```
git reset --soft 5e42f71				reset to "lost" commit
OR
git reset --soft master@{3} 			use relative qualifier as an alternative
```

——————————————————————————————————————————————————————
Step 3. Once you know which commit to rollback to, hard reset back to it

```
** discard all file changes in GitKraken from our soft reset **
git reset --hard c442fa6				reset to "lost" commit
OR
git reset --hard master@{3} 			use relative qualifier as an alternative
```

We're back!	 ![image-20210623172756714](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210623172756714.png)

#### Checkout a Lost Commit with Reflog

If you only want to see the project files' state when a lost commit is active, use a different command 

```
git checkout c442fa6
```



### Undo a Rebase with Reflog

Typically, we can't use our handy GitKraken undo button to reverse a rebase- but reflogs let you
The process is essentially the same as the previous lesson (rescuing lost commits from git resets)

#### EXAMPLE 1: Undo a Rebase that acts like a branch merge

> Rebased the "al" branch onto the "master" branch
>
> ![image-20210623193053654](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210623193053654.png)		![image-20210623193150729](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210623193150729.png)

OBJECTIVE: Bring the working tree state back to how it was in image 1

——————————————————————————————————————————————————————
Step 1. Look through your past actions by reflogging HEAD

```
git reflog show HEAD		view logs for what happened to HEAD
```

>  Ignore the blue star i made (it's one of my initial incorrect guesses)![image-20210623194132362](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210623194132362.png)
>
>  Let's rollback to..... the commit that's RIGHT before our rebase 
>  (430a237 which is right under dafaf88)

——————————————————————————————————————————————————————
STEP 2. Use soft resets to trial and error your way into a correct choice

```
git reset --soft dafaf88	(guessed wrong at first)
git reset --hard 430a237	looks good!
```

——————————————————————————————————————————————————————
STEP 3. Reset your project back to its state in the commit you've chosen

```
** discard all file changes in GitKraken from our soft reset **
git reset --hard 430a237		reset back to the commit BEFORE the rebase
```

Boom! Rebase undone ![image-20210623200630109](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210623200630109.png)



#### EXAMPLE 2: Recover Lost commits after they're squashed via interactive rebase

(Process is the exact same as last lesson's example and this lesson's first)

> Combined "describe bud" and "add bud" together into a single commit called "all bud actions"
>
> ![image-20210623192134286](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210623192134286.png)		 ![image-20210623192257844](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210623192257844.png)

.... you get the idea .... plus if it happened recently you can just hit "undo" in GitKraken



# Writing Custom Git Aliases

A git alias is a custom shortcut you can type instead of the default commands

PRE-REQ: LEVELS OF CONFIGURATION

|                                                 | affects                                                      |
| ----------------------------------------------- | ------------------------------------------------------------ |
| local config file                               | a specific repo                                              |
| global config file                              | all repos                                                    |
| system wide config file<br />(rarely ever used) | all repos for multiple users<br />if you have 2+ people doing dev work at 1 station |



### The Local Config File 

What's in .git ?
A lot of things are, but we're primarily interested in the config file today

![image-20210623011818812](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210623011818812.png)

#### Entering .git

```
** cd into your repo folder **
cd .git
start .
```

#### What it Affects

The config file is inside the .git folder which exists in all repositories. 

- Use it to configure certain aspects of the repo it's a part of- that's it
- You can configure settings that affect all repos in the global config file (different file/location)

#### What can you Configure?

You've already configured a few values in this file directly in the command line before
EX. Setting user name and email 

- The list of things you can configure in this file is extensive: [read the docs if you want](https://git-scm.com/docs/git-config)
  The docs for configuration are ridiculously long however
- If you wish to change an aspect of how Git works for you (ex. text color in terminal), then google it directly

### The Global Config File

The contents of this file affect all repos on your machine- unless you login as someone else I believe

#### Finding it

- If you've set your username and user email with a specific command, you've already interacted with the global config file before
- You can interact with this file via commands only, but it's much easier to look at all its contents

View global git config file:

```
cat ~/.gitconfig			prints file on your terminal screen
```

Open it in vs Code then edit:

```
cd ~			go to your home directory
start .			open up home directory folder
** open VS Code **
** find/drag gitconfig into your VSC file list so you can edit it there **
```

![image-20210624011555179](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210624011555179.png)



### Writing Aliases

Once you're inside the global config file, we can begin writing aliases

WHAT CAN WE WRITE ALIASES FOR?

- Typically people replace the terms that come after git	`git ___`
- You can write custom flags as well, but it gets overly complicated at some point
  Flags are usually short by default anyway

#### Direct Editing vs Terminal Commands

We can change global configurations directly in our file here- if you abide by the syntax rules
Compare the commands to set up our user name and email to the global config file 

> ![image-20210624012103092](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210624012103092.png)
>
> git config --global user.name "whatever my Github email is"
> git config --global user.email "Jason2B3"

In the command line we use dots
In the config file, we use...

```
[alias]
	shortcut = value
```



#### Option 1: Directly in Global Config

Step 1. Open the git global config file

```
cd ~			go to your home directory
start .			open up home directory folder
** open VS Code **
** find/drag gitconfig into your VSC file list so you can edit it there **
```

Step 2. Edit the file

```
[alias]
	stat = status		
```

Now, `git status` and `git stat` accomplish the same thing!

——————————————————————————————————————————————————————
EXAMPLE OF A BAD ALIAS:

There's a rule in place that assumes "git" precedes whatever shortcut we provide as our alias keyword

 ![image-20210624014649713](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210624014649713.png)

We write `cd ~/Desktop` outright, but we never write `git cd ~/Desktop`
I'd suggest using Autohotkey for these instead



#### Option 2: Use Command Line

```
SYNTAX:
git config --global alias.<custom-word> "<default-command>"
```

EXAMPLE: Instead of ...

```
[alias]
	stat = status
```

Just enter this in the command line:

```
git config --global alias.stat "status"
```



### Aliases that Work with Arguments

Oftentimes in git, we'll have commands that require an argument to be passed in afterwards

- Git aliases accept arguments just like normal commands do
- They work as we expect regular commands do
  (That's it, lesson over. Lol)

#### Demonstration

OBJECTIVE: Make an alias for "git commit -m"

```
git commit -m "insert commit-msg here"
```

SOLUTION

```
git config --global alias.cm "commit -m" 

————————————————【 same as this in the config file 】—————————————————————

[alias]
	cm = commit -m
```

TESTING IT OUT 

```
git cm "insert commit-msg here"				success!
```



### Pre-made Aliases Online

People LOVE talking about their micro-optimizations on blog posts and Reddit. 

Recommended:

Watch first for some demos: https://www.udemy.com/course/git-and-github-bootcamp/learn/lecture/25091400#overview

1. https://gist.github.com/mwhite/6887990
2. https://www.durdn.com/blog/2012/11/22/must-have-git-aliases-advanced-examples/
3. https://github.com/GitAlias/gitalias#shortcut-examples

When you decide it's time, read some of these and come up with your own for your most used commands. Have fun!

#### Upgrades

- There are some aliases people make that would be extremely long to type out normally, and provide extra functionality
- You can even perform actions not programmed into Git using shell scripts

EXAMPLE:

![image-20210624021603738](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210624021603738.png)

Those commands will recolor and reformat git logs to be more visually pleasing
We'd never remember this under normal circumstances

#### Overreliance Warning

It's very easy to use git aliases as a crutch, making your muscle memory for standard git commands weaker over time

- This becomes an issue when using other people's machine
  You'll be typing out commands that don't exist
- Especially problematic when teaching others or doing code tests on company PC's



# ==========   GITHUB   ==========

# Remotes, Cloning, Pushing

### How GitHub Works

GitHub is a hosting platform for storing Git repositories in the cloud

HOW COLLABORATION ON GITHUB WORKS:

- You upload your own repos to the platform so that you or others can access them on other machines

- You can download and clone other people's repos as well, and put in work on them

LIMITATIONS

1. You cannot take over a project and push whatever you want from day 1 

- There's a process for suggesting changes then maybe eventually becoming a contributor
- If you become one, you can upload your changes to GH and then others can continue on from what you've done

2. Cannot take someone else's work from a repo they own, tweak it, then sell it as if you made it



### Cloning GH Repositories

To clone a repository is to download someone else's git repo to your machine, usually so that you can work on what's already been done

- You will gain full access to the projects past commits and history
- As long as the repo is public, anyone can download a project as long as they have a link
- You can clone repos hosted on alternative hosting sites as well
  This command works with any one of them... like GitLab, Bitbucket, Gerrit... etc

PROCEDURE

1. Find a repository on GH, then get the clone URL
2. Use the git clone command
   A new folder containing the project will be created in the directory you're currently in

```
git clone <url>			!! make sure you are not inside a repo when you clone !!
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210616041229281.png" alt="image-20210616041229281"  />

#### WARNING: Not everything gets Copied at First

WARNING! Only the main/master branch will be fully copied over to your local repo. 

- To access content from all other branches, see the "Working with remote branches" lesson. 
- The TLDR is to copy over these remote branches with `git switch <remote-branch>`

### Remotes

- Before we can push anything up to GitHub, we need to tell Git about our remote repository on GH. 
  We need to setup a "destination" to push up to. 
- In Git, we refer to these "destinations" as remotes. 
  Each remote is simply a URL where a hosted repository lives
- The commands to view them do nothing if a repo has no remotes

Display a list of Existing Remotes:

```
git remote				
or
git remote -v		gives more info- including the URL it was cloned from
```

![image-20210616161552020](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210616161552020.png)

Add a new remote:

```
git remote add <name> <url>
——————————————————————————————————————————————————————
EX.
git remote add origin https://github.com/blah/repo.git
anytime we use the name "origin", I'm referring to this specific Github URL
```

![image-20210616172630144](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210616172630144.png)

Rename a remote

```
git remote <old> <new>
```

Remove a remote:

```
git remote remove <name>
```

It's actually common for open source projects to have multiple remotes, but we won't be discussing that until later (possibly in the collaboration chapter)



### Pushing 

Once you have a remote set up, you can push your work up to Github
Specify the remote, AND the specific local branch you wish to push up to that remote

REMEMBER: Always pull down a branch before you ever push something up to GH- in case someone else made commits/changes

Push 1 Branch to the Remote:

```
git push <remote-name> <branch>
——————————————————————————————————————————————————————
EX. Push the main branch up to the URL we associated with the "origin" name
git push origin main			
```



#### Difference b/t Git & Github branches

Github branches are essentially just cloned versions of your local branch. 

- If you push up your master branch to GH then make some commits locally...
  GH won't know about it unless you push up the same branch again
- Process for updating a GH branch === Process for pushing a GH branch the first time

#### Pushing Renamed Branches to Github

Since GH branches are clones anyway, we can do this...
1) Take your local "master" branch, and push it up to GH
2) On GH, it will be known as "new-name"

```
git push <remote> <local-branch-name>:<remote-branch-name>
——————————————————————————————————————————————————————
EX.
git push origin master:new-name
```

This is rarely done due to the confusion it may cause. 
If we're working on a branch locally, there aren't many good reasons to call it something else on GH

NICHE ACTION

- You can even push a side branch on your local repository up to the master branch in your GH project if you want (or vice versa)
- This isn't done regularly since it creates incongruency between your local and cloud version

### What is git push -u ?

USE CASES: 
When you push a branch to GH for the first time
If you forget to do so, you can still use this command afterwards to net the same rewards

#### What does it Do?

- It syncs the local and GH repo by making "origin"  the upstream remote in your git config.
- When you push a local branch with `git push -u`, that local branch is linked with the remote branch automatically.

In other words, `git push -u origin main` makes your machine remember that the main branch on your computer is connected to the main branch on origin (your remote repo)

#### Advantage over git push

You can use certain commands without any arguments since the upstream was configured
git push/pull are the main 2 examples

> ![image-20210618175636708](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210618175636708.png)
>
> Your computer knows/infers which branch to pull from on the remote repo. If you're on the master branch in your local repo, it will pull from the master branch on the GH version.

#### Without git push -u

- You'll have to continue referencing your git repo via its URL or "origin" when you push and pull
  Not difficult, but annoying nonetheless
- If you try to use shorter commands without the upstream being configured, you get errors like this

![image-20210618182930165](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210618182930165.png)

### Initial Project Uploads to Github && Initial Branch Pushes

The following procedures are for initializing a repo on 

#### Project Option 1: Existing Local Repo

If you already have an existing repo locally that you want to get on Github...

1. Create a new repository on GH 

![image-20210616160435646](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210616160435646.png)

2. Connect your local repo- which means add a remote (URL changes per project)
   This modernized procedure changes the master branch name to main
3. Push up your changes to Github

```
git remote add origin <gitRepo-HTTPS-or-SSH>
git branch -M main
git push -u origin main
```

![image-20210616172836722](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210616172836722.png)

- If your HTTPS link doesn't work, use SSH instead. 
- Although ask someone why it's not the recommended option.
  There might be some security issues that I'm unaware of

IF YOU WANT TO KEEP "MASTER" AS YOUR CENTRAL BRANCH NAME:

```
git remote add origin <gitRepo-HTTPS-or-SSH>
git push -u origin main
```



#### Project Option 2: Start from Scratch

If you haven't begun work on your local repo...

1. Create a brand new repo on Github
2. Clone it down to your machine
   You will have all branch upstreams pre-configured as if you used `git push -u` yourself

```
** go to directory you want your project folder to be placed in (Ex. Desktop) **
git clone <gitRepo-HTTPS-or-SSH>
```

3. Do some work locally, then push your changes up to Github

```
** move to branch you want to push up **
git push			
```



#### Initial Push for a new Local Branch

```
git push -u origin <branch-name>
```



### Interesting Git Repos to Follow

#### Hiring Without Whiteboards

- Is a list of companies that follow good hiring practices while avoiding CS trivia and riddle questions
- Go back to this and cold call a few in your area when it's time to look for work

https://github.com/poteto/hiring-without-whiteboards/blob/master/README.md



# Fetching and Pulling Changes on Github

Fetching and pulling are absolutely critical  when working with other people on 1 project. 

They'll make changes+commits to the project, and you'll want to bring them over to your computer without re-cloning the entire codebase

### Remote Tracking Branch References

Shorthand: RTBR

```
git branch -r		
view the remote branches our local repo knows about (includes RTBR)
```



#### Cloning and RTB's

- When we clone an existing GH repo, you'll be left with a typical branch reference, telling you where HEAD is located. 
- However, you will also get another marker we haven't discussed yet, the RTBR
  Labelled "origin/master" in the diagram below

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210618205602032.png" alt="image-20210618205602032" style="zoom:50%;" />

WHAT DOES RTBR DO?

- The RTBR is a reference to the state of the master branch in our remote repository 
  Although it can refer to the state of other branches as well, if we're working on them
- Layman terms: 
  "At the time you last communicated with this remote repo, this is where X branch was pointing"

RTBR NAMES:

```
<remote-name>/<branch-name>
——————————————————————————————————————————————————————
EX.
origin/master	...or perhaps...	origin/bugfix
```

#### How RTBR's work

- When you make new commits on a local branch, GH will not automatically get updated; you must push your changes up there yourself. 
- Therefore, the RTBR will remain in the same spot until you make that push, no matter how many times you change your code and make commits locally

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210618233027402.png" alt="image-20210618233027402" style="zoom:50%;" />

Typing `git status` while on a local branch that has commits the remote branch doesn't

![image-20210618211903383](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210618211903383.png)

#### Checking out RTBR's

```
git checkout <remote>/<branch-name>
——————————————————————————————————————————————————————
EX.
git checkout origin/master
```



### Working with Remote Branches

When you clone a repo on GH that did not exist locally at the start, you'll notice that your computer only knows about the main/master branch

EXAMPLE: Cloned one of Colt's repos and typed 
`git branch` to view all branches
` git branch -r` to view all RTBR's

![image-20210619000740117](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619000740117.png)

When we clone a repository, the master branch will automatically be tracking the remote branch origin/master or origin/main

#### How do we fix this?

We learned that only the master branch is copied over to your local repo when you clone something
Create a local branch equivalent for these remote branches you don't have:

```
git switch <remote-branch-you-are-missing>
OR
git checkout --track origin/<remote-branch-you-are-missing>
——————————————————————————————————————————————————————
EX.
git switch origin/movies
```

To checkout a remote-only branch:

```
git checkout origin/<remote-branch>
** you'll be put in a detached HEAD state **
——————————————————————————————————————————————————————
EX.
git checkout origin/foods
```



### The Difference between fetch/pull

#### The problem they both solve

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619002910567.png" alt="image-20210619002910567" style="zoom: 60%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619002942671.png" alt="image-20210619002942671" style="zoom:60%;" />



#### git fetch Solution

- Downloads changes from a remote repo, BUT those changes will not be integrated into our workspace/working-directory 
- In this case, it'll download the changes made to master, which we can view with checkout
  It will not change our local master branch however

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619004953354.png" alt="image-20210619004953354" style="zoom: 50%;" />



#### git pull Solution

- Downloads the specified remote branch's changes, then merges it into the branch HEAD is positioned locally 
- In this case, it fetches the latest information from the origin's master branch and merges those changes into our current local master branch (conflicts may emerge)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619005428958.png" alt="image-20210619005428958" style="zoom: 50%;" />



#### List of Differences

![image-20210619023100864](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619023100864.png)



#### Different Solutions Visualized 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619003325592.png" alt="image-20210619003325592" style="zoom:67%;" />







### git fetch

#### Visualized Problem it Solves

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619002910567.png" alt="image-20210619002910567" style="zoom: 60%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619002942671.png" alt="image-20210619002942671" style="zoom:60%;" />

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619004953354.png" alt="image-20210619004953354" style="zoom: 50%;" />

USE CASES:
In either case, it brings the changes into your local project without altering the state of any files

1. A branch exists in a local/remote repo
   Your local branch is behind the remote 1 in terms of changes/commits
2. A branch exists in a remote repo, but not in the local one just yet

#### Fetch Changes

```
git fetch			
fetches all changes fr/ the origin remote repo

git fetch origin bugfix			
fetches all changes fr/ a specific branch on the remote repo
```

If not specified, `git fetch` defaults to `git fetch origin` (or whatever the remote name is)

#### View all Changes in the Files

- Now I have those changes on my machine, but my local branches are all left untouched
  If I want to SEE them reflected in the project files, all I need to do is check out the remote branch
- If you want to actually implement these changes, you'll have to merge these branches with git merge

```
git checkout origin/<branch-name>
```

#### Reflect all Changes in the Files

If this was your intention all along, you could have used git pull instead

- Even so, you can get the same results by adding one more step to git fetch
- You may need to deal with potential merge conflicts

```
** move to local branch you want updated with remote equivalent's changes **
git merge origin/<remote-branch-name>
——————————————————————————————————————————————————————
EX.
git merge origin/master		
updates local master with the new changes in the remot master branch
```



#### How to know when a branch is behind

If you fetched some changes, you can check if the branch HEAD's on  is ahead or behind its remote equivalent

```
git status
```

![image-20210619025913592](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619025913592.png)





### git pull

#### Visualized Problem it Solves

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619002910567.png" alt="image-20210619002910567" style="zoom: 60%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619002942671.png" alt="image-20210619002942671" style="zoom:60%;" />

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619005428958.png" alt="image-20210619005428958" style="zoom: 50%;" />

IS A 2-STEP PROCESS COMBINED INTO 1
This command is a combination of `git fetch` and `git merge`

- It downloads a branch's changes from GH and immediately updates the local repository's files with those changes
- Merge conflicts may arise, if your branch has certain commits that defy what other devs have done
  Resolve them like you would with any merging branch

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619035418806.png" alt="image-20210619035418806" style="zoom:90%;" />

#### Pull Changes from a Branch

Pull changes from 1 remote branch:

```
** move to branch you want the changes merged into **
git pull origin <remote-branch-name>
```

IF YOU HAVE CONFLICTS:
Resolve them in GitKraken or VS Code just like you would for any regular branch merge conflict

AFTERMATH:
Your local repo will be 2+ commits ahead of your remote version after the merge

EXAMPLE:

```
** move to master branch **
git pull origin bugfix		
——————————————————————————————————————————————————————
if used when HEAD is on master... 
origin/bugfix branch MERGES WITH local master branch
--aka-- 
remote bugfix branch MERGES W/ local master branch
```



#### Pull Shorthand Syntax

LAYMAN'S EXPLANATION: 
I'm on the X local branch. Please pull down all changes from the remote branch equivalent

```
** move to branch you want the changes merged into **
git pull 
——————————————————————————————————————————————————————
is shorthand for... 
git pull origin <whatever-branch-UR-on>
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619145452606.png" alt="image-20210619145452606" style="zoom:50%;" />

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619145617325.png" alt="image-20210619145617325" style="zoom:50%;" />

MANUALLY CONFIGURE THE TRACKING CONNECTIONS

- EX. `git pull` on the puppies branch can be configured to track `origin/master`
- Most people avoid doing this because it complicates things



# GH Privacy, Collaboration, and Extra Features

### Repo Privacy

DISCLAIMER: ENTERPRISE VERSION NOT EXPLAINED IN THESE LESSONS

- In this lesson, we're going to be learning about how to manage GH repos created with the free version. 
- Enterprise Github works differently in terms of who gets permission to view repos and change certain settings

#### Public Repositories

- Anyone can see and clone your repository, as long as they find it
  They can search for it on GH, or find it by looking into your profile
- They CANNOT push to the repository, unless you give them collaborator privileges

#### Private Repositories

- Only the owner and collaborators can see or clone private repositories
- You can grant people access in the GH repo settings

#### Make Repo Private or Public

You have to choose either option when you first create your  Git repository, but you can always change it in the repo settings -> options:

![image-20210619170638198](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619170638198.png)



#### Public -> Private Etiquette

- It's typically not very nice to take a large public repository that multiple people are working on, then make it private all of a sudden. 
- There are many changes involved with the transition that affect others

![image-20210619171327453](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619171327453.png)

Going from private to public doesn't have any repercussions- assuming you're not leaking something of course

### Collaborators

#### Grant/Remove Collaborator Privileges

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619153203629.png" alt="image-20210619153203629" style="zoom: 90%;" />

#### Collaborator Rights

For the record, enterprise GH works under different rulesets than regular user accounts

OWNER PRIVILEGES: https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository#owner-access-for-a-repository-owned-by-a-user-account

COLLABORATOR PRIVILEGES: https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository#collaborator-access-for-a-repository-owned-by-a-user-account

If you want to pick and choose what rights certain collaborators have, you'll have to upgrade to a higher level account (not sure which)

There are some ways to limit what some people can push to certain branches though:
https://stackoverflow.com/questions/46146491/prevent-pushing-to-master-on-github

### README.md Files

A repository's README.md file is very important- for a number of reasons

1. Recruiters oftentimes only look at this file when taking a look at your project
2. It teaches other devs how to properly interact with what's there
3. You can link other resources that explain how certain aspects of your project work
   Ex. React's library links to several online tutorials for how to use it
4. If you place a README file in your project's root directory, GH recognizes/displays it in the repo's home page automatically

#### Content

The content should include any important information that a visitor to your project might require
Can also include how to install dependencies, who to contact for help...etc

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619175504180.png" alt="image-20210619175504180" style="zoom:67%;" />

Take a look at other git repo README files to get a feel for what things you should be including 
(aside from the list above)

#### Embedded Links 

```
[replacement-msg](URL)		works with absolute and relative links
```

[Go to notion website](https://www.notion.so/)

#### Images

Using the snipping tool to place photos in your public markdown files will not work- since they automatically point to a local storage folder when using Typora

Use this syntax instead:

```
![replacement-msg](postimage-direct-link)
——————————————————————————————————————————————————————
the message in square brackets appears if the img does not load, and is what people with screen readers get voiced to them
```

<img src="https://i.postimg.cc/8zsWWy01/liam-shaw-screen-shot-2020-04-09-at-20-56-47.jpg" alt="replacement-msg" style="zoom:50%;" />

### Intro to Github Gists (overview only)

This lesson EXPLAINS what you can do with gists, but does not go into detail about making them

#### What are they?

Github Gists are like repos, but much more simple/lightweight. 

- You can share documents with others and have them comment and discuss it, while only using a limited number of features. 
- It's much less work than creating a fully fledged GH repo, although technically it is one

PRIVACY
You can make them public or secret

#### Creating Gists (2BC if needed)

Access them from the regular GH site:		![image-20210619182612304](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619182612304.png)



### Intro to Github Pages 

You can actually host static webpages on Github for free, but their service is fairly limited when compared to Netlify. For that reason, I won't be going into much detail about it here 

This lesson EXPLAINS what you can do with GH pages, but does not go into detail about making them

#### Limitations and Use-Cases

LIMITATIONS
You can only create and host static client-side pages
Should not use this for sites that you expect to generate lots of traffic

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619184119431.png" alt="image-20210619184119431" style="zoom:80%;" />

USE CASES:
Your portfolio website, simple games, documentation sites for your repositories, proofs of concept

![image-20210619200322828](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619200322828.png)

#### Why Netlify is a Superior Hosting Option

![image-20210619184023335](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619184023335.png)



#### Hosting a GH Pages Site

PREREQUISITES

1. Have a website built on at least 1 branch in your Github repo (must have index.html)
2. The repo must be public

Repo settings 	->	 Options 	->	 ![image-20210619201102768](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619201102768.png)

Select the branch containing your index.html, then answer the questions that follow afterwards

![image-20210619202352867](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619202352867.png)

Select the folder that index.html appears in

![image-20210619202546822](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619202546822.png)



# Collab Workflow Type A: Centralized 

This chapter talks about team workflows, which I can't replicate easily without switching between 2 PC's (learn these as go, and document your progress during team projects)

### Centralized Workflow Description

- Centralized workflows are when all developers work on the same master branch, and only push commits there.
- Pretty much no one uses this approach, and its faults serve to hype up the other alternatives 

#### Why it's Bad

- It's straightforward and not 100% unviable with extremely small teams, but they cause a laundry list of problems- most of which have to do with fixing merge conflicts 
- If everyone works on 1 branch, you're going to have to pull down other people's changes before you push up yours- repeatedly

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210619205548939.png" alt="image-20210619205548939" style="zoom:80%;" />

#### Problems illustrated

[READ SLIDES 3-14: They're important!](https://www.canva.com/design/DAEP32iZwVc/4se77vKYGwT5_9NpxFbZoQ/view?utm_content=DAEP32iZwVc&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton#15)

Problem 1. (8-11)
Before Pamela can push any of her code to the only remote branch, she has to pull other people's commits down first...every time (that's a lot of merge conflicts to fix)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210620003517793.png" alt="image-20210620003517793" style="zoom:60%;" />

Problem 2. (12-14)

- Dave has made some experimental changes, and is unsure about what he's built. 
  He's deleted files/content, screwing up the codebase to see how he could make his feature work. 
- Dave still needs to upload his half-completed code to the master branch to show his colleagues and ask for their input to help clean up that mess 
- This wrecks the master branch for himself AND everyone else on the team

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210620003653697.png" alt="image-20210620003653697" style="zoom:60%;" />

# Collab Workflow Type B: Feature Branch (learn as you go)

### Feature Branch Workflow Description

#### How it Works

Nobody works on the master branch. 

- Instead, ALL development occurs on feature branches where they can get as experimental as they want without polluting the master branch
- Once features are built and the company agrees to integrate it into the central codebase, we merge our feature branches into master

![image-20210620004253700](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210620004253700.png)

FOR THE RECORD: Large Projects D.N have thousands of Branches

- Even if a site sports thousands of features, their codebase won't have thousand's of branches sprouting off the master branch. 
- Oftentimes, people don't push their code up to GH unless to share or get help from others. 
  Even if they do, they delete the branch as soon as they merge it into master

#### Advantages illustrated

[READ SLIDES 18-30: They're important!](file:///C:/Users/jason/Downloads/Git+&+Github+Course_+Git+Workflows.pdf)

All advantages. (21-29)

David's working on a new "DARK THEME" feature but is only about 30% done

- He wants Pamela's help- but she is working on an "ANIMATED SCROLL" feature on a diff branch
  So, he pushes all his commits to a feature branch separate from hers. 
- Pamela can pull down this feature branch, and add her own adjustments + commits
  She will push up these commits so Dave can access them as well. 
- David sees her changes, finishes up his feature, goes to a board meeting where everyone agrees its ready, then merges it into the master branch

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210620010550913.png" alt="image-20210620010550913" style="zoom: 80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210620010618196.png" alt="image-20210620010618196" style="zoom:80%;" />

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210620010653893.png" alt="image-20210620010653893" style="zoom:67%;" />

#### Feature Branch Naming

![image-20210620020228101](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210620020228101.png)



### Merging Feature Branches into Master: Pull Requests

Once we successfully build a new feature on a side branch, we need to incorporate it into the master branch. We have a few options...

1. Merge at will (dangerous)
   Incorporate the changes into GH without any sort of permission or discussion 
2. Consult your team
   Send an email or DM to your team, and discuss if the changes should be merged in
3. Pull requests (new!)

[Demonstration of a No-Conflict Pull request -> Merge](https://www.udemy.com/course/git-and-github-bootcamp/learn/lecture/24775804#overview)

#### Why Pull Requests Exist

When it comes to larger companies where the stakes are high, we need a system in place that prevents people from merging-branches into master carelessly

- The worst case scenario would be if someone uploaded a bad commit to the master branch- which hundreds of devs will now have to deal with. 
- That means hundreds of people fixing the same bug or removing commits- a complete waste that should be prevented using code reviews

#### How they Work

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621093544819.png" alt="image-20210621093544819" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621093602666.png" alt="image-20210621093602666" style="zoom:80%;" />

PROTECTED MASTER BRANCH:
Most companies have their master branch protected- which prevents anyone from pushing code to it without a pull request

#### Making a Pull Request as a Collaborator

1. Make a new branch off master, then make a pull request from GH
   Since I've got only 1 laptop open right now, I'll do those things using Github instead of Git

> Add a better commit name, describe what you've done in detail, and change the branch name 
> The suggested branch name is highlighted in blue
>
> ![image-20210621161008312](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621161008312.png)
>
> ——————————————————————————————————————————————————————
> As you can see, we merge our feature branch to the master branch of the project
>
> ![image-20210621161239362](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621161239362.png)



#### Responding to Pull Requests 

Discuss -> Accept or Reject
You can even tweak the code in the pull request to fix possible bugs or conflicts

ON THE BOSS' GITHUB, THEY CAN...

![image-20210621124713291](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621124713291.png)

- Reject your proposal by hitting "Close with comment" (considered somewhat rude/blunt)
- Leave a comment to start a public discussion with you 
  These can be elaborate, with code fences, tables...etc
- Confirm the pull request and merge it into master

On my end, I can then leave a comment myself in response. 
We can discuss anything, and give/receive feedback



### Merging a Pull Request with No Conflicts

ON THE BOSS' GITHUB:

![image-20210621094118915](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621094118915.png)

![image-20210621094145294](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621094145294.png)

Once the dev in charge merges the pull request, they will often delete the feature branch. 

You should delete the branch on your local repo, then just pull down the latest version of the master branch. The new feature will be there

#### Squash and Merge

![image-20210621101811171](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621101811171.png)



### Pull Requests with Conflicts

Both the git repo owner and the collaborator will get a visual indication when a pull request conflicts with the existing code on master (or whatever you're merging into)

- Typically, the code reviewer resolves these conflicts, and they do so by following the procedure I'm about to describe. 
- For the record, you can fix conflicts in the browser on Github, but it's not practical for large projects that involve dozens of files

#### Procedure

PART 1) Hit "command line instructions" which is highlighted in blue

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621101644619.png" alt="image-20210621101644619" style="zoom:90%;" />

PART 2) Follow Github's Instructions

> Fix your conflicts in VS Code or GitKraken as soon as you finish GH step 1
> The exact syntax changes per pull request- the branch and repo names will all be different
>
> ![image-20210621130309125](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621130309125.png)

STEP 2) WITH MODERN SYNTAX:

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621131518637.png" alt="image-20210621131518637" style="zoom:80%;" />

STEP 3) Delete the my-new-feature branch both locally and on GH



### Protect Branches with Rules (** heavily research later)

| SCENARIO                                | lesson importance | why                                                          |
| --------------------------------------- | ----------------- | ------------------------------------------------------------ |
| working alone                           | low               | you're the git repo owner, and have total freedom            |
| working as an employee or collaborator  | medium            | your actions are limited, and this lesson explains why       |
| you're the repo owner of a team project | high              | you must protect your project from being broken by strangers or careless collaborators |

#### When you pilot your own project

When this time arrives, read up on how the rules work so you have a thorough understanding

- Google best practices for branch protection
- If you don't understand exactly how a branch protection rule operates, Google it or use a second laptop to test out what you can/cannot do while each rule is active

#### The Need for Protection

- Protecting your master branch is a must- otherwise people will have the ability to push up changes without anyone reviewing their code
- This opens up the floodgates to bugs, incomplete code, and more being introduced to master

Enter your repo settings to configure some rules for branches in your repo:

![image-20210621133746394](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621133746394.png)



#### Branch Name Patterns

- Since projects will have several branches, it's not practical to specify rules for each one
- Any branches that fall under the name pattern you specify in this field will have your check marked rules applied to them

![image-20210621140047280](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621140047280.png)

EXAMPLE:

1. To protect your master branch-> type `master`

2. To protect all feature branches -> type `feature/`
   Then tell all your collaborators to name all feature branches, `feature/whatever`

#### List of Rules

Check-marking these options will give you sub options to choose from, along with a deeper explanation on how each feature works

![image-20210621134940093](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621134940093.png)

![image-20210621135000772](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621135000772.png)



# Collab Workflow Type C: Fork & Clone 

This chapter talks about team workflows, which I can't replicate easily without switching between 2 PC's (learn these as go, and document your progress during team projects)

OVERVIEW OF "FORK & CLONE" 
The fork and clone workflow is unique, and commonly used in large open source projects where there are a few repo owners/maintainers

- Open source means that anyone can contribute to the project, so it's not like the maintainers send out invites to everyone worldwide. 
- Instead, everyone DL's their own copy of the project, makes their changes, then makes a pull request

### What is Forking?

Forking is just making yourself a copy of someone else's repository

#### The Difference b/t Forking and Cloning

FREEDOMS:
Gary is a random name for whoever owns a repo we're interested in having access to

| ACTION               | owner | remote set to...               | allowed to push changes |
| -------------------- | ----- | ------------------------------ | ----------------------- |
| clone Gary's project | Gary  | Gary's repo                    | no                      |
| fork Gary's project  | me    | my repo copy of Gary's project | yes                     |

OWNERSHIP AND CREDIT:
Gary will still be credited in my forked Git repo, as you'll see in a later image

PUSHING CHANGES:

- You can push any changes you want on your forked copy
- Can even make pull requests to the original project as well (requires multiple remotes which is explained in the next lecture)

DON'T: Make useless requests that'll just get denied- so be careful when you do this

#### How to Fork

> ![image-20210621142136305](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621142136305.png)
>
> There's a fork button on the upper right

Once your fork a project, it'll show up on your repo list 
A link to the original version will also be shown there

![image-20210621142339594](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621142339594.png)



### The Fork & Clone Workflow Explained

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621151908382.png" alt="image-20210621151908382" style="zoom:90%;" /> ![image-20210621153644442](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621153644442.png)

#### Procedure Visualized

[READ SLIDES 59-72- there are more diagrams in there](https://www.canva.com/design/DAEP32iZwVc/4se77vKYGwT5_9NpxFbZoQ/view?utm_content=DAEP32iZwVc&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton#38)

PHASE 1:	
Fork the original repository > Clone it down to your local machine

> ![image-20210621150027652](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621150027652.png)
>
> When we clone a repo, Git automatically adds a remote called ORIGIN
> That remote points to your forked repo on Github



PHASE 2: 
Add a second remote which points to the original project

```
git remote add upsteam <orig-project-HTTPS-or-SSH>
```

> ![image-20210621150812967](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621150812967.png)



PHASE 3: 
Make changes on a side branch then push up to origin - your forked repo 
(cannot push to upstream as a non-collaborator)

```
** make changes and commit to a feature/side branch **
git push origin <branch-name-UR-pushing>
```

> ![image-20210621151132587](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621151132587.png)



PHASE 4:
Make a pull request from your forked repo to the original project on GH
This process was explained in the previous chapter

> ![image-20210621151234378](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621151234378.png)
>
> Now, we wait ........
>
> ![image-20210621151331066](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621151331066.png)



#### Making a Pull Request to an Open Source Project

Make a pull request to add your new feature branch to the upstream repo's master branch
That way, you can present a new feature without affecting their master branch

![image-20210621160043095](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621160043095.png)



#### Staying Up to Date w/ the Upstream Repo

WHY WE MUST DO THIS MANUALLY:
Your fork is a copy of the upstream repo at a certain moment in time
Any new commits on the upstream repo won't appear in yours

If other people make contributions to the official repo on GH, you can pull those changes down directly to your local version. From there, you can push changes up to your forked repo...etc

> ![image-20210621151538945](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621151538945.png)
>
> Better download the latest changes so I'm not working on an outdated version of the project
>
> ![image-20210621151650410](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210621151650410.png)
>
> Now I have the latest changes from the upstream repo. 
> I can work on new features locally without worrying about being out of date







