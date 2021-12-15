# CHAPTER 2: FORMATTING TEXT 



### Paragraph, Article, and Headline Tags

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201115113119875.png" alt="Q" style="zoom: 33%;" />
>
> Each of these individual lines are called ELEMENTS
> An element consists of an opening tag, the content, and a closing tag
> Some elements do not have closing tags- we'll read about them later on

These tags may function similarly, but are used in different scenarios

Paragraph Tags: 
Used to display blocks of text that are part of the website

Article Tags: 
Meant for texts that can independently exist outside the site like blog/forum posts. 





### Nested Elements

- Typora uses the same markdown syntax that HTML uses- the main difference is that Typora allows shortcuts to replace tags that normally need to be typed out manually. 
- For example, we can underline words using CTRL U instead of typing             < u > < /u > tags around the words you need bolded
- What makes this a nested example is that the tags for bolding are inside the tags used to tell HTML that we are creating a paragraph

> ![image-20201115114634683](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201115114634683.png)
>
> OUTPUT:
> This paragraph has **text that's emphasized** for effect

- The entirety of an HTML document is just a set of elements nested within each other

> Example: See if you can describe what this is
>
> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201115115046376.png" alt="image-20201115115046376" style="zoom:33%;" />
>
> DESCRIPTION:
>
> We have one article that consists of 3 paragraphs. The final one has emphasized text. Anything written after the closing article tag will be considered to be outside of the article.



### Paragraphs

While we learn, we'll be using a website called codepen.io. It allows us to use the web-dev trio quickly without the need for setting up a coding environment
https://codepen.io/jensimmons/pen/bGbooGB

If you surf around, you can see other people's coding experience and mess around with them. You can save yourself a clone profile so that the original will remain the same when you follow a link to try and go back to it.

EXAMPLE 1: START/END TAGS WITH SPACES BETWEEN PARAGRAPHS 

```html
<p>If you just put all the content in an HTML file with no markup, it just ends up as one big blob on the website. The browser assumes it's all one long string of text.</p>

<p>We can try to create separate paragraphs by leaving a bunch of space in our HTML file, but that space doesn't count. The browser ignores it. All these words simply add up to a bunch of words in a row.</p>

<p>The browser doesn't know what this is, because we haven't used any HTML yet to tell it what this is.</p>
```

> ![image-20201115134657403](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201115134657403.png)
>
> Since we have start and end tags, HTML recognizes that we have 3 separate paragraphs



EXAMPLE 2: START/END TAGS WITH NO SPACES BETWEEN PARAGRAPHS

```html
<p>If you just put all the content in an HTML file with no markup, it just ends up as one big blob on the website. The browser assumes it's all one long string of text.</p> <p>We can try to create separate paragraphs by leaving a bunch of space in our HTML file, but that space doesn't count. The browser ignores it. All these words simply add up to a bunch of words in a row.</p> <p>The browser doesn't know what this is, because we haven't used any HTML yet to tell it what this is.</p>
```

> ![image-20201115135048573](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201115135048573.png)
>
> Output is the same as example 1 (good formatting)



EXAMPLE 3: NO END TAGS

```html
<p>If you just put all the content in an HTML file with no markup, it just ends up as one big blob on the website. The browser assumes it's all one long string of text.

<p>We can try to create separate paragraphs by leaving a bunch of space in our HTML file, but that space doesn't count. The browser ignores it. All these words simply add up to a bunch of words in a row. 

<p>The browser doesn't know what this is, because we haven't used any HTML yet to tell it what this is.
```

![image-20201115135448696](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201115135448696.png)



EXAMPLE 4: NO TAGS AT ALL

```html
If 			you just put all the content in an HTML file with no markup, it just ends up as one big blob on the website. The browser assumes it's all one long string of text.

We can try to create separate paragraphs by leaving a bunch of space in our HTML file, but that space doesn't count. The browser ignores it. All these words simply add up to a bunch of words in a row. 

<p>The browser doesn't know what this is, because we haven't used any HTML yet to tell it what this is.
```

> OUTPUT: 
> A block of text between the 2 paragraphs with missing tags
> ![image-20201115135904311](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201115135904311.png)

WHAT WE LEARNED:

1. Large indentations between words in HTML code does not result in the output having these large spaces. SEE EXAMPLE 4

2. Having missing end tags- although it is bad practice- does not always destroy the text formatting. Although I'm assuming HTML recognized that an end tag should be placed before the next start tag. SEE EXAMPLE 3

3. Missing BOTH start and end tags results in large blocks of text- even if you separate them with spaces or entire lines

   

### Headlines

- There are six headline types- H1, H2, H3, H4, H5, H6
  H1 is the largest and most prominent, while H6 is the smallest and most subtle
- The same headline type can be presented in larger/smaller font sizes
- Maintain an established headline hierarchy for your websites
  It helps give websites meaning, consistency, and a professional feel

> ![image-20201115141735667](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201115141735667.png)
>
> H1: Dance
> H2: Every other headline, both medium and small
> FALL PREVIEW, ARTS, At the Joyce, All the Ways to Fall for Dance this Autumn

- Start paying attention to websites and notice what hierarchies they utilize
  Notice what size headlines are used to represent what
  
- Peeking their source code would also likely help- you can't just eyeball what headline is used everything when font sizes change- except for H1 being the main title...obviously

  

### Bold and Italics

There are 2 HTML elements for bold, and 2 for italic as well 

```html
<em> </em>	  Italicizes text to emphasize something
<i> </i>		Italicizes text without special meaning

<strong> </strong> 	 Bolds text with meaning
<b> </b>				Bolds text without meaning
```

The appearance of the text being outputted will look the same***

EXAMPLE 1: ITALICS

![image-20201128110958348](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201128110958348.png)

1) Add inflection via italics to "favorite" to emphasize how much I like it 

2) Add italics to Sesame Street because it is a show. This does not have any special meaning, I just want to differentiate it from other words

```html
<p>
 My <em> favorite </em> character from <i> Sesame Street </i> is Grover  
</p>
```

EXAMPLE 2: BOLD

![image-20201128111240103](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201128111240103.png)

1) Add bold inflection to the word emergency to emphasize severity
2) Bold "on fire" without any special meaning

```html
<p>
  <strong> EMERGENCY! </strong> The university is <b> on fire </b>
</p>
```



### Lists

Many things on the web are classified as lists- even though they may not look like them. HTML contains 3 kinds of lists- unordered, ordered, and definition lists

Navigation bars are lists of different URLS
Every clickable teaser headline that leads to new content is one![image-20201128131656726](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201128131656726.png)![image-20201128131729246](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201128131729246.png)

#### Unordered and Ordered Lists

<u>Unordered List:</u> 
Use to group elements whose numerical order does not matter

<u>Ordered List:</u> 
A numbered list where the sequential order does matter

```html
< li > < /li > 
List item tags. Place around each item on your list- regardless of type

< ul > < /ul > Unordered list tags 
< ol > < /ol > Ordered list tags
```

EXAMPLE 1: CREATE AN UNORDERED LIST

```HTML
<ul>
  <li>flour</li>
  <li>sugar</li>
  <li>baking powder</li>
  <li>salt</li>
    
 <!-- We will now start testing HTML by giving it strange syntax -->
  <li>      non-dairy milk      </li>
       									 <li>apple cider vinegar</li>
  <li>vanill     a</li>
</ul>
```

> ![image-20201128144017514](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201128144017514.png)
> ***Notice how the only "off" item is the word vanilla. Despite having a huge space in the HTML code, the computer only recognizes 1 space distance.
>
> Tag indentation does not seem to matter

EXAMPLE 2: CREATE AN ORDERED LIST

```html
<ol>
  <li>In a bowl, mix all the dry ingredients.</li>
  <li>In another bowl, mix together the rest.</li>
  <li>Wisk together.</li>
  <li>Wait 5 minutes.</li>
  <li>Cook the pancakes.</li>
</ol>
```

![image-20201128150040489](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201128150040489.png)	



#### Definition Lists

<u>Definition List:</u> 
A list of terms and their descriptions. Can be used as a list of key value pairs

