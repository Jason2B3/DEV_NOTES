Bugfix data attribute

# SECTION 1: STARTING POINT

### DISCLAIMER: 

Since CSS requires HTML to function, it would take up too much space to have code fences for every single example- especially if we include template syntax. 

Any code shown here must be properly implemented into an HTML template within VS code. Don't forget to link any CSS pages to your HTML in the head section:

```html
<link rel="stylesheet" href="filename.css">
```




### The 4 Common Value Types

```CSS
Values are tightly coupled to specific properties
```

> ![image-20201213113934778](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213113934778.png)
>
> PREDEFINED OPTIONS- Aka. Simple properties:
> Doesn't use a hex code or numbers- just accepts a couple of predefined values,
>
> COLORS:
> Defined verbally, with hex-code, a shorter version of hex, and also some special color functions 
>
> LENGTH, SIZES, NUMBERS: 
> Pixels, percentages or just integers
>
> FUNCTIONS:
> When using something different than just a color background. Includes transformation functions where we can scale or rotate elements



### Basic Terms

<u>CSS 3:</u>
Despite CSS 2 being released in 1998, CSS 3 is still in development right now. There will never be a CSS 4 due to the general approach to developing the language changing. 

We now split up different modules in CSS based on what features they cover. We have separate modules for creating shadows/animation/transitions, coloring text...etc

<u>CSS Rules:</u> 

> <img src="https://cdn.devdojo.com/guides/css/css-syntax-1469106898.png" alt="CSS Syntax - Learn CSS" style="zoom: 25%;" /> The entire photo to my left is a rule

Inside the Rule...
Selectors (WHAT TO STYLE)
Declarations (GENERAL IDEA FOR HOW TO STYLE)

Inside the Declaration...
Property (WHAT AESTHETIC WILL BE CHANGED)
Values (HOW EXACTLY TO STYLE)

<u>Viewport:</u>
The visible part on your webpage. Aka the browser window

<u>Positioning Context:</u>
When you position an element, the defaults make it so any values you set will be relative to the viewport. 

You can change the context to make it relative to other elements via the relative/absolute combo for example. There are more options than just those 2 however.

<u>Gradients:</u> 
CSS gradients let you display smooth transitions between two or more specified colors.

- Linear Gradients (goes up/down/left/right/diagonally)
- Radial Gradients (defined by their center)

<u>Fallback Color:</u>
A background color you set in case the other layers on a stack don't load. This may happen when you apply features not supported on certain browsers. Instead of an error, the user will get a solid color

<u>Accessibility:</u>
How easily the differently abled can access and navigate around your website

<u>Media Queries:</u>
A feature of CSS that enable webpage content to adapt to different screen sizes and resolutions. They are a fundamental part of responsive web design and are **used to** customize the appearance of websites for multiple devices

Involve special syntax for CSS that allows us to define some styles that will only be applied in the case that defined conditions are met. Consider them optional lines of code, which will only be displayed for some users or devices.

<u>Modal:</u>
A pop up screen that acts as an overlay which blocks access to the rest of the site temporarily. The user regains access by hitting X or answering a question

<u>camelCase Notation:</u>
A name assignment style with no gaps between words, but a capitalized letter for each new word after the first

<u>Sequential Stack (*Custom)</u>
When 2 or more inline-blocks are placed beside each other 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210112224013987.png" alt="image-20210112224013987" style="zoom: 33%;" />

<u>Vertical Stack (*Custom)</u>
When 2 or more block level elements are stacked on top of each other

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210112224310104.png" alt="image-20210112224310104" style="zoom: 60%;" />

<u>Forms:</u>
A field for site visitors to enter data so that it can be sent to a server for processing

<u>Validation Feedback:</u>
When a webpage tells a user if the information they enter into a field is valid or not. 
EX. If the form asks for an email and they type in a name, your site should be able to tell them what they did wrong

<u>Web Font:</u>
When you import a font family from a third party website like Google Fonts

### Deploying Files

#### Deploying Multiple HTML Pages

As you've noticed, the live server extension only broadcasts one main HTML file at a time. It must be named "index.html" as well

To broadcast more HTML pages to your browser 

1. Make a subfolder inside of your main folder. Can do this on your desktop, or use VS Code. 
2. Add a file called "any-name.html" inside of this subfolder.

- Oftentimes you'll want to copy paste the main HTML file's contents into your new one, minus the content in the main section. This way, you'll keep all the fonts, icons, and settings that will remain constant throughout your site
- Just remember to adjust all the anchors that lead to locally stored files since you will be nested deeper. The old file paths will not be correct anymore. See the below self-made video to learn how

> https://drive.google.com/file/d/1FLC6mfOy4OFsrMTOknzO0P-MfLN2ORHm/view?usp=sharing



#### Deploying Multiple CSS Files

It's a good idea to have a shared CSS file to have all the universal stylings every page would need. Basic things like a consistent header and footer can be used website-wide, but what about all the extra stylings we don't need?

1. Create your shared.css file, in your main root folder (not any subfolder )

2. Import all the universal CSS code & delete what you don't need

3. Import this new file into the head section of all your HTML files, BEFORE page-specific CSS files

   The universal style is parsed first, applying all basic visual changes. The page-specific CSS files will override certain things that make each page unique-while keeping all the basic stuff the same

Watch fr/ 2:40: [CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass) | Udemy](https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/learn/lecture/9474940#overview)

![image-20201218210803346](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201218210803346.png)

```css
/* MAIN FRONT PAGE's HTML FILE */
<link rel="stylesheet" href="shared.css">
<link rel="stylesheet" href="main.css">

/* PACKAGE SUBFOLDER's HTML FILE */
<link rel="stylesheet" href="../shared.css"> /*Shared.css is 1 level above the packages subfolder*/
<link rel="stylesheet" href="package.css">	 /*Package.css is a sibling of packages.html*/
```



##### File Trees and URL's

| SYNTAX                       | THE FILE WE'RE LINKING TO IS...             |
| ---------------------------- | ------------------------------------------- |
| `file-name.css`              | A sibling                                   |
| `../file-name.css`           | 1 level above                               |
| `/folder-name/file-name.css` | Inside a folder that's on our current level |

### Naming CSS Classes Properly

Keep in mind that CSS is case insensitive (`class="howdy"` = `class="Howdy"`)

![image-20210212100025961](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210212100025961.png)

- One should also abide by the BEM at all times, even on personal projects. 
- The class names may be long and ugly, but the reward is being able to tell what element we're dealing with just by looking at the class names alone

### BEM Naming Convention

#### Benefits 

- By looking at a class name, you should know where that element belongs in the doc
  The type of element we're dealing with should also be clear
- Debugging becomes easier since we can locate problematic elements easier
- It reduces the need to write nested selectors- at the cost of bloating our code a fair bit

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210212104559606.png" alt="image-20210212104559606" style="zoom:80%;" />



#### BEM Syntax

> ![image-20210212100415139](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210212100415139.png)
>
> ![image-20210212102447439](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210212102447439.png)

- When we say "block", we're referring to what I often call a container/wrapper element
- Modifiers give extra details on what the element does. For example, if I had a button  with a "no" action performed upon a click, I may just use "decline" as my modifier

#### Common Mistakes

Do not use a modifier if it does not have non-special elements as siblings

![image-20210212103330422](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210212103330422.png)

`class="carousel-gallery__div--final-slide"` better have 
`class="carousel-gallery__div"` inside an element somewhere



#### Examples

```html
<ul> <!-- Let's say we'll be using this UL for our navbar -->
    <li> Regular list item</li>
    <li> Regular list item</li>
    <li> special</li>
</ul>
```

———————————————————————————————————————————————————————————

BLOCK:

```CSS
<ul class="nav">
```

a) This element is a container block
   Even if this isn't a nav element, we'll be using it to create a navbar

—————————————————————————————————————————————————————————————

ELEMENT WITHIN A BLOCK:


```css
<li class="nav__list-item">
```

What our class name tells us in our CSS doc... 

a) The element belongs to the block with a class name of "nav" (BLOCK)
b) The element is a list-item (ELEMENT)

—————————————————————————————————————————————————————————————

SPECIAL ELEMENT WITHIN A BLOCK:

```HTML
<li class="nav__list-item nav__list-item--special">
```

What our class name tells us in our CSS doc... 

a) The element belongs to the block with a class name of "nav" (BLOCK)
b) The element is a list-item (ELEMENT)
c) The list-item is styled differently than its siblings (MODIFIER)

——————————————————————————————————————————————————————————————

Final Result:

```html
<ul class="nav"> 
    <li class="nav__list-item"> Regular list item</li>
    <li class="nav__list-item"> Regular list item</li>
    <li class="nav__list-item nav__list-item--special"> contact button </li>
</ul>
```

Source: [(2) What is BEM in CSS - Block, Element, Modifier in 6 minutes - YouTube](https://www.youtube.com/watch?v=iyR6RXUZFQ8)

#### Flexibility

The "element" part of BEM does not always have to be literal 
I'm unsure how strict people are about this however

If you're describing a div for example, the "element" part of the name can describe what it does for the application instead of just stating the element itself... sometimes

![image-20210502203650691](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210502203650691.png)

Teal: Literal. 		`form__label` on a label element
Red: Not literal. 	 `form__row` for a div element

# SECTION 2: Basic CSS

### Ways to Implement CSS Code

CSS is used to make our webpages look better than they would if you only used HTML. There are 3 ways to implement it into your webpage:

#### Inline 

Apply CSS rules for specific elements via style elements

- Not really recommended. Styling each HTML element individually is too time consuming. Only use if 1 element needs to be stylized

```html
<section style="background: aquamarine"> Test background </section>

<p style="background: #ccccff"> Howdy </p>
<!-- We expressed a more niche shade of purple using hex code in example 2
Use this website to find them: https://www.w3schools.com/colors/colors_picker.asp
```

![image-20201211114640358](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201211114640358.png)



#### Internal/Embedded

Add < style > tag in the < head > section of HTML document

- This CSS style is an effective method of styling a single page. However, using this style for multiple pages is time-consuming as you need to put CSS rules to every page of your website.

Advantages:

- You can use class and ID selectors 
- Since you’ll only add the code within the same HTML file, you don’t need to upload multiple files. 

Disadvantages:

- Adding the code to the HTML document can bloat your HTML code's head section
- If you apply the same stylesheet to 20 pages, and you use internal method for each one, the browser will download that same sheet 20 times. Using external would save a lot of data/time

EXAMPLE A: Target 1 element

```html
<!-- Include this in the head section of your HTML (Not standalone) -->
<style>
    section { background: aqua; } 
</style>
<!-- WHAT THIS DOES
This targets every section element in the HTML file and colors their background aqua
```

> background: aqua;	Declaration	 property: value;   <-- FORM
> section { }		  Selector

EXAMPLE B: Target 3 elements


```html
<head>
    <style>
        section { background: aqua; } 
        p { background: rgba(253, 14, 14, 0.397);}
    </style>
</head>

<section>	<h1>This is our first section</h1>	  </section>
<section>	<h1>This is our second section</h1>	  </section>
<p>	This is our first paragraph	</p>
<!-- Alternative: Have a new style element in the head block for the p tags
```

![image-20201211121908593](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201211121908593.png)

If we had 10 sections, we'd be coloring them all simultaneously. Inline method would force us to define the aqua background 10 separate times



#### External 

Link the HTML sheet to a separate .CSS file

- With external CSS, you’ll link your web pages to an external CSS file, which can be created by any text editor in your device

- This CSS type is a more efficient method, especially for styling a large website. By editing one .CSS file, you can change your entire site at once

Advantages:

- Since the CSS code is in a separate document, your HTML files will have a cleaner structure and smaller size
- You can use the same CSS file for multiple pages

Disadvantages:

- Your pages may not be rendered correctly until the external CSS is loaded
- Uploading or linking to multiple CSS files can increase your site’s download time



###### External CSS w/ Code Pen 

Code pen makes it easy to include separate CSS files in your HTML- but running the same scenario on VS Code requires extra steps. See the below for an example

> https://codepen.io/NFuego24-7/pen/PoGbxKN



###### External CSS w/ VS Code

1. Create your HTML file normally

2. Create a new CSS file to drop your selectors/declarations

3. ```html
   <!-- Include this in the head section of your HTML. Obv change the css filename to whatever you saved it as -->
   <link rel="stylesheet" href="filename.css">
   ```




### Adding New Pages to Main Website

Refresher for referencing documents. Let's say an image is called geass.jpg

> Same folder: geass.jpg
> In a folder 1 level above: ../geass.jpg
> In a folder 1 level deeper: folder-name/geass.jpg

In the header section, include the following:

```css
<link rel="stylesheet" href="customers.css">
```

1. Copy paste any reusable assets from your existing pages into your new HTML
2. Fix every anchor tag the links to a locally stored file. You're nested deeper now

Might be more.. Return to later



### Importing Google Fonts

#### Changing Font Color 

```CSS
section {	background: rgba(255, 0, 21, 0.74);
			color: white;	}
/* All section elements have a pinkish red background with white text
Don't forget a semi colon after each declaration or else CSS throws errors
```

![image-20201211140300706](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201211140300706.png)

#### Standard Font Types in Chrome

![image-20201211142353407](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201211142353407.png)![image-20201211142408566](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201211142408566.png)![image-20201211142427543](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201211142427543.png)

We have standard fonts set in our chrome settings that we refer to as such in CSS...
Standard 	Serif 	Sans-serif 	Fixed-width 

```css
h1 { font-family: sans-serif; }
/* This changes all the h1 headers' font to Arial in Chrome
```

These default fonts can be changed, and tend to differ depending on what browser you're using

#### Non-standard Fonts

When using non standard fonts, don't rely on the user having it already. Use this resource bank to obtain the following: https://fonts.google.com/

1. Use an import < link > within the HTML head to bring a new font in

   ```HTML
   <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel="stylesheet">
   ```

2. Add the CSS rule to your CSS page

   ```css
   h1 { font-family: 'Shadows Into Light', cursive;
        color: black; }
   ```

![image-20201211144331729](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201211144331729.png)![image-20201211144346153](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201211144346153.png)



### Selectors

So far we've been changing every header to a certain font style, or assigning every section 1 background color. These are ELEMENT/TAG SELECTORS- 1 of 5 selector options

![image-20201211145959408](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201211145959408.png)


CLASS SELECTORS assign changes to all elements belonging to the same class. The coder intentionally gathers elements into groups by using class attributes

![image-20201211150139081](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201211150139081.png)


ID SELECTORS function just like class selectors. The difference is that each ID is unique and specific to one element

![image-20201211150508192](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201211150508192.png)


ATTRIBUTE SELECTORS set styles to all elements that share the same attributes. They do not need to have the same combination of attributes however. So long as they have 1 attribute in common, this selector will call upon that element

![image-20201211150611181](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201211150611181.png)

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201211151146598.png" alt="image-20201211151146598" style="zoom:80%;" />
>
> p tags: lang attribute
> div tags: lang attribute and id attribute
>
> The language selector picks them both regardless of their different combination to color them red


UNIVERSAL SELECTORS style every single element on the page. Hardly ever used except for 1 niche case
![image-20201211151438620](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201211151438620.png)



#### Class and ID Names

- Separate new words with dashes and keep the letters lowercase 
- CSS is case insensitive, so it would recognize "classname" and "className" as the same thing
- You can also assign multiple classes to one element

```html
<p class="song-lyrics chip-skylark"> If you wanna change the way your life's arranged, well you got that choice! Just find your voice 𝅘𝅥𝅮
</p>
<!-- We have 2 classes specified for that p tag
```



#### Element/Class/Combinator Combo

```css
.signup-form input.invalid,
.signup-form select.invalid {
   border-color:red;
   background: #faacac;
}
```

This is how to choose an element very very specifically



### Cascading Style and Specificity

#### Why Specificity Exists

What happens if we use CSS to apply blue text to a paragraph element using an ID selector, then green text to it with a class selector? 

INCORRECT Guess: Whichever declaration was made last takes the highest priority.

The reason CSS is named "Cascading Style Sheets" is because multiple rules are often applied to the same element. The language has a set of rules based on how specific each selector is- the proper term is SPECIFICITY

#### Specificity Tier List

> 1. Inline CSS
> 2. ID selectors
> 3. Class selectors, attribute selectors, and pseudo-class
> 4. Element/tag selectors, and pseudo element selectors
> 5. Universal tag selectors
>
> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201211220744832.png" alt="image-20201211220744832" style="zoom:50%;" />

If 2 equal-priority selectors style an HTML element, higher priority is granted to the one that is parsed last. (Declared later in the CSS code)

Learn to override CSS elements strategically. Make widespread changes with low priority selectors then narrow your changes with higher priority ones. 

Be careful with nested elements though. INHERITANCE in CSS refers to when some nested elements inherit certain values from their parents-while certain others don't. 

#### PROOF OF CONCEPT:

```HTML
<h1 class="grade" id="atv">Get the freedom you deserve</h1>
<h1 class="grade" id="cell">Choose your plan</h1>
```

```CSS
h1 { background: aqua;}			/*ELEMENT*/
.grade { background: pink;}		/*CLASS*/
#atv { background: gray;}		/*ID*/

/* h1 selector makes both lines have an aqua background
Class selector overrides both lines to have pink backgrounds
ID selector overrides line 1 snd supplies a gray background
```

![image-20201211225750547](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201211225750547.png)



### Inheritance

This is when an element inherits certain CSS stylings from their parents. Not all changes are passed down, but you can view which ones are in the development tools on your browser

Inheritance has the lowest specificity- even universal CSS is higher. Since inheritance from a (parent -> child) element means the child was not directly targeted for a change, any kind of selector will override changes caused by inheritance



#### Tactical Inheritance

Apply a CSS styling through the body element- since it wraps around all webpage content. This will apply a default style which you can alter via any of the 5 common selector types

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213090248842.png" alt="image-20201213090248842" style="zoom:50%;" />

1. Above, we applied the big bold text to the entire body using an element tag. 
   This counts as an inherited trait for all the text because it does not directly assign the font to any of the headers, divs, or paragraphs. 
2. We imposed small cursive onto the div and paragraph tags directly

```css
body { font-family: 'Russo One', sans-serif; } 
div { font-family: 'East Sea Dokdo', cursive;}
p {font-family: 'East Sea Dokdo', cursive;}
/* The HTML is not shown
```



### Font Basics

#### Changing Font Color 

```CSS
section {	background: rgba(255, 0, 21, 0.74);
			color: white;	}
/* All section elements have a pinkish red background with white text
Don't forget a semi colon after each declaration or else CSS throws errors
```

![image-20201211140300706](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201211140300706.png)

#### Standard Font Types in Chrome

![image-20201211142353407](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201211142353407.png)![image-20201211142408566](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201211142408566.png)![image-20201211142427543](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201211142427543.png)

We have standard fonts set in our chrome settings that we refer to as such in CSS...
Standard 	Serif 	Sans-serif 	Fixed-width 

```css
h1 { font-family: sans-serif; }
/* This changes all the h1 headers' font to Arial in Chrome
```

These default fonts can be changed, and tend to differ depending on what browser you're using



### Combinators- ID/Class Selectors

Combinators are when you combine 2 selectors into 1- resulting in an even more precise selector with a higher specificity than standard ones aside from inline.

You will have many elements nesting inside of each other. It would be tedious to give every element a class or ID if you wanted to make a specific change that is not widespread via inheritance. Combinators let us narrow down our scope:

```html
<body>
<main>        
 	<section id="demo">
    	<div>
           <h1>Get the freedom you deserve</h1>
           <p>This prevents you fr/ applying a style to the entire section</p>
        </div>
  	</section>
</main>     
</body>
<!-- Target the h1 tag for a thistle background w/out assigning it a class or ID
Can't apply this style to the entire section, because we wish to exlude the p tags
```

```css
#demo h1 { background: thistle;}
/* This is a DESCENDANT COMBINATOR

TARGET: Any h1's inside of elements with an ID of "demo"
```

```css
/*REMEMBER: You can have more than 2 specifying details.*/
#demo div h1 { background: thistle; }

/* TARGET: Any h1's inside of divs inside of elements with an ID of "demo"
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213092945976.png" alt="image-20201213092945976" style="zoom:50%;" />



#### Targeting Specific Elements that Share a Class

```html
<p class="menu"> Howdy do! </p>
<button class="menu"> SUBMIT </button>
<div class="menu"> </div>  
```

There are times when class names are used across elements of different kinds. 

- Maybe we apply class="menu" to a bunch of buttons, divs, and paragraph tags. 
  What if we'd like to target only the button elements with a class name? 
- You could theoretically just give the button a second class name, but that'd clutter up our code.

Use this:

```scss
button.menu { stylin }
```



### Combinators- Sibling/Kin Selectors

#### General Sibling Combinator

> ![image-20201213094027645](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213094027645.png)
>
> "Sharing the same parent" means that 2 elements are on the same nesting level
>
> If there was a p-tag above the first h2 tag in the div block, it would not have CSS applied to it. It needs to come AFTER the h2



#### Adjacent Sibling Combinator

> ![image-20201213093449163](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213093449163.png)
>
> Notice how the third to last p element has no CSS applied. 
> It is not directly after an h2 tag



#### Descendant Combinators

> ![image-20201213102329958](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213102329958.png)
>
> Any paragraph elements nested however far within a div element will have that change applied



#### Child Combinator

> ![image-20201213094514643](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213094514643.png)
>
> Selector action: The p tags that are direct children of the div element will have a change applied.
>
> This is why the p-tags nested within the article tags are not targeted-despite being a descendant of the div. They are more deeply nested- a grandchild instead of direct kin



### Combinator Mixing & Examples

#### General Sibling

```html
<div>
   <p> Not applied b/c above h2</p>
   <h2> Not applied</h2>
   <p> CSS applied</p>
   <h2> Not applied</h2>
   <h3> Not applied</h3>
   <p> CSS applied</p>
</div>
```

```css
h2 ~ p {color: red;}
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213103734927.png" alt="image-20201213103734927" style="zoom:50%;" />

#### Adjacent Sibling

```html
<div>
	<p> Not applied b/c above h2</p>
    <h2> Not applied</h2>
    <p> CSS applied</p>
    <p> Not applied b/c not directly after h2</p>
    <h2> Not applied</h2>
    <p> CSS applied</p>
</div>
```

```css
h2 + p { color: red;}
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213104841604.png" alt="image-20201213104841604" style="zoom:50%;" />

#### Descendant 

```html
<div>
	<p> Applied b/c direct child of div</p>
	<h2> Not applied b/c header</h2>
	<section> <p> Applied despite being a distant descendant of div</p> </section>
</div>
```

```css
div p { color: red;}
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213105548804.png" alt="image-20201213105548804" style="zoom:50%;" />

#### Child 

```html
<div>
	<p> Applied b/c direct child of div</p>
	<h2> Not applied b/c header</h2>
	<section> <p> Not applied b/c this be a distant descendant of div</p> </section>
</div>
```

```css
div > p { color: red;}
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213110026556.png" alt="image-20201213110026556" style="zoom:50%;" />

#### (Class/ID + Sibling/Kin) Mix

You can combine the class/ID selector along with the kin/sibling options to target HTML elements

```html
<div id="outer-div"> 
	<div id= "inner-div">
        <p> Paragraph 1 of 2 </p>
    	<section> Section 1 of 2 </section>
    	<h2> Header 2 </h2>
    	<section> <p> Paragraph 2 nested in section 2 </p> </section>
	</div>
</div>
```

```css
#inner-div section > p { color :red; } 
/* TARGET: P tags that are direct children of section tags which are inside of whatever element has the id "inner div"
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213111354085.png" alt="image-20201213111354085" style="zoom:50%;" />

Direct selectors that do not use combinators typically let webpages perform better, but don't hesitate to use combinators if they allow you to be more specific



### Box Shadow

#### Explanation

![image-20220112033330486](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220112033330486.png)

EXAMPLE:

![image-20220112033349190](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220112033349190.png)

### Developer Tools

> Peek inside the developer tools if you want to see what CSS changes are applied to each element. Click on an element in the new dev tools window, and then the style tab should show you the style changes. Any crossed out lines indicate overriding
> ![image-20201213123743056](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213123743056.png)

![image-20201214212129728](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201214212129728.png)

#### Scanning the Webpage

CTRL SHIFT C: Let's you hover your cursor over the webpage to analyze parts of it. Useful for locating where your sources of error are. A pop up will give you details over what the screen highlights

#### Scanning the HTML Code

Once you find the HTML code, you can click individual elements then analyze them in the style or computed tabs. 

#### Scanning CSS Code

Computed Tab: Padding border margin Rectangle

Change values on it and see immediate changes while in dev tools. Decide if your changes look good, them implement the new temp code (which shows up as inline in the dev window) into your actual CSS doc.

#### Style Tab:

See what stylings have been overridden/set. 

- If something appears higher above in the style tag, it has a higher priority.
- Anything with a checkbox can be toggled on or off to see how it affects the front-end

![image-20201214232729896](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201214232729896.png)

Italicized text: Browser defaults
Crossed out text: Overridden values

#### Forcing Element States

- To inspect elements like buttons, we need to change the element state to see what happens when people hover/click/drag 
- In the below example, we examine our button which has peculiar black black rings appear when someone clicks and holds the button. This state is called FOCUS. 
- It appears the browser default `outline: webkit focus ring color auto 1px;` is what causes this

![image-20201217203040989](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201217203040989.png)



# SECTION 3: Boxes

![image-20210117031317758](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117031317758.png)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116190946871.png" alt="image-20210116190946871" style="zoom:80%;" />

### Theory behind Boxes

Every HTML element is interpreted as a box by CSS.
In the dev tools, clicking on an element then looking at the style tab will result in this same general diagram:

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213132851471.png" alt="image-20201213132851471" style="zoom:80%;" />
>
> BLUE: Content
> Text in a paragraph tag for example
>
> GREEN: Padding
> Internal space between the HTML section element and the border
>
> YELLOW: Border
> The border that wraps around the padding which encases the content. Core element ends here
>
> ORANGE: Margin
> The amount of space around the whole element and its sibling. Is not actually part of the core element, as shown by the dark black line on the diagram
>
> - Dashes indicate a lack of presence
> - The margin is the space between the core element and other things. The core element is composed of the remaining 3
> - Content < Padding < Border < Margin

```html

<section id="product-overview">
	<h1>Get the freedom you deserve.</h1>
</section>
<section id="plans">
	<h1 class="section-title">Choose Your Plan</h1>
	<p>Make sure you get the most for your money!</p>
</section>

```

Hovering your cursor over these box layers will highlight them on the webpage you are inspecting:

> ![image-20201213134518139](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213134518139.png)
>
> The orange glow indicates we are hovering over the element's margin
> Makes since since it ends right before its sibling element



<video src="Typora-Vids/Rectangle.webm" controls> </video>



### Borders, Padding, Margins

We will be introducing how adding pixels to the padding and margins will change the webpage. Open these pens in 4 sequential tabs and observe changes to look/syntax. The code below is the final iteration in part 4

```html
<section id="product-overview">
    <h1>Get the freedom you deserve.</h1>
</section>
<section id="plans">
    <h1 class="section-title">Choose Your Plan</h1>
    <p>Make sure you get the most for your money!</p>
</section>
```

```css
body {font-family: 'Montserrat', sans-serif;
      margin: 0;}  			/*Change 3: Remove browser default margin*/

#product-overview {
    background: #ff1b68;
    padding: 20px; 			/* Change 1: added paddding*/
    
    border-style: solid; 	/* Change 2: Defined border in 3 lines*/
    border-color: black;
    border-width: 20px;
    }
