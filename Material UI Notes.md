

# Themes & Custom Styling

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

App.js 

```react
// Step 1: Create a new theme
import { createTheme, ThemeProvider } from "@material-ui/core";
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

![image-20220102190214408](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102190214408.png)

3. Wrap ThemeProvider tags around App.js just like in method 1

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

#### Doc Links + Best Methods

PREFERRED METHODS:
With these 2 strats, MUI will do most of the work by selecting dark/light shades while making sure the text colors inside components contrast nicely

1. Method 1 while specifying the main shade only
   Use when you have an exact color you'd like to style with
2. Method 2 
   Use if MUI color objects suffice for what you're making

DOC LINKS:

> Method 1 Color Selector Tool:  
> https://v4.mui.com/customization/color/#playground
>
> Method 2 color objects:  
> https://v4.mui.com/customization/color/#color-palette



### Custom Themes: New Fonts

You can do more than just override default colors in MUI. 
Now, we're going to learn how to apply different Google Fonts

#### Location in the Default Theme Object

Go to the default theme object [here](https://v4.mui.com/customization/default-theme/#explore), and click on the nested typography object
Each typography variant is styled using an object whose KVP's we can edit/override

> ![image-20220102192220410](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102192220410.png) ![image-20220102192249341](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102192249341.png) ![image-20220102192301545](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102192301545.png)

Let's look at how h1 is styled:	 ![image-20220102192530551](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102192530551.png)

#### Apply new Font to all Components

PROCEDURE:

1. Grab the @import line for your desired font in Google Fonts
   There's a slightly different way to do this using `<link>` instead (not explained here)
2. Place the @import line at the top of index.css
3. Use createTheme to create a theme inside App.js, then wrap ThemeProvider tags around all the components inside that file's JSX

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



### Custom Themes with Conditional Logic

You have the ability to create themes while adding conditional logic to set values

- All you have to do is use `createTheme()` inside of the React component function, underneath the values the conditions will be based on

> Remember, createMuiTheme is outdated. Just use createTheme instead
>
> ![image-20220103025822380](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220103025822380.png)



### Dark Mode: Explained

> Source: https://www.youtube.com/watch?v=H_PO_GY4xXU&ab_channel=AnthonySistilli

MUI actually provides 2 default theme object color palettes, not one

- The 2 available palettes are `type: light`  and `type: dark` in v4 (changes in v5)
- The light palette is the default palette that MUI applies, but it can be toggled to dark easily
  Creating a nice looking dark mode requires a bit more customization than that however

#### What enabling Dark Mode does on its own

MUI explains exactly what toggling dark mode on will change [here](https://v4.mui.com/customization/palette/#:~:text=the%20colors%20modified%20by%20the%20palette%20type%20are%20the%20following%3A)

SUMMARY: 
The following colors are altered by toggling dark mode on

- Background color, paper element background color, divider colors
- Text colors and their shades (primary, secondary, and disabled)
  These do NOT refer to the big 7 colors in the palette we use to style all components
- When you toggle the dark theme on, only a few colors actually get changed
  The primary, secondary, error, warning, info, & success colors in the default palette remain the same

> ![image-20220103040213804](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220103040213804.png)

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

#### Objectives

1. Enable dark mode for your application via button press
2. Change palette colors at the same time- stick to primary and secondary for this example
3. Set things up in a way where we can use 3 themes or more (no toggle)

We could incorporate localStorage to remember previously selected theme preferences, but I'll save that for a real project 

> ![image-20220103055948334](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220103055948334.png)
>
> ![image-20220103060005996](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220103060005996.png)

#### Procedure

> Just look at the files in this repo- the pictures above are enough to show what this site does
> https://github.com/Jason2B3/ninja_mui/tree/test-darkmode

------

1. Set up the context API with useState variables 
   Make a theme and a method to change the theme available to all components

state-management/globalContext.js

![image-20220103060317379](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220103060317379.png)

2. Create a component that changes the theme state variable via user inputs

pages/Notes.js

![image-20220103060852671](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220103060852671.png)

3. In App.js or index.js, decide on what theme to use via the stateful variable

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



### Global Overrides (learn if needed)

If configuration variables are not pwoerful enough to customize a component the way you want, then MUI provides a feature that may be able to help

- You can potentially change **every single style** injected by Material-UI into the DOM
- Ex. Disable ripple on every element instead of disabling it on every component individually

Try these links and save em when you're done, please:

https://v4.mui.com/customization/globals/#default-props

https://v4.mui.com/customization/components/

https://www.youtube.com/watch?v=mu8-u7V7Z8s&ab_channel=Headway

Using CSS Modules + MUI (or you can use makeStyles instead)
https://mui.com/styles/advanced/#css-injection-order
https://stackoverflow.com/questions/53065983/can-i-override-material-ui-with-css-modules-in-create-react-app-v2

# Layouts

### MUI Breakpoints & Media Queries

#### Default Breakpoints

Each breakpoint (a key) matches with a fixed screen width in pixels:

| key  | viewport width (px) in v4 | viewport width (px) in v5 |
| ---- | ------------------------- | ------------------------- |
| xs   | 0 - 600                   | 0 - 600                   |
| sm   | 600 - 960                 | 600 - 960                 |
| md   | 960 - 1280                | 960 - 1200                |
| lg   | 1280 - 1920               | 1200 - 1536               |
| xl   | 1920 - infinity           | 1536 - infinity           |

#### Changing Default Breakpoints

The breakpoints are part of the default theme object

- They can be edited by following the same procedure as when you created new color palettes in the "Themes and Custom Stylings" chapter
- You can even choose to give the breakpoints new names altogether

![image-20220103213640872](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220103213640872.png)



#### Media Queries





### Containers & Spacing (return2)

### MUI Grid System

MUI has its own grid system based on flexbox that helps you create layouts
Feel free to use it or even regular CSS grid since the 2 don't interfere with each other at all

### Layout Component

### Masonry CSS



# Components



### Material Icons

BEFORE WE BEGIN:
You need to install the MUI icons library to use it- since it's not part of the core package as of v4

```
npm install @material-ui/icons
yarn add @material-ui/icons
```

#### Importing Icons Procedure

1. Browse all available icons [here](https://v4.mui.com/components/material-icons/#material-icons)

- You have several options for how you want the icon to look (filled, outlined..etc)
- Once you decide, click on it and copy the import line so you can use it in your JS files

2. Paste the import line into your JS file, then use it as a regular JSX component
3. Feel free to style it using props

#### Styling Icons: Size / Color

- By default, you're restricted to using MUI's palette colors when it comes to decorating the icons
- MUI provides 4 pre-set sizes for icons

EXAMPLE:

```react
import { Button, Container } from "@material-ui/core";
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

