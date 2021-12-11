### Elements

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



### Attributes

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



### In-Depth Attribute Explanations

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
```



### The Web Dev Trio

- HTML is a declarative language- meaning that there are no loops or functions
  It declares: "Put the paragraph here! And the header there!"
- It's very resilient and robust. 
  If a line is misspelt or missing, HTML goes: "eh, close enough. I'll guess what they meant and fix it"

- CSS is more powerful, but more fragile.
  When something goes wrong in CSS, the browser will skip just that section of code and not apply that styling. 
- It will go on to apply the rest. It might not come out completely correct, the the browser will do its best and most of it will work.

- JavaScript is the most powerful. There are many things that JavaScript can do that HTML and CSS cannot do. But it's also the most fragile. If something's wrong with the code, or the browser is too old to know what that code means, the browser will stop. 
- It gives up. It won't run that JavaScript. It doesn't want to start guessing what to do, which makes JavaScript more fragile. Having all three languages means that developers can combine these qualities. Resilience, robustness and power.

When completing a project, do as much as you can using the easier/robust HTML. Once you reach it's limitations, then use JS or CSS to make your site better. Learn as much of HTML's elements and attributes to fully leverage what it can do. Your life will be easier for it.



### Term Definitions

<u>HTML:</u> 	Hypertext markup language

<u>CSS:</u> 	 Cascading style sheets

<u>API:</u> 	 Application Programming Interface 
An API is like a server at a restaurant. It's a messenger that takes user requests and tells the system what you want to do. Then it returns a response back to you.

Waiter(API)---> Kitchen (system)---> Plate of food(response)

API Example: Website that finds Airline Flight Tickets</u>

1. You enter your flight destination, day of departure, seating class...etc. These are the variables/parameters
2. The API will scour major airline websites for the deals that adhere to the standards you set
3. It will return a list of options for you to choose from

<u>Source Code:</u> 
Any collection of code written using a human-readable programming language, usually as plain text

<u>Software Engineer:</u>
One who builds (engineers) software. This software could be desktop programs like Spotify or Photoshop, or mobile and web applications- like Facebook, Twitter, or Gmail. 

<u>Web Developer:</u>
A software eng who only builds web applications.

“Software Engineers” don't do different work than “Web Developers” on a day-to-day basis, assuming they’re working on web applications.

<u>Wireframes:</u>
They have no graphics or text. Are purely used to illustrate the placements of certain webpage elements

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201108122621961.png" alt="image-20201108122621961" style="zoom: 50%;" />

<u>Mockups:</u>

- A preview of what the website will look like upon completion. Uses filler text, for-show only search bars, social media icons, pictures without fancy looking holders/borders
- Usually done in plain HTML- so there are no interactivity features present
- We can play around with different background colors and pictures just to get a feel for what the site will eventually look like-if the client is pleased

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201108123416223.png" alt="image-20201108123416223" style="zoom:50%;" />

<u>HTML Attributes:</u>
Special words used inside the opening tag to control the element's behaviour. HTML attributes are a modifier of an HTML element type.

<img src="https://clearlydecoded.com/assets/images/posts/2017-09-04-anatomy-of-html-tag/html-tag-attributes.png" alt="img" style="zoom: 67%;" />

<u>DOM (Document Object Model):</u>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png" alt="Document Object Model - Wikipedia" style="zoom: 25%;" />

- The DOM is a description of how the HTML objects are organized using a hierarchical tree structure
- Contains NODES- anything we can change in the document. Examples include HTML attributes, text within elements, the element tags themselves

<u>WordPress:</u>

- A tool that lets people build their own websites using pre-set structures without coding. 
- Is free/open source, but comes with some limitations with the wordpress.com software. Sites can be taken down if they don't adhere to terms of service, and plugins that help add new functionality to the site are not allowed
- Should sign up for it later and take note of how their websites are built so you can emulate them- except with complete creative and functional control

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201202131430676.png" alt="image-20201202131430676" style="zoom:33%;" /><img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201202131510509.png" alt="image-20201202131510509" style="zoom:33%;" />

<u>Pixel Density:</u>
The higher the density, the more pixels shoved onto all available space on a screen- increasing the maximum possible image quality. A 4X screen would have a higher density than a 1X screen for example. This is one of the reasons why we must offer a variety of differently sized photos for our webpages- an image that looks nice on a 1X screen may look extremely pixelated on a 4X one

![image-20201203125928697](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201203125928697.png)

<u>WebVTT Files:</u>
A text file saved in the Web Video Text Tracks (WebVTT) format. It contains supplementary information about a web video, including subtitles, captions, descriptions, chapters, and metadata. VTT files do not contain any video data.

<u>Metadata:</u>
Metadata describes other data. It provides information about a certain item's content. For example, an image may include metadata that describes how large the picture is, the color depth, the image resolution, when the image was created...etc

<u>Embedding:</u>
Taking content from 1 site and placing it on another site's page. Will use this for hosting Youtube videos, giving directions to your store via google maps, giving code demos from code pen, showing presentations from speaker deck or Notist...etc. Basically, you let hosting sites take care of all the hard parts for you

<u>CMS:</u>

A Content Management System is a software which is used for creating, managing and editing a website even if you do not have any specialized technical skills or knowledge. With CMS, you can develop and design a website without even having to write the code- like WordPress. There are some advantages like being able to redesign websites and make significant changes without a complete overhaul.

<u>White Labelled Source:</u>
When you are the buyer of white label work, it means putting your company’s name on something that others have made, instead of acknowledging that another company made it and you are selling it.

<u>Favicon:</u>
The tiny 16 by 16 pixel icon/logo you see website tabs have. It helps distinguish sites from each other when looking at multiple tabs at once- especially if they're pinned.

<u>Forms:</u>
Field where site visitors can type in and submit their data. They typically get access to something in return, and their information is processed

### Absolute vs Relative URLS

<u>Absolute URL:</u>
An absolute URL contains the entire address from the protocol (HTTPS) to the domain name (www.example.com) and includes the exact location deeper into that website if needed (/foldernameA or /foldernameB). Basically, it's the full URL of the page that you link to.

<u>Relative URL</u><u>:</u>
The relative URL, on the other hand, does not use the full web address and only contains the location following the domain. It assumes that the link you add is on the same site and is part of the same root domain. The relative path starts with the forward slash and leads the browser to stay within the current site.

Choose between which to use via the reasoning on this site: 
[What Is the Difference Between a Relative and an Absolute URL? (seoclarity.net)](https://www.seoclarity.net/resources/knowledgebase/difference-relative-absolute-url-15325/)

### Git vs GitHub

Source codes are simply files stored in folders

In programming, several people work together to make a single end product. This creates a need for version control- so that any changes made by a coworker will be known to any future contributors to the source code.

Version control helps prevent teammates from clashing or overriding each other's work by allowing you to track changes made

Git- a form of version control- is installed on our local machine. Our friends also have their own version control on their devices. 

GitHub acts as a cloud storage space where you can make changes in your source code which gets sent up there. Your friends can then pull down the changed code and further adjust it, just like Google Drive. Requires each user to make changes properly however - you have to make sure the newly formed code merges well with what existed initially.



### Skeletons

Prebuilt Forms and Fields

Adjust these and style them as you wish. Just place these in the main tags and you're good to go:

![image-20210113194536737](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20210113194536737.png)

```html
<form action="index.html" class="signup-form">
            <label for="title">Title</label>
            <select id="title">
                <option value="mr">Mr.</option>
                <option value="ms">Ms.</option>
            </select>
            <label for="first-name">First name</label>
            <input type="text" id="first-name">

            <label for="last-name">Last name</label>
            <input type="text" id="last-name">

            <label for="email">e-Mail</label>
            <input type="email" id="email">

            <label for="password">Password</label>
            <input type="password" id="password">

            <input type="checkbox" id="agree-terms">
            <label for="agree-terms">Agree to
                <a href="#">Terms &amp; Conditions</a>
            </label>

            <button type="submit" class="button">Sign Up</button>

</form>
```