<u>Key Value Pair:</u>
When you have an item, then a second item that explains/DEFINES the first

```html
<dl> </dl> 
Definition list tags. Wrap this around the entire description list

<dt> </dt> 
Definition term tag

<dd> </dd> 
Definition description tag. Can have multiple dd tags per each dt 
```



```html
<dl>
    
  <dt> Term ONE </dt>
      <dd> Definition </dd>
      <dd> Another definition </dd>
    
  <dt> Term TWO </dt>
      <dd> Definition of term 2 </dd>
      <dd> Another definition for term 2 </dd>
    
</dl>
```

![image-20201128155349717](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201128155349717.png)

#### Lists and Navigation Bars:

https://codepen.io/jensimmons/pen/eYOyoJO?editors=1000

- This code by Jen Simmons shows how lists can be used to create navigation bars of varying types. There are also ordered lists with sub elements, and teasers. 
- Keep in mind that clicking these gateways does not lead anywhere. They are not assigned a value because this was done as a demonstration

![image-20201130174603200](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201130174603200.png)

### Quotes

#### *Inline vs Block Elements*

Inline elements are meant to be wrapped around text that is nested within a block

Block-level elements mark the beginning of a new block. They begin a new thing on the page

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201128195708601.png" alt="image-20201128195708601" style="zoom:50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201128195748237.png" alt="image-20201128195748237" style="zoom:50%;" />

#### Referencing Phrases People said

- Quotes in HTML are different than those in Typora. Here, we just use quotes as a way to contain photos or important snippets of text. In HTML, quotes are more literal- they help us convey that someone said certain words

- There are 2 versions of quotes, one of them inline while the other is block-level

```html
<q> </q>   						 Quote (inline)
<blockquote> </blockquote> 		 Quote (block-level element)
```

EXAMPLE 1: QUOTE AN ENTIRE PARAGRAPH

This example will have no quotation marks. We will simply have an entire paragraph dedicated to what some guy said, and feature his name at the bottom

```html
<blockquote>
<p>We’ve gone from having 21 elements in HTML tags, that first document, to having 100 more elements now, and yet it’s still the same language. I find that amazing. It’s still the same language that was created 25 years ago. It’s grown an extra 100 elements in there, and yet it’s still the same language.</p>
</blockquote>

<cite>— Jeremy Keith</cite>
```

> ![image-20201128194253770](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201128194253770.png)
>
> The blockquote made it so Jeremy's paragraph is indented

EXAMPLE 2: USE QUOTATION MARKS AROUND A PHRASE

- Before you ask, yes. You can manually type out quotation marks in any sentence you plan to output in HTML. That being said, different languages have different quotation marks- some of which are not on your keyboard. 
- Through the use of Q tags, you can make the browser choose the quotation mark type for you 

```html
<p>
After deciding that he no longer wishes to be an engineer, Jason embarks on a new journey. <q> I will advance my coding skills and become one of the greatest inventors the world's ever known.</q> 
</p>

<cite>— Jason "NFuego" Bustamante</cite>
```

![image-20201128195425217](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201128195425217.png)



### Dates

- Humans can convey the date in several different ways. 
  May 8th, 2020	05 08 2020	08 05 2020 
```html
<time> May 8th, 2020 </time>
Introducing Time tags. You can convey the date in any way you choose using these. What's between the tags is what will be displayed on the webpage
```

- Even so, computers prefer a standardized format in order to communicate the date with other machines seamlessly. That form is YEAR-MM-DD
- Use an HTML attribute along with the time element to ensure the machine knows exactly which day you are referring to. The content is still free to be expressed in any way

Typical syntax for an HTML element is as follows:

```html
<elementName attributename= " " > 
    Content unrestricted*** 
</elementName>
```

<img src="https://clearlydecoded.com/assets/images/posts/2017-09-04-anatomy-of-html-tag/html-tag-attributes.png" alt="img" style="zoom:50%;" />

EXAMPLE 1: EXPRESS THE DATE IN 3 DIFFERENT WAYS USING TIMETAGS WITH ATTRIBUTES

```html
<p> <time datetime="2099-11-24"> Nov 24, 2099 </time></p>
<p> <time datetime="2099-11-24"> 24th of November, 2099 </time> </p>
<p> <time datetime="2099-11-24"> 24-11-2099 </time> </p>
```

![image-20201129095719709](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201129095719709.png)



### Times (SK)

- Computers use the 24 hour clock format. Can optionally include seconds or fractions of a second if we wish to

Note to self: Make a time clock for Ontario Canada, Peru, and Thailand as your first project***. Skimmed the hell out of the last part of this 



### Code, Pre, & BR



#### Code Element

If we want to include syntax within a block of text, we must use code tags- an inline element.

EXAMPLE 1: USE CODE TAGS TO DIFFERENTIATE SYNTAX FROM REG TEXT

```html
<p>  This is sample starting text </p> 
<code>
age= 22
if (age>0 and age<13):
    print("you are young")
</code>
    <p> Finisher text here </p>
</p>
```

> ![image-20201130132121313](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201130132121313.png)
>
> The code appears in a different font than the regular words



Potential issues may arise when you try to put HTML syntax within your text. The demo below shows how HTML will actually do what the code says instead of outputting it as code for people to only view. 

```HTML
<p>  This is sample starting text </p> 
<code> <H1> THIS SHOULD NOT APPEAR AS A HEADLINE </code>
<p> Finisher text here </p>
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201130132700113.png" alt="image-20201130132700113" style="zoom: 67%;" />

To remedy this, use one of the many HTML entities- better explanation in a future lesson. Wrap them around the H1 

EXAMPLE 2: DISPLAY HTML SYNTAX ON A WEBPAGE WITHOUT EXECUTION 

```
&lt; use instead of <
&gt; use instead of > 
```

```html
<p>  This is sample starting text </p> 

<code> 
  &lt;H1&gt; THIS SHOULD NOT APPEAR AS A HEADLINE  
</code>
  
<p> Finisher text here </p>
```

![image-20201130135742954](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201130135742954.png)



#### Impacting Spacing via Pre and Br Elements

By now you've probably noticed how you can have many spaces/lines between words in your HTML syntax- which the browser will ignore. You'll still end up with one big block of text in the end.

```html
<br> Line Break. A simple tool with no closing tag

<pre> </pre> Preformatted text. 
Forces the browser to copy all line breaks/indentation. Fantastic for conveying code along with code tags
```

EXAMPLE 1: USE THE LINE BREAK TAGS TO SPLIT UP SENTENCES IN A SONG 

```html
<p>  
Scooby Doo, whatcha gonna do? <br>
This villain is onto you! <br>
Evil pirate and his flying swords run the day. <br>
Don't try to run, don't try to hide. <br>
The only way...to move along is to fight!
</p>
```

![image-20201130141533644](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201130141533644.png)

EXAMPLE 2: USE PRE TAGS TO OUTPUT A SONG WITH MIXED UP SPACING

```php+HTML
<p> <pre>  
Scooby Doo,                whatcha gonna do? 
                           This villain is onto you! 
                           
Evil pirate and his flying swords run the day. 
Don't try to run, don't try to hide. 
The only way...           to move along is to fight!
</pre> </p>
```

![image-20201130141829105](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201130141829105.png)

### Superscripts, Superscripts, and Small Text

```html
<sub> </sub> Subscript 
<sup> </sup> Superscript
<small> </small> Small meaning or relevance tags (fine print, copywright symbol...etc)
```

If you need to type out complex mathematic equations, look into MathML. It can perform things HTML was not designed to handle- markup language for mathematics.

EXAMPLE: USE ALL THESE NEW TAGS, NOW!

```html
<p> 
  H<sub>2</sub>0 is the chemical formula for water. 		<br>
  4 = 2<sup>2</sup> by the way 								<br>
  <small>©TuyoTech Industries</small>
