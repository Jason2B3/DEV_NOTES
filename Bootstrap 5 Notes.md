# ======= Bootstrap 5 =======



# Basics

Version 5 docs: 
https://getbootstrap.com/docs/5.0/getting-started/introduction/

### Intro & Setup

#### Implementation

[Use tags or npm install depending on the type of project](https://getbootstrap.com/docs/5.0/getting-started/introduction/#:~:text=copy-paste%20the%20stylesheet%20%3Clink%3E%20into%20your%20%3Chead%3E%20before%20all%20other%20stylesheets%20to%20load%20our%20css)

#### Rebooted Styles

Just by including Bootstrap into your projects, the way elements are styled will change

EXAMPLE:

A regular unstyled h1 will have a Times New Roman font applied by default 
With Bootstrap it'll change it to sans-serif, with a specific predefined height

- You'll be overriding these rebooted styles using classes later on
- These rebooted styles are why some people feel that most Bootstrap sites all look the same

![image-20211230181840830](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211230181840830.png) ![image-20211230181859243](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211230181859243.png)

### Typography

> https://getbootstrap.com/docs/5.0/content/typography/

#### Headers / Display Headers

```html
<h1>h1. Each header</h1>
<h2>h2. Has its own pre-set styling</h2>
<h6 class="h2">h6. But we can make one look like another</h6>
<h6>h6. In case we can't use a certain element for semantic reasons</h6>

<h2 class="display-2">Display headers work the same way but are bigger</h2>
<h2 class="display-6">We can lower their size a bit with classes as well</h2>
```

![image-20211230202537508](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211230202537508.png)



#### Horizontal Text Alignment

```html
<section>
    <h1 class="h3 text-center">Centered!</h1>
    <h3 class="h3 text-end">At end!</h3>
    <h5 class="h3 text-start">At start! (here by default anyways though</h5>
  </section>
  <!--# Apply a style to a parent element and pass it down to all children-->
  <section class="text-end">
    <h3>Inherited end position #1</h3>
    <h3>Inherited end position #2</h3>
  </section>
```

![image-20211230203928656](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211230203928656.png)



#### Inline Text Styling

```html
  <section>
    <p>Some text will be <mark>highlighted</mark> while the rest isn't</p>
    <p><s>This crossed out text indicates this info is no longer accurate</s></p>
    <p><em><strong>This text is bold and italicized</strong></em></p>
    <p><small>This small text is typically used for fine print</small></p>
  </section>
```

![image-20211230211442163](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211230211442163.png)

When to use these tags:

![image-20211230211415932](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211230211415932.png)



### Colors & Backgrounds

> https://getbootstrap.com/docs/5.0/customize/color/#theme-colors

#### Theme Colors

Bootstrap uses classes to apply styles to elements
It has a set of pre-selected colors that it uses to style pretty much everything

![image-20211230214323001](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211230214323001.png)

#### Coloring Backgrounds

EXAMPLE: Create a black background while the text is white

```html
<h1 class="bg-dark text-light">Inverse!</h1>
```

![image-20211230215541686](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211230215541686.png)



### Styling Text

#### Coloring Text

If you wanted to style text colors for instance, you can reference them like this:

```html
<h3 class="text-primary">Primary</h3>
<h3 class="text-secondary">Secondary</h3>
<h3 class="text-success">Success</h3>
<h3 class="text-danger">Danger</h3>
<h3 class="text-dark">Warning</h3>
<h3 class="text-muted">Grayed out</h3>
```

![image-20211230214354678](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211230214354678.png) ![image-20211230214404274](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211230214404274.png)

#### Font-size

Apply one of 6 pre-styled classes to set font-sizes

|      | min  | max  |
| ---- | ---- | ---- |
|      | fs-1 | fs-6 |



#### Font-weight & Italics

| font-style       | class       |
| ---------------- | ----------- |
| normal           | fw-normal   |
| bold             | fw-bold     |
| bolder than bold | fw-bolder   |
| light            | fw-light    |
| lighter          | fw-lighter  |
| italic           | font-italic |

Remember that applying a normal font-style can also be achieved by not applying a class at all

#### More

- All uppercase, all lowercase, capitalize each new word
  https://getbootstrap.com/docs/4.0/utilities/text/#text-transform
- Text wrapping and overflow
  https://getbootstrap.com/docs/4.0/utilities/text/#text-wrapping-and-overflow
- Line height
  https://getbootstrap.com/docs/5.0/utilities/text/#line-height





### Margins & Padding

> https://getbootstrap.com/docs/5.0/utilities/spacing/#margin-and-padding

#### How it works in Bootstrap

When it comes to marin and padding, Bootstrap uses a 6 level scale where size 1 is the smallest. 

PADDING:

|                    | min  | max  |
| ------------------ | ---- | ---- |
| all around padding | p-1  | p-6  |
| padding-left       | ps-1 | ps-6 |
| padding-right      | pe-1 | pe-6 |
| padding-top        | pt-1 | pt-6 |
| padding-bottom     | pb-1 | pb-6 |

MARGINS:

|                   | min  | max  |
| ----------------- | ---- | ---- |
| all around margin | m-1  | m-6  |
| margin-left       | ms-1 | ms-6 |
| margin-right      | me-1 | me-6 |
| margin-bottom     | mb-1 | mb-6 |
| margin-top        | mt-1 | mt-6 |

- s stands for start, which is why its used for left oriented dimensioning
- e stands for end, and is used for spacing to the right



#### Demo

Apply all around margins and padding

```html
<p class="m-1 p-1 bg-dark text-light">Small padding and margin</p>
<p class="m-4 p-4 bg-dark text-light">Large margin and padding</p>
```

![image-20211231144937925](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211231144937925.png)

Apply a large padding and margin bottom to p-tag one only

```html
<p class="ms-5 pb-3 bg-dark text-light">Margin left and padding bottom</p>
<p class="bg-dark text-light">No margin or padding</p>
```

![image-20211231150158034](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211231150158034.png)

#### Center Horizontally

Bootstrap has a margin-auto equivalent, so you can center an element horizontally as long as...

1. The element is block level
2. The element has a fixed/set width

```html
<div class="mx-auto bg-danger text-center" style="width: 200px">Centered</div>
```

![image-20211231150921121](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211231150921121.png)

#### Inline and block Margin/Padding

We can apply margins or padding on the L/R and T/B sides in one go

|                | min  | max  |
| -------------- | ---- | ---- |
| margin-block   | my-1 | my-6 |
| margin-inline  | mx-1 | mx-6 |
| padding-block  | py-1 | py-6 |
| padding-inline | px-1 | px-6 |

EXAMPLE:

```html
<p class="my-3 bg-danger">Centered</p>
<button class="btn btn-primary mx-3">Button 1</button>
<button class="btn btn-primary py-4 ">Button 2</button>
```

![image-20211231151829976](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211231151829976.png)

#### More

- Negative margins exist in Bootstrap if you enable them in the SASS files
  https://getbootstrap.com/docs/5.0/utilities/spacing/
- When using Bootstrap's grid, you're encouraged to use a gap between grid items instead of repeatedly using margins: https://getbootstrap.com/docs/5.0/utilities/spacing/#gap



### Borders

#### Additive/Subtractive Borders

You can choose to make the border extend outside of the content box (additive), or have it extend inwards (subtractive, like border-box in CSS)

|                   | class for additive border | class for subtractive border |
| ----------------- | ------------------------- | ---------------------------- |
| border all around | border                    | border-0                     |
| border-left       | border-start              | border-start-0               |
| border-right      | border-end                | border-end-0                 |
| border-bottom     | border-bottom             | border-bottom-0              |
| border-top        | border-top                | border-top-0                 |

#### Border Widths & Colors

- Apply 1 of 5 pre-set border widths
  Class names range from `border-1` to `border-5` (max)
- You're restricted to using theme colors for your border colors when you use Bootstrap

EXAMPLE:
Apply an all-around black border with the largest width possible

```html
<div class="border border-5 border-dark bg-warning m-3" style="width:200px; height:80px">Content!</div>
```

![image-20211231180849629](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211231180849629.png)

#### Border Radius and Radii Sizing

Bootstrap offers 4 pre-set sizes for border radii
Classes range from `rounded-0` to `rounded-3`

```html
    <div 
        class="rounded-3 bg-dark text-light m-4" style="width:200px; height:80px">
        Content!
	</div>
```

![image-20211231175231582](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211231175231582.png)


You can choose to only round specific corners on an element
https://getbootstrap.com/docs/5.0/utilities/borders/#border-radius

#### Unique Rounding Shapes

```html
<img src="..." class="rounded-circle" alt="...">
<img src="..." class="rounded-pill" alt="...">
```

![image-20211231175323465](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211231175323465.png)

### Box Shadow

| shadow size | class     |
| ----------- | --------- |
| small       | shadow-sm |
| regular     | shadow    |
| large       | shadow-lg |

#### Demo

EXAMPLE: Apply a large shadow to a container

```html
<div class="bg-warning m-3 shadow-lg" style="width:200px; height:80px"> 
    <span>Content!</span>
</div>
```



### UPCOMING

- Change theme colors
- Customize other parts of Bootstrap
- Importing individual components from Bootstrap so you can leave the majority of your project alone and Bootstrap free

EXAMPLE: Style text a diff color

OTHER COLORS:
Bootstrap does not have classes set to style elements with other colors than the pallete ones. 
If we want to style with a different selection of colors, we have a few options available

1. Edit the Bootstrap SASS files to change what the theme colors are (will learn later)
2. Use your own CSS alongside Bootstrap
   Just remember to place your CSS < link >  AFTER Bootstrap's

EXAMPLE: 

index.html

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- Always place Bootstrap CSS <link> before your css file -->
    <link
      href="https://cdn.jsdelivr.net/npm/bS@FAKE/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" type="text/css" href="index.css" />
  </head>
  <body>
	<h3 class="myHeader">But I want this to be a weird green!</h3>
  </body>
```

index.css

```css
.myHeader{ color: rgb(131, 247, 131); }
```

![image-20211230215021519](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211230215021519.png)

# Layouts



### Containers

Containers in Bootstrap come in 7 different flavors- and 6 of them are very similar to each other

#### Container Types

![image-20211231213957377](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211231213957377.png)

SUMMARY

- The `container-fluid` class makes the container stay at 100% width at all screen sizes
- All other types start the container at 100%, but eventually switch it over to another size once the viewport surpasses a certain breakpoint- the sizes are chosen by Bootstrap and look good
- Demonstrated [here](https://getbootstrap.com/docs/5.0/examples/grid/#:~:text=g%2D3%20gutters-,Containers,-Additional%20classes%20added)

NAMING EXPLANATION:
The classes basically explain that a container width will be 100% until ___ sized screens
Ex. .container-xl means that the container will be 100vw until extra large screens



### Bootstrap's Grid System

> https://getbootstrap.com/docs/5.0/layout/grid/

#### Terminology

CONTAINER: 
The official Bootstrap container that is divided into 12 columns and houses multiple elements
Represented by an element with a "container" class (there are multiple- see prev lesson)

ROWS:
A horizontal stretch that spans across 12 columns
Represented by an element with the class "row"

COLUMNS:
Each grid container is divided into 12 horizontal gaps which we refer to as columns

GRID-ITEMS: (a custom term I took from regular CSS grid)
The elements nested inside the container

#### 12 column grid system

Bootstrap uses a 12 column system to divide up its grids. 
You'll be dividing the columns across each element inside a Bootstrap container

EXAMPLE:
Notice that we have 3 equal sized elements inside this grid container
This means each grid-item must occupy 4 grid-columns

![image-20211231221138763](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211231221138763.png)

In this example, each element occupies 6 columns

![image-20211231231711059](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211231231711059.png)

In this last one, each grid item occupies all 12 columns

![image-20211231231817094](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211231231817094.png)

### Grid System in Action

#### Necessary Classes

1. 1 of 7 container classes on the container
2. A "row" class for the elements that have column widths given to them
3. A "column" class for the elements that have column widths
   There are several

Remember, Bootstrap grid works differently than CSS grid.
CSS GRID: Grid container, grid-items
BOOTSTRAP-GRID: Grid container, rows, columns

| class    | column size                                                  |
| -------- | ------------------------------------------------------------ |
| col      | if there are no other column elements, it takes up all remaining row space<br />if there are, it divides the space among each element with this class equally |
| col-md-X | Makes a column element take up X number of columns<br />One row should not exceed 12 columns, or else row elements will start to stack |
|          |                                                              |
|          |                                                              |
|          |                                                              |
|          |                                                              |



#### Equally Sized Columns



# Making Components

### Buttons

#### Rules

1. Any type of element can be styled as a button when using Bootstrap
2. Apply the "btn" class to every element you intend on using as a button
   This rule applies even to the < button > elements

Create a series of buttons

```html
<button class="btn btn-primary">Primary button</button>
<button class="btn btn-dark">Dark button</button>
<a class="btn btn-warning">Anchor button</a>
<input class="btn btn-light"/>
```

![image-20211230234119223](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211230234119223.png)

Create outlined buttons

```html
<button class="btn btn-primary">Primary button</button>
<button class="btn btn-outline-dark">Dark button</button>
<a class="btn btn-outline-danger">Anchor button</a>
```

We're hovering over the last one:		 ![image-20211230234358722](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211230234358722.png)

#### More

- Sizing buttons to be large or small (pre-set sizes)
  https://getbootstrap.com/docs/5.0/components/buttons/#sizes
- Making buttons appear disabled
  https://getbootstrap.com/docs/5.0/components/buttons/#disabled-state
- Styling groups of buttons which looks different
  https://getbootstrap.com/docs/5.0/components/button-group/

![image-20211231001457669](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211231001457669.png)   ![image-20211231001515430](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211231001515430.png)





# ====== React-bootstrap ======





# Return

1. Learn how to only use partial bootstrap imports
   Like, only css for the navbar for example
2. 

### Implement into your regular SCSS

Some Bootstrap features should be implemented manually into your SCSS
This'll reduce the headache that comes with dimensioning every little detail of each element

1. The responsive layout sizing
   https://getbootstrap.com/docs/5.0/layout/containers/#:~:text=See%20them%20in%20action%20and%20compare%20them%20in

2. Font-sizing via classes
   https://getbootstrap.com/docs/5.0/utilities/text/#font-size

- Make your own classes with pre-styled font sizes, heights, and boldness
  Not mixins, since you'd have to sort through dozens of SCSS files to compare
- If you apply them in your HTML directly, it'll be easy to see which elements should be styled just like certain other ones