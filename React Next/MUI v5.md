# ========== GENERAL ==========



# Basics + Core Concepts

### Installation

#### Install Procedure

1. Build your initial project with create-react-app, or the Next.js equivalent
2. Go into the project's index.html file in the public folder and add these to the header to implement MUI's default Roboto font and enable its icon library

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```

3. Install MUI in your project

```
npm install @mui/material @emotion/react @emotion/styled		// pick one
yarn add @mui/material @emotion/react @emotion/styled
```

4. If you intend on using the MUI icons library, install this

```
npm install @mui/icons-material				// pick one
yarn add @mui/icons-material
```

#### Doc Links

At some point, the install links will change

> Install procedure:
> https://mui.com/getting-started/installation/



### Starting Project Folders (1 of 2)

Whether you use React or Next.js, your MUI projects will require several installs
Afterwards, your tools will need to be properly implemented into your files

#### MUI with React

> Download the zip file off the following branch:
> https://github.com/Jason2B3/mui5_learn/tree/updated_v5_starter

CONFIGURED TOOLS: 
They must be applied in the following nesting order within index.js or App.js

1. Context API
2. MUI Theme Provider
3. React Router 
4. Theme provider set up and ready to be used in conjunction with Context API







### Importing Components & Reading Docs

There are 2 ways to import a component over to whichever JS file you're writing React in

#### Options

1. Default import- performs a bit better

```react
import Typography from '@mui/material/Typography';
```

2. Destructure import
   You can import multiple MUI components in one line this way

```react
import { Typography } from '@mui/material';
```

#### Reading Docs

Every component has a link to its API section at the bottom of its dedicated page
This is where you can look for all the customization options MUI offers for it

When working with a component, open...

1. Its component page 
2. Its API page



### Default Theme Object

#### What is it?

There's an object containing values that control how all the components in MUI behave
It determines the following for MUI...

- Default colors, fonts, margin/padding, media query breakpoints... etc
- Each of these values can be modified using the createTheme method
  We learn how in the "Themes and Custom Stylings" chapter

#### Default Color Palette 

- If you look in the MUI default theme object, you can sift through the KVP's and eventually find what the values for all the colors in the default palette are. (it's one small part of it)
- These can be changed by editing the default light theme or creating a new theme altogether
  Again, we'll learn how in the "Themes and Custom Stylings" chapter

DEFAULT COLOR NAMES AND THEIR SHADES:  v5 edition

![image-20220104033647454](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220104033647454.png)

To reach the above KVP's...

![image-20220102051038764](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102051038764.png)

#### Purpose of a Default Color Palette

The whole point of the palette is to provide a way to quickly style components using props
There are ways to overcome the limitations of our default palette however...

1. Change the colors in the default palette to better match what you want
   (Good for widespread change across your whole site)
2. Use makeStyles or sx to style your components one at a time, using any colors you want regardless of whether they're in the palette or not (good for one-time changes)

DEMONSTRATING MY POINT:

```REACT
import { Box, typography } from "@mui/system";
import { Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <Button variant="contained" sx={{ m: 2 }} color="secondary">
        Can change appearance with the color prop, but only if we stick to
        palette colors
      </Button>
      <Button variant="contained" sx={{ backgroundColor: "#4c344c", m: 2 }}>
        Way around: Custom CSS with sx or makeStyles
      </Button>
    </>
  );
}
```

![image-20220105053721072](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220105053721072.png)

#### Default Breakpoints

Each breakpoint (a key) matches with a fixed screen width in pixels:

| key  | viewport width (px) in v4 | viewport width (px) in v5 |
| ---- | ------------------------- | ------------------------- |
| xs   | 0 - 600                   | 0 - 600                   |
| sm   | 600 - 960                 | 600 - 900                 |
| md   | 960 - 1280                | 900 - 1200                |
| lg   | 1280 - 1920               | 1200 - 1536               |
| xl   | 1920 - infinity           | 1536 - infinity           |

#### Default Spacing

The spacing property in the default theme object is very vague, which leads to people not understanding how it works

![image-20220105054120048](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220105054120048.png)

When styling components, just remember `theme.spacing(1) = 8px`
By that logic, `theme.spacing(4) = 32px`

- Spacing is related to several CSS properties
- Here's a snippet from the CSS references table from MUI v5, found [here](https://mui.com/system/properties/#properties-reference-table)
  You should have this open when styling components

![image-20220104202458285](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220104202458285.png)

CHALLENGE:

1. Style a component using `theme.spacing()` to define px distances
2. Style another component of the same  type using regular px

```react
import { Typography, Button, Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack sx={{ width: "100vw" }} alignItems="center">
      {/* We can style margin-bottom with pixels directly */}
      <Button variant="contained" sx={{ mb: "24px" }}>
        margin-bottom: 24px
      </Button>
      {/* We can style margin-bottom with theme.spacing as well */}
      <Button
        variant="contained"
        sx={{ backgroundColor: "yellow", color: "black", mb: 2 }}
      >
        margin-bottom: 16px
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: "orange", color: "black" }}
      >
        I'm just chillin
      </Button>
    </Stack>
  );
}
```

![image-20220105055859668](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220105055859668.png)

#### Doc Links

> Default Theme Object:
> https://mui.com/customization/default-theme/#main-content



### MUI Breakpoints & Media Queries 

Each breakpoint (a key) matches with a fixed screen width in pixels
See the breakpoints KVP in the [default themes object](https://mui.com/customization/default-theme/#main-content) to verify the following chart

#### Default Breakpoints Chart

V5 CHART:

| key  | start point | dedicated zones |
| ---- | ----------- | --------------- |
| xs   | 0           | 0 - 600         |
| sm   | 600         | 600 - 900       |
| md   | 960         | 900 - 1200      |
| lg   | 1280        | 1200 - 1536     |
| xl   | 1920        | 1536 - infinity |

#### Changing Default Breakpoints

The breakpoints are part of the default theme object

- They can be edited by following the similar procedure as when you created new color palettes in the "Themes and Custom Stylings" chapter
- You can even choose to give the breakpoints new names altogether, but I'd avoid it to maintain consistency with the documentation

REMEMBER!

- When redefining breakpoints, redefine every single one
- You're overriding the entire object, so if you only type out 1 new breakpoint, that'll now be the only one in effect since the others have been deleted

------

MUI_themes.js

```react
import { createTheme } from "@mui/material/styles";
import { indigo, teal } from "@mui/material/colors";

const newBreakpoints = {
  values: { xs: 600, sm: 900, md: 1200, lg: 1500, xl: 1800 },
}; // good to define them outside, sine you'll likely reuse them in every theme

export const customThemes = {
  //^ STANDARD LIGHT THEME
  light: createTheme({
    breakpoints: newBreakpoints,
  }),
  //^ DARK THEME
  dark: createTheme({
    palette: {
      mode: "dark", // enable dark mode and let MUI make its automated changes
    },
    // Must define every single breakpoint, since we're overriding the entire object
    breakpoints: newBreakpoints,
  }),
};
```

App.js

```react
// Step 1. Create a theme using imported color objects from MUI
import { createTheme, ThemeProvider } from "@material-ui/core";
// Protip, use VSC suggestions to get the import lines for color objects
import { customThemes } from "../WHEREVER THE FILE ABOVE IS"

// Step 2: Wrap ThemeProvider tags around all components in App.js
function App() {
  // IRL, we'd select a theme to use based on state values using Context API
  // For this example, I'll just pick one
  return (
    <ThemeProvider theme={customThemes.light}>
        <Switch>Whatever else is sandwhiched in the middle here</Switch>
    </ThemeProvider>
  );
}
```

#### Breakpoint Methods: Media Query Equivalents

You'll be using these snippets of CSS when you customize your components

MOBILE FIRST METHOD:	essentially just `@media (min-width: 600px)`

```scss
// Apply change at all viewports above sm (600px)
[theme.breakpoints.up("sm")]: { color: "black" }
```

DESKTOP FIRST METHOD:

```scss
// Apply change at all viewport widths below sm (600px)
[theme.breakpoints.down("sm")]: { color: "black" }
```

ZONE METHODS

```SCSS
// Apply changes in the sm zone only (600 - 900px)
[theme.breakpoints.only("sm")]: { color: "black" }
// Apply change in the md zone only (900 - 1200px)
[theme.breakpoints.only("md")]: { color: "black" }