</p>
```

![image-20201130173544664](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201130173544664.png)



### Section, Div, and Span Elements +

- The section and div tags function similarly to article tags- they are all used to group together content
- Sometimes their use is interchangeable, but the purpose behind having these similar yet different tags is the SEMANTIC MEANING. 
- HTML may output the same result, but onlookers using dev tools will extract a certain meaning depending on which tag you employ

<u>Div Element- Block Level</u>

- Used for grouping together generic content

<u>Section Element- Block Level</u>

- Use to group together related content- they all relate to a single theme
- Should typically have heading

<u>Span Element- Inline Level</u>

- Use to affect a small span of text, similar to italics or bold

- Instead of changing the letter slant or thickness directly, CSS can be used to change content wrapped in span tags. We need a class attribute to make this happen- explained in a later lesson

  

#### MEGA-EXAMPLE: What's New Scooby Doo?

- We will use all 3 aforementioned tags in this large demonstration, along with the class attribute. 
- The class attribute will be used alongside a tiny bit of CSS to highlight the background of the text the span tags affect.
- Understanding the CSS is not necessary. Just note how all the lines with the same class have the same change imposed on them

https://codepen.io/NFuego24-7/pen/abmOeOK

> ![image-20201201140526808](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201201140526808.png)
>
> - We used the div tags for lines 1-3 because the info had no special meaning
> - The song lyrics along with the header were all wrapped within section tags. They are all related to the same theme- a Scooby-Doo song
> - The 2 pink highlighted lines were caused by the span tags paired with the class attribute. The CSS forced the chorus class to have a pink background. 1 change affected both lines

Though this is a large example for a beginner, real webpages often will not be this cut and dry. Take a look at some well put together pages and see what tags they use to wrap around certain webpage items

### Text Area Element +

- Use to create a field where you can impermanently add or delete text. 
- The resulting textbox size will be adjustable via click and drag- even if you specify the size beforehand

```html
<textarea rows="10" cols="60"> 
Disposable filler text here***
</textarea>
```

![image-20201201203233014](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201201203233014.png)



### Jumping to Sections on your Page

Let's say we have a really long webpage, and we want users to jump to the exact sections they need. Here's how:

1. Give your jump locations their own unique ID's
2. Use an anchor tag to create a clickable weblink. Have it travel to a new part of your page instead of a URL

```HTML
<a href="#para-2"> This goes to paragraph 2</a>
<!-- Somewhere on our page, there's an element with the class name "para-2"
```



# CHAPTER 3: BEHOLD MY POWER 



### Developer Tools

If you're searching for how to properly markup your HTML...

1. Find a noteworthy group of programmers and make your way to the websites they built
2. Use "developer tools" to peek under the hood and see how their code is organized-CNTRL SHIFT I. You'll find JavaScript, HTML, and CSS on there

Most high level websites incorporate a ton of syntax you won't understand early on. Start by peeking under the hood of simpler sites like this one:
https://cdpn.io/jensimmons/debug/xxKjYRR

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201201103318927.png" alt="image-20201201103318927" style="zoom:67%;" />
>
> HTML can be found on the left while CSS is on the right
> Open developer tools on a new window, if you're using multiple screens
> All the grey triangles are drop-downs that help conserve space
>
> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201201103814552.png" alt="image-20201201103814552" style="zoom: 67%;" />
>
> If you right click an element, you get the option to change/edit some text
> All your changes will be reflected on the webpage you're inspecting
> It does not permanently change the site however

#### Debugging

We also use developer tools to narrow down where mistakes are in our code
Start watching the video from 3:15 to see a simple example:
[Debugging HTML (linkedin.com)](https://www.linkedin.com/learning/html-essential-training-4/debugging-html?contextUrn=urn%3Ali%3AlyndaLearningPath%3A59370541498ec352a683231c&u=2161498)
https://codepen.io/jensimmons/pen/aboGBML?editors=1000

```html
<ol>
  <li>One</li>
  <li>Two<li>
  <li>Three</li>
  <li>Four</li>
</ol>
```



> ![image-20201201110655545](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201201110655545.png)![image-20201201110717436](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201201110717436.png)![image-20201201110346220](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201201110346220.png)
>

- The 3rd list element in the dev tools does not have a verbal number after the marker line. 

- If you inspect the HTML code itself, you'll notice that the coder forgot to use a closing tag after "two". They use an opener by mistake, creating an extra blank list item

![image-20201201200844608](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201201200844608.png)

### HTML Attributes

- So far we've only been using basic HTML elements. Attributes add extra functionality to the tags we already known how to use

Attribute Types:

1. Global Attributes- applicable to all HTML elements

2. Attributes applicable to only 1 certain element

3. The attributes that work on certain elements, but not all (will explore that in the images/video section)

   

#### Class Attribute- GL 

- Gives us a way to attach a reusable name to any element 
- We then target all elements with that class in our CSS or JavaScript- which allows us to rapidly make standardized changes. These can involve font styling, text sizes...etc

We may decide that all "intro" class elements should have red text instead of black. If we have 10 of these intro-class elements, we needn't change all of them individually.

(See MEGA-EXAMPLE 1 from a past lesson for a demonstration)



#### ID Attribute- GL (SK)

Similar to the class attribute, but we are only allowed to use unique names once in the entire HTML page

Use ID's to target CSS. When combining HTML with JavaScript and CSS, having a unique ID name becomes useful in certain situations

Whatever the scenario, class and ID attributes allow us to name certain HTML elements and refer to them at other parts of the stack of code.



#### Content Editable Attribute- GL

- Lets a webpage visitor edit the content on that page, just not permanently
- Upon refreshing, the user's changes will be erased. HTML only provides the functionality for editing. Back end developers are needed to find ways to save newly added user content- usually via JS.  
- This is one way to provide the browser and API to JS. Look for more methods in other courses
- Used for search bars and other interactive things

```html
<blockquote contenteditable="true"> 
Edit this content to add your own quote. 
</blockquote>