```

1. https://codepen.io/NFuego24-7/pen/WNGRJQd		START
2. https://codepen.io/NFuego24-7/pen/mdrRLEO        Add padding
3. https://codepen.io/NFuego24-7/pen/yLagjax        Add Border
4. https://codepen.io/NFuego24-7/pen/qBaRYrE        Remove browser's default margin

![image-20201213144530141](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213144530141.png)

![image-20201213144612578](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213144612578.png)

![image-20201213144706972](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213144706972.png)

![image-20201213200142433](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213200142433.png)

The browser default margin is the thin white border around photo 3 that gets filled in by solid black in photo 4. If you check the body tag in the dev tools, you see it as pixels wide.

![image-20201213135530501](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213135530501.png)<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213135617336.png" alt="image-20201213135617336" style="zoom: 67%;" />

If you analyze link 2, you'll notice the padding of the 
< section id="product overview" > tag overlaps the h1 tag's margin



### Margin Collapse

#### What is it?

When two margins collide, only one will survive! In other words, when two elements touch on a page (top margin against bottom margin), one of the elements ***might\*** lose its vertical margin. Like most fights, the biggest guy wins.

> GENERAL RULES
>
> - Margin collapse only happens vertically, never horizontally
> - It only happens to block-level elements — this does not include `inline-block` elements[1].
> - It only happens if the elements come in direct contact with each other. They can’t be separated by padding, borders, line boxes, etc, or be in a different formatting context
>
> - If the margins of Element A and B tie at 30px, then the resulting margin would be 30px- not 60
>
> Clashing margins is formally known as "margins adjoining". 
>There are a handful of common scenarios where this occurs. 



#### Common Case 1: Sibling Elements

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213204135321.png" alt="image-20201213204135321" style="zoom:100%;" />

Example explained in detail: https://codepen.io/NFuego24-7/pen/jOMyeMj

> <   video src="Typora-Vids/siblings.webm" controls> </video>
>
> Use this if you need past-me to spell it out for ya



#### Common Case 2: Child Elements

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213205633530.png" alt="image-20201213205633530" style="zoom:64%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213205816186.png" alt="image-20201213205816186" style="zoom:64%;" />

Let's say we have a header element nested inside a section element
Header: 100px margin-bottom
Section: 50px margin-bottom

- The end-result for the core element (the section as a whole, with the header inside) will be a 200 pixel long separation between it and the next element. 
- This would happen even if the parent section element had a bigger bottom margin. This also works with margin-top

EXAMPLE EXPLAINED IN DETAIL: https://codepen.io/NFuego24-7/pen/poEeRaP



#### Common Case 3: An Element's Own Top and Bottom Margins

![image-20201213210156844](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213210156844.png)

The top and bottom margins of an element collapse if the element has no height, padding, or border and all of its children elements’ margins collapse (height is represented here only for clarity)

<u>What my Experiments have shown me:</u>

If a parent element has a height of 0, the entire element will not be visible. In addition to that, any child's margins, borders, or padding that would normally set a distance between that element and the next will have its effect nullified. 

If a parent element has a width of 0, the entire element will not be visible. HOWEVER, if the children have core element heights/widths/borders/paddings...etc, they will be effective as normal



#### When Collapse D.N Occur

There are many niche instances where collapse does not occur. I will only explain 2 of them now, but feel free to follow this link if you need to know the others:
[Box model (w3.org)](https://www.w3.org/TR/CSS2/box.html#collapsing-margins)

Instance 1:

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213210833908.png" alt="image-20201213210833908" style="zoom:80%;" />
>
> If the parent element has a top border or padding, the parent’s top margin does not collapse with the first child’s top margin.

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201213210914100.png" alt="image-20201213210914100" style="zoom:80%;" />
>
> If the parent element has a bottom border or padding, the parent’s bottom margin does not collapse with the last child’s bottom margin.

<u>Source</u>
[What’s the Deal with Margin Collapse? | Jonathan Harrell (jonathan-harrell.com)](https://www.jonathan-harrell.com/blog/what's-the-deal-with-margin-collapse/)



#### Avoiding Collapse Confusion (RETURN2)

Whenever possible, try to exclusively use margin-bottom 

Anytime an error occurs with your spacing, you know the source will be right above the element that got pushed too far down

PRO TIP FROM THE CSS KING: 

- Margins, borders, and padding can actually break out of their parents' boxes. 

- If you have a paragraph element inside a div, the paragraph's padding can reach out farther than the entire div tag- assuming it has no margin or padding of its own

  

Watch 4:10 - 8:00 on [(26) Margin and Padding Deep Dive: Collapsing margins, resets, and CSS box-sizing - YouTube](https://www.youtube.com/watch?v=uEfH6qnFF6Y)

#### Quick Fix for Margin Collapse

```css
top: 0;
left: 0;
/* Apply this to the element that is cut short because of margin collapse*/
```



### Shorthand Properties

This is when we combine values of multiple properties into a single one for brevity. For example, we can define all the values for a border in a single line instead of 3

> ![image-20201214104902688](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201214104902688.png)
>
> The order in which you specify each value does not matter in this example

> ![image-20201214105022012](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201214105022012.png)
>
> The order does matter here since all the values are expressed as pixels

Use shorthand whenever you have the chance- creates cleaner and more concise code



### Height and Width Properties

The height and width value can be expressed in percentages or pixels. 

> When we set a value for either, it defines a value for the blue zone in the rectangular dev tool diagram- the content. This does not including padding, border, or margin. This default format is called CONTENT BOX
>
> ![image-20201214185704740](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201214185704740.png)      width: 100px 	height: 50px



#### How Width Works

```css
body { width: 50%;}
/* Works with any selector type, not just body
```

In this lesson, the effects of CSS are shown, but not the code itself. Fairly simple to recreate anyway. If you can't, watch 
[CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass) | Udemy](https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/learn/lecture/9466108#overview)

#### Example 1: Setting an Element's Width

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201214170807000.png" alt="image-20201214170807000" style="zoom:40%;" />
>
> The first set of tags is a section element. Never mind the rest of the code
> Nesting order: Section < main < body < HTML

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201214172007218.png" alt="image-20201214172007218" style="zoom:50%;" />
>
> In the above example, we set the width of the section element to 50%. One might assume that setting it to 50% means that it will span half the screen, but that's technically only half correct. 
>
> The element is set to 50% of its parent container- the main element. 
> That parent has its own elders as well. See nesting order
> All of these are block level elements- meaning their default width is 100%

> HOWEVER, if we set the body/main/HTML width to 50% in CSS, the section width would only be half of 50%... so 25%. 
>
> You can tell the width of the main element has been set to 50% using the dev tools. Hover your cursor over the main element in the HTML syntax, and a blue highlight box appears.
>
> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201214172542390.png" alt="image-20201214172542390" style="zoom:50%;" />



#### How Height Works

Heights are a bit trickier to set for nested elements, even though they work the same as widths do. The difference is that it is not a set default for the parent element heights to be 100%

- If you set a nested element height to 100%, it will only span as far as its parent margin. If it's set to 50%, it'll span across half...etc

#### Example 2: Set Element Height to 50% of Screen

Nesting Order: Section < Main < Body < HTML (using the same code as ex 1)

- This chain gets longer if the element you're setting to 100% is nested deeper. 
- Change the section height to 50%, then the main/body/HTML to 100%. Then, the read zone should span 50% of the vertical space on our screen

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201214174809074.png" alt="image-20201214174809074" style="zoom:30%;" />



### Using a Calculator Property for Width

#### Cases where its Useful

![image-20201215130809591](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201215130809591.png)

Inline Element 1: On left (uHost)
Inline element 2: On left (Unordered list for a navbar)

We want to el 2 to the right. But how many pixels to the right should it be?

1. Check to see how long the UL element is in dev tools. 320px
2. Use a width calculation declaration
3. Fix any errors due to unexpected inline blocks (will explain)

#### Execution

> Problem Description: 
> https://drive.google.com/file/d/1lFFVOdGm-vrv3rtauqJmugaAKNjSyT-f/view?usp=sharing
>
> Solution:
> [CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass) | Udemy](https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/learn/lecture/9466136#overview)



### Border Box

#### The Problem it Solves

Let's say you have an element set with a width of 200px and a height of 200px. 

- Adding in padding and a border will make the element's occupying space grow larger
  The height and width will be extended
- With border-box, the element height and width will remain the same. 
  The border and padding will be pushed inwards instead of outwards

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117035454640.png" alt="image-20210117035454640" style="zoom:45%;" /><img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117035535151.png" alt="image-20210117035535151" style="zoom:45%;" />

With content box, `width:` and `height` assign the size of the context only. Any additional paddings or borders will enlarge the shape that appears on screen

With border-box, it defines the size of the content, padding, and border. Only the margin isn't included

#### How to Apply Border Box Sizing

Put the following at the top of every CSS doc or in the HTML head
https://css-tricks.com/box-sizing/	(Read about other methods here.) 

```CSS
html { box-sizing: border-box; }
*, *:before, *:after {
  box-sizing: inherit;
} /*BEST METHOD*/
```

```css
* { box-sizing: border-box; }
/* The above is a more common way to apply border box to everything through inheritance. 
```

Border box sizing flips the script! If we set width to 100%, it will include the borders/padding. So instead of making your page overly wide, your bpm's will be offset into the page instead. ESSENTIAL!

- You'd think we'd apply this declaration in the body tag so every element can inherit it right? Browser defaults will override the inheritance form block level elements, so we use a universal selector atop every CSS page instead





### Display Property

The display property allows us to change the behavior of an element from 
block to inline
block to inline-block (a mixture)
block to being removed from the DOM tree

- Inline elements like span and anchor, only take up as much space as their content requires. If you have a span element, and the sentence inside it is short, the blue zone on the PBM rectangle will be short

![image-20201215102303129](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201215102303129.png)

- Block level elements like paragraph take up the full width available in their container- minus any space needed for padding, margin, and border

![image-20201215102414354](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201215102414354.png)

Due to their nature, we can't set P/B/M for inline elements. We must use the display property to change how CSS treats them

Practice switching block types using the premade options here: 
https://codepen.io/NFuego24-7/pen/NWRpLva

#### Inline to Block Level

```html
<!-- OPTION 1: Changing an Inline Element to block within HTML-->
<span style="display: block"> Span 2 </span>
```

```css
/*OPTION 2: Changing an Inline Element to Block within CSS*/
selector { display: block; }
```

> ![image-20201215104922889](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201215104922889.png)![image-20201215105003756](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201215105003756.png)     
>
> Span element 2 will now occupy 100% of the allotted width, just like a regular block level element would. Hence it moving down

#### Inline to None

```html
<!-- Changing an HTML Inline Element to None-->
<span style="display: none"> Span one </span>
```

```CSS
/*OPTION 2: Changing an Inline Element to None within CSS*/
selector { display: none; }
```



> ![image-20201215105422589](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201215105422589.png)  ![image-20201215105553400](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201215105553400.png)
>
> It removes an element from the document flow and makes it invisible
>
> - Let's say we had an unordered list (block lvl) and use this on one of the list elements (inline)
> - 1 of the list items would disappear. A blank space would not even be left over- the next list item would move up and fill the space

The idea behind display none is that it's especially useful if we use it in conjunction with JavaScript. This allows us to create modals which only show up on certain action, like displaying something only after a button is clicked



#### Inline to Inline-Block

| BLOCK TYPE   | ADVANTAGES                                       | DISADVANTAGES                                 |
| ------------ | ------------------------------------------------ | --------------------------------------------- |
| Inline       | Can be placed next to each other horizontally    | Cannot have paddings, borders, or margins set |
| Block        | Cannot be placed next to each other horizontally | CAN have paddings, borders, or margins set    |
| Inline-Block | Can be placed next to each other horizontally    | CAN have paddings, borders, or margins set    |

```CSS
selector { display: inline-block; }
```

In our course project, we set up a crude-looking navbar and turned the list elements into inline blocks. They are now arranged horizontally, and can be spaced further away from each other by specifying a padding

![image-20201215114128344](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201215114128344.png)

![image-20201215114100211](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201215114100211.png)

Flexbox is a superior way of positioning elements next to each other, but this is a good starting point

#### Hiding Elements

If you wish to preserve an element's place in the DOM/webpage but still hide it, you have the visibility property for that.

```css
selector { visibility: hidden; }
```

![image-20201215115426788](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201215115426788.png)![image-20201215115447428](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201215115447428.png)   

### HTML Refresher for Block Level vs Inline Elements

#### Block-level elements 

COMMON EXAMPLES: `<div>`  `<section>`  `<article>`  `<nav>`  `<h1>`  `<h2>` `<p>` 

- Are rendered as a block and hence take up all the available horizontal space. You can set margin-top and margin-bottom

- 2 block-level elements will render in 2 different lines.



#### Inline elements  

COMMON EXAMPLES: `<a>`  `<span>`  `<img>` 

- Only take up the space they require to fit their content in. 
- Two inline-elements will fit into the same line (as long as the combined content doesn't take up the entire space in which case a line break would be added).

Inline Elements and the Box Model:

- `margin-top` `margin-bottom` `width` `height` on an inline element have no effect. The width and height is auto to take as much space as required by the content. The rest of the box model should work however

- `padding-top` and `padding-bottom` also have a different effect. They don't push the adjacent content away but they will do so with the element border. You can read more about that behavior in the following article: https://hacks.mozilla.org/2015/03/understanding-inline-box-model/

Logically, this makes sense since you don't want your inline elements to destroy your multi-line text-layout. If you want to do so or need both block-level and inline behavior, you can set `display: inline-block` to merge behaviors.



### Text-Decoration & Vertical Align

Text-decoration: 
Clears any browser defaults set for text. If you want to use your own font, size, and color, this is a good start to doing so. 

When you use anchor tags for example, the browser will automatically underline it on the front end. See the below pic- the element on the left has defaults cleared while the element on the right does not. 

```css
selector {text-decoration: none;}
```

Vertical Align: 
When you enlarge an inline-block element's text, the neighboring element's content will not be properly aligned. Notice how the element text on the right sticks to the bottom instead of the middle. Occurred b/c uHost got set to a font size of 60 pixels

![image-20201215170258731](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201215170258731.png)

```css
selector { vertical-align: middle; }
/* Use this on BOTH elements so they are aligned by their centers. Just like in Solidworks drawing tools.

GENERAL TIP- Apply to any example
Be sure to directly target the elements that contain the "uHost" and "Packages Customers Start Hosting text. If you target its parents and attempt to use inheritance, it will easily be overwritten"
```

![image-20201215211634897](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201215211634897.png)



### Pseudo classes

> MDN Web docs and W3schools have an index of all CSS pseudo classes/elements. Learn about whichever ones you need there. You'll primarily be using only a handful of them
>
> https://www.w3schools.com/css/css_pseudo_elements.asp
> https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
>
> https://www.w3schools.com/css/css_pseudo_classes.asp
> https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

PSUEDO-CLASSES: A pseudo-class is used to define a special STATE of an element.

- Style an element when a cursor hovers over it
- Style visited and unvisited links differently
- Style an element when it gets clicked on

```CSS
selector:pseudo-class-name { property: value; }
/* Syntax for pseudo-classes. No spaces around the colon or else this fails!
```

PSEUDO ELEMENTS: Exist to style specified PART of an element (only 7 exist)

- Style the first letter, or line, of an element

- Insert content before, or after the content of an element

```css
selector::pseudo-element-name { property: value; }
/* Syntax for pseudo-elements. No spaces around the colon or else this fails!
```



#### List of All Pseudo-Classes

Remember, they style elements when they're in a certain STATE

![image-20201216133137967](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201216133137967.png)
![image-20201216133216832](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201216133216832.png)
![image-20201216133244336](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201216133244336.png)



#### List of All 7 Pseudo-Elements

Remember, they style certain PARTS of an element

![image-20201216133400753](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201216133400753.png)

> MDN Webdocs actually shoes a couple more
>
> ![image-20201216140039316](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201216140039316.png)



### Pseudo-Class Examples

#### Class: Make Navbar Buttons Glow

GOAL: Make it so our buttons glow white when we hover over them or click drag
	  By default, the buttons remain in their default colors when hovered over

The cursor hovering over a button is a special kind of state- hence us using the pseudo class

```css
selector:hover { color: white; }
selector:active { color: white; }

/* This formatting is important. DO NOT include spaces before or after the colon
```

![image-20201215213753205](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201215213753205.png)



#### Element: Add an extra clickable part before a link

![image-20201216135307367](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201216135307367.png)

```css
selector::before{
    content: " (Link)";
    color: rgb(50, 19, 230);
}
```

The before and after pseudo elements are one of the few ways to import new content onto the webpage via CSS. Usually it is just used for styling what's already on the page 

### Useful Pseudo Classes

#### :not(selector)

Use when you want to use a selector to pick every single element that meets its criteria...except for X

EXAMPLE: Pick out every button but the Countdown and Stopwatch ones

![image-20210509045217630](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210509045217630.png)

```html
<div class="mode row">
  <button class="mode__btn mode__btn--countdown">Countdown</button>
  <button class="mode__btn mode__btn--stopwatch">Stopwatch</button>
</div>

<div class="numRow1 row">
  <button class="numRow__btn">5</button>
  <button class="numRow__btn">6</button>
  <button class="numRow__btn">7</button>
  <button class="numRow__btn">8</button>
  <button class="numRow__btn">9</button>
</div>

<div class="numRow2 row">
  <button class="numRow__btn">0</button>
  <button class="numRow__btn">1</button>
  <button class="numRow__btn">2</button>
  <button class="numRow__btn">3</button>
  <button class="numRow__btn">4</button>
</div>
```

The following selects every button but "Countdown" and "Stopwatch"

```js
const allBtns_except = document.querySelectorAll("button:not(.mode__btn)");
```



### Combining Same-Goal CSS Rules

![image-20201216154041936](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201216154041936.png)

Let's have a look at our navbar once more. Let's say we have the buttons do the following...

1. Glow white when hovered over
2. Glow white when clicked and dragged
3. Produce a white border on the bottom when either condition is met

If 2 separate rules accomplish the same thing, it's best to group them in a single combination rule. Makes it so you don't have to change both if you decide to have them glow a diff color later. 

```css
.main-nav__items a:hover {
    color: white;
    border-bottom: 5px solid white;
}
.main-nav__items a:active { 
    color: white;
    border-bottom: 5px solid white;
} /* Works fine, but could be better
```

```css
.main-nav__items a:hover, 
.main-nav__items a:active  
{ 	color: white;
	border-bottom: 5px solid white;	} /* Don't forget the comma! This is better
```

![image-20201216154121382](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201216154121382.png)



### Styling CTA Buttons

Some buttons on the navbar need to stand out from their peers so users know that they accomplish different things. Let's style our "Start Hosting" button to look more like this search bar:

![image-20201216160821456](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201216160821456.png)



```css
.main-nav__items a:hover,
.main-nav__items a:active {
  color: gray;
}

.main-nav__item--cta {
  background: white;
  padding: 8px 16px; 
  border-radius: 8px; /* Fillets our element box model"
}
```

![image-20201216161619796](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201216161619796.png)

### :not(selector) Pseudo-Class

Inverses the traditional selector. Selects anything but what is specified within its brackets. Can be applied more specifically by combining the pseudo class with an element selector first

```CSS
/* TYPE 1-WIDESPREAD: Targets all elements that are not paragraphs*/
:not(p) {  }

