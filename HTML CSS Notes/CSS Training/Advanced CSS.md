data attribute

# ====== CSS FLEXBOX ========

> Play with premade examples: 
> https://yoksel.github.io/flex-cheatsheet/
> https://codepen.io/jason2b3/pen/WNEWNPJ

SOURCES AND HELPFUL LINKS:
Did you know that the z-index works on flex-items without needing a position property?

1. [The Ultimate CSS3 Flexbox Tutorial - Colt's Code Camp - YouTube](https://www.youtube.com/watch?v=qZv-rNx0jEA) (Colt Steele)
2. https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid/getting-started-with-flexbox?u=2161498 (Christina Truong)
3. https://css-tricks.com/snippets/css/a-guide-to-flexbox/ 
4. https://codepen.io/NFuego24-7/pen/MWjxYMY?editors=0100   
   (used throughout each lesson. Test everything on here)

I combined 2 crash courses on CSS flexbox plus a lengthy article on the topic to create a comprehensive in-depth look at how flexbox works. The examples given in these 3 sources are are simple and exist in a vacuum 

# Core Concepts

### Basic Terms 

In flexbox, items are laid out in across 1 direction-vertical or horizontal. 
You can create rows or columns of container blocks with this

TERMINOLOGY

Flex Container: The parent/container element
Flex items: The direct children of the parent element

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117214104848.png" alt="image-20210117214104848" style="zoom: 45%;" />  <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117214418047.png" alt="image-20210117214418047" style="zoom: 70%;" />
>
> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117214756276.png" alt="image-20210117214756276" style="zoom:80%;" />   <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117214821234.png" alt="image-20210117214821234" style="zoom:80%;" />

- Descendant elements nested deeper inside the container DON'T count as flex items
- You can however, nest flex containers inside of another flex container
  In the 2nd image, the flex container surrounds everything else, even if its border isn't drawn

Declarations are used to define flex containers:`display: flex` `display: inline-flex`

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117220150021.png" alt="image-20210117220150021" style="zoom: 50%;" />

#### What flexbox Does

- When using legacy techniques such as float, each item is the same height as its content. 
- Just by adding the `display:flex` value, the flex items are automatically arranged into flexible equal height items 
- There are many more flex properties to further customize your layouts

#### How display: flex Works

- Flex items are displayed in a row and become the same size as their CCB. 
- The flex container still spans the width of its container

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117220510438.png" alt="image-20210117220510438" style="zoom: 33%;" />

#### How display: inline-flex Works

- The flex container will span the width of its...
  content + the flex items + displays inline to other flex containers
- It doesn't change how the flex items are displayed, instead it makes the flex container display inline. 
- Though the flex items resize themselves automatically to the size of their content, you can set specific sizes for them as well



### Main Axis and Cross Axis

#### Start and End Points

Flexbox aligns items based on two axes, the main axis and the cross axis.

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117221824535.png" alt="image-20210117221824535" style="zoom: 67%;" />

#### Right to Left Languages

- The main start and main end also depends on the writing mode of the document 
- For example the main start and main end will run L→R for a L→R language such as English. 
- For a R→L language then the main start and main end will also run R→L

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117231040977.png" alt="image-20210117231040977" style="zoom:50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117231105674.png" alt="image-20210117231105674" style="zoom:50%;" />Main Axis and Cross Axis

#### Start and End Points

Flexbox aligns items based on two axes, the main axis and the cross axis.

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117221824535.png" alt="image-20210117221824535" style="zoom: 67%;" />

#### Right to Left Languages

- The main start and main end also depends on the writing mode of the document 
- For example the main start and main end will run L→R for a L→R language such as English. 
- For a R→L language then the main start and main end will also run R→L

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117231040977.png" alt="image-20210117231040977" style="zoom:50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117231105674.png" alt="image-20210117231105674" style="zoom:50%;" />



### What to Target with our Flexbox Properties (inst1)

- To assign flex-properties to individual flex items, just use flex shorthand in a CSS rule targeting only 1 of them. 
- In certain lessons, we just have a selector premade that deliberately targeted all those elements by using widespread selectors. 
- An easy way to do that is with a shared class name, but there are better methods

EXAMPLE: Choosing our 3 types of Targets

Assume that we've used `display:flex` on the nav element

```html
<nav class="container">	
  <a href="#home">Home</a>
  <a href="#home" class="active">About</a>
  <a href="#home">Contact</a>
  <a href="#home">Help</a>
  <a href="#home" class="last_item">Logout</a>
</nav>
```

TARGETING ALL FLEX ITEMS AT ONCE:

```css
nav > a { flex: 1 1 auto; }
```

TARGETING FLEX-CONTAINER:

```css
.container { justify-content: center; }
```

TARGETING INDIVIDUAL FLEX-ITEMS:

```css
.last_item { order: 1; }
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119060044464.png" alt="image-20210119060044464" style="zoom: 33%;" /> <- what to target when using flexbox properties

### Ignoring a Flex Item

Oftentimes you'll wish you could have flexbox ignore one of the flex items in the container so it can act as a block level element. 

> ![image-20210206111136651](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210206111136651.png)
>
> We want the headline to not be a flex-item
> But the pink boxes are spaced so nicely...

The closest thing we can do is to give the item we want ignored a width of 100% and enable flex-wrap

![image-20210206111339663](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210206111339663.png)

# Container Properties

These properties apply container-wide changes that affect every flex-item inside, in terms of how they are arranged

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119060044464.png" alt="image-20210119060044464" style="zoom: 33%;" />



### flex-direction (main-ax)

This is the property we use to control the main axis. You'll notice that the 4 we demonstrate here have the means to point the main axis right, left, up, and down.

| MAIN-AXIS DIRECTION | CROSS-AXIS DIRECTION | SYNTAX                           |
| ------------------- | -------------------- | -------------------------------- |
| right (default)     | down                 | `flex-direction:row`             |
| down                | right                | `flex-direction:column`          |
| left                | down                 | `flex-direction:row-reverse`     |
| up                  | right                | `flex-direction: column-reverse` |



#### Main-Axis Right and Down

The direction of the main axis is determined by the flex-direction property.
We can make it so the traditionally horizontal main axis becomes vertical 
That would make the typically vertical cross-axis horizontal instead

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117223735438.png" alt="image-20210117223735438" style="zoom: 67%;" />	<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117223837698.png" alt="image-20210117223837698" style="zoom: 67%;" /> 	

 `flex-direction:row` 					`flex-direction:column`

#### Main-Axis Left and Up 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119170817690.png" alt="image-20210119170817690" style="zoom:45%;" />   <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119170913915.png" alt="image-20210119170913915" style="zoom:45%;" />	

`flex-direction:row-reverse`			 `flex-direction: column-reverse`
^^^ cross axis still T→B				  ^^^ main axis still L→R

Warning: You should not use these reversal options just because you're looking for a way to order your content easier. This reordering is only visual, and ARIA will not pick up on it

#### Examples of all

The flex items have a height of 150px, width of 200px, and wrap is enabled

`flex-diretion:row`:			<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119171548024.png" alt="image-20210119171548024" style="zoom:33%;" />

`flex-direction:row-reverse`:   <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119172417670.png" alt="image-20210119172417670" style="zoom:33%;" />

`flex-direction:column`:	    <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119172230347.png" alt="image-20210119172230347" style="zoom:33%;" />   

`flex-diretion:column-reverse`: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119172055221.png" alt="image-20210119172055221" style="zoom: 33%;" />

#### RESPONSIVE DESIGN:

It is very simple to have elements arrange in a row on desktop screens while turning into a column on mobile ones- all thanks to this flex direction property



### flex-wrap (cross-ax)

There doesn't seem to be a way to set the cross axis to the left, but every other direction is possible. Use the flex-direction property to move the cross axis in a new direction by proxy, or change its behaviour with one from this current lesson

- All of the items will align on a single axis, by default. 
  Even if the items may overflow. 
- The flex-wrap property can be used to change this behavior. 

| flex-wrap:     | effect                                                       |
| -------------- | ------------------------------------------------------------ |
| `nowrap`       | flex items will not wrap or resize to fit on a single line   |
| `wrap`         | lays out items over multiple rows/cols if there isn't enough space |
| `wrap-reverse` | fills the last row/col first normally, then the others in rvs order |

#### Concept Visual

Let's say we initially have a flex container with a width of 700px that suddenly gets set to 400px. Here's how `flex-wrap:nowrap` and `flex-wrap:wrap` would behave-assuming all the flex items can't properly fit on one line

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117232713450.png" alt="image-20210117232713450" style="zoom: 67%;" />

 ![image-20210117233517167](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117233517167.png) flex item 4 goes out of the CCB

 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117233547203.png" alt="image-20210117233547203" style="zoom:80%;" /> flex item 4 spills into a new row:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117233628680.png" alt="image-20210117233628680" style="zoom:67%;" /> The spill row is filled first (still L→R tho)

As you can see, Flexbox does 2D...sort of. 
Wrapping items can create the look of rows and columns



### flex direc/wrap Shorthand

flex-wrap and flex direction can also be applied using the shorthand property 
`flex-flow`

```css
/*LONGHAND*/
flex-direction: column;
flex-wrap:wrap-reverse;

/*SHORTHAND*/
flex-flow: column wrap-reverse;
```

`flex-direction:column` + wrap : <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119174517554.png" alt="image-20210119174517554" style="zoom: 33%;" />



`flex-direction: column`+ wrap-reverse: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119174714393.png" alt="image-20210119174714393" style="zoom:33%;" />

### justify-content (main-ax)

Defines how space is distributed between flex-items along the the main axis

| justify-content: | effect                                                       |
| ---------------- | ------------------------------------------------------------ |
| `flex-end`       | shifts content to end of main-axis                           |
| `flex-start`     | shifts content to start of main-axis                         |
| `center`         | uses extra space to center flex items in the middle          |
| `space-between`  | takes extra space and jams it b/t flex items evenly, but NOT on outer edges |
| `space-around`   | takes extra space and jams it b/t flex items evenly, even on outer edges |

#### Examples with Rows

Wrap is active and the flex-direction: row

Start Point:	 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119185306954.png" alt="image-20210119185306954" style="zoom:33%;" />



`justify-content:flex-end`	   <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119185344920.png" alt="image-20210119185344920" style="zoom:33%;" />

if flex-direction is row-reverse <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119185409692.png" alt="image-20210119185409692" style="zoom:33%;" />

`justify-content:flex-start`	 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119185443608.png" alt="image-20210119185443608" style="zoom:33%;" />

`justify-content:center`		 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119185519710.png" alt="image-20210119185519710" style="zoom:33%;" />

`justify-content:space-between`  <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119185621676.png" alt="image-20210119185621676" style="zoom:33%;" />

`justify-content:space-around`   <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119191736054.png" alt="image-20210119191736054" style="zoom:33%;" />

The space on the outer left and right edges doesn't seem to be equal to the space in the middle. The browser tries to make it equal, but the circumstances won't allow it



#### Examples with Columns

Wrap is enables, flex-direction is column, and the container height

Start Point: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119193115321.png" alt="image-20210119193115321" style="zoom:33%;" />

`justify-content:flex-end`		 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119193141059.png" alt="image-20210119193141059" style="zoom:33%;" />

It's subtle, but the boxes shift downwards and the open white space it at the top now

if flex-direction is col-reverse   <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119193206402.png" alt="image-20210119193206402" style="zoom:33%;" />

`justify-content:flex-start`	   <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119193238783.png" alt="image-20210119193238783" style="zoom:33%;" />

`justify-content:center`		   <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119193322776.png" alt="image-20210119193322776" style="zoom:33%;" />

`justify-content:space-between`    <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119193350975.png" alt="image-20210119193350975" style="zoom:33%;" />

`justify-content:space-around`	 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119193415322.png" alt="image-20210119193415322" style="zoom:33%;" />

### align-items (cross-ax)

Defines how space is distributed between flex-items along the cross-axis

| align-items:        | effect                                                       |
| ------------------- | ------------------------------------------------------------ |
| `flex-start`        | shifts items to the cross-axis start                         |
| `flex-end`          | shifts items to the cross-axis start                         |
| `center`            | shifts items to the cross-axis center                        |
| `stretch` (default) | items grow in order to fit across the entire cross-axis<br />fails if the grid-item heights/widths are set |
| `baseline`          | centers flex-items based on where their text originates (SW style) |

- Feel free to combine these options with the justify-content property to shift your items where you want them across both the main/cross-axis. 
- Even throw wrap-reverse into the mix if you can keep track where everything goes

```css
/*To center content vertically and horizontally*/
.container { 
    justify-content:center;
    align-items:center;
}
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119214947838.png" alt="image-20210119214947838" style="zoom:50%;" />

#### Examples with Rows

Wrap is enabled, flex-direction is row, and no width or height is specified for the flex items. 

when `flex-direction:row` Cross axis starts at top and ends at bottom

Start:					 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119211842323.png" alt="image-20210119211842323" style="zoom: 33%;" />

`align-items: flex-start`  <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119213451073.png" alt="image-20210119213451073" style="zoom:33%;" />

`align-items: flex-end`	<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119213428379.png" alt="image-20210119213428379" style="zoom:33%;" />

`align-items: center`	  <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119213404034.png" alt="image-20210119213404034" style="zoom:33%;" />

`align-items: stretch`	 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119213339957.png" alt="image-20210119213339957" style="zoom:33%;" />

Notice how stretch changes nothing about our start point. That's how you know it's the default setting for align-items



#### Examples with Columns

Wrap is enabled, flex-direction is column, and no width or height is specified for the flex items. 

when `flex-direction:column` Cross axis starts at left and ends at right

Start:						<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119213915670.png" alt="image-20210119213915670" style="zoom:33%;" />

`align-items: flex-start`	  <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119214405051.png" alt="image-20210119214405051" style="zoom:33%;" />

`align-items: flex-end`	    <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119214434818.png" alt="image-20210119214434818" style="zoom:33%;" />

`align-items: center` 		 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119214501973.png" alt="image-20210119214501973" style="zoom:33%;" />

`align-items: stretch`		 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119214528374.png" alt="image-20210119214528374" style="zoom:33%;" />

`align-items: baseline`	    <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119214640220.png" alt="image-20210119214640220" style="zoom:33%;" />

The baseline declaration is more noticeable when you have differently sized boxes floating at different points in the container. It works just like text-alignment does in Solidworks drawings





### align-content (b/t rows/cols)

- Controls how space is distributed between different rows if flex-direction equals row or row-reverse
- Controls how space is distributed between different columns if flex-direction equals column or column-reverse.  

Pro-tip during testing: This only works if you have insufficient space for your flex items. So set a width and/or height to see results

#### Between Rows

flex-start shifts all rows to start of cross-axis
flex-end shifts all rows to end of cross-axis
Rest is self-explanatory

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210120010757589.png" alt="image-20210120010757589" style="zoom: 67%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210120010842193.png" alt="image-20210120010842193" style="zoom:67%;" />



#### Between Columns

flex-start shifts all rows to start of cross-axis
flex-end shifts all rows to end of cross-axis
Rest is self-explanatory (SAME DESCRIPTION AS IN THE ROWS EXAMPLE)

Flex item height/width were set to 200px, wrap was enabled, flex-direction was set to column

Start:  <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210120012846233.png" alt="image-20210120012846233" style="zoom: 25%;" />

`flex-start`							 `flex-end`

 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210120012937165.png" alt="image-20210120012937165" style="zoom:25%;" />   <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210120013018113.png" alt="image-20210120013018113" style="zoom:25%;" />



`center`  								`stretch`

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210120013149383.png" alt="image-20210120013149383" style="zoom:25%;" />    <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210120013216311.png" alt="image-20210120013216311" style="zoom:25%;" />



`space-between` 						  `space-around`

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210120013328474.png" alt="image-20210120013328474" style="zoom:25%;" />     <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210120013355960.png" alt="image-20210120013355960" style="zoom:25%;" />



### align-content vs align-items (return2)

Both of these properties affect the spacing in the direction of the cross-axis. Using both properties at the same time doesn't work- the one declared last will override the other

align-items: tries to distribute space evenly, more or less
align-content: shoves everything to one side

Start:  <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210120020024894.png" alt="image-20210120020024894" style="zoom:25%;" />

`align-items:center` 					 `align-content:center` 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210120020115151.png" alt="image-20210120020115151" style="zoom:25%;" />     <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210120020137918.png" alt="image-20210120020137918" style="zoom:25%;" />

The flex-direction was row, though the numbers should make that easy to discern

This is still a topic I'm not 100% on. 
Watch this later on if needed: [Align Items vs Align Content in Flexbox - YouTube](https://www.youtube.com/watch?v=UuiImHywwvs)

# Flex Item Properties

These properties target one flex-item at a time

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119060044464.png" alt="image-20210119060044464" style="zoom: 33%;" />



### What to Target with our Flexbox Properties (inst2)

- To assign flex-properties to individual flex items, just use flex shorthand in a CSS rule targeting only 1 of them. 
- In previous lessons, we just had a selector premade that deliberately targeted them all by using widespread selectors that targeted all those elements. An easy way to do that is with a shared class name, but there are better methods

EXAMPLE: Choosing our 3 types of Targets

Assume that we've used `display:flex` on the nav element

```html
<nav class="container">	
  <a href="#home">Home</a>
  <a href="#home" class="active">About</a>
  <a href="#home">Contact</a>
  <a href="#home">Help</a>
  <a href="#home" class="last_item">Logout</a>
</nav>
```



TARGETING ALL FLEX ITEMS AT ONCE:

```css
nav > a { flex: 1 1 auto; }
```

TARGETING FLEX-CONTAINER:

```css
.container { justify-content: center; }
```

TARGETING INDIVIDUAL FLEX-ITEMS:

```css
.last_item { order: 1; }
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119060044464.png" alt="image-20210119060044464" style="zoom: 33%;" /> <- what to target when using flexbox properties



### align-self 

```css
.flex_item{  align-self: flex-start }
/*  flex-start 		flex-end  stretch	
```

This lets you override align-items declarations on individual flex-items
Break tradition and give a flex-item free reign to be positioned using other values

```css
/*Initial state code*/
.container {
    align-items: center;
    justify-content:space-between;
}
```

We have our initial state: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210120030507312.png" alt="image-20210120030507312" style="zoom:33%;" />

Let's make it so box 1 takes up the maximum available space in its row

```css
.box-3{ align-self: stretch }
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210120030625412.png" alt="image-20210120030625412" style="zoom: 33%;" />



### flex Shorthand and basis

Flexbox will automatically resize the flex items when they need to fit into their container, but you will often need more control over how they sized.

|                    | effect                                                       |
| ------------------ | ------------------------------------------------------------ |
| `flex-grow: 1`     | determines how items expand if the container has extra space |
| `flex-shrink:0`    | determines how items w/ shrink if the container <br />has insufficient space |
| `flex-basis:100px` | sets initial size of the flex-items                          |

#### flex Shorthand

`flex: 0 1 auto;`	Default values

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118003013299.png" alt="image-20210118003013299" style="zoom:67%;" />	

The flex basis value is set using any sizing unit or keyword
Shrink doesn't come into affect if the flex items fit in their space
Grow doesn't come into play if the flex items don't have enough space

#### Other forms of flex shorthand

```css
/* One unitless integer */
flex: 2;	/*unitless #: flex-grow*/

/* One value expressed as a unit: flex-basis */
flex: 10em;		
flex: 30%;		
flex: 300px;	

/* 1 unitless integer and 1 unit: flex-grow | flex-basis */
flex: 1 30px;

/* Two unitless integers: flex-grow | flex-shrink */
flex: 2 2;
```



#### flex-basis

This is the value flex-shorthand will attempt to give each flex-item - if you target an an entire container. 

- There are several scenarios where the browser will be forced to ignore the basis value and resize the flex-items. 
- Specifically whenever there's room to grow or shrink, and the growth/shrink values are not 0

Fun fact: 
If you declare flex-basis on an item 
Then declare a different width/height on the same one afterwards... 
flex-basis wins out due to its higher priority



#### Looking Slightly Ahead

In the following 2 lessons, we'll be applying flex shorthand inside selectors that target ALL the flex items in the container. 

This doesn't always have to be the case. In the third lesson after this, we'll be targeting flex items one by one

This doesn't work any differently to how we've always been targeting elements for CSS styling. The only new part is that we declare a container as `display: flex` or `display:inline-flex`, which then changes all its direct children into flex items



### Testing out Sizing Properties (Horiz)

![image-20210118014312829](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118014312829.png)

Default state shown above: `flex: 0 1 auto` 
Container width is 600px and there are 6 flex items

#### flex basis: 

- The initial width the flex items attempt to become. 
- If there is enough space, every flex item will size to this value
  Unless you have extra space and the grow value is not-zero
- If there isn't enough space, the value will be determined by the shrink value

`flex: 1 1 auto;` ![image-20210118014447670](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118014447670.png)

You can set the flex-basis value to 0 if you want to fully rely on the growth and shrink ratios to size the flex-items

#### flex grow:

| value | effect                                                       |
| ----- | ------------------------------------------------------------ |
| 0:    | The items won't grow to fit perfectly within the container content box. <br />This may leave some space left over if the flex basis value is too small |
| 1:    | Extra space will be divided equally among each of the flex items.       They all expand by the same amount to fill up the space |

`flex: 0 1 50px;` ![image-20210118014628690](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118014628690.png)

`flex: 1 1 20px;` ![image-20210118020147888](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118020147888.png)



#### flex shrink

| value | effect                                                       |
| ----- | ------------------------------------------------------------ |
| 0     | Flex items won't shrink to fit into the container content box<br />Instead, they will just flow out of the container |
| 1     | Shrinks items evenly to fit into the container content box   |

`flex: 0 1 150px;` ![image-20210118020519786](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118020519786.png)

`flex: 0 0 150px;` Refuses to shrink, goes out of CCB bounds

![image-20210118020429980](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118020429980.png)



#### Introducing flex-wrap to the Mix:

```CSS
flex: 0 0 150px;
flex-wrap: wrap;
```

![image-20210118021144218](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118021144218.png)

```css
flex: 1 0 150px;
flex-wrap: wrap;
```

![image-20210118021309498](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118021309498.png)

The growth value divides the second row evenly between the last 2 flex items that were pushed in there



### Testing out Sizing Properties (Vert)

https://codepen.io/NFuego24-7/pen/poEGqOX

Every principle you learned in the previous lesson applies when the main axis goes from top to bottom as well. Enable this with `flex-direction:column`. Just remember that shorthand will adjust the flex-item heights if this is active

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118181841511.png" alt="image-20210118181841511" style="zoom:67%;" />

Default state shown above: `flex: 0 1 auto` 
Container width is 300px, height is 300px, and there are 6 flex items 

#### flex basis: 

- The initial width the flex items attempt to become. 
- If there is enough space, every flex item will size to this value
  Unless you have extra space and the grow value is not-zero
- If there isn't enough space, the value will be determined by the shrink value

`flex: 1 1 auto;`   <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118181916331.png" alt="image-20210118181916331" style="zoom:67%;" />

#### flex grow:

| value | effect                                                       |
| ----- | ------------------------------------------------------------ |
| 0:    | The items won't grow to fit perfectly within the container content box.<br />This may leave some space left over if the flex basis value is too small |
| 1:    | Extra space will be divided equally among each of the flex items. <br />They all expand by the same amount to fill up the space |

`flex: 0 1 40px`<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118182109027.png" alt="image-20210118182109027" style="zoom:62%;" />`flex: 1 1 40px`<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118182132327.png" alt="image-20210118182132327" style="zoom:62%;" /> 

 



#### flex shrink

| value | effect                                                       |
| ----- | ------------------------------------------------------------ |
| 0     | Flex items won't shrink to fit into the container content box<br />Instead, they will just flow out of the container |
| 1     | Shrinks items evenly to fit into the container content box   |

`flex: 0 1 60px`<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118182402587.png" alt="image-20210118182402587" style="zoom:61%;" /> `flex: 0 1 60px`  <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118182423028.png" alt="image-20210118182423028" style="zoom:61%;" />



#### Introducing flex-wrap to the Mix:

```CSS
flex: 0 0 60px;
flex-wrap: wrap;
/* << flex: 0 1 60px >> gives the same result. 
The shrink value doesn't matter when you spill into a new row it seems*/
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118182621701.png" alt="image-20210118182621701" style="zoom:67%;" />

```css
flex: 1 0 60px;
flex-wrap: wrap;
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118182656451.png" alt="image-20210118182656451" style="zoom:67%;" />

The growth value divides the second row evenly between all flex items that were pushed in there (1 or more)



### flex-grow 

0: Flex items do not grow or shrink at all
1: Flex items grow or shrink to fit in the container space evenly

- But what about growth values other than 1 or 0?
- What happens if flex items are assigned different growth values? 



#### Understand:

1. If every flex item had a growth ratio of 7, they'd still divide up extra space evenly amongst themselves 

2. The flex items share extra space present inside of the container CONTENT box

Remember that when border box is active, the border and padding reduce the amount of extra space the flex items have to divide amongst themselves

```css
/*DEFAULT CONTENT BOX ACTIVE (no border-box) */
.container{ width: 600px; border: 10px; }
```

There will be 600px total for all the flex items to span across

```css
/*CONTENT BOX ACTIVE*/
* { box-sizing: border-box; }
.container{ width: 600px; border: 10px; }
```

There will be 580px total for all the flex items to span across (10 shaved off the left and right side)

THIS APPLIES when `flex-direction: column` as well. Except the allowable space for the flex items would be the height



#### How Growth Resizing Works

The numbers we assign to the flex-grow and flex-shrink are ratios, not linearly scalar multipliers. If item A, B, and C are all inside a container...

Item A: Growth ratio 1	Item B: Growth ratio 2	Item C: Growth ratio 4

Item C will not end up being 4X as big as item A all the time. 
It has the possibility to be, but that's not how flex resizing works. 

- The numbers we assign to flex-grow and flex-shrink are ratios. 
- This determines how much of any remaining extra space that individual flex item will take up in comparison to the other item siblings

We are going to run some tests on colored flex items within a 500px long container. 



#### EXAMPLE 1: Informative!

The container has a width of 500px, and border-box is not applied (no extra math needed to do accurate calculations)

Default state:  <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118211148001.png" alt="image-20210118211148001" style="zoom:80%;" />

```css
.fc1 { flex: 1 0 100px; } 	/*RED*/
.fc2 { flex: 4 0 100px; } 	/*ORANGE			500px to go around btw */
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118212337904.png" alt="image-20210118212337904" style="zoom:80%;" />

So what happened here?
The browser makes the red and orange rectangle 100px at first
But there's excess space + the growth ratio is not 0, so it'll divide it up

MATH TIME: 
Extra space left over is 300px 	500-100-100 = 300 

1+4=5   
Make sure the red rectangle gets 1/5 of the extra space (0.2 x 300= 60px)
Make sure the orange rectangle gets 4/5 of the extra space (0.8 x 300= 240px)

Red rectangle final tally: 
Basis + extra space = 100 + 60 = 160px

Orange rectangle final tally: 
Basis + extra space = 100 + 240 = 340px



#### EXAMPLE 2: It's just too easy for me

We're going to complicate this one by adding a border and having more colored rectangles with different basis values this time. 

The container has a width of 500px, and border-box IS applied. 
We have a border of 8px and a padding of 4px 

Default state:  ![image-20210118214058319](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118214058319.png)

The colored flex items are offset because the padding we apply to the flex container pushes them away from the T/B/L/R. Just know they reduce the extra occupiable space in the content box due to border-box being active

```css
.fc1 { flex: 6 0 20px; } 	/*RED*/
.fc2 { flex: 4 0 50px; } 	/*ORANGE*/
.fc3 { flex: 2 1 100px; }	/*YELLOW*/
```

MATH PREDICTION:

Extra space= 500-2(8)-2(4)-20-50-100= 306px
6+4+2= 12

RED gets 6/12 extra space		6/12 x 306 = 153px
ORANGE gets 4/12 extra space	 4/12 x 306 = 102px
YELLOW gets 2/12 extra space	 2/12 x 306 = 51px

Red final tally: 153+20 = 173px
Orange final tally: 102+50= 152px
Yellow final tally: 51+ 100= 151px

> ![image-20210118215203466](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118215203466.png) BUT HOW GOOD AM I? HOLYYY SHIT



### flex-shrink

These work the similarly to how as growth-ratios do. The flex-shrink value is a ratio, not a multiplier. 

If the shrink ratio is higher, the color will shrink more rapidly. Just know that at the very least

#### INCOMPLETE EXAMPLE: Not sure how to finish

Width of the container is 600px, no border-box, border 4px thick, no wrapping

```CSS
/*Default state*/
.fc1 { flex: 0 0 200px; } 	/*Red*/
.fc2 { flex: 0 0 100px; } 	/*Orange*/
.fc3 { flex: 0 0 300px; }	/*Yellow*/
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119030828727.png" alt="image-20210119030828727" style="zoom:80%;" />

Decrease the width of the container to 400px and see what happens:

```css
.fc1 { flex: 0 3 200px; } 	/*RED*/
.fc2 { flex: 0 1 100px; } 	/*ORANGE*/
.fc3 { flex: 0 4 300px; }	/*YELLOW*/
```

![image-20210118221558439](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118221558439.png)

So what happened?
Initial space: 600px	New space: 400px
Lost space: 200px

RED will lose 3/8 of 200px  		(75px)
ORANGE will lose 1/8 of of 200px	(25px)
YELLOW will lose 4/8 of of 200px	(100px)

RED final tally: 200-75= 
ORANGE final tally: 200-25= 
YELLOW final tally: 200-100= 



### order

Changes the visual display order of flex items, without having to change the HTML. 
Only changes the visual layout of the items. 
To keep things accessible, the HTML order should make sense

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210118235112554.png" alt="image-20210118235112554" style="zoom:50%;" />

- By default, flex-items have an order number of 0 and are laid out in the order they appear in HTML. 
- When using the order property, the the flex container will lay out its flex items in increasing order- starting fr/ the smallest number. 
- Negative order numbers are allowed

#### Accessibility Example:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210120040144530.png" alt="image-20210120040144530" style="zoom: 50%;" />

Take a look at this layout demo for a website. 

- Visually, the left sidebar comes before the main article right? 
- The blind webpage visitors using their screen readers shouldn't have to listen to the content on the left sidebar before getting to the meat of our site. 
- This is just one of many cases where we must think about accessibility 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210120181019338.png" alt="image-20210120181019338" style="zoom:33%;" /> You may even want to change the order for a diff kind of screen



### Nested Flex Containers

Nesting flex containers inside of other flex containers allows us to make more sophisticated layouts. 

Try making a flex item a flex-container (confused?)

- If you have a flex item, that means its a direct child of a flex container
- This flex item I just mentioned can be a flex-container itself at the same time

Human Analogy: Flex containers are parents, flex items are children

- I may be the son of Oli, but I can be a father of children as well
- My children will see me as a parent, even though I still see Oli as a parent

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119001446882.png" alt="image-20210119001446882" style="zoom: 67%;" />

Did not have enough space to write "flex-item for C2" in the tiny rectangles, but you get the picture

#### Example: 

https://codepen.io/NFuego24-7/pen/wvzNbbK

```HTML
<div class="page-wrap">
  <aside>Aside</aside>
  <main>Main     
    <section>
      <p>Content 1</p> 
      <p> rANDOM MUMBO JUMBO</p>
    </section>
      
    <section>
      <p>Content 2</p> 
    </section>
      
    <section>
      <p>Content 3</p>
    </section>      
  </main>
</div>
```

FYI: The main and div class have `display:flex` applied in the CSS doc

Analyze this code! You should be able to tell what elements are flex containers and which are flex items by spotting`display: flex/inline-flex` declarations in CSS then glancing at the HTML nesting hierarchy

`div`: Flex container 
`aside`: Flex item
`main`: Flex item of div. Also a flex container
`sections 1-3`: Flex item of main
That's it. The p-tags are not flex items because the sections are not containers

In real projects, envision a colorful visual like this to help you understand how things will react once you start using flexbox declarations

![image-20210119015111415](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119015111415.png)



### flex-basis: 0 vs flex-basis: auto

#### The Difference During Growth

Main is a flex container for the 3 content boxes ordered into a column. 
Its height is 600px

Predict what'll happen when we apply `flex: 1 1 0;` and `flex: 1 1 auto;` to all the section elements

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119022521276.png" alt="image-20210119022521276" style="zoom: 50%;" />

```css
section { flex: 1 1 0; }	
```

Since the flex basis is 0, there will be no value the browser will try to make the flex-items equal to. They will all resize equally, meaning the height of content box 1-3 will all be the same

```css
section { flex: 1 1 auto; }
```

You might assume from previous lessons that a value of auto would size everything to be equal-sized just like 0 would. 

- That'd be correct if the flex-items were empty. 
- Since the first section box has a paragraph inside, the auto value takes that into account-making the first section element larger than it would be normally (even though there's enough room to divide space equally)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119023214198.png" alt="image-20210119023214198" style="zoom: 33%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119023624626.png" alt="image-20210119023624626" style="zoom:33%;" />

`flex: 1 1 0`					 	`flex: 1 1 auto`



#### The Difference During Shrinking

In the previous lesson-section, we saw how `flex:1 1 auto` behaves when there's room for flex-items to grow. Now, let's see what happens when we have to shrink flex-items to fit in the CCB. (We reduce the height of the CCB to 350px from an initial 600px)

`flex 1 1 0;` Each content box will shrink proportionally and end up at equal sizes

`flex 1 1 auto;` The items will try to shrink proportionally but the first content box will still be bigger than the other two to avoid overflowing its content

![image-20210119024802573](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119024802573.png)

Once again, the first content box will still be bigger than it's siblings due to it having content. This behaviour persists even if there's enough space to not overflow- it's just the way flexbox works



### Centering flex-items in a Container

Take a look at this layout we created using flexbox. We completed the same project when testing out our float techniques

- All I did was make the following elements flex items: header, nav, main content, sidebar, and footer. 
- This was done by making the div element that surrounded them all a flex-container. After that I just reordered, and set some heights/widths

![image-20210119040038629](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119040038629.png)

The viewport is fully expanded, and the widths were all set with % values. Since all these elements are static, their percentages refer to the nearest parent- the flex container. 

We want to set a max width for the container, and have it plus the flex items centered on screen

```css
.container{
    max-width:1000px;
    margin:0 auto;  /*THIS DOESN'T WORK FOR A FLEX CONTAINER*/
}
```

To do this in flexbox, make the container's parent a flex-container. 
Going 1 nesting level above the div gives you the body element in this case.

```css
body { 
    display:flex; 
    justify-content: center;	/*Flexbox version of margin auto*/
}
```

![image-20210119041118846](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210119041118846.png)



# ======= CSS GRID =========

Grid will help make your markup shorter/simpler to read, all while offering more flexibility than the other layout methods you've learned about. 

No longer will you have to wrap items in divs when you want them to be act as a row container

> HAVE THIS OPEN:
> https://learncssgrid.com/#aligning-grid-tracks

# PART 1: Theory, Units, & Properties

### Properties for Containers & Grid Items

#### CONTAINERS

```SCSS
display: grid;
grid-template-rows:/ 	// set row heights
grid-template-columns:;	// set column widths

grid-template-areas:;	

grid-auto-rows: ;
grid-auto-columns:; 

justify-content:; 
align-content:;

justify-items:; 
align-items:;

grid-auto-flow: dense;
```

#### GRID-ITEMS

```CSS
grid-column-start:;
grid-column-end:;
grid-column:;

justify-self:;
align-self:;
```



### Bare Basics

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210123154312799.png" alt="image-20210123154312799"  />

By default, grids are broken down into equal width and evenly spaced columns. 
Sometimes we add rows as a guide, to line up components horizontally as well. 

Gutters: 
The space between columns 
Added to allow consistent spacing between these columns

#### 12 Equal Column Grids

A common layout for webpages is to use a 12 equal column grid. Since 12 is easily divisible by 2, 3, 4 and 6, making responsive designs becomes much easier

Page components are then arranged within the columns and can span across one or more of them 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210123155104762.png" alt="image-20210123155104762" style="zoom: 67%;" />

#### Terminology

Grid-container: The parent element that holds all the grid-items 		
Grid item: The child elements of the grid-container

Row tracks and column tracks:

![image-20211123104811348](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211123104811348.png)

#### display: grid vs display: inline-grid

|                       | what happens                                                 |
| --------------------- | ------------------------------------------------------------ |
| `display:grid`        | grid items are placed in rows by default<br />their width spans the full width of the grid container |
| `display:inline-grid` | grid items are placed in rows<br />Also, multiple grid containers can exist on the same horizontal space |
|                       | Grid container & items will be the same width as their content<br />(unless otherwise specified) |



<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210123160226784.png" alt="image-20210123160226784"  />



### Gap Property

As you know, the gap property is used for creating gutters- the spaces between rows and columns. It works with any sizing unit, aside from fr

#### Definition

| example                 | flow direction           |
| ----------------------- | ------------------------ |
| `grid-row-gap: 2rem`    | horizontal               |
| `grid-column gap: 4rem` | vertical                 |
| `gap: 2rem 4rem`        | horizontal then vertical |

![image-20211123002719971](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211123002719971.png)

#### gap Shorthand

One gap for all

```css
gap: 10px; 		/*SHORTHAND*/
/* Same as below */
row-gap: 10px;		
column-gap: 10px;
```

Different gaps for horiz and vertical gutters

```css
gap: 10px 20px; 		/*SHORTHAND*/
/* Same as below */
row-gap: 10px;		
column-gap: 20px;
```

#### Flexbox

gap actually works with flexbox as well, but is not yet supported by all major browsers, as of late 2021



### Fraction Units

There are more powerful ways to define columns and rows than just using flat values expressed in px, rem, or em. 

- When you do what I just described, the width and height values will be hard-coded. Responsive design demands that content scales with the size of the viewport
- Fraction units are Grid's fix to this issue

Fraction units are expressed as follows: "1fr" "2fr"

They scale linearly. If a column has a width of 2fr, then it'll be twice as long as a sibling whose column-width is 1fr



#### How these Units Work

```scss
grid-template-columns: 1fr 2fr 3fr 		//	(1+2+3 equals 6)
```

Column 1 is going to be 1/6th of the max available width
Column 2 is going to be 2/6th of the max available width
Column 3 is going to be 1/2 of the max available width
fr lengths scale linearly. Col 3 would be 3X the length of col 1

We try to use this instead of percentage units- when sizing our scalable grid-items anyway. Using percentages to divide things up evenly may lead to overflow past the grid's content box

#### Examples:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210122223456333.png" alt="image-20210122223456333" style="zoom: 50%;" /> 		Starting Point

1) Make all the columns scale with screen size, and equal in length to each other

```css
grid-template-columns: 1fr 1fr 1fr; 
grid-template-rows: 50px 50px;
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210122233920693.png" alt="image-20210122233920693" style="zoom:80%;" />

![image-20210122233900745](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210122233900745.png)

ALT:

```css
grid-template-columns: auto auto auto;  /**Also works for some reason*/
grid-template-rows: 50px 50px;
```

2) Make the second column twice as wide as all others

```css
grid-template-columns: 1fr 2fr 1fr; 
grid-template-rows: 50px 50px;
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210122234645961.png" alt="image-20210122234645961" style="zoom:50%;" />



#### Overview with Images

> ![image-20211122194531050](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211122194531050.png)
>
> Calculated based on remaining space:
>
> ![image-20211122194612189](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211122194612189.png)



### Repeat Function

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210123161522664.png" alt="image-20210123161522664" style="zoom:67%;" />

In an earlier example, we used the following code snippet

```css
grid-template-columns: 1fr 1fr 1fr; 
grid-template-rows: 50px 50px;
```

REPEAT FUNCTION: More efficient

```css
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 50px);
```

`grid-template-columns: repeat(3, 1fr);`
  3: # of columns	 1fr: the repeated width of each column

`grid-template-rows: repeat(2, 50px);`
  2: # of rows		50px: the repeated height of each row

REPEAT FUNCTION SHORTHAND: Even more efficient!

```CSS
grid-template: repeat(2, 50px)/repeat(3, 1fr);
/* Row repeat first, column repeat second.    (RC) */
```

#### Intermittent Repeat Functions

You can also choose to use repeats only for small ranges of container items. 

Let's say I want the first column to be 15% wide, and the rest to be spaced evenly with whatever width is left over:

```CSS
grid-template-columns: 15% repeat(2, 1fr); 
grid-template-rows: repeat(2, 50px);
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210123161811813.png" alt="image-20210123161811813" style="zoom:67%;" />

For the record, fr units work even while outside of a repeat function

```css
grid-template-columns: 2fr repeat(2, 1fr);
grid-template-rows: repeat(2, 50px);
/*Col 1 will be twice the size of the remaining 2 columns (half the avail space) */
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210123162618685.png" alt="image-20210123162618685" style="zoom:67%;" />



# PART 2: Diff Ways to Define Grids

### What Type of Grids can we Create?

The type of grid you create depends on the approach you select
We can divide grids into 2 categories- normal grids and mosaic grids

#### Regular vs Mosaic

|              | # of rows per column | # of columns per row | created using...                                    |
| ------------ | -------------------- | -------------------- | --------------------------------------------------- |
| regular grid | consistent           | consistent           | approach 1                                          |
| mosaic grid  | allowed to vary      | allowed to vary      | approach 2 or 3<br />(grid lines or template areas) |

VISUAL EXPLANATION:

> Regular																		Mosaic
>
> ![image-20211123003235341](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211123003235341.png) <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211123003321310.png" alt="image-20211123003321310" style="zoom:50%;" />



### Approach 1: Regular Grid Setup

When you type `display:grid`, nothing will happen right away
You must define columns widths or row heights or both before grid takes effect

#### Intro Knowledge

- CSS-grid will create grid-items based on how many elements are nested inside a grid-container
  This is just like how flexbox creates flex-items
- The difference is, `display:grid` will do next to nothing automatically, unlike `display:flex` which reformats your elements

SYNTAX:

|                          | quantity                | value meaning        |
| ------------------------ | ----------------------- | -------------------- |
| `grid-template-rows:`    | the # of rows there are | height of each row   |
| `grid-template-columns:` | the # of rows there are | width of each column |



#### Hardcoded Rows/Cols

> TEST DEMO HERE: https://codepen.io/jason2b3/pen/MWvdooO

EXAMPLE 1: 

- We tell grid we want 3 columns, but the grid container `.main` has 5 elements inside 
- The remaining 2 grid-items get shunted to the next row
  They're sized automatically, according to the grid items in their place in the previous row
- We specify the height for row1 but not row2
  That means row2 will be the size of the content inside

![image-20211122225312116](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211122225312116.png)

![image-20211122225357960](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211122225357960.png)



#### Setting up Row/Col Dimensions Preemptively

EXAMPLE 2: Create an example where you specify too many dimensions

We have 6 div elements to manipulate in our grid. The quantities in our rows/columns declarations must multiply to 6. 

```css
grid-template-rows: 100px 100px 100px;		/* 3X3=9 */
grid-template-columns: 100px 100px 100px; 	/* But we only have 6 grid elements */
```

If we had 3 numerical values for both declarations, then that wouldn't make any sense. A row or column would be excluded in our grid since it can't possibly exist

HOWEVER, we can leave these non-existent but sized rows for later. 
Once we do add another row, it'll automatically size to 100px



### Approach 2: Grid Lines

#### What Grid Lines let us do

When you  type `display:grid` or `display:inline-grid`,  the auto-placement rules will dictate where each grid item gets placed- like this...

![image-20211123105106993](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211123105106993.png)

With grid lines, we can specify different locations for each grid item
This allows us to make unconventional mosaic grids like the following...

![image-20211123105209783](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211123105209783.png)



#### Line Directions, Formulas, & Syntax

LINE FLOW DIRECTIONS:

- Column lines start and end vertically
- Row lines start and end horizontally

LINE FORMULAS:

```
ROW_LINES= #rows + 1
COL_LINES= #cols + 1
```

VISUAL DEMO:

Look at this grid with 7 rows and 8 columns:
It has 9 column lines and 8 row lines 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210123210009704.png" alt="image-20210123210009704" style="zoom: 67%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210123210303275.png" alt="image-20210123210303275" style="zoom:67%;" />

The first grid-item in our container will automatically be placed near the upper left. 
However, we can place it starting in another area with certain declarations.

```css
.griditem--classname {
  grid-column: 3/6; 	/* how wide the column will be*/
  grid-row: 2/5; 		/* how tall the row will be*/
} /* Using shorthand */

.griditem--classname {
  grid-column-start: 3; /*Start at column line 3*/
  grid-column-end: 6; /*let it span to column line 6*/

  grid-row-start: 2; /*Start at row line 2*/
  grid-row-end: 5; /*let it span to row line 5*/
} /* without shorthand */
```

These properties only work if you've divided the grid up already using `display:grid ` and `grid-template:`. Otherwise the row and column lines won't even exist for you to use

#### Demo

> TEST IT YOURSELF:  https://codepen.io/jason2b3/pen/LYjKrBz

START:

![image-20211124162458883](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211124162458883.png)

Apply the following to change where block 9 goes

```scss
.a9 {
  grid-column: 1/3; // column-width: line 1-3
  grid-row: 1/3; // row-height: line 1-3
}
```

![image-20211124162622684](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211124162622684.png)

DETAILS:

- The other grid-items that were positioned automatically will move to give block 9 enough room
  The order will still be maintained
- If you position grid items in the same location, one will be layered on top of another

#### Span and Negative Grid Lines

Instead of specifying the end row/column line, we can just tell the browser how many rows or columns we want our grid-item to span across:

STANDARD GRID-COLUMN SYNTAX:

```css
.a1 {
    grid-column: 1/4;
}
```

SPAN:

```scss
.a1 {
  grid-column: 1/ span 3; // column-width: line 1-(1+3)
}
```

![image-20211124163402065](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211124163402065.png)

NEGATIVE GRID LINES:

```scss
.one {
    grid-column: 2/-1; // column-width: line 1-(last vertical line)
    grid-row: 1/2; 
}
```

 All these techniques have the same end result!

Negative numbered column/row lines are useful when you don't know how long your grid is and just want something to span somewhere easily defined.

-1: Last column/row line
-2: Second last column/row line ...etc

#### See Grid Lines while you Work

The Firefox dev tools have a feature that keep grid lines and their number visible while you edit them

![image-20211124203156256](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211124203156256.png)

HOW:

1. Go to the Elements or Inspector tab in dev tools, then hid the "grid" popup beside any element that's identified as a flex container
2. Go to the layouts tab, then hit the following settings

![image-20211124165153756](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211124165153756.png)



### Named Lines

> Source: https://learncssgrid.com/#:~:text=7-,Naming%20Grid%20Lines,-Grid%20lines%20can

We can position and size items using named lines. 

- These work similar to regular grid lines, just with names in brackets instead. 
- You're encouraged to use dashes for names that fall under the same category, and you'll see why soon (DASH-MAGIC)

```CSS
/*START*/
.wrapper {
  display: grid;	gap: 5px;	height:90%;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 40px auto 40px;	
}
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124021509562.png" alt="image-20210124021509562" style="zoom: 50%;" />

```CSS
.wrapper {
  display: grid;
  gap: 5px;
  height:90%;
  grid-template-columns: [main-start] 1fr [content-start] 5fr [content-end main-end];
  grid-template-rows: [main-start] 40px [content-start] auto [content-end] 40px [main-end];
}
```

> ![image-20210124023211043](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124023211043.png)
>
> named row lines are boxed		named column lines are boxed

We've just named every grid line- and one of them even has 2 names. 
A good way to understand the syntax is to consider the spans jumps. 
You have a named line, a jump, then another named line

We can make the footer span from these named column-lines:
`main-start` until `main-end`

```css
.footer{ 
    grid-column: main-start/main-end;
}
```

```CSS
/*Dash-magic gives us a shorter ALTERNATIVE*/
.footer{ 
    grid-column: main;
}
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124024148723.png" alt="image-20210124024148723" style="zoom:50%;" />

#### grid-area with named grid-lines

You can use grid-area declarations as long as an area is fully boxed in with named lines(take a look at our drawing with the named lines drawn)



Let's comment out the content grid-item in HTML. We get this:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124025054517.png" alt="image-20210124025054517" style="zoom: 50%;" />

We can actually make the header fit into the content-area by using this snippet:

```css
.header { grid-column: content; } 
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124025248322.png" alt="image-20210124025248322" style="zoom:50%;" />



### Approach 3: Template Areas

These allow you to experiment with layout much more easily than with grid lines alone
It's ideal for creating layout prototypes quickly

Before: Had to specify exact gridlines for every grid-item individually
If the assigned starts/ends/spans were wrong, you'd have several things to keep track of

#### Procedure

1. Use `display:grid` on a parent element
   This creates the grid-container and its grid items
2. Set the dimensions of your grid- decide on the number of rows and columns
3. Use grid-template-areas to assign areas to placeholder names
4. Assign grid-items their areas by associating them with a placeholder name

- In our example, we make the placeholder names match the grid-item class names
- This is not a rule, but it helps us understand things easier

#### Demonstration:

>  https://codepen.io/jason2b3/pen/rNzEqjV

HTML

```HTML
  <body>
    <section class="main">
      <p class="a1">1</p>
      <p class="a2">2</p>
      <p class="a3">3</p>
      <p class="a4">4</p>
      <p class="a5">5</p>
      <p class="a6">6</p>
      <p class="a7">7</p>
      <p class="a8">8</p>
      <!-- <p class="a10">10</p> -->
    </section>
```

CSS

```SCSS
.main {
  // ... other stuff
  display: grid; // declare grid
  // Specify the grid as 8 x 3
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  // Define grid area using 8 placeholder names 
  // (we have 8 grid-items)
  grid-template-areas:
    "a1 a2 a2"
    "a1 a2 a2"
    "a3 a2 a2"
    "a3 a4 a5"
    "a6 a6 a5"
    "a6 a6 a5"
    "a7 a7 a8"
    "a7 a7 a8"
} 
// Assign each grid item a certain area zone to span across
.a1{ grid-area: a1 }; .a2{ grid-area: a2 }; .a3{ grid-area: a3 }
.a4{ grid-area: a4 }; .a5{ grid-area: a5 }; .a6{ grid-area: a6 }
.a7{ grid-area: a7 }; .a8{ grid-area: a8 }
```

![image-20211124212225488](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211124212225488.png)

#### Grid Areas and Media Queries

We can switch around the area each placeholder name spans to change the layout in an instant. 

- The only rule you must follow is that every letter in the field must form a singular rectangle
- Use dots for blank spaces

### Mosaic Practice Design

#### Objective

![image-20211124210506912](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211124210506912.png)

#### Grid Setup Steps

This thought process takes place before we implement our template area or grid-line solution

1. Set a width and height for the grid-container

- The exact dims for this part is irrelevant, since we organize grid cell sizes using fractions 
  We used 400px by 400px this time

2. DECIDE ON YOUR GRID DIMENSIONS:
   Decide based on the exercise image provided

- The y axis must be able handle row heights of 1/4 and 1/8 
  Go with 8 rows total
- The x-axis must be able to handle widths of 1/3 and 23/3 
  Go with 3 columns total
- In conclusion, our grid will be 8 x 3
  We can go alternate routes like 8 by 6, but that just results in more work

```scss
  width: 400px;
  height: 400px;
  //~ Grid properties
  display: grid; 
  // Specify the grid as 8 x 3, size the width/height using fr to keep it dynamic
  // If we resize the width/height, the aspect ratio of our grid will stay intact
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
```

![image-20211124203156256](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211124203156256.png)

#### Line Solution

FULL CODE: https://codepen.io/jason2b3/pen/OJjeoYz

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211124203043884.png" alt="image-20211124203043884" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211124203101907.png" alt="image-20211124203101907" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211124203302186.png" alt="image-20211124203302186" style="zoom: 67%;" />

#### Template Area Solution

FULL CODE: https://codepen.io/jason2b3/pen/rNzEqjV

```scss
.grid-container{
  // Create an 8 x 3 grid with placeholder names (8 because we have 8 grid-items)
  // 8 placeholder letters since we're positioning 8 grid items
  grid-template-areas:
    "a1 a2 a2"
    "a1 a2 a2"
    "a3 a2 a2"
    "a3 a4 a5"
    "a6 a6 a5"
    "a6 a6 a5"
    "a7 a7 a8"
    "a7 a7 a8"
}
// Assign each grid item a certain area zone to span across
.a1{ grid-area: a1 }; .a2{ grid-area: a2 }; .a3{ grid-area: a3 }
.a4{ grid-area: a4 }; .a5{ grid-area: a5 }; .a6{ grid-area: a6 }
.a7{ grid-area: a7 }; .a8{ grid-area: a8 }
```

#### Our Solutions are Dynamic!

We can resize the grid container and the aspect ratio of our mosaic grid will remain intact

```scss
.main {
  width: 1000px; // wider but just as tall
  height: 400px;
```

![image-20211124214215833](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211124214215833.png)



# PART 3: Grid Item Positioning and Responsiveness



### Auto-fit and Minmax (P1)

DESIRED BEHAVIOUR:

- Stuff as many grid-items as possible into a row until there's no more room
  Do not specify how many grid-items we want in a row
- Let the rest of the grid items get shunted to the next row, then repeat

#### auto-fit

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124001756106.png" alt="image-20210124001756106" style="zoom:50%;" /> START POINT: Goes until 12

This will make each grid item 100px wide. 
Auto-fit will make the browser attempt to fit any open space with a grid-item. 
If less than 100px is available, the rest of the grid-items will move to the next row

```css
.container{
  grid-template-columns: repeat(auto-fit, 100px);
  grid-template-rows: repeat(2, 100px);    
}
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124001836506.png" alt="image-20210124001836506" style="zoom:67%;" />

![image-20210124002005458](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124002005458.png)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124001908219.png" alt="image-20210124001908219" style="zoom:67%;" />

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124002017435.png" alt="image-20210124002017435" style="zoom:67%;" />

#### Minmax

Take a look at the second-last picture above. 

- In the first row, there's still a chunk of space to the right that doesn't look too nice. This can't be fixed using hardcoded pixels. 
- It sure would be nice to use fr units to distribute space evenly. 
  It would let grid-items be a bit longer than 100px when space allows

`grid-template-columns: repeat(auto-fit, 1fr)` doesn't work like this. 
1 fr will cause every grid-item to span across the entire width
We need minmax!

```css
.container{
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: repeat(2, 100px);    
}
```

WITH MINMAX
<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124002758151.png" alt="image-20210124002758151" style="zoom:67%;" />

WITH HARDCODED PIXEL VALUES
<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124001908219.png" alt="image-20210124001908219" style="zoom:67%;" />

The flex-items are a little wider than 100px now, but they are much more elegant and responsive. 

#### Implicit Rows Introduction

There's still one issue though. Look what happens when you create more rows by constricting the viewport:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124003939795.png" alt="image-20210124003939795" style="zoom:67%;" /> Rows beyond the 2nd are not 100px high

Instead, they are just as tall as their content necessitates them to be. 
Makes sense since our code snippet only involved: `grid-template-rows: repeat(2, 100px);  `



### Implicit Rows (P2)

This lesson and the previous one about autofit and minmax are directly related. Take a look at the last section in that lesson. The 3rd row is implicit- it is outside the scope of our existing code for rows, and the browser decides it's height based on space requirements only

We can tell the browser what size we want our implicit rows using this:

```css
grid-auto-rows: 100px;
```



#### `grid-auto-rows` and `grid-template-rows`

Using these together gives you excellent control on how tall rows will be, whether they're implicit or not. Be careful when using `grid-auto-rows` alone though

|                                     | grid-auto-rows will affect... |
| ----------------------------------- | ----------------------------- |
| grid-auto-rows + grid-template-rows | implicit rows only            |
| grid-auto-rows                      | every single row              |
|                                     |                               |



```CSS
/*END OF PREVIOUS LECTURE*/
.container{
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: repeat(2, 100px);    
}
```

```CSS
/*NOW*/
.container{ 
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: repeat(2, 100px);  
  grid-auto-rows: 100px;
}
/*This makes ALL implicit rows 100px tall*/
```



BEFORE:  <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124005521416.png" alt="image-20210124005521416" style="zoom:80%;" />  NOW:  <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124005712064.png" alt="image-20210124005712064" style="zoom:80%;" />

Be Careful!

```css
.container{ 
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  /* grid-template-rows: repeat(2, 100px);  */
  grid-auto-rows: 200px; /*This makes ALL ROWS 200px tall*/
} 
```



### auto-fit vs auto-fill

Take a look at our setup below. We have 2 identical containers- one has auto-fill applied while the other has auto-fit applied. 

https://codepen.io/NFuego24-7/pen/vYXwwOy?editors=1100

#### Visual Demo

- When constrained, they both appear the same. 
- Even when you stretch out the viewport enough that all 4 grid-items line up sequentially, they both look the same. 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124065254837.png" alt="image-20210124065254837" style="zoom: 50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124065335613.png" alt="image-20210124065335613" style="zoom: 50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124065357124.png" alt="image-20210124065357124" style="zoom: 50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124065418370.png" alt="image-20210124065418370" style="zoom: 50%;" />

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211125003037952.png" alt="image-20211125003037952" style="zoom:50%;" />

#### Difference Explained

-  Auto-fill will stretch out the grid items so they fill up any remaining space
- Auto-fit will leave open space if there are no grid items to fill it

```scss
.autofill-container{ 
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: 100px 100px;
}
.container2{ 
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-template-rows: 100px 100px;
}
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124065844944.png" alt="image-20210124065844944" style="zoom:67%;" />



### Responsive Image Grids (needs rework)

If you have a grid filled with photos, they're likely not all going to be equally sized. Sure, you could squish every picture in a grid-item with a specified with/height that matches its siblings...BUT photos won't all crop well

If we allow photos to be wider or taller than the default size, then shove them into a grid, we'll get photo 1. When what we really want is photo 2:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124012837059.png" alt="image-20210124012837059" style="zoom:40%;" /> 	<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124012921808.png" alt="image-20210124012921808" style="zoom:40%;" />

EXAMPLE: https://codepen.io/NFuego24-7/pen/oNzRrVa?editors=1100

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124014439563.png" alt="image-20210124014439563" style="zoom: 33%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124014521680.png" alt="image-20210124014521680" style="zoom:33%;" />

```css
.container{ grid-auto-flow:dense; }
```

YT Comment ⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆

For people having issues with images not fitting into the grid, apply the following properties to the img tag  for it to work well with all the images

```css
.container > div > img {    width: 100%;    height: 100%;    object-fit: cover; }
```



### justify-content & align-items: Move all grid-item cells within grid-container at the same time

#### justify-content (horiz)

> More visuals:  https://learncssgrid.com/#:~:text=justify%2Dcontent%3A%20start%3B

It defines how space is distributed between grid-items along the the horizontal axis

| justify-content: | effect when applied to the grid-container                    |
| ---------------- | ------------------------------------------------------------ |
| `end`            | shifts content to end of horiz-axis                          |
| `start`          | shifts content to start of horiz-axis                        |
| `center`         | uses extra space to center flex items in the middle          |
| `space-between`  | takes extra space and jams it b/t flex items evenly, but NOT on outer edges |
| `space-around`   | takes extra space and jams it b/t flex items evenly, even on outer edges |

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124042027755.png" alt="image-20210124042027755" style="zoom:40%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124042354853.png" alt="image-20210124042354853" style="zoom:40%;" />



#### align-items(vertical)

> More visuals: https://learncssgrid.com/#:~:text=align%2Dcontent%3A%20start%3B

Controls how space is distributed on the vertical axis

| align-items:        | effect                                                       |
| ------------------- | ------------------------------------------------------------ |
| `start`             | shifts items to the vertical-axis start                      |
| `end`               | shifts items to the vertical-axis start                      |
| `center`            | shifts items to the vertical-axis center                     |
| `stretch` (default) | items grow in order to fit across the entire container height<br />fails if the grid-item heights/widths are set |
| `space-around`      | places an even amount of space between each grid item<br />With half-sized spaces on the far ends |
| `space-evenly`      | places an even amount of space between each grid item, including the far ends |
| `space-between`     | places an even amount of space between each grid item, with no space at the far ends |

Feel free to combine these options with the justify-content property to shift your items where you want them across both the horizontal/vertical axis. 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124044407083.png" alt="image-20210124044407083" style="zoom:40%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124044643015.png" alt="image-20210124044643015" style="zoom:40%;" />

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124044901647.png" alt="image-20210124044901647" style="zoom:40%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124045111261.png" alt="image-20210124045111261" style="zoom:40%;" />



### justify/align-self 

justify-self: justify-items but applied to grid-items individually
align-self: align-items but applied to grid-items individually 

```css
.content { grid-column: 3/-1 }  /* the content is yellow btw */
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124062424488.png" alt="image-20210124062424488" style="zoom: 33%;" />

```css
.content {
  grid-column: 3/-1;
  align-self: end
}
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124062752202.png" alt="image-20210124062752202" style="zoom: 33%;" />



### justify/align-items: Move grid-item content inside their cells

#### justify-items

Controls how grid-items are aligned on the horizontal axis of their cell

| justify-items: | effect                                                     |
| -------------- | ---------------------------------------------------------- |
| start          | aligns items to be flush with the start edge of their cell |
| end            | aligns items to be flush with the end edge of their cell   |
| center         | aligns items in the center of their cell                   |
| stretch        | fills the whole width of the cell (this is the default)    |

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124054700792.png" alt="image-20210124054700792" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124054723380.png" alt="image-20210124054723380" style="zoom:80%;" />

EXAMPLES:

​					START:  <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124051949712.png" alt="image-20210124051949712" style="zoom: 33%;" />

Notice the difference between justify content and justify-items in grid:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124053121465.png" alt="image-20210124053121465" style="zoom:33%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124053437605.png" alt="image-20210124053437605" style="zoom:33%;" />



#### align-items

Controls how grid-items are aligned on the vertical axis of their cell

| justify-items: | effect                                                     |
| -------------- | ---------------------------------------------------------- |
| start          | aligns items to be flush with the start edge of their cell |
| end            | aligns items to be flush with the end edge of their cell   |
| center         | aligns items in the center of their cell                   |
| stretch        | fills the whole width of the cell (this is the default)    |

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124055409431.png" alt="image-20210124055409431" style="zoom:80%;" /><img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124055434075.png" alt="image-20210124055434075" style="zoom: 80%;" />	

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124051949712.png" alt="image-20210124051949712" style="zoom: 33%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124055753899.png" alt="image-20210124055753899" style="zoom:33%;" />



#### Understanding Cells

CELL:
The space inside a grid item that the content has freedom to position itself inside

CONTENT:
What is inside the grid-item

The content inside a grid item can move around in their cells for multiple reasons

1. Perhaps the width of a grid item is determined by the content itself
   An explicit width is not stated in this case
2. Maybe the grid item width is explicitly coded, but it does not fully expand across the grid item
   The content then has enough space to rattle around inside the cell

#### Demonstrating how Cells Work

Why we don't show code in this demo section

- Each example features an explanation for how the grid was laid out
- You can piece it together without any explanations just by looking at the SCSS code in the codepen, but that was not the focus of this lesson

EXAMPLE 1: https://codepen.io/jason2b3/pen/ExvBQEN

- Each grid item cell spans 50% of the viewport width thanks to `grid-template-columns: 1fr 1fr`
- The grid items themselves have not been given a width
- For this reason, `justify-items: end` will shift all grid items to the right while restricting their size
  The content inside each grid item is an integer, which requires very little space

Before `justify-items:end`: 

![image-20211124131125854](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211124131125854.png)

After `justify-items:end`: 

![image-20211124131155156](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211124131155156.png)

EXAMPLE 2: https://codepen.io/jason2b3/pen/wvqLyQZ

- Each grid item cell spans 50% of the viewport width thanks to `grid-template-columns: 1fr 1fr`
- The grid item elements have been given a hardcoded width of 100px this time
- The grid items will still get shifted by justify-items, but will remain with the same 100px width

Before `justify-items:end`: 

![image-20211124131752001](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211124131752001.png)

After `justify-items:end`: 

![image-20211124131827231](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211124131827231.png)



### Difference between x-content and x-items

justify-content & align-content: 
Defines how space is distributed between grid-items along the horiz or vert axis
Moves all the grid-items into a certain orientation WITHIN THEIR CONTAINER

justify-items & align-items: 
Defines how space is distributed between grid-items along the horiz or vert axis
Moves all the grid-items into a certain orientation WITHIN THEIR CELL

#### justify-content VS justify-items

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124060750346.png" alt="image-20210124060420497" style="zoom:80%;" />    <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124060939829.png" alt="image-20210124060939829" style="zoom:80%;" />		

#### align-content VS align-items

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124061105179.png" alt="image-20210124061105179" style="zoom:80%;" />     ![image-20210124061135699](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124061135699.png)



### Grid/Flexbox HyperDrive

Using these 2 tools together can yield some great results

Flexbox:
Good for creating content that spans across 1 row/column only (ex. navs)

Grid:
Perfect for 2D layouts that require more precise positioning
Though these can be created with flexbox, your markup is much cleaner w/ Grid

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124070714642.png" alt="image-20210124070714642" style="zoom:67%;" />

#### Layout First vs Content First

Flexbox takes basis in the content (content-first) ======================

- When you enable flexbox, a lot of the flex-items position themselves automatically
- We position items using the box-model margins, padding..etc

Grid takes basis in the layout (layout-first) =========================

- When you enable grid, nothing happens until you define the grid itself by making declarations involving the columns and rows
- We must position the items according to their desired position in the layout's grid
  It'll cause major visual issues when you try to put 2 grid-items in the same cell

#### Combining the Two

1. Make an individual grid-item element a flex container 
   (should have children in HTML)
2. Manipulate the flex-container or its flex-items however you want using flex-box declarations

This is the best way to go about designing! You get the 2D layout-creation powers of grid, and flexbox's ease of use in simple 1D scenarios

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124070714642.png" alt="image-20210124070714642" style="zoom: 50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124072221110.png" alt="image-20210124072221110" style="zoom:67%;" />

Nested Grids: [CSS Grid Tutorial #5 - Nested Grids - YouTube](https://www.youtube.com/watch?v=211A79O_jX8&t=55s)  (simple)

### Mimic Flexbox w/ grid-auto-flow

We can make Grid act like flexbox using a specific command

Grid will automatically take the nested elements inside a grid container and treat them like Flexbox would treat flex items

> Test here: https://codepen.io/jason2b3/pen/KKvLmmw

#### Flex-Items in a Horizontal Row

Flexbox

```css
display: flex;
flex-direction: row;
```

Grid

```css
grid-auto-flow: column;
```

![image-20211122232900097](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211122232900097.png)

#### Flex Items in a Vertical Column

Flexbox

```css
display: flex;
flex-direction: column;
```

Grid

```css
display: grid;
grid-auto-flow: row;
```

![image-20211122232844884](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211122232844884.png)

# PART 4: Using Grid Effectively



### Creating Layouts 

When you create something using grid, you should have a general idea for 

#### auto Widths

You shouldn't explicitly state the width of every single column you create in grid. 

- Let the width be decided by the grid item content by using `grid-template-columns: auto` for one width value or even multiple
- When you could this with fractional units, arranging items becomes much easier
  You'll see what I mean in the next subsection

#### fr units for Spacing

Oftentimes you'll want spaces between grid-items whose widths you're not entirely sure of

- fr units let you put evenly sized spaces around any grid-items you specify
- This makes layout design much easier, once you get used to applying this to common webpage features like navbars for instance

——————————————————————————————————————————————————————

EXAMPLE 1:
For this navbar, we want all the anchors on the right side, and the Nintendo logo on the left
We know the width of the Nintendo SVG, but not the other grid-items (width determined by content)

![image-20211128035024176](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211128035024176.png)

THOUGHT PROCESS

- We have 4 grid-items we'd like to position, and a need for 1 open space 
- Our grid will have 5 columns (4+1) and a single row because that's all we need

```scss
.navbar {
  display: grid;
  // Define a template and place the open space (1fr) right after nintendo's SVG
  grid-template-columns: auto 1fr auto auto auto; 
  grid-template-areas: "a b c d e";
  // Assign areas based on our template
  .nav__link--nintendo { grid-area: a }
  .nav__link--support { grid-area: c }
  .nav__link--wishlist { grid-area: d }
  .nav__link--login { grid-area: e }
} // we leave area b unassigned on purpose- we want it to contain blank space
```

You can assign areas to grid-items using grid line numbers instead, but template areas are easier

——————————————————————————————————————————————————————-

EXAMPLE 2: 
https://codepen.io/jason2b3/pen/vYeBJwL (SVG's removed)

![image-20211128040916276](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211128040916276.png)

```scss
.navbar {
  display: grid;
  // Define a template and place the open spaces b/t the group of 5 anchors
  grid-template-columns: 1fr repeat(5, auto) 1fr; 
  grid-template-areas: "a b c d e f g";
  // Assign areas based on our template
  .nav__link--games { grid-area: b }
  .nav__link--hardware { grid-area: c }
  .nav__link--news { grid-area: d }
  .nav__link--play { grid-area: e }
  .nav__link--play { grid-area: f }
} // we leave area a/g unassigned on purpose- we want it to contain blank space
```



# ========= SASS ===========

Crash course: [Sass Tutorial for Beginners - CSS With Superpowers - YouTube](https://www.youtube.com/watch?v=_a5j7KoflTs&t=1785s)
SASS functions:  https://www.sass.hk/en/documentation/Sass/Script/Functions.html

One topic I did not discuss in this document or the first is CUSTOM CSS PROPERTIES. 

- CSS actually lets you create variable natively now. 
  However, it is not fully supported by IE or older browsers. 
- Since SASS compiles to regular old CSS, this actually reduces the amount of work we have to do. We don't need to create any fallbacks like we would with custom CSS variables

In conclusion, only learn custom CSS variables if your job demands it
There are much more important things to learn since you're operating independently ATM.



# Fundamentals

### What is SASS?

- SASS is an extension language- it gives base CSS extra abilities that'll make you never want to write vanilla code ever again. 
- In this crash course, you'll need Live Server and Live Sass Compiler extensions enabled in your VS Code. There are other ways to run sass, 1 of which involves node.js...but this is easier (see your setup file for installation details)

#### File Types

SASS actually supports 2 sets of syntax:
SCSS Syntax (.SCSS files)
Indented Syntax (.SASS files)

- We'll only be learning the SCSS syntax in our course due to it's higher popularity, and the fact that regular CSS works when writing for this type of file. 
- Indented syntax is older, and doesn't involve the use of semicolons and curly braces like vanilla CSS does. It's incongruent with what we're used to

#### Live SASS Compiler

- The full setup details are in our web-dev setup markdown file
- Once installed, you'll see the following button at the bottom of your VS Code client

![image-20210124224432040](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124224432040.png)

This will convert any sass into regular CSS, alert you of any errors...etc

Once you click that button, it will automatically create a CSS folder on the same level as your root index.html file.

Don't ever type anything inside of them. Just let sass convert itself into CSS and dump it there

![image-20210124224712708](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124224712708.png) 

#### Benefits

1) You can comment out individual lines with `//`

This is huge! You can write comments beside lines of code and still have group highlight work properly in VS Code. 

Vanilla CSS required you to comment underneath code lines, or else /**/ would get caught up in the wrong place

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124231539822.png" alt="image-20210124231539822" style="zoom:67%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124231619544.png" alt="image-20210124231619544" style="zoom:67%;" />

2) Can define SASS variables which are extremely easy to call upon and reuse.
If we have a complex color code we want to use in several cases, SASS will allow you to only type it once. If you want to change that color site-wide, you only need to change it once. Great for dry-code!

### Variables

- Sass variables, like all Sass identifiers, treat hyphens and underscores as identical. `$font-size` and `$font_size` both refer to the same variable
- Stick `$` in front of a name, then use a colon to define a variable value

EXAMPLE:

```scss
$mycolor: lime;
$thick-ness: bold;	// used a dash to define a variable

body {
  background-color: $mycolor;
  font-weight: $thick_ness;		//called vari with underscore. (interchangeable)
}
```

In the first 2 lines we define a variable, and store a color/font-weight inside 

We then use regular CSS to color the body, and use our variable value instead of defining the value manually. 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210124234338926.png" alt="image-20210124234338926" style="zoom:80%;" /> compiled CSS file

As you can see, the value of lime was compiled to CSS, not the variable itself



#### SASS Variables vs CSS Variables

If we're being technical, regular CSS does have variables- they were just introduced fairly recently. 

- Their browser support hovers around 90%, but that doesn't really matter. When using SASS..the variable will compile to the value it holds. 

#### Variable Scope

Variables declared at the top level of a stylesheet are *global*-they can be accessed anywhere in their module after they’ve been declared. 

Those declared in blocks (curly braces in SCSS or indented code in Sass) are usually *local*, and can only be accessed within the block they were declared.

#### Changing Variable Values

- Changing the value of SCSS variables is simple, you just redeclare with a new value
- WARNING!
  Changing a variable value will not automatically change every element that uses it for styling
  You must redeclare the

EXAMPLE: Navbar Resizing

```scss
$navbar-height: 4.6rem;
.navbar {
  height: $navbar-height; // changes @ 77rem
}

@media (min-width: 77rem) {
  $navbar-height: 5.4rem; // Increase the navbar height past 77rem
  .navbar {
    height: $navbar-height; // without this line, the variable change does nothing
  }
}
```



### Interpolation

In SASS, interpolation is an insertion using what's in curly brackets: `#{$vari-name} `
Create a variable, then insert it practically anywhere you like
Can put the `&` symbol in there as well

Define half a class name then use interpolation to fill out the rest for example:

```html
<p class="super_fuegocide"> This is my final move! </p>
```

```scss
$move: "_fuegocide"
    .super#{$move} { 
        color:blue; 
        font-size: 4rem; 
        font-weight: bold;
        }
```

![image-20210126014659016](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210126014659016.png)

If you find that a variable isn't working somewhere on your code, just try wrapping it in a `#{ }`



### Maps

SASS maps function similarly to arrays in JS- they are essentially just sets of key-value pairs:

```scss
$font-weights: (
    "regular": 400, 
    "medium": 500, 
    "bold":700
); /*Create your SASS map*/
```

Select a key using the map-get function:
`map-get($map-name, key)`

```scss
body { 
    font-weight: map-get($font-weights,bold); 
	}
```



### Clipped Backgrounds

As I'm sure you've noticed, some webpages have background that are not simple 4 sided polygons. We can recreate these general shapes with https://bennettfeely.com/clippy/

Be careful though- the support for the `clip-path` you need for this tech is spotty
https://caniuse.com/css-clip-path

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210125182851549.png" alt="image-20210125182851549" style="zoom: 33%;" />

#### Procedure

1. Use the site to click and drag circles to make whatever shape you want. 
   Implementing arcs is even possible. 
   Copy the clip-path link it generates at the bottom of the screen:

`clip-path: ellipse(100% 97% *at* 3% 7%);`

Pro-tip: If you want your clipped background to be a solid color, you don't need to care about the demo size. 

If you want your background to be a photo, change the demo size on the clippy site to match the average user's viewport size. You may have to do this twice: once for mobile, and once for desktop

![image-20210125183542638](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210125183542638.png)

2. Use the following code to implement your clipped background:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210125184705783.png" alt="image-20210125184705783" style="zoom: 25%;" />

```scss
body, html { height: 100%; } // Setup at the top of your document

body {
  margin: 0;
  .backdraft {
    clip-path: ellipse(100% 97% at 3% 7%);
    background-color: blanchedalmond;
    width: 100%; height: 100%; 
    position: absolute; z-index: -10;
  }
}
```

It's possible that not every line of this snippet is essential, but we cover all bases this way. Maybe the body and HTML heights were already 100%...

#### Nesting for Aesthetic Only

You may have noticed that we nested a CSS rule inside another CSS rule. 
This was done to help visualize the backdraft would be part of the body. 

- You could have placed `.backdraft { everything }`, outside of the body rule, and nothing would change. 
- In fact, when our SASS compiles to CSS, that's exactly what it does:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210125184245852.png" alt="image-20210125184245852" style="zoom:50%;" />



### Nesting as a Selector Shortcut

- The point of nesting in SASS is to eliminate the need to write very specific selectors when targeting deeply nested HTML elements. 
- We do that by simply nesting CSS rules inside of other CSS rules.
- When compiled to regular CSS, the computer will eliminate all nesting by creating more specific selectors for us automatically

Just don't overuse nesting to the point where things are too deep. 
Never go beyond nesting level 3

#### Examples

Here's a very specific selector:  

```scss
/*CSS Equivalent*/
#sidebar ul li {
      background-color: #F2F2F2;
      color: #404040;
    }
```

Feel free to replace it with this:

```scss
// SASS equivalent
#sidebar {
	ul {
		li { // iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
			background-color: #F2F2F2;
			color: #404040;
			} // iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
		}
}
```

What you're thinking: The 2nd snippet with nesting looks much worse than the first. 

Things can get much more complicated than this in our projects. 
Maybe a deeply nested element has a class name, and you want to apply styling to its child without assigning a new class name.

#### Ampersand Symbol

This symbol acts like a variable that equates to the nearest parent selector
It's best used on pseudo-elements and selectors- just make sure not to include a space between `&` and `:`

EXAMPLE 1: 

```scss
// SASS
.button {
  			body.page-about & { stylin }
		}
/*Equates to this in CSS*/
body.page-about .button { stylin }

```

`& = .button` since that's the the nearest parent selector

EXAMPLE 2: Deeper Nesting:

Using & on a lever deeper than 2 will lead to some complex selectors being chosen:

![image-20210126010427144](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210126010427144.png)

#### Emulating Complex CSS Selectors

~ > :

```scss
/*CSS*/
.button > span { }
.button + span { }
.button ~ span { }
//SASS
.button {
  > span { }
  + span { }
  ~ span { }
}
```

Pseudo Classes

```scss
/*CSS*/
.button:visited { }
.button:hover { }
.button:active { }
// SASS
.button {
  &:visited { }
  &:hover { }
  &:active { }
}
```

#### Nested Ampersands

You can nest ampersands deeply within selectors that already involve ampersands

EXAMPLE:

```scss
.navbar{
    & > .burger {
        
        & > .line1 {
            color: red; 
        }
        
    }
}
```

This will compile into the following CSS:

```CSS
.navbar > .burger .line1{
    color: red;
}
/* Ampersand 1 references .navbar while ampersand 2 references .burger */
```

#### Don't use & for Descendants

SCSS will automatically apply a descendent status to any element nested within another
For this reason, only use & when you need to specify the element it's be referencing

EXAMPLE: When it isn't required

```scss
.navbar{
    & li{ } // this isn't wrong, just redundant
}
// is the same as...
.navbar{
    li{ }
}
```

EXAMPLE: When it is required

```scss
.navbar{
    & > li{ } // specifying that li is not just a descendent, but a direct one
}
```



### Nesting to Create Multi-Target CSS Rules

CSS
Can apply the SAME STYLING to multiple elements at the same time

SASS
Can target multiple elements with DIFF STYLING at the same time

#### Basic Example

```SCSS
// SASS Equivalent 
	#sidebar {
        position: fixed;
        height: 100%;

        ul { //uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
            list-style-type: none;
            padding: 0;

            li {
                background-color: #F2F2F2;
                color: #404040;
            	}
       	 	} //uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
    } 

```

Compiles to...

```css
/*CSS Equivalent*/    
	#sidebar {
        position: fixed;
        height: 100%; }
    #sidebar ul {
        list-style-type: none;
        padding: 0; }
    #sidebar ul li {
        background-color: #F2F2F2;
        color: #404040; }

```

#### EXAMPLE 2: Nest Flexibility

Consider this our HTML code:

```scss
  <section class="chaps">
    <div> 
      <p> Insert text hither</p>
    </div>
  </section>
```

In SASS, we don't have to specify section -> div -> p

- Feel free to target all p tags in this section element with a descendant combinator in the form of a nested rule. 
- Be careful though, this'll affect new p tags you throw in there

```scss
.chaps {
	p { color:black; font-size:4rem; padding:40px; margin:0;}
}
```

Compiles to:	<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210125232709262.png" alt="image-20210125232709262" style="zoom:80%;" />

### Nesting too Deep

Rule of thumb: Nest 1 level deep at maximum

- The deeper you nest, the more specific your CSS rules will be
- Overriding those rules later on will be more challenging 
  You will often be forced to do so when writing media queries

#### EXAMPLE:

```HTML
<section class="wrapper">
	<div class="layer1">
        <p class="layer2"></p>
    </div>
</section>
```

```scss
// SASS Syntax
.wrapper{
    .layer1{
        p{color:black}
    }   
}
// Compiles to...
.wrapper .layer 1 .p{
    color:black
}
```

Now, if we want to change our text color to red, we'll have to beat this extremely specific CSS rule

# Reusable Code Blocks

### Normal Mixins

Mixins are reusable groups of CSS declarations- variables on steroids 
They are created on the main SASS file and can be used anywhere on there

```scss
// __partials.scss or something
@mixin mixName { /*Whatever code you want*/ }       //Mixin creation

// in a new file
@import "URL TO __partials.scss";
.selector {
    margin: 0;
    @include mixName;	/*Mixin is called here*/
}
```

- You can use mixins to do practically anything. It has great potential when used alongside `& `- which subs in whatever parent selector it finds itself in when nested. 
- Good for reusing clear-fixes on multiple locations across websites- like setting margins to 0 for example. Generic actions that don't need to be repeated 

#### Example 1: Simple text Styling

Style every p-tag with red letters in italics- minus the first one

```html
  <section class="chaps">
    <div> 
      <p class="hidden_lotus"> This is my final move!</p>
      <p> Random paragraph 1</p>
      <p> Cringe randoms </p>
    </div>
```

```scss
@mixin textStyling { //reusable mixin
  font-style: italic;
  color: crimson;
  font-size: 2rem;
}

.chaps > div >p:not(.hidden_lotus) {
  @include textStyling;		//Mixin called upon here
}
```

Compiles to this in CSS:  <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210126172205782.png" alt="image-20210126172205782" style="zoom:67%;" />

As you can see, you pretty much have to call upon the mixin while nested inside another rule. The mixin itself is just a bunch of declarations with no selector

![image-20210126172132072](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210126172132072.png)

s

### Mixins with Arguments

Just like JS functions, mixins can operate with or without an argument. 

- Without arguments, mixins are just reusable sets of CSS declarations- very useful, but inflexible! 
- With arguments, you give mixins the ability to apply some of its declarations a little differently each time

Imagine this: 

- You have a website with all sorts of paragraphs, text, headers...etc. You want to style all your site's text to be white font that's 2 rem high and bold. 
- However, you have one issue: You want the header text to be pink instead
  Aside from that, all the styling's the same
- Does that mean you need to create a separate mixin for that? No it doesn't! 
  Just add an argument to your mixin instead

#### EXAMPLE

```scss
@mixin mixText($color-choice) {
  font-size: 2rem; font-weight: bold; margin:30px; 

  color: $color-choice; // <-- Allowing the argument input to dictate the color
}
```

The color-choice argument we funnel into the mixin will be assigned to the actual color value inside the declaration.

```scss
p { @include mixText(white) }	// white text for all paragraph tags
h1 { @include mixText(Fuchsia) }	// pink text for the headers
```

![image-20210126180639438](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210126180639438.png)

#### important!

1. When we use this type of mixin, we must remember to include the (argument) after its name. 

- Be sure to check for previous uses of the mixin-if any- because using an argument mixin without the actual argument will result in errors

```scss
//reg mixin:
@mixin mixText{ /*styling */}
.selector { @include mixText}

// argument mixin
@mixin mixText(ARG){ /*styling */}
.selector { @include mixText(ARG)}
```

2. You are allowed to pass in more than 1 argument



### Assigning Class-Specific Stylings with Mixins

This lesson's end goal is similar to that of the @each lesson. There, we ran code each time a class name appeared in our HTML. The class names affected by the @each function were all deliberately part of a map

This time, let's make up a class that doesn't exist yet
Give it certain declarations we want applied to it always
Place that class name on any HTML element we want styled that way

#### Example:

We apply these class names as the very last step
But we put them here to conserve space and to show our HTML

```html
<div class="light-mode"> </div> 
<div class="dark-mode"> </div>
<div class="light-mode"> </div>
```

MIXIN EXPLANATION:

if argument is "light": induce gray background, make block inline
if argument is "dark": induce black background, make block inline
if argument is anything else: induce purple background, make block inline

```scss
@mixin shade($theme) {
  @if $theme == light { background: gray; display:inline-block }
  @else if $theme == dark { background: black; display:inline-block }
  @else { background: purple; display:inline-block }
}

.box1, .box2, .box3 { width:100px; height:100px } //block dimensions
```

Now, create your classes that'll induce function action:

```scss
.light-mode { @include shade(light) }
.dark-mode { @include shade(dark)}
```

Assign class="light-mode" to an element to change the background to gray
Assign class="dark-mode" to an element to change the background to black

#### Alt

You can do this with Boolean statements as well. I personally prefer my way, but you can check Mixin Example 2 from this video if you want to understand that method better: [Sass Tutorial for Beginners - CSS With Superpowers - YouTube](https://www.youtube.com/watch?v=_a5j7KoflTs&list=PLt9qfj4DU1Mj1vYZdShpnA9nWmCIYc1oa&index=4&t=1506s)



### Media Queries through Mixins (still unsure)

#### Desktop First: For Explanation Purposes

Create a mixin named "mobile" or something thematically similar that uses an external variable to tell it where the line b/t it and desktop lies.

```scss
$mobile-max: 800px; // external variable that draws the line b/t desktop and mobile
@mixin mobile {
    @media (max-width: $mobile-max) { @content; }
}
```

Apply this to the main or body tag- whatever works

```scss
.main {
    @include mobile {
        flex-direction:column; //what occurs when the viewport is under 801px.
    }
}
```

The above code is your media query now




#### Mobile First

```scss
$desktop-min: 800px; // external variable that draws the line b/t desktop and mobile

@mixin desktop {
    @media (min-width: $desktop-min) { @content; }
}

.main {
    @include mobile {
        flex-direction:column; //what occurs when the viewport is under 801px.
    }
}

```

Haven't tested either of these on a big project yet*



### Partials

Partials are SASS files named with a leading underscore: `_partialName.scss` 
The underscore lets the compiler know not to compile this file into the CSS doc

Use these to avoid writing all your SASS code in a single file.  Instead, store snippets of SASS inside of other separate files Call them when needed with `@import './partialName';` (no .scss file extension req'd)

Remember to re-save the main SASS file after you edit your partial file- otherwise the changes won't take effect (even with live reloading and autosaves in VS Code)

#### Common Uses for Partials: 

Store all variables/maps, universal stylings...etc

When working with large teams, SASS can be a lifesaver since it let's you divide up the code into different sections for each member to work on



#### Extra Details

MULTIPLE PARTIAL IMPORTS: 

1. You don't need to write @import each time you import a partial 
   Simply add a comma and continue on the same line. 

```scss
@import "config", "main", "home", "menu", "about"
```

2. If you import a partial file with variables and their values, they won't actually be compiled in the CSS file- since variables only get their values compiled when used. 

#### Use 1: Execute code inside another SCSS file

_burger.scss

```scss
#burger {
  width: $burger_width; 
  // height: 10px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
} // 
```

- We place this code in _burger.scss, and will execute it inside navbar.scss
- Perhaps we don't want to include too much code in navbar.scss, and would prefer to split up our code this way instead

navbar.scss

```scss
@import "./helpers/burger"; // all code in above snippet is executed here
```



#### Use 2: Export variables/mixins

_partialhelper.scss

```scss
// Colors
$nintendo-red: #e60012;
$dark-red: #ac000d;
$textbox-gray: #efefef;
$navbar-shadow: #dadada;
// Footer gradient involves following 2
$dark-gray: #3b3b3b;
$text-gray: #484848;

// Mixins
@mixin flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
```

navbar.scss

```scss
@import "./partialHelper"; 
// Prev. snippet's code is executed, but the partial itself doesn't style anything. 
// Instead, it gives us variables and mixins we can use to style things 

.button {
    color: $text-gray // use the variable stored in your partial
}
.nav__link {
  @include flex-row; // use the mixin stored in your partial
}
```



### Extends

Extends allow us to save a block of CSS declarations in a special variable. We can call upon and use that variable later. Sound familiar? They're just like mixins

```scss
%name { /*stylin*/ }
.selector{ @extend %name; }
```

Although both actions accomplish the same thing, there are a few key differences to keep in mind:

1. Extends create dry CSS code when compiled, unlike Mixins
2. Extends cannot have arguments, making them less flexible than mixins

#### How Mixins and Extends Compile

We start off with our header and 3 paragraphs colored randomly.  Let' turn all the text white in 2 diff ways: with mixins and extends

![image-20210126204153593](file://C:/Users/jason/AppData/Roaming/Typora/typora-user-images/image-20210126204153593.png?lastModify=1611630926)

```scss
<h1 class="head"> This is my final move!</h1> <!-- HTML -->
      <p class="p1"> Random para </p>
      <p class="p2"> Random para</p>
      <p class="p3"> RAnd0m para </p>
    </div>
```

Mixin: Copies mixin's code over to where it's used Extend: Adds a selector (more lean)

##### MIXIN Creation and Call

```scss
@mixin mixtext {
  font-size: 2rem; color: white; font-weight: bold; margin: 30px;
} 

.head~p { @include mixtext; }
h1 { @include mixtext; }
```

The mixin's code block repeats when compiled to CSS: 

##### EXTEND Creation and Call

```scss
%name { 
    font-size: 2rem; color: white; font-weight: bold; margin: 30px;
}

.head~p { @extend %name;}
h1 { @extend %name; }
```

Extends just reuse multiple selectors on a single code block: 

![image-20211204152144690](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211204152144690.png)

Both result in the same thing: 
![image-20210126204617831]

#### When to Use Extends vs Mixins

Only use extends when the elements you're using it on are THEMATICALLY RELATED and don't require the use of arguments

![image-20210126200518665]

- For example, if you want to style the buttons on the right using the same few declarations, use extends
- If you want to style the buttons, some nav elements, and a paragraph...these are not thematically related. Use a mixin

The reason why we only use extends with thematically related content is because of how it compiles. 

Extends makes thematic sense here:

```scss
.button1, .button2 {
    /* styling */
}
```

But wouldn't make thematic sense here:

```scss
.button1, .button2, ul_item1, p {
   /* styling */ 
}
```



### CSS Custom Properties (variables)

SASS offers us a simple way to use dynamic variables in CSS, but we can accomplish the same thing natively with custom properties. Aka. CSS variables

WHAT MAKES THEM VIABLE?

- Since custom properties are native to CSS, it doesn't have to be compiled, plus you can access them from JS as well
- Like SASS variables, they help avoid repetition. Often, we'll set the same property and value on multiple elements across our webpage

LIMITATIONS

- IE does not support it
- You can't concatenate like you can in SASS (I rarely use that feature anyway)
  Ex. Set a custom property to 20, then use it to set 20+'px' somewhere in your CSS doc

#### Basics

- Define your CSS variables in a scope, starting off each name with `--`
- We usually define custom properties on the root scope so they can be applied  anywhere on the CSS doc, but it's not a rule. It's useful not to sometimes
- The names don't HAVE to be complex, but oftentimes they look confusing due to BEM

EXAMPLE: (you don't need to see the rest of the doc syntax to understand)

```css
:root{
  /*Anything we define in here will be usable across the CSS doc*/
  --nameProp: lavender
}
body{
  background-color: var(--nameProp) /* body background should now be lavender */
}
```

#### Defining Variables on Different Scopes

If you define a custom property on a different scope, that variable will only be available to elements inside that scope

HTML: This is the starter code for every example in this lesson

```html
<ul id="list1"> LIST 1
	<li class="uno">List Item 1</li>
	<li class="uno">List Item 2</li>
	<li class="uno">List Item 3</li>
</ul>
<ul id="list2"> LIST 2
	<li class="dos">Reality is an illusion</li>
	<li class="dos">The universe is a hologram</li>
	<li class="dos">Buy gold!</li>
</ul>
```

CSS:

```css
#list1{
  --textSize: 48px;	
  --textColor: red;
  color: var(--textColor);
}

.uno{
  font-size: var(--textSize);
  /* The text color gets inherited without declaring it here*/
}
.dos{
  font-size: var(--textSize); /* does nothing */
}
```

​	Before CSS: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210412190327827.png" alt="image-20210412190327827" style="zoom:80%;" /> After CSS: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210412190257319.png" alt="image-20210412190257319" style="zoom:80%;" />

THE EFFECT OF DEFINING VARIABLES ON A SCOPE:

- In this example, we can use the custom variable `--textSize` on the element with the id of `list1` AND any elements nested inside. 
- That's all, because we defined it on a narrow scope instead of putting it inside `:root{ }`

PROPERTY INHERITANCE

- Just like regular CSS properties, custom properties cascade downwards and are inherited by other elements. 
- That's why the list items got painted red, when we only used that custom property on the unordered list

#### Overrides

If you redefine a custom property on a different scope, everything within that scope will have a different value for that custom property. Outside the scope, it will be as if you left it unchanged

INSERT STARTER HTML CODE HERE:

```CSS
:root{ --textColor: red; }	/*custom property is initially defined as red*/

.uno{
  --textColor: blue; 		/*redefine the custom property as blue*/
  color: var(--textColor); 	/*results in blue text*/
}

.dos{
  color: var(--textColor);	/*still colors text red*/
}
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210412192613030.png" alt="image-20210412192613030" style="zoom:80%;" />

#### Fallback Property Values

Add a second parameter to `var (--customProp)` if you want to define a fallback value. This makes it so the browser resorts to using the fallback if/when you try to use a CSS variable outside of its scope

INSERT STARTER HTML CODE HERE:

```css
.uno{
  --textColor: blue;
  color: var(--textColor); /*custom prop defined on this scope*/
}

.dos{
  color: var(--textColor,orange); 
    /*custom prop is out of range here, so browser resorts to orange*/
}
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210412193135414.png" alt="image-20210412193135414" style="zoom:80%;" />

You can learn how to access these CSS variables through JS in a different notes file. (The one that deals with DOM manipulation. WARP KEY: L943VR)



# Code Splitting

### Code Split with SCSS Partials

#### Details and Purpose 

- It's most efficient performance-wise to have a single CSS file style an entire webpage
  We do not want multiple stylesheet `<link>` elements in the index.html header
- Unfortunately, managing a large and complex file like that is a logistics nightmare

WHEN TO USE THIS:

1. When building webpages with HTML/CSS/JS only
2. When using the mobile-first design approach

- This also works with desktop first, but you'd have to change where you place code in the example I give in a later section
- The difference is minimal though

#### Approach

We're going to use several SCSS files to style individual components on a webpage
They should be partials, so we can combine them all inside your singular main SCSS file

PROCEDURE:

1. Create your main SCSS file then link it to your index.html

```HTML
<!-- index.html -->
<link rel="stylesheet" href="./compiled_css/global.css" />
```

2. Inside your global scss file, add all your global stylings
   At the end, import all the partials that style a webpage's individual components

global.scss

```scss
// Include all your default global stylings (below is just 1 example)
* {
  margin: 0;
  padding: 0;
}
// Import all the partials styling individual components
@import "./components/navbar", "./components/characters",
  "./components/screenshots", "./components/gamePoster", "./components/showcase",
  "./components/details/folderSum";
```

#### How Component Partials should Look

Identify what the main parent container for your component is
Place media queries for that component inside the selector scope for that parent container

EXAMPLE:

```html
<nav class="navbar" onselectstart="return false;">
    <object></object>
    <a>Support</a>
</nav>
```

`_navbar.scss`

```SCSS
// mobile styling works here 
.nav {
    // mobile styling works here
    width:100%;
    padding: 0;
    // Place desktop stylings inside media queries
    @media(min-width:767px) {
         width: 50%;
         padding: 20px 0;
    }
}
// mobile styling works here too(try not to use this spot though)
```

If using desktop-first, swap all the locations for desktop/mobile stylings in the above snippet

#### Demo

Check out my smash ultimate webpage where I use this technique to keep my SCSS files short/focused/organized

> https://github.com/Jason2B3/nintendo_webpage
> go to `/scss/components`



# Flow Control & Functions

Sass provides a number of at-rules that make it possible to control whether styles get emitted, or to emit them multiple times with small variations. They can also be used in mixins and functions to write small algorithms to make writing your Sass easier. 

The 4 flow control rules:

- `@if` controls whether or not a block is evaluated.
- `@each` evaluates a block for each element in a list or each pair in a map
- `@for` evaluates a block a certain number of times.
- `@while` evaluates a block until a certain condition is met.



### @if @else & @else if

If statements control whether a code block gets executed or not
They are commonly used inside mixins or extends

#### Example 1: if only

```scss
@mixin avatar($size, $circle: false) { /*⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆*/
  width: $size; height: $size;

  @if $circle {
    border-radius: $size / 2;
  }
    
}  /*⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆*/

.square-av {
  @include avatar(100px, $circle: false);
}
.circle-av {
  @include avatar(100px, $circle: true);
}
```

In the above snippet, border radius only gets applied if the dev specifies that `$circle:true` as the second argument

#### Example 2: if/else

```scss
$light-back: #f2ece4; $light-text: #036; $dark-back: #6b717f; $dark-text: #d2e1dd;

@mixin theme-colors($light-theme: true) { /*⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆*/
  @if $light-theme { background-color: $light-back; color: $light-text; } 
  @else { background-color: $dark-back; color: $dark-text; } 
  
} /*⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆*/

.box1 {
  @include theme-colors($light-theme: true); // coloring this a light shade
}
 
.box2 {
    @include theme-colors($light-theme: false);  //coloring this a dark shade
}

```

The variables listed a the top define a light background color and text, plus some dark background color and text. 

Mixin argument: If `$light-theme: true` , apply the light theme declarations to whatever element you're nested into later on. If it's false, then apply dark theme declarations instead

#### Example 3: else if

Make it so a box is colored according to what our element is
air: silver	water: blue	earth: green	fire: red 

```scss
@mixin el-color($element) {
  height: 100px;
  width: 100px;	

  @if $element == air {
    $color: silver;
    background: $color;
  } @else if $element == water {
    $color: aqua;
    background: $color;
    
  } @else if $element == earth {
    $color: green;
    background: $color;
  } @else if $element == fire {
    $color: crimson;
    background: $color;
  } @else {
    @error "#{$direction} is not a canon-element .";
  }
}

.boxy{ @include el-color(water) }
```

![image-20210127024651584](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210127024651584.png)

If we enter "air" as an argument, the $color variable gets set to silver, then the background is set to that. This repeats for all other elements, just with different colors

#### In the Future...

Remember, these are all extremely simple examples that are just used to demonstrate how these aspects function. In reality, we'd probably use this to set certain declarations depending on what element we're working on. 

Maybe we'd set margin changes if our input was "button", and perhaps we'd change the text vertical alignment if our input was "floating-box-text". Use your imagination when you start building personal projects



### each

The `@each` rule makes it easy to emit styles or evaluate code for each element of a list or each pair in a map. It’s great for repetitive styles that only have a few variations between them. 

Think of each loops like this: 
For EACH element with this class name...apply these stylings. Or perhaps...
For EACH element of this type...apply these stylings

#### BIG EXAMPLE: 

1. Assign colors based on class names alone. 
   YouTube= red 	articles=aqua 	community=green 	courses=gold

2. Apply text sizes based on element types alone
   H1: 3rem         p: 2rem 

![image-20210127042247675](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210127042247675.png)

Structure of the p-tag: LINK -- random words -- break. Repeated 4 times
All the links have class names assigned that match ones in our SASS map

```html
<!-- STARTING HTML -->
<div class="content">
  <h1 class="title">Using SCSS's <code>@each</code> directive</h1>
  
<p> <!--================================================================= -->
This used to be a rich narrative<br> 
<a class="articles" href="#">LINK 1</a> nON CONSECTUTIVE JARGON<br>
<a class="youtube" href="#">LINK 2</a> Random paragraph
<a class="community" href="#"><br>LINK 3</a> oh, my brain hurts<br>
<a class="courses" href="#">LINK 4</a> If only I knew the path of the engineer 
</p>  <!--================================================================= -->
  
  <p> paragraph 2, baby </p>
  <p> Third and final chunk of words </p>
</div>
```

Let's create 2 SASS maps now. 
1 for coloring based on class, and 1 for text sizing based on element type
Match the left KVP values with the class names

```scss
$pallette: (
  youtube: red, articles: aqua, community: green, courses: gold,
); 

$font-sizes: ( h1: 3rem, p: 2rem
); 
```

Create 2 each functions now
Color function: 

```SCSS
@each $name, $color in $pallette {
  .#{$name} { color: $color; }
} // COLOR FUNCTION

@each $tag, $size in $font-sizes {
  #{$tag} { font-size: $size; }
} // FONT SIZE FUNCTION
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210127044906116.png" alt="image-20210127044906116" style="zoom:67%;" />

#### Function Explanations in Video

> < video src="Typora-Vids/each-functions.mp4" controls> </video>

https://drive.google.com/file/d/1xw0WCfk4CzzkVJvyzBnD80Lv_JP6e5bB/view  (alt)

[Each loops with SCSS - how to loop through lists and maps - YouTube](https://www.youtube.com/watch?v=GHUNtbW22V8)  (Kevin Powell)



#### Verbal Function Explanation

###### <<  COLOR FUNCTION EXPLANATION:  >>

`$name, $color in $pallette` ----------------------------------------

Goes in the `$pallette` map to create new reusable variables:
Sets every left value in each key value pair to `$name`
Sets every right value in each key value pair to `$color`

`.#{$name}` ----------------------------------------

Creates a class selector that uses the name of the left KVP value

This only makes works because we purposely set HTML class names equal to the left KVP values earlier. (examples: .youtube for class="youtube" in HTML)

`color: $color;`  ----------------------------------------
sets the font-color to equal the value of the variable $color

###### <<  TEXT-SIZING FUNCTION EXPLANATION:  >>

The exact same thing, but with text sizes in the map 
Also, we use an element selector instead of a class selector here



### for

for loops run from a starting value, all the way until an end value. This can be useful if you want to iterate some code on class names like the following:

.className1	.className2	.className3 	.className4....etc

Perhaps we'd like to run some code for class names 2 to 4. 

- This may seem unnecessary for such a short operation, but when you have a project with several more, then it'll be useful. 
- Pair this with a pseudo selector to narrow down your search if you like

#### Example 1: for loop through class names

```html
<p class="para-1"> Articuno </p>
<p class="para-2"> Zapdos </p>
<p class="para-3"> Moltres </p>
<p class="para-4"> Kuwatro </p>
<p class="para-5"> Parcinco </p>
```

The loop runs for $i values 2,3, and 4. 
$i didn't exist until just now. 
It runs through .para-2 .para-3 and .para-4 to apply the code

```scss
$base-color: aqua;	// set the color we want for the for loop (could've hardcoded)

@for $i from 2 through 4 {
  .para-#{$i} {
    background-color: $base-color;
  }
}
```

![image-20210127061233923](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210127061233923.png)

Feel free to pair this with pseudo selectors as well, if needed:

![image-20210127061211525](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210127061211525.png)



### while (return4)

Although `@while` is necessary for a few particularly complex stylesheets, you’re usually better of using either `@each` or `@for`if either of them will work. They’re clearer for the reader, and often faster to compile as well.

For this reason, we'll skip this loop until absolutely required:

[Sass: @while (sass-lang.com)](https://sass-lang.com/documentation/at-rules/control/while)



### Custom Functions and Math Operations

Functions in SASS work like the ones in JS- you typically feed the function variables, it performs an operation, then returns something.

- To demonstrate what we get in JS, we use console.log. 
  This is CSS though, so let's try to set the width of a generic box w/ our function
  Set width to 100px
- If this sounds overcomplicated for a simple action, it is
  I just need a visual way to prove that our function is working 
- Later on, feel free to not use custom functions unless a purpose demands it. 
  At least then, you'll know how they work

JS Example:

```js
function calcAge(birthYear) {
  howOld= 2021-birthYear;	//We define a new variable inside the function body
  return howOld;
}
```

SASS Width Function:

```SCSS
@function divider($a, $b){	// function divides input 1 by input 2
  @return $a/$b
}		
.box{
  width:divider(1000,10)*1px; /*1000/10=100  Mult by 1px to give width a proper unit*/
  height:100px;
  background-color: gold;
}
```

https://www.youtube.com/watch?v=GHUNtbW22V8)

#### Math Operations in SASS

```SCSS
width: calc(1000px -40px)		/*CSS requires the use of a calc function*/
width: 1000px-40px				/*SASS does not*/
```

One limitation SASS has is that you cannot mix units like you can in CSS when using calc( ) :

```scss
width: calc(100vw-50%) 	/*allowed in CSS*/
width: 100vw-50%		// can't do this in SASS
```

Just use the regular CSS in your SASS doc if you want to perform a mixed unit operation like that



### Fetching Map Values with Functions

Instead of typing map-get( ) several times, we can just create a function that does that for us:

We start off with a very basic HTML setup:   <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210127063245813.png" alt="image-20210127063245813" style="zoom: 67%;" />

```html
<p class="para-1"> Articuno </p>
<p class="para-2"> Zapdos </p>
<p class="para-3"> Moltres </p>
<p class="para-4"> Kuwatro </p>
<p class="para-5"> Parcinco </p>
```

First, create a map with all the font-sizes and their names

```scss
$font-heights: (
  "regular": 1rem,
  "medium": 2rem,
  "bold": 3rem,
); /*font weight map. Full of key value pairs*/
```

After that, create a function that has one of the map keys as an argument. 
Invoke the function later with a valid key name- it'll fetch its value in the map. 

`fontpls(bold)` will fetch a font-size of 3rem

```scss
@function fontpls($weight-name) {
  @return map-get($font-heights, $weight-name);
}				// map name		 // map key = argument passed into function

@for $iter from 2 through 4 { // we create a new "iter" variable, running fr/ 2-4
  .para-#{$iter} {
    font-size: fontpls(bold)
  }
}
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210127064023414.png" alt="image-20210127064023414" style="zoom:67%;" /> It works! Paragraphs 2-4 are sized at 3 rem now



# ======= ANIMATION =========

# Net Ninja Animation Basics

Animation via CSS allows you to create animation effects without JS and jQuery. 

It's a great way to maintain people's attention- since we're hardwired to focus on moving things

The support for CSS animation is pretty good- it's accepted by everything but Opera Mini and older versions of IE

### Custom Terminology

###### Initial State Rule: (ISR)

In animation, there will be an initial CSS rule that describes the original state of the element we're targeting with our animations

```css
.mario{ /*ISR*/
  position:absolute; bottom: 80px; /* ^^^ positioning the mario png*/
  animation-name: overdrive;
  animation-delay:3s; /**********/
}

 @keyframes overdrive{	/*keyframe*/
   from{ transform: translateX(400px); } 
   to{ transform: translateX(1200px); }
}
```

###### Orig-state-point / from / to / Revert point

OSP: Where the element would be if no animation occurred at all

FROM: Where the animation begins. 
	  If OSP≠AFP, the animation will start in a jagged way
	  Example: https://codepen.io/NFuego24-7/pen/dyOoJQV

TO: Where the animation ends

RP: Where the element returns to or stays as soon as the animation's over

Jagged start example where OSP≠FROM: https://codepen.io/NFuego24-7/pen/dyOoJQV

### Transforms

These will transform your web elements in all sorts of ways that you can control
Take your element and skew, rotate, move, stretch...etc
The doc flow will remain intact as well

Test out some declarations in here: https://codepen.io/NFuego24-7/pen/zYoGwbj

#### Translation:

```css
transform: translateX(200px);	/*translates it 200 px right*/
transform: translateX(-200px);	/*translates it 200 px left*/

transform: translateY(200px);	/*translates it 200 px down*/
transform: translateY(-200px);	/*translates it 200 px up*/

transform: translate(600px, 300px);	
/*SHORTHAND FOR 2D: translates it 600 px right and 300px down*/
```



#### Scale

```css
transform: scaleX(1);	/*Does nothing. Scales to the original size in x-direction*/
transform: scaleX(2);	/*Stretches element to 2X orig length in x direc */

transform: scaleX(0.5); /*Makes element half its original length in x direc */
transform: scaleY(0.5); /*Scales element to 1/2 its orig height in y direc */
```

Scale Shorthand:

```css
transform: scale(4);  /*Makes element 4X its orig size in both XY direcs*/

transform: scale(0.5, 2); 
/*Makes element 1/2 its orig size IN x, twice its orig size in Y*/
```

Remember: If an element scales to be larger or smaller in any direction, the change will occur evenly on both sides by default. 

If a rectangle is has `transform: scaleX(2)` applied to it, both the left and right sides will grow by the same amount



#### Rotate

Rotating a 2D image around the X or Y axis produces a somewhat underwhelming effect. By default, a flat 2D image lays perpendicular to our eyesight. Rotating in X or Y will just reduce how much of the picture we can see

```css
transform: rotateX(60deg); 
transform: rotateY(60deg);
```

START: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210202025928767.png" alt="image-20210202025928767" style="zoom:50%;" /> Rotate X: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210202030042199.png" alt="image-20210202030042199" style="zoom:50%;" /> Rotate Y: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210202030125951.png" alt="image-20210202030125951" style="zoom:50%;" />

Rotating in the Z-axis produces a CW or CCW rotation effect. The z-axis comes straight out of the screen- robotics flashbacks may ensue

```css
transform: rotateZ(180deg);
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210202030228031.png" alt="image-20210202030228031" style="zoom:50%;" />

#### Combining Rotate and Translate

Rotation will affect the axis directions of each element. 

```CSS
transform: rotateZ(180deg) translateX(400px);
/*Order: rotates in z-direction by 180 deg, then translates 400px down new x-axis*/
```

`transform: translateY(200px);` normally moves items DOWN
Having the element rotate around Z by 180 degrees first will flip it upside down
`transform: translateY(200px);` will move the item UPWARDS now

START: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210202030341530.png" alt="image-20210202030341530" style="zoom:50%;" />

END:   <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210202030419500.png" alt="image-20210202030419500" style="zoom:50%;" />

The order of our CSS declaration matters here. Let's see what happens if we translate before we rotate about the z-axis:

```css
/*transform: rotateZ(180deg) translateX(400px);*/
transform: translateX(400px) rotateZ(180deg) ;
```

ALT:  <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210202030655462.png" alt="image-20210202030655462" style="zoom:50%;" />

#### Skew:

We've covered the basics in this lesson, but we can still learn how skew works on W3schools: [CSS 2D Transforms (w3schools.com)](https://www.w3schools.com/css/css3_2dtransforms.asp)



#### Matrix Shorthand

Accepts 6 values and lets you rotate, translate, and skew in X/Y directions all at the same time

```css
transform: matrix(1, -0.3, 0, 1, 0, 0);
```

What each value does:

1: `scaleX( )`		 2: `skewY( )`
3: `skewX( )`		  4: `scaleY( )`
5: `translateX`		6: `translateY( )`



### Transitions

- These transition an element from one state to another- in a certain way over a specified amount of time. 
- Apply the transition declaration to the element's initial state rule (ISR)

See what we mean here: https://codepen.io/NFuego24-7/pen/eYBNRYM

![image-20210202032832124](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210202032832124.png) ![image-20210202033143879](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210202033143879.png) ![image-20210202033210016](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210202033210016.png)

In our code-pen we have a regular pink square with the following rules applied to it: 

```css
.wrapper{ 
  margin:auto; width:100px; height:100px;
  background:pink;
  transition: 2s; /*transition applied to STATE 1*/
}

.wrapper:hover{		/*ONCE YOU HOVER...*/
  background:red;	/*turn red*/
  width:200px;		/*get longer in the x direction */
}
```

- Without the transition declaration, the change between the pink square to the red rectangle would be instant and choppy looking. 
- The transition makes it look seamless

You can add in any CSS declarations you want to your hover state. 
In the codepen, we make it spin around with the rotation transform

#### Multiple Transition Timers

We can tell the animation to take longer or shorter on certain CSS changes

```css
.wrapper{ 
  margin: 40px auto; width:100px; height:100px;
  background:pink;
  transition: background 5s, transform 1s; 
  /* spin happens much faster than the color change*/
  /*the margin increase is instantaneous due to not being specified*/
}

.wrapper:hover{
  background:crimson;		/*turn crimson*/
  transform: rotate(360deg);	/*spin 360deg*/
  margin-top:100px;		/*go down by 60px extra compared to before*/
}
```

See the effect on our codepen: https://codepen.io/NFuego24-7/pen/eYBNRYM

We deliberately excluded specifying a timer for margin-top to prove a point:

- If you have multiple timers, and exclude a CSS rule- the ignored rules will have their effects occur instantly  
- `transition: 1s` means to transition EVERY change in 1s
- `transition: background 1s` means to transition the background only, and everything else is instant with no transition

#### Transition Delays

If you add in a second time value for one of the the timers, you'll cause a delay:

```css
transition: background 1s, margin 1s, transform 1s 1.5s;
/* 1st time value: transition duration		2nd time value: delay */
```

- The background and margin changes happen over the course of 1 second
- The transform (which is a rotation in our codepen) takes 1 second as well, but only starts after a 1.5 second delay

#### Transition Timing Functions

```css
transition: background 1s, margin 1s, transform 1s 1.5s linear;
```

Use them at the end pf your Transition Shorthand
Keep in mind there's a whole lesson about timing functions for keyframes

> linear: constant speed throughout
> ease: slow start, fast middle, slow end (default)
> ease-in: slow start, fast end
> ease-out: fast start, slow end
> ease-in-out: seems nearly identical to ease tbh

TESTS: https://www.w3schools.com/css/tryit.asp?filename=trycss3_transition_speed



### Keyframes

- In the previous lesson, we used a hover state to give our animations an end destination. 
- Keyframes allow us to animate without using a hover/focus state as a crutch
  By default, the animation happens as soon as the page loads

Keyframe Syntax:

```css
@keyframes frameName{
  from{ transform: translateX(0); } /*FROM location*/
  to{ transform: translateX(900px); } /*TO location*/
}
```

Add in this snippet to the ISR:

```css
animation-name: frameName;	
animation-duration: 4s;
```

This is the bare minimum you need to trigger an animation



#### Mario Kart Example

![image-20210202062810383](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210202062810383.png)

Codepen: https://codepen.io/NFuego24-7/pen/YzpXrBM
Refresh the page or make a syntax change to see your animation again

In our codepen, we move a Mario-kart png using keyframes.
We also use 2 declarations inside the from/to curly brace pairs

KEYFRAME 1: OSP≠FROM (jagged start)

```css
@keyframes overdrive{
   from{ transform: translateX(0px); bottom:50px; }
   to{ transform: translateX(900px); bottom:300px; }
}
```

- Our keyframe specifies `bottom:0px` in our "from" rule
  This does not match where the png would be if no keyframe existed
- As soon as the animation begins, the png will jump to its start point, then move transition normally to its end- looks very abrupt at the start

KEYFRAME 2: OSP=FROM (smooth start)

```css
@keyframes overdrive{
   from{ transform: translateX(0px); }
   to{ transform: translateX(900px); bottom:300px; }
```

- The only thing specified in our "from" rule is a transform with a value of zero
- This makes it so the animation starts at the point where the png would be w/out any keyframes (makes the start look much smoother)



#### Keyframe Delays

We learned about delays in our transition lesson. 
They are applied using a different property on the ISR when we are using keyframes:

```CSS
animation-delay: 2s; /*animation starts 2 second after page loads*/
```



### Animation Fill Mode

This lesson continues off of the previous one. 

- In our Mario kart animation, Mario drives to his end destination then pops back to his original position before the keyframe was activated
- Fill mode allows us to control the element we're targeting once it's outside its animation time-window (before or after it occurs)
- Apply this property to the ISR



#### animation-fill-mode options

```css
animation-fill-mode: none;		/*default*/
animation-fill-mode: forwards;  /*ensures TO=RP. Animation does not revert to start*/
```

- The "backwards" and both options are only noticeable if you've done something to mess with the time-period before the animation starts up. 
- By default, loading a page will incite an animation- but if you add in a delay, the effects of these final 2 options become noticeable

```css
/*Assuming there's an animation delay*/
animation-fill-mode: backwards;	
/*	Animation delay starts at FROM -> animates -> reverts to OSP 	*/

animation-fill-mode: both;
/*	Animation delay starts at FROM -> animates -> element stays at end		*/
```



#### backwards fill

Must view to understand": https://codepen.io/NFuego24-7/pen/YzpXYrx

- Understanding our codepen description requires reading the "custom terminology section" first

IF BACKWARDS FILL WAS COMMENTED OUT
Animation delay occurs at OSP -> jagged jump TO FROM-> animates- reverts to OSP 

BACKWARDS FILL ACTIVE:
Animation delay starts at FROM -> animates -> reverts to OSP



#### both-fill

This property does the same thing as backwards fill, except the element stays where the animation ends: https://codepen.io/NFuego24-7/pen/abBOqOw

IF BOTH FILL WAS COMMENTED OUT
Animation delay occurs at OSP -> jagged jump TO FROM -> animates -> reverts to OSP 

BOTH FILL ACTIVE:
Animation delay starts at FROM -> animates -> element stays at end



#### backwards/both with no animation delay

backwards-fill: acts as if none was applied
both-fill: acts as if forwards was applied

Backwards and both-fill apply changes to the time before the animation begins. If there is no time before the animation begins...

- backwards-fill accomplishes nothing
- both-fill only does half of it's intended purpose (ensuring ATP=RP)



### Repeating Animations

We can set an iteration counter to tell the browser how many times we'd like our animation repeated: https://codepen.io/NFuego24-7/pen/yLVNvRM (has 2 states)

```css
animation-iteration-count: 3; /*repeat animation 3X (apply to ISR) */
animation-iteration-count: infinite;
```

STATE 1:

The repeat performed in the above codepen's first state looks a bit strange. 
Mario scoots from left to right, but then he teleports back to FROM

```css
 @keyframes overdrive{
   from{ transform: translateX(400px); } 
   to{ transform: translateX(1200px); } 
}
```

STATE 2:

We create a more natural looking loop-effect- just like when Pacman goes offscreen and comes back the other side

```css
 @keyframes overdrive{
   from{ transform: translateX(-200px); } 
   to{ transform: translateX(1500px); } 
}
```

FROM- offscreen to the left
TO- offscreen to right
Iteration still set to a number above 1



### Animation Direction

We're going to continue with the Mario kart template we've been using thus far, and will force our second png of Luigi to drive in reverse

There's no need to create a new keyframe. 
Just set up the ISR, then use one of these declarations:

```css
/*Jagged animation iteration transitions*/
animation-direction: normal; /*FROM->TO then FROM->TO*/
animation-direction: reverse; /*TO->FROM then T0->FROM*/

/*Smooth animation iteration transitions*/
animation-direction: alternate; /* FROM->TO then TO->FROM */
animation-direction: alternate-reverse;  /*TO->FROM then FROM->TO */
```

Codepen to view the difference between each: https://codepen.io/NFuego24-7/pen/abBvoeK

#### Visualization Diagrams

normal:    <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210203012000498.png" alt="image-20210203012000498" style="zoom: 50%;" />			reverse: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210203012239847.png" alt="image-20210203012239847" style="zoom:62%;" />

alternate: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210203012541516.png" alt="image-20210203012541516" style="zoom:50%;" />  alternate-reverse: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210203012720215.png" alt="image-20210203012720215" style="zoom:50%;" />

The arrow represents the travel path of our element

- The TO and FROM locations always stay the same, just like in our syntax. 
- Any time the second arrow's tail does not meet the first one's head, we'll have a jagged start to our next iteration



### Timing Functions

In our transitions lesson, we learned how to apply timing functions to change the speed fluctuation in our transitions. 

Now, we'll be applying timing functions to our keyframes via the ISR:

```css
animation-timing-function: linear;
```

Slope equals animation acceleration: ![image-20210203030718290](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210203030718290.png)

linear: constant speed throughout
ease: slow start, fast middle, slow end (default)
ease-in: slow start, fast end
ease-out: normal start, slow end
ease-in-out: seems nearly identical to ease tbh

#### Custom Accelerations

You can also use a cubic Bezier function to create your own timing functions
The higher the slope, the faster the animation speeds up in that general area

```css
animation-timing-function: cubic-bezier(.27,.96,.84,.33);
```

https://cubic-bezier.com/#.17,.67,.83,.67   <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210203030954732.png" alt="image-20210203030954732" style="zoom:50%;" />

### Animation Shorthand

We've learned about several CSS properties and have been applying them using individual declarations thus far. We can shorten our code by using animation shorthand

```css
animation: 
name 		duration 		timing-function 	delay 		iteration-count 

direction 	fill-mode 		play-state;
```

EXAMPLE:

```css
animation-name: overdrive; /*keyframe name we chose*/
animation-duration: 8s;
animation-fill-mode: both; 
animation-iteration-count: infinite;
animation-direction: reverse;
```

Turn the above into shorthand- forget about play states which we didn't learn

```css
animation: overdrive 8s ease infinite reverse both;
```

```css
/*alt*/
animation: ease 8s overdrive infinite both reverse;
```

- If there's a value not specified in our animation declaration list, just don't bother inputting a value in the shorthand. 
- The order you specify these is apparently not that important- since most of these declarations operate using keywords. 
- Just ensure the first time value typed is the duration (mandatory) 
  The second time value will be the delay (if you want one)



### Chaining Animations

So far in our crash course, we've been animating an image of Mario/Luigi on a car moving left and right. 

- What if we wanted them to jump at a certain point on their path? 
- This would require us to chain 2 different animations: 1 horizontal, the other vertical

```css
animation: ~~/*keyframe1 shorthand*/~~ , ~~/*keyframe2 shorthand*/~~ ; 
```

Chaining 2 keyframes is easiest using shorthand ^^

- You just add a comma to your first declaration value, then add the shorthand details for keyframe 2

#### 3+ Stage Keyframes

Think about what a jump looks like.
A: On the ground
B:Leap upwards with/without horizontal drift
C: Land back on ground

We can't use a standard keyframe with TO/FROM declarations anymore. Use percentages

```css
@keyframes jump{
    0%{ }			/* 0-50% of animation: go from initial elevtion to -120px */
    50%{ top:-120px;}		/* 50-100% of animation: go from -120px to -40px */
    100%{ top:-40px; }   
}
```

To keep the animation beginning smooth, try to make it so the 0% declaration matches the ISR. 

```css
.luigi {
	top:-40px /*Should be */
}
```



#### Example: Add a Hop in Mario Kart

Codepen: [Animation Chain (codepen.io)](https://codepen.io/NFuego24-7/pen/OJbyyap)

```html
<div class="sky"></div>
<div class="grass"></div>
  
<div class="road">
  <div class="lines"></div>
  <img class="mario" src="https://i.postimg.cc/tCz7CLbf/mario.png">
</div>
```



```css
/* STYLES USED TO CREATE THE FUNNY BACKGROUND ARE EXCLUDED*/

.mario{ 
  position:absolute;
  top:-40px;     /*matches the declaration found later on */
  
  animation: overdrive 5s infinite both, jump 1s 0.8s 1
  /*The chained animation. Play around with the values yourself. It's fun!*/
} 

 @keyframes overdrive{
   from{ transform: translateX(50px); } 
   to{ transform: translateX(1400px); } 
}

@keyframes jump{
    0%{ }	/*keeps everything from the .mario rule the exact same*/
    50%{ top:-150px;}
    100%{ top:-40px; }   
}
```

Experiment with the chained animation shorthand and see what you come up with. 

- 1 thing I learned was how important the delay is when changing animations. 
- We want our hop to happen a good amount of time after the beginning of the cart moving left to right, so we add in a 0.8s delay

The duration of an animation can cause weird effects if they are mismatched

- If my jump duration is longer than my drive duration, Mario will look very unnatural when the animation loops around to the next iteration

# Animation Practice (upon finish React)

[Navigation Animation (codepen.io)](https://codepen.io/EvyatarDa/pen/waKXMd)

[CSS3 fade in & slide out transition (codepen.io)](https://codepen.io/astrotim/pen/KDBbe)

Recreate the menu animations from this: 
[Responsive Animated Navbar with CSS (fireship.io)](https://fireship.io/lessons/css-responsive-icon-navbar/)

Add a sliding menu like the following: [Pure CSS Hamburger fold-out menu (codepen.io)](https://codepen.io/erikterwan/pen/EVzeRP)

# User Interface Animations

### Pop-Up Modals

This is the third last video in Net-Ninja's animation basics playlist, but it deals with a more practical UI example than all his other videos

```html
<!-- STEP 1: Hardcode your Modal in HTML and CSS -->
<body class="pop-up">
  <div id="pop-up"> <!------------------------------------>
    <img src="img/ninja.png">

    <div class="container">
      <h1>Kung Foo Your Skills</h1>
      <p>Join the mailing list to be spammed with useless ninja tips</p>
      <input type="email" placeholder="email" required>
      <button>Hii Ya</button>
      <div class="cross">x</div>
    </div>

  </div> <!------------------------------------------>
</body>
```

![image-20210203065012075](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210203065012075.png)

Imagine you're creating a website, and you have your pop-up hardcoded like you see above. Let's make it so it flies down from the top of the screen, bounces back up a bit, and fades into view

ADD THIS TO YOUR CSS:

```css
/* STEP 2: Create your animation */
#pop-up{
  top:-400px; /*keeps it above the viewport*/
  animation: drop 0.5s ease forwards; /*activates keyframe*/
}

@keyframes drop{
  0%{opacity:0; }  						/* makes the modal see-through at the start*/
  70%{ transform: translateY(750px)} 	/*drops modal down low */
  100%{ transform: translateY(550px); opacity:1;} 
  
  /* bounces back up partially, and becomes viewable */
}
```

This animation is now fluid enough to work for a professional site, but it's still hardcoded. In actuality, we'd need JS to trigger during an event to make this work properly. 

Access on drive or check the "Animated Modal" folder in your pre-mades 
https://drive.google.com/drive/folders/15yo4gpteKhOsLHjR2nQyFUA6hDp_aeBz?usp=sharing



### Reusable Custom Assets

#### Burger Icon with X Animation

https://codepen.io/jason2b3/pen/PoJYpWP





# ======Findings ======

# Guidelines for Responsive Design

### Step by Step Mobile-first Guide

MINDSET:

- Our HTML code is responsive by default
  Before we include any CSS our site will work on all screens-even if it looks terrible
- If a part of our site is non-responsive, it's because we made it so

#### Starting CSS & Reusable Mixins

global.scss 

```SCSS
/* Enable border-box*/
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 62.5%; 
  /* Now 10px = 1rem since default size is 16px */
  /* If their default size is different, this will still scale */
}

/* prettier-ignore */
body,h1,h2,h3,h4,h5,h6,p { margin:0; }
a {
  text-decoration: none; /* make anchor links look like normal tex*/
}
ul {
  padding: 0;
  list-style-type: none; /* remove li bullets */
}
/* Apply the site's main font*/
body {
  font-family: "Hind Vadodara", sans-serif;
  width: 100%;
  background-color: rgb(24, 22, 22); /* set background color */
}
/* Remove the aspects of a button that we always override anyway*/
button {
  border: 0;
  padding: 0;
}
```

__partials.scss (just one place where we can save mixins)

```scss
@mixin flex-row {
  display: flex;
  flex-direction: row;
}
@mixin flex-column {
  display: flex;
  flex-direction: column;
}
@mixin vertical-center {
  display: flex;
  align-items: center; /* vertically centers an object if used on its container */
}
```



#### Approach

1. Set global styles

- Begin by setting CSS for styles that you expect to be consistent between mobile and desktop view sizes- like typography, backgrounds, text-colors, fonts...etc
- Focus on aspects of the webpage that do not require media queries for resizing

2. Create the general layout for one section of your site

- Use flexbox or grid to set the widths for the main sections on your site 
- Align the elements properly, and set their sizes properly
  Go with the mobile first approach, and size your elements so they look good on small screens

3. By now that section should look good on mobile and bad on desktops
   Add your media queries

- Create a table on a spare sheet of paper then jot down at which viewport widths an element needs to be resized (focus on one element at a time for this)
- It helps keep things simple if you focus on building 1 section of your site at a time
  Doable with component files in React, or using multiple CSS files if you're using JAMstack

4. Repeat steps 2 and 3 for every remaining section of your site, until you're finished
   Start from the top of your site then work your way down

EXAMPLE:

| element                       | 0-767px                        | 767-992px | 992-1441px | 1441- ?? |
| ----------------------------- | ------------------------------ | --------- | ---------- | -------- |
| `<img>`                       | 156x156 to max of<br />242x242 | 360x360   | 228x228    | 175x175  |
| `<li>`                        | 156x244 to 242x296             | 360x415   | 228x283    | 175x266  |
| `<p>` title<br />`<p>` artist | 14px always                    | same      | same       | same     |

Mobile First:

![image-20211122120634983](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211122120634983.png)

Desktop after:

![image-20211122011116403](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211122011116403.png)

- Your elements may all change at different viewport widths, making this table much longer due to all the extra columns
- Just focus one adding queries for 1 element at a time until completion, then move on to the next
  You'd write this on a sheet of paper, not on Typora

#### Which Units to Use

Avoid pixels in every scenario possible

| SET...                       | CHOICE                 | WHY                                                          |
| ---------------------------- | ---------------------- | ------------------------------------------------------------ |
| font-sizes                   | rem                    | Using pixels will override user settings<br />If an old person wants to view larger text, but you set it to 12px b/c you think it looks better... that's bad UX |
| width                        | percent                | vw is not a bad choice, but it may lead to certain issues more often than % |
| width for text based element | ch                     | In general, we want paragraphs to be under 75 chars long     |
| height                       | percent, rem, maybe vh | try not to set a height at all if possible<br />if you must have one, try to use min-height to avoid overflow issues |
| margin/padding               | rem or em              | This way, padding/margin will scale relatively to the font-size of an element |
| media queries                | rem/em                 | not sure. Will probably use pixels instead to avoid all the extra math when messing around with dev tool responsive view |

When to use Pixels:

Use pixels in scenarios where you purposely want things not to scale.
Box shadow, border widths, min and max width/height, border radius...etc

Just ask yourself if you want a property to stay the same size despite changing screen or font sizes. 
If your answer is yes, use pixels

#### Remember as you Code

1. When you add media queries, add comments that describe exactly what you're doing/resizing
   Helps with maintainability



### CSS Selectors Review

#### First or Final # of elements 

```scss
	// Place the first 4 list elements on the left cell
    & > li:nth-child(-n + 4) {
      grid-column: 1/2;
    }

    // Place the last 2 list elements in the right cell
    & > li:nth-last-child(-n + 2) {
      grid-column: 2/3;
    }
```



# Responsive Coding

The goal of this chapter is to help ease the process of making responsive designs



### Width 

#### Parent Element widths

- Do not set widths in pixels, because it guarantees that you'll eventually need many media queries to set new widths when you move onto smaller/larger viewport sizes
- Use percentages instead, then your widths will remain responsive despite the screen size

![image-20211116103011656](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211116103011656.png)

#### Child Element widths

Keep in mind you don't always need to assign widths to every element, but let's assume we want to

- If a parent has a percentage width, assign its children percentage widths as well so they remain responsive in relation to their parents
- If you constrict the space for the parent element, the child nested one level below it will always remain 50% of the parent's horizontal size

![image-20211116103917204](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211116103917204.png)

#### min-content

```css
width: min-content
```

PROBLEM IT SOLVES:
When you have a text based element that doesn't have enough room, the words it houses will wrap

- The problem is that the width of that element will not automatically set itself to the minimum width necessary to hold the wrapped text
- The width will be as large as it can possibly be (max-width)

Min content will minimize the width as much as possible by stacking words on top of each other in the most optimized way

EXAMPLE:

Wrapped text:   ![image-20211207020259199](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211207020259199.png)

After min-content:  ![image-20211207020403854](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211207020403854.png)





### Height

#### The Problem with Hardcoded Heights

Explicitly setting heights  causes several problems

- Imagine we set an element's height at 300px, then we have text inside of it
- Restrict the viewport size, then eventually you'll see text overflowing past the vertical space its parent container has available. 
- In our case we'd have white text on a white background, making it invisible unless we highlight

![image-20211116104649557](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211116104649557.png)

#### Solution 1

- Don't set any heights at all
- By default HTML is responsive, so allow the sizes of what's inside the parent container to dictate what its height will be

![image-20211116105224617](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211116105224617.png)

![image-20211116105251693](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211116105251693.png)

#### Solution 2

- If you absolutely want an element to appear larger, use padding instead of height
- There won't be any overflow when you use padding, you may just reach out farther than you'd like
  And this can be remedied easier using media queries than if you set a height

![image-20211116105455588](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211116105455588.png)



### Min, Max, & Clamp for Typography

> Lesson by Kevin Powell: 				https://www.youtube.com/watch?v=U9VF-4euyRo
> Demos and text explanation:		https://web.dev/min-max-clamp/
>
> The above article contains more info about dynamic padding as well 

#### min()

```css
width: min(50%, 400px);	
/* Same as... */
width: 50%;			
max-width: 400px; 
```

DEFINITION:
min() will pick the smallest of the two arguments, and set the width of an element to that

GENERAL EFFECT: https://imgur.com/SWQDm7q

- At smaller viewport widths the element's width will be 50%
- This will change as soon as the element's width reaches 400px
  Past this point, 400px will be smaller than 50%
- Past that point, it will remain capped at 400px, not growing any wider

#### Demonstrate min()

EXAMPLE 1:

```css
width: min(100%, 800px);
```

See visual effects using a gif here: https://imgur.com/SWQDm7q

——————————————————————————————————————————————————————

EXAMPLE 2A: Go with arg 1

> ![image-20211116130127318](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211116130127318.png)
>
> Viewport width is currently 600px;
> Arg 1: 50% of that is 300px						Arg 2: 400px
>
> END RESULT: Go with argument 1 and size the element 50% of vw, which is 300px

EXAMPLE 2B: Go with arg 2

> ![image-20211116130715327](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211116130715327.png)
>
> Viewport width is currently 1200px
> Arg 1: 50% is 600px		Arg 2: 400px
>
> END RESULT: Pick arg 2's 400px, the smallest of the 2 options

#### max()

```css
width: max(50%, 400px);	
/* Same as... */
width: 50%;			
min-width: 400px; 
```

DEFINITION:
max() will pick the largest of the two arguments, and set the width of an element to that

GENERAL EFFECT:

- At smaller viewport widths, the size of an element will be a flat 400px
- This will change as soon as the viewport reaches 800px
  Past this point, 50% will be larger than 400px
- Once we reach larger sizes, the element size will increase to being 50% of the viewport width

> DEMO: https://codepen.io/una/pen/RwaZXqR

#### clamp()

DEFINITION
Clamp allows you to submit 3 values- a min, ideal, then max value

```css
p {
  width: clamp(350px, 50%, 500px);
}
```

The paragraph will be sized at 50%, as long as 50% does not go above 500px or below 350px

- If 50% becomes less than 350px, argument 1 will be selected and the minimum width of 350px will be applied from then on
- If 50% becomes greater than 500px, argument 3 will be selected and the max width of 500px will be applied from then on

#### Demonstrate clamp()

![image-20211116223031149](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211116223031149.png)

![image-20211116223535324](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211116223535324.png)

![image-20211116223113913](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211116223113913.png)

### Positioning Elements

#### Equal Width Flex Items

USE-CASE:
You have a container element holding X amount of items, and you want them in a row taking up an equal amount of space

EXAMPLE:

```HTML
    <section class="container">
      <h1>A catchy title here</h1>
      <p>
        During the first part of your life, you only become aware of happiness
        once you have lost it. Then an age comes, a second one, in which you
        already know, at the moment when you begin to experience true happiness,
        that you are, at the end of the day, going to lose it. When I met Belle,
        I understood that I had just entered this second age. I also understood
        that I hadn’t reached the third age, in which anticipation of the loss
        of happiness prevents you from living.
      </p>
      <p>hi</p>
    </section>
```

CSS

```CSS
.container {
  background-color: rgb(250, 250, 250);
  width: clamp(400px, 50%, 800px);
  text-align: center;
  /* What matters is below */
  display:flex;
  flex-direction: row;
  
}

.container > * {
  flex-basis: 100%; /* set the size of all container child elements at once */
}
```

![image-20211117012258510](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211117012258510.png)

### Fluid Text Scaling

We'd prefer not to resize our text multiple times using media queries. 
Modern CSS allows us to size text using max, min, or clamp 

#### Dynamically Sized text with clamp()

Set a minimum, ideal, and max font-size using the clamp method
This tactic helps to dynamically scale text, even when you zoom into the screen

EXAMPLE:

```css
font-size: clamp(1rem, 1.25vw, 1.4rem);
```

The 1.25vw will make it so the font-size will increase steadily past the 1 rem minimum up until a max of 1.4 rem

> https://youtu.be/WUDJfcUPvQU



### Setting img Width/Height while Maintaining Aspect Ratio & Auto-Cropping

> DISCLAIMER:
> This strategy works on non-background images where you bring one in using <img/> tags

Sometimes we have an image we'd like to set a width and height for. 

- The problem is, the aspect ratio will get messed up  unless we allow CSS to crop out anything that doesn't fit
- The following snippet will crop out and zoom into an image, letting you set exact dimensions while maintaining the aspect ratio

```css
img { 
  width: 100%; /*whatever width you want*/
  height: 110vh; /*whatever height you want*/
  object-fit: cover;
}
```

#### Demo

EXAMPLE 1:

```css
img { width:100% }
```

This image took up at least 200vh when you set width to 100%. The height gets auto-sized to the height necessary to maintain the original aspect ratio

> ![image-20211119140950789](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211119140950789.png)

EXAMPLE 2:

```css
img { 
  width: 100%; /*whatever width you want*/
  height: 80vh; /*whatever height you want*/
  object-fit: cover;
}
```

Some parts get cropped out, but it's the green words so I don't really care
This looks pretty good, and it'll look even better if we set height to 100vh or 110vh ...etc

> ![image-20211119140838685](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211119140838685.png)



### Margin & Padding Setting

#### Faster L/R or T/B Sizing

```css
margin-block: 100px;  /* top and bottom margin = 50px */
margin-inline: 50px;  /* left and right margin = 50px */

margin-block: 10px 40px; 	/* top margin=10px 		bottom margin=40px */
margin-inline: 20px 10px;	/* left margin=20px 	right margin=10px */
```

This works with padding as well
Also, feel free to use use other units aside from pixels



### Center something without flexbox

1. Set the width of a container element to an event percentage like 50%
2. Subtract that percentage from 100, then divide by 2
3. Make it so that container is positioned left by that much

![image-20211118232219263](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211118232219263.png)

Try testing this out

#### Vertically

> SOURCE:
> https://www.w3docs.com/snippets/css/how-to-vertically-center-text-with-css.html

There are many situations where you'd like to center text vertically without resorting to Flexbox
All you need is a line height

EXAMPLE: https://codepen.io/jason2b3/pen/RwZzMav

![image-20211124133400272](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211124133400272.png)

Apply:

```SCSS
  p {
    // Center the text vertically
    line-height: 60px;
    text-align: center;
  }
```

![image-20211124133455600](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211124133455600.png)