<cite contenteditable="true">	Your name here	</cite>
```

![image-20201201144021203](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201201144021203.png)

https://codepen.io/jensimmons/pen/KKPRZLJ?editors=1000



#### Lang Attribute- GL

Gives us a way to tell the browser what language the content is in

Will explore how to support different languages on the web once we reach chapter 7***

#### Dir Attribute- GL

The direction attribute tells the browser which way the text should start extruding from. It does not make the words come out backwards.

```HTML
<p lang="en-GB">This paragraph is in British English.</p>
<p lang="fr">Ce paragraphe est défini en français.</p>
<p dir="ltr">This paragraph is in English. It flows from left to right.</p>
<p dir="rtl"> HOWDY Y'ALL  </p>
```

![image-20201201145125265](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201201145125265.png)



### ARIA Roles

- ARIA Roles are another kind of global HTML attribute. 
- The layer of information conveyed by ARIA tells screen readers, braille displays, magnifiers and other assistive technology the things they need to know to make a site fully accessible for the differently abled
- Apps have complex interfaces with several functionalities- they need to be accessible to all

<u>Accessibility Tree:</u>
As you know, your computer uses HTML to build the DOM tree. 
Afterwards, it takes the DOM tree to build the accessibility tree. 
This is what assistive devices use to provide a site experience via a screen reader



EXAMPLE: Use Aria Roles

- This example is quite long, so we'll be using 2 code pens to show the difference between A (not using ARIA), and B (using ARIA)

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201201183604784.png" alt="image-20201201183604784" style="zoom:33%;" />
>
> This is what our webpage looks like when executing our code. A reader would have a nightmare pronouncing this. It would simply announce each letter individually as such: H	E	L	L	O 	W	O	R	L	D. 
>
> People with regular vision can piece this mess together and extract a meaning. But someone blind would be very annoyed at the default experience this page produces for them

In order to get the reader to say "Hello World" normally on a reader, we need to overwrite the value entirely and set it ourselves

A) https://codepen.io/NFuego24-7/pen/WNGQbqd (default experience)

B) https://codepen.io/jensimmons/pen/wvwjxJa?editors=1100 (ARIA implemented)

Open these pens on Firefox > R click > Inspect Accessibility Properties

> Experience A looks like this: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201201184324661.png" alt="image-20201201184324661" style="zoom:50%;" />

Experience B looks like this: ![image-20201201184443098](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201201184443098.png)

"ARIA hidden equals true" (the main change from A to B) removes that element and all of its children from the accessibility tree. It's still in the DOM tree. But for the purposes of assistive devices it's gone.

> ** I did not harp on the ARIA syntax in this lesson for a specific reason. ARIA is a vast concept in and of itself, and could be a course on its own. The syntax is not important, since when the time comes, I will look up how to make anything I build more accessible to the differently abled. The main purpose of this lesson was to demonstrate the need



### Common Practices in HTML

- You can write your element tags in lowercase or upper case. 
  That being said, it is common practice to use lower case, and it will reduce overall ridicule. Lmao
- Some elements are shorter than others- due to how conserving characters used to matter back in the dark ages of computer programming. Most newly developed elements use full words for clarity
- Most modern elements involve closing tags, but some older ones don't. To compensate, people like to use forward slash on the right side of a singular tag to show that a tag is opened and closed all in one go. 

```html
<p> 
I can use a forward slash on my tag <br/>
Or i can choose not to <br>
It doesn't change anything or matter, unless you're really anal about it 
</p>
```

![image-20201201191108418](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201201191108418.png)



### Weird Characters

As seen in the "Code, Pre, and BR" lesson, HTML will try to execute words that match its syntax, even when we are simply trying to display it regularly as content.

Content management systems like WordPress or Markdown tools may automatically handle this. When they don't, fix the problem yourself by using CHARACTER ENTITIES- we have a chart and a dedicated section for it on this doc.

Oftentimes you can simply copy paste these strange characters from the web, but character entities is one solution to not having a symbol on your keyboard, or HTML being a bitch and trying to execute shit it shouldn't



### Non Breaking Space

- Normally, spaces provide opportunities for lines of text to wrap. The words stay whole, and when there's not enough room for a sentence, the sentence will break and continue on the next line. 

- It looks for any space where there's a space between words- a normal space. 

- But we can insert what's called a non breaking space between two words, instead of a regular space, and the browser will know not to break the line there. 


Let's say I want my name to be in a phrase and to never have my first name on a separate line from my last name, Bustamante. I can type the following for non breaking space, between my first and last names, and the line will never break there. 

```html
Jason&nbsp;Bustamante
```

This character entity can also be used to add in extra spaces between words. HTML by default only allows 1 space between words, despite the spacing you type. That is, unless you use pre-tags +

```html
For&nbsp;&nbsp;&nbsp;&nbsp;
whatever&nbsp;&nbsp;&nbsp;&nbsp;
reason&nbsp;&nbsp;&nbsp;&nbsp;
I chose to quadruple space the first half of that sentence
```

![image-20201201200100272](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201201200100272.png)



# CHAPTER 4: LINKING AND NAVIGATION



### Absolute Links

- To make certain webpage items take you to a new URL, we use anchor tags along with href attributes
- The content within the anchor tags will be the clickable item that functions as an external weblink. This can be text, images, both...etc
- Try to keep the https:// there. In modern browsers it may not matter, but it's better to play it safe when you are dealing with ABSOLUTE URLS- links that point you specifically to 1 webpage

EXAMPLE 1: CREATE 2 TEXT WEBLINKS

```html
<a href="https://example.com/"> This is a text weblink </a> <br/>

<p> 
    This second link example <a href="https://example.com/"> is placed in the middle 	 </a> of a regular phrase
</p> 
```

![image-20201202104635362](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201202104635362.png)



EXAMPLE 2: CREATE A WEBLINK THROUGH AN IMAGE

Simply wrap the 2 anchor tags around a singular image tag. See formula below

```html
<p><a href="WEBLINK"><img src="IMAGELINK"></a></p>
```



EXAMPLE 3: CREATE A WEBLINK FOR A CLICKABLE TEASER

Our teaser-in our very early stages- is just a picture above a headline which is above a regular text explanation

```html
<!DOCTYPE html>
<html>
<p>This is some text above the teaser***</p>
<article>
  <a href="https://example.com">
    <img src="https://tinyurl.com/y3ycfl3e">
    <h2>Title of an article</h2>
    <p>Some teaser text that makes you want to click.</p>
  </a>
</article>
</html>
```

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201202191545396.png" alt="image-20201202191545396" style="zoom: 67%;" />
>
> Clicking on any of the anchors tags' content will take you too example.com
> This includes the picture itself, the title, and the text



### Relative Links & File Trees

- If you want your weblink to take someone to a URL that is on the domain you're working on, it makes more sense to use a relative URL instead of an absolute one
- This is especially useful when you're working with tools like WordPress or 
  Square-Space

One very important scenario when relative links are key is when you are testing websites on different servers. These will inevitably change the URLs, so if we chose absolute links we'd be in trouble. 

We're working on a local server...so we'll point to the local copy of each HTML file instead

#### Path Syntax

File path starter meanings:

```
Start your path at the...
/ 		root folder of file system
./ 		current folder 
../ 	parent folder of current file
```

RELATIVE VS ABSOLUTE FILE PATHS:

- An absolute path directs you to a file location starting at the root folder 
  (begins with `/`) 
- A relative path directs you to a file location starting at the current directory
  (begins with `./` or `../`)

It is best practice to use relative file paths (if possible).

- With relative file paths, your web pages will not be bound to your current base URL. 
- All links will work on your own computer (localhost) as well as on your current public domain and your future public domains

#### File Path Example

EXAMPLE: Start at styles.css and provide a file path to logo.gif 

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201202200227217.png" alt="image-20201202200227217" style="zoom:70%;" /> 	Relative route: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201202212130051.png" alt="image-20201202212130051" style="zoom:70%;" />  

Absolute File Path => `/images/logo.gif`   (preferred)
Start from the root directory "Awesome Dogs"
Go deeper into the images folder, then reach logo.gif

Relative File Path => `../images/logo.gif`
../ brings us to the parent folder "Awesome Dogs" 
From there, go into the images folder then access logo.gif

For the record, "CSS" is the current folder of styles.css- it's not the parent folder



#### index.html Trick

- When a relative link opens up a folder as its final action, HTML automatically looks for a file named index.html then opens it up

- This allows us to avoid writing the last part of our relative link, as long as we have a file in the folder named index.html (shorter and neater code)

- Using this trick makes the final / superfluous as well

This only works with HTML files, so don't try it with CSS or images***

```html
<a href="/people/index.html">
<a href="/people/">
<a href="/people">

These 3 all open up the same link
That is, the index.html file within the "people" folder
```



#### Advanced Considerations

Choose between absolute and relative links using the logic found here. The choice between the 2 may even affect your website speed or search engine results 
[What Is the Difference Between a Relative and an Absolute URL? (seoclarity.net)](https://www.seoclarity.net/resources/knowledgebase/difference-relative-absolute-url-15325/)



### Navigation Bars

- This lesson involves 3 examples of commonly used navigation bars. The appearance of any of these will change depending on what you want for your site. 

- Only example 1 uses CSS in conjunction with HTML, but combining the 2 gives us much more stylistic options

#### EXAMPLE 1: Wrapped Navigation Bar

https://codepen.io/jensimmons/pen/rNBvqKL?editors=1100

![image-20201202214544115](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201202214544115.png) ![image-20201202215340530](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201202215340530.png)

```HTML
<nav>
  <ul class="navbar">
    <li><a href="/">Home</a></li>
    <li><a href="/people">People</a></li>
    <li><a href="/prices">Prices</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<!-- Only the HTML is shown in our notes here. Some CSS is required to create image 1