/* TYPE 2- SPECIFIC: Targets any div tags that are not in the "class-name" class*/
div:not(.class-name) {  }

/* TYPE 3- COMBINATOR*/
div :not(.class-name) {  }
/* ^^^ Often a result of a spacing error. Targets any anchor tags that...
       Are descendants of the div tag & are not in the "class-name" class

- Can combine this with other combinators too
```

Example: https://codepen.io/NFuego24-7/pen/JjRNLYy

IMPORTANT: It seems that to use the :not() on paragraph tags

- You cannot put 2 selectors in the brackets there. For example `:not(.foo,bar)` is invalid. Instead, `:not(.foo):not(.bar)` should be used.
- Using 2 individual widespread :not selectors in 1 CSS doc seems to not work well in my browsers. Unsure if that's due to compatibility issues 

#### When to Use and My Personal Thoughts

Lesson Takeaways:

- There are positive ways to use this anti-selector. 1 such way is to set up a default style for something, WHILE KEEPING SPECIFICITY IN MIND
- Example: If you use a type 1 not-selector, it has an element/tag level of specificity. Any of its actions will me overridden my class or ID selectors later in your HTML code
- Checking your code based on what elements are not is also more challenging than usual

### :first-of-type Pseudo Class (return2)

Targets the first element of its type among a group of sibling elements. Can use it to target specific elements using any kind of selectors. Or you can target the first of any kind of element

Remember you can do a lot more than just target text for coloring using this pseudo selector. 

#### Targeting Several Nested Element Types

```html
<article>
  <div>This `div` is first!</div>
  <div>This <span>nested `span` is first</span>!</div>
  <div>This <em>nested `em` is first</em>, but this <em>nested `em` is last</em>!</div>
  <div>This <span>nested `span` gets styled</span>!</div>
  <b>This `b` qualifies!</b>
  <div>This is the final `div`.</div>
</article>
```

```css
article :first-of-type {
  background-color: pink;
}
/* COMBINATOR
Target any first-element type that is the descendant of an article tag
```

![image-20201230164629542](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201230164629542.png)



#### Targeting One Element Type

```html
<h2>Heading</h2>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
```

```css
p:first-of-type {
  color: red;
  font-style: italic;
}
```

![image-20201230164846839](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201230164846839.png)

### :nth-Child

The `:nth-child` selector allows you to select one or more elements based on their source order, according to a formula.

```css
/* Select the first list item */
li:nth-child(1) { }

/* Select the 5th list item */
li:nth-child(5) { }

/* Select every other list item starting with first */
li:nth-child(odd) { }

/* Select every 3rd list item starting with first */
li:nth-child(3n - 2) { }

/* Select every 3rd list item starting with 2nd */
li:nth-child(3n - 1) { }

/* Select every 3rd child item, as long as it has class "el" */
.el:nth-child(3n) { }
```

[:nth-child | CSS-Tricks (css-tricks.com)](https://css-tricks.com/almanac/selectors/n/nth-child/)

# SECTION 4: General Good-to Knows

- If an element appears in HTML earlier on, try to style it in HTML before any of the elements that come afterward. 
- IRL you can tackle things in any order, just remember to move selectors that target earlier HTML element upwards when you're done



### Giving an Element Multiple Classes

You can have more than 1 class assigned to one element. Use 1 declaration but space out the 2 names. If 2 different rules target this element, specificity rules apply- the rule declared last wins if the 2 share the same type.

```html
<p class="name-one name-two"> I'm the best nuzlocker in the world </p>
```

![image-20201216214739860](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201216214739860.png)



### When to Choose Classes VS ID's

ID Selectors:	
Try to avoid using these when only styling- they introduce other effects. For example, you can jump to other parts on your webpage using ID's- this is a core feature in HTML.

Class Selectors: 	(The best choice for exclusively styling with CSS)
Use classes in HTML to group elements that will receive the same CSS styling. Even if you only have 1 class member. 

Element Selectors in CSS: 	(Generic, widespread changes)
Use these when all HTML elements of this type should receive the same styling. Otherwise you'll run into override issues due to how widespread the effects of these are



### !important Annotation

- It overrides specificity and all other selectors being applied to the same element(s) this annotation targets in CSS. 
- Don't use this at all except in very fringe cases. Leads to bad code, and requires you to spam !important to get anything done
- If you ignore this advice and go on to rely on !important, know tat specificity rules apply to it when multiple are used. The most recent line with !important wins the priority war

We add this at the end of our declaration before the semicolon. Keep in mind it only applies to the declaration line it is placed on. See the 

```css
.same-class-name {
	color: gray;
    border: 10px solid green !important; 
}

.same-class-name {
	color: black;
    border: 10px solid blue;
    padding: 16px;
}
/* Despite having less specificity, the green border will be applied. 
The text color however will remain black, as it normally would. 
The annotation was only used on the line setting the border
```

The niche cases where this is necessary: 

- Most of the time, we're talking about some JavaScript driven logic where you temporarily need to change your style. 
- If you're using some third-party styling package which is written in a bad way and uses some styles that you need to overwrite and can't change otherwise.

For a deeper discussion on when it's warranted: 
[When Using !important is The Right Choice | CSS-Tricks (css-tricks.com)](https://css-tricks.com/when-using-important-is-the-right-choice/)



### Browser Support

- Whenever you use a certain feature in CSS, whether that be a certain type of selector or more relevant, a certain property/style, you have to check if the browsers of your target audience supports that feature. 
- If they don't you can't use it. Though at the end of this course, I also will share some ideas on how you can implement certain features which might not be universally supported in a way that they still work in most browsers.

Option 1: MDN Web Docs (check resource links at top)
Check when you use less than super-common features. The bottom of the page will have a chart showing which browsers support what

Option 2: https://caniuse.com/  (works for JavaScript features as well)

![image-20201217001119317](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201217001119317.png)

As we can see, using background-blend mode is a safe bet. The market share calculator at the top says we reach about 96% of all users. 

- If a browser is shown as yellow, you can hover it on the chart. Take a look at what part of the feature is/isn't supported. Maybe you can use it so long as you abide by the limitations

![image-20201217001359610](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201217001359610.png)



### Fixing the 100vw Bug

#### Problem Description

This bug is exclusive to Windows and functions similarly to the problems border-box helps solve. 

When you set something to 100vw, the browser will not automatically include the vertical scrollbar already there. This makes it so your site will have a horizontal scrollbar added to it that isn't used to show anything meaningful 

This also applies in the vertical direction, just less often because scrolling vertically happens in nearly all webpages now

![image-20201229023955774](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201229023955774.png)

#### Options to Solve this Challenge (b is easiest)

a) Use `width: 100%` instead of `vw: 100`

b) Add `overflow-x: hidden;` to the `body` selector in the shared.css file to hide the horizontal scrollbar (or `overflow-y: hidden` to hide the vertical scrollbar)

c) Alternatively you could also use the `::-webkit-scrollbar` pseudo element. Simply add the following code to the shared.css file:

```css
body: :-webkit-scrollbar { width: 0}
```



### GENERAL TIPS FOR SEC 1-5!

#### Debugging

- If you set an element's width to 100%, it bases itself off of the space it's parent container allows. This does not always work out to be 100% of the screen. Go up the daisy chain and set widths to 100% if needed
- When you get errors like this where your syntax is correct, check to see if you're missing a curly brace somewhere nearby. This error will automatically apply to an element right above or below where the missing brace is

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201217135549994.png" alt="image-20201217135549994" style="zoom:50%;" />   



#### Maintaining Symmetry

Centering blocks is usually a 2 step process. 

1. Center the blocks themselves, then 
2. Center the contents within the block containers. (often forgotten)

```css
selector1 { width: 100%;
		   margin: auto;}

selector2 { text-align: center;}
```



#### Targeting Elements in CSS

- Browser defaults count as a directly defined style. This will override inherited stylings
- If you style an element and nothing happens, check the dev tools. If it insists the changes are being applied, you probably applied it to the wrong thing. Target the exact element you intend to adjust- not its parents 
- If 2 elements need to be styled the same way, put them in the same class

Limitations of Basic CSS

- The first few sections of this course deal with basic CSS. This has many limitations- the biggest one being that we specify how far away elements are fr/ each other using pixels. On differently sized screens, this will look terribly lopsided
- Flexbox will help us overcome these issues, but learning the basics beforehand is imperative. 



# SECTION 5: Applying Basics

### Centering & Picking Good Targets for CSS

- It's important to understand where you need to target your CSS styling, and why. 
- If you apply stylings in the wrong place, the change you're after will not work- and the dev tools will make it seem like everything's running smoothly

EXAMPLE: Styling an Unordered List

![image-20201218125844661](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201218125844661.png)

![image-20201218131653679](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201218131653679.png)

| CHANGE DESIRED                   | DECLARATION                           | WHERE                             |
| -------------------------------- | ------------------------------------- | --------------------------------- |
| Remove bullets                   | list-style-type: none                 | < ul > element                    |
| Put list items on one line       | display: inline-block;<br />width:33% | < li > element                    |
| Center them symmetrically (Pt 1) | text-align: center                    | < ul > element                    |
| Center them symmetrically (Pt 2) | text-align: center                    | < p > element w/in < li > < /li > |

If we used `text-align center` on all the li elements, the text would center themselves based off their parent element- ul. The UL element does not have a width of 100%, so it would not end up being symmetrical



### Establishing an Order for CSS Docs

```html
<ul>
    <li> 
    	<p> Just the general structure	</p>
    	<div> We'd obviously have more list elements than one. We'd group em all in 1 class</div>
    </li>
</ul>
```

We have 4 selectors:

1. Parent element `<ul>`
2. Direct child `<li>`
3. Direct child's kin 1 `<div>`
4. Direct child's kin 2 `<p>`

In our CSS doc, we would put their selectors targeting them in the above order. This will result in better performance due to the parsing order being in line with our HTML doc



### Box Shadow Property

- Setting the y value to 10px moves the shadow down
- Blur makes the shadow more spread out and less dark when no other values are changed
- Spread makes the shadow wrap around the element more than usual. A shadow IRL is behind you on 1 side, but this allows the front to have shadow effects too

```css
box-shadow: 2px 2px 2px 2px rgba(0,0,0,1)

/*Components explained */
box-shadow: 2px 2px 2px  2px 	 rgba( 0,  0,	 0,   1)
/*			x 	-y 	blur spread        red green blue transparency
```

RGBA Color Selector:

- RGBA adds a new category in the 4th digit slot: Transparency
  Opaque= 1  100% see-through: 0

Shadow experimenting: https://codepen.io/NFuego24-7/pen/xxErKwK

MDN Web docs also has a customizable shadow maker you can use instead of numbering all of these RGBA values manually

#### Standard Button Shadow

Feel free to use this for any buttons you want to have shadows upon hover

```
box-shadow: 0 1px 4px 0px rgba(0, 0, 0, 30%);
```

![image-20211031191705901](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211031191705901.png)

### Styling Buttons:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201217180214485.png" alt="image-20201217180214485" style="zoom:70%;" /><img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201217180256195.png" alt="image-20201217180256195" style="zoom:80%;" />

- You can style buttons using background, font colors, and boxes just like you can with regular elements, with 1 main qualm...
- You will have to get around the browser defaults that button elements have imposed on them though

#### Example: Fixing Default Font 

https://codepen.io/NFuego24-7/pen/RwGgPMZ

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201217195750709.png" alt="image-20201217195750709" style="zoom:50%;" />![image-20201217195941436](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201217195941436.png) <-- Not Montserrat
>
> (in lesson*) The Montserrat font was set in the body at the start of our HTML. All elements inherit this, but our button had its font overridden to Arial due to browser defaults

We could set the font to Montserrat directly, but we can also use a new value: inherit

```css
selector {font: inherit; }
```

This value makes CSS look at what has been inherited, then directly applies it to the element-ignoring any overrides

```HTML
<button class="button">CHOOSE PLAN</button>
```

```css
body { font-family: "Montserrat", sans-serif;
  	   margin: 0; }

.button { color: white;
    	  background: #033303;
    	  font: inherit;
		  cursor:pointer; }
```

![image-20201217200527348](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201217200527348.png) There we go. Small change, but it's a diff font



#### Fixing Default Outline

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201217202749340.png" alt="image-20201217202749340" style="zoom: 80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201217203435656.png" alt="image-20201217203435656" style="zoom:80%;" />

Press ":hov" > force the "focus" element state in the dev tools. 
You'll find the reason why our button has a black outline when clicked/dragged

- Outlines are just like borders, they exist outside of the element's content/padding. 
- The key difference is that they're not part of the box model- and browser defaults apply them

```css
.button-class-name:focus {
    outline: none;
}
```

![image-20201217211327132](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201217211327132.png)



### Float 

```css
selector { float: right; }
/* Can have this float right or left
```

Float lets you overwrite the default positioning and tell the browser to push an element to the left or the right of the page

- It's a good choice when you want text to wrap around something like an image
- A poor choice when trying to position block-level elements. Use flexbox instead
  The text will wrap around the block you move, but the surrounding elements will not unless you use a hot-fix in the HTML code



#### How to Hot-fix

```html
<div class="hot-fix"></div>
<!-- Place right after the element that you target with float in HTML
```

```css
.hot-fix { clear: both; }
/*Makes it so any elements afterwards or w/ the same class name will not respect previous floats
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201219002352331.png" alt="image-20201219002352331" style="zoom: 50%;" /> before hotfix

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201219002507212.png" alt="image-20201219002507212" style="zoom:50%;" /> after hotfix



# SECTION 6: Positioning 

`position: static` : automatically applied to all elements unless specified otherwise in CSS. 
 If we ever say that an element " has no position applied ", we just mean it is static

- If we position a block using `top: 60%`, it means the top of a block is 60% away from the top of the page

- If we set it to `bottom:60%`, the bottom of the block will be 60% from the bottom of the page

WARNING: 

- Negative z-index elements may not be clickable in certain circumstances
- use position: relative and z-index equaling 0 or higher to fix that

### position: static

- Until now, a certain property has been applied automatically to keep the document flow of our elements consistent- the position property. `position: static`

- When you specify nothing, it's set to static by default. It makes block level elements occupy 100% width, making them stack atop each other like the image on the left 
- Other values for the position property exist, allowing you to create structures like in the image to the right.

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201219215759382.png" alt="image-20201219215759382" style="zoom:50%;" /><img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201219215933583.png" alt="image-20201219215933583" style="zoom: 50%;" />   



#### Other Values for Position

`position: absolute` `position: relative` `position: fixed` `position: sticky`

- Using T/B L/R, we can specify distances elements should be away from a certain point
- Alternatively, we can use a different reference and say that it should be X distances from the top of our viewport for example

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201219220933797.png" alt="image-20201219220933797" style="zoom:67%;" />

### position: fixed 

#### Description: 

- Removes the element from the doc flow, leaving other to rush in and fill the void
- The element will stay on screen no matter how much you scroll

#### fixed Powers

1. Enables z-index (suggested to give them high values)
2. Position the element using `top/left/bottom/right:` with any unit you want
   Moves relative to viewport

======================= Older Explanation Below=================================

- Applying this declaration to an element removes it from the doc flow. 
- Other blocks will rush to the same spot to take its place- with the original element still being there on top (notice how the nav bar is still stacked atop the background image color, despite not being in the doc flow)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201219223217702.png" alt="image-20201219223217702" style="zoom: 50%;" />

```css
selector { position: fixed; }
/* We applied this to the div element that makes the Nav Bar block
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201219223351274.png" alt="image-20201219223351274" style="zoom:50%;" />

- The nav bar element now acts somewhat like an inline block
- The difference is that inline-blocks take a spot in the doc flow while fixed position elements don't. We can make the navbar wider than the viewport, and the background image will still not recognize it or move down a row

#### Creating Fixed Search Bars

- `top:0` and `left: 0` refer to how far away an element is from the outer reaches of the viewport (how far from your monitor edges basically)
- This let's you create webpage items that stay on a certain part of your screen no matter how far you scroll up/down/left/right. Perfect for search bars

```css
selector {
  position: fixed;
  top: 0;		/* 0 pixels away from top of page*/
  left: 0;		/* 0 pixels away from top of page*/
  width: 100VW;	/* Makes element span 100% of viewport width*/
  margin: 0;	/*Fixes issues caused by widespread defaults we set. DW 'bout this'*/
}
```

![image-20201219225040927](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201219225040927.png)

![image-20201219225112366](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201219225112366.png)

This technique works on both block level elements like div and inline elements like span. Hooray for versatility!

The `top:0` and `left: 0` are needed in cases where margins keep the webpage content away from the viewport rims. This typically happens when you apply a widespread margin onto the HTML/body element 



#### Fixed Background Images

Fixed position is useful for background images since they usually don't want to take up dedicated space on your page. They are the ~~background, and other elements are placed on top of them deliberately.

That being said, you need more than the fixed position rule in order to use background images effectively. At this stage, your backgrounds will...

a)  Not be sized correctly for your page (pixels are not an option due to screen sizes 	being a variable that changes depending on the user)

b)  Be placed in front of other elements. 
	Will learn about the z-axis next lesson**



### position: relative

​    <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117174538565.png" alt="image-20210117174538565" style="zoom: 50%;" /> start point:

#### Description

- It's the only position property that doesn't remove the element from the doc flow. 
- Elements positioned with relative do not affect any others in terms of their positioning. 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117174715671.png" alt="image-20210117174715671" style="zoom:33%;" /> This can lead to some overlapping

#### Relative Powers:

1. Position the element using `top/left/bottom/right:` with any unit you want
   BUT, it will move relative to its position before `position:relative` was applied (explained at end)

2. Allows the use of z-index (which static elements do not allow)
   Relative still leaves the doc flow intact

   

Look at any one of the pictures in this lesson. The red relative box is not attached to any corner.
If I applied the code below, it wouldn't move at all. 

```css
position: relative;
top:0;
```


If it moved relative to the viewport, it would stick to the top of the page- instead it moves relative to itself 

[Position and z-index (codepen.io)](https://codepen.io/christinatruong/pen/vqQLoL)



### position: absolute

#### Description

- This property removes the element from the doc flow. 
- It'll exist on its own level now, and other elements will rush over to fill the void left in its wake 

#### Absolute Powers

1. Allows the use of z-index (which static elements do not allow)

2. Position the element using `top/left/bottom/right:` with any unit you want
   BUT the position will be relative to the nearest ancestor that is not static
   If it can't find one, it'll resort to the body element

We usually make it so this ancestor/container has `position:relative` applied

- This is the option that causes the least disruption
- Using `position:relative` with no top/bottom/left/right declaration just enables the z-index while letting the webpage look the exact same

#### EXAMPLE

TURQUOISE ELEMENT: Container of red element (currently the position is static)
RED ELEMENT: Inside the turquoise element (`position:absolute`)

The red element has `top:0` and `right:0` applied
Sticks the absolute element to the upper right of the body container

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117181558120.png" alt="image-20210117181558120" style="zoom:33%;" />

See what happens when we apply `position:relative` to the turquoise square
The red element will stick to its upper right now

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117181844052.png" alt="image-20210117181844052" style="zoom: 33%;" />

https://codepen.io/NFuego24-7/pen/MWjvpMV

 

### Padding/Margins after Positioning

- They still affect element blocks even if they have their position specified with T/B L/R
- A new level is added to the border box in the dev tools when you inspect an element that has been positioned this way

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201220233558068.png" alt="image-20201220233558068" style="zoom: 40%;" />![image-20201220234058577](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201220234058577.png)

### What % References

If I add a width of 80%, what is this 80% of exactly? Is it 80% of the parent, 80% of the body or HTML element?

- The reference point for an element with a percentage unit is called the CONTAINING BLOCK. If the containing block is 200px wide, its children will have widths of 50px if we set their width to 25%. 
- The containing block is dependent on the positioning property. (static, fixed, absolute, relative, sticky)

| Position Property | Containing Block                                             |
| ----------------- | ------------------------------------------------------------ |
| STATIC / RELATIVE | ancestor's content only<br />(the closest block level element) |
| FIXED             | viewport                                                     |
| ABSOLUTE          | ancestor's content + padding<br />(The closest ancestor whose position is not static) |
| STICKY            |                                                              |

Remember:

1. If the absolute-position element cannot find an ancestor that isn't static, it resorts to the body, and applies its stylings relative to that.

   If no element like this exists, the absolute element will apply changes relative to viewport

2. If an element has `position: static` applied to it by default, you will not see this syntax in the dev tools

   

### z-index Property

- Every HTML item has a z-index value of 0 automatically assigned to them
- You can change what z-index value they have using a declaration
- For z-index to work, an element needs to have a position applied that is not static

```css
z-index: auto	/*Default setting*/
z-index: 0		/*Setting it manually*/