> v4: https://v4.mui.com/components/icons/#svgicon
> API: https://v4.mui.com/api/icon/
> v4 Icon Library:  https://v4.mui.com/components/material-icons/#material-icons

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

> v4: https://v4.mui.com/components/buttons/
> API:  https://v4.mui.com/api/button/

Button Groups:

> v4: https://v4.mui.com/components/button-group/
> API: https://v4.mui.com/api/button-group/

MAIN OPTIONS FOR BUTTONS:

![image-20220102022133441](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102022133441.png)

![image-20220102022209087](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102022209087.png)

![image-20220102022229883](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220102022229883.png)



### Text Fields: < Input >

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

#### CONTINUE FROM HERE

Use these links, but the v5 versions

https://v4.mui.com/components/text-fields/#components

https://v4.mui.com/api/text-field/

#### Types of Input Fields

#### Demo Project



#### Links

TextField is composed of several subcomponents from MUI
https://v4.mui.com/components/text-fields/#components

Change Focus Color from blue to something else
https://v4.mui.com/components/text-fields/#color

### Radio Buttons

### JSON Server



### Card Component



### Permanent Drawer

### Lists & List-items

### App Bars

### Avatars



# v5 Topics

### List

- makeStyles replacement
  They have a dedicated section for how styling works in v5
- Box component
- sx
- The new breakpoints
- 