Without CSS, the default navbar looks like image 2-->
```

- The nav element is for marking up navigation. It tells the browser which sets of links are part of the site navigation. 
- We don't use it all the time, just for major blocks of navigational links

Notice how the wrapped navigation bar is simply just an unordered list with the list items being anchor tags 

#### ARIA Integration into EX.1

```HTML
<nav role="navigation" aria-label="main menu"> </nav>
<!-- This is what the nav tagS look like when you involve ARIA roles-->
```

- I want screen readers and other assistive devices to also know that this is the main menu for the site, so I'm going to add a few attributes to convey the purpose of this navigation. 
- We can add role equals navigation to the nav element. It's an aria role that is perfect for marking the main navigation of the page. It adds the extra kind of importance that's conveyed to other people visually through graphic design. 
- I also add an aria label of main menu. That provides a label that can be read aloud by the screen reader to tell people what this is and to give them more context. Main menu are the words that I've chosen. We could say primary navigation or whatever we want
- There are many other ways to markup the main navigation- some of which may even be better choices depending on the scenario



#### EXAMPLE 2: Breadcrumb Trail Navigation Bar

https://codepen.io/jensimmons/pen/dybKOxm?editors=1100

- Since a breadcrumb trail is sequential, we'll use an ordered list this time
- The only new addition is the class attribute being set to "breadcrumbs" for the ordered list's first tag

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumbs">
    <li> <a href="/">Home</a> </li>
    <li> <a href="/people">Blog</a> </li>
    <li> <a href="/contact">March</a> </li>
    <li> March 9th Update  </li>
  </ol>
</nav>
<!-- Only the HTML is shown in our notes here, again. Extra CSS involved
```

![image-20201202221616170](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201202221616170.png)



#### EXAMPLE: Footer Links to Extra Content

https://codepen.io/jensimmons/pen/vYBrgYz?editors=1100

![image-20201202223545720](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201202223545720.png)

You've probably seen the bottom of certain websites that have links to documents involving user agreements, copyright law...etc

These aren't really navigation bars, so we'll use footer tags to enwrap this set of links instead

```html
<footer>
  <a href="/about/privacy">Privacy Policy</a>
  <a href="/about/legal">Terms of Service</a>
</footer>
<!-- Only the HTML is shown in our notes here, again. Extra CSS involved
```



# CHAPTER 5: IMAGES AND GRAPHICS



### Creating an HTML Doc Locally +

- A generic starting point for an HTML document. Can use notepad to type your syntax out, but there are several HTML editors that help speed things along and help visualize things a bit easier. Tried Notepad++ first, and it's not the best

  [5 Best Free HTML Editor Software Tools for Your Site (capterra.com)](https://blog.capterra.com/best-free-html-editors/)

- Be sure to save as an HTML filetype. Add what you want, make changes, then save. You can open this doc through any browser

- To view changes, save the document, then refresh the browser page

```html
<!DOCTYPE html>

<html>

<head> 	
	<title>   </title>		
</head>


<body> 

</body>

</html>
```



### Inserting and Styling Images 

#### Image Locations

Code pen does not allow free users to upload photos. It's fine- we should know how to set up web environments anyway. Have a method for uploading photos set up

1. Have a static folder where you plan on storing all the images you'll use for your web dev pursuits. The way we call upon images in HTML uses file explorer URL's

2. An alternative is using image addresses for pics we find online. I suspect that problems will arise if they go down however. So upload them to drive, or [Postimages — free image hosting / image upload](https://postimages.org/)

- Not all sites that let you store photos leave them up for eternity. Be careful

#### Using Image Tags

- Upload your photo to Post-Image > right click it > Copy image link
- The image element is inline, so place it anywhere

```html
<img src=
"https://i.postimg.cc/YqqYdwRV/117185595-637418086899080-3375952128250554987-o.jpg" alt= "Oopsie. No image found" width:1000 height:1000>
```

> ```
> The 4 Attributes every IMG tag should have
> 
> src: Stands for source. Use image links in quotations
> 
> alt: The phrase in quotations is the error message if the picture fails to open. But is also what the screen reader says to a handicapped person experiencing our site
> 
> width/height: Self explanatory. Find exact value using software like photoshop
> 
> There is a way to set the image size using HTML using the style attribute. That being said, it is inferior to using CSS. We can learn how to resize photos later
> ```



### Official Image Lesson

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201202230006728.png" alt="image-20201202230006728" style="zoom:50%;" />

- There are instances where having an alt message is unnecessary. In the above example, we see the company name being Happy Dog Daycare

- The logo is a happy dog. If our alt message was "happy dog picture", then the reader would say this to our blind users: "Happy dog picture. Happy dog daycare"

- To avoid redundancy, leave the content in quotations for the alt attribute blank. Make sure to still include the alt attribute however. Or else the reader might just read the image name, which'd be equally annoying

  

#### Increasing Site Performance

- Websites sometimes lag or fail to load images quickly as you scroll down them. A contributing factor to this is coders not use the height and width attributes for their image tags
- The machine needs to extract size information after downloading the photo. Specifying the width and size attributes our computer the dimensions directly- it helps speed things along

![image-20201202231714645](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201202231714645.png)

External software can help you figure out the exact size of an image. Adobe Photoshop CS6 has a build in IMG dimension finder in it. Just hit. ALT-CTRL-I or go from "Images tab" to "Image Size"

```html
<img src=
"https://i.postimg.cc/YqqYdwRV/117185595-637418086899080-3375952128250554987-o.jpg" alt= "YuGiOh Meme" width:1000 height:1000>
```



### Image Formats

- To place an image on the web, a file format that the browser will recognize must be chosen. We have several options, and people are continuously inventing new ones to find the perfect balance between having a small file size while delivering gorgeous looking images
- Managing to squeeze a lot of data into a small file size means we will have nice looking photos that download fairly fast. If the file size is too big, your website will load up very slowly and it will eat through people's data plans
- Formats use different techniques to compress images-each with their own pros and cons. The most popular 4 are GIF, SVG, JPG, PNG. Each is better at compressing a certain kind of image while being bad at compressing others

#### TLDR: 

A) gif for small animated shorts and large images with 1 color

B) SVG for large scalable things that must be high resolution. Use whenever possible,      especially for logos and icons

C) JPG is a typical choice for photographs

D) PNG is usually better for photographs involving some transparency. Test b/t this and PNG if SVG is not an option

<u>GIF</u>

- Good at compressing illustrations that have large areas of a singular color

- The go-to choice for small movies and short animations

  

- Unfortunately has a limited range of color space- it can only displace 256 colors which makes the animatic look grainy, pixelated, and old school. Makes it a poor choice for photos unless you're deliberately going for a retro look

- The edges between gif's transparent color and opaque colors are very jagged

<u>SVG</u> (Scalable Vector Graphic)

- These are vector files, and not files made out of pixels. Since they're made out of vectors and math, the images can scale to any size without a drop in quality
- The file sizes are very small, so if you have the option to use an SVG, you definitely should. These are excellent for logos and icons
- SVG is actually an entirely separate programming language- and there are plenty of courses based on it. For now, we can export SVG files from Illustrator, Sketch, or other vector graphics programs, and handle them much like you handle any of the other file formats on the web. 

JPG

- JPG is known for being a great format for compressing photographs. Most digital cameras in fact save photos that you shoot as JPG files
- When you put a JPG image on the web, you want to make sure that either a human or robot resizes the image to an appropriate physical size and compresses it for the web. Don't just stick a 5000pxl wide, half compressed jpg on your site- it'll take a lot of data to download and your site will be slow AF
- JPGs can be compressed to much smaller sizes, by simplifying the color information in the file. You can pick a balance between the quality and the file size. You can do that manually or rely on software on your web service to handle the task.

PNG

- A good solution when you have a photograph and you need part of the photo to be transparent
- The PNG sometimes does a better job than a GIF at compressing the kind of images that the GIF format likes, and sometimes it does a better job than a JPG than compressing the kind of images that the JPG format likes, but not always. 

The best way to find out how is to try out the options that make sense depending on the scenario- see which results t=in the smaller file with a higher resolution.



### Responsive Images Based on Screen Resolution

#### The Core Dilemma 

- One image file can be shown at any size. But there's a problem. A big, high resolution image contains millions of pixels. And all that data can consume a lot of time/data. We don't want to deliver unneeded high resolution data to small screens. 
- Instead, maybe we should just make all of our images much, much smaller. Physically smaller, less colored data, fewer pixels, more compressed, that will work well for a smaller screen. But then if we send that file to everybody, people with big desktop monitors won't get to see a large, glorious photo. They'll get a low quality photo blown up really big.