z-index: 20		/* Position this element above the selector's class/ID*/
z-index: -27	/* Position this element below the selector's class/ID*/
```

To put images BEHIND other stuff, use a negative z-index value. And vice versa

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201220164914088.png" alt="image-20201220164914088" style="zoom: 25%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201220165046529.png" alt="image-20201220165046529" style="zoom: 25%;" />
>
> z-index: 1 on our page's background image (left)
> z-index= -1 on our page's background image (right)
>
> Every other element has a value of 0 auto-applied

#### z-index clashes

When 2 elements have the same z-index value, the one appearing later in the HTML code wins then stays on top 



### Overflow Property

- As we saw in the position: relative lesson, we can move an element out of its parent container

- If you want to make it so elements outside the container are not visible, you can use this on the relative element:

```css
.rel-class-name { overflow: hidden; }
/* Any parts of the relative block will disappear if they're outside the CONTENT portion of the parent container 
```

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201221010539183.png" alt="image-20201221010539183" style="zoom:50%;" />
>
> The relative block begins to disappear at the edge of the content box. It does not wait until it exceeds the border



#### overflow: hidden w/ the Body Element Parent

- Let's say you have `position: relative` applied to an element, and its parent that you will apply `overflow: hidden` to is the body.
- It won't work... unless you apply `overflow: hidden` to both the body and HTML elements. Browser default issue



### position: sticky

This is a hybrid between relative and fixed. 

- An item will stay fixed in 1 spot once you scroll past a certain point- it behaves normally before it
- The sticky element stops being fixed as soon as it moves out of the parent container's content

```css
selector {
    position: sticky;
    top: 20px;
}
/* MEANING: 
Start by staying 20 pixels from the top
Remain fixed in this position until....
You reach the outer edge of your parent container's content
After this point, behave normally
```

Watch this video for visuals: 
[CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass) | Udemy](https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/learn/lecture/9520852#overview)
https://mastery.games/post/position-sticky/

Browsers do not universally support this property value yet. 
Knowing how it works is good, but I wouldn't harp on this



### Stacking Context

Stacking context is created when you apply z-index with the fixed/sticky or absolute/relative position methods

In our example,we have 3 parent containers. The navigation, headline, and contact-us
The headline parent has 3 children: images 1-3

#### z-index Scenario:

Assume we made it so the positioning type for every element is anything other than static. Otherwise z-index would have no effect

navigation: 0	headline: 5	images 1-3:100	contact-us: 90

What happens?  
Images 1-3 will still not be layered on top of contact-us, despite the fact that they should be higher on the z-axis.

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201221022039664.png" alt="image-20201221022039664" style="zoom: 40%;" />

- Child elements cannot be layered above their parents. 
  They'll never be on top of elements superior to their parents on the z-axis
- Similarly, child elements cannot be layered below their parents
  They'll never be behind any elements that their parents are in front of

For more, check this out: 
[The stacking context - CSS: Cascading Style Sheets | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)





# SECTION 7: Background Images & Pictures

Overview of the background properties:

![image-20201221230445399](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201221230445399.png)

- Remember, you can't position background-color because it just fills the entire container every time. 

- The diagram shows properties relevant to images in orange



### Background Sizing

- We've been using shorthand for each background declaration this whole time
- Also, you can declare multiple backgrounds, but only one solid color before it gets overridden

```css
background: red;		/*same as below*/
background-color: red; /*Declaring a solid background color*/

background: url("freedom.jpg");
background-image: url("freedom.jpg");  /*Declaring a picture background*/
```



#### Setting Width, Height, and Repeats

```css
background-size: 100px /*Setting only 1 value specifies img width*/
background-size: 100px 200px	/*Specifies width/height */
```

- If you specify the width and height, the picture will always be a little distorted due to new proportions
- You can size with percentages too

If 1 instance of your image is not enough to fill the width and height of the element block its in, it'll repeat both horizontally and vertically:

```css
background-repeat: no-repeat	/*Img appears once*/
background-repeat: repeat-x		/*Only repeats in the x-axis*/
background-repeat: repeat-y		/*Only repeats in the y-axis*/
```

All 4 cases displayed: https://codepen.io/NFuego24-7/pen/PoGKVdj



#### Maintaining Aspect Ratio

To maintain the original look of the photo, let the aspect ratio stay intact. You can still set 1/2 parameters yourself however

```css
background-size: auto 40%  /*Set height, let browser pick best width*/
background-size: 50% 		/*Set width, let browser pick best height*/
```

Your image may end up being cropped when you let the browser select the width or height. This is done so it does not overlap with other webpage content. Like most things, it can be controlled. Will revisit

Demo: https://codepen.io/NFuego24-7/pen/JjRyzvW

#### Pre-made Size Values

```css
background-size: contain 	/* Ensures the whole img is visible in the container*/
```

Use contain when you want to make sure 100% of the photo is visible, even if you need to leave some white empty space on your page. Works great when your photo's much larger than the viewport. Then it just sizes it down

```css
background-size: cover		/*Makes img fill the entire container via crop/zoom*/
```

Use cover when you want no white space on your element block or page. The photo will fill it up 100% vertically and horizontally, even if it must crop things out or zoom in.

The challenge with this option is that it'll often crop out things in the image that you want to be visible, while leaving in unimportant sections. For that, we must learn to control the crop via background-position

Demo: https://codepen.io/NFuego24-7/pen/JjRyzvW



### background-position for cropping (Pt.1)

```css
background-position: 20px	/*Specifies distance fr/ left edge of container*/
background-position: 20px 50px	/*Specifies distance fr/ left edge & top*/
```

Feel free to use percentages as well- but be aware that they function differently than pixels do.

How cropping works: Let's say an image needs to be cropped vertically

```css
background-position: center
/* Sets a 50/50 crop distribution both vertically and horizontally*/
```

- By default, 50% of the cropping will occur at the top while the other half occurs at the bottom. This distribution can be changed using percentages

- The above code reaffirms the default settings in case you set it to something else via inheritance or something

  

### Crop Percentage and Premade Values (Pt.2)

BEFORE WE BEGIN, UNDERSTAND...

In order for crops to be noticeable, you need to have a container that restricts the image space. 
So don't test this on an element with 100% width and 10000px height

More crop on bottom, you see more of the image top
More crop on top, you see more of the image bottom

If 20% of cropping occurs on the left, 80% occurs on the right
If 60% of cropping occurs on the top, 40% occurs on the bottom

DEMO FOR ALL THE FOLLOWING EXAMPLES: https://codepen.io/NFuego24-7/pen/xxELeGX

#### Crop Percentages as Values

```css
background-position: 0% 15% 
/* 0% crop on left, 15% on top*/

background-position: 0% 100% 
/* 0% crop on left, everything is cropped from the top*/
```



#### Premade Crop Values

```css
background-position: left-top
/* No cropping on the left or top side. (cuts right and bottom) */

background-position: left-bottom
/*No cropping on the left or bottom side. (cuts right and top) */
```



#### Crop Percentage / Premade Combos

These allow you the most control over what gets cropped. 
Combine the 2 methods in the previous section

```css
background-position: right 10% bottom 20%
/* 10% crop on right, 20% on bottom*/
```

- If we didn't specify where the crop was, the defaults would set them to the left and top sides




### Background-origin, Clip, & Attachment

#### TLDR:

`background-origin` and `background-clip` decide where the photo should be cut with respect to its container. 

You can cut it at the outer edge of the border, padding, or content boxes. The property you use changes depending on whether you're cutting vertically or horizontally

| OUTER EDGE 2cut | HORIZ                            | VERT                           |
| --------------- | -------------------------------- | ------------------------------ |
| Edge of border  | `background-origin: border-box`  | `background-clip: border-box`  |
| Edge of padding | `background-origin: padding-box` | `background-clip: padding-box` |
| Edge of content | `background-origin: content-box` | `background-clip: content-box` |

Border-box: Image stretches across the content, padding, & border
Padding-box: Image stretches across the content & padding only (not the border)
Content-box: Image stretches across the content only (no padding or border)



#### background-origin 

We applied a photo background an inspected all the edges** 

Sometimes you may see free space on the left and right side of a dashed border's width- while the top and bottom sides look fine. This is caused by a browser default, and can be replicated using `background-origin: padding-box`

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201222000437187.png" alt="image-20201222000437187" style="zoom:50%;" />	<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201222001218792.png" alt="image-20201222001218792" style="zoom:80%;" />

```css
background-origin: border-box
background-origin: content-box 
background-origin: padding-box 
```

You may have noticed from the above photos that the image went across the border's top/bottom side. Regardless of whether you use border/content/padding box, this will always be the case...unless you change it via `background-clip`

#### background-clip

```css
background-clip: border-box
background-clip: content-box
background-clip: padding-box
```

background-clip can actually override background-origin, and force an early cut on the horizontal and vertical sides at once. See demo vid:

> https://drive.google.com/file/d/1lFFVOdGm-vrv3rtauqJmugaAKNjSyT-f/view?usp=sharing



#### background-attachment:

DISCLAIMER: This is very rarely used, and the course I took doesn't even give visual examples of what the property can do. Revisit later if necessary

Useful when you are scrolling through a non-fixed container and want to control how the image inside of it will behave.

```css
background-attachment: fixed;  /*img would be fixed to viewport, not the container*/
background-attachment: scroll; /*img stays in place. Content scrolls over it*/
background-attachment: local;  /*img scrolls w/ container content*/
```

 

### Shorthand for New Tools

If you only set one box, it'll apply to both origin and clip, fyi

```css
background: url(" ") left 10% bottom 25%/cover no-repeat border-box padding-box
/* 			image( )  crop position	 	/size  repeats	 origin		clip
```

Always remember that you overwrite other properties when setting a shorthand. The shorthand, even if you only use it to define a URL, will also initialize default values for all the other sub-properties.

Theoretical Example:

- You add a shorthand as a last declaration in a rule
- Earlier on, you applied a set background position 

This set background will actually be overwritten by the browser defaults implied by the shorthand notation.



### Styling Non-Background Images

> READ THIS: 
> https://www.digitalocean.com/community/tutorials/css-cropping-images-object-fit

![image-20201227123306925](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201227123306925.png)

`overflow-x:hidden` can be used to crop 

If you define a width but no height (or vice versa) then apply a margin, you can size image elements even if they're considered a flex item

#### How to Bring in Images:

We do not need CSS to bring an image in that will not be part of a background. 
Use regular HTML

```html
<div class="class-name">
   <img src="images/uhost-icon.png" alt="uHost- company"> 
</div>
<!-- Can nest the image tag within any kind of element. For clickable logos, choose anchor instead of a generic div               
```

Default Behavior:

- Let's say we have an image tag inside of another element w/ 400px height and width. The image's size is much larger than this. 
- When the photo is called in, its original dimensions will be used no matter what the size of its container is.

#### Adjusting Image Size with Pixels

- Target the image element like you would any other, then set your width and height. Combinator optional- use any valid selector 
- If you specify only 1 of 2, the browser will decide the other to preserve the aspect ratio

```css
.class-name > img {
    height: 30px
} 
```

#### Adjusting Image Size with Percentages

```css
.class-name > img {
    width:100%;
}
/*The percentage declaration does nothing to an inline element without inline-block applied to its parent.
```

- Percentages can also be used, but they behave a little differently depending on the type of element the image tag is nested within. 

- They only respect block and inline-block elements

| Parent Type         | img behavior when <br />width: 100% is used | img behavior when <br />width: 100% is used |
| ------------------- | ------------------------------------------- | ------------------------------------------- |
| inline element      | uses default img width                      | uses default img height                     |
| block-level element | uses 100% container width                   | uses 100% container height                  |

If you have an image tag nested inside of an inline element, simply apply `display: inline-block` to the INLINE PARENT in question. The percentage will now respect the container boundaries

- This is about all we can do regarding styling regular images. The fancy tools we have for background images are not usable here.
- You can still recreate the look of them using hacky techniques adjusting the border-box values- if you absolutely need to

#### Inline Element Bug- Open Container Space

Sometimes you may run into the following scenario when styling an image:

![image-20201222235326875](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201222235326875.png) 

The image is an inline element (ofc.) and is nested inside its surrounding container. If this were a background, you could use `background-size: cover` to fill the entire container space, but this ain't no background.

To get rid of it, apply one of these directly to the image tag:

```css
vertical-align: top
vertical-align: bottom
display: block
```



### object fit: Styling img Elements

SCENARIO:
An image's width and height are specified, but its aspect ratio is getting messed up because of it

![image-20211210054430508](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211210054430508.png)

#### contain

The image's original aspect ratio gets maintained
The size is lowered to the point where the whole image can be shown without cropping

![image-20211210054457221](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211210054457221.png)

#### cover

The `cover` value preserves the original aspect ratio
The image occupies all the available space with cropping

![image-20211210054627015](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211210054627015.png)

CONTROLLING THE CROPPING

```css
object-position: 0 0%; /* 0% : crop everything from bottom */
```

- Width and height need to be specified for your `<img/>`
- 

### Linear Gradients

DEMO: https://codepen.io/NFuego24-7/pen/eYdGEmz

```css
/*GENERAL SYNTAX*/
background-image: linear-gradient(direction, start-color, color-2...)
```

- Linear Gradients can go U/D L/R or diagonal. 
- We are allowed to have more than 2 colors blending into each other
- Feel free to use hex codes or RGBA instead of color names

When specifying direction, you tell CSS the end destination and it will assume the starting point 

> Left to right: to right		
> Right to left: to left
>
> Top to bottom: to bottom	   
> Bottom to top: to top
>
> Upper left to bottom right:	
> Bottom right to upper left:

**Direction - Top to Bottom (default)**

```css
background-image: linear-gradient(blue, yellow);
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201223020502041.png" alt="image-20201223020502041" style="zoom:33%;" />

**Direction - Left to Right**

```css
background-image: linear-gradient(to right, black , teal);
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201223020416666.png" alt="image-20201223020416666" style="zoom:33%;" />

**Direction - Diagonal**

```css
background-image: linear-gradient(to bottom right, red, black);
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201223020622365.png" alt="image-20201223020622365" style="zoom:33%;" />

**Multiple Colors**

```css
background-image: linear-gradient(to bottom right, orange, blue, hotpink);
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201223020708104.png" alt="image-20201223020708104" style="zoom:33%;" />

#### Angles

```css
/*GENERAL ANGLED GRADIENT SYNTAX*/
selector { background-image: linear-gradient(angle, color-stop1, color-stop2...); }
```

You have the option of setting your own angle to have more control over the gradient direction.

0 deg:		bottom to top 	🠑
90 deg:	   left to right 	🠒
180 deg:	  top to bottom 	🠓

10 degrees would be a lot more vertical (80 degrees up from horizontal)



#### Implementing Transparency

- To add transparency, we use the rgba() function to define the color stops. 
- The last parameter in the rgba() function can be a value from 0 to 1, and it defines the transparency of the color: 
  0 indicates full transparency, 
  1 indicates full color (no transparency).

```css
background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,0,0,1));
/*Feel free to mix in using verbal color names, hex codes, and RGBA codes
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201223020256988.png" alt="image-20201223020256988" style="zoom:33%;" />

#### Gradient Percentage

By default, the color gradient between 3 colors for example would be split evenly. Color one would take up 33% of the space, much like the other 2. You can change this distribution

```css
background-image: linear-gradient(to right, black, 20%, red;
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201223021013119.png" alt="image-20201223021013119" style="zoom:33%;" />

If you enter 2 percentages and you don't give the colors enough room to transition, you'll end up with hard edges 



### Radial Gradients

DEMO: https://codepen.io/NFuego24-7/pen/XWjeejB

```css
background-image: radial-gradient(shape size at_position, color1, color2);
```

shape: ellipse (default), circle
size: farthest corner (default), closest-side, closest-corner, farthest-side
position: center (default)

If one of these parameters is left unstated, the default will be chosen

**Standard 3 color gradient in an Ellipse, then a Circle**

```css
background-image: radial-gradient(blue, yellow, black); /*ellipse*/
background-image: radial-gradient(blue, yellow, black); /*circle*/
```

**Start Gradient at Center Top**

```css
background-image: radial-gradient( at top, black, blue, purple);
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201223024226116.png" alt="image-20201223024226116" style="zoom:33%;" />

**Start Gradient at Upper Left**

```css
background-image: radial-gradient( at top left, black, blue, purple);
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201223024358504.png" alt="image-20201223024358504" style="zoom:33%;" />

#### Custom Values

```css
/*GENERAL SYNTAX FOR CUSTOM POSITIONING*/
background-image: radial-gradient(shape size at_%horiz_%vert, color1, color2);
```

The following code starts the gradient 40% away from the left side and 30% away from the top. Can use pixels too

```css
background-image: radial-gradient(at 40% 30%, black, green);
```



#### Sizing Circles and Ellipses

A circle gradient only needs one pixel value to be fully defined, while an ellipse gradient needs 2. Because...math

```css
/*100 px circle diameter*/
background-image: radial-gradient(100px at 40% 30%, green, black);
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201223025856188.png" alt="image-20201223025856188" style="zoom:33%;" />

```css
/*500px width and 100px height ellipse*/
background-image: radial-gradient(ellipse 500px 100px at 40% 30%, green, black);
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201223030142116.png" alt="image-20201223030142116" style="zoom:33%;" />

#### Keywords

These will change the shape of the overall gradient to meet a certain condition. 
Looks very strange in practice, so test em out when and if this matters at some point

![image-20201223030623258](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201223030623258.png)



#### Color Stops

In any one of these examples, you have the option to add a percentage after a color declaration to control how long the gradient should stretch for

```css
background-image: radial-gradient( at top left, black, blue 70%, purple);
```

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201223031142691.png" alt="image-20201223031142691" style="zoom:40%;" />	<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201223031240906.png" alt="image-20201223031240906" style="zoom:40%;" />
>
> Before the 70% blue gradient		    After



### 1-color Gradients & Transparent Filters

Sometimes we'd like to have an image that starts off looking normal, then eventually fades into a certain color on the top/bottom/left/right side

> ![image-20211119170108484](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211119170108484.png)
>
> The image you work with does not have to repeat

#### 1 Color Gradients

> DISCLAIMER:
> This only works when you're working with a background image
> If you bring an image to a page with <img/>, this won't apply

1. Create a div container, and don't put anything inside
2. Use position: absolute on that container with a negative z index value
   This will keep the image off the DOM tree while letting it show beneath other elements
3. Set a 

HTML

```HTML
<div class="background__image"></div>
```

CSS

```css
  z-index: -10;
  position: absolute;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 80% /* how far along we start the black gradient */
    ),
    url("/src/images/leveldays.jpg"); /* gradient ends at the image bottom*/ 
```

Adjust the second rgba to change the gradient color
Lowering the second rgba percentage will start the gradient sooner

> TEST: https://codepen.io/jason2b3/pen/vYJPdmP

#### Transparent Filters

We can gimmick our way into producing a 1 color filter by pairing 2 gradients using the same color code

EXAMPLE: Produce a transparent black filter

```css
background: linear-gradient(
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.4) ), 
    url('/images/b.jpg')
