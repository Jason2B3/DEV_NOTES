# VS Code

### Simple Extensions and Key bindings

#### List

Bracket Pair Colorizer 2

Indent Rainbow: 
Makes code blocks easier to see via colors

Auto Rename Tag: 
Renames the bottom tag whenever you edit the opener. And vice versa

#### Key bindings

Duplicate Workspace: Set to CTRL NF

CTRL shift P => find this setting => then set your key bind

![image-20210707123136098](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210707123136098.png)

#### Serendipity Color Theme

Just too good

#### ES7 React/Redux/GraphQL/React-Native snippets

Generates boiler plate code for new React component files
Just need to type `rfce->ENTER`

### Major Extensions

#### What Emmet Does

Use this link to set up a new VS Code station on another PC: 
https://www.youtube.com/watch?v=4NfFFsQC77M&list=PLxqi5pkRSrmjUSUahgFuHhuqJGsEN6742&index=1&t=9s&ab_channel=codeSTACKr

Emmet specifically helps VSC to autocomplete a lot of actions we'd normally have to type

Auto-create Closing Tags: Just type the opening one
Auto-create both tags: Type tag name without <>'s' > ENTER 
Set up blank HTML template: ! > ENTER

#### Live Server

Deploys CSS files directly from VSC onto your browser. Auto updates whenever HTML file is saved- enable autosave after 500 ms in settings

1. Create a folder anywhere on your PC

2. Create an HTML document named "index". This is the only page that live server will consistently reload

3. Open the FOLDER- not the HTML file- from step 1 in VS Code using this symbol
   You now have access to all folders within

   ![image-20201208145753360](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201208145753360.png)

4. Ensure the HTML file has body and header tags or else auto-update fails. Hit the "go live symbol" on the bottom right or right click and hit the option

USEFUL-TIP:
When you make changes to your page, the page will auto-reload and scroll back up to the top

- This may be annoying if you're working on content that requires you to scroll down
- Edit a setting so that reloading will not cause your webpage to scroll up
  https://stackoverflow.com/questions/63401255/prevent-vscode-live-server-to-scroll-up-on-save#:~:text=the%20trick%20to%20solve%20this%20is%20to%20do%20the%20following

![image-20211207142816088](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211207142816088.png)

#### Live Sass Compiler: 

Allows SASS to be compiled and therefore used. By default, your generated CSS file will be appear in the same file as your SCSS file. To change that, enter the settings menu

1. Find Live Sass Compiler in extensions list and click this:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124215932360.png" alt="image-20210124215932360" style="zoom:80%;" />

2. Find this

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124220129134.png" alt="image-20210124220129134" style="zoom:50%;" />

- I changed the savePath to `"savePath":"/css"`
- You can also change the format to compressed or something. No idea what that does, so I won't for now

TIP:
When you edit SCSS, the terminal window for the SCSS compiler will pop up, taking up screen space
There's no point in hiding it since it'll pop open so often

- Minimize the window to the smallest possible height
  This does not mean close it completely
- Now, it'll always be open a bit and won't extend up too high

![image-20211207143013724](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211207143013724.png)

#### CS Peek Extension

CTRL hover over an HTML element to see a preview of what CSS styling is applied to it
Press fn F12 to jump to the exact location in the CSS doc where the styling occurs

-----------------Will understand later on--------------------------------------------

CSS Peek: 
Peeks CSS definitions directly in VSC HTML files- improving navigation
CTRL hover over a class to peek the definition. Click to be transported to it. Good for large CSS files

HTML CSS Support:
Adds class completion to HTML
Don't fully understand yet. Learn CSS first

REST Client: Use to view API responses directly in VSC. Back-end and beyond current scope



#### Prettier: 

1. Enable "Editor: Format on Save" in settings
2. Make it your default formatter in settings too

![image-20210224233018731](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210224233018731.png)



# Git and GitHub

### Git: Configure Name/Email

Git must know who we are, in order to track who makes each change when multiple people collab on a project

- Pick one name you want to people to know you as, and select the email connected to your primary GitHub account
- You can always change your name and email later on by entering these lines again

Setting Name and Email:

```powershell
git config --global user.name "jason2B3"
git config --global user.email "jason2B3@gmail.com"
```

Verify:

```powershell
git config user.name
git config user.email
```



### GitHub: SSH Keys

SSH stands for "Secure Shell", and it exists to make a certain tedious part of the GH workflow easier

- When pushing up code from your machine, the terminal will keep asking you for your GH email and password (annoying)
- You can generate then configure an SSH key so that you can connect to GitHub without being forced to supply a username/password each time

THIS PROCESS MAY CHANGE, SO I HAVEN'T MADE DETAIILED NOTES ON IT

```
PERSONAL:
Email - jason2B3@gmail.com
GH password- 01
```

How to check for existing SSH keys: 
https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/checking-for-existing-ssh-keys

Generating a new SSH key: 
https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

Adding an SSH Key to your GitHub account
https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

# Macros and Shortcuts

#### VS Code

Alt Up/Down: Move line of code up or down
CTRL / : Comment current line or highlighted area
CTRL NF: Duplicate Workspace (*custom)

CTRL D: Double click a reoccurring word then use this shortcut 
		Changes all instances of this word all at the same time 

#### Keyboard-specific