Sometimes, we want to display a big, beautiful, high resolution image for people with big screens and then, shrink it way down for people on phones, on small screens. CSS can do this

#### The Solution is a Variety of Choices

- Use HTML to deliver copies of the same image file in different resolutions. We can list them as a set of options in our HTML and let the browser decide which image to download. 
- It can do so in coordination with the operating system while taking the device hardware capabilities (pixel density) and the network speed into account as well. 

#### Image Resolution Optimization Demo

All 4 images shown regularly: https://codepen.io/jensimmons/pen/jONeawJ

Asking browser to show a 1X photo, then the best possible choice for our screen:
https://codepen.io/jensimmons/pen/QWLxgMy?editors=1000

```html
<!-- 1X photo below. Noticably low rez -->
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-480.jpg" 
     alt="shiny black dog looking pensive" 
     width="480" height="360">

<!-- 2, 3 or 4X photo below. Looks much better b/c browser selects the best choice-->
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-480.jpg" 
     alt="shiny black dog looking pensive" 
     width="480" height="360"
     
     srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-960.jpg 2x, 
	   	  	 https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-1440.jpg 3x, 
		 	 https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-1920.jpg 4x"
     >
<!-- THERE IS SOME CSS INVOLVED. Click URL for full syntax needed for this-->
```

> - The 1X photo is just the default resolution photo expressed using image tags normally
> - The 2X 3X 4X photos all have an additional SRCSET attribute. Note that all 3 are expressed at the same time within one IMG tag 
> - The photos' pixel widths are what make them different. Look at how our options are 480pxl(1X) 960pxl(2X) 1440pxl(3X) 1920pxl(4X)
>
> Do not forget the space between the image URL and the resolution. Then put a comma before listing the next option



### Responsive Images Based on Pixel Width 

- In the previous lesson, we specified the screen type each image option was meant for (1X, 2X, 3X, 4X) when using the SRCSET attribute. 
- There's an alternate method that selects photos based on the allotted space's pixel width

- This is not going to pick the right size image for the layout that you have. It's choosing the image based on an assumption that you need the image to be 100% of the viewport width
- This means that if you slide the cope pen view screen back and forth, the image will constantly resize itself. Try it out! 

```html
<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-480.jpg" 
	 srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-480.jpg  480w, 
	   	  	 https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-960.jpg  960w, 
	   	  	 https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-1440.jpg 1440w, 
		 	 https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog-1920.jpg 1920w" 
		 alt="shiny black dog looking pensive" 
		 width="480" height="360">
>
```

```CSS
html { margin: 0 4em; }
img { display: block;
	  margin: 4rem 0;
      width: 100%;
	  height: auto; }
@media (max-width: 500px) {
  html { margin: 0 2em; }
  img { margin: 2rem 0; } }
```



### Source Element

In the previous lesson, we learned how to swap out different resolution images depending on which screen is being used. 

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201204110517177.png" alt="image-20201204110517177" style="zoom:67%;" />
>
> The photo for a wide screen focus on the dog and her surrounding field. 
> The second pic only focuses on her face

- In other scenarios, it may be best to use a separate photo entirely. For a flat screen, we'll need a short/wide photo. For a cellphone, you'd need something tall/thin

- We will learn how to set the boundary for when an alternative photo should be used. "If the allotted space is over 600 pixels wide, use image 1"

  

#### EXAMPLE 1: Switching b/t 2 Photos

```html
<picture>
  <source 
   media="(min-width:600px)" 
   srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-720.jpg">
    
  <source 
   srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-cropped-320.jpg">
    
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-480.jpg"
       width="480" height="360"
       alt="black dog lying in the sun" >
</picture>

<!-- MIN-WIDTH LOGIC:
Use the default picture in srcset 1 above and beyond the minumum 600 pixels
<!-- MAX-WIDTH LOGIC:
Use the default picture in srcset 1 below and up to the maximum 600 pixels
```

```css
html { margin: 0 1em; }
img { display: block;
	  margin: 2rem 0;
      width: 100%;
	  height: auto; }
.half-width { width: 50%; }
```

1. The image tag is typed out normally. SRC, width/height, alt attributes used
2. 2 source tags are used above the IMG tag. The 2nd one provides the browser a cropped image for tall screens. The first one provides the default image for flat screens. However, the first on has an additional MEDIA attribute that allows us to set the boundary line

3. Picture tags are wrapped around all of this

   

#### EXAMPLE 2: Switching b/t 2 Sets of Photos

EX 1: 1 picture if below boundary. 1 other picture if over boundary
EX 2: 1 set of pics if

 before boundary. Other set of pics if after boundary.
	  Select the best choice out of all options within the set

```html
<picture>
  <source 
   media="(min-width:600px)"
   srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-320.jpg  320w,
           https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-480.jpg  480w, 
           https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-720.jpg  720w,
           https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-960.jpg  960w, 
           https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-1440.jpg 1440w, 
           https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-1920.jpg 1920w" >
  <source 
   srcset=
   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-cropped-320.jpg 320w,
    https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-cropped-480.jpg 480w, 
    https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-cropped-720.jpg 720w,
    https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-cropped-960.jpg 960w" >
    
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/dog2-480.jpg" 
       alt="smiling black dog"
       height="360px" width="480px">
</picture>
```

- The only difference is that we have more than one picture in each SRCSET 

- We also use the Responsive Image Pixel Width lesson's example code here

  

#### How this works IRL

- We are sliding our code pen screens to test out how the browser switches between photos based on the allotted space. Normal users will usually be looking at a static screen- so their browsers won't need to download new photos much

- Us humans don't usually upload 6 different variations of the same photos to use as options. This process is automated, and some coder usually helps machines to create them. 

  

### Figure and Fig Caption

- Let's learn how to add captions to images we put on our webpages. 
- You have the option to use generic div tags for this, but it conveys more semantic meaning to use figure and fig caption tags instead. ARIA users and coders looking at your syntax will be grateful

```html
<figure>
	<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/maggie2.png" 		 	 width="960" height="720" alt="shiny black dog in the sun">

  	<figcaption>Maggie the dog enjoys resting in a field, after a long day of chasing 	  squirrels.</figcaption>
</figure>
```

```css
html { font-family: Lora, Georgia, serif; 
       margin: 2em;
  	   font-size: 170%;
       line-height: 1.5; }
figure { }
figcaption { font-style: italic; }
img { width: 100%;
  	  height: auto; }
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201204130516397.png" alt="image-20201204130516397" style="zoom:50%;" />



# CHAPTER 6: MEDIA



### Audio



#### EXAMPLE 1: Local Audio File with Player Controls

- You can create your own custom controls using JS, but today we'll use browser defaults
- If playing a local file on your hard drive, don't use code pen.

```html
<audio controls src="YoutubeDL/MP3's/Hero.mp3"> </audio>
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201204201123434.png" alt="image-20201204201123434" style="zoom: 67%;" />![image-20201204211621889](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201204211621889.png)

- The controls attribute creates a mini player
- The "Hero.mp3" file is in a folder named MP3's- which is in a parent folder called YoutubeDL. This is on my desktop

#### EXAMPLE 2: Internet-Hosted Audio File 

Oddly enough, hosting audio files online is pretty tough when compared to video hosting. Most sites avoid creating a Youtube-like site for this due to the widespread piracy of music

Solution: Turn an MP3 into an MP4 with a still image then host on Youtube
http://www.digitalfamily.com/faq/how-do-you-insert-audio-files-into-a-web-page-and-where-can-you-host-audio-files-online/

#### EXAMPLE 3: Offer Multiple Local Options

- The mainstream file choice for audio files is an mp3. Years ago, a format called OGG gave the mp3 some competition-but it never caught on due to compatibility issues on certain platforms
- It's good to know how to offer the browser multiple options for when new file formats pop up. The browser automatically selects the format it

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

Probably won't use this for a while. I tried using OGG files, but I encountered so many problems so damn quickly. Never touching them again unless paid to do so



### Disclaimer: Video & Fig Caption Lessons

I heavily skimmed both of these lessons for a specific reason