```

![image-20220110052647355](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220110052647355.png)

### Stacking Multiple Backgrounds

If you're going to stack images, you'll need one of them to have some sort of transparency. Images have transparent parts, and gradients may be composed of transparent colors

- Only 1 solid color can be used in a stack of backgrounds. 
  Must be at the bottom and is often used as a contingency in case the other stack images don't load 
- Can layer as many background images as you want
- Remember that gradients count as images too

You can type out the details for multiple background on the same line using shorthand declarations- just remember to separate them with commas

```css
background: linear-gradient(to top, rgba(80,68,18,0.8), transparent), 
url("images/freedom.jpg") left 10% bottom 20% / cover no-repeat border-box, 
#ff1b68;
/* Background 1: linear gradient from bottom to top. The top will be completely see-through while the color is harshest on the bottom

Background 2: Cropped background image
Background 3: Solid red color. Contingency only
```

Background 3 is non-visible on the front-end due to it being at the bottom of the stack. The image in the middle is not transparent anywhere.

When you stack a color gradient on top of an image, you tint its colors

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201227113235112.png" alt="image-20201227113235112" style="zoom: 25%;" />

### Filters

Filters apply visual effects like blur, color shift, and grayscale to element blocks
List of available filters & their mini-tutorials: [filter - CSS: Cascading Style Sheets | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)

Grayscale

Set a percentage for how gray you want your image to be. 
100% is maximum gray while 0% leaves the original image as it was

```css
filter: grayscale(90%);
```

Check the browser support on the link provided above to see if your browsers support your filtering. This becomes an issue when you are filtering things like SVG's.

You may need to use alternate solutions like Polyfill, or tweaking an image's looks before importing it to your code. Also, add a fallback color just in case

# SVG's

### Adding in & Styling SVG's

#### M1: Inline < svg >

Paste an entire SVG HTML file's contents into an empty div block on your webpage's HTML

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201227120903117.png" alt="image-20201227120903117" style="zoom:50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201227122146611.png" alt="image-20201227122146611" style="zoom:50%;" />

1. Open your SVG's dedicated HTML file. Has content within this tag `<svg viewbox>` `</svg>`
2. Copy paste into an empty div block on your webpage's HTML

- Use [HTML Compression tool](https://www.textfixer.com/html/compress-html-compression.php) to place the entire SVG into a single line
- Prettier-ignore will prevent prettier from changing your 1 line into several
  Complicated SVG's take up a ton of space, so this is for the best

EXAMPLE:

![image-20211130180329158](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211130180329158.png)

![image-20211130180345236](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211130180345236.png)

- We can use inline CSS to set width, height, and SVG color using "fill"
- Override these in your CSS files if necessary

#### M2: Object Tags

1. Save `name.svg` files into a folder where you keep other images
2. In your HTML, use object tags to reference/show it on your webpage

![image-20211128182225776](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211128182225776.png) ![image-20211128182055029](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211128182055029.png) <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211128182155738.png" alt="image-20211128182155738" style="zoom:80%;" /> 

- You can apply widths and heights to the SVG by referencing this object tag in CSS
- There's also an `<img>` method for SVG's but the perk I just mentioned won't work when using it



#### Where to get SVG's for your projects

Business logos
https://iconscout.com/
https://www.logo.wine/logo/Instagram?logo=Glyph-Black

PROCEDURE

1. Get SVG's from any free source, then download them
2. Create SVG tags using them inside your projects
   If using React, dedicate an entire js file for them so you can import them (they are very long)
3. Resize them using `<svg>` attributes (width and height)
   This counts as inline CSS styling- which is only 1 of multiple ways to set width/height

![image-20211030010319017](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211030010319017.png)

#### Other SVG Methods

Honestly, inline SVG's work in almost all situations so I didn't bother learning these

1. `<use>` 
2. `<img>`
3. SVG sprites

### Which SVG method to Choose?

#### When to use Inline

If your SVG requires recoloring or hover states, use inline SVG's. 
They are much easier to style than if you use object tags

RECOLORING INLINE SVGs

```css
svg path:hover {
  fill: red;
}
```

RECOLORING OBJECT SVG's

- Requires you to apply a crazy filter that isn't always 100% accurate
  https://codepen.io/sosuke/pen/Pjoqqp or https://codepen.io/jason2b3/pen/xxXbVqe?editors=1010
- Be sure to read all the instructions on the tool I referenced in codepen
  Must convert SVG to a black color first

#### When to use Object SVG's

If you intend on swapping one SVG with another after a user interacts with something, feel free to use object SVG's

- All you'll need to do is change an attribute value in a JS event listener 
- You won't need to re-render or replace elements

EXAMPLE: 

Before and after clicking:	![image-20211201212904298](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211201212904298.png)	![image-20211201212917627](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211201212917627.png)		

Just need to change the following in JS: 		<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211201213033849.png" alt="image-20211201213033849" style="zoom:67%;" />



### Recoloring SVG's

#### Manual Recolor: img Method

Your options for changing the color of your SVG's is pretty limited by default, and I'm not about to dive into the SVG rabbit hole to figure out how to recolor them

BLACK -> WHITE
If your starting SVG is black you can flip the color to white easily

```html
<img src="long AF link for your SVG" />
<style>
    img{ filter: brightness(0) invert(1) }
</style>
```

ANY COLOR -> BLACK
Same process as above, but remove the `invert(1)` part

#### Manual Recolor: Inline/Object Method

- If you're using inline SVG's, you'll do the following on your index.html document
- If you're using object SVG's, you'll make this change on whatever other file you saved your SVG

ANY COLOR -> ANOTHER:

```CSS
      <path
        fill="orange"
      />
```

EXAMPLE:

```css
<svg
  height="800"
  width="1200"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="-35.20005 -41.33325 305.0671 247.9995"
>
  <path
    d="long AF math string"
    fill="orange"
  />
</svg>
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211115224822907.png" alt="image-20211115224822907" style="zoom:50%;" />

#### Programmatic Recoloring

RECOLORING INLINE SVGs

```scss
svg path:hover {
  fill: red; 
  // take a look at the SVG HTML and see exactly what needs a fill recolor
  // it depends on the SVG you're applying this on
}
```

RECOLORING OBJECT SVG's

- Requires you to apply a crazy filter that isn't always 100% accurate
  https://codepen.io/sosuke/pen/Pjoqqp or https://codepen.io/jason2b3/pen/xxXbVqe?editors=1010
- Be sure to read all the instructions on the tool I referenced in codepen
  Must convert SVG to a black color first

#### Filter Recoloring Limitations

In the previous subsection I mentioned you can use filters to recolor SVG's that you've included using the object method

- It's a bit more work than simply styling an inline SVG with regular CSS, but its still easy
- The only downside is that it causes problems in certain situations

WORKS WHEN...
You want to recolor an SVG after an event... and that's it

![image-20211130182536161](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211130182536161.png)	![image-20211130182549880](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211130182549880.png)

CAUSES ISSUES WHEN...

1. You want to recolor an SVG after an event WHILE changing its background color as well

![image-20211130180345236](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211130180345236.png) ![image-20211130182701721](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211130182701721.png)  (had to use inline SVGs for this one)

2. You highlight over an element you applied a filter to

- The standard highlight color of blue will be recolored to yellow, which looks bad
- Be prepared to disable highlighting on whatever element you targeted with your filter
  This is generally not a UX-friendly thing to do, so try to using inline SVG's more

![image-20211201222533044](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211201222533044.png)

——————————————————————————————————————————————————————

Disabling highlighting: 
https://stackoverflow.com/questions/826782/how-to-disable-text-selection-highlighting#:~:text=the%20javascript%20way%20is%20supported%20in%20older%20browsers

Apply the following attribute on the parent container `onselectstart='return false;`

### Issues with SVG's & Event Listeners

If you use an SVG inside an element you want to register an event listener on, you'll run into problems

#### The Issue

Due to the way SVG's work, clicking on one will not count as you clicking the parent container it resides inside of

SOLUTION 1:
Disable clicks on SVG's (makes it so you must surround it with a parent container to register clicks)

```CSS
object {
  pointer-events: none; /* if you rely on the <object> method */
}
svg {
  pointer-events: none; /* if you rely on the direct <SVG> paste method */ 
}
```

SOLUTION 2: 
Use closest() which requires an understanding of event delegation and bubbling
Read the JS DOM Manipulation document you created

https://gomakethings.com/detecting-click-events-on-svgs-with-vanilla-js-event-delegation/

# SECTION 8: Sizes & Units

### Pixels & Unit Alternatives

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201227151746305.png" alt="image-20201227151746305" style="zoom:45%;" /><img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201227151802877.png" alt="image-20201227151802877" style="zoom:50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201227152506880.png" alt="image-20201227152506880" style="zoom: 60%;" />

So far we've been primarily using pixels and percentages to size all of our elements. There are other units available to help change the size of all our boxes or fonts. 

You should know the answers to these 3 questions when deciding what unit to use in each scenario

#### The Issues with Pixels

1. They don't scale well when the screen or window size changes. Fonts specified at 20px high will always be 20px high despite how little space a new screen or squished window gives you
2. Pixel units are not actually the size of pixels on your screen. 16px font may be 24px tall on one screen while 24px on another. See how misleading this is?
3. If you specify a font size with pixels, users who try to increase the text size via settings on their browser will be out of luck. Specifying font size with pixels prevents them from being changed in this way 



### height: 100% Issue

Whenever you work with the height and a percentage unit, the containing block could lead to a behavior which you would not expect. (See the What % References lesson at the end of Section 6 in our notes)

When you set an element height to 100%, it oftentimes doesn't work properly because the body block is the nearest block level element. Its height is determined by all the content inside and is not defined directly using CSS

```css
html { height:100% }
body { height:100% }
/*SOLN: Include these declarations at the top of your CSS doc
```

You can also try setting the element for which you want height: 100% to 
`position: absolute`

TLDR:

![image-20201229031435709](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201229031435709.png)

This issue will come up again when you start to use vh and vw. There's an alternate solution when using these units

### Min and Max Width/Height

![image-20201228014213518](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201228014213518.png)

![image-20201228014240209](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201228014240209.png)

- When an image element has `width: X%` of its containing block, making the browser window larger will often result in your picture getting larger too. 
- Sometimes it can look too big or even small when we do the reverse. This is why we set a min and max for the image's dimensions
- Once these are applied, adjusting window size will not affect the image past 2 certain points

```css
.image-container-classname {
  width: 65%;			/*Should be set already*/
  max-width: 1200px; 
  min-width: 500px;
}
```

Can set only a minimum or only a maximum if you wish. 
Don't feel pressured to use both every time



### Sizing Fonts via REM and EM

Remember:

- You can change browser font size in the settings
- If an element with em applied to it does not have any parents with font-sizes applied, it'll default to using the body's font size, then the html element's

|      | How it Works                                                 | Strengths                                                    |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| em   | Relative to the font size of its direct or nearest parent (siblings of direct parents do not count) | Allows us to control an area of a design.<br />(scale the type in that specific area relatively) |
| rem  | Relative to the html (root) font-size                        | Gives the ability to scale type across the entire page easily. |

If font-size is not explicitly defined in root element HTML then 1rem will be equal to the default font-size provided by the browser (usually 16px).

```css
/*Setting the root font size yourself*/
html { font-size: 16px; }
```

Using ems can quickly get out of hand due to their compounding nature. This is why rem's were invented in the first place- to fix the issue that arises when ems are used on multiple nesting levels. The reference stays the same no matter how deep you are 



#### em Example Part 1:

> ![image-20201228180034573](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201228180034573.png)
>
> h1 tag is set to 5em ( 5 times 16 pixels)
>
> p tag is set to 3em ( 3 times 16 pixels)
>
> The nearest parent of the h1 and p tags is the div element with the class name col--em. These elements will scale in accordance to the size this element is given in CSS
>
> If this div element did not have its font size directly stated, the reference would be the div class 1 level higher. They would scale to its given font-size (1 px)



### Sizing More Properties w/ EM & REM

You can also size margin, border, padding, width, height, L/R, B/T using rem and em units as well. Their reference does change when sizing these other properties however.

| Sizing What?     | EM scales to..?          | REM scales to..?   |
| ---------------- | ------------------------ | ------------------ |
| Fonts            | nearest parent font size | HTML font size     |
| Other properties | that element's font size | HTML font size     |
|                  | (varies)                 | (stays consistent) |

Instead of referencing the nearest parent, sizing boxes via rem and em will scale in regards to the ELEMENT ITSELF. 

#### em Example Part 2

> ![image-20201228180913299](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201228180913299.png)
>
> The h1 element's font is set to 5em  << 5 times 16px= 80px >>
>
> The margin-bottom is set to 1.5 em
> If we were sizing the font again, this would be << 1.5 times 16px= 24px >>
> BUT since this is a margin, it actually calculates to  << 1.5 times 80px= 120px >>
>
> You can check all the font sizes in px within the dev tools' computed tab

Sizing fonts and these other properties using em and rem is very important when we begin dealing with media queries and responsive web design. We can't use pixels when the viewport size will vary so wildly among users with different screens/windows



### Tips for REM Efficiency

https://engageinteractive.co.uk/blog/em-vs-rem-vs-px 	
TLDR: Avoid pixels, use REM for sizing and spacing, use EM for media queries

Setting a root font-size of 10px is the most common scenario when I see people using REMs. It allows for a quick conversion between pixel values to REM values simply by dividing the number by 10.

> html font-size is set to 10px
> To set a diff element's font to 348px, use 34.8rem



#### 1 rem to 10px:

EXAMPLE:

```CSS
html {
  font-size: 62.5%; 
  /* Now 10px = 1rem since default size is 16px */
  /* If their default size is different, this will still scale */
}
```

WHY WE DO THIS:

> 1. Set the HTML font size to 62.5% of the browser default which should be 16px  
>    The HTML font-size will then be 10px 
> 2. If you wish to have text set in the default size, set it to 1.6rem

This strategy works best when you build a website from scratch. 

- If you apply this widespread change to the html element, anything that uses default font sizes will shrink. 
- If a website is already built without this in place, you'll run into challenges
  Your new default size is noticeably smaller, and you will have to fix a bunch of stuff

#### If the site's already built

If the site is already built, just bite the bullet and use math to determine property sizes
`1 rem = 16px. Therefore, divide pixels by 16 to get their values in rems`

24px? Sounds like 24/16 to me. But you can't express rems using fractions in CSS, so go with `1.25rem`



### Viewport Width and Height

Another relative unit. The difference between this and the percentage unit is that the percentage unit may end up referencing a parent or elder element that may or may not match the size of the viewport

Viewport height/width are relative to the viewport-as you may have guessed. 1vh is equal to 1% of the browser window's height

```CSS
height: 25vh
width: 50vh
```

As an alternative, use `position: fixed` coupled with percent values for width and height as an alternative to viewport units



### vmax & vmin (return2)

vmin uses the ratio of the smallest side
height < width : 1vmin equals 1vh
height > width : 1vmin equals 1vw

vmax uses the ratio of the larger side
height < width : 1vmax equals 1vw
height > width : 1vmax equals 1vh

But why does this exist? Take the example below:

```css
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vmin;
    height: 50vh;
    background: rgba(0,0,0,0.5);
} /*Syntax for a gray backdrop*/
```

backdrop width: 80% of the smallest side (either viewport width or height) 
height: 50% viewport
width: 100% of the smaller side

If we drag our window horizontally really far, the backdrop will stop expanding due to it being capped at 100% viewport height . This is good because it'd look really odd to have a a backdrop that's so much more long than it is tall 

If this sounds complicated, just try to picture this thing maintaining 1 of 2 formats: the portrait and the landscape

TLDR:

![image-20201229031812575](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201229031812575.png)

#### DISCLAIMER: 

I'm not Confident Using vmin and vmax yet! This is still confusing me due to the calculations involved. Being equal to a separate vh or vw value will not mean your percentage matches. You just scale to their size



### What Units to Choose

![image-20201229025412523](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201229025412523.png)

#### Table

> SOURCE:	https://www.youtube.com/watch?v=N5wpD9Ov_To

| SET...                       | CHOICE                 | WHY                                                          |
| ---------------------------- | ---------------------- | ------------------------------------------------------------ |
| font-sizes                   | rem                    | Using pixels will override user settings<br />If an old person wants to view larger text, but you set it to 12px b/c you think it looks better... that's bad UX |
| width                        | percent                | vw is not a bad choice, but it may lead to certain issues more often than % |
| width for text based element | ch                     | In general, we want paragraphs to be under 75 chars long     |
| height                       | percent, rem, maybe vh | try not to set a height at all if possible<br />if you must have one, try to use min-height to avoid overflow issues |
| margin/padding               | rem or em              | This way, padding/margin will scale relatively to the font-size of an element |
| media queries                | rem/em                 | not sure. Will probably use pixels instead to avoid all the extra math when messing around with dev tool responsive view |



#### When to use Pixels

Use pixels in scenarios where you purposely want things not to scale.
Box shadow, border widths, min and max width/height, border radius...etc

Just ask yourself if you want a property to stay the same size despite changing screen or font sizes. 
If your answer is yes, use pixels



# SECTION 9: JavaScript CSS Fusion

Sometimes, content or styling needs to change after the page has been loaded. 
We will learn how to perform 2 key operations during runtime in this module:

A List of what JS can do:

- Access elements in the DOM and manipulate them
- Change attributes, execute certain actions, listen to events on them, access their styles/CSS classes/content, add or remove elements...etc

This will all be taught in a JS-focused course. In this lesson, we focus on selecting elements and working with their styles or classes

![image-20201229032818815](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201229032818815.png)



### Selecting an Element in JS

`console.dir(JS-variable)` displays a list of properties for the specified JavaScript object in the console. Coders can easily view the properties of the object using the console tab in the dev tools

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201229153025294.png" alt="image-20201229153025294" style="zoom: 67%;" />![image-20201229153211384](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201229153211384.png)

- Right now we are mainly interested in the style property. Click on the down arrow to see a list of available styles. 
- Each one of these will be applied as inline-properties. 
  This means it'll override all other standard CSS styles with ease
- Keep in mind this DDM only displays inline styles in its list. 
  If we set zIndex=100 to an element in our CSS file normally, it won't show up here- because that's not an inline styling

#### Changing Element Properties in JS

Any property in this drop down list is fair game. In JS, use the following notation to change the display style of an HTML element.

```js
backdrop.style.display = "block" 	// block must be given to JS as a string
```

CONTEXT FOR backdrop_12 (a transparent overlay across entire viewport)
Before using JS: This element was styled in CSS as `display:none;` (no appearance)
After using JS: Inline styling changes this to `display: block;` (makes it visible)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210108145344102.png" alt="image-20210108145344102" style="zoom:33%;" /><img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210108145257859.png" alt="image-20210108145257859" style="zoom:33%;" />    



### Property Notation 

#### Differences b/t JS Property & CSS Notation

Properties found in the aforementioned list are essentially just variables for JS objects. 
The property names in the style-properties-list are written in a different way than they are in CSS.
The reason for this is because dashes are invalid for property names
Instead, they use camelCase notation

Just use `console.dir(any JS variable);` to take a look

![image-20210109170637058](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210109170637058.png)

```CSS
background-color: blue		/*in CSS*/
backgroundColor: " "		/*When you console.dir() the JS object*/
```



This becomes an important topic when you need to set certain CSS styles in JS 

```js
activModal.style.background-color= 'blue'; 	// INVALID
activModal.style.backgroundColor= 'blue';	// CamelCase notation. GOOD
activModal.style["background-image"];		// Alternative to camelCase. GOOD
```

Not noticeable when you use 1-word CSS styles to change in CSS

```js
activModal.style.display= 'none';
```



### Implementing Inline JS

#### Procedure

1. Put script tags near the very bottom of your body element. You want JS to be parsed last since this interactivity comes into play after the page loads.

```css
<script src="file-name.js"> </script>		
```

2. Create a new JS file called file-name.js on the same level as your CSS doc. 
   If you nest deeper or higher, you'll have to change the SRC name a bit

To test if this implementation worked, put `alert('This works')` in the JS code, and check your live server's webpage. There should be an overlay on it. If successful, remove that

![image-20210108140001452](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210108140001452.png)



# SECTION 10: Responsive Design

- Normally, we design our sites with a mobile-first approach- ensuring it looks nice on phones first before worrying about the desktop version. 

- This has become the norm due to how many people use their phones, and because desktop screens are always much larger-giving us more freedom for how we want to use our viewport space

Up until this section, we've been designing with only desktops in mind. The reason for this is because we were learning how to use CSS. Moving forward, we'll be going with the mobile-first approach

NOTE TO SELF (return2) : You may want to skim a crash course for responsive web design after we learn flexbox and grid. I'm getting pretty tangled up using native CSS in the second half of this chapter

### Hardware Pixels vs Software Pixels

#### TLDR

Place this viewport metatag in the head section of every HTML document on your site

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- We need to start designing our sites to look good on cellphone screens as well as desktops. 
- By default, our dev tool preview uses hardware pixels instead of CSS pixels. This causes visual problems, and the above code fixes that



#### Dev Tools for Mobile Screens

![image-20210110144647173](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210110144647173.png)

Click the toggle device emulation button to see how your site looks on mobile. 

- You have several options for phones to work with (iPhone X for example)
  Each model has it's size displayed in CSS pixels
- If the phone you're interested in testing responsivity for is not present, get its size online and enter your own custom dimensions
- Adjust zoom level to get a closer look
- Switch to landscape or portrait mode
- Decrease the data quality ("online, low-end mobile")
- Clicking the triple dot options button lets you show the phone border as well

#### Desktop vs Mobile Previews

We already have a webpage that isn't responsive pre-built. Compare the differences on desktop when you constrict the window size

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210110145023454.png" alt="image-20210110145023454" style="zoom:50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210110145056568.png" alt="image-20210110145056568" style="zoom:50%;" />
>
> - When the viewport is set to a normal size, the webpage looks fine.
>   If you constrict the window to be tall and thin, the website looks awful
> - This is because we haven't designed it to be responsive yet. 
>   When you load this page onto a cell screen, it should look like the second image at this stage of our development



Let's see what our site looks like on the iPhone 8...

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210110145454042.png" alt="image-20210110145454042" style="zoom:50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210110153257923.png" alt="image-20210110153257923" style="zoom:50%;" /> After code's applied
>
> LEFT PHOTO
> What gives? The entire website looks somewhat regular on the iPhone8, despite being non-responsive. 
>
> - It may look fine at first glance, but everything on the page is actually much smaller than it should be. 
> - Mobile apps tend to enlarge important buttons and menus on their mobile sites. The burger menu for instance, should be much larger
>
> RIGHT PHOTO (after meta tag is applied)
> This might loom worse, but it's the first step we take in making our page responsive. 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210110150011506.png" alt="image-20210110150011506" style="zoom: 40%;" />

- If you inspect CSS elements inside the phone screen, you may notice somethings strange. 

- Many CSS elements are sized to be a higher # of pixels than the supposed screen size. 

Hardware pixels are being used to describe the phone
CSS pixels are used to describe the CSS properties 



#### ENG Units to Hardware Pixel Conversion

https://www.w3.org/TR/css-values-3/#absolute-lengths

![image-20210110150622754](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210110150622754.png)

Browser's logic in the phone: 

- I have X amount of pixels in the horiz direction, and Y amount of pixels in the vertical direction. That is how the browser determines what size the phone is. 
- This works fine for monitors, but cell phones work a bit differently due to PIXEL DENSITY- how many pixels fit into a certain space. Modern phones have really high pixel densities
- The exact density varies depending on the phone. The browser's calculation is therefore inaccurate, resulting in the tiny website representation shown in mobile when the site is not responsive

Remember earlier when we saw a CSS width being 980px wide? That would mean our iPhone 8 is over 10 inches wide- definitely not correct

#### ENG Units to CSS Pixel Conversion

[mydevice.io : web devices capabilities](https://www.mydevice.io/#compare-devices)

![image-20210110152218828](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210110152218828.png)

Use this site or an alternative to see how eng units and CSS pixels relate. 
`CSS Pixel Width= (Hardware Pixel width / Pixel Ratio)`  (Works with height as well)

- This is not always exact, but pixel ratio is inversely proportional to the CSS width/height. 
- CSS pixel quantities are always smaller than the hardware pixel quantities

So, our issue has been explored in-depth. The dev tool previews use hardware pixels instead of CSS pixels. To change that, use this in the head section of the HTML doc:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210110153647126.png" alt="image-20210110153647126" style="zoom:50%;" /> A step in the right direction, despite how it looks

### Viewport Metatag (HTML) vs Media Queries (CSS)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210110173433446.png" alt="image-20210110173433446" style="zoom:67%;" />

#### Viewport Metatag: 

Automatically applies a specific pixel ratio which will then allow us to translate the hardware pixels into CSS pixels.

This tag has limitations- one being that it alone cannot apply any design changes.
Let's say that on mobile, I would like to change the website structure. 
I want to add some things or make others disappear. Viewport metatags can't do that

#### Media Queries

Allow us to change the design depending on the viewport size. 
They set certain rules about what is displayed depending on the width and height

We can change the size AND the properties of elements on our page
Properties can involve virtually anything (color, images, backgrounds...etc)
For example, your site can be red on desktop and blue on mobile

### Viewport Metatag

As described 2 lessons ago, this converts hardware pixels to CSS pixels which lets us begin our responsive design process. Placed in the HTML head section

The following attributes will now be described in detail. we have multiple attributes separated by commas for content

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

`name= "viewport"` 
Tells metatag to target the viewport- the area on our device that displays the website

`content= "width=device-width"` 
Sets the visible width on our page. 
Is set equal to the devices actual width- whereas before the browser had an inaccurate grasp on size. This was due to the hardware pixels being used

`content= "width=initial-scale=1.0"` 
This defines the zoom level that we have. 1.0 means no zoon is applied

#### MORE OPTIONS

`content= user-scalable=no`
Takes away the user's ability to zoom in or out of your site. Hardly ever a reason to use this. 

`content= user-scaleable=yes`
Enables the user's ability to zoom in or out of the page on mobile. Is a default setting on the viewport metatag, so you don't need to actually include this

`content=maximum-scale=2.0`
Limits how much the user can zoom into your webpage using a custom value
1.0 value makes it so no zoom in is possible

`content=minimum-scale=4.0`
Limits how far the user can zoom out using a custom value
1.0 value makes it so no zoom out is possible

#### Testing in Chrome's Dev Tools

- Hold Shift --> click drag mouse on the phone screen to zoom in or out.
- Refresh the page by exiting and rendering mobile view to avoid a Chrome bug where previews don't implement changes properly

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210110185524665.png" alt="image-20210110185524665" style="zoom: 42%;" />

### Media Queries: Basics

- Start by viewing the desktop version of your website. You can emulate the size of a cellphone by constricting the screen size to be more narrow horizontally
- Select a range for your width. 
  You'll want your website to look good at every point within that range. 
- Begin deciding how your website will have to be changed to look acceptable. 
  Due to a thin screen, you may want certain objects that were once placed beside each other to be stacked on top of one another. Take the below image for example

```css
@media (min-width: 40rem) {
    regular_CSS_selector {
        /*typical CSS declarations /
    }
}
    
/*If the condition in brackets is met, please apply the following code
```

The media query tag is essentially just an if statement that wraps around regular CSS.
`min-width: 40rem`: if the viewport width 40 rem or higher, apply these changes
`max-width: 40rem`: if the viewport width is 40 rem or below, apply these changes

640px is 40rem
350px is 21.875rem

#### Lesson Disclaimer:

- Be aware that not all desired changes are acted upon this lesson- we are just trying to understand the basic concepts of mobile-first design and media queries.
- Don't worry about how we selected our range. You will learn how to make educated selections for that in a later lesson

#### Procedure

1. Decide your width range for mobile screens. (350-640px in this case)
   Start your design considerations for the 640px width viewport

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210110212242865.png" alt="image-20210110212242865" style="zoom:40%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210110212646360.png" alt="image-20210110212646360" style="zoom:50%;" /> ![image-20210110213247300](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210110213247300.png)

2. List your desired changes

a)  The navbar looks terrible on both, especially the 350px screen
b)  Want the image height to increase once we hit 640px
c)  Change the font size of "Get the freedom you deserve", so that it is always equal  	within the 350-640px range. Beyond that, increase the size for large screens
d)  Want the plans to stack on top of each other
e)  Want the footer links to stack as well, but only when the screen gets too thin

3. Begin adjusting your CSS and adding media queries



#### Media Query Demonstration

We will use desired change C to show how media queries work on their most basic level

c)  Change the font size of "Get the freedom you deserve", so that it is always equal  	within the 350-640px range. Beyond that, increase the size for large screens

This is how we implement our mobile-first philosophy
Regular CSS Styling: Tailored to mobile screens
Media Queries: Styling for larger screens

```css
header_selector {
	font-size: 1.6rem;   
} /*The font size for the header is 25.6px unless otheriwse specified*/

@media (min-width: 40rem) {
    header_selector { font-size: 3rem }
} /*After viewport width 640px, the header size increases to 48px*/
```



### Media Queries: Advanced 

#### Multiple Rules/Declarations/Break points

- You can have more than 1 limit statement in brackets
- Are free to include as many rules and as many declarations as you want inside one
- Can use multiple media queries in 1 CSS doc. Great when you have more than 1 break point

//⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆

##### Skipping Media Queries by Accident (Common mistake)

- You must order your media queries sequentially in increasing order. 
- In the below example, we have break points at 40rem and 70rem. You must type them in CSS in that order
- If you type your 70 rem media query before your 40 rem one, CSS will skip the 40rem query entirely

##### General Media Query Tip

To help keep your code structured and easy to read, place all your media queries at the BOTTOM of your CSS doc. That way you can find all media queries with ease, and order them all in one place

//⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆

In the following examples we have 3 ranges. 
0-39 rem: White text, text size is 1rem
40-69 rem: Red text, text size is 3rem
70+ rem: Black text, text size is 5rem

```css
/*FIRST MEDIA QUERY FOR BREAK POINT 1 ⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆*/
@media (min-width: 40rem) { 
    image_selector {
        height: 40vh
    } /* image height increase at the 40rem border*/
    header_selector { 
        font-size: 3rem 
        color: red
    } /*font size increase and color change to red at 40 rem border*/
} 
/*SECOND MEDIA QUERY FOR BREAK POINT 2⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆*/
@media (min-width: 70rem) {
    header_selector { 
        font-size: 5rem;
        color: black;
    } /*font size increases and goes black after the 70rem border
} 
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210111170521998.png" alt="image-20210111170521998" style="zoom:50%;" />

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210111170605023.png" alt="image-20210111170605023" style="zoom:50%;" />

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210111170627337.png" alt="image-20210111170627337" style="zoom:50%;" />



#### Mobile-First vs Desktop-First

When we abide by mobile-first design principles, we use `min-width: #rem`
Regular CSS: Mobile styling
Media Query Code: Desktop/tablet styling

It is possible to design using a desktop-first approach using `max-width: #rem`
Regular CSS: Desktop/tablet styling 
Media Query Code: Mobile styling 

- This isn't recommended due to how much harder it is to make a site look good. 
  When it was originally designed with a lot of space, constricting it down will be more challenging



### Media Queries: Selecting Good Break Points

- We want to target as many devices as possible with our viewport ranges
  Without creating too many media queries of course

You shouldn't define breakpoints based on device classes. Defining breakpoints based on specific devices, products, brand names, or operating systems that are in use today can result in a maintenance nightmare tomorrow. Instead, the content itself should determine how the layout adjusts to its container.

#### Start Small then Work Upwards

To optimize text for readability, stick to around 8-10 words per line
Making non-verbal content look nice depending on width requires a few more steps:

- Design the visual content to fit on a small screen size first, then expand the screen until a breakpoint becomes necessary. 
- This allows you to optimize breakpoints based on content and maintain the least number of breakpoints possible.

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210111183846453.png" alt="image-20210111183846453" style="zoom: 67%;" /> Let's say we design our app for narrow screens

Resize the browser until there is too much white space between the elements, and the forecast doesn't look as good. The decision is somewhat subjective, but you'll know when things get too wide

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210111184032006.png" alt="image-20210111184032006" style="zoom:75%;" /> Too much white space b/t content. 

At this point, the viewport width is at around 600px. Let's apply a breakpoint here and redesign our site for wider devices.

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210111184351627.png" alt="image-20210111184351627" style="zoom:67%;" /> Layout changes significantly

#### Avoid simply hiding content

- Be careful when choosing what content to hide or show depending on screen size. Don't simply hide content just because you can't fit it on the screen. 
- Screen size is not a definitive indication of what a user may want. For example, eliminating the pollen count from the weather forecast could be a serious issue for spring-time allergy sufferers who need the information to determine if they can go outside or not.
- If the info/visual truly adds no value to the user and is only there for aesthetics, then it may be fine to remove it. As long as the rest of the site looks okay without it, and the exclusion causes no issues 

#### Chrome DevTools Trick to View Break Points

Once your queries are all set up, you'll probably want to see how your site looks with them active. You have the option of constricting the screen size manually, but there is a better method. Chrome DevTools has a built-in feature that makes it easy to see how a page looks under different breakpoints.

- Enable mobile view (which auto-activates responsive mode)
- Hit the triple dots on the left --> Show media queries

![image-20210111185731679](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210111185731679.png)

- You can click each rectangle to jump to a new media query which adheres to popular sizes for phones, tablets, and laptops. The name of each appears at the top when you click

Using this website, you can see how closely these archetypes align with popular models today. Feel free to adjust the pixel values a little if needed
https://www.mydevice.io/#compare-devices

### Desktop vs Mobile First

#### Desktop-first Approach

1. Make your CSS/SASS file normally, for a desktop screen
2. Add media queries
   Max-widths in decreasing order

```scss
    @media (max-width: 960px) {
      /*your CSS Rules*/     
    }
    @media (max-width: 768px) {
      /*your CSS Rules*/     
    }
    @media (max-width: 640px) {
      /*your CSS Rules*/     
    }
    @media (max-width: 480px) {
      /*your CSS Rules*/     
    }       
    @media (max-width: 320px) {
      /*your CSS Rules*/ 
    }
```

#### Mobile-first Approach

1. Make your CSS/SASS file normally, for a mobile screen
2. Add media queries
   Min-widths in increasing order

```scss
    @media (min-width: 320px) {
      /*your CSS Rules*/     
    }
    @media (min-width: 480px) {
      /*your CSS Rules*/     
    }
    @media (min-width: 640px) {
      /*your CSS Rules*/     
    }
    @media (min-width: 768px) {
      /*your CSS Rules*/     
    }       
    @media (min-width: 960px) {
      /*your CSS Rules*/ 
    }
```



### Common Operations in Responsive Design 

- At this point, you have all the info on media queries needed to dive in and start. 
  Any changes your website needs have been covered in the course. 
- We are going to address every webpage issue we ran into in the Basics lesson with simple verbal explanations (it's up to you to implement them properly)
- These approaches work on all webpages, so don't worry about how specific we're being to the website we created at the time of writing

//⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆

###### a)  The navbar looks terrible on both, especially the 350px screen

This is usually a pain due to so many browser defaults messing up spacing

> ![image-20210112032012552](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210112032012552.png)
>
> `Text-align: center` will shift the navbar list up to the middle
>
> `text-align: right' produces this though. There's still a large space to the right
> This is not due to any padding or margins either. How cringe

When it refuses to position itself as far as it can to the right, use this:

```css
position: absolute;
right: 15px;
```

No matter how bad you messed up your code, this doesn't care. It removes the navbar from the doc flow
It's eternally fixed in the same place though, so it shouldn't cause any issues

![image-20210112032640205](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210112032640205.png)

//⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆

###### b)  Want the image height to increase once we hit 640px

###### c)  Change the font size of "Get the freedom you deserve", so that it is always equal within the 350-640px range. Beyond that, increase the size for large screens

Change the font size and the image height using vh units inside of a media query

//⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆

###### d)  Want the plans to stack on top of each other

###### e)  Want the footer links to stack as well, but only when the screen gets too thin

Change the display type for each HTML element to block if you want things to stack on top of each other
Other option is to set them to inline-block but make their widths 100vw

//⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆

###### f) I'm transitioning from desktop-first to mobile

- Comment out anything you don't want for mobile, but suspect you may reuse for your desktop version
- Make your code leaner by deleting any code that is no longer needed
  As you remove syntax, you'll notice certain CSS stylings accomplish nothing



### Good Practice in Responsive Design

#### Removing Unnecessary Code

Let's say you're trying to change 2 blocks that are placed sequentially into blocks that are stacked on top of each other (inline-block -> block)

- When you change the CSS display style, be sure to comment out or delete any code that was meant to style the inline block

```css
.testimonial__info {
    text-align: right;
    padding: 0.9rem;
    display: inline-block; 			/*Change to block*/
    vertical-align: middle;			 
    width: 30%;
  }
```

- Block level elements have 100% width
  `width: 30%` and `vertical-align: middle` can go
- Also, you technically don't need to specify `display:block`
  block is the default display setting for HTML elements anyway

```CSS
.testimonial__info {
    text-align: right;
    padding: 0.9rem;
  } /* Nice and lean */
```

#### Considering All Blocks in a Row

When you are changing between horizontal inline-blocks to vertically stacked blocks, be sure to change all elements involved in the initial row to `display:block`

- You may get the desired result by changing just one of them, but it may cause issues later on that are hard to find

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210112223822667.png" alt="image-20210112223822667" style="zoom:50%;" />
>
> Change both of their container elements to `display:block`
> Not just one of them

#### Setting the Desktop Stage

There's no need to make every single change that comes to mind right away

a)  Make a list of desired changes
b)  Copy all your mobile rules that will need to be tweaked for desktop
	Paste them into media queries without editing them yet