// Apply changes from the start of sm zone until the start lg (600 - 1200px)
[theme.breakpoints.between("sm", "lg")]: { color: "black" }
```

#### Advice for the Breakpoint Methods

WHEN YOU CAN USE THEM:
There are probably more places, but I know of these 2 at the moment

- When building custom components with styled()
- When styling with sx props

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220107025759717.png" alt="image-20220107025759717" style="zoom:80%;" /> 			<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220107025611342.png" alt="image-20220107025611342" style="zoom:80%;" />

PRO-TIP #2:
If you need to style media queries with regular pixel widths, you can
I don't know if this mixes well if you use breakpoint 

![image-20220107004700710](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220107004700710.png)

```
["@media (min-width: 500px)"]: {}
```



#### Doc Links

Check out the breakpoints in the default theme object.
Look under `themeObject.breakpoints.values` 

> Default theme object: 
> https://mui.com/customization/default-theme/#main-content
>
> Breakpoint method explanations:		(I tested them all and made better notes though)
> https://mui.com/customization/breakpoints/#api





### 1rem = 10px trick in MUI **



### All Customization Options in v5

#### Chart

The options are ordered in terms of how widespread the changes will be after using that option

| OPTION                   | METHOD         | WHAT IT DOES                                                 |
| ------------------------ | -------------- | ------------------------------------------------------------ |
| one off customization    | sx, makeStyles | applies styles to individual MUI components via the sx prop or class names (makeStyles) |
| reusable style overrides | styled()       | creates a reusable component that you can apply custom styles on |
| global theme variation   | createTheme()  | changes the default theme object so you can edit its values to better suit your design-wants |
| global CSS override      | theme object   | Changes aspects of CSS to a component throughout your project |
|                          |                |                                                              |

I neglected to include "Dynamic Variation", due to how similar it is to "Reusable Style Overrides"
It gives that method more functionality, and would be in spot #3

#### Doc Links

> SOURCE:
> https://mui.com/customization/how-to-customize/#1-one-off-customization





# Using Next.js over React

Setting up Next MUI projects shares similarities with React's process
There are however, a few differences we must take into account while preparing our project folder

### Setting up Server Side Rendering

#### Why we must Setup SSR

If you want to use getServerSideProps with MUI right out of the box, you may run into a problem:

![image-20220306224559579](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220306224559579.png)

- This is related to MUI using dynamic class name which contain an ID. 
- The IDs from the server side rendered CSS are not the same as the client side CSS, hence the mismatch error
- Once we set things up properly, this won't be an issue

> SOURCE: [node.js - React + Material-UI - Warning: Prop className did not match - Stack Overflow](https://stackoverflow.com/questions/50685175/react-material-ui-warning-prop-classname-did-not-match)

#### Procedure

> Explained in the official docs
> https://mui.com/guides/server-rendering/
>
> Explained simply in other article: (tried but did not work the first time)
> https://dev.to/hajhosein/nextjs-mui-v5-tutorial-2k35#step-five



### MUI + Next + Typescript

https://dev.to/hajhosein/nextjs-mui-v5-typescript-tutorial-and-starter-3pab



# ======= CUSTOMIZATION =======



# Global Theme Variation + Global Overrides: createTheme()

Method 4 of 5 for customization, as listed by the MUI docs
https://mui.com/customization/how-to-customize/#4-global-theme-variation

### Custom Themes: New Color Palette

In the previous lesson we learned about the default theme object. 
Lets override certain KVP's in that object to set up a new default-color palette for our components

#### Prerequisite knowledge

Verify facts [here](https://mui.com/customization/default-theme/#:~:text=explore%20the%20default%20theme%20object%3A)

| Question                                   | Answer                                            |
| ------------------------------------------ | ------------------------------------------------- |
| name all color objects in the theme object | primary, secondary, error, warning, info, success |
| list shades for each color object          | light, main, dark                                 |

![image-20220102171611897](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102171611897.png)

#### Method 1: Override with Hex Codes

We can use hex codes to change the colors in MUI's theme palette.
You have 2 choices for how you want to do this:

OPTION A: Override the main shade only (recommended)

- MUI will use a formula to select the light and dark shades for you
- It will also automatically change the text color of components to better contrast the main shade
  Ex. If you specify a main shade of yellow, the text will be auto-set to black

![image-20220102172424643](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102172424643.png) ![image-20220102172642531](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102172642531.png)

OPTION B:  Override all 3 shades- light, main, and dark

- You can specify each shade to be any color you want
  The light and dark shades can even be completely different colors than the main

- MUI will auto-set the text color of components when the main shade is used, but it won't on the light and dark shades (see above 2 images)

------

DEMO:

If you want a tool to help you set primary and secondary themes, [use this](https://v4.mui.com/customization/color/#playground)
You can see what the colors look like next to each other

App.js or index.js

```react
// Step 1: Create a new theme
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    // OPTION A Demo: Specify main shade only
    primary: {
      main: '#00897b', // changed to a foresty green
      // Since we left light and dark unspecified, MUI will set them automatically
    },
    // OPTION B Demo: Specify all shades
    secondary: {
      main: '#ffb333', // orange
      light: '#303f9f', // dark blue (not really a shade of orange but whatever)
      dark: '#512da8' // violet (not really a shade of orange but whatever)
    }
  },
});

// Step 2: Wrap ThemeProvider tags around all components in App.js
function App() {
  return (
    <ThemeProvider theme={theme}>
        <Switch>Whatever else is sandwhiched in the middle here</Switch>
    </ThemeProvider>
  );
}
```

react page file

```react
      <Button variant="contained" color="primary">
        Primary button
      </Button>
      <Button variant="contained" color="secondary">
        Secondary button
      </Button>
```

END RESULT:

Default Color Palette: ![image-20220102165148522](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102165148522.png) 		

New palette: ![image-20220102170359055](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102170359055.png)

Hover primary button: ![image-20220102170426970](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102170426970.png)

Hovering secondary button:  ![image-20220102170446898](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102170446898.png)

RESULT DISCUSSION

- When you hover a button, the dark shade gets used
  When the button is left idle, the main shade gets used
- MUI automatically set the component text color for our new main shades
  The primary button got white text while the secondary one got black text
- Notice how the black text looks too dark in contrast to the dark shade 
  MUI did not automatically set the component text color for our dark shade

#### Method 2: Override with Color Objects

Instead of hex codes, you can use color objects to override the default palette colors
You don't have to specify any shades at all, since MUI already has them pre-defined per color object

PROCEDURE:

1. Pick MUI's color objects [here](https://v4.mui.com/customization/color/#color-palette)
2. Assign a color object to primary, secondary, error, warning, info, or success (directly)

- MUI will choose the light/dark/main shades for you automatically
- The syntax is a little different than method one's (less nesting)

3. Wrap ThemeProvider tags around App.js or index.js just like in method 1

```react
import { indigo, teal } from "@mui/material/colors";

//^ Define your custom MUI themes here
const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: teal,
  },
});
```

------

DEMO FOR M2:

App.js

```react
// Step 1. Create a theme using imported color objects from MUI
import { createTheme, ThemeProvider } from "@material-ui/core";
// Protip, use VSC suggestions to get the import lines for color objects
import { lightGreen } from "@material-ui/core/colors";
import { orange } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: lightGreen,
    secondary: orange,
  },
});

// Step 2: Wrap ThemeProvider tags around all components in App.js
function App() {
  return (
    <ThemeProvider theme={theme}>
        <Switch>Whatever else is sandwhiched in the middle here</Switch>
    </ThemeProvider>
  );
}
```

React page file

```react
      <Button variant="contained" color="primary">
        Primary button
      </Button>
      <Button variant="contained" color="secondary">
        Secondary button
      </Button>
```

![image-20220102190835543](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102190835543.png)

#### New Color Objects

You are free to create more color objects than the default palette contains initially

```js
const theme = createTheme({
  palette: {
      primary: { main: "#1f3c50" }, // dark color near black
      secondary: { main: "#da3743" }, // near crimson red
      info: { main: "#4285f4" }, // google blue
      grayBackground: { main: "#F5F5F5" },
      unselected: {main: "#F5F5F5"}, // new
      selected: {main: "rgb(255,215,0)"} // new
  },
});
```



#### Doc Links + Best Methods

PREFERRED METHODS:
With these 2 strats, MUI will do most of the work by selecting dark/light shades while making sure the text colors inside components contrast nicely

1. Method 1 while specifying the main shade only
   Use when you have an exact color you'd like to style with
2. Method 2 
   Use if MUI color objects suffice for what you're making

DOC LINKS:

> Method 1 Color Selector Tool:  
> https://mui.com/customization/color/#playground
>
> Method 2 color objects:  
> https://mui.com/customization/color/#color-palette



### Custom Themes: New Fonts

You can do more than just override default colors in MUI. 
Now, we're going to learn how to apply different Google Fonts

#### Location in the Default Theme Object

Go to the default theme object [here](https://v4.mui.com/customization/default-theme/#explore), and click on the nested typography object
Each typography variant is styled using an object whose KVP's we can edit/override

Images from v5:

> ![image-20220102192220410](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102192220410.png) ![image-20220102192249341](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102192249341.png) ![image-20220102192301545](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102192301545.png)

Let's look at how h1 is styled:	 ![image-20220102192530551](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102192530551.png)

#### Apply new Font to all Components

PROCEDURE:

1. Grab the @import line for your desired font in Google Fonts
   There's a slightly different way to do this using `<link>` instead (not explained here)
2. Place the @import line at the top of index.css
3. Use createTheme to create a theme, then wrap ThemeProvider tags around all the components inside that file's JSX

------

PROCEDURE IN ACTION:

src/index.css

```css
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Quicksand:wght@300;400;500;600;700&display=swap');
```

App.js 

```react
// Step 1: Create a new theme
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  typography: {
    // Change main site font
    fontFamily: "Josefin Sans", // grab name from Google Fonts
    // Make all the font weights a tad heavier
    fontWeightLight: 700,
    fontWeightRegular: 700,
    fontWeightMedium: 700,
    fontWeightBold: 700,
  },
});

// Step 2: Wrap ThemeProvider tags around all components in App.js
function App() {
  return (
    <ThemeProvider theme={theme}>
        <Switch>Whatever else is sandwhiched in the middle here</Switch>
    </ThemeProvider>
  );
}
```



### Themes with Conditional Logic

You have the ability to create themes while adding conditional logic to set values

- All you have to do is use `createTheme()` inside of the React component function, underneath the values the conditions will be based on

> Remember, createMuiTheme is outdated. Just use createTheme instead
>
> ![image-20220103025822380](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220103025822380.png)



### Dark Mode: Explained 

> Source: https://www.youtube.com/watch?v=H_PO_GY4xXU&ab_channel=AnthonySistilli

MUI actually provides 2 default theme object color palettes, not one

- The 2 available palettes are `mode: light`  and `mode: dark` in v4 (changes in v5)
- The light mode is the default palette that MUI applies, but it can be toggled to dark easily
  Creating a nice looking dark mode requires a bit more customization than that however

#### What enabling Dark Mode does on its own

The following colors are altered by toggling dark mode on

- Background color, paper element background color, divider colors
- Text colors and their shades (primary, secondary, and disabled)
- When you toggle the dark theme on, only a few colors actually get changed
  The primary, secondary, error, warning, info, & success colors in the default palette remain the same

> Source: https://mui.com/customization/dark-mode/#main-content
>
> ![image-20220105182655718](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220105182655718.png)

#### Visual Demo (no code)

React page file

```react
      <Typography variant="h3" component="h1" align="center">
        This is my app!
      </Typography>
      <Button
        variant="contained"
        color="primary"
      >
        Primary button
      </Button>
      <Button variant="contained" color="secondary">
        Secondary button
      </Button>