#### Why I Skimmed the Video Lesson

1. The video element can easily be replaced by embedding Youtube into a website instead. You can avoid creating a custom player or using the limited one built into a browser. Will use this for future personal projects 
2. I know how to play videos on webpages when the mp4 or webm files are stored on a local hard drive. But, I don't know how to do so when the videos are stored online. Anything I look up that isn't hours long refers me to the embedded Youtube method via iframes. 
3. Had a lot of compatibility problems using OGG files

#### Why I Skimmed the Captions Lesson

1. Youtube has it's own methods and tools for providing captions. This way is much faster than learning about how WebVTT files work

   

### Video Element

Straight up, you probably won't use the video element often. HTML doesn't have a built in feature that lets the browser select between a list of possible videos in different resolutions. Here's why:

- Perhaps a large screen wants to watch in 4K and a cellphone prefers 480P. BUT, what if you're watching a video with slow connection, and then your net speed goes up once you change locations? 
- You'd like to have the ability to switch resolutions anytime you want. This requires adaptive bitrate streaming. Coders often embed code from a video hosting service to provide this basic functionality

#### Video File Types

Compression codecs are needed to host encoded video due to their large sizes. They compress MP4 files so they can be sent via the internet using less bandwidth. The more compressed it is, the shittier the resolution after the files are decompressed. You have several options available, each with pros and cons

H.264: Most widely used, but not open source, and very expensive
WebM: It's free! So...
AV1: Open source, and apparently better than H.264

#### EXAMPLE 1: Video + Controls w/ 1 Option

```html
<video src="YoutubeDL/MP4's/M2K.mp4" controls> </video>
```



#### EXAMPLE 2: Video + Controls w/ 2 Options

- We'll use video hosting sites as the source this time. 
- Embedding other media through i-frames is an option you'll choose over this one if using hosting sites like Youtube (later lesson)

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



### Captions and Subtitles (MayB)

- We can use the track element inside of a pair of video tags to provide the captions for a video
- Once again, the example given in this tutorial uses internet-hosted videos and WebVTT files for the caption data. 
- Youtube allows us to provide captions via VTT files using their own unique tools/processes. This is likely what you'll be using later on- so just skim this lesson 

#### EX 1: Offering Captions in 2 Possible Languages

- Track element is used along with several attributes to tell the browser the info it needs. Descriptions of each below

![image-20201205151230990](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201205151230990.png)

```html
<video controls>
  <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.480p.vp9.webm" 
    type="video/webm">
  <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.480p.h264.mp4" 
    type="video/mp4">
  
  <track src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.vtt"
         kind="captions"
         label="English"
         srclang="en"
         default>
  
   <track src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/moonwalk.es-la.es.vtt"
         kind="subtitles"
         label="Español"
         srclang="es">
  
  <p>This would be a video of a moonwalk, if your device supported playing this video.</p>
</video>
```

> src: Points browser to the WebVTT file
> kind: Tells browser the content in the src is captions
> label: Shows "English" label in the player so you can see what lang the CC is 
> srclang: Tells browser exactly what language the file is in
> default: Tells browser to use this tag and its contents by default when a user 		 needs captions



#### Other Attribute Options

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201205153724383.png" alt="image-20201205153724383" style="zoom:46%;" />
>
> We could create a WebVTT file that has descriptive information about what's happening visually in the video, and use kind=descriptions. This gives people the option of playing a track that reads aloud descriptions of what you miss if you aren't looking at the video. For instance, the astronaut jumps off the ladder and bounces a bit as he hits the ground. This makes a video more accessible to the blind and the visually impaired.

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201205154156738.png" alt="image-20201205154156738" style="zoom:50%;" />
>
> Kind=chapters gives us a way to provide a text file that lists the chapters in the video, giving users a way to jump from one section in the video to another



### Embedding other Media via IFRAMES

1. Go to a Youtube video > Share > Embed > Enable privacy enhanced mode > Copy syntax
2. Paste the code into your webpage, and you should have a player visible in it

```html
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4hu0oPxYMM4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

You don't need to understand everything about this code, but we do know enough to make some changes if desired. 

Width/height: Changes the player size when fullscreen is not enabled (recommended to use the default size to keep things looking good)

src: Directs browser to the exact Youtube video we want to showcase



#### Making Captions for a Youtube Video

Figure it out when it's time, champ. 
Howdy! From Dec 5th, 2020 Jason

https://www.youtube.com/watch?v=mx3Ff_AD0Zk&ab_channel=HowtoDigital

https://mediaaccess.org.au/web/how-to-caption-a-youtube-video



#### Security Considerations

If you're using a CMS that someone else set up, like it's your job to post content on a WordPress website, there's a good chance that you can't just paste some random embed code from another website into your system. 

There's a good chance that the CMS is set up with a different way to allow a URL or a short code from a specifically white-labeled source. And you'll want to research how to specifically embed Youtube videos in your chosen Content Management System

If you're the person building a site, you probably want to think about how security will work when it comes to the iframe element. If a bunch of different people are going to be entering content into a system, you're not going to want to just allow all iframes. Think about the security. If it's just you, posting your own videos on your own website, then it will be fine.
^^^ Unsure why this would be a bad thing. Ask Shadid

### Supporting Languages- Lang Attribute

#### The Importance of Specifying Language

Specifying the language our content is in is important for the following reasons:

- Search engines will know when to list our sites in which language. 
- The right dictionaries will show up for the spell checkers. When content is read aloud by a browser, it's more likely that the words will get pronounced properly.



#### How-to Set Languages for Content

- If the entire site consists of content in 1 language, then you can simply add the lang attribute to the HTML element-which wraps around everything. You may actually only need to set this up once-in a template file you reuse for most of your projects. Just be sure not to forget

- 90% of your site may be US-English while 1 paragraph or sentence is in Mexican Spanish. We can add the lang attribute to the tags surrounding them. The lang attribute is universal. 

- There are variations of the same language, like en-US and en-GB. This can change robotic pronunciation, whether a word is spelt as color/colour, which dictionary to refer to...etc
- Specify the direction with the dir attribute- also universal. Most languages in the world flow from a left-to-right direction in a horizontal direction, but some flow from right to left (like Arabic) 

```html
<html lang="en-GB" dir="ltr">
    The way to spell english in Spanish is... <span lang=es> inglés </span>
    <p lang="es-mx"> Hola pendejos! </p>
</html>

<!--- https://www.w3schools.com/tags/ref_language_codes.asp for all the language abbreviations

Keep in mind the -GB and -MX. They are not mandatory, but are generally a good idea to include
```



When you mix content, you want to mark each phrase with the change of directions. 



#### Setting the Character Set via UTF-8

The character set is basically a massive alphabet that includes letters, numbers, and symbols from languages worldwide. Unicode(UTF-8) is the universal encoding standard for these characters- and tries to be as inclusive as possible. They even support braille, sign language, musical notation, and emojis

```html
<head>
    <meta charset="UTF-8">
</head>
<!--- Way more goes into the head than this. FYI
```

- The character set goes inside a singular meta tag which is nested inside of 2 head tags

### Div and Span

- Div and Span both do the same thing-nothing, until JS or CSS forces them to. It basically shoves content into a container without any meaningful label-due to how generic the tags are. You can then do whatever you want with it  
- In the below example, the div has a box tag. CSS makes all the content within the div tags be wrapped inside of a box. It also shades the rest of the background-which we'll learn how to do in our CSS course

```html
<article lang="en">
  <h1>This is the headline</h1>
    
  <div class="box">
    <p>The first paragraph.</p>
    <p>Some text in a second paragraph.</p>
    <p>Third paragraph. <span lang="es"> Esta oración está en español.</span> Some of        this text is in another language.</p>
    <p>Fourth paragraph.</p>
  </div>
    
</article>
```

```css
html {
  font-family: Lora, Georgia, serif; 
  margin: 2em;
  font-size: 170%;
  line-height: 1.5;
  background-color: #dcdcd1;
}
.box {
  background-color: white;
  padding: 0.1em 1em;
}
.bilingual {
  font-style: italic;
}
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201205225137892.png" alt="image-20201205225137892" style="zoom:60%;" />