c) Make your changes now

- When you copy paste regular/mobile CSS rules into your media queries, nothing actually changes. 
- The desktop version will look as it would if there were no media queries at all
- This way, you just place everything you need to work on in one location 

### Avoiding Blank Space Without Extra Queries. (Margin Auto Trick)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210113000644542.png" alt="image-20210113000644542" style="zoom: 50%;" />	<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210113000743040.png" alt="image-20210113000743040" style="zoom: 50%;" /> Looks fine so far...

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210113000929972.png" alt="image-20210113000929972" style="zoom: 50%;" />

- Sometimes your site looks good on mobile & lowish-width desktop/tablet screens. 
  If you stretch the viewport more, you may notice too much blank space
- Don't be tempted to use a second media query, just use the `margin:auto` trick with a set `max-width` to make the site symmetrical

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210113001047077.png" alt="image-20210113001047077" style="zoom:50%;" />

Here's a video explanation with details on exactly how this works

> < video src="Typora-Vids/MarginAuto.mp4" controls> </video>

#### When to Use Additional Queries

- There are plenty of instances where it's okay to use more than one. 
- When the blocks in this example are stuck to the left or right, their left or right borders don't exist. 
- As the viewport gets wider, we want to move these plan blocks closer to the center in a more symmetrical fashion. We'll be needing those borders to be visible now. 
- A media query with the breakpoint positioned exactly where we want the blocks to detach from the wall will suffice

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210113035803256.png" alt="image-20210113035803256" style="zoom: 33%;" />

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210113035844619.png" alt="image-20210113035844619" style="zoom: 50%;" />



### Setting Max and Min Widths for Blocks

![image-20210111232912767](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210111232912767.png)

![image-20210111232952171](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210111232952171.png)

When you have block level elements placed sequentially, you'll notice that they tend to get much too wide if you stretch the viewport. Use `min-width: #rem` to limit how big they can get

When you constrict the screen too much, things may not look nice either. In that case use `max-width: #rem`



### Logical Operators & Multi-Argument Media Queries

#### Theory

We've been using media queries containing 1 argument up till now. 
But this approach lends itself to certain issues. Take this tablet view for example

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210112040035427.png" alt="image-20210112040035427" style="zoom:50%;" /> Photo takes up a lot of space

By using a simple media query, we assign an image height that activates whenever the viewport width surpasses a certain length. 

- This will be fine for large screens on laptops, but look at the above image of a tablet. Though not unacceptable, the picture takes up a ton of screen space

MULTI-ARGUMENT MEDIA QUERY:

```css
@media(min-width: 40rem) and (min-height: 37.5rem) {
  .image_className { height:50vh; }
}
```

> Increases the image size ONLY if you surpass a certain height AND a certain width
> Must meet both criteria before taking action 

#### Portrait/Landscape, And/Or Logic

We have the option to use the screen orientation as an argument as well
PORTRAIT:	Height > Width
LANDSCAPE:   Width > Height

<img src="https://upload.wikimedia.org/wikipedia/commons/2/24/800x518_smartphone_portrait_vs_landscape_orientation.png" alt="img" style="zoom:33%;" />

AND OPERATOR:

```css
@media(min-width: 40rem) and (orientation: landscape) {
  .image_className { height:50vh; }
}
```

> Increases the image size if the width surpasses 40 rem, AND the device is in landscape mode

OR OPERATOR:

```CSS
@media(min-width: 40rem), (orientation: landscape) {
  .image_className { height:50vh; }
}
```

> Increases the image size if the width surpasses 40 rem, OR the device is in landscape mode



#### Popular Use Cases

Be careful when using the portrait orientation in your arguments. 
If the viewport width surpasses the height, then that condition will not be met
Sometimes it's better to stick with min-width and max-width

In 90% of cases, you'll be using a mobile first approach
Regular CSS will style mobile, while media queries will style to desktops
Browser considers landscape to be any screen size where width is higher than height

```css
@media (min-width: #rem) and (orientation: landscape) { /*desktop code*/ }
```

If you're using a desktop first approach for whatever reason, go with this:

```css
@media (max-width: #rem) and (orientation: portrait) { /*mobile code*/ }
```



### Custom Lesson: Positioning Blocks

When you're having problems moving things around, there might be one little hack you can use.

- Take the item you want to move, and apply `float:right` or `float: left`
- Use left/right top/bottom with viewport units or pixels to specify how far away the block should be from those outer walls
- Apply `position:relative` if the block won't move

```css
    #free {
        position:relative;	/*Enables L/R/T/B without breaking doc flow*/
        float:left;		/*Shoves item to left*/
        left: 26vw;		/*Repositions from the left*/
        max-width: 800px;	/*Sets a max width for responsive design*/
}
```

The float property makes things wrap around the block. So perhaps this works best when you have only one thing occupying the horizontal space on that section of the webpage. Wait and see how this tech works in the future

One thing though! Most people hate using float due tot he fact that its hardcoded and non-dynamic. This native CSS stuff likely won't matter as much when you start using grid and flexbox



### Positioning Footer at the Webpage Bottom

This lesson was much too specific to the webpage we designed in this course. 
Also, the file the instructor gave came completed, giving us no canvas to work on

When the time comes, use this instead: 

[How to keep your footer where it belongs ? (freecodecamp.org)](https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/)



# SECTION 11: Adding & Styling Forms

SUMMARY

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210115212104628.png" alt="image-20210115212104628" style="zoom:67%;" />

- Keep in mind that many form elements have browser default styles that we need to override or get around. 
- Also know that I skipped the checkbox lesson and used a YT video instead due to outdated syntax in the course

Mozilla has a good article telling you which form elements are the easiest and hardest to style: [Styling web forms - Learn web development | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Learn/Forms/Styling_web_forms)

### HTML for Commonly Used Forms

We're going to learn how to style forms- the input fields that visitors enter their information into. Their data is then sent to a server for processing. 

![image-20210113195233704](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210113195233704.png)

The full HTML code for this list of forms is found in your HTML tags document. I'm showing you a small snippet for the Title and FirstName forms here

```html
<form action="index.html" class="signup-form">
<!-- ------------------Drop down menu with options------------------------- -->
	<label for="title">Title</label>
	<select id="title">
    	<option value="mr">Mr.</option>
    	<option value="ms">Ms.</option>
<!-- ------------------Generic text field---------------------------------- -->     
	</select>
	<label for="first-name">First name</label>
	<input type="text" id="first-name">
<!-- ------------------------------------------------------------------------ -->
</form>
```

- One way to style this type of content is to wrap each of these sections in div elements with unique class names. 
- This groups all the elements that have a common purpose into a container

Personally, I like the above method best. However, you can actually style each of these elements individually if you want

> ![image-20210113214958893](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210113214958893.png) 
>
> We set every HTML element to a block level element

Some of these shouldn't be stacked vertically. 
The checkbox really should be beside the line about Terms and Conditions (will fix)

Also, despite each element being block level, the fields themselves did not expand much. Use `width: #%` to make them stretch horizontally

![image-20210113215141280](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210113215141280.png)



### Advanced Attribute Selectors

#### HTML Attributes Review

<img src="http://alolsen.net/blogs/webdesign/wp-content/uploads/2014/08/Screen-Shot-2014-08-12-at-2.08.43-AM.png" alt="An HTML element anatomy" style="zoom: 67%;" />

Most elements have these basic attributes: id, class, style, title
You can target elements with certain attributes in CSS



#### One Word Attribute Selectors

Some attributes don't have an equals sign. They are just implemented through the use of one word. For example: `required` `disabled`

The attribute selectors for these just require you to put that attribute in square brackets

```html
<button type="submit" class="button" disabled>Sign Up</button>
```

```css
[disabled] { /*stylin'*/ }
```



#### Advanced Attribute Selectors

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210113223445794.png" alt="image-20210113223445794"  />

If you don't understand one of these categories, we have explanations for all

###### ELEMENT WITH ATTRIBUTE

Selects any element with the attribute `type`

###### ELEMENT WITH SPECIFIC ATTRIBUTE VALUE

Can restrict your search to target attributes whose `type= "email"`

###### ELEMENT WITH SPECIFIC ATTRIBUTE VALUE IN LIST

- Sometimes you have 2 or more attributes in the same category. 
- Maybe half a paragraph has a lang attribute of US English while the other half is in British English. 
- You can still target that paragraph with `lang~="en-US"` so long as US English is on that list

###### ELEMENT WITH (SPECIFIC ATTRIBUTE VALUE) or (VALUE-*something_else)

- So long as the attribute begins with `en-` for example, the attribute will be selected. Works with en-US or en-GB or en-anything so long as its valid
- This applies to more than just lang of course- but this is an easy example
- This is sort of like a prefix, but involves a dash

###### ELEMENT WITH SPECIFIC ATTRIBUTE VALUE PREFIX

- Targets elements whose href attributes start with `#` are targeted

###### ELEMENT WITH SPECIFIC ATTRIBUTE VALUE SUFFIX

- Targets elements whose href attributes end in `.de`

###### ELEMENT WITH AT LEAST 1 ATTRIBUTE VALUE

- Targets elements whose attributes are equal to anything that involves `cdn` in this case (could be at the start, end, middle...etc)
- This version of attribute selector is case sensitive. Meaning that it won't se;ect an attribute set equal to capitalized`CDN`

###### CHECK VALUES CASE-INSENSITIVELY

- Same as the above, but is this time set to be case-insensitive (less picky)
-  `[src*="cdn" i]` will select attributes that include `cdn` AND `CDN`



### Attribute Selectors & Excluding Elements fr/ being Targeted (ace)

#### Using Regular Attribute Selectors

Treat these like any regular selector you've been using this whole time
Use them alone, with combinators... whatever!

```html
<form action="index.html" class="signup-form">          
	<input type="checkbox" id="agree-terms">
    <label for="agree-terms">Agree to	
    	<a href="#">Terms &amp; Conditions</a>
    </label>
</form> <!-- TARGET THE INPUT TAG AND THE LABEL TAG
```

```CSS
.signup-form input[id="agree-terms"],
.signup-form label[for="agree-terms"] {
/*stylin*/
}
```

You'll be needing these to target elements without the typical classes and ID's.
Now you can select any element without relying on overly complex combinators

#### (not: + Attribute) Selector Combo

There are some instances where you want to use a certain selector, but 1 element it catches in its selection is undesired. In cases like that, use the not: pseudo-selector in conjunction with an attribute selector

EX: 

