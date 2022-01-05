```

```

# Basics

### Installation

#### Install Procedure

1. Build your initial project with create-react-app, or the Next.js equivalent
2. Go into the project's index.html file in the public folder and add these to the header

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

> Download the zip file off the following branch: `MUI_reactBoiler`
> https://github.com/Jason2B3/mui5_learn/tree/MUI_reactBoiler

CONFIGURED TOOLS: 
They must be applied in the following nesting order within index.js or App.js

1. Context API
2. MUI Theme Provider
3. React Router 

#### MUI with Next (return2)





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



# Themes & Custom Styling

### All Customization Options in v5 **

#### Options List 

> SOURCE:
> https://mui.com/customization/how-to-customize/#1-one-off-customization

We won't likely learn all of these unless we run into scenarios when they're required

1. One-off-customization

- Simplest form of this is to style via the sx prop
- Though there are more ways to target elements than just using the sx prop. 

2. Reusable style overrides
   We create reusable components with the same custom styling 

3. Dynamic Variation (4 ways to implement this in total)

- Just option 2 with the added benefit of making style overrides dynamic
- This means we make our stylings change depending on other factors like state

4. Global CSS Overrides



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

#### In a separate JS File

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





### MUI Breakpoints & Media Queries **

#### Default Breakpoints

Each breakpoint (a key) matches with a fixed screen width in pixels:

| key  | viewport width (px) in v4 | viewport width (px) in v5 |
| ---- | ------------------------- | ------------------------- |
| xs   | 0 - 600                   | 0 - 600                   |
| sm   | 600 - 960                 | 600 - 900                 |
| md   | 960 - 1280                | 900 - 1200                |
| lg   | 1280 - 1920               | 1200 - 1536               |
| xl   | 1920 - infinity           | 1536 - infinity           |

#### Changing Default Breakpoints

The breakpoints are part of the default theme object

- They can be edited by following the same procedure as when you created new color palettes in the "Themes and Custom Stylings" chapter
- You can even choose to give the breakpoints new names altogether

![image-20220103213640872](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220103213640872.png)



#### Media Queries

#### Doc Links

Check out the breakpoints in the default theme object.
Look under `themeObject.breakpoints.values` 

> Default theme object: https://mui.com/customization/default-theme/#main-content
>
> 



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



# Learn More

### New Topics

#### Styling

1. Custom variants
   https://stackoverflow.com/questions/69550535/mui-v5-seperate-styling-from-component-file
2. Learn all 4 main customization options in v5- styled reusable components mainly





