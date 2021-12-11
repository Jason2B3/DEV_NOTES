# HTML Elements & Char. Entities

Great Resource for HTML Tables: https://css-tricks.com/complete-guide-table-element/

```html
ELEMENTS AND GLOBAL ATTRIBUTES ▼
https://developer.mozilla.org/en-US/docs/Web/HTML/Element

Official standards for HTML ▼ 
https://html.spec.whatwg.org/#how-to-read-this-specification

<!-- This is how you comment stuff out. Notice how all content within is gray -->

<p> </p>				Paragraph 
<h1> </h1>				Headline 1 
<article> </article>	Specifies independent, self-contained content 

<em> </em>	  		 Italicizes text to emphasize something
<i> </i>	 		 Italicizes text without special meaning
<strong> </strong> 	 Bolds text with meaning
<b> </b>			 Bolds text without meaning

<dl> </dl> 		Definition list tags. Wrap em around the entire description list
<dt> </dt> 		Definition term tag
<dd> </dd> 		Definition description tag. Can have multiple dd tags per each dt 

<q> </q>   						 Quote (inline)
<blockquote> </blockquote> 		 Quote (block-level element)
<cite> </cite>					 Cites the person who said a quote you typed

<time> </time>	Time tags. 
Convey the date in any way. The content w/ be displayed on the webpage
Recommended to use the datetime attribute along with this

<hr> 	
Thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section
<br> 			
Line Break. A simple tool with no closing tag

<code> </code>	Code tags- inline
<pre> </pre> 	Preformatted text.Copies line breaks and indentation. Good 4 syntax

<div> </div> Div Element- Block Level
For grouping together generic content with no semantic meaning

<section> </section> Section Element- Block Level
Use to group together related content

<span> </span> Span Element- Inline Level
Use to affect a small span of text with CSS (like bold or italics, but multi-step)

<textarea> </textarea> Text Area Element
Use to create a field where you can impermanently add or delete text. Adjustable in size via click and drag

<img src="imagelink" alt="error message" width:1000 height:1000>	Image tags

<!-- ⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦-->
TAGS COMMONLY USED FOR NAVIGATION ▼

<a href="https://example.com/"> </a>	Anchor tags. Use to create clickable web links
<nav> </nav> For marking up navigation. 
Tells the browser that this set of links are meant for navigating
<footer> </footer> Use to create weblinks for extra content at the bottom of a webpage

<li> </li> 		List item tags. Place around each item on your list- regardless of type
<ul> </ul> 		Unordered list tags 
<ol> </ol> 		Ordered list tags
<!-- ⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦-->
TAGS COMMONLY USED FOR IMAGES ▼

<img src="imagelink" alt="error message" width:1000 height:1000>	
Image tags. More attributes may be involved

<source>
Specifies multiple media resources for the picture, audio, and video elements
A void element (no content or closing tags)

<picture> </picture> 
Contains zero or more SOURCE elements and one IMG element to offer alternative versions of an image for different display/device scenarios.

<figure> 	
Represents self-contained content, potentially with an optional figcaption element
<figcaption> 	
Represents a caption or legend describing the contents of its parent figure element.
<!-- ⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦-->
TAGS COMMONLY USED FOR MEDIA ▼

<audio src=""> </audio>
Provides audio. Have the option to use a player built into the browser by default
   
<video> </video>  
Use to place a locally stored video on your website. Unsure how to place an internet hosted one using this element. For that, use IFRAMES instead
    
<iframe> </iframe> 
Use to embed stuff onto your site. Can be practically anything (videos, maps, code demos, slideshows...etc)
    
<!-- ⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦-->
HTML TEMPLATE TAGS ▼
<head> </head> Put all the hidden/undisplayed metadata between these
<body> </body> Parent tags for all the webpage content
<meta> Use to define settings inside the head tags. Several attributes used for this 
<link> Links to a range of other assets we wish to load

<!-- ⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦-->
HTML TABLE CREATION TAGS ▼
<table> </table> 
This element wraps around all the content in our future table. It marks the start/end

<tr> </tr>  Table Row
Wrap these around all row entries to signify they're all part of the same one

<th> </th> Table Header
Defines the title of an individual column

<td> </td> Table Data
Put the cell contents in here
    
<!-- ⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦--> 
HTML FORM CREATION TAGS ▼
<input> Creates a field for users to input their information. Will be submitted later
<label> </label> Labels the input
```



### Character Entities