```html
<form action="index.html" class="signup-form">
            <label for="title">Title</label>
            <select id="title">
                <option value="mr">Mr.</option>
                <option value="ms">Ms.</option>
            </select>
            <label for="first-name">First name</label>
            <input type="checkbox" id="agree-terms">
            <label for="agree-terms">Agree to
                <a href="#">Terms &amp; Conditions</a>
            </label>
</form>
```

We have label, select, and input elements here. 
Target every label with red text, except for the very last one...

```css
.signup-form label:not([for="agree-terms"]) { color:red }
```

Use any kind of attribute selector you want. 
This was just a simple demonstration for a `for` attribute

### Positioning and Setting Width of Form Fields

- Make sure border-box is being applied and make the fields inline blocks to create a vertical stack
- Add some padding to keep the content far enough away from the viewport edges
- For mobile set the text field width to 100%
- For desktop, use a query to set the width at a flat number of rem 
  Or let it expand to `width: 80%` if you want it real wide for whatever reason

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210114040315251.png" alt="image-20210114040315251" style="zoom:67%;" /><img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210114040337464.png" alt="image-20210114040337464" style="zoom: 50%;" />



### Input Highlights

To make the text field borders look lighter than the default, use this:

```css
.signup-form input,
.signup-form select {
  border: 1px solid #ccc;
  padding: 0.2rem 0.5rem;
}
```

![image-20210114041011346](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210114041011346.png)

The browser defaults make the drop down list look fine without any additional styling
You can style these pre-built assets if you choose to though. 
The last lecture has some links that lead to resources for this

#### Outline Property

When you click inside a text field, you may notice the border bolds or glows a certain color. To see why, go in dev tools, click on `:hov` then hit the focus checkbox. 

![image-20210114163908084](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210114163908084.png)

The outline is added and takes effect after the border

It has no effect on the box size, and does not affect the shadow. 
It's a great and non-intrusive way to convey that your text field has been chosen.

#### Styling Input Highlights

1. Target every element you want to have a unique glow when focused on. Give them all the same border and padding 
2. Target each of these again with the focus pseudo element
   Remove the default outline, set a background color, set a border color

```css
/*========STEP 1 ==============*/
.signup-form input,
.signup-form select {
  border: 1px solid #ccc;
  padding: 0.2rem 0.5rem;
}
/*========STEP 2 ==============*/
.signup-form input:focus,
.signup-form select:focus {
outline: none;    /*Removes the browser default outline*/
background: #d8f3df; /*Adds mint background glow*/
border-color: #2ddf5c;  /*Adds green border glow*/
} 
/*These combinators are lesson specific, but the CSS styling applies to any case*/
```

![image-20210114171104970](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210114171104970.png) ![image-20210114171230175](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210114171230175.png)

If you don't remove the browser default outline, it'll remain present with all your new changes. It was originally dark black, so look what happens when I comment out `outline:none` on the right

//⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆

Peek at Our HTML Code:

> ![image-20210114170825388](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210114170825388.png)
>
> This code was applied to the HTML code given at the start of this section
> Every text field and dropdown menu is created by an input or select element
> This is why we used those combinators in our code snippet



### Square Checkboxes with Custom Check Images

![image-20210115181212799](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210115181212799.png)

```html
<div class="container"> 
  <form>
    <p>
      <input type="checkbox" id="usa" name="visits">
      <label for="usa">USA</label>   
    </p>
    <p>
      <input type="checkbox" id="japan" name="visits">
      <label for="japan">Japan</label>   
    </p>
    <p>
      <input type="checkbox" id="india" name="visits">
      <label for="india">India</label>   
    </p>
  </form>
</div>
```

Use this snippet of HTML code to make a list of options with checkboxes. 

- The checkboxes are made using input tags. 
  The words that tell users what the checkbox is for are made using label tags. 
- For this strategy, the labels must come after the inputs
  Every checkbox in the same group should have the same name attribute

CSS Styling: https://codepen.io/NFuego24-7/pen/dypwROP?editors=0110
Source: [Custom Checkbox Pure CSS Tutorial - YouTube](https://www.youtube.com/watch?v=NfW_5Y1RZQ4)

FYI: I skipped the animation segment in my Codepen. Looks better without it imo*

This checkbox type allows for some basic customization, but there is a superior way to build them which is shown in the next lesson. That requires a basic understanding of flexbox

//⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆

The checkbox is a special type of input which has special browser default styles applied to it. You'll have to disable them if you want to style these elements properly- otherwise the changes you try to enact won't yield results

![image-20210114204156818](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210114204156818.png)

The main property of interest for checkboxes is the `appearance: checkbox`
Drop down menus also have a unique property appearance: `menulist`

In the Youtube video described above, we used `opacity:0` to hide the normal checkbox. We drew on top of it to have more freedom in terms of styling



### Checkboxes that Scale with Font Size (Return22)

This type of checkbox has hover effects, shadows, scales with font size, and are ARIA friendly. Requires an understanding of flexbox*

https://codepen.io/NFuego24-7/pen/ExgGXMa?editors=0100
[Custom Checkbox Tutorial - YouTube](https://www.youtube.com/watch?v=YyLzwR-iXtI)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210115194553341.png" alt="image-20210115194553341" style="zoom:50%;" />

/

### Providing Validation Feedback Manually

#### How Validation Works on the Full Stack

Validation means that in a real form, we require certain things; that no field is empty for example, or that the email field has a valid email address.

Implementing validation is something that happens server-side. Entering data creates an HTTP request, and if the info is invalid, the user gets sent the info page once again. 

On the front-end, we still need to tell the users certain things. We'll have to return a page with visual cues making it clear what part of their information is invalid. You may have error messages in red text, or a red border highlighting the unsatisfied field 

- In this lecture, we will learn how to hardcode certain styles to elements that convey dissatisfaction. 
- In reality, we would make these styles conditional so that they only appear when a user enters the wrong info. That is beyond the scope of a pure-CSS course

#### Manual Procedure

1. Add the class name "invalid" to the input/select elements in HTML
   The name can be anything, but be sure to convey what you're doing

```html
<input type="email" id="email" class="invalid">
```

On real projects, this class would likely be added with JS

2. Add certain styles to this class
   Apply this class to any field you want to display as invalid

```css
.signup-form input.invalid,
.signup-form select.invalid {
   border-color:red;
   background: #faacac;
}
```

Add this after all other input/select styles since this would be used conditionally
If you still have problems, `!important` may be an alright solution for conditionals

![image-20210115203141517](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210115203141517.png)

3. Add `required` inside every HTML element that is considered mandatory on the form
   These are typically the inputs and selects, not labels

```HTML
<input type="text" id="first-name" required>
```

![image-20210115204210014](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210115204210014.png)

We can add the invalid class to make this glow red if not filled in in JS



#### Elegant New-Age Procedure (return3)

This method involves using a special pseudo selector; the invalid pseudo selector

- The browser automatically checks to see if an input is valid when it loads up the page
- This is technically not a good thing since users obviously can't fill out forms before the page is done parsing, meaning they'll be met with a page glowing red
- You'll have to find special combinations that make this effect take place only after they've had a chance to do something

This would all be done in JavaScript, so I won't go into it during this course yet. Will return after the JS course



### Styling a Sign Up Button

It's not uncommon for a button to only appear once every form field is valid

1. Add the disabled attribute to your button in HTML

```HTML
<button type="submit" class="button" disabled>Sign Up</button>
```

This must be removed via JS during runtime as soon as all the form fields are found to be valid. In our example here, we're just gonna leave it hardcoded

2. Style your button to look non clickable

Place this below your other button declarations. It's conditional, so let it parse last and have higher priority. If you still have problems, `!important` may be an alright solution for conditionals

```css
.button[disabled] {
  cursor: not-allowed;
  border: gray;
  background:grey;
  color:white;
}
```

![image-20210115210749859](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210115210749859.png) The cursor hover picture is a "not allowed" sign. Couldn't screencap

The selector targets elements with the "button" class name that have the disabled attribute



# SECTION 12: Text and Fonts

### Browser Font Settings

#### Generic Families and Font Families

Generic families are broad classes of fonts that look similar

Inside generic families, you'll have multiple font families that share the same core attributes. 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210115232259042.png" alt="image-20210115232259042" style="zoom: 80%;" />

Enter Chrome settings and find "Customize fonts" under the appearance tab

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210115232829335.png" alt="image-20210115232829335" style="zoom: 80%;" />

- The default font applied to all webpages is a font-family, not a generic one
- You can set a specific font family to each of the generic families listed (even if they don't match well)
- For example, under the Serif generic family, I am allowed to assign Verdana (which belongs in the sans-serif family)

#### What will be Displayed?

| WHAT'S SPECIFIED? | WHAT WILL DISPLAY?                                           |
| ----------------- | ------------------------------------------------------------ |
| Nothing           | The browser default will be the font family assigned to the "Standard Font" label |
| Generic family    | The font family assigned to that generic family in the browser settings |
| Font family       | The exact font specified in CSS. Can be taken from user's computer, a third party site, or from the webpage's hosting server |

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210115235022628.png" alt="image-20210115235022628" style="zoom:67%;" />



#### Using Browser Font Defaults (Don't)

- You should always specify what font is going to be used for your content
  If you don't the user settings will determine what elements on your site look like
- This causes more issues than just having the words on your site look off-putting
  If the navbar width is defined at a certain value we arrived at while using Times New Roman, what happens if a person has Arial as their default? 
- The navbar risks taking up more space than anticipated by the coder, and skipping to a new line

![image-20210116000622761](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116000622761.png)



### Understanding the font-family Syntax

```css
font-family: "Montserrat", "Verdana", sans-serif;
```

"Montserrat" and "Verdana": The font family. 

- The first letter must be capitalized and it's best to put their names in brackets.
- In this case it's not needed, but with multi word font family names the brackets become mandatory. Ex.`"Times New Roman"`

Sans-serif: A generic family

#### Why the list of Options?

- The browser will search for "Montserrat"
- If it can't find that font, it'll look for "Verdana" instead
- If it can't even find that, it will use the browser default for Sans-serif (user specified if they enter their settings)



### Working with Locally Saved Fonts

- As you know, Google has several fonts supported in its Chrome Browser- which is good. Unfortunately, we can't control what browsers our visitors are going to be using- which is bad. 
- Some LOSER might end up using a whack option like IE6
  We need measures set up so wild cards like them have a good web experience too

```css
font-family: "Montserrat", sans-serif;
```

```html
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
```

If we use the first code snippet without importing the Montserrat font (snippet 2), we are betting on 1 of 2 things:
a) The user has the font saved on his machine
b) The user's browser knows this font (Check here: https://www.cssfontstack.com/)

To ensure everyone wins, pick a font with a really high desktop-installed percentage on CSSFrontStack, or use a web font



### Importing Google Fonts

#### Link Tags Import Method (HTML)

When using non standard fonts, don't rely on the user having it already. 
Use this resource bank to obtain the following: https://fonts.google.com/

1. Use an import < link > within the HTML head to bring a new font in

   ```HTML
   <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel="stylesheet">
   ```

2. Add the CSS rule to your CSS page

   ```css
   h1 { font-family: 'Shadows Into Light', cursive;
        color: black; }
   ```

![image-20201211144331729](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201211144331729.png)![image-20201211144346153](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201211144346153.png)



#### @import Method (CSS)

The main drawback of web fonts is that you have to apply it to each individual HTML doc when you use the link tags method. We don't have a shared.html file to maintain certain elements (not officially anyway)

One fix is to import a google font to the shared.css file instead (at the top)
Every HTML doc is linked to shared.css for basic styling-at least in this course

![image-20210116014850688](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116014850688.png) Use the @import option provided by Google Fonts 



#### Replacing the HTML Import Method with the CSS Method

You should delete any link tags you may have used before to import fonts if you choose to use this superior method after starting

If you can't find the exact font family on the site, just type the font name on the ink tag after the `family=` on any import link. They're all the same before that point

> ![image-20210116015654330](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116015654330.png)
>
> Copy paste the highlighted field after any random import link's ~~family=



#### Multiple Font Imports

You can have multiple fonts chosen at once on this site. See them all by clicking on the following symbol:

![image-20210116005946579](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116005946579.png) <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116010213350.png" alt="image-20210116010213350" style="zoom: 67%;" />

Once you have every font you want, you can use a single link element to bring them all in at once. 

Not recommended to use this trick with different font families. 
It's nice to see what fonts are being imported into the CSS file in a clear manner

![image-20210116014658011](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116014658011.png)

This trick is turbo-useful when importing different font weights though

### Font Faces and "Font Style"

#### Selecting Specific Fonts

When navigating the long list of Google Fonts, click the categories button to narrow down your search to specific generic families

![image-20210116004813985](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116004813985.png)

When you left click a font you like, you'll notice they offer different styles for it. These are called FONT FACES

> Font Face Anatomy (LIGHT 300 ITALIC)
> Light 300: font weight
> Italic: Font Style

> ![image-20210116005339538](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116005339538.png)
>
> Generic family --> Font Family --> Font faces



#### Importing Multiple Font Faces

This syntax here only imports the standard 400 weight version of Roboto

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
```

- If we try to use the `font-weight: 900` declaration in CSS, it won't work properly. We have to import both the standard Roboto and the font weight 900 Roboto
- This problem is also apparent when trying to use italic faces. 
  If i want to use an italics Roboto with the aforementioned 900 weight... I'd use these 2 declarations below

```css
font-weight: 900;
font-style: italics;
```

To make using them possible, choose multiple selections in Google Fonts (all in the same font-family to keep things organized) then transport everything with a single import link

- In the case I just described, I'd need the standard Roboto, the 900 weight Roboto, and the 900 weight italics Roboto (3 diff faces in the same family)

```CSS
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,700;1,700&display=swap');
```

If you forget to import the italics version for example, then use the `font-style: italics;` declaration anyway, the browser will try to do its best to italicize it. Won't look exactly as intended though, so don't deliberately do this



### Importing our Own Custom Fonts (Pt 1)

Since I don't know how to make my own custom fonts, download a font off Google Fonts and just pretend that one of the files is your own. It'll come with a few when you download your pick (italics version, bold version, whatever)

#### Procedure

BEFORE WE BEGIN: Remember to keep every legitimate file name and custom font name expressed in lower case letters. Otherwise Internet Explorer may throw a hissy fit

1. When you design your own custom font, you save it as a TTF file. 
2. Place it in your project folder, you'll be referencing the file URL 

You can actually drag and drop files directly into your VS Code window. 
There's no need to hunt down the desired location on the regular file browser

3. Import your new font family with this syntax
   Name it whatever you like

```css
@font-face{
    font-family: "cifico"; 	/*A custom name that you get to choose*/
    src: url("pacifico-reg.ttf"); /*the actual ttf file name*/
}
```

![image-20210116031305786](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116031305786.png)


4. Use your newly named custom font in a declaration- as you would normally

```css
font-family: "cifico", sans-serif;
```

WAIT! Look back at Step 2 of this process 
How would the user have access to a font you stored on your local computer?
It would be stored on the business server

/*⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆  IF YOU NEED FONT VARIATIONS  ⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆*/

5. Import more TTF files if you need different font faces

If you try to apply a font weight or italics to your custom font, it won't work unless you upload these new face variations as well. Just repeat steps 2-3 again, BUT with a twist. 

- Remember to include the font-weight when you are declaring your new face, or else you'll just override the original one you brought in

```css
@font-face{
    font-family: "cifico";
    src: url("pacifico-reg.ttf");
} /*SAME CODE AS IN STEP 3*/

@font-face{
    font-family: "cifico";
    src: url("pacifico-bold.ttf");	/*the actual ttf file name for bold version*/
    font-weight: 700; /*DO NOT FORGET*/
} 
```

Now you can call upon this custom "cifico" font regularly in CSS

```CSS
font-family: cifico;	/*Summons the regular cifico*/
```

```css
font-family: cifico;  
font-weight: 700; /*Summons the bold version of cifico*/
```

6. Define the file type during your import rule (explained in next lesson briefly)

### Understanding Font Formats (Pt 2)

When importing your custom font TTF files, feel free to add `format(truetype")` to src
Though not mandatory, it makes the code more complete

```css
@font-face{
    font-family: "cifico";
    src: url("pacifico-reg.ttf") format("truetype");
} 

@font-face{
    font-family: "cifico";
    src: url("pacifico-bold.ttf") format("truetype");	
    font-weight: 700; 
} 
```

There are more font filetypes as well; Woff, Woff2...etc
Check out their browser support on https://caniuse.com/

![image-20210116153307688](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116153307688.png)

A safe bet is to import your custom font expressed in all 3 of the most popular file types: ttf, woff, and woff2

```css
@font-face{
    font-family: "cifico";
    src: url("pacifico-reg.ttf") format("truetype"),
    	 url("pacifico-reg.woff") format("woff"),
    	 url("pacifico-reg.woff2") format("woff2");
} 
```

You'll have to make sure you drag the woff and woff2 files into your VS code and go through the same procedure described in the previous lesson

### Font Properties & Line Height 

You're already familiar with some of these font properties: 
`font-size`, `font-weight`, `font-family`

#### font-variant:

`font-variant: small-caps;`

- This takes all letters and capitalizes them. 
- If a letter was already capital to begin with, it just makes it a bit taller than the lowercase letters have become. 
- The general size of the text is the exact same, so there won't be any spacing errors by applying this

![image-20210116155249969](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116155249969.png) ![image-20210116155332695](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116155332695.png)

#### font-stretch:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116154613132.png" alt="image-20210116154613132" style="zoom: 40%;" /> `font-stretch:` property options

Each stretching level is part of a separate font face- sometimes. It depends which font you're using it on.

In addition to that, the browser support for each of these options isn't always perfect. Just avoid using this for now

#### letter-spacing:

When setting a value, use pixels or rem- doesn't need to be super precise

`letter-spacing: 10px;` : increases the space between letters to 10px

![image-20210116155249969](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116155249969.png) ![image-20210116155946637](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116155946637.png)

#### white-space:

This refers to the gap between different words 

`white-space: normal;` Sets the whitespace back to how it is by default

`white-space: nowrap;` 
Makes it so text doesn't skip to a new line when there isn't enough space. It will just extend offscreen. Applies to both the viewport and other elements as well

![image-20210116160439501](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116160439501.png)

![image-20210116160719809](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116160719809.png)

`white-space: pre-line`: Tires to fill the entirety of every line with text. Must sacrifice others to have a lot of white space to make it happen

![image-20210116163618586](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116163618586.png)

`white-space: pre`

`white-space: pre-wrap`

I don't understand these 2 final and don't particularly care either. lol

#### Line Height

Line Height lets us set the distance between different lines of text. You can use %, rem, em, px, and numbers to express the change

`line-height: normal` the line height to its default size

Be aware that this will change the size of the content box, and that different fonts will have different default line heights. So to revert things back to normal, use `line-height:normal;` instead of a hardcoded value

> ![image-20210116165525352](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116165525352.png)
>
> [line-height - CSS: Cascading Style Sheets | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)

- Try not to use the percentages option. 
- It leads to some bugs due to inheritance and the % value meaning something else later down the line

BEST CHOICE: FLAT NUMBERS

- The line-height is calculated based off the font-size of the element. 
- If that font-size changes, then the line height will scale along with it



### Text Decoration & Text Shadow

#### Adding Lines to text

`text-decoration: underline` ![image-20210116173900950](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116173900950.png)	

`text-decoration:overline` ![image-20210116173928333](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116173928333.png)

`text-decoration: line-through` ![image-20210116174103272](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116174103272.png)	

We can also add special attributes to the lines we apply
We can specify waviness, color, dotted instead of fully opaque...etc

`text-decoration: line-through blue` ![image-20210116174558153](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116174558153.png)

`text-decoration: underline red dotted;` ![image-20210116174727466](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116174727466.png)

`text-decoration: underline wavy;` ![image-20210116174803462](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116174803462.png)

To remove text decorations, use `text-decoration:none`

#### Text Shadow

Good subtle shadow below:

```css
text-shadow: 2px 2px 7px rgb(185, 180, 180);
```

first 2px: Offset to Y axis
second 2px: Offset to X axis
7px: Blur
rgb: Shadow color

Takes a bit of tweaking to get this looking just right

> ![image-20210116175814705](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116175814705.png)
>
> This used a darker shade of gray that our code snippet



### Font Shorthand

The order in which the font properties are specified matters when using shorthand

ORDER: Everything in brackets is optional

```css
font: italic small-caps 700 1.2rem/2 "Roboto", sans-serif`
```

font: (style)  (variant)  (weight)  size/(line-height)  font-family  generic-family	
The 3 must-haves are size, font-family, and generic family. 
Start with these and add on whatever else you want to specify



#### Alt Option: Default System Fonts

If you want to match the text somewhere with the default fonts applied to menus, message boxes, or status bars...you can use a simple shorthand declaration for that

`font: menu;`	`font:status-bar`



### Loading Performance & font-display

- Fonts can become quite big and actually affect performance. 
- We influence loading behaviour when using the `font-display:` property
  Keep in mind this property only applies to custom fonts

//⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆

REQUIRED DEFINITIONS

Imagine the following situation: our user is visiting our website, so the content has to load. The fonts are not displayed immediately

Block-period: 
The space where our text would be displayed is RESERVED with an invisible font
The content structure would be intact

Swap-period:
When the browser switches from the invisible font to the desired font

Fallback: 
The generic family we specify in case the browser is unable to load the font-family we actually want. Do not confuse this with the invisible "fallback" font that is just used to reserve space

//⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆

![image-20210116185837082](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210116185837082.png)

SWAP:

- Fallback font is visible right away, and the browser never loads the invisible one
- The browser will continuously try to load the custom-font
  If it cannot, the fallback font will just stay there

BLOCK:

- Short block period: The invisible font is loaded quickly
- Fallback font is then loaded
  Browser tries to load the custom-font but will keep the fallback if it can't
  (end behaviour is the same as swap)

FALLBACK:

- Since the block period is so short, the invisible text is only visible just barely
- Fallback font gets loaded
- The swap-period being short makes it so the browser has limited time to load up the desired custom font

OPTIONAL:

- Short block period, the invisible structure is just barely visible
- The browser chooses between the fallback and custom-font
  If your internet connection sucks, the fallback is chosen
  This cannot be reversed

AUTO:

- The auto value is set when the dev doesn't specify a value for `font-display`

- The browser will select a value on its own (usually block)

#### Implementation

This is pretty difficult to demonstrate visually since the fonts we're using typically load up really fast. We will show you how to implement these different loading styles in our code though

- You add these font-loading styles in the rules that import your custom fonts in the first place

```css
@font-face{
    font-family: "cifico";
    src: url("pacifico-reg.ttf") format("truetype");
    font-display: swap; /*or whatever*/
} 
```

The browser support for this isn't the best. IE and edge don't even support this at all (making using custom fonts and optimizing performance very tough)

### Line Breaks (fast)

- Sometimes the default way text wraps just looks bad
- Sure would be cool if we line break our first sentence sooner

![image-20210813014500354](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210813014500354.png)

#### How to Break a Line

> [Source Tutorial](https://www.educative.io/edpresso/how-to-add-a-line-break-using-css)
> [Demonstration CodePen](https://codepen.io/jason2b3/pen/WNjmXqV)

1. Divide your sentence into 2 or more pieces using inline span elements (using React HTML here)
   Though if you split sentences into more than 2 pieces, things get confusing

```html
	<section className={styles.container}>
      <h2>Delicious Food, Delivered to You</h2>
      <p>
        <span id={styles.s1}>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a{" "}
        </span>
        <span id={styles.s2}>delicious lunch or dinner at home.</span>
      </p>
      <p>
        <span id={styles.s3}>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by{" "}
        </span>
        <span id={styles.s4}>experienced chefs!</span>
      </p>
    </section>
```

2. Apply the following code to implement or remove a line break
   Mixins aren't required, but this is likely something you'll be reusing anyway

Enable breakpoint:

```CSS
#s1::after,#s3::after{
  content: "\a";
  white-space: pre;
}
OR
#s2::before,#s4::before{
  content: "\a";
  white-space: pre;
}
```

Disable Breakpoint:

```css
#s1::after,#s3::after{
  content: "";
  white-space: pre;
} 
OR
#s2::before,#s4::before{
  content: "\a";
  white-space: pre;
}
```

BONUS: 
Though not strictly required, mixins help you add this functionality multiple times over in SCSS
You skip retyping the same code over and over again, plus this is something you'll be doing often

```scss
@mixin addLinebreak {
  content: "\a";
  white-space: pre;
}
@mixin removeLinebreak {
  content: "";
  white-space: pre;
}
```



# SECTION 17: Writing Future-Proof Code

### Vendor Prefixes

Browsers don't always implement the same features as all the others. 

- When they do, some browsers will only implement something partially, or even in slightly different ways. 
- Once a feature becomes "recommended", every browser aside fr/ IE will typically implement it fully and in a congruent fashion

Vendor prefixes help solve this problem. They allow you to use features that aren't fully supported yet- in a way that won't break when the feature gets implemented later on

- This especially crucial for browsers that get experimental with how they introduce new features. 
- Ex. If an early adopter used flexbox in a way where `justify-content` worked totally different than how it does now, then once the browser adopted flexbox normally, the entire website would look strange

#### Example: Implement Flexbox on Old Browsers

```css
.container{
    display: -webkit-box;	/*works on older safari versions*/
    display:-webkit-flex;	/*works on newer safari versions*/
    display:-ms-flexbox		/*works on IE and edge*/
    display: flex;
}
```

These CSS rules are only understood on the browsers they were made for. `display: -webkit-box;` will be understood by old safari browsers, but not by Chrome or IE.

That's fine however, since these other browsers either already have `display:flex` implemented, or we included them in our list of vendor prefixes

#### Project Example

In this course project, we had `display:flex` applied in one of our CSS rules. 

- All we have to do to make this old-browser-proof is to add our legacy lines before `display:flex`. 
- This is done so that the new statement will override the old one if the browser does fully support it

![image-20210212080328842](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210212080328842.png)

### Auto-Prefixing

Finding prefixes for every single modern feature you rely on takes forever. 
Instead, use an automation tool to take your code and add in prefixes when required. All you need to know is your list of browsers you want to support

#### Creating Legacy-Proof Code

Auto-prefixer CSS Online: https://autoprefixer.github.io/

Paste your code in the field on the left. It'll spit out the same code, but with vendor prefixes added on. You can replace your code with this, or paste it into a new document to test out the difference on older browsers

![image-20210212082700519](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210212082700519.png)

![image-20210212082716027](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210212082716027.png)

#### Automating Auto-Prefixing

There are also ways to auto-prefix your code automatically using your setup alone. Requires the use of some unfamiliar technologies so, I'll hold off for now.

Read these if curious: https://www.xspdf.com/resolution/54173376.html
					   https://css-tricks.com/how-to-deal-with-vendor-prefixes/

### Support Queries

There are some browsers that simply don't support certain new features at all- not even the vendor prefixes. 

Structure of Support Queries:

```scss
@supports (display:grid) {
    .container {
        display:grid;
    }   
}
```

- The condition is the property-value pair you suspect will not be supported. 
- If the browser does not support your pair, it won't execute the css rule in the support query curly braces
- If it does support the pair, then it will 

#### How to Implement

![image-20210212084542680](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210212084542680.png)

In your projects, you will often use new features that may or may not be supported in old browsers. 

- Take your regular CSS code and plop it into a support query. This tells the browser to only run this if your browser supports your feature. 

- Take out any code not related to these new features and make a backup CSS rule. Next, add in styling that makes the site look good without these new features, and place it before your support query. 

This way, your site will look decent enough on older browsers if the features are not supported. If they are, then your feature will make your site look as good as you intended

#### Example:

Watch starting fr/ 2:00 mark: [CSS - The Complete Guide 2021 (incl. Flexbox, Grid & Sass) | Udemy](https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/learn/lecture/9677214#questions)

START: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210212092743089.png" alt="image-20210212092743089" style="zoom:50%;" />

We highlighted our original CSS in blue. All these stylings after `display:grid` are dependent on the grid actually working

BACKUP CSS RULE: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210212093053928.png" alt="image-20210212093053928" style="zoom:50%;" />

SUPPORT QUERY: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210212093223190.png" alt="image-20210212093223190" style="zoom:50%;" />

If the grid works, we won't need any padding on top to make the site look good. However if we don't use it, then we will. 



### Polyfills

These are JS packages which enable certain CSS features in browsers that would not support them otherwise

|                 | PROS                             | CONS                                                         |
| --------------- | -------------------------------- | ------------------------------------------------------------ |
| Vendor Prefixes | Adds features to old browsers    | Browsers must support the prefixes themselves                |
| Support Queries | Let's you use any new feature    | Need to create fallbacks for each use of a feature (design website content 2X. Ugh) |
| Polyfills       | Adds in features to old browsers | Not every CSS feature has a polyfill<br />Lowers site performance |

- Not every  CSS feature has a polyfill made for it. Grid is one of the major cases, since replicating a grid format is not something that can be replicated easily
- Polyfills affect performance because they are made with JS, meaning the user must load in an entire extra document before it can be sued

One example of a simple polyfill is the one for REMs. Some older browsers don't support them, but the conversion is very simple. The JS doc for that polyfill will barely make a difference in performance



### Cross Browser Inconsistencies

Browsers will often use different default stylings for certain things like headers or default font-families

- What looks certain way in Chrome may have a slightly different appearance in Firefox. 
- Though these changes won't always be site breaking, eliminating these differences is probably a good idea

#### Your 2 Solutions

1. Reset any relevant defaults manually
   Requires knowledge of multiple browser defaults
2. Import a package like normalize.css which resets all defaults for you
   Lowers website performance (you may not even need 90% of the defaults it resets)

normalize.css : https://necolas.github.io/normalize.css/

An example of a manual default reset is the following:

```css
* { box-sizing: border-box }
```

Use a star selector for all your manual resets, unless you enjoy repeating yourself





### Vanilla CSS & CSS Frameworks

CSS frameworks are just sets pre-packaged classes. The 2 most popular in circulation right now are Bootstrap and Tailwind. 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210212110847969.png" alt="image-20210212110847969" style="zoom: 50%;" />

- When you apply a pre-packaged class to an element, it will look a certain way- the way it was pre-programmed to look. 
- This saves you a good amount of time, at the cost of customization. 
  You can customize your element, but you'll have to fight bootstrap to do so
- Frameworks like Tailwind let you customize more, but they do less of the work for you in exchange 

Check out pre-packaged assets: https://getbootstrap.com/docs/5.0/components/navbar/

#### Which to Pick?

Bootstrap will boost your speed the most, it's more popular, plus you can take some of their premade assets and use them in your own from-scratch projects without using Bootstrap at all

Bad Code: 
When your syntax won't work on certain browsers due to a lack of support

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210212112149888.png" alt="image-20210212112149888" style="zoom: 50%;" />

No or Little Control: 
In Bootstrap, you can override certain styles using specificity and cascading properties, but you may risk breaking other aspects of your site

Follow Best Practices:
Is labelled as a plus in the above diagram because their code is already made to be legacy-proof

With Tailwind however, you still do a fair bit of coding on your own. 
You have to watch out and follow best practices there as well. 

# CSS Layouts: From Floats to Flexbox and Grid (LL Course)

We finished a LinkedIn learning course that reinforces our knowledge about how layouts work using inline-blocks, floats, flexbox, and grid

# PHASE 0: Background Info

This is a LinkedIn Learning course taught by Christina Truong. It covers the basics of floats, Flexbox, and Grid in an abstract fashion using simple visual examples. These are the 3 major tools used to create page layouts

The point of this is to learn the core concepts of these 3 topics in a vacuum. The examples there are fairly involved since they're implemented on a pre-built project with a ton of extra code 

LINGO: 
CCB- Container's content box

### HTML/CSS Layouts in the Past

#### Layouts in HTML: A History

Back in the old days, people used HTML tables to create their layouts. 

- This required the use of several attributes in order to merge certain cells or make them extend to where you wanted them to. 
- It was an accessibility nightmare, and very code excessive. 
- As CSS evolved and became accepted as the superior way to divide up your webpage, the attributes that HTML used to create its layouts stopped being supported

Great Resource for HTML Tables: https://css-tricks.com/complete-guide-table-element/

#### Layouts in CSS: Recent History

CSS replaced HTML as the default choice for creating page layouts- but it's not like CSS Flexbox or Grid was what killed HTML's role right away

0. BLOCKS AND INLINE BLOCKS: An alternative to floats to make webpage layouts

1. FLOATS: the first new tool to replace table-based layout
2. FLEXBOX: Created flexible new ways to align content in 1D (as a row or column, but not both)
3. CSS GRID: The most modern fully-realized layout maker. Allows the creation of complex layouts with both columns and rows at the same time
4. MULTI-COLUMN: Still being developed**     

When working on your work or freelance projects...

- Grid or Flexbox will be used to create your page layouts
- Vanilla CSS positioning will be used to move things around/inside the smaller sections of that page layout

### Content Categories and Good HTML Structure

These terms are used to refer to HTML elements with similar characteristics.
PHRASING CONTENT: `<span>` `<input>` `<site>`
EMBEDDED CONTENT: `<audio>` `<video>` `<canvas>`
INTERACTIVE CONTENT: `<textarea>` `<select>` `<a>`

The whole point of CSS is to take content from HTML and style it in an appealing manner. By default, the normal flow of the document has a lot of block level elements taking up the maximum width

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117030948612.png" alt="image-20210117030948612" style="zoom: 50%;" />

- Due to the limited space on mobile screens, this is roughly similar to how we'll want the site to look on cellphones anyway. 
- It's important to order your HTML elements in a way that makes sense. 
  We don't want to rearrange more things than necessary when we begin styling



# PHASE 1: Block Layouts

The use of blocks and inline-blocks to style webpages was one of the old ways to create webpage layouts. 

- This method was in competition with floats to become the norm eons ago, but it's clear Flexbox and Grid have blown away these 2 archaic options. 
- That being said, IE being supported may cause a need to work with one of these older methods. (Converting Flexbox to an IE-friendly format requires a lot of extra work involving polyfill or something)

One new thing to remember is that inline elements will ignore height and width declarations

### inline, block, and inline-block

These are all values you assign to the display property in CSS. 

- Inline blocks arrange themselves horizontally in a row, but cannot be sized with `height: 20px` or `width: 20px`. If they run out of room, they skip to the next line

![image-20210117033051381](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117033051381.png)

- Blocks can be sized like that, but even if their width is below 100vw, it will still take up the entire row on the document flow

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117033155157.png" alt="image-20210117033155157" style="zoom:50%;" /> 

Width is set to 200px, but it still takes up the entire row

![image-20210117033337717](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117033337717.png)

- Inline blocks fix the problem by letting you sequentially stack block-like inline elements
  If there's insufficient room, then it'll skip to the next line just like inline elements do

### inline-block Quirks

![image-20210117034052484](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117034052484.png) ![image-20210117034113161](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117034113161.png)

You'll notice that 2 inline blocks will have a little space between them even when no margin is specified. This is caused by a line break in HTML and can be mitigated in a few ways

A) Kissing HTML elements

![image-20210117034214523](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117034214523.png) --> ![image-20210117034233522](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117034233522.png)

B) Multi-line HTML comments

![image-20210117034214523](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117034214523.png) --> ![image-20210117034342761](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117034342761.png)

C) Give the inline-blocks negative margins



# PHASE 2: Float Layouts

### The Float Property (Pt 1)

In modern times, float is usually reserved for wrapping text around images or other elements.
The reason it was used for layouts is because the property can be applied to all elements 

The way it works is similar to how brochures for vacation agencies look. 
You move an element to the left or right of its container, and things wrap around it

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117041108488.png" alt="image-20210117041108488" style="zoom:67%;" />

When you use the float property on an image, surrounding text will wrap around it- even if that text is from a separate container element

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117043313032.png" alt="image-20210117043313032" style="zoom:67%;" />
>
> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117043444573.png" alt="image-20210117043444573" style="zoom: 67%;" />
>
> CONTAINER DIV 1: First 2 paragraphs and the image
> CONTAINER DIV 2: Last 2 paragraphs



![image-20210117043938322](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117043938322.png)

Adding the background color and border shows that the paragraph is actually running behind the floated image. But the content within, the actual text, will align within the available space. 

Also notice that the wrapper outline only wraps around the paragraphs, the non floated elements. The parent container refuses to adjust its size for the floating element- a phenomenon known as PARENT COLLAPSE



### Clearing Floats (Pt 2)

Oftentimes, we need more control over what wraps around images and what doesn't

- What if we want the image to be included inside the parent boundary? (self clear)
- What if we don't want the second paragraph element to wrap around the floated image? (normal clear) 

https://codepen.io/NFuego24-7/pen/abmPgGg?editors=1100	To test our claims

We have 3 options to clear the float property  
`clear:left`  `clear:right`  `clear:both`
Your choice is based on where you want the layout to return to its normal flow

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117045331222.png" alt="image-20210117045331222" style="zoom: 80%;" /> 



#### Clearing Other Element Containers (normal)

The floating image is inside of div container 1. Let's try to stop the text from div container 2 from wrapping around it

START POINT BELOW

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117050251790.png" alt="image-20210117050251790" style="zoom:67%;" />

When we apply `clear:right` to container 2, it stays the same as the start point

When we apply `clear:both` or `clear:left` to container 2: 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117050333705.png" alt="image-20210117050333705" style="zoom:67%;" />

This only works on the second container. If we try to apply a clear declaration onto the floating thing's parent, nothing happens. A special fix is required to pull this off



#### Clearing the Parent Element of the Floating Image (self-clear)

There are 3 ways to do this:

A) Clear-fix hack

Let's say this is the parent container that has your floating image inside (snippet 1)
Then apply code snippet 2 to clear it

```html
<div class="wrapper1">
  <img src="https://placeimg.com/150/150/nature" alt="nature placeholder image">
  <p> Para text </p>