```

Light theme enabled (default)

> ![image-20220103052708007](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220103052708007.png)

Dark theme enabled 

> ![image-20220103052732718](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220103052732718.png)

EXPLANTION:

- h1 does not have a specified color, so it uses `text.primary` which equals `rgba(0,0,0, 0.87)`
  MUI will change this automatically when dark mode's applied
- The buttons use primary/secondary colors
  MUI won't modify these when dark mode's applied

![image-20220103040213804](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220103040213804.png)

#### What we must Add to Dark Mode

If you read the previous subsection, you know that toggling dark mode only changes a few things
This means that to make a dark theme look nice, we'll have to...

1. Enable dark mode, and let MUI make its automated changes we just described
2. Change some of the 7 palette colors so that elements do actually look different when dark mode's enabled

USEFUL TOOLS:

| tool               | how it helps                                                 |
| ------------------ | ------------------------------------------------------------ |
| createTheme method | need it to create multiple new themes<br />light (default), dark, and more if you want |
| Context API        | Create a function that toggles dark mode on- the API will let you do this from any component file |
| localStorage API   | Save the latest theme chosen by the user in localStorage so it stays applied when they visit again. Rely on useEffect or useMemo to auto select their latest choice on startup |



### Dark Mode: Execution

#### Objective

1. Enable dark mode for your application via button press
2. Change palette colors at the same time- stick to primary and secondary for this example
3. Set things up in a way where we can use 3 themes or more (no toggle)

REMAINING MAJOR FEATURE

- We should incorporate localStorage to remember previously selected theme preferences, but I'll save that for a real project 
- If we don't simply reloading the page will snap your site back to light theme since it decides on your theme based on state which will reset

> ![image-20220105190346451](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220105190346451.png) ![image-20220105190356389](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220105190356389.png)
>

#### Procedure

> Just look at the files in this repo- the pictures above are enough to show what this site does
> https://github.com/Jason2B3/mui5_learn/tree/updated_v5_starter
>
> Sandbox
> https://codesandbox.io/s/5st09

------

1. Set up the context API with useState variables 
   Make a theme and a method to change the theme available to all components

state-management/globalContext.js

```react
import { useState, createContext, useContext } from "react"; // import useContext
const AAA = createContext();
export const useGlobalContext = () => useContext(AAA) // export custom hook

export default function GlobalContextAPIProvider(props) {
  const [theme, setTheme] = useState("light");
  const distribution = { theme, setTheme };
  return <AAA.Provider value={distribution}>{props.children}</AAA.Provider>;
}
```

2. Create a component that changes the theme state variable via user inputs

pages/Home.js

![image-20220105185925696](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220105185925696.png)

3. In App.js, decide on what theme to use via the stateful theme variable

- The key to this is creating a theme inside the React component, underneath that variable
- Also, use the `<CssBaseline>` component, so enabling dark mode actually does something
  It won't otherwise

App.js

```react
import { createTheme, ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useCustomContext } from "./state-management/globalContext";

function App() {
  const { theme } = useCustomContext(); // from context file
  // Define all themes below (or shift this into another file, whatever)
  const lightTheme = createTheme({}); 
  const darkTheme = createTheme({
    palette: {
      type: "dark",
      // Change the palette colors as well (2/7 to keep this ex. short)
      primary: {
        main: "#FFA500", // yellow
      },
      secondary: {
        main: "#e389b9", // pink
      },
    },
  });
  // Decide what theme to use based on the theme variable from context API
  let selectedTheme;
  if (theme === "lightTheme") selectedTheme = lightTheme;
  if (theme === "darkTheme") selectedTheme = darkTheme;
  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline> {/* Necessary for dark mode toggle to work */}
        <Switch>Whatever else is in here</Switch>
      </CssBaseline>
    </ThemeProvider>
  );
}
```

#### In Future Projects

This was an extremely simple example. Real projects will require...

- More consideration for the new palette colors you set
  Contrast ratios, accessibility... etc (UI designer stuff)
- A more sophisticated way of toggling themes
  Perhaps a switch or an icon button

```react
import "./App.css";
import Home from "./pages/Home.js";
import { useGlobalContext } from "./state-management/globalContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { indigo, teal } from "@mui/material/colors";
import { CssBaseline } from '@mui/material';

//^ Define your custom MUI themes here or below the App function
const darkTheme = createTheme({
  palette: {
    mode: "dark", // enable dark mode and let MUI make its automated changes
    primary: indigo,
    secondary: teal,
  },
});
const lightTheme = createTheme({}); // default theme untouched