Use instead of traditional characters to remedy the "execution instead of display" issue.

```HTML
 For example, to show <H1> ... type out... &lt;H1&gt;
```

```
CHARACTER ENTITY REFERENCE CHART: 
https://dev.w3.org/html5/html-author/charref

&lt;	 < 
&gt; 	 > 	
&amp;	 &
&copy;	 © 
&trade;	 ™
&star;	 ☆
&nbsp;   open space
```



# HTML Attributes

```
HTML Global Attributes: https://www.w3schools.com/tags/ref_standardattributes.asp
HTML Attribute List and Compatibilities: https://www.w3schools.com/tags/ref_attributes.asp

charset	 	Used in the initial HTML template. Set equal to UTF-8

style *GL	Inline styling tool- it styles elements within HTML instead of CSS
			Can resize text/photos. Change the font size and type...etc
			
class *GL	Creates groups. Multiple elements can share a class value and w/ be called upon together

lang *GL	Sets the language of a section of the webpage

id *GL		Uniquely identifies an element so JS/CSS can call upon it later
			No 2 elements in HTML should have the same ID value- w/ cause issues	

<!-- ⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦--> 
ATTRIBUTES WITH LONGER EXPLATIONS ▼	

name		< Button, fieldset, form, iframe, input, map, meta, object, output, 				param, 				select, textarea	>
			Gives an element a name. Makes the element easy to reference in JS

type 		Specifies the type of element. Compatible with many elements
			See in depth explanation in next lesson
			
value 		< button, input, meter, li, option, progress, param >
			
<!-- ⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦--> 
FORM ATTRIBUTES ▼

required 	Pair with the input, select, or textarea element. 
			Specifies a field must be filled before submitting a form
			If the input field is left blank, a message appears 
			
min 		Specifies a min value

max 		Specifies a max value

title		Gives HTML elements titles
			If you give a button the title "I like this", hovering over it in the output page will cause a 			   little text box to appear saying "I like this". Check Youtube client
			
step 		Specifies the number intervals for an input field

accept		Use on input tags. Must have type="file" as an attribute alongside it 
			Specifies the file types the server will accept as submissions
			
for 		Use for label or output tags only
			Specifies which form elements a label or calculation is related to via its id
            
placeholder		Set equal to what you want your suggestion text in a text field to be
				This text deletes itself as soon as the user enters any of their info
            
<!-- ⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦⌦--> 
MEDIA ATTRIBUTES ▼

src 		Img tags: Provides the URL to the picture you want to show. Store on postimages
			Video tags: If not using YT + iframes, it provides the desktop stored file destination
			Audio tags: Provides desktop-stored file destination
			
href		Use inside anchor tags. Set equal to a URL to create a clickable weblink
			If set equal to #, it makes a dummy weblink that goes nowhere
			
width 		Sets pixel width of an image or video window

height		Sets pixel height of an image or video window

alt			Creates a custom error message in case something does not load correctly
```



### for/type/value/name Explanations

#### for

Compatible Tags: 
< Label >	 < output >

Tell it which other element it is meant for using the this other element's ID

```html
<form action="/action_page.php">
    
  <label for="male">Male</label>
  <input type="radio" name="gender" id="male" value="male"><br>
<!-- The above label has for="male". An input element has ID="male"			BINDED -->    
  <label for="female">Female</label>
  <input type="radio" name="gender" id="female" value="female"><br>
<!-- The above label has for="female". An input element has ID="female"			BINDED -->     
</form> 

<!-- FYI: The ID's can be equal to anything. Not just M/F-->  
```



#### type

Compatible Tags: 
< a >	 < button >	 < embed >	 < input >	 < link >	 < menu >	 < object >	 < script >   < source >	 < style >

Use #1 : Specify media type when dealing with multiple audio/video options
		 We use them on the source tags, not the media tags themselves

```html
<video controls>
	<source 
     src= "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.480p.vp9.webm" 
  	 type="video/webm">
	<source 
  src="https://www.youtube.com/watchv=u9a2tWRF_mM&t=34s&ab_channel=AmazingShadow.mp4" 
  	 type="video/mp4">
</video>
```

```html
<audio controls>
  <source 
      src="http://example.com/birds.ogg" 
  	  type="audio/ogg; codec=opus">
    
	<source 
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/birds.mp3" 
  	  type="audio/mpeg">
    
Insert error message here
</audio>
```