</div>
```

```css
.wrapper1:after {
	content: "";
	display: table;
	clear:both;
}
```

The remaining 2 methods are `overflow` and `display-root`

B) Overflow creates scrollbars which don't look particularly good
C) Display-root has questionable browser support at the moment

Let's test out Method A onto our floating image

![image-20210117052649919](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117052649919.png)

![image-20210117052756161](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117052756161.png)

We successfully brought the floating image into the container parent's boundary. Nice!

#### Overriding clear

When working on a responsive float layout with multiple media queries, you'll probably need to override any clears you may have made

| Tiny Screens | Medium Screens                 | Larger Screens |
| ------------ | ------------------------------ | -------------- |
| Float active | Float disabled w/ `clear:both` | Float active   |

You can't just comment out the `clear:both` to activate float in your third zone, or else you'll ruin the layout for medium screens. You'll have to reenable float using this snippet on the container you're targeting:

```css
clear:none;
float:right;
```

The float can go in any direction you need it to btw



### Exercise: Layout Created w/ Floats

In this course, we're going to take this starting webpage with a normal flow (no CSS repositioning) and rearrange it to look like the second image. We'll be using floats, flexbox, and grid to accomplish the same thing

START/END FILES: https://drive.google.com/drive/folders/1jaB8p9YB1KWc3Z4Czf6Vnt6WjVw6G-29?usp=sharing

Keep in mind that these boxes are so easy to visualize only because we applied background colors. In a normal situation, you'd have trouble seeing exactly how far the boundaries of some elements extend to. That's what flexbox is for though



<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117142043646.png" alt="image-20210117142043646" style="zoom: 67%;" />

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117142112582.png" alt="image-20210117142112582" style="zoom: 50%;" />

Notice how the main content box is placed in the middle of the nav and sidebar. 

- If we only had 2 containers in the sequential stack, we could just use `float:left` and `float:right` . To make this work with 3 columns requires some trickery

In our Example, we're going to make 2 media queries
MEDIA QUERY 1: 2 columns
MEDIA QUERY 2: 3 columns

#### 2 Columns Procedure

1. Move the nav before the main content in HTML

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117143423504.png" alt="image-20210117143423504" style="zoom: 25%;" />

We're going with a mobile-first approach. The breakpoint we choose is where we feel that the main, nav, and sidebar can all fit in the same row comfortably. We decide on 600px;

2. Resize the nav and main content so they can fit in one row
   Float nav to left and main content to left as well

Even if we float the main content left as well, it'll respect the nav's space. This approach is better than floating the main content to the right because we'd have to change things once we move on to our 3 column setup

> < video src="Typora-Vids/float_left.mp4" controls> </video>

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117144303936.png" alt="image-20210117144303936" style="zoom: 50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117144739162.png" alt="image-20210117144739162" style="zoom:50%;" />

3. Clear the sidebar from acting strangely due to float

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117145229449.png" alt="image-20210117145229449" style="zoom: 50%;" />

```CSS
/*3 COLUMNS CODE*/
@media (min-width: 600px){
/*STEP 2: Resize nav and main content  ⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆*/  
  nav { width: 25%; float: left; }
  main { width:75%; float: left; }
/*STEP 3: Clear sidebar  ⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆*/
aside { clear:both; }
}
```



#### 3 Columns Procedure

The breakpoint we choose is based off where we believe we can fit the nav, main content, and sidebar comfortably. We choose 850px

1. Resize the nav, main content, and sidebar so that they fit in 1 row
2. Override the sidebar's clear so it'll go in the gap (make it float again)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117151348037.png" alt="image-20210117151348037" style="zoom: 33%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117162759086.png" alt="image-20210117162759086" style="zoom: 33%;" />

/*⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆*/

SIDE NOTE: I now understand the main idea behind float layouts

> < video src="Typora-Vids/float_concept.mp4" controls> </video>

/*⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆*/

3. Clear the footer 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117162925414.png" alt="image-20210117162925414" style="zoom:50%;" />

```CSS
/*3 COLUMNS CODE*/
@media (min-width: 850px){
/*STEP 1: Resize nav, main, and sidebar⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆*/
 
  main { width: 50%; }
  aside { width:25% }
/*STEP 2: Override the sidebar's clear⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆*/
  aside { clear:none; float:right; width:25%;}
  footer { 
    clear:both;
  }
}
```



### margin:auto Demonstration

Everything in the above photo is contained within a single div container. If you want to apply a max-width and center the elements on your screen, use 

```css
.container {
	max-width: 1000px;
	margin:auto;
}
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117171338831.png" alt="image-20210117171338831" style="zoom: 33%;" />

`margin-left: 0, auto` creates the photo on the left
`margin-right: 0, auto` creates the photo on the left

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117171439139.png" alt="image-20210117171439139" style="zoom:29%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117171512712.png" alt="image-20210117171512712" style="zoom:29%;" />



### Floats/Block Layout Comparison

Each of them have their own pros and cons which we have learned to get around in these last 2 chapters

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210117222108832.png" alt="image-20210117222108832" style="zoom: 50%;" />





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
-  Auto-fit will leave open space if there are no grid items to fill it

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





# =========  Findings  =========

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



### Mixin Disabling: Imitating add Styles via Classes in SCSS

When using JS, we can add a class to an element in order to impose styles that are given to that class ahead of time in CSS

> SCSS if/else statements refresher: 
> https://sass-lang.com/documentation/at-rules/control/if

#### Procedure

1. Create a mixin that imposes certain styles, and give it a parameter 
2. Use if/else in SCSS to make it so the styles imposed change depending on parameter values
3. Call your mixin in your SCSS code, but feed it a parameter value that determines what it'll do

EXAMPLE:

_globalHelpers.scss

```scss
@mixin formBorderShadow($bool) {
  // Applies a border/shadow
  @if $bool {
    border: 1.5px solid black;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
    background-color: white;
  } 
  // Removes a border/shadow if one is already applied
  @else {
    border:0;
    border-radius: 0;
    box-shadow: none;
  }
}
```

signup.module.scss

```scss
.container {
  // Set border/shadow on small screens
  @include formBorderShadow(true);
  // Remove it on larger screens
  @media (min-width: 1000px) {
	@include formBorderShadow(false);
  }
} 
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211225184050971.png" alt="image-20211225184050971" style="zoom:50%;" /> 	<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211225184109545.png" alt="image-20211225184109545" style="zoom:50%;" />

#### When this is Needed Most

When working with React or Next, we aren't supposed tp rely on low level JS often
This helps us avoid adding classes via JS by offering the same utility using a different method

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

### Fluid Text Scaling & Trailing Dots

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



#### Trailing Dots

Sometimes we'd like `...` every time typography gets too long to fit into its container

```js
trailingDots: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    width: "210px", // must apply a hardcoded width to know where ellipses start
    whiteSpace: "nowrap",
} // turn this JS into CSS if req'd
```

![image-20220223002701655](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20220223002701655.png)



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



Hi Dahlia, I saw your post on GDFpersonals and felt I should introduce myself! I'll try to summarize myself as best as I can as per your instructions. Here goes :)

Age: 25
Location: Thornhill (in GTA)

Intro about myself (age, location, sexuality, relationship status, who I am, non kinkinterests)

What appealed to me

The dynamic I'm after and previous experiences