export default function App() {
  // Decide what theme to use based on ContextAPI's theme variable string
  let selectedTheme;
  const { theme } = useGlobalContext();
  if (theme === "light") selectedTheme = lightTheme;
  if (theme === "dark") selectedTheme = darkTheme;
  return (
    <ThemeProvider theme={selectedTheme}>
      <BrowserRouter>
        <CssBaseline> {/* MUST INCLUDE for dark theme to work */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </CssBaseline>
      </BrowserRouter>
    </ThemeProvider>
  );
}
```



### Example of an MUI Theme File

MUI_themes.js from Local Eats project

- We redefine the breakpoints and palette colors
  Also add additional color objects to the palette
- This is set up in a way where we can add a dark mode in the same object as the light one
  Switch between them using React context

```js
import { createTheme } from "@mui/material/styles";

export const breakpointValues = {
  xs: 0,
  sm: 700,
  md: 1000,
  lg: 1300,
  xl: 1636,
};

export const customThemes = {
  //^ STANDARD LIGHT THEME
  light: createTheme({
    components: {
      // Disable button ripple- which is controlled as a default prop
      MuiButtonBase: {
        defaultProps: { disableRipple: true },
      },
      // Remove Container's default padding
      MuiContainer: {
        defaultProps: { disableGutters: true },
      },
    },
    palette: {
      primary: { main: "#1f3c50" }, // dark color near black
      secondary: { main: "#da3743" }, // near crimson red
      info: { main: "#4285f4" }, // google blue
      grayBackground: { main: "#F5F5F5" },
      unselected: {main: "#F5F5F5"}, // new
      selected: {main: "rgb(255,215,0)"} // new
    },
    breakpoints: {
      values: breakpointValues,
    },
    //^ CHANGE THE HEADER FONT SIZES
    typography: {
      // regular fontSize will stay at 14px
      // Use for the big title on the Homepage
      h1: {
        fontFamily: `"Roboto, "Helvetica, "Arial", sans-serif`,
        fontSize: "3.75rem", // 60px
        fontWeight: 300,
        lineHeight: 2.267,
        letterSpacing: "-0.01562em",
      },
      // Use for section headers on the homepage
      h2: {
        fontFamily: `"Roboto, "Helvetica, "Arial", sans-serif`,
        fontSize: "2.25rem", // 36px
        fontWeight: 400,
        lineHeight: 1.2,
        letterSpacing: "-0em",
        marginBottom: "1.875rem",
      },
      // Use for new webpage section headers
      h3: {
        fontFamily: `"Roboto, "Helvetica, "Arial", sans-serif`,
        fontSize: "1.875rem", // 30px
        fontWeight: 400,
        lineHeight: 1.167,
        letterSpacing: "-0em",
      },
      h4: {
        fontFamily: `"Roboto, "Helvetica, "Arial", sans-serif`,
        fontSize: "1.5rem", // 24px
        fontWeight: 400,
        lineHeight: 1.235,
        letterSpacing: "0.00735em",
      },
      // Use for the homepage's expensive/cheap cards
      h5: {
        fontFamily: `"Roboto, "Helvetica, "Arial", sans-serif`,
        fontSize: "1.25rem", // 20px
        fontWeight: 400,
        lineHeight: 1.334,
        letterSpacing: "0em",
      },
      // Use for descriptions underneath new section headers
      h6: {
        fontFamily: `"Roboto, "Helvetica, "Arial", sans-serif`,
        fontSize: "1.125rem", // 18px
        fontWeight: 500,
        lineHeight: 1.6,
        letterSpacing: "0.0075em",
      },
    },
  }),
};

```



# Global CSS Overrides

Sometimes we'd like an MUI component to look a certain way without being forced to create our own custom components- we want every instance of it to be customized no matter what



### Understanding how a Visual Aspect must be Overridden 

MUI lets you edit a component's appearance via props- but these options are limited

#### What Props can/can't Edit

To find out what props can edit in a component, check out its API page

EXAMPLE: 
Button Component API page: 	https://mui.com/api/button/#props

- We can change the color, size, and ripple via props
- We have no options for changing the letter spacing though
  This is an unorthodox thing to change, so MUI devs didn't make this an option to edit via props

#### Relation to Global Overrides

Imagine if we wanted our buttons to look like this throughout our whole project:

1. No ripple (must edit with props)
2. Longer letter spacing (must edit with sx styling or makestyles)

If we had 20 buttons, we'd need to implement these changes manually multiple times over
Or.. we can just perform a Global CSS Override

#### Override techniques Differ

- Global CSS Overrides are a little different depending on how visual aspects are changed
- If we can edit a visual aspect via props, then a Global override on that will be different than an override on something we'd need to edit using CSS

| how we control a visual aspect       | how to perform global override | example                                                      |
| ------------------------------------ | ------------------------------ | ------------------------------------------------------------ |
| MUI component props                  | override the default props     | button ripple is controlled by props                         |
| Overriding CSS with sx or makeStyles | override global styles         | button's letter spacing is not controlled by props- so we must override CSS |



### Overriding: Default Component Props & Global Styles

> Follow examples along with:
> Verify claims using [Button API page](https://mui.com/api/button/#props) and [Container API page](https://mui.com/api/container/#props)

#### Finding the Component Name

Before we start, you need to find out what a component's official theme object name is
Check the API page for a component

Button:		  ![image-20220115234253163](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220115234253163.png)

Container:	 ![image-20220115234236585](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220115234236585.png)

#### Demo Explanation

We're going to change the Button and Container components

LIST OF DEFAULT PROPS TO OVERRIDE:

| Default styles that I dislike       | edited via props | default prop: __ by default |
| ----------------------------------- | ---------------- | --------------------------- |
| Buttons ripple                      | yes              | `disableRipple: false`      |
| Container has 24px inline padding   | yes              | `disableGutters: false`     |
| Container has a default white color | no               | N/A                         |

#### Overriding Example

THEME OBJECT: (boiler plate and setup for theme provider not shown)

```react
export const customThemes = {
  //^ for standard light theme in this ex.
  light: createTheme({
    components: {
        
      // DEFAULT PROP: Disable button ripple
      MuiButtonBase: { 
        defaultProps: { disableRipple: true } 
      },
       
      MuiContainer: {
        // DEFAULT PROP: Remove Container's default padding
        defaultProps: { disableGutters: true },
        // GLOBAL STYLES: override all MuiContainer background colors
        styleOverrides: { root: { backgroundColor: "gray" } },
      },
        
    },
  }),
};
```

#### Doc Links

> Overriding Default Props
> https://mui.com/customization/theme-components/#default-props
>
> Overriding Global Styles
> https://mui.com/customization/theme-components/#global-style-overrides



### Alt way for Global Style Overrides (unexplored)

#### Procedure

Go to wherever your themes are set up and add the following:

```react
import { createTheme } from "@mui/material/styles";

export const customThemes = {
  //^ STANDARD LIGHT THEME
  light: createTheme({
    components: {
      // This will affect everything nested inside the CssBaseline tags
      MuiCssBaseline: {
        styleOverrides: `
          h1 {
            margin-bottom: 1.875rem;
          }
        `,
      },
      // Disable ripple on all Buttons (must use the exact component name, on API pg)
      MuiButtonBase: {
        defaultProps: { disableRipple: true },
      },
    },
  }),

};
```

Relation to CssBaseline:

- If you have your themes set up properly, you'll have a `<CssBaseline>` set up as a wrapper somewhere in your project
- Will usually be App.js or index.js, where it'll affect all your project components
- You'll need it in order to make `MuiCssBaseline: { }` in your global styling to have an effect

![image-20220107054749386](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220107054749386.png)

#### Doc Links

> Overriding Default Props
>
> Global Overrides:
> https://mui.com/customization/how-to-customize/#5-global-css-override
>
> Disable ripple: 
> https://mui.com/getting-started/faq/#how-can-i-disable-the-ripple-effect-globally



# One off Customization: sx

Method 1 of 5 for customization, as listed by the MUI docs
https://mui.com/customization/how-to-customize/#1-one-off-customization

### Box , sx, Custom System Properties List

#### Box Component

Box tags are wrapped around other elements- both regular JSX elements and MUI ones
It produces a `<div>`element by default, but it can produce others via the `component` prop

PURPOSE:
You can style elements nested inside of the Box directly in the JSX

- This allows you to apply CSS onto them without writing too much code
  In v4 we had makeStyles, which involved much more boiler plate code to get things done
- The default `<div>` has no defined width or height, so it's almost like wrapping elements in React fragments that allow better styling options

#### sx  

Use the sx prop to style MUI elements while having direct access to the MUI theme object
Feed it a JS object containing CSS styles

CSS DIFFERENCES:
We need to adjust our normal CSS so it doesn't produce syntax errors in our JS files
Use this tool if you need help: https://transform.tools/css-to-js

regular CSS

```css
display: flex;
flex-direction: row;
flex: 1;
```

in a JS object

```js
display: "flex", 
flexDirection: "row", 
flex: 1
```



#### Custom System Properties- what we can style

The Custom System Properties page contains a useful chart that lists what CSS properties you can edit using props or sx (your choice). See chart [here](https://mui.com/system/properties/#properties-reference-table)

Small snippet:

> ![image-20220104202458285](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220104202458285.png)
>
> System key: 
> How you reference the CSS property when coding with MUI
>
> CSS property: 
> The style you will be editing when you use the system key
>
> Theme mapping: 
> How this property relates to the theme object
> The value of your CSS style will go where "value" is
>
> Shortcuts Example: 
> `mb` is an MUI shortcut for `marginBottom `
> Some CSS properties have dedicated shortcuts for MUI, but not all (check chart for them all)

EXAMPLE: 

- `mb: 3` is the same as typing `margin-bottom: theme.spacing(3)`
-  This means the bottom margin will be triple the margin the theme object applies by default for whatever component you apply this style on

#### Doc Links

import line

```js
import { Box } from '@mui/system';
```

Docs

> Custom System Properties List:
> https://mui.com/system/properties/#properties-reference-table



### How sx Styling Works

#### Facts table

| Element type                                | inherits styles from parent `<Box>` | can be styled with sx props | workarounds                                     |
| ------------------------------------------- | ----------------------------------- | --------------------------- | ----------------------------------------------- |
| primitive elements. aka normal JSX elements | yes                                 | no                          | create the same element using `<Box component>` |
| MUI components                              | yes                                 | yes                         | no need for any                                 |

CONCLUSION:
There's no reason to use primitive elements in a file where you're relying on MUI
You can make any element with `<Box>`, and it'll provide more styling options

#### Demo

This example should demonstrate and prove every point I made in the previous subsection's table

pages/Home.js

```REACT
import React from "react";
import { Box, typography } from "@mui/system";
import { Typography } from "@mui/material";

const styles = {
  width: "70vw",
  fontSize: "36px", // we choose our own value to use  
  color: "#FFFFFF", // a regular color
  // Reference the theme object with your remaining styles
  backgroundColor: "primary.main", // a blue theme color
  m: 1, // 8px margin all around
  pl: 3, // 24px padding left
};

export default function Home() {
  return (
    <>
      <h3 sx={styles}>We cannot style primitives with sx directly, or this would have a blue background</h3>
      <Box sx={styles}>
        <h5 sx={{ color: "pink" }}>
          Primitives inside Boxes can at least inherit styles
        </h5>
        <Box sx={{ color: "pink" }} component="h5">
          Instead of primitives, just use a Box to create any primitive element you want. Then style away with sx. Remember though, this still inherits from its parent Box (hence the 36px font size)
        </Box>
        <Typography variant="h5">
          MUI components inside boxes inherit styles (hence the white text)
        </Typography>
        <Typography variant="h5" sx={{ color: "black", fontWeight: 700 }}>
          Though we can override them with sx anytime
        </Typography>
      </Box>
    </>
  );
}
```

![image-20220105051054068](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220105051054068.png)

ADDITIONAL POINT ABOUT HOW SX STYLING OPERATES:
If an MUI component inherits styles from a Box, then gets styled with sx itself...
The inherited styles will remain unless they get overridden with the sx styling applied to it directly

Look at `<Box sx={{ color: "pink" }} component="h5">`

- It inherits CSS properties from the `styles={}` object that styled the main `<Box>` wrapper
  One aspect of that is the white text color
- It also gets styled by sx directly itself. 
  Its sx styles color the text pink, overriding the white

#### Doc Links (unfinished)

Box Component: 
https://mui.com/components/box/#overriding-mui-components

```
import Box from '@mui/material/Box'
```

Box API Section:

![image-20220104160736945](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220104160736945.png)



### Where to Define sx Styles

We have several options for where we want to place our CSS placed in a JS object
I'm going to list the possibilities in this lesson, and will

I'm going to refer to styling CSS using JS objects as JCSS in this lesson

#### In the JSX

You can apply sx styles in a similar way to inline CSS

```react
        <Box sx={{ color: "pink" }}>
          defined right in the JSX
        </Box>
```

#### In an Object Outside

Define a JCSS object outside of the React function or inside it
Afterwards, simply supply that object as the sx prop value

```react
const styles = {
  width: "70vw",
  m: 1, // 8px margin all around
  pl: 3, // 24px padding left
};

export default function Home() {
  return (<Box sx={styles}>defined out of the JSX section</Box>)
}
```

EXTRA:
You can even mix this approach with the previous one using the spread operator
Define some styles inside the JSX, and some outside- then combine the two

```react
const styles = {
  width: "70vw",
  m: 1, // 8px margin all around
  pl: 3, // 24px padding left
};

export default function Home() {
  return (<Box sx={{...styles, color: 'blue' }}>defined out of the JSX section</Box>)
}
```

#### In Separate JS File

- Since we're defining our CSS in a JS object anyway, we have the freedom to define it elsewhere and export it to the React file that'll use it
- This separates the CSS from our react component, which you may want sometimes

seperato.js

```js
export const styles = {
  // Theme mapping = none (make it equal whatever u want)
  width: "70vw",
  // Theme mapping related to theme object
  backgroundColor: "primary.main", // a theme color
  color: "#FFFFFF", // a regular color
  m: 1, // 8px margin all around
  pl: 3, // 24px padding left
  fontSize: "48px", // we choose our own value to use
};
```

pages/Home.js

```react
import { styles } from "./seperato";

export default function Home() {
  return <Box sx={styles}>hh</Box>;
}
```



### Media Queries & Accessing theme object with sx

If you need to style for non idle states, you'll have to 

#### Media Queries + Accessing the Object

To work with media queries based on MUI breakpoints, you'll have to access the theme object
You're free to use the object's values to help style other things as well

HOW SX LOOKS WHEN YOU DON'T NEED THEME OBJECT:
All you need to feed `sx={ }` is an object

```react
	  <Button
        variant="contained"
        sx={width: '400px'}
      >
        Hiya!
      </Button>
```

HOW SX LOOKS WHEN YOU NEED THEME OBJECT
Feed `sx={ }` a function that returns an object instead
This'll happen anytime you use media queries involving MUI breakpoints

```react
	  <Button
        variant="contained"
        sx={(theme) => {
          console.log(theme) // log the theme object to help visualize my claims
          return ({
            width: '400px',
            [theme.breakpoints.up("md")]: {
              color: "black",
            },
          })
        }}
      >
        Hiya!
      </Button>
/*You may want to define sx's function elsewhere since this clutters the JSX a ton*/
```

![image-20220107031704558](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220107031704558.png) ![image-20220107032433430](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220107032433430.png)

![image-20220107031403129](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220107031403129.png)

#### Non idle States

As long as you write your CSS in JS, you can style for non idle states using sx

```react
      <Button
        variant="contained"
        sx={{
          "&:hover": {
            color: "black",
          },
        }}
      >
        Hiya!
      </Button>
```

![image-20220107032659370](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220107032659370.png) ![image-20220107032711865](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220107032711865.png)

ONE CAVEAT TO KEEP IN MIND:
Remember, MUI doesn't support all CSS pseudo-classes

- Whenever they don't, you'll have to use a state class- all of which are listed [here](https://mui.com/customization/how-to-customize/#:~:text=you%20can%20rely%20on%20the%20following%20global%20class%20names%20generated%20by%20mui%3A)
- We learned about state-classes in the "Reusable Style Overrides" chapter
  Check out that lesson if you need a review. 

#### Fast Access

There are some properties you can style with sx that don't require you to use a function

- For example, you can adjust margin and padding using integers that'll automatically reference the theme object. 
- A value of 1 for margin or padding= 8px

EXAMPLE: Margin right 8px

```react
<ArrowDropDownIcon sx={{mr:1}}/>
```



### JS Mixins- hideBefore / hideAfter

You can create JS files that harbor objects with certain sets of styles you intend on reusing
Dump them in your sx styling objects using the spread operator

#### Demo

If you look inside the JS file with the mixins inside, you'll notice the KVP's inside the main mix object are what hold the stylings

- You can code styles for other pseudo selector states live `:hover` 
- Can also create conditional mixins by making a function that returns an object instead, through the use of a parameter

styleMixins.js

```js
export const mix = {
  flexRow: {
    display: "flex",
    alignItems: "center",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  hoverShadow: {
    // Can use pseudo selectors as well
    "&:hover": {
      boxShadow: `rgba(28, 28, 28, 0.08) 0px 4px 8px`,
    },
  },
  // We're using a consistent margin size for distancing our components
  regMargin: (side) => {
    const marginMagnitude = "1.0rem";
    if (side === "m") return { margin: marginMagnitude };
    if (side === "mt") return { marginTop: marginMagnitude };
    if (side === "mb") return { marginBottom: marginMagnitude };
    if (side === "ml") return { marginLeft: marginMagnitude };
    if (side === "mr") return { marginRight: marginMagnitude };
    if (side === "mx") return { marginInline: marginMagnitude };
    if (side === "my") return { marginBlock: marginMagnitude };
    if (side === "!top") {
      return {
        marginInline: marginMagnitude,
        marginBottom: marginMagnitude,
      };
    }
    if (side === "!bottom") {
      return {
        marginInline: marginMagnitude,
        marginTop: marginMagnitude,
      };
    }
  },
}
```

In React files using MUI
(this works with inline sx or sx whose content is outside the JSX)

```REACT
		  <Box sx={{ ...mix.flexRow, ...mix.regMargin("mb") }}>
            <Typography color="secondary" variant="h3" sx={{ fontWeight: 600 }}>
              Location Permissions Denied
            </Typography>
          </Box>
```

#### hideBefore / hideAfter 

With this reusable mixin, you can make it so elements disappear before or after a certain breakpoint
This breakpoint is set using inline JSX and can equal anything

styleMixins.js

```js
export const mix = {
  hideAfter: (breakpoint) => {
    return {
      [`@media (min-width: ${breakpoint}px)`]: {
        display: "none",
      },
    };
  },
  hideBefore: (breakpoint) => {
    return {
      display: "none",
      [`@media (min-width: ${breakpoint}px)`]: {
        display: "block",
      },
    };
  },
}
```

React file

```react
<Box sx={{...mix.hideBefore(400)}}></Box>
```

#### hideBeforeBP / hideAfterBP

Same as the mixin from the previous subsection, with 1 difference- it uses default theme object BP's to decide when to show and hide components instead of hardcoded pixel values

Mixin file

```react
export const mix = {
  hideAfterBP: (BPname, theme) => {
    return {
      [theme.breakpoints.up(BPname)]: { display: "none" },
    };
  },
  hideBeforeBP: (BPname, theme) => {
    return {
      [theme.breakpoints.down(BPname)]: { display: "none" },
    };
  },
}
```

React page file

```react
<Box sx={(theme) => {
    return {...mix.hideAfterBP("sm", theme) }    
}}></Box>
```



### Unauthorized Styling

MUI provides default options for styling components, but sometimes we still want to customize them further

#### Demo

This is the largest size MUI offers for the rating component, but we want the stars bigger

![image-20220218165354940](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220218165354940.png)

PROCEDURE:

1. Check the component API page to see if they have a default opion for what you're trying to do
   In this case, we can enlarge our stars, just not enough

![image-20220218165718492](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220218165718492.png)

2. Examine this element using the dev tools

- Try adjusting CSS values until you find one that makes the component's stars change size
- We had an inkling that fontSize would do it since the API page for Rating components will enlarge the stars using a size prop

![image-20220218165550850](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220218165550850.png)

3. Use sx styling to put your changes in motion

```react
    <Stack spacing={1}>
      <Rating
        name="half-rating"
        defaultValue={0}
        precision={0.5}
        sx={{
          "span.MuiRating-decimal" : {
            fontSize: "40px"
          }
        }}
      />
    </Stack>
```

![image-20220218165932570](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220218165932570.png)

### Advice

#### List of Tips

1. You can specify pixels with integers when styling with sx

```react
sx={{width: 50, height: 50}}
// same as ...
sx={{width: "50px", height: "50px"}}
```



# Reusable style Overrides: styled()

PREREQUISITE SKILLS:
Before we can create custom styled MUI components that we can reuse across our projects, we need to learn a few things first



### Pre-req 1: Targeting MUI component class names

#### How many Elements Generated?

MUI components can either produce one HTML element, or multiple in some cases

EXAMPLE 1: 
An unstyled typography tag will produce a single `<p>` element 

```react
<Typography>Read only</Typography>
```

![image-20220106015216417](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220106015216417.png)

EXAMPLE 2:
A Rating tag produces multiple elements (it's a more complex web-feature)

```react
<Rating name="read-only" readOnly />
```

![image-20220106015601314](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220106015601314.png)

WHY IS THIS RELEVANT?

- There will be times when MUI does not provide a default way to style a component the way you want
- Complex component styling may require you to target specific elements using their class names

#### Targeting Class Names

MUI applies global class names to its components using a consistent formula:

```
GLOBAL DOM CLASS: (inspect component in dev tools)
[hash]-Mui[Component name]-[slot name]

CLASS TO TARGET IN CSS:
Mui[Component name]-[slot name]
```

PROCEDURE

1. Inspect an MUI element using the dev tools, then extract `[Component name]-[slot name]`
2. Build your targetable class using what I just mentioned above
3. Style MUI components with that, after you understand state classes and the 1 rule to never break
   (Read the next 2 subsections)

LAST RESORT: 
Sometimes you'll have trouble finding what the exact class name you should target is

- Go into the MUI components' API page then head down to the CSS section
- They have a chart filled with Global classes. One of them will be the one you're looking for

Test them one by one when styling the component with sx to see if it changes something
The description will give hints as to what that class targets- some will obviously not be what you need

![image-20220106020525263](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220106020525263.png)

#### Challenge

We have an MUI rating component set up

- It produces the row of stars, not the "Controlled" text
- We inspected the MUI component using dev tools and found out it produces multiple elements, as you can see in the image below

GOAL:
Make the stars much larger, but do so by targeting the correct global class and styling it with sx

![image-20220106021656881](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220106021656881.png) <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220106015601314.png" alt="image-20220106015601314" style="zoom: 80%;" />

We've set up our Rating component so that targeting the correct class name will result in bigger stars

pages/Home.js

```react
import { Typography, Stack, Rating } from "@mui/material";

export default function Home() {
  return (
    <Stack sx={{ width: "100vw" }} alignItems="center">
      <Typography component="legend" sx={{ m: 3 }}>
        Controlled
      </Typography>
      <Rating
        name="simple-controlled"
        sx={{
          width: "100vw",       
          "& .CORRECT-CLASS-HERE": {
            fontSize: "6rem",
          },
              
        }}
      />
    </Stack>
  );
}
```

#### Solution + Thought Process

OUR EXACT STEPS FOR FINDING OUR TARGETABLE CLASS:

1. Inspect the star in the dev tools, and see if the class produced on hover is what we're looking for
   FYI, it wasn't

> ![image-20220106022839481](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220106022839481.png)
>
> ATTEMPT 1: 
> DOM class:  [hash]-Mui[Rating]-[label]
> Targetable class: MuiRating-label
>
> Tested it in our sx styling prop, and it did not work

2. Look into the dev tools' Element or Inspector tab

- That last class was attached to a container element holding other elements 
- One of its children must have the class name we're after

> ![image-20220106020914664](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220106020914664.png)

3. Tried styling with .MuiRating-icon and it turned out to be correct

```react
      <Rating
        name="simple-controlled"
        sx={{
          "& .MuiRating-icon": {
            fontSize: "6rem",
          },
        }}
      />
```

![image-20220106023543158](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220106023543158.png)

#### Sources 

> Useful article: 
> https://react.school/material-ui/styling
>
> Official docs explanation for this lesson: (not descriptive enough)
> https://mui.com/customization/how-to-customize/#overriding-nested-component-styles



### Pre-req 2: MUI state classes

In the previous lesson we learned how to target elements using MUI global classes
This helps you edit the CSS of MUI components when they're left idle.

What if you wanted to style elements when they're in certain states?
Ex. Hovered over, focused, disabled, selected...etc

#### What are they?

In order to style MUI components via global classes when they're in these states, you need 1 of 2 things

1. A regular CSS pseudo-class

```css
.Button:disabled {
  color: white;
}
/* But sometimes, you can't use a CSS pseudo-class, 
The state may not exist in the MUI web specifications. Resort to #2 in this case */
```

2. An MUI custom state class- MUI's pseudo-class equivalent 

![image-20220106035411445](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220106035411445.png) ![image-20220106035427126](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220106035427126.png)

#### Major rule for state classes

You must never style these pseudo classes directly under any circumstances
Make sure that if you use them, you connect them to a specific MUI component

> ![image-20220106035601022](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220106035601022.png)
>
> We learned about how to get Global classes like .MuiOutlinedInput-root in the previous lesson

#### Links

> State class subsection in docs (find a list of all of them [here](https://mui.com/customization/how-to-customize/#:~:text=you%20can%20rely%20on%20the%20following%20global%20class%20names%20generated%20by%20mui%3A))
> https://mui.com/customization/how-to-customize/#state-classes



### Reusable Custom MUI Components

#### Challenge Description

Create this unconventional-looking slider

When Idle:			 ![image-20220106194755322](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220106194755322.png) 								

On hover:			  ![image-20220106195946035](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220106195946035.png) 

When active or focus-visible:  ![image-20220106194806967](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220106194806967.png)

SPECIFIC STYLING WANTS:

1. Width as 20vw, and the color should use the main shade from the color palette's secondary object

2. On hover, the thumb part of the slider should show a medium shadow
   Color this shadow a transparent black
3. When active or focus-visible, the shadow should be bigger

#### Solution

READ THIS FIRST

- Keep in mind that we place the CustomSlider variable outside of the main component function, to keep things looking simple
- If we placed it inside, we might be able to customize its appearance using props 
  (haven't tested it yet)

custom-components/CustomSlider.js

```REACT
import React from "react";
//   prettier-ignore
import { styled, experimental_sx as sx} from '@mui/system';
import { Slider } from "@mui/material"; // WILL PUT INTO THE STYLED FUNCTION

const ModdedSlider = styled(Slider)(({ theme }) => {
  // Place JS logic here, if you need it
  return {
    // style changes when idle
    width: "20vw",
    color: theme.palette.warning.main, // path to a color in the theme object
    // style changes when in certain states
    "& .MuiSlider-thumb": {
      // Regular pseudo class
      "&:hover": {
        boxShadow: `0px 0px 0px 14px rgba(0,0,0,0.1)`,
      },
      // MUI state classes
      "&.Mui-focusVisible, &.Mui-active": {
        boxShadow: `0px 0px 0px 28px rgba(0,0,0,0.1)`,
      },
    },
    // MEDIA QUERY: regular viewport width
    // No real purpose for this color change- just tossing in media queries 
    [theme.breakpoints.only("780px")]: {
      color: "red",
    },
  };
});

export default function CustomSlider(props) {
  //  sx styling only works on this slider in here, not where its called
  return (
    <ModdedSlider
      defaultValue={50}
      aria-label="Default"
      valueLabelDisplay="auto"
      sx={{ mt: 5 }}
    />
  );
}
```

pages/Home.js

```react
import CustomSlider from "../custom-components/CustomSlider";
export default function Home() {
  return <CustomSlider />
}
```

#### Styling differences compared to sx

1. Using styled() does not let you use shortcuts like `mb` for margin-bottom (sx only)
2. Style definitions vary slightly

![image-20220106214851941](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220106214851941.png) ![image-20220106214902466](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220106214902466.png)

#### Using sx instead of styled()

You can perform the same operations using sx styling instead of styled() if you want. 
Personally, I haven't figured out how it works yet

> LINKS:
> https://mui.com/system/styled/#how-can-i-use-the-sx-syntax-with-the-styled-utility
> https://mui.com/system/styled/#sx-provides-more-shortcuts-than-styled



### Reusable Custom Primitive Elements with MUI styles

#### Why bother?

- You can take primitive elements like `<button>` or `<div>` for example, then create customized versions of them using MUI's theme object
- This way, editing the theme object will also dynamically change the appearance of these custom elements as well

#### Procedure

The procedure is the exact same as the one shown in the previous lesson's example, with one key difference

- Instead of feeding an MUI component into the styled() argument, feed a regular element instead
- You'll have the same options as if you were customizing an MUI component instead

Custom MUI component:

![image-20220106212218862](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220106212218862.png)

Custom Primitive Element:

```react
const MyThemeComponent = styled('div')(({ theme }) => ({ ... and so on
```

EXAMPLE:
https://mui.com/system/styled/#using-the-theme

![image-20220106212329723](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220106212329723.png)



# ===== Layouts & Components ====



# Layouts

### Container Component

The container component is the simplest layout component that creates a div that centers itself horizontally on screen

#### Container Max Width

You can set a maxWidth of `xs, sm, md, lg, xl`, which changes the div size

- The container is fluid by default, which means on small screens it will start at 100vw
  As the viewport grows, the container will smoothly grow as well until it reaches maxWidth
- If you use the fixed prop, the width increase won't be smooth- it'll choppily jump from...
  100vw → xs → sm ...etc until maxWidth is reached

![image-20220104163939151](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220104163939151.png)

#### Demo

pages/home.js

```react
import Container from "@mui/material/Container";
export default function Home() {
  return (
    <>
      <h1>Fluid options. Starts @ 100vw then grows smoothly to maxWidth</h1>
      <Container maxWidth="xs" style={{ background: "orange" }}>
        <h2>XS size</h2>
      </Container>
      <Container maxWidth="sm" style={{ background: "orange" }}>
        <h2>SM size</h2>
      </Container>
      <Container maxWidth="md" style={{ background: "orange" }}>
        <h2>MD size</h2>
      </Container>
      <Container maxWidth="lg" style={{ background: "orange" }}>
        <h2>LG size</h2>
      </Container>
      <Container maxWidth="xl" style={{ background: "orange" }}>
        <h2>XL size</h2>
      </Container>
      <Container maxWidth="false" style={{ background: "orange" }}>
        <h2>Max width disabled (Defaults to 100vw)</h2>
      </Container>
      <h1>
        Not fluid. Starts at 100vw, then choppily grows to sm, then md...etc
      </h1>
      <Container fixed maxWidth="md" style={{ background: "orange" }}>
        <h2>
          Non fluid. Maxes out at the md length if space allows.
          <br />
          Can use other maxWidth values as well
        </h2>
      </Container>
    </>
  );
}
```

VIDEO: https://giphy.com/gifs/5QYM4rKUwEThPi8s8r

#### Doc Links

Import line

```js
import Container from "@mui/material/Container";
```

Docs

> Component: https://mui.com/components/container/#main-content
> API: https://mui.com/api/container/

Tutorial

> https://www.youtube.com/watch?v=KffOAs_7lAU&ab_channel=CodeStepByStep



### Stack Component

#### What it does

The stack component produces a wrapper element which manages a layout in 1 direction 

- Stack will space elements apart in the y-direction by default
  You can change this to the x direction using the `direction` prop
- MUI provides options for adding divider lines, adjusting the default spacing between child elements, and even offers flex-box esque features
- You can move the "stack-items" using CSS properties seen in Flexbox
  Test out these properties and get the code to apply theme [here](https://mui.com/components/stack/#interactive)

![image-20220104222655609](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220104222655609.png)

#### Demo

```react
import { Stack } from "@mui/material";
export default function Home() {
  const smallBorder= {border: '2px solid black'}
  return (
    <>
      <Stack alignItems="center">
        <p style={smallBorder}>Item 1</p>
        <p style={smallBorder}>Item 2</p>
        <p style={smallBorder}>Item 3</p>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={4}>
        <p style={smallBorder}>Item 1</p>
        <p style={smallBorder}>Item 2</p>
        <p style={smallBorder}>Item 3</p>
      </Stack>
    </>
  );
}
```

![image-20220105002209343](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220105002209343.png)

#### Doc Links

Import line

```
import Stack from '@mui/material/Stack';
```

Docs

> Component: https://mui.com/components/stack/
> API: https://mui.com/api/stack/

Relevant part of API

![image-20220105002354128](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220105002354128.png)



### MUI Grid System (not learned)

MUI has its own grid system based on flexbox that helps you create layouts
Feel free to use it or even regular CSS grid since the 2 don't interfere with each other at all



### MUI with Regular CSS Grid 

You're free to use typical CSS grid to create your webpage layouts if you prefer it over MUI

#### Differences

CSS Grid in MUI projects isn't much different than with regular CSS. 
You just apply what you already know in a different way

1. Use MUI components like `<Box>` to produce a parent container

- You need to be able to style with MUI, and you can't using primitive elements
- Fortunately, you can make divs, sections, or any other kind of element using `<Box>`

2. Add the same CSS Grid code you would normally use, just in a JS object instead

#### Template Areas

> OBJECTIVE 																  RESULT:
>
> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211124210506912.png" alt="image-20211124210506912" style="zoom: 62%;" /> 				 ![image-20220108030246813](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220108030246813.png)

pages/Home.js

```react
import { Box, Container } from "@mui/material";

const styles = {
  container: {
    display: "grid",
    padding: '30px',
    gridTemplateRows: "repeat(8, 1fr)",
    gridTemplateColumns: "repeat(3, 1fr)",
    // Create an 8x3 grid & use template areas to keep our inline sx styling short
    gridTemplateAreas: `
    "a1 a2 a2"
    "a1 a2 a2"
    "a3 a2 a2"
    "a3 a4 a5"
    "a6 a6 a5"
    "a6 a6 a5"
    "a7 a7 a8"
    "a7 a7 a8"`,
    height: "400px",
    width:"400px",
    textAlign: "center",
    backgroundColor: "#DEDEDE",
    gap: "10px"
  }
};

export default function Home() {
  return (
    <Container sx={styles.container}>
      <Box sx={{ bgcolor: "lime", gridArea: "a1" }}>1</Box>
      <Box sx={{ bgcolor: "#4998e4", gridArea: "a2" }}>2</Box>
      <Box sx={{ bgcolor: "lime", gridArea: "a3" }}>3</Box>
      <Box sx={{ bgcolor: "#4998e4", gridArea: "a4" }}>4</Box>
      <Box sx={{ bgcolor: "lime", gridArea: "a5" }}>5</Box>
      <Box sx={{ bgcolor: "#4998e4", gridArea: "a6" }}>6</Box>
      <Box sx={{ bgcolor: "lime", gridArea: "a7" }}>7</Box>
      <Box sx={{ bgcolor: "#4998e4", gridArea: "a8" }}>8</Box>
    </Container>
  );
}
```

#### Grid Lines

Works as normal, but you must remember to surround the numbers by quotation marks

```react
sx={{ bgcolor: "lime", gridRow: "1 / 3", gridColumn: "1 / 2" }}
```

#### Doc Links

> MUI + Regular CSS Grid: 
> https://mui.com/system/grid/#grid-template-areas



### Masonry CSS (unfinished)

#### The Need for Masonry Layouts

When we have grid layouts, sometimes we'll have grid items that extend further than others which ends up creating additional unrequired space for other items in that row

![image-20220302203857384](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220302203857384.png)

Masonry CSS is a package that allows us to create layouts like this:

![image-20220302204049528](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220302204049528.png)

#### Procedure

1. Install the package

```
npm install react-masonry-css
```

2. 

#### Docs

> Tutorial: [Material UI Tutorial #18 - React Masonry CSS (masonry layout) - YouTube](https://www.youtube.com/watch?v=PLzx2thLQaU)
> Good stuff @ 3:30
>
> Package docs:
> [react-masonry-css - npm (npmjs.com)](https://www.npmjs.com/package/react-masonry-css)

# Components



### Typography

When using MUI, you won't need to use text-based tags like `<p> <h1>`... etc
Instead, you'll be using the Typography component

#### Variant & Component Props

MUI styles JSX elements using props. 
When it comes to typography, we'll be using the variant and component props

VARIANT:
What the typography element will be styled like

- If `variant="h3"`, the typography element will be styled like an `<h3>`
- If there is no specified component prop, the JSX produced my MUI will automatically be an `<h3>`

COMPONENT:
The JSX produced from the typography element

- If `component="h5"`, then JSX produced from the typography element will be an `<h5>`
- If `variant="h3"` and `component="h4"`, the result will be an `<h4>` tag styled like an `<h3>`

ALL VARIANT POSSIBILITIES: (set to body1 if unspecified)

![image-20220101182840082](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220101182840082.png)	![image-20220101182848373](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220101182848373.png)

#### Typography tags

The default JSX element produced when you use `<Typography>` is the simple `<p>` tag

EXAMPLE 1: Style a red h1 styled like an h5

```REACT
  <div>
      <Typography variant="h5" component="h1" color="secondary" align="center">
        An h1 that appears like an h5
      </Typography> {/* we are using theme colors to color the header */}
      <Typography>
        My default state is a paragraph. Insert random para here
      </Typography>
  </div>
```

![image-20220101181728573](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220101181728573.png)



#### Wrapping, Coloring, Truncation...

EXAMPLE 2: Truncate the paragraph so it doesn't wrap. Let it trail off with ellipses

```react
    <div>
      <Typography variant="h5" component="h1" color="secondary" align="center">
        An h1 that appears like an h5
      </Typography>
      <Typography noWrap>
        Same paragraph as before
      </Typography>
    </div>
```

![image-20220101182555808](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220101182555808.png)

#### Doc Links

Import line

```js
import Typography from '@mui/material/Typography';
```

Docs:

> v4 section: https://mui.com/components/typography/#main-content
> API: https://mui.com/api/typography/

MAIN OPTIONS:

Color: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220101183742284.png" alt="image-20220101183742284" style="zoom:67%;" /> 		Text-align: ![image-20220102015006376](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102015006376.png)

### Material Icons

BEFORE WE BEGIN:
You need to install the MUI icons library to use it- since it's not part of the core package as of v4

```
npm install @mui/icons-material				// pick one
yarn add @mui/icons-material
```

#### Importing Icons Procedure

1. Browse all available icons [here](https://mui.com/components/material-icons/)

- You have several options for how you want the icon to look (filled, outlined..etc)
- Once you decide, click on it and copy the import line so you can use it in your JS files

2. Paste the import line into your JS file, then use it as a regular JSX component
3. Feel free to style it using props

#### Styling Icons: Size / Color

- By default, you're restricted to using MUI's palette colors when it comes to decorating the icons
- MUI provides 4 pre-set sizes for icons

EXAMPLE: 

```react
import { Button, Container } from '@mui/material';
import AddBoxIcon from "@material-ui/icons/AddBox";

export default function Notes() {
  return (
    <Container>
      <AddBoxIcon fontSize="large" color='error'/>
      <AddBoxIcon fontSize="medium" color='secondary'/>
      <AddBoxIcon fontSize="small" color='primary'/>
    </Container>
  );
}
```

![image-20220102013726354](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102013726354.png)

#### Doc Links

> Component: https://mui.com/components/icons/#main-content
> API: https://mui.com/api/icon/
> Icon Library:  https://mui.com/components/material-icons/

MAIN OPTIONS:		 ![image-20220102014726691](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102014726691.png) ![image-20220102014741553](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102014741553.png)



### 3rd Party SVG's 

I came up with this way of implementing SVG's into React myself

#### Procedure

1. Create a react component in a separate file that returns the SVG you want to display

- Make sure you can feed prop values to decide on a color, width, and height
- Remember to only specify width OR height to maintain the aspect ratio

2. Import it to your React page file then use it in the JSX

ONE MINOR ISSUE WITH SOME SVG's:

- Some SVG's have maximum dimensions that don't let them grow larger just by adjusting width/height- that'll just increase the container dimensions. 
- Makes no sense because SVG's are supposedly scalable, but hey... whatever

#### Demo

Instagram.js

```react
import React from "react";

export default function Building(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-100.7682 -167.947 873.3244 1007.682"
      width={props.width || ""}
      height={props.height || ""}
    >
      <g fill="#100f0d">
        <path fill={props.color || "black"} d="M335.895 />
        <path fill={props.color || "black"} d="M335.895 />
      </g>
    </svg>
  );
}
```

react page file

```react
import Building from "../svgs/Instagram";
export default function Notes() {
  return (
    <>
      <Instagram color={"blue"} width={"240px"} />
    </>
  );
}
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102030928186.png" alt="image-20220102030928186" style="zoom:50%;" />



### Buttons

#### Types

MUI lets you build several kinds of buttons that each have distinct appearances, hover effects, press animations, customization options... etc (only a few shown here)

![image-20220101202215994](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220101202215994.png)

You have the freedom to customize these buttons or even create elaborate "complex" buttons as well, using the ButtonBase tool MUI provides

![image-20220101202419390](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220101202419390.png)

#### Examples & Sizing

EXAMPLE 1: Create regular buttons

```react
<Button variant="contained" color="primary" disableElevation>
	Disabled elevation/ drop shadow
</Button>
<Button variant="outlined">
	Outlined button
</Button>
```

![image-20220101210551971](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220101210551971.png)

EXAMPLE 2: 
Create 3 buttons, but choose between the 3 sizes MUI offers
Keep in mind there's no difference between a medium size and the default size buttons

```react
      <Button variant="outlined" size="small">
        Small Outlined button
      </Button>
      <Button variant="outlined" size="medium">
        Medium Outlined button
      </Button>
      <Button variant="outlined" size="large">
        Large Outlined button
      </Button>
```

![image-20220101211442266](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220101211442266.png)

#### Icon Buttons

MUI provides a streamlined way to implement its icons into button components

ICON-ONLY BUTTONS: [docs](https://mui.com/components/buttons/#icon-button)
Place an icon tag inside an `<IconButton>` container

```react
<IconButton aria-label="bookmark">
    <BookmarkIcon fontSize="large" color='primary'/>
</IconButton>
```

LABELLED ICON-BUTTONS:

```react
      <Button variant="outlined" color="secondary" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" color="primary" endIcon={<SendIcon />}>
        Send
      </Button>
```

![image-20220102022026422](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102022026422.png)

#### Button Groups

You can use MUI to style button groups

- They are buttons all bunched into a `<ButtonGroup>` element that get styled differently than if regular buttons were nested inside an element normally
- They can go horizontal, vertical, or even have different applications like a drop down menu

![image-20220101212121468](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220101212121468.png)

#### Doc Links

Buttons:

> Component: https://mui.com/components/buttons/#main-content
> API:  https://mui.com/api/button/#main-content

Button Groups:

> Component: https://mui.com/components/button-group/#main-content
> API: https://mui.com/api/button-group/

MAIN OPTIONS FOR BUTTONS:

![image-20220102022133441](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102022133441.png)

![image-20220102022209087](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102022209087.png)

![image-20220102022229883](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102022229883.png)



### Text Fields: < Input > **

Its important to know what styling options we have for text fields
They're key to building forms that convey information in a clear manner

#### Relevant Props

| PROP         | WHAT IT DOES TO THE INPUT FIELD                              | VALUE  |
| ------------ | ------------------------------------------------------------ | ------ |
| error        | turns the field and its associated text red                  | bool   |
| helperText   | places small text right below it                             | string |
| label        | places small text inside the input field but on the upper left side only<br />(looks a bit different depending on the variant value) | string |
| defaultValue | adds placeholder text                                        | string |

![image-20220103181842654](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220103181842654.png)

#### No Animation Inputs

Maybe you don't want the input field's label text to animate itself moving to the upper left when you focus the input

In this case, use an unstyled input field instead

```react
import React, { useState, useRef } from "react";
import StaticInputField from "../src/custom-components/StaticInputField";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";

export default function UseFormControl() {
  const inputRef = useRef(); // access field value with inputRef.current.value
  return (
    <>
      <FormControl sx={styles.formControl}>
        <Typography align="left" variant="label">
          User Email:
        </Typography>
        <OutlinedInput inputRef={emailRef} placeholder="name@email.com" />
      </FormControl>

      <FormControl sx={styles.formControl}>
        <Typography align="left" variant="label">
          Password:
        </Typography>
        <OutlinedInput
          inputRef={passwordRef}
          placeholder="Enter password"
          type="password"
        />
      </FormControl>
    </>
  );
}
```

![image-20220131140940603](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220131140940603.png)

#### inputProps

There's a specific prop you can place onto `<TextField>`, `<OutlinedInput>`, `<InputBase>`, and possibly more elements to help assist with customization

- Each of these MUI components create regular HTML elements, and the `inputProps` prop lets you add attributes to the `<input/>` element created by them
- You can apply any attribute typically seen in HTML

EXAMPLE: Blur input field when user hits enter

- It's good UX to have the enter key unfocus the input field the user is currently typing in
- On mobile, removing focus from an input field will close the mobile keyboard, freeing up screen space

```react
          // Earlier in the React component
		  const blurInputField = {
  			onKeyPress: function (e) {
    		  if (e.key == "Enter") e.target.blur();
            }
  		  }

		  // in JSX
		  <TextField
            label={`Enter code (required)`}
            inputProps={blurInputField}
          />
```



### DIRECTORY

#### Features List

| Site Feature                                | MUI component name  | Doc Link                                        |
| ------------------------------------------- | ------------------- | ----------------------------------------------- |
| Modal                                       | Dialog              | https://mui.com/components/dialogs/             |
| Horizontal/Vertical Divider                 | Divider             | https://mui.com/components/dividers/            |
| Loading Spinner                             | Progress            | https://mui.com/components/progress/            |
| Checkbox lists, scrolling menus             | List                | https://mui.com/components/lists/#main-content  |
| Backdrop                                    | Backdrop            | https://mui.com/components/backdrop/            |
| Do something after you click off an element | Click away listener | https://mui.com/components/click-away-listener/ |
|                                             |                     |                                                 |
|                                             |                     |                                                 |
|                                             |                     |                                                 |
|                                             |                     |                                                 |
|                                             |                     |                                                 |
|                                             |                     |                                                 |
|                                             |                     |                                                 |
|                                             |                     |                                                 |
|                                             |                     |                                                 |
|                                             |                     |                                                 |
|                                             |                     |                                                 |
|                                             |                     |                                                 |
|                                             |                     |                                                 |
|                                             |                     |                                                 |
|                                             |                     |                                                 |
|                                             |                     |                                                 |
|                                             |                     |                                                 |
|                                             |                     |                                                 |
|                                             |                     |                                                 |
|                                             |                     |                                                 |
|                                             |                     |                                                 |
|                                             |                     |                                                 |
|                                             |                     |                                                 |

### New Features you've never Seen

#### App Bar (Navbar in MUI)

![image-20220129145954797](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220129145954797.png)

Also check out:
https://mui.com/components/tabs/#nav-tabs

#### Drawer (sliding nav)

![image-20220129150254986](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220129150254986.png)

#### Breadcrumbs

#### Skeleton- for lazy loading

Creates a skeleton outline for the content that hasn't yet loaded
Is better than rendering nothing- and eases frustration by indicating progress

![image-20220110191026686](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220110191026686.png)

#### Snackbar- Mini Notifications

Produce a simple notification that disappears after a few seconds

![image-20220110191157953](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220110191157953.png)

#### Menu- Drop down menus with animation

> https://mui.com/components/menus/#selected-menu

Hit dashboard to make the following unordered list appear

![image-20220111042723639](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220111042723639.png)

#### Select- Drop down menu with preselected options

Excellent for forms

![image-20220116033225020](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220116033225020.png)

#### Radio Buttons- Select one in List

![image-20220123091354875](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220123091354875.png)

#### Chips: Rounded Button-like Components

![image-20220126164215273](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220126164215273.png) ![image-20220126164231274](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220126164231274.png)

![image-20220126164257428](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220126164257428.png)

#### Badges- Ex. Icon with # of notifs

![image-20220126164359499](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220126164359499.png)

#### Alerts- Render UI messages with colors

![image-20220126164543671](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220126164543671.png)

#### Tooltip- Hover text

Hovering over components will render a message near your cursor

![image-20220126164945157](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220126164945157.png)

#### Navbars



### Customized Components (ongoing)

#### MUI Treasury

People sometimes upload their own custom components so other people can use them
https://mui-treasury.com/components/



# Personal Custom Components

### Conditional line break 

Create a `<br/>` that appears or disappears before/after a certain breakpoint that you can specify right away using inline styling

ConditionalBreak.js

```react
import React from "react";
import { Box } from "@mui/material";
export const breakBefore = function (pxBreakpoint) {
  return (
    <Box
      component="br"
      sx={{
        [`@media (min-width: ${pxBreakpoint}px)`]: {
          display: "none",
        },
      }}
    />
  );
};
export const breakAfter = (pxBreakpoint) => {
  return (
    <Box
      component="br"
      sx={{
        display: "none",
        [`@media (min-width: ${pxBreakpoint}px)`]: {
          display: "block",
        },
      }}
    />
  );
};

```

### Layout Container

If you have a website where the main content is centered and you have nothing on the sides, reuse this component whenever you get the chance

- This container spans 100vw on mobile screens, but applies some L/R margins
- It then caps at a certain size on larger screens (1200 in this case, but you can adjust it)

![image-20220125104817044](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220125104817044.png)

![image-20220125104708126](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220125104708126.png)

LayoutContainer.js

```react
import React from "react";
import { Container, Box } from "@mui/material";
import { mix } from "../../styles/styleMixins";

function LayoutContainer(props) {
  // This will have 16px inline padding on mobile screens
  // On desktop screens, the main content will max out at 1200px (padding will still be there but not affect much)
  // The point of having a parent Box set to 100vw is so we can apply a background color across the entire viewport
  return (
    <Box
      sx={{
        width: "100vw",
        background: props.bg || "white",
      }}
    >
      <Box
        sx={{
          width: "100%",
    	  maxWidth: "1232px", // 1200 after padding
    	  margin: "auto",
    	  paddingInline: "1rem", // shaves 16px per left and right side
          marginTop: props.marginAbove || "0px",
          px: 0,
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default LayoutContainer;
```



# ====== ONLY IF NECESSARY ====== 

# Styling Class-based React: createStyles()

MUI was around before React hooks became the default way to create components. 
MUI can style class based components using the createStyles() hook

https://www.youtube.com/watch?v=aKwrocqk0Kc&list=PL33SAjAaBtxnwqPmrfTiJO5rPKC2MlIZN&index=9

# Legacy Styling



### Custom CSS in v4: makeStyles Hook

When working with MUI, we have plenty of premade styling options available for each component
If you want to override certain aspects of the styling, use the makeStyles hook

#### Demo & Explanation

React page file:

```react
import React from "react";
import { Button, makeStyles } from "@material-ui/core"; // 1. Import makeStyles

// 2. Declare a function that calls the makeStyles hook
const useStyles = makeStyles({
  // Object parameter. keys=classNames + applied CSS styles must be in camelCase
  btn: {
    fontSize: 30, // another way to adjust size would be width or height
    backgroundColor: "pink",
    // Can apply pseudo selectors too
    "&:hover": {
      backgroundColor: "purple",
    },
  },
});

export default function Notes() {
  const classes = useStyles(); // 3. Initialize the makeStyles function
  // 4. Use the classes you set up in your JSX
  return (
    <Button variant="contained" color="primary" className={classes.btn}>
      SECONDARY BUTTON
    </Button>
  );
}
```

Certainly not a default option: ![image-20220102193855046](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102193855046.png)

Keep in mind that whatever MUI styles you didn't override will still be in effect
Ex. With the button above we still have shadows applied and the ripple effects are active

#### Using Default Theme Object Values in your Classes

You can incorporate values from the default theme into your classes

- Reference them directly by using the theme argument in the makeStyles hook
  Don't copy paste them from the default `theme` object in the docs
- You change your use of the makeStyles hook a bit
  Now, you place a function inside with a theme parameter that returns an object full of CSS styles

EXAMPLE: 	

1. Apply the default theme object border radius X 8 
2. Apply the default theme object padding X 3

Check the docs:       ![image-20220102221338473](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102221338473.png)

React page file

```react
const useStyles = makeStyles((theme) => {
  return {
    btn: {
      fontSize: 30,
      backgroundColor: "pink",
      // Apply the default_borderRadius X 8, and the default padding X 5
      borderRadius: theme.shape.borderRadius * 8,
      padding: theme.spacing(5), // x5 looks different b/c spacing= f e() in docs
      "&:hover": {
        backgroundColor: "red",
      },
    },
  };
});

export default function Notes() {
  const classes = useStyles();
  return (
    <>
      <Button variant="contained" color="primary">
        Primary button
      </Button>
      <Button variant="contained" color="secondary" className={classes.btn}>
        Secondary button
      </Button>
    </>
  );
}
```

![image-20220102221505786](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102221505786.png)

#### makeStyles with Parameters

- You can add conditional CSS to the object you return from makeStyles
- Combining this with React props/states means that you can apply classes to several elements, but only add specific styles to those that meet your conditions

EXAMPLE:  https://youtu.be/6BkqRkw0Lwc?list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58&t=270

React page file

```react
// 1. Import makeStyles
import { Button, makeStyles, ThemeProvider } from "@material-ui/core";

// 2. Declare a function that calls the makeStyles hook
const useStyles = makeStyles((theme) => {
  return {
    btn: {
      // These styles get applied to all elements with "btn" class no matter what
      backgroundColor: "pink",
      borderRadius: theme.shape.borderRadius * 8, // default radius X8

      // Apply the fontSize conditionally, based on a prop value
      fontSize: (props) => {
        if (props.num === 10) return 5; 
        else return 28
        // return value can a number or string depending on what we're styling
      }, 
    },
  };
});

export default function Notes(props) {
  // 3. Initialize useStyles with a new variable and then use it in JSX
  const classes = useStyles(props);
  return (
    <>
      <Button variant="contained" color="primary">
        Primary button
      </Button>
      <Button variant="contained" color="secondary" className={classes.btn}>
        Secondary button
      </Button>
    </>
  );
}
```

Since `props.num` equals a falsy due to not existing, the secondary button fontSize is set to 28

![image-20220103002927061](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220103002927061.png)