Use #2 and 3: Specify what Submit/Reset buttons should do
			  Specify exactly what kind of data must be inputted to a field

```html
<form action="/action_page.php" method="get">
    
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
<!-- Specifies that the input for both fields above must be text-->    
    
  <button type="submit" value="Submit">Submit</button>
  <button type="reset" value="Reset">Reset</button>
<!-- type=reset erases all info currently active within the fields 
type=submit sends the user input to be embedded on the web page.--> 
</form> 
```

This gets more complicated when you started using the type on other tags with new kinds of files. See the following site for more examples and practice them later
https://www.w3schools.com/tags/att_type.asp



#### value


Compatible Tags: < button >	< input >	< li >	< option >	< meter >	< progress >	< param >

This attribute has a different purpose depending on which element is is used on...

| ELEMENTS      | Value Attribute Purpose                                      |
| ------------- | :----------------------------------------------------------- |
| button, input | Visually names a button <br />Places some initial text within a text field |
| li            | Lets you start an ordered list later on a value that isn't 1. The next list items will increment from that value. |
| meter         | Specifies the current value of the gauge                     |
| progress      | Specifies how much of the task has been completed            |
| param         | Specifies the value of the parameter                         |
| Option        | Specifies the initial value of the element                   |

We have example for all of these except for meter, progress, and param. Look these up when you need them through here: https://www.w3schools.com/tags/att_value.asp

Input Example:

```html
<form action="/action_page.php">
  First name: <input type="text" name="fname" value="John"><br>
  Last name:  <input type="text" name="lname" value="Doe"><br>
    
  			  <input type="submit" value="Submit form NOW">
<!-- this is an alternative way to create a submit button. Not semantic though. Aka. Inferior -->
</form> 
```

![image-20201209155210960](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201209155210960.png)

The initial text must be deleted by a user to submit their own- this is poor UX design- use suggestion text via the placeholder attribute instead

```html
<form action="/action_page.php">
  First name: <input type="text" name="fname" placeholder="Type first name here..."><br>
  Last name:  <input type="text" name="lname" placeholder="Type last name here..."><br>
    
  			  <input type="submit" value="Submit form NOW">
</form> 
```

![image-20201209213556068](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201209213556068.png)

Button Example:

```html
<form action="/action_page.php" method="get">
  Choose your favorite subject:
  <button name="subject" type="submit" value="fav_HTML">HTML</button>
  <button name="subject" type="submit" value="fav_CSS">CSS</button>
</form> 
```

![image-20201209155615815](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201209155615815.png)

Ordered List Example:

```html
 <ol>
  <li value="100">Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
  <li>Water</li>
  <li>Juice</li>
  <li>Beer</li>
</ol> 
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201209155905148.png" alt="image-20201209155905148" style="zoom:80%;" />

Option Example:

```html
 <form action="/action_page.php">
  <select name="cars">
    <option value="volvo">Volvo XC90</option>
    <option value="saab">Saab 95</option>
    <option value="mercedes">Mercedes SLK</option>
    <option value="audi">Audi TT</option>
  </select>
  <input type="submit" value="Submit">
</form> 
```

![image-20201209160228849](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201209160228849.png)

#### name

```html
<div>
   <label for="email">Email</label>
   <input type="email" name="email" id="email" required>
</div>
```

We named the input element above "email". When you input your address to the text field as "jasonxtuyotech@gmail.c0m" then submit it, the server will then save the following: 
email= jasonxtuyotech@gmail.c0m 





# Vanilla CSS

Keep in mind that many things that are able to be expressed in pixels can be expressed in percentages too

```css
/* ===================   POSITIONING   =======================*/
margin: 0, auto;
/* Centers inline-blocks inside a container element. (Apply to CONTAINER)
Every element inside must have an assigned width. */		

vertical-align: middle 	/* Aligns elements vertically by their middles-SW style*/
vertical-align: top     /* Makes the tops of each element flush to the others*/
vertical-align: bottom	/* Makes the bottoms of each element flush to the others*/
/* ===================   FORMATTING TEXT-BASED ELEMENTS   =======================*/

color: 					/*Changes text color*/
font-family: 			/*Sets a font style*/
font-weight: bold 
font-weight: 600		/*Specify how bold a font is. Sometimes must be imported*/
font-size: 60px
font-variant:small-caps;	/*Capitalizes all, makes the already capitals taller*/