F1 and F2: Minimize window
F4: Rapid Alt Tab
F8: CTRL Z
F10: CTRL Y
Calculator: New browser tab
Camera: Copy
Paper: Cut
Lock: Paste

Home->End : Close current browser tab

#### Windows 10

CTRL L: Select and highlight search bar link
CTRL Shift I: Open dev tools in Chrome

#### Autohotkey

Fun fact: VS code actually has a built-in way to create keyboard shortcuts like these called snippets. However, I'm just going to stick with Autohotkey for now

```
:*:zl::console.log();

:*:mb::————————————————【】—————————————————————
:*:xb::—————————————————————【】——————————————————————————

:*:zh::<{!}--
:*:mcss::/*————————————————【】—————————————————————*/
:*:msass:://————————————————【】—————————————————————
:*:mjs:://————————————————【】—————————————————————

:*:xcss::/*—————————————————————【】——————————————————————————*/
:*:xsass:://—————————————————————【】——————————————————————————
:*:xjs:://—————————————————————【】——————————————————————————
```

![image-20210225000446721](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210225000446721.png)

#### Taskbar Tweaker Setup (UI Changes)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210107140458408.png" alt="image-20210107140458408" style="zoom:80%;" />

#### Fireshot

- Screenshot taker for Microsoft edge. Made custom shortcut CTRL shift P to call it
- Udemy videos keep going black when using snipping tool on them
  Simpler workaround is to use Firefox instead

F.lux Application

- Applies a blue light filter on your screen to reduce eyestrain
- Makes your screen look more orangey 

#### Eye Dropper Extension for Chrome

Lets you derive hex codes for colors you encounter on websites you visit
ALT P shortcut 

#### Google Drive

Remove page breaks:    [How to Remove Page Breaks in Google Docs | BrianLi.com](https://brianli.com/how-to-remove-page-breaks-in-google-docs/)

#### React Specific Browser Extensions

1. React Dev tools
2. Redux tools

#### Ditto Clipboard

Lets you cut/copy multiple things and have your computer still remember them instead of always deleting the previous one

How to use:

- ctrl ` to bring up the clipboard manager
  Double click one of the saved snippets, then that will be what's currently ready to be pasted
- Most recent cuts/copies are at the top
- Can delete any cuts/copies you no longer wish to use

# Udemy Section 5 Part 1: Editor Setup

### Configuring Prettier

When you save, Prettier will automatically reformat your code how it deems best. 
This means removing unnecessary spaces, lines, gaps, replacing single quotes with double quotes...etc. 

- If you want to make some changes to how it reformats your code, browse available changes you can make here: [Options · Prettier](https://prettier.io/docs/en/options.html)
- Create a file called `.prettierrc` then place your changes there inside of curly brackets

This will make it so single quotes are not auto-converted to double quotes
Also removes the "always surround parameters with ( )" default setting on Prettier

```json
{
    "singleQuote": true,
    "arrowParens": "avoid"
}
```

We have to navigate the prettier configuration options to see how to change certain aspects properly- if you care enough to change their settings

![image-20210224234503599](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210224234503599.png)

![image-20210224234817108](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210224234817108.png)

### Configuring Better Comments

Lets you add specially colored comments to HTML, CSS, and JS (customized already)
Just write down a typical comment pattern, then add in a designated symbol

CUSTOM SET UP:

SASS and JS: ![image-20210203144516708](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210203144516708.png)

/*! for CSS (plus all the other examples)
<!--! for HTML (plus all the other examples) 
https://marketplace.visualstudio.com/items?itemName=OmarRwemi.BetterComments

#### Configuring JSON file

![image-20210225000737354](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210225000737354.png)

This is a small part of the overall JSON file containing every setting your setup uses

```JSON
{
  "editor.fontLigatures": false,
  "better-comments.tags": [
    {
      "tag": "~",
      "color": "#B9BBB6",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "!",
      "color": "#FF2D00",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "@",
      "color": "#FF69B4",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "//",
      "color": "#474747",
      "strikethrough": true,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "#",
      "color": "#87cefa",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "$",
      "color": "#50C878",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "%",
      "color": "#FFA07A",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "^",
      "color": "#EED202",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    }
  ],
  "workbench.colorTheme": "Serendipity Dark",
  "liveSassCompile.settings.autoprefix": [],
  "liveSassCompile.settings.excludeList": ["**/node_modules/**", ".vscode/**"],
  "liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "/compiled_css"
    }
  ],
}
```



### TODO Highlights Configuration

This will allow you to highlight spans of text as soon as the keywords you chose are triggered

ATM, your keywords are: FIXME	IMPORT-SRC	TODO	BUG	EX-PLAN

JSON Code (only for this extension)

```JSON
  "todohighlight.isCaseSensitive": true,
  "todohighlight.keywords": [
    {
      "text": "FIXME",
      "color": "#333",
      "backgroundColor": "#e67e22"
    },
    {
      "text": "IMPORT-SRC",
      "color": "#333",
      "backgroundColor": "#f1c40f"
    },
    {
      "text": "BUG",
      "color": "#333",
      "backgroundColor": "#e74c3c"
    },
    {
      "text": "TODO",
      "color": "#333",
      "backgroundColor": "#2ecc71"
    },
    {
      "text": "EX-PLAN",
      "color": "#333",
      "backgroundColor": "#3498db"
    }
  ]
```



### Current JSON File

```json

```



### Windows Extensions

- React dev tools, React Sight, React Realize