HTML 5 introduced new tags to convey several new semantic meanings. Before 2010. people used to use the div tags for practically anything. Some people wrap titles in divs, make spans pretend to be buttons, separate/group content with div...etc

Since HTML does not throw people errors for this, many coders still use div for everything. That being said, it's not a good thing. It makes navigating your code much harder when all the tags look the same and convey no meaning whatsoever. Use it as a last resort to group elements

# CHAPTER 8- ASSEMBLING YOUR KNOWLEDGE



### HTML Page Templates

#### How Webpages Compile themselves

No matter how the website is engineered, the web itself works this way every time. A user goes to a URL, hitting that URL sends a request for an HTML file first, a server returns a single HTML file, the browser reads the HTML file and does what it says. Each user gets a custom experience depending on several factors (internet speed, location, screen size...etc)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201205231009874.png" alt="image-20201205231009874" style="zoom:30%;" />

At the top, there's a list of other files- text files, JS, images, video, audio, advertisements. The browser immediately requests them and once it has those files, it starts to do the things that those files tell it to do. A moment later, we have a web page. So let's take a look at the basic structure of the whole HTML file.



#### Creating Basic HTML File Templates

1. Doctype declaration: Declares what era this HTML file is from. Modern files need modern practices applied to them
2. HTML tags- Place them after the doctype declaration. These wrap around literally everything else in your HTML file- their purpose is to tell the browser that everything inside is indeed HTML. Include a lang and dir attribute to specify the main webpage language
3. Head Element- Contains info the browser needs to know, but it won't be displayed on the webpage (metadata, often delivered via the meta tag)
4. Body Element- All the content on the webpage, each with their own elements nested inside this parent pair

```html
<!DOCTYPE html>
<html lang="en">
    
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document Tab Name***</title>
</head>
    
<body> All website content goes here***  </body>
</html>

```



### Meta Element

The meta element can be used to define all kinds of settings. What follows are a few example-explained loosely. Look up what metadata is necessary when you start building your personal projects.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--- ^^ Tells browser the layout's been morphed to fit small screens--->

<meta name="description" content="Site descrip showing search engine results">
    <!--- ^^ Site description. If a sentence from your website gets pulled from a google search, it's pulling from a meta tag--->
```

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201206001507923.png" alt="image-20201206001507923" style="zoom:60%;" />
>
> There are many more things the meta tag can do, but I do not have a strong enough background to understand all the syntax and filetypes being rapid fired at me right now. When it's time, return here and see what must be specified



### Link Element

Link Element: Links to a range of other assets we wish to load- like CSS files, fonts, and favicon

Rel Attribute: Tells the browser what kind of asset it is- if used on the link element

href Attribute: Provides a URL to the asset

```html
<link href="main.css" rel="stylesheet">
<link rel="icon" href="favicon.ico">
<link rel="preload" href="myFont.woff2" as="font" type="font/woff2"
      crossorigin="anonymous"
```



#### File Upload Order

The browser will load the files in the order in which they're listed. Put things you want to load first at the top. Things that aren't as important or that won't get used right away, they can go further down. 

The last commonly used element that goes into an HTML document's head is the script tag. This tells the browser to load a JavaScript file. Actually, a script tag doesn't have to go into the HTML head. Frequently, people put it at the end of an HTML document so the browser loads JavaScript after everything else has loaded. But sometimes it is included in the head. The HTML head is a place to get everything connected and set up to make sure other assets are loaded and to provide data about the page to other sites and platforms. It's the headquarters for starting out the page right.



### How to Avoid Abusing Div

This lesson's goal is to teach you what tags to use in different situations. We can't have you just spamming the div element over and over. Our code must convey meaning at all costs!

- The main element is used once per page to wrap around the main content on that page. 
- The header, footer, article, section, and aside elements are the five sectioning elements in HTML. They are used together, nested inside of each other in patterns and combinations that give the content of a webpage its true structure.



#### Header Element:

- Most web pages have a header at the top. Maybe with the logo, the site name, the navigation. 

- An article frequently starts with a title, maybe a subtitle, perhaps an author's name, publication date. That can be a header too. 



#### Footer Element:

- The footer element conveys, hey, we have a few extra things to say about this. The fact that it might be displayed up at the top/bottom doesn't matter. It's the semantic meaning that matters, not the visual display. 

- Many webpages end with a footer at the bottom. They can be a lists of links, some copyright info, or extra information about the company 

- Footers don't have to go to the bottom however. Many articles start out with some metadata. A list of hashtags or group of share buttons. That kind of information is actually well-suited for a footer element. Perhaps we include the publication date here instead of as part of the header. 

  

#### Article Element

- The article element just means, hey, this, this by itself, this is a unit of content. Consider this something that stands on its own as a useful or usable thing. 
- It might be a long written article or blog post. It might be a very short snip or teaser card. A tweet or social media post, those can be an articles too
- Perhaps there are no words at all. Perhaps you're marking up an app and somehow each unit of the stuff is best defined as an article. 



#### Section Element

- Section is used to wrap around sections of content. If we have a long essay for instance, that's broken up into chunks with sub headlines, we can use the section element to mark each segment. 
- Or we may have zones on our website. A section towards the top that's about one topic, and another section further down that's about something else. Section is a flexible element that means, okay, let's just start with another thing. 
- Usually each section has its own headline marking the start of a new segment of content. 



#### Aside Element

- Aside is for marking something that's off to the side. Perhaps in a side bar, or any content that's kind of not the main attraction. It could be an inset panel that goes with a big article giving additional information, but isn't quite part of the flow of the article itself. 

- Or advertisements, they are a side thing perhaps best marked as an aside. Again, it's the semantic meaning that matters here, not the position on the page. 

- Layout does convey meaning when looking at the front end of a site. That being said, these HTML elements are a way to transfer that meaning from the graphic design to the marked up content. 




# CHAPTER 9: TABLES 



### When to Use Tables 

- Don't believe people who say that tables in HTML are cancerous to use. The reason this stigma exists is because of how HTML tables used to be created in the era before CSS styling
- The archaic methods they once used were overly complicated, impossible to reuse, and were barely readable for syntax onlookers. Fun fact: HTML Email is still suffering from this issue- there's an opening to invent something!

![image-20201207232028987](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201207232028987.png)

Feel free to use HTML tables any time it makes sense semantically. Use a table to convey a point, organize information, show the relations between content within rows or columns...etc. The data stored in tables don't always have to be text or numbers- they could be images or other things as well



### Building Table Rows

To build tables in HTML, use 4 elements in a specific combination:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201207225102097.png" alt="image-20201207225102097" style="zoom: 80%;" />

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201207225648710.png" alt="image-20201207225648710" style="zoom:67%;" />
>
> Keep in mind that without CSS, the tables don't come out with any lines to separate the rows and columns. 



#### EXAMPLE 1: Creating a Table About Birds

We construct one row of this table in this example. If you wish to add more rows, just use new sets of < tr > tags

![image-20201207230132708](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201207230132708.png)

```html
<table> 
  <tr> 
    <th> Bird </th>
    <th> Color </th>
    <th> Diet </th>
    <th> Photo</th>
  </tr>
  <tr> 
    <td> American Goldfinch </td>
    <td> Yellow </td>
    <td> Mostly seeds </td>
    <td> <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/american-goldfinch.jpg" alt="american-goldfinch" width="360" height="261" > </td>
  </tr>
```

```css
html { margin: 2em;
  	   font-size: 160%;
       line-height: 1.5;}

table.styled { border-collapse: collapse;
  			   text-align: left;
  			   font-family: Avenir, Roboto, Heveltica, sans-serif; }

.styled th { text-align: inherit;
             text-transform: uppercase; }

.styled th, .styled td { border: 1px solid #999;
  						 padding: 0.5em 0.75rem 0.2em;
  						 vertical-align: top; }
.styled img { max-width: 100%;
  			  height: auto; }
```



### Moving Forward

Look up WCAG and ARIA resources to make sure you adhere to the guidelines they've set up