text-decoration: none 	/*Removes browser defaults for text underlining..etc*/
text-decoration: underline_overline_line-through
text-decoration: blue_dotted_wavy	/*Can combine the last 2 lines for decoration*/

list-style-type: none   /* Removes bullets fr/ unordered lists. Apply on UL element*/
text-align: center 	/* Moves txt blocks to the L/R/center.works on inline blocks*/


background: 			/*Changes the background color of an element*/
background: url("") 	/* Background image. Can use local or server url*/

white-space: pre-line	/*See lesson for more options. Changes word gaps*/

font-display: swap_block_fallback_optional	/*Changes how fonts load*/
/* ===========================  CSS BOXES  ======================================*/

box-sizing: border-box		/*Includes border/padding/content when you set W/H */
height: 30px	/* Sets content height. W/ borderbox it sets core element height */
width: 40px		/* Sets content width. W/ borderbox it sets core element width */

padding-top: 5px	padding-bottom: 5px		padding-right: 20px		padding-left: 20px
padding: 20px				/* Shorthand for 4 sided padding*/	

margin-top: 5px		margin-bottom: 5px		margin-right: 20px		margin-left: 20px
margin: 10px				/* Shorthand for 10 pixel thick margin.*/

border-style: solid				/*transparency of border*/ 
border-color: black 			/*color of border*/
border-width: 20px				/*Width of border*/
border: 2px dashed orange		/*Shorthand*/
border-bottom: 5px solid white 	/*shorthand*/

/* =====================  CHANGING BLOCK TYPES   ===============================*/

display: inline-block 
display: block 		/*Changes element type to block level*/
display: none /* Changes element type to none. Removes fr/ doc flow and hides it*/
visibility: hidden 	/*Hides element but preserves place on webpage/DOM */

/* =====================    PSEUDO-CLASSES    ===============================*/
.className:nth-of-type(3n) { } /*Select every 3rd item with this class name*/

selector::pseudo-element { property: value; }	/* Syntax for pseudo-elements*/
selector:pseudo-class { property: value; }   	/* Syntax for pseudo-classes*/

/* Make text-based button glow when dragged or hovered over*/
.selector:hover, 
.selector:active  { color: white;}

/* Make border-based button glow when dragged or hovered over. Set a border first*/
.plan-sections:hover, 
.plan-sections:active  { border-color: burlywood;}

/* =============================  OTHER  ====================================*/

border-radius: 8px  /* Fillets boxes. Can set each side to a diff value if you want*/
border-radius: 50%  /* Pair this w/ a generic element having equal height/width to make a circle*/

font: inherit;      /* Ignore browser default overrides & use the inherited font */
cursor: pointer /* Turns the arrow cursor to a hand when hovering over something*/

.button-class-name:focus {outline: none;} /* remove default outline on a button when focused*/

/* ========================  MOVING ELEMENTS  ==================================*/
(diff values allowed & the view context can change) 
top: 0				/*Stick to the top rim*/
bottom: 50px		/* Stay 50px away from or above from the bottom rim*/
left: 60%			/* Stay 60% away from or to the right from the left rim*/
right: 10%

position: static, fixed, absolute, relative, sticky 	/*Position methods*/
z-index: 20			/* Set element location on the z-axis*/

/* ========================  BACKGROUND SIZING  ==================================*/

background-image: url(" ")
background-size: 300px 100px	/* W/H of an image. % works as well*/

background-repeat; no-repeat	/*Img appears once*/
background-repeat; repeat-x		/*Only repeats in the x-axis*/
background-repeat; repeat-y		/*Only repeats in the y-axis*/

background-size: auto 100%  /*Setting height, let browser pick best width*/
background-size: 50% 		/*Set width, let browser pick best height*/

background-size: cover		/*Makes img fill the entire container via crop/zoom*/
background-size: contain 	/* Ensures the whole img is visible in the container*/

/* ========================  BACKGROUND CROPPING  ============================*/

background-position: 20px		/*Specifies distance fr/ left edge of container*/
background-position: 20px 50px	/*Specifies distance fr/ left edge & top*/

background-position: 0% 15%  /* 0% crop on left, 15% on top*/
background-position: 0% 100% /* 0% crop on left, everything is cropped from the top*/
background-position: right 10% bottom 20%	/* 10% crop on right, 20% on bottom*/

background-position: center /* Sets a 50/50 crop distrib for both vert and horiz*/
background-position: left-top	/* No cropping on Left/top. Cuts right/bottom*/
background-position: left-bottom	/*No cropping on left/bottom. Cuts right/top */

/* Where the photo should be cut w.r.t container. Origin-horiz, clip-vertical*/

background-origin: border-box
background-origin: content-box 
background-origin: padding-box 

background-clip: border-box
background-clip: content-box
background-clip: padding-box

/*  Other */
filter: grayscale(90%);

max-width: 1200px; 
min-width: 500px;

height: 25vh
width: 50vh
/*⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆     STRAIGHT UP JAVASCRIPT     ⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆*/
vari.classList.add("className") /*Adds a new class name to variables*/
vari.className.add("className") /*Overwrites class name of a variable*/
/*⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆     MEDIA QUERIES    ⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆*/
@media (min-width: 40rem) { reg CSS for desktops }	/*Mobile-first basic media query.*/
@media (max-width: 40rem) { reg CSS for mobile }	/*Desktop-first basic media query*/

@media(min-width: 40rem) and (min-height: 37.5rem) {}	/*AND logic operator*/
@media(min-width: 40rem), (min-height: 37.5rem) {}		/*OR logic operator*/

@media (min-width: #rem) and (orientation: landscape) { /*desktop code*/ }	/*Mobile 1st*/
@media (max-width: #rem) and (orientation: portrait) { /*mobile code*/ }	/*Desktop 1st*/
```



```CSS
/*RARELY USED: Useful when you are scrolling through a non-fixed container and want to control how the image inside of it will behave*/
background-attachment: fixed;  /*img would be fixed to viewport, not the container*/
background-attachment: scroll; /*img stays in place. Content scrolls over it*/
background-attachment: local;  /*img scrolls w/ container content*/
```



# Floats

```CSS
float:left
float:right

/*CLEARS*/
clear:left;			/*Clears containers that don't have a float item   X3*/
clear:right;		
clear:both;			/*Best option*/
.container:after {content: ""; display: table; clear:both} /*Clears parent of floaty item*/

.container { clear:none; float:right;}	/*Overrides a clear */

/*CENTERING (Apply these to containers with a set width) */
margin-left: 0, auto		/*Centers blocks within container then shifts them to left*/
margin-right: 0, auto		/*Centers blocks within container then shifts them to right*/
margin: auto				/*Centers blocks within container*/
```



### Positioning with T/B/L/R

Demo: https://codepen.io/NFuego24-7/pen/MWjvpMV

```css
selector {
  background: red;
  position: absolute;
  top: 0;			/* Stick to the top*/
  bottom: 80%;		/*Stay 80% of the screen away from the bottom side*/
  left: 70%;		/* Stay 70% away from the left*/
  right: 0;			/*Stick to the right*/
}
```


> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201220221630479.png" alt="image-20201220221630479" style="zoom:80%;" />
>
> When you scroll down, the red rectangle we apply these stylings to will not remain on-screen. They would if we used position: fixed



# Flexbox

FYI: If you want to assign a styling to all flex-items, use a shared class name

```css
/*  Apply the following to container elements  */
display: flex			
display: inline-flex
/*⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆*/
/*  Flex Wrapping and Direction  */
flex-direction: row		/*	Main axis L→R		Cross Axis T→B	*/
flex-direction: column	/*	Main axis T→B		Cross Axis L→R	*/
flex-direction: row-reverse		/*	Main axis R→L  */
flex-direction: column-reverse	/*	Main axis B→T  */

flex-wrap: nowrap	/*flex items will not wrap or resize to fit on a single line*/
flex-wrap: wrap		/*lays items over multiple rows if there isn't enough space*/
flex-wrap: wrap-reverse	/*fills bottom row first in L→R order, then the top row*/

flex-flow: column-reverse wrap;	/*Shorthand */
/*⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆*/
/*  Flex item Resizing  */
flex-grow: 0;			/*Growth ratio if items don't fill out enough space*/
flex-shrink: 1;			/*Shrink ratio if items overflow CCB with no wrapping*/
flex-basis: 400px;		/*Initial attempt for width/height when sizing flex items*/
flex: 0 1 auto; 
flex: 0 1 40%;
flex: 0 1 400px;	/*shorthand for GROWTH-SHRINK-BASIS  */
/*⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆*/
/* Flex Item Reordering*/
order: 0; 	/* default order value given to flex items*/
order: 4; 	/*Higher order number. Goes later*/
order:-1; 	/*Lower order number. Goes earlier*/
/*If no order declarations are made, the sequence flex items appear in follows the HTML*/
/*If ordered, the order starts at the lowest number, then ends at the highest*/
/*⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆*/
justify-content: center;	
/*flexbox version of margin auto. To center a container and its flex items... 
1) Apply a max width to that container. 
2) Go 1 nest level above the container and make that a flex container as well w/ display:flex;
3) Use justify-content: center on that container holding your initial comtainer */
/*⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆*/
/* Space distribution on MAIN-AXIS */
justify-content:flex-start 		justify-content:flex-end 	  justify-content:center 
justify-content:space-between 	justify-content:space-around
/* Space distribution on CROSS-AXIS */
align-items:flex-start		align-items:flex-end		align-items:center 
align-items:stretch 		align-items:baseline

/*Override an align-items declaration on a flex item with a new position*/
align-self: flex-start; 	align-self: flex-end; 		align-self: self;

```



# CSS GRID

```CSS
display: grid
display: inline-grid

grid-template-rows: 100px 200px ; 	/* QTY- # of rows.  MAG- row height */
grid-template-columns: 100px auto; /* QTY- # of cols.  MAG- col width */
/* auto value: row/col will autosize using whatever extra space is left*/

gap: 10px; /*SHORTHAND*/ 			row-gap: 10px;	column-gap: 10px;
gap: 10px 20px;	/*SHORTHAND*/		row-gap: 10px;	column-gap: 20px;

/* Row/Column Line Positioning ==============================================*/
grid-column: 3/6; /*SHORTHAND*/  	grid-column-start: 3;	grid-column-end: 6;
grid-row: 2/5; /*SHORTHAND*/  		grid-row-start: 2;		grid-row-end: 5;

grid-column: 3/span 3 ; /*Using span instead of specifying an end line*/
grid-row: 1/-1; /*Negative grid lines. -1 means span to the very last one*/

grid-template-columns: repeat(auto-fit, 100px); 
/*Autofit hardcoded width items*/
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
/*Autofit min width items that grow in size evenly when space allows*/
grid-auto-rows: 100px;
/*Makes any implicit rows size to 100px*/
```

#### Grid Template Area

```css
  grid-template-areas: 
  ' h h h h h h h h h h h h'
  ' m c c c c c c c c c c c'
  ' f f f f f f f f f f f f';
}
.header {grid-area: h;} 
.content { grid-area: c;}
.menu{ grid-area: m; }
.footer { grid-area: f;}
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210123231959535.png" alt="image-20210123231959535" style="zoom: 50%;" />



#### justify-content: 

(affects grid-item layout HORIZONTALLY)

```css
justify-content:end; /*shifts content to end of horiz-axis*/	
justify-content:start; /*shifts content to start of horiz-axis*/		 
justify-content:center; /*uses extra space to center flex items in the middle*/

justify-content:space-between; 
/*takes extra space and jams it b/t flex items evenly, but NOT on outer edges*/	

justify-content:space-around; 
/*takes extra space and jams it b/t flex items evenly, even on outer edges*/
```

#### align-content:  

(affects grid-item layout VERTICALLY)

```css
align-content:start; /*shifts items to the vertical-axis start*/
align-content:end; /*shifts items to the vertical-axis start*/
align-content:center; /*shifts items to the vertical-axis center*/

align-content:stretch; 
/*items grow in order to fit across the entire container height. fails if the grid-item heights/widths are set*/

align-content:space-around; 
/*places an even amount of space between each grid item. With half-sized spaces on the far ends*/

align-content:space-evenly; 
/*places an even amount of space between each grid item, including the far ends*/

align-content:space-between; 
/*places an even amount of space between each grid item, with no space at the far ends*/
```

#### justify-items:  

(affects horizontal cell alignment)

```css
justify-items:start; /*aligns items to be flush with the start edge of their cell*/
justify-items:end; /*aligns items to be flush with the end edge of their cell*/
justify-items:center; /*aligns items in the center of their cell*/
justify-items:end; /*fills the whole width of the cell (this is the default)*/
```

```css
justify-self: end /*Apply to individual grid-items. Use any of the 4 values*/
```

#### align-items:  

(affects vertical cell alignment)

```css
align-items:start; /*aligns items to be flush with the start edge of their cell*/
align-items:end; /*aligns items to be flush with the end edge of their cell*/
align-items:center; /*aligns items in the center of their cell*/
align-items:end; /*fills the whole width of the cell (this is the default)*/
```

```css
align-self: end	/*Apply to individual grid-items. Use any of the 4 values*/
```

#### Responsive Width and Height

Auto-Sizing Content in the Middle, evenly sized columns

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210123225711265.png" alt="image-20210123225711265" style="zoom:50%;" />

```css
.container {
  display: grid;
  gap: 5px;
  height: 90%;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 40px auto 40px;
}
```

This will make the second row span the entire remaining height on the site. 
Only works if you set the grid container height to 100%



# SASS

### Fundamentals

```SCSS
$name-one; $name_one		// variables
#{$variable}	// Interpolation. Complete selectors with variable insertion
&;	// Is set equal to the nearest parent selector (i think. test later)



```

#### Maps

Arrays, but in CSS instead of JS

```scss
$font-weights: (
    "regular": 400, 
    "medium": 500, 
    "bold":700
);
```

#### Nesting

```scss
/*CSS Equivalent*/
#sidebar ul li {
      background-color: #F2F2F2;
      color: #404040;
    }
```

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

#### Emulating CSS Pseudo Classes

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



### Reusable Code Blocks

#### Normal Mixins

Reusable code blocks that act like variables

```scss
@mixin mixName { /*Whatever reusable code you want*/ }      

.selector {
    margin: 0;
    @include mixName;	/*Mixin is called here*/
}
```

#### Mixins with Arguments

```scss
@mixin mixText(ARG){ /*Whatever reusable code you want*/ }

.selector { 
    margin:0;
    @include mixText(ARG); 
}
```

#### Partials

Involves storing reusable code in a separate SASS file

```scss
/*⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆*/
// _resets.scss file  (PARTIAL)
* {
  box-sizing: border-box; margin: 0; padding: 0;
}
p {
  font-size: 4rem; font-weight: bold; color: black;
}
/*⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆⑆*/
// main.scss file (FULL)
@import "resets";
```

This works if the partial file is on the same nesting level as the main SASS file. If it isn't, you'll have to change the file URL a bit

MULTIPLE PARTIAL IMPORTS: 

1. You don't need to write @import each time you import a partial: Simply add a comma and continue on the same line. 

```scss
@import "config", "main", "home", "menu", "about"
```

2. If you import a partial file with variables and their values, they won't actually be compiled in the CSS file- since variables only get their values compiled when used

#### Extends

Extends allow us to save a block of CSS declarations in a special variable. 
They're just like mixins

```scss
%name { /*stylin*/ }
.selector{ @extend %name; }
```

Differences from Mixins

1. Extends create dry CSS code when compiled, unlike Mixins
2. Extends cannot have arguments, making them less flexible than mixins

ONLY USE when styling thematically related groups of objects



### Flow Control

The 4 flow control rules:

- `@if` controls whether or not a block is evaluated.
- `@each` evaluates a block for each element in a list or each pair in a map
- `@for` evaluates a block a certain number of times.
- `@while` evaluates a block until a certain condition is met.



#### @if	

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



#### @if/else	

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



#### @else if

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



#### @each

makes it easy to evaluate code for each element of a list or each pair in a map

```scss
@each $key, $value in $map-name {
  .#{$key} { styling }
}
```

#### @for

for loops run from a starting value, all the way until an end value. This can be useful if you want to iterate some code on class names like the following:

.className1	.className2	.className3 	.className4....etc

Perhaps we'd like to run some code for class names 2 to 4. 
Pair this with a pseudo selector to narrow down your search if you like

```scss
@for $i from 2 through 4 {
  .className#{$i} { /*Styling*/ }
}
```

The loop runs for $i values 2,3, and 4. 
$i didn't exist until just now. 
It runs through .para-2 .para-3 and .para-4 to apply the code

Feel free to pair this with pseudo selectors as well, if needed:

![image-20210127061211525](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210127061211525.png)



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

# CSS Animations

### Custom Terminology

Initial State Rule: (ISR)
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

Orig-state-point / Animation-from-point / Animation-to-point / Revert point

OSP: Where the element would be if no animation occurred at all

AFP: Where the animation begins. 
	 If OSP≠AFP, the animation will start in a jagged way
	 Example: https://codepen.io/NFuego24-7/pen/dyOoJQV

ATP: Where the animation ends

RP: Where the element returns to or stays as soon as the animation's over

Jagged start example where OSP≠AFP: https://codepen.io/NFuego24-7/pen/dyOoJQV



### Transforms

#### Translation Transforms:

```css
transform: translateX(200px);	/*translates element 200 px right*/
transform: translateX(-200px);	/*translates element 200 px left*/

transform: translateY(200px);	/*translates element 200 px down*/
transform: translateY(-200px);	/*translates element 200 px up*/

transform: translate(600px, 300px);	
/*SHORTHAND FOR 2D: translates element 600 px right and 300px down*/
```



#### Scale Transforms:

```css
transform: scaleX(1);	/*Does nothing. Scales to the original size in x-direction*/
transform: scaleX(2);	/*Stretches element to 2X orig length in x direc */

transform: scaleX(0.5); /*Makes element half its original length in x direc */
transform: scaleY(0.5); /*Scales element to 1/2 its orig height in y direc */
```



#### Scale Shorthand:

```css
transform: scale(4);  /*Makes element 4X its orig size in both XY direcs*/

transform: scale(0.5, 2); 
/*Makes element 1/2 its orig size IN x, twice its orig size in Y*/
```

Remember: If an element scales to be larger or smaller in any direction, the change will occur evenly on both sides by default. 



#### Rotation Transforms:

```css
transform: rotateX(60deg); 
transform: rotateY(60deg);
transform: rotateZ(180deg);
```

Feel free to combine rotation and translation transforms into one single declaration

```css
transform: rotateZ(180deg) translateX(400px);
/*Order: rotates in z-direction by 180 deg, then translates 400px down new x-axis*/
```



#### Matrix Shorthand:

Accepts 6 values and lets you rotate, translate, and skew in X/Y directions all at the same time

```css
transform: matrix(1, -0.3, 0, 1, 0, 0);
```

What each value does:

1: `scaleX( )`		 2: `skewY( )`
3: `skewX( )`		  4: `scaleY( )`
5: `translateX`		6: `translateY( )`



### Transitions

#### Regular Transitions:

```css
transition: 2s; /*transition timer applies to ALL CHANGES*/
```



#### Multiple/Different Transitions:

```css
transition: background 5s, transform 1s; 
/* transition timer applies only to the background and the transform. 
All other changes not specified will happen instantly without animation*/
```

- Transition timer applies only to the background and the transform
  The background change is much slower than the transform
- All other changes not specified will happen instantly without animation



#### Transition Delays:

```css
transition: background 1s, margin 1s, transform 1s 1.5s;
/* 1st time value: transition duration		2nd time value: delay */
```



#### Animation Acceleration:

You can add in an acceleration style using certain key-words

```css
transition: background 1s, margin 1s, transform 1s 1.5s ease-out;
```

`ease`: slow start, fast, slow end (DEFAULT)
`linear`: animation speed is constant throughout
`ease-in`: animation starts slow, ends fast
`ease-out`: animation starts fast, ends slow



### Key Frames

#### Regular Keyframes:

```css
@keyframes frameName{
  from{ transform: translateX(0); } /*AFP location*/
  to{ transform: translateX(900px); } /*ATP location*/
}
```

Add in this snippet to the ISR:

```css
animation-name: frameName;	
animation-duration: 4s;
```



#### Keyframe Delays:

```CSS
animation-delay: 2s; /*animation starts 2 second after page loads*/
```



#### Animation Fill Mode:

```css
animation-fill-mode: none;		/*default*/
animation-fill-mode: forwards;  /*ensures ATP=RP. Animation does not revert to start*/
```

The next 2 require an animation delay to be noticeable:

```css
animation-fill-mode: backwards;	
/* Animation delay starts at AFP -> animates -> reverts to OSP */

animation-fill-mode: both;
/*	Animation delay starts at AFP -> animates -> element stays at end */
```

Instead of commencing a delay at the original start point, the browser will begin the delay where the animation starts



#### Repeating Animation:

```css
animation-iteration-count: 3; /*repeat animation 3X (apply to ISR) */
animation-iteration-count: infinite;	/*repeat animation to ∞ */
```



# Resources for CSS Syntax

Properties List: Explanations and compatible values are described in each entry 
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference

List of Pseudo Classes: w3 has better explanations but is missing a few from MDN 
https://www.w3schools.com/css/css_pseudo_classes.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

List of Pseudo-Elements:
https://www.w3schools.com/css/css_pseudo_elements.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

More details on CSS Specificity: 
https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity

[Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/css-grid)



