> CURRENT DECIDED ORDER: 
> Learn 3, 5 → Practice 4 6
> Learn 7, 8 → Practice 9
> Learn 10 → Practice 11
> Learn 12, 13
>
> ![image-20210930015820471](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210930015820471.png)



# ========== BASICS ==========

Next.js is a framework built on top of React, which gives it extra powers (like SASS does for CSS)
You can build large scale production ready React apps with it, all while improving SEO

3 MOST IMPORTANT FEATURES:

![image-20210926023622465](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926023622465.png)

# Basics and Core Features

REACT
A library that focuses on building UI's, but can be used to do more via 3rd party libraries like Router

NEXT.JS
A framework for the React library with more features plus distinct rules for how to write code

- It makes tedious operations in React easier to do, and helps you avoid using 3rd party libraries as much in order to solve common problems 
- For example, Next.js includes routing right out of the box

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210925234232382.png" alt="image-20210925234232382" style="zoom:80%;" />



### Key Feature 1: Built-in Server-side Rendering (Better SEO)

How React Projects are Loaded and Rendered:

When we load a create-react-app project, the HTML document the browser receives is near empty. 
All of the content gets rendered by React on the client side, and only then does it become visible

#### Why it matters for SEO

- The way our content is rendered in vanilla React projects is pretty bad for public-facing websites that you want to be found easily by search engines
- Bots won't crawl through an empty HTML file then recommend it to people

#### Why it Matters for Site Performance

As stated earlier, regular react projects render on the client side.
What happens if we make an http request then? 

- We'd have to do that on the client side, which results in some flickering due to the time delay
- Data fetching only begins once the JS code executed on the client- then we'd have to wait for that request's outcome because the page we requested does not yet contain that data

#### What's Server Side Rendering?

- It's when we convert HTML files on the sever into a fully rendered HTML page before it even reaches the client side. 
- The browser submits a request when you search a URL, and the server responds by sending the client a page that's already finished rendering

It addresses the issues described in earlier subsections, while providing additional benefits for the project once it's in production

- The web crawlers get fully rendered pages, allowing them to recommend your webpage (+1 SEO)
- We fetch data on the server when we make http requests and render finished pages on the client side instead of doing all the work there

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926003229733.png" alt="image-20210926003229733" style="zoom: 67%;" />



### Key Features 2 and 3: File-based Routing + Fullstack Apps

#### Routing Definition 

When we change what's visible on the screen based on the URL we're visiting

- The illusion of having multiple pages 
- We don't actually request new pages- we just render new content on the same HTML file used for every other page on your site

#### React Routing VS Next.js Routing

REACT:
You need to install the React Router package to route while using vanilla React
Once you do, you set up routes using code in your JSX

NEXT.JS
Routing in Next.js does not use code- instead it uses an approach similar to how HTML file trees work

- You have a folder named `pages`, and the file hierarchy determines what gets loaded

- It's easy to understand, and much less work than writing dedicated code for routing

> ​				React			<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926004433097.png" alt="image-20210926004433097" style="zoom:80%;" />		  Next.js			 ![image-20210926004753190](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926004753190.png)

#### Build Fullstack Apps

Next.js lets you add backend code to the Next/React applications you make
You'll need to know a server-side language like Node.js to take advantage of that however

#### Minor Bonus

You never have to type `import React from "react"` again, since Next.js already implements that behind the scenes



### Create Next Projects from Scratch

#### Procedure

You must have Node.js installed

1. Pick a place you want to create a new folder in
   You don't need to define the outer folder yourself like in create-react-app
2. Run the following in your selected location:

```
npx create-next-app			→ 	answer prompts and then a new folder appears
```

3. Run `git init` in the new folder that was just produced
4. To start the development preview

```
npm run dev
```

#### The pre-made NPM Commands

```json
  "scripts": {
    "dev": "next dev",		// open a development preview
    "build": "next build",	// compress files for final build
    "start": "next start" 
    // open a preview of the built version of your site, hosted on a local server
  },
```



#### .gitignore	(different)

Next projects need to ignore different files than a default React project

```
// .gitnignore
# next.js build output
.next

# dotenv environment variables file (build for Zeit Now)
.env
.env.build

# Dependency directories
node_modules/

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```



### Error Messages

Next.js error messages are different than React error messages

- Personally, I find them to be much more vague and less helpful overall
- Even so, there are some tips that help make using them easier

#### Think with File-Based Routing in Mind

If you're on a URL with the path of `/`, then search for the error on that specific branch
Next.js doesn't show exactly which file your errors originate from

EXAMPLE OF VAGUENESS 

![image-20210930172235236](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210930172235236.png)

We're on localhost:3000, and we try to import a file to `_app.js` that got deleted and no longer exists
In the error message, we see no mention of `_app.js`, but we should estimate a few things

1. We're on localhost:3000, so `_app.js` or `page/index.js` are the 2 most likely sources of error
2. Next.js does at least tell us the nature of the problem (no such file exists)



### Using React Components and Props in the Pages Folder

You do not need to define React components inside the pages folder 

- Feel free to define them in a different folder and organize them any way you wish
  Import them into the js files inside the Pages folder whenever you want to render their content
- Feel free to create new JSX in the Page folder JS files as well

> [Jason2B3/next-practice (github.com)](https://github.com/Jason2B3/next-practice)				START: begin!					END: commit 237

#### Starting State of our Project 

> Our React components are inside the components folder:
>
> ![image-20210926222856462](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926222856462.png) ![image-20210926223201391](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926223201391.png) ![image-20210926223245171](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926223245171.png)

Look at MeetupList.js → MeetupItem.js

- The latter receives data via props from MeetupList.js which is higher on the component branch
- At our starting commit there technically is no component branch since neither of these are used to render anything yet- but this should show how they will be used soon

![image-20210926223728084](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926223728084.png)

#### Use React Components in Pages Folder with Props

/pages/index.js

```react
import MeetupList from "../components/meetups/MeetupList" // import comp

const DUMMY_MEETUPS = [ filled with dummy data ];

function HomePage(){
  return <MeetupList meetups={DUMMY_MEETUPS}/> // feed props to MeetupList
}
export default HomePage
```

We give MeetupList.js data through props. 
Then it will give MeetupItem.js data through props since it's already set up to do so

Output:	<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926224116705.png" alt="image-20210926224116705" style="zoom:67%;" />

# Rules to Maintain Security

When working with Next.js, there are certain things you should avoid doing for the sake of security

> SOURCE: https://www.youtube.com/watch?v=dsAalk1NpVk



### Talking to Databases Safely & Where to use fetch()

When it comes to communicating with databases, you're going to need to use fetch() along with API routes- both of which can leak private information if you use them in the wrong place

#### Why its Dangerous to Talk to DB's in the Wrong Place

It is highly insecure to connect your React web app to a database on the client-side

- Since anyone can see what runs on the browser using dev tools, placing your database credentials and SQL / NoSQL queries where someone can edit and view them could lead to problems
- Any code that talks to a database should run on the server-side

EXCEPTIONS: "No-backend" solutions (SDK's)
SDK solutions let you run queries against your database. 

- The part of your code that connects you to a database is not placed in your client side code. 
- You use an API which connects to the backend for you
  Ex. MongoDB Stitch/Cloud/Atlas or whatever it's called now, Firebase SDK

> UNSAFE:        Client-side Code → Database
> SAFE:              Client-side code → SDK solution's API → Database

#### fetch() Location Restrictions

NEVER USE FETCH() IN THE FOLLOWING SITUATIONS

| never fetch() inside...                            | exceptions                                           | correct alternative approach                                 |
| -------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------ |
| client side code to talk to databases specifically | Backend-as-a-service providers like Firebase (SDK's) | Call an API route whose code is server-side and hidden       |
| pre-render methods to call a local API route       | using fetch() on a 3rd party or external API         | Write the server side code inside the pre-render method instead |



#### How to Safely use Credentials to Talk to Databases

> Excerpt from the MongoDB Atlas Chapter:

Due to security rules we must abide by, we cannot simply talk to a database anywhere we want. 

- We use login credentials to tell the DB that we're allowed to access its private information
- These details are in our code, so we must ensure that they're hidden from anyone who knows how the dev tools work
- We can achieve this by placing our credentials inside server-side code
  The following table tells you how to talk to a database depending on where you wish to do so

| talk to database inside... | approach                                                     | details                                                      |
| -------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| a pre-render method        | connect and talk to cloud database directly inside           | use `MongoClient.connect()` and not fetch()                  |
| client-side code           | create an API route that talks to the cloud database using `MongoClient.connect() `and performs CRUD operations based on the request type it receives | `fetch("/api-route/absURL")` inside your client-side code to make a request to your local API |

ONE THING THAT I MAY HAVE GLOSSED OVER:
It may be possible to call an API route inside a pre-render method, but it is not recommended according to the Next.js docs

> https://nextjs.org/docs/basic-features/data-fetching#write-server-side-code-directly
>
> ![image-20211025154906014](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211025154906014.png)

#### Workaround for the Rules

TLDR: Create API routes with backend code that isn't shown to visitors. 

- Write helper functions that use fetch on your local API, then export them to the file with getStaticProps and getServerSideProps
- These helper functions can exist from any location, even the api folder if you want
- If you import a function that only gets used inside one of the aforementioned methods, Next.js will not reveal it on the client side- you're safe!

GACHA:
This works best if your entire project is running on one server
If it isn't, Google what to do (this won't be a problem until you start working professionally)



### What's allowed in Pre-render Methods?

Sources

> [Fetching API routes in pre-render methods](https://nextjs.org/docs/basic-features/data-fetching#:~:text=You%20should%20not%20fetch%20an%20API%20route%20from%20getStaticProps%20%E2%80%94%20instead%2C%20you%20can%20write%20the%20server-side%20code%20directly%20in%20getStaticProps.)
>
> [Workaround B for fetching API Routes inside pre-render methods](https://stackoverflow.com/questions/65752932/internal-api-fetch-with-getserversideprops-next-js#:~:text=Here%27s%20a%20small%20refactor%20example%20that%20allows%20you%20to%20have%20logic%20from%20an%20API%20route%20reused%20in%20getServerSideProps.)

#### Facts Table

| action                  | allowed | exception | workaround                                                   |
| ----------------------- | ------- | --------- | ------------------------------------------------------------ |
| use an async helper ƒ() | yes     | N/A       | N/A                                                          |
| fetch an external API   | yes     | N/A       | N/A                                                          |
| fetch() an API Route    | no      | N/A       | A. Import API route logic to pre-render method<br />B. Fetch your API route inside a helper function, then import that inside getServerSideProps |

Remember if a helper function's used inside a pre-render method and nowhere else, the client side will not receive it- Next.js removes that



### Checking what Client-Side Receives

If you're paranoid about security, use the following tool to check exactly what code the browser gets when you have certain code in your Next.js app

https://next-code-elimination.vercel.app/

![image-20211111180754293](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211111180754293.png)

# Pages and File-based Routing

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211002004727942.png" alt="image-20211002004727942" style="zoom: 80%;" />

### Review: Relative/Absolute URL's

RELATIVE:
They reference files in relation to where you're writing code now (current working directory)
They can have multiple beginnings

- `./` to stay in the current directory, then possibly enter another folder
- `../` to climb 1 level closer to the root level than the current working directory (cwd)
- `~/` to go to 

ABSOLUTE:
They reference files in relation to the root directory of your project folder
Always begins with forward slash `/`

#### Example

![image-20211003063125728](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211003063125728.png)

START: cheese		DESIRED END: bash		(philip and shells are folders... rest are files)

```
Relative Path Possible Answers ▼
./shells/bash		
../philip/shells/bash

Absolute Path ▼
/philip/shells/bash
```

Relative path: `../philip/shells/bash`			
Absolute Path: `/philip/shells/bash`

### How File-based Routing Works

Next.js uses the names of your JS files to decide what components should be rendered when a user searches for a specific path

RESERVED NAMES:

- The `Pages folder` is a name reserved for JS files that will be reserved for routing
- `index.js` is a file name that's reserved for rendering `/` paths with nothing at the end

#### Diagram Explanation

![image-20210930021403789](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210930021403789.png)

#### Example: Static Pages

| path  | renders... |
| ----- | ---------- |
| /     | index.js   |
| /news | news.js    |

​						![image-20210926050535700](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926050535700.png)	 <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926050713759.png" alt="image-20210926050713759" style="zoom:75%;" />

Remember that the JS file name determines the URL path- not the component function's name
news.js is allowed to have a component function named `AnythingElse` 

#### Alternative way to Define a Page (sort of)

You can render news.js with a path of `/news` in a slightly different way (use a sub folder)

- index.js in the news subfolder appears when people search a URL with a `news/` path
- Version 2 is pointless if you only intend to have `/news`, with no possibility of `/news/anythingElse`

Version 1:    ![image-20210926050535700](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926050535700.png)    Version 2:   ![image-20210926051244757](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926051244757.png)

You can also define more pages on the `/news` route with the setup shown on the right
This leads into the topic of nested routes (next subsection)

#### Nested Routes

- Create sub folders nested inside the pages folder if you want to create a route that will have more than one page on it
- For example, if I want a website that has dedicated paths for `/news/today` and `/news/yesterday` then I would make my file tree look like this

| path            | renders           |
| --------------- | ----------------- |
| /news           | news/index.js     |
| /news/today     | news/today.js     |
| /news/yesterday | news/yesterday.js |

![image-20210926051532096](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926051532096.png)

### Dynamic Pages and Folders

#### What we mean by Dynamic

- In React, you've encountered components that get reused multiple times when you dynamically render lists of data 
- `<ExpenseItem>` is considered a dynamically rendered component

> ![image-20210926052727922](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926052727922.png)
>
> If props.expenses is an array with 6 entries, we'll get 6 instances of the <ExpenseItem> component, each rendering the same way but with different data

We can do this in JSX while using Next.js too, but we must address something first

#### Dynamic Pages/Files in Next.js

Each page rendered on our site has a name the path is based on-  and we've hardcoded them till now 
How would we do that for a dynamically rendered list where that would be impractical?

ANSWER: 
Use special syntax when defining a dynamic component

- What's inside the square brackets is up to you
- The brackets are mandatory for telling Next.js that this component will be used more than once
  It acts as a net that catches URL paths that don't have a dedicated js file named for them

TESTS:

| path                | renders...       |
| ------------------- | ---------------- |
| /news               | news/index.js    |
| /news/anything-else | news/[newsId].js |
| /news/today         | news/today.js    |

![image-20210926153129825](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926153129825.png)

#### Dynamic Routes/Folders 

We can make our folder names dynamic in Next.js as well- just name them `[something]`
You can have multiple pages dedicated to this dynamic route as well

| path            | renders        |
| --------------- | -------------- |
| /whatever       | [id]/index.js  |
| /anything/fileB | [id]/fileB.js  |
| /xxx/today      | page not found |

![image-20210926203228500](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926203228500.png)

### Catch-all Pages

Dynamic pages allow you to direct users to pages whose HTML files don't have hardcoded names
Catch-all pages take this a step further

#### Catch-all Pages without Accompanying Dynamic Pages

SCENARIO:

- Catch all page inside a folder
- No dynamic pages are on that same level

CATCH-ALL PAGE BEHAVIOR:
Catch all page acts just like a dynamic page would, with the added benefit of rendering pages for URL paths with more slashes than there are nested folders

EXAMPLE:	![image-20211001181925245](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211001181925245.png)

| path              | renders...                                                   |
| ----------------- | ------------------------------------------------------------ |
| /blog             | `/blog/index.js`                                             |
| /blog/99          | `blog/[...multislash].js`                                    |
| /blog/fire/NFL/kk | `blog/[...multislash].js` <br />  a dynamic page alone would not be caught in this situation<br />  but a catch-all would |

#### Catch-all + Dynamic Pages Together

SCENARIO

- Catch all page inside a folder
- Dynamic page is inside the same folder, on the same nesting level

CATCH-ALL PAGE BEHAVIOR:
It acts like a dynamic page that's reserved for URL's with more paths than we've specified folders for

EXAMPLE:	![image-20211001181348866](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211001181348866.png)

We have a dynamic page set up inside the blog folder named `[blogID].js`
Catch-all page set up inside the blog folder named `[...multislash].js`

TESTS

| path               | renders...                |
| ------------------ | ------------------------- |
| /blog              | `blog/index.js`           |
| /blog/92           | `blog/[blogID].js`        |
| /blog/dfg/2000/hgd | `blog/[...multislash].js` |



### Get URL from Dynamic/Catch-all Pages via useRouter()

If you're using a [name].js file, you won't know what URL path you'll be on when coding inside it.
The Next team created the custom hook `useRouter` to help with that  (functional only)

WARNING: 
This only works inside the component function
There is an alternative method for class based React (look up when necessary)

#### What useRouter Contains

We're using the same file hierarchy from the last picture shown in the previous lesson

[newsId].js		and we're visiting it using the path `/news/sale` when writing this

```react
import { useRouter } from "next/router"; // custom hook from Next team

function DetailPage() {
  const router = useRouter();
  console.log(router)
  const newsId= router.query.newsId 	// could later use to fetch backend data
  return <h1>The Detail Page with a dynamic path of: {newsId}</h1>;
}
export default DetailPage;
```

![image-20210926154916200](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926154916200.png)

LOGS:
I forgot to highlight the `query` KVP, which is important- it directly gives us the dynamic path value
We searched `/news/sale` to reach the following page, and it returns `sale` to us

![image-20210926154208628](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926154208628.png) ![image-20210926154251388](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926154251388.png)

Another dynamic page visited just to verify:

![image-20210926155045811](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926155045811.png)

> File structure:
> ![image-20210930031010173](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210930031010173.png)

#### useRouter() inside Catch-all Page Files

QUICK-REVIEW:
They render pages for URL's with more slashes than folders in our Next.js project are prepared for

> /blog/2020/09/15 would render `[...multislash].js`  :  ![image-20211001182737219](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211001182737219.png)

——————————————————————————————————————————————————————
We can get each expression in between each `/` symbol via useRouter
It will return an array whose expressions each house an expression

EXAMPLE: `[...multislash].js` when we search for `localhost:3000/blog/88/hg`

```react
import { useRouter } from "next/router";

export default function blogID() {
  const router= useRouter();
  console.log(router.query)
  return <div>/blog catch-all page</div>;
}
```

![image-20211001183841264](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211001183841264.png)

### Site-internal Page < Link >

We can't rely on URL searches to get around our site
We need to connect our website's pages to one another, while maintaining our status as a SPA

#### < Link > Component 

This `<Link>` component is different than the one seen while coding with React + Router
React router uses `to=` attributes while the Next.js version uses `href=`

```react
import Link from "next/link";
function News() {
  return (
    <>
      <h1>The "news" path HomePage</h1>
      <ul>
        <li>
          <Link href="/news/today">Visit the news/today page!</Link>
        </li>
        <li>
          <Link href="/weather/tomorrow">
            Visit the weather/tomorrow page!
          </Link>
        </li>
      </ul>
    </>
  );
}

export default News;
```

We start at the file marked with the red dash, and link to the ones with green dashes

​							![image-20210926163303989](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926163303989.png)		![image-20210926163442315](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210926163442315.png) 

#### Avoid < a > Tags for Linking

Just like in regular HTML, you can link one page to another using clickable anchor tags
But you shouldn't in your Next JS projects, at least for site-internal linking

```react
		<li>
          <a href="/news/today">Visit the news/today page!</a>
        </li>
        <li>
          <a href="/weather/tomorrow">
            Visit the weather/tomorrow page!
          </a>
        </li>
```

PROBLEM:
We can't create single page applications using this method, plus we reset all of our states

- The reload symbol on the browser's upper left will turn from an ouroboros symbol to an X briefly before the next page appears (signals that the browser calls upon a new HTML page)
- We lose any Redux or Context API states by doing this

### Lists of Links

We can iterate over an array of data then generate numerous links with the data inside each entry

#### Example

> https://github.com/Jason2B3/next-learning			commit n61

/news/index.js

```react
import Link from "next/link";

export default function News() {
  const reports = [
    { id: 1, story: "bank robbery" },
    { id: 2, story: "Lotto win" },
  ];
  return (
    <div>
      <h1>The "news" path HomePage</h1>
      <ul>
        {reports.map((entry) => {
          return (
            <li key={entry.id}> // don't forget the key attribute!
              <Link href={`/news/${entry.id}`}>{String(entry.id)}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  ); // produces links to /news/1 and /news/2
}
```

 ![image-20211001205716590](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211001205716590.png)  ![image-20211001205641367](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211001205641367.png)

> Click either Link and you'll be taken to a dynamic page- a different one for each
>
> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211001205826384.png" alt="image-20211001205826384" style="zoom:50%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211001205842262.png" alt="image-20211001205842262" style="zoom:50%;" />

#### Relation to Static Webpages

The `[newsId].js` file is incredibly simplistic, but it doesn't have to be

```react
import { useRouter } from "next/router"; // custom hook from Next team

function DetailPage() {
  const router = useRouter();
  return <h1>The Detail Page with a dynamic path of: {router.query.newsId}</h1>;
}
export default DetailPage;
```

You can have JSX that renders beautiful looking webpages, and you can even feed data into the dynamic page files before you even know what the exact values will be

- When you learn how to fetch data with getStaticProps or getServerSide props, you can fetch data based on the newsId from a database, then feed the results as props for your component function
- This will help you render static webpages that look good and contain sophisticated data

### Alternative way to Define Link hrefs

When linking to other pages, it can get tedious specifying a long template literal for the href
Next.js provides an object-oriented way to define hrefs as an alternative

#### Demo 1: When Rendering a List of Links

We're going to continue working on the demo for the "Lists of Links" lesson

> https://github.com/Jason2B3/next-learning			commit n62

![image-20211001211743585](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211001211743585.png) ![image-20211001212134098](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211001212134098.png)

news/index.js → Template Literal Version

```react
	   <ul> 							
        {reports.map((entry) => {
          return (
            <li key={entry.id}>
              <Link href={`/news/${entry.id}`}>{String(entry.id)}</Link>
            </li>
          );
        })}
```

news/index.js → Alt Version

```react
      <ul>
        {reports.map((entry) => {
          return (
            <li key={entry.id}>
              <Link
                href={{
                  pathname: "/news/[newsId]",
                  query: { newsId: entry.id }, // define newsId in query KVP
                }}
              >
                {String(entry.id)} 
              </Link>
            </li>
          );
        })}
      </ul>
```

Side note: 
Since entry.id is a number, it'll crash the site when we define `<Link>THIS</Link>`
Convert it to a string, or redefine the id values in the reports array which we saw above

#### Demo 2: When Defining a Singular Link

Template Literal Version:

```react
<Link href="/news/1"></Link>
```

Alt Version:

```react
      <Link
        href={{
          pathname: "/news/[newsId]",
          query: { newsId: 1 },
        }}
      >
```

#### Multiple query KVP's

If your URL is extra long and contains multiple dynamic parts, you will have more than one KVP in your query object

![image-20211002003352789](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211002003352789.png)

### Redirects: Aka. Imperative Navigation

In some situations we would rather not use a link to take us to a new page

- If that's the case, you'll need to use programmatic navigation to send the user on a new route
  (Synonym to imperative)
- Use the .push method on a variable created with useRouter to get us on a new route/page

#### What Imperative/Programmatic Navigation Means

It simply means that we take users to another page as a result of the users doing something OTHER than clicking a link.

- Perhaps we don't want to wait for users to click a link before we direct them somewhere
- Ex 1. Maybe if they wait too long, we log them out of our site and force them into our login page
- Ex 2. Maybe once they click a submit button for a form, that takes them to a new page

#### Demo

> https://github.com/Jason2B3/next-learning			commit n63

MeetupList.js (what matters)

```react
import { useRouter } from "next/router";

export default function News() {
  const router = useRouter();
  const btnHandler = () => router.push("/blog");
  return (
    <div>
      <h1>The "news" path HomePage</h1>
      <button onClick={btnHandler}>Press me to go to the /blog page</button>
    </div>
  ); // produces links to /news/1 and /news/2
}
```

Press the button to take us to a new page- remember that the button is not a Link

![image-20211002002654232](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211002002654232.png)

#### Alternative to a simple string

Longer and dynamic strings would probably require us to use template literals- which is fine
As you've seen earlier, there's an alternative way to define them:

![image-20211002003300684](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211002003300684.png)

#### replace instead of push

If we used `router.replace`, it would make it so users cannot return to the previous page after we take them somewhere else

```react
const btnHandler = () => router.replace("/blog");
```

#### JS Redirect Method

```js
window.location.href = "/auth"		// force user to the /auth webpage/path
```

This alternative way of redirecting is much shorter than others, but has a major drawback
It will reset your app, meaning all of your states will be lost if this gets parsed
The main use case of this would be in a situation where no states that have been changed will matter

EXAMPLE: 
Login page on a site where you can access nothing while unauthorized

- Once we log in successfully, redirect to the homepage
- We probably don't care if we lose all our states, because a non authorized person probably could not have done much with 0 site privileges

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211025203300664.png" alt="image-20211025203300664" style="zoom:80%;" />

This lack of care for active states won't fly for every app however

- Some websites like Amazon actually let you place things in your cart before login, and have those items persist once you finally do- in this case the JS redirect method would be unacceptable



### Custom Error 404 Page

#### Procedure

1. Create a file on the root level of your Pages folder named `404.js` specifically
2. Create your own 404 page as a React component- design and style it however you want 

#### Demo

The 404.js component code does not matter for this explanation

> https://github.com/Jason2B3/next-learning			commit n64

![image-20211002004358462](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211002004358462.png)



### How Dynamic Pages Impact Backend Code (major)

It is very important that we're able to combine static/dynamic folders and pages

- The most common use for dynamic pages is for when we need a reusable file
- This file should recreate the same webpage with variations directly dependent on data supplied

EXAMPLE: 
Facebook Profile Pages
Everyone's is different but the structure is the exact same due to the reuse of one dynamic page

#### Impact Backend Code

When we have one reusable dynamic file, we need to provide it some data to differentiate each iteration. 

- We usually feed it this data through props which requires us to use getStaticProps or getServerSideProps which you'll learn about soon
- Our backends are usually organized with some sort of ID required to access chunks of data

EXAMPLE:

- My Facebook Profile data may be saved in Mark Zuckerberg's private servers with a special facebookID of `jasonxb90990` 
- My buddy Jesse's data may be saved with a special ID of `jesseakjldl`

COMMON OBJECTIVE FOR DEVELOPERS:
Reference these ID's when we decide to fetch the data from the Facebook backend

> If we have millions of users we can't just fetch the entire database then sort through it
>
> Entire Database:    ![image-20210930025249503](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210930025249503.png)
>
> We need to use the fetchAPI to grab a specific object full of data somewhere in there
> For that we need the facebookID (look below)
>
> ![image-20210930025203044](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210930025203044.png)

#### How the Dynamic Path is Used with Backend Code

TLDR:
Dynamic folders and files create dynamic paths/URL's- which we can access in our code

- Access their URL's with useRouter or the context parameter object which is built into getStaticProps(SSG) or getServerSideProps(SSR)
- This following example is extremely generalized and is basically pseudocode
  Just understand the concept, because we'll act on it properly later on

> ![image-20210930024619357](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210930024619357.png)
>
> red: 
> refers to the 2 ways we can get the URL which will contain the facebookID from the dynamic folder
>
> green:
> Just illustrates that we make props using the method on the bottom (explained better in a dedicated lesson)



# React Libraries & Features in Next.js

This chapter shows you how to use the most popular ones in Next.js, but remember the list goes beyond what we mention in this chapter!

### Reusable Wrapper Components

These work the same way as they would in regular React

#### React Component Wrappers

> [Jason2B3/next-practice (github.com)](https://github.com/Jason2B3/next-practice)			commit 329A

EXAMPLE: Use `<Layout>` as a wrapper for the JSX in pages/index.js

Layout Component file: components/layout/layout.js

```react
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <MainNavigation /> // a different comp we want to be part of the wrapper
      <main className={classes.main}>{props.children}</main>	// props.children
    </div>
  );
}

export default Layout;
```

pages/index.js

```react
import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
function HomePage() {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  );
}
export default HomePage;
```

#### Wrap Around all Project Pages

> [Jason2B3/next-practice (github.com)](https://github.com/Jason2B3/next-practice)			commit 329B

Sometimes we may have a wrapper component whose effects are extremely general, and can apply to every single file in your project

- Wrapping every page's JSX section with one component would get very tedious, but luckily Next.js allows you to do this in a much easier fashion
- Go into `_app.js` on the root level of your Pages folder, then wrap its JSX with that component

pages/_app.js

```react
import "../styles/globals.css";
import Layout from "../components/layout/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
```



### CSS Modules

You can apply CSS modules into your Next.js projects in 2 distinct ways.

UNDERSTAND FIRST

1. CSS Modules is included out of the box for every Next project created how I showed earlier
2. Every JS file inside the Pages folder counts as a component 

> [Jason2B3/next-practice (github.com)](https://github.com/Jason2B3/next-practice)		both methods shown somewhere in commit 331

#### Method A: Fully imported Pages (FIPs)

Only have JS files in your pages folder whose JSX completely consists of imported React Components (can have original JS code... just no JSX)

EXAMPLE: pages/index.js

> Look how pages/index.js contains no JSX except for the imported MeetupList component
> We're going to refer to these as FIPs from here on
>
> ![image-20210927033534205](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210927033534205.png) ![image-20210927034702863](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210927034702863.png)

The CSS styling occurs wherever those Custom components you imported were defined

- At this point in our project, we have a dedicated folder for React components named `components`
- Every component file in this folder comes with a dedicated CSS file for styling
  All the CSS is kept outside of the Pages folder (great for keeping it lean)

#### Method B: CSS docs for Pages Folder Components

This method is necessary if you have JS files in your pages folder that contains even a little bit of original JSX that needs to be styled

[meetupId]/index.js

```react
import styles from "./meetupId.module.css" // import a CSS module file
function MeetupDetails() {
  // original JSX included here
  return (
    <>
      <img
        src="https://image-link"
        alt="A first meetup"
      />
      <address>Some street in a city somewhere</address>
      <p className={styles.bigP}>Insert meetup description here</p>
    </>
  );
}
export default MeetupDetails;
```

![image-20210927043518309](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210927043518309.png)

PROS:
Our CSS module file is right beside the Pages component
This keeps related files in the same area for the sake of convenience

CONS: (which can be negated)

- You will clutter up the Pages folder when you do this for multiple components inside
- If that becomes a problem, define your CSS modules elsewhere and change the import line.
  This will remove some of the convenience but it's not a huge deal 

#### Which to Choose

I recommend Method A over B, but both are valid and you can even mix them
You can use either method or both while still maintaining a lean Pages folder

|          | PROS                                               | CONS                                                         |
| -------- | -------------------------------------------------- | ------------------------------------------------------------ |
| method A | Pages folder is lean and very simple to understand | Can't add unique JSX to any Pages component                  |
| method B | Can have unique JSX and a lean Pages folder        | Must pick 1 downside → have a messier Pages folder or have CSS files defined in non-obvious locations |



### State Management

#### Context API

> [Jason2B3/next-api (github.com)](https://github.com/Jason2B3/next-api)			commit n145

- The process for implementing this is almost the exact same as it is in regular React
- The only difference is that you wrap context provider tags around `pages/_app.js` in Next.js projects, whereas you do that to index.js in React projects

![image-20211012184156624](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211012184156624.png)

#### Redux

> [Jason2B3/next-api (github.com)](https://github.com/Jason2B3/next-api)			commit n145

- The procedure for using Redux or Redux toolkit is also the exact same in Next.js, with one notable difference
- You must wrap your Provider tags around the `<Component>` inside _app.js

![image-20211012191332689](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211012191332689.png)



# ===== RENDERING METHODS =====

> SSG, ISR, and SSR → Pre-rendering
> CSR → Client-side Rendering

# Pre-Rendering Theory & Data-Fetching

Next.js let's build "Fullstack React Apps" by using pre-rendering
It allows devs to write backend/server-side code in our regular JS files used in Next.js

### What are Static Webpages?

#### Static Webpages

Static webpages are created only with client-side code that runs on the browser (HTML/CSS/JS) 

- The raw source code files that each webpage contains will be the same for each visitor
  Those HTML files are typically empty on arrival
- The code is hosted on the server in a static state with no dynamically generated content
  You won't have anything backend related like fetchAPI calls or Node.js 

COMMON MISCONCEPTION:
Just because pages are static does not mean that it can't have dynamic interactions or DOM manip
We're free to type inside of input fields or have buttons with pre-coded response handlers for example

​								![image-20210927152651906](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210927152651906.png)	![image-20210927152715852](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210927152715852.png)

> Other Explanations:  
> https://www.youtube.com/watch?v=_wFJj94kSTU
> [Explain Static vs Dynamic](https://stackoverflow.com/questions/56510835/how-can-be-possible-to-use-reac-to-make-dynamic-websites-if-the-production-build)

#### What Counts as a Backend Component?

It's important to know that some tools you've used while learning Front end web development do send and use data from a server, and should be treated as a "backend component" (no relation to React)

- If we have a React app that uses no Node.js but still makes HTTP requests with fetchAPI, then you still technically have some backend server code 
- Consider all API's you use as "backend components"
- The pages that use backend components cannot be static
  However, your website can consist of a mix of static and dynamic pages

#### Static Site Generating Tools

When it comes to the MERN stack, we have Next.js and Gatsby for generating static pages

NEXT:

- Next.js static site generation is a fairly new feature that only has 2 methods as of 2021
  getStaticPaths() and getStaticProps()
- This makes it very easy to learn, but extremely barebones when it comes to features

GATSBY

- Gatsby has a steeper learning curve which usually requires you to learn some GraphQL, but it has several plugins that make certain features easier to implement compared to Next.js
- Some of these features include: lazy loading images, and automatically resizing images for smaller screens- which is normally a hassle to do

#### Deploying Static vs Dynamic Sites

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210927183218888.png" alt="image-20210927183218888" style="zoom:80%;" />



### Compare Static and Dynamic Sites

#### Static Ex. Samantha Ming

> https://www.samanthaming.com/
>
> ![image-20210928035550112](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210928035550112.png)

This is a static website for a few reasons

1. Everyone who searches that URL will get the exact same HTML file and the site will be the same

- We can still dynamically interact with and change the look of the site by DOM manipulating
- You can see me typing in the search bar in the upper right, as a minor example

2. No HTTP requests are made anywhere on this specific page

3. No backend data is required for rendering this page dynamically
   It's probable that she uses some data stored in the backend to render her lessons

- Don't get it twisted; all HTML files are stored in some server
- I'm just saying we don't use server data to change what this webpage outputs for each user specifically

#### Backend Data used to Render Static Sites

QUESTION:
How can we use backend data to render a static site? 
Isn't that a contradiction?

- At most, the information from her lesson is stored on a server somewhere
- If she made this with Next.js, she probably used getStaticProps() to use the backend data while keeping the page static

#### How changes to the site are made

- Samantha uploads lessons in the form of articles, so this webpage's content will change whenever she uploads more or wishes to promote different ones
- Perhaps she rebuilds and redeploys- it seems reasonable enough to not require incremental static regeneration for this, since she's the only one with access to the backend holding lesson data

#### Dynamic Ex. YouTube

![image-20210928041529870](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210928041529870.png)

Almost everything on this site is rendered dynamically aside from the search bar and the navigation options on the upper left

1. Personalized ads based on my search history (blocked)
   A backend server was consulted in order to decide what I'd most likely spend money on
2. Video recommendations
   My watch history influences what YouTube's algorithm recommends me
3. Subscriptions
   Their servers know which channels I've subscribed to, and they list them on the bottom left

Everyone's YouTube homepage looks different

- Even 2 new accounts would be different because they would be using 2 different email addresses
- There's a thing in the upper right (cut off from image 1) you can click that activates a popup telling you what your google account name or email is
- Also, the notification bell specifically tells how many notifications YOU have
  I doubt everyone on the planet has exactly 2

![image-20210928042058000](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210928042058000.png)

#### Dynamic Ex 2. YouTube Video Webpages

Even the individual video URL webpages are dynamic

- One could argue that the video shown to everybody, plus the comments which are also the same for everybody could make this page static 
- The webpage still cannot be considered static due to the video recommendations on the right, the subscription list on the left, and the thing on the upper right I just mentioned

![image-20210928042547498](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210928042547498.png)



### How Next.js Renders by Default + its Problems

#### How useEffect is Executed (CSR)

> [Jason2B3/next-practice (github.com)](https://github.com/Jason2B3/next-practice)			commit zero A

Code inside of useEffect gets executed after the component function gets executed

![image-20210927124841364](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210927124841364.png)

In the above snippet, we will have 3 render cycles in total

- Render Cycle 1: 	(component render cycle)
  Component function is executed, and the JSX renders with `loadedMeetups = []`
- Render Cycle 2:
  useEffect function's executed, and state is changed by setting `loadedMeetups= DUMMY_DATA`
- Render Cycle 3:   (component render cycle)
  Since the state has changed, the component function runs again
  The JSX data is now rendered with `loadedMeetups= DUMMY_DATA`

![image-20210927125358908](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210927125358908.png)

#### What Pre-rendering Delivers

How pre-rendering works in Next.js:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210927134639427.png" alt="image-20210927134639427" style="zoom:80%;" />

Returns a pre-rendered page:

- Next.js will automatically render the result after the first component render cycle, then show that to all users initially (cycle 1)
- The JSX produced and presented does not get changed by useEffect yet, so we'll get back a page where `loadedMeetups=[]`

Hydrate with React code once loaded:

By hydrate we mean that the JS files that make the site interactive are loaded then applied
This takes place after the browser receives the pre-rendered HTML file which is not interactive yet

- React will run useEffect code after the previous step, which involves a state change (cycle 2)
  This is done on the client side by React
- The component runs again after the state change (cycle 3)

#### Problems with Pre-rendering Static Webpages

PROBLEM 1: Unwanted Loading Visuals

- In our example we used dummy data, but in a real world scenario you'd likely fetch data from a backend somewhere
- You may end up seeing a loading spinner (if you coded one in) or some flickering while we wait for render cycles 2 and 3 to complete- only after them will we get a finished rendering of our site

PROBLEM 2: Search Engine Optimization

- If you view the page source, you'll notice that the meetup data that's supposed to be inside the `<MeetupList>` unordered list is missing
- The JSX of the HTML page we fetch from our server is lacking content
  This is what the web crawlers receive, which is very bad for our site's SEO

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210927133522905.png" alt="image-20210927133522905" style="zoom:67%;" />             ![image-20210927133608703](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210927133608703.png)

#### Solution: Next.js Hybrid Approach

Next.js let's you specify what kind of pre-rendering you want for each individual webpage
SSG and SSR will help your SEO issues- but CSR has its place when building certain kinds of web apps

- You can choose between Client-side, static-site, and server-side rendering
- Pick based on what kind of webpage you're making, and what matters most when building it
  The pros and cons of each approach will be explained in future lessons

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210927134908328.png" alt="image-20210927134908328" style="zoom:80%;" />

### Demonstrate how Next.js Pre-renders

- Next.js fully pre-renders pages with no dynamic data by default without us doing anything
- If your static page doesn't require data fetched from an API or server, you don't need to add SSG for the SEO benefits

#### Demonstrate

pages/index.js:	![image-20211002061648359](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211002061648359.png) ![image-20211002063919497](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211002063919497.png)

> Viewed Page Source (what the search engine bots recieve)
>
> ![image-20211002062059678](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211002062059678.png)

#### Does not work with Dynamic Data

If you try to fetch server data on the client-side, then it won't be in the Page Source file
Anything that runs on the client-side gets missed by the search engine bots

EXAMPLE: 
Use CSR to fetch data from one of our local JSON files 
(works as well as fetching from a real hosted server like Firebase)

> https://github.com/Jason2B3/next-chap5			commit n88

pages/index.js

```react
import React, { useEffect, useState } from "react";
export default function HomePage(props) {
  const [json, setJson] = useState(null);
  const fetchSomethin = async () => {
    const a = await fetch("data.json");
    return a.json();
  };
  useEffect(() => {
    const asyncInner = async function () {
      let res = await fetchSomethin();
      console.log(res) // see the entire JSON file return 
      setJson(res.name); // need to wait for asyncFN results before setting state
    };
    asyncInner(); // immediately invoke
  }, []);
  return (
    <ul>
      <li>Product 1</li>
      <li>Product 2</li>
      <li>{json}</li>
      <li>Product 3</li>
    </ul>
  );
}
```

![image-20211002064420869](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211002064420869.png)

Let's take a look at the sources file. 
We won't see Chen in our unordered list, because he's rendered client-side

> ![image-20211002064556261](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211002064556261.png)
>
> His <li> element is present, but it contains nothing
> What's supposed to be <li>Chen</li> is seen as <li></li> by search engine bots
> At least all of our static data (products 1-3) are visible to them



### Checking the HTML Content that Web Crawlers Receive

#### During Development

Open the preview, left click the page, then hit "View Page Source"

- The HTML content there should contain pertinent information that you coded for your site
- If the HTML file is empty, then you know your site is lacking SEO
  Apply SSG/ISR, or SSG to help

Example of good SEO ▼

pages/index.js:	![image-20211002061648359](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211002061648359.png) ![image-20211002063919497](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211002063919497.png)

> Viewed Page Source  (what the search engine bots receive)
>
> ![image-20211002062059678](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211002062059678.png)

#### After npm run build

We run this command when the site is finished and we're ready to build for production
Make sure to save a commit of the finalized development version before we run this command!

- After the build process you will find a `server` folder in your project
- That folder has a folder named `pages` inside, and it holds 2 pre-rendered HTML files:
  index.html and 404.html
- These files will show up when you view the Sources Page, which is good for SEO as you know

![image-20211003145201522](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211003145201522.png)



### Data Fetching fr/ Local JSON files 

You can test out your data fetching in numerous ways, some more efficient than others

1. You can make http requests to Firebase realtime databases
   It's free and simple, but you have a cap for the number of projects on an unpaid plan
2. You can make a fetch request to a json file you have saved locally (unlimited times)
   Yes, that actually works 

#### Potential Terminology Confusion

Remember, you can have a static page that contains dynamic data pulled from an API or server
As long as the site looks the same for everyone, it counts as static

EXAMPLE:
Anther's ladder leaderboard rankings are 100% not hardcoded

- Player rankings get updated whenever players surpass each other in terms of points, or when you reach a new division
- This website's leaderboard webpages still count as static because everyone sees the same thing

![image-20211005095532789](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211005095532789.png)

WHAT COUNTS AS DYNAMIC:
When ~personalized~ data is pulled from a server and rendered onto your webpage
This makes the content on a webpage different than if someone else loaded that same URL

EXAMPLE: Instagram home page for you looks different than everyone else's but the URL is the same

#### Fetch local JSON Files with Client-side Code (CSR)

PROCEDURE:

1. Place your JSON file somewhere in the public folder
   The fetchAPI will be able to read local files from there
2. Write a regular GET request function and execute it in useEffect

——————————————————————————————————————————————————————

> https://github.com/Jason2B3/next-learning			commit n85

EXAMPLE:

> data.json: <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211002045547473.png" alt="image-20211002045547473" style="zoom:80%;" /> 		files: ![image-20211002045227657](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211002045227657.png) ![image-20211002045255143](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211002045255143.png)

news/index.js

```react
import React, { useEffect } from "react";
export default function News() {
  const getData = async () => {
    // your fetch URL should be relative to the root level of the public folder
    const res = await fetch("jsonFiles/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const parsed = await res.json();
    console.log(parsed)
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>The "news" path HomePage</h1>
    </div>
  ); // produces links to /news/1 and /news/2
}
```

![image-20211002045741571](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211002045741571.png)

#### Fetch local JSON files from Server-side Code (SSG/SSR)

This requires a bit of Node.js knowledge, which is beyond the scope of this stretch of our training
Follow along and look things up when necessary for now

data.json	![image-20211003121347717](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211003121347717.png)   ![image-20211003121407262](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211003121407262.png)

pages/index.js

```react
// Import some standard node features first
import fs from "fs/promises"; 
import path from "path";

export async function getStaticProps(context) {
  const projectRoot = process.cwd(); // "current" working directory
  // equals the project's root directory, not the pages folder where we are

  const filepath = path.join(projectRoot, "/public/data.json");
  // builds an absolute path to our data.json file

  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);
  // read the file with the absolute path specified as an arg, then parse it

  return { props: { info: data } }; // supply findings as rhe comp ƒ()'s props
}

export default function HomePage(props) {
  return (
    <ul>
      {props.info.map((entry) => {
        return <li key={entry.id}>{entry.name}</li>;
      })}
    </ul>
  );
}
```

![image-20211003121552577](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211003121552577.png)

### Data Fetching from External JSON Files

You've fetched external JSON files from the client side countless times when using React
We're focusing on fetching them from the server-side in this lesson

- There are multiple methods you can use for this btw. 
- getStaticProps is just one option you have, and is specifically used for SSG
  You can do the same with getServerSideProps which is SSR

#### Fetch External JSON files from Server-side using SSG

> https://github.com/Jason2B3/next-chap5			commit n89 ver 1 and 2

pages/index.js

```react
export default function HomePage(props) {
  return (
    <ul>
      <li>Product 1</li>
      <li>Product 2</li>
      <li>{props.data[0].name}</li>
      <li>Product 3</li>
    </ul>
  );
}
export async function getStaticProps(context) {
  // Place all backend code here, then return props based on what you fetch
  const mockEndpoint= 'https://jsonplaceholder.typicode.com/users'  
  const response = await fetch(mockEndpoint);
  const data = await response.json();
  return {props: {data: data}} // return props 
} // search this URL to view whats inside this dummy hosted JSON file
```

![image-20211003090244999](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211003090244999.png)

#### Use SSR instead

The process is the exact same, but you use getServerSideProps() instead

```react
// component function is the exact same
export async function getServerSideProps(context) {
  // Place all backend code here, then return props based on what you fetch
  const mockEndpoint= 'https://jsonplaceholder.typicode.com/users'  
  const response = await fetch(mockEndpoint);
  const data = await response.json();
  return {props: {data: data}} // return props 
} // search this URL to view whats inside this dummy hosted JSON file
```



### Data Fetching Security Concerns

#### What you Should and Shouldn't Do

| make http requests in...             | using Firebase | using local files or your own backend API |
| ------------------------------------ | -------------- | ----------------------------------------- |
| the client-side                      | acceptable     |                                           |
| getStaticProps or getServerSideProps | acceptable     |                                           |
|                                      |                |                                           |



### What happens during build

In this lesson we're going to run `npm run build` on a Next project to see what it does

#### What Terminal Symbols Mean

Running the build command produces results that are a bit tough to understand at first

- Understand that the following symbols tell you how each file gets rendered 
  Options: SSG/ISR, pure static with no dynamic data, SSR

> ![image-20210928011712505](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210928011712505.png)
>
> If you use CSR, it's represented by the hollow circle used for (static)
>
> ISR is represented by a filled in dot, just like SSG
> It's not represented by a blank space

#### Example

We use multiple rendering methods across our website, specifically so we can show how they're represented by symbols at build time

> https://github.com/Jason2B3/next-chap5			commit n104

![image-20211008151736622](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211008151736622.png) ![image-20211008151747292](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211008151747292.png)

FINDINGS

| page   | type of page                                   |
| ------ | ---------------------------------------------- |
| /      | SSR                                            |
| /_app  | N/A (not categorized, I think)                 |
| /404   | Static (same as SSG but with no initial props) |
| /cyber | ISR with a revalidate timer of 7000 sec        |

Watch the thought process from an instructor:
[Next.js & React - The Complete Guide (incl. Two Paths!) | Udemy](https://www.udemy.com/course/nextjs-react-the-complete-guide/learn/lecture/25145648#questions/14263370)



### Data Refresh Challenge: SSG, SSR, CSR

> The 3 Approaches Explained in Detail: MUST READ
> https://thecodest.co/blog/data-fetching-strategies-in-nextjs/

#### Goal

Display what is currently stored in our firebase backend- refresh the data on reload

- Use getStaticProps for at least one of your solutions
- Check out the firebase database holding your data here: [Firebase](https://console.firebase.google.com/project/react-firebase-realtime-ex/database/react-firebase-realtime-ex-default-rtdb/data)
  We save a single KVP with the following structure: `1: someValue`

![image-20210929003136128](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210929003136128.png)

WHAT WE DON'T SHOW IN OUR SOLUTIONS:

- We have http request functions in a separate file offscreen
- The first PUTs data into our firebase database, while the other GETs data from it to display on our page for everyone to see (you should know how to do this by now)

#### Solution A: CSR

> [Jason2B3/static-regen (github.com)](https://github.com/Jason2B3/static-regen)			commit n109 on the csr-test branch

pages/index.js

```react
import React, { useEffect, useRef, useState } from "react";
import classes from "./index.module.css";
import { putFB, getFB } from "../helpers/httpRequests";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Indy() {
  const [display, setDisplay] = useState(undefined); // strts as undefined
  const inputRef = useRef();
  useEffect(() => {
    get(); // http fetching occurs in this helper function
  }, []);

  const get = async () => {
    const parsedResponse = await getFB();
    setDisplay(parsedResponse);
  }; // remember, useEffect runs after this code on the root level of the comp ƒ()
  const putHandler = async () => {
    const inputVal = inputRef.current.value;
    await putFB({ 1: inputVal }); // needs a ref
    inputRef.current.value = "";
  };
  // If the display value is not defined yet, render a spinner
  if (!display) return <LoadingSpinner />;
  // Otherwise, render the webpage as shown in the photo above
  return (
    <section className={classes.section}>
      <h1>Current data on the backend:</h1>
      <p>{display}</p>
      <div>
        <button onClick={putHandler}>PUT on backend</button>
        <input ref={inputRef} placeholder="Will be sent to Firebase..."></input>
      </div>
    </section>
  );
}
```

#### Solution B: SSG

> [Jason2B3/static-regen (github.com)](https://github.com/Jason2B3/static-regen)		static regen B

pages/index.js

```react
import React, { useEffect, useRef, useState } from "react";
import classes from "./index.module.css";
import { putFB, getFB } from "../helpers/httpRequests";

function index(props) { // props fed to component function by getStaticProps()
  const inputRef = useRef();
  const putHandler = async () => {
    const inputVal = inputRef.current.value;
    await putFB({ 1: inputVal }); // needs a ref
    inputRef.current.value = "";
  };
  return (
    <section className={classes.section}>
      <h1>Current data on the backend:</h1>
      <p>{props.display}</p>
      <div>
        <button onClick={putHandler}>PUT on backend</button>
        <input ref={inputRef} placeholder="Will be sent to Firebase..."></input>
      </div>
    </section>
  );
}
export default index;

// SSG BELOW
export async function getStaticProps(context){
  // context parameter gives this new utilities not shown here
  let responseData= await getFB()
  return { 
  	props: { display: responseData }, 
  	revalidate: 2 // refresh data every 60 seconds, 
  };
}
```

#### Method C: SSR

> [Jason2B3/static-regen (github.com)](https://github.com/Jason2B3/static-regen)				commit 335: SSR Test

pages/index.js

```REACT
import React, { useEffect, useRef, useState } from "react";
import classes from "./index.module.css";
import { putFB, getFB } from "../helpers/httpRequests";

function index(props) {
  const inputRef = useRef();
  const putHandler = async () => {
    const inputVal = inputRef.current.value;
    await putFB({ 1: inputVal }); // needs a ref
    inputRef.current.value = "";
  };
  return (
    <section className={classes.section}>
      <h1>Current data on the backend:</h1>
      <p>{props.display}</p>
      <div>
        <button onClick={putHandler}>PUT on backend</button>
        <input ref={inputRef} placeholder="Will be sent to Firebase..."></input>
      </div>
    </section>
  );
}
export default index;
// SSR BELOW
export async function getServerSideProps(context){
  // context parameter gives this new utilities not shown here
  let responseData= await getFB()
  return { 
  	props: { display: responseData }, 
  };
}
```

#### Outcome with All Methods

![image-20210929004627051](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210929004627051.png)





### Choose which Pre-rendering Method to Use (FINALE)

SSR:

- When you need request or response object data to perform actions
  Ex. Authentication requires knowing what headers and cookies are attached to the request object
- When you're building a dynamic page with personalized data that must be fetched from some backend
- When the data on your webpages changes very often and you need to update the data rendered every time someone makes a new URL request by visiting your site

SSG or ISR: When the above does not apply, default to using this

# Static Site Generation (SSG) + Incremental Static Regeneration (ISR)

SSG and ISR are technically considered separate techniques, but ISR is one line of code away from SSG
If a lesson doesn't mention 1 technique specifically, assume it applies to both

|                                          | pre-rendering type | methods required...               |
| ---------------------------------------- | ------------------ | --------------------------------- |
| static page                              | SSG / ISR          | getStaticProps                    |
| static page that's dynamically generated | SSG / ISR          | getStaticProps and getStaticPaths |



### Theory: Rendering Static Webpages with SSG

> Sources:
> [When to Choose SSR or SSG: A Guide to Page Rendering | Azion](https://www.azion.com/en/blog/when-to-choose-ssr-vs-ssg-guide/)
> [Server Side Rendering vs Static Site Generation vs Incremental Static Regeneration - DEV.TO](https://dev.to/matfrana/server-side-rendering-vs-static-site-generation-17nf)

#### How SSG Works

Static websites have no dynamic or personalized data- meaning each user receives the same page when they request it by searching a URL

- Because of this, the HTML file for webpages built with SSG are created when we as the developers build the website with `npm run build`
- It's not made when someone requests it- by then it's ready to go
- Part of the pre-generated page will involve some backend code
  Ex. Fetch data from an API or server that you'll use on your webpage somewhere

#### Procedure

1. Your webpage HTML file is pre-generated when us developers build the website for production
   This takes place before anyone even sends requests to the URL
2. A user eventually sends a request to a backend server

- The HTML files are ready to be sent since they were created ahead of time (fast initial load)
- This phenomenon is called having pages "cached" in the server

#### Concerns about Rebuilding:

- After deployment, your pre-rendered page does not change by default
- If you update the data your webpage calls upon, the pre-rendered page will need to change
  The build process starts again then redeploys (which sounds worse than it actually is)

Starting the build and deployment process multiple times over sounds pretty bad, but Next.js has a feature that makes it pretty easy (Incremental Static Regeneration)

#### Pros and Cons

PROS:

- Website is much faster than SSR, and you get the same SEO benefits
- Good for security since there isn't much to attack on a static website

CONS:

- The webpages you make with this must be static
- The data used on your site will always be stale until you rebuild
  Only a problem if you intend on changing webpages very often
- Must rebuild your website when you want to make changes- is acceptable in small/medium sized projects, but not with larger ones  

CONS RELATED TO RE-BUILDING:
This method is straight-up impractical when you're coding large websites like Amazon

- Every different URL requires it's own HTML file when we build the site as a developer
- A site like Amazon would take ludicrously long to build every single time we wanted to change a page 

HOSTING BENEFITS

- You can host your entire site on a static hosting website like Netlify which is free
- If you have a cap on the max number of API calls,  you likely won't exceed it since you'll be making them all once at build time (unless you coded something that fetches data as a part of your site)

#### Relation to CMS Platforms like WordPress

[What is a static site generator? | Cloudflare](https://www.cloudflare.com/en-ca/learning/performance/static-site-generator/)

You can generate static HTML documents that come inside premade and nicely-styled templates using tools like Jekyll, Hugo, or even a CMS like WordPress

- Alternatively, you can create these static pages yourself
- This is what we'll be doing whilst training our Next.js skills

### How ISR Works: Theory

This method gives you the speed benefits of SSG and combines it with the flexibility of SSR

- Your HTML files will still be pre-generated like they are with SSG, making them very quick to load
- They will contain the latest data, which you normally need SSR for

> Sources:
> [Server Side Rendering vs Static Site Generation vs Incremental Static Regeneration - DEV.TO](https://dev.to/matfrana/server-side-rendering-vs-static-site-generation-17nf)
>
> [caching - Which does stale-while-revalidate cache strategy mean? - Stack Overflow](https://stackoverflow.com/questions/60259141/which-does-stale-while-revalidate-cache-strategy-mean)
>
> [first 5 min of this youtube vid](https://www.youtube.com/watch?v=IJkTpR7sSwI)

#### How it Works

(Exact Same as SSG until step 3)

1. Your webpage HTML file is rendered when us developers build the website for production
   This takes place before anyone even sends requests to the URL
2. A user eventually sends a request to a backend server
   The HTML files are ready to be sent since they were created ahead of time (fast initial load)
3. The application will pre-generate the HTML file for our page over and over again, after a time interval that we set in our code-we call this the "stale-time"

- Any API calls that our site needs or backend processes will run after that time interval, just like what happened when the HTML file was built the first time
- This is what keeps our static webpages up to date with the latest data...mostly
  Some people will still receive stale data, and I'll explain why in the next subsection

#### Changing Backend Data used on Site

Avoids one of SSG's cons:

- When you change data that only affects some pages, Next.js will recognize this and only update those individual ones specifically. 
- You won't have to rebuild the entire project again, like with SSG

New con: stale-while-revalidate caching strategy

#### stale-while-revalidate

Even after the stale time, the first requests to our webpage will receive stale data, and here's why:

- When a page is requested, its HTML file will get served immediately since it's pre-generated
- Right after that, a freshly pre-generated HTML is then created on the server, and then it will be served to the next person who requests that URL... and so on

HOW IT OPERATES:
Imagine your stale time is every 5 seconds, then you change the data you fetchAPI for your webpage
User A has visited the webpage before its data was changed
User B visits after the data has changed

- User A will continue to have outdated data rendered on his screen until he refreshes the page
- When user B makes a request to our site's URL, backend processes will update the data and show user B and every visitor after him the new webpage with updated information

Because of how ISR works, I'd only recommend using it when having the latest data every single time is not entirely important 

- For example, if I coded a site for a restaurant and showed their menu, I wouldn't really care if a few users saw a slightly outdated menu if I updated the specials or something
- Most of the menu items would still be the same regardless, and most people would receive the updated version anyway- except for those looking at the site right before its data changed

#### Pros and Cons

PROS:

- Your website becomes very fast, since most times the users will receive a static page 
  (not always, for some reason I can't quite understand yet)
- The backend info your site needs will always be updated on a consistent basis
- This strategy is great for websites with many pages since it updates documents 1 a time, avoiding an entire project rebuild- like SSG would have them do

CONS:

- The people already viewing the webpage before data changes will view an outdated version of our webpage, until they reload or visit the page again
- The first requests to pages not statically generated already may take a while

### getStaticProps

#### Purpose

This method gets executed BEFORE the component function, and it is asynchronous
Its job is to create props for your webpage, and since it is async it will return a promise

- The component function will wait until its promise is resolved before executing
  This lets you use the props you define inside the return object of getStaticProps()
- The `getStaticProps()` method and the `props` KVP in the return object are both reserved names that cannot be changed

CAPABILITIES:

- You can run backend/server-side code in here (Node.js code, fetchAPI calls)
- It has a built-in context parameter that lets you extract the current URL of the page
  Very useful for dynamic pages where you wouldn't know the exact URL when coding it
- Any code put inside will not be seen by clients- so you can place private data there
  It's backend code, not server-side, which is good for security as well

LIMITATIONS:

- You do not have access to client side API in there (window object is off limits for example)
- This means several useful custom hooks like useRouter are off limits
- getStaticProps must be defined inside the js file that a page uses to render itself
  Can't be inside of a React component we import to the page folder

#### Demo Project Start

We're collecting and rendering some dynamic data onto our page using CSR
The CSR HTML content is not rendered initially when we check our sources file

> https://github.com/Jason2B3/next-chap5			commit n88

pages/index.js

```react
import React, { useEffect, useState } from "react";
export default function HomePage(props) {
  const [json, setJson] = useState(null);
  const fetchSomethin = async () => {
    const a = await fetch("data.json");
    return a.json();
  };
  useEffect(() => {
    const asyncInner = async function () {
      let res = await fetchSomethin();
      console.log(res) // see the entire JSON file return 
      setJson(res.name); // need to wait for asyncFN results before setting state
    };
    asyncInner(); // immediately invoke
  }, []);
  return (
    <ul>
      <li>Product 1</li>
      <li>Product 2</li>
      <li>{json}</li>
      <li>Product 3</li>
    </ul>
  );
}
```

![image-20211002064420869](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211002064420869.png) ![image-20211003150819587](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211003150819587.png)

Let's take a look at the sources file. 
We won't see Chen in our unordered list, because he's rendered client-side

> ![image-20211002064556261](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211002064556261.png)
>
> His <li> element is present, but it contains nothing
> What's supposed to be <li>Chen</li> is seen as <li></li> by search engine bots
> At least all of our static data (products 1-3) are visible to them

#### Demo Project Post Lesson

OBJECTIVE: 
Accomplish the same task by using SSG instead

- We're going to use getStaticProps with a bit of Node.js 
- Node is necessary for data fetching from local JSON files, but not for externally hosted ones

——————————————————————————————————————————————————————

pages/index.js

```react
// Import some standard node features first
import fs from "fs/promises";
import path from "path";

// For an explanation of this Node.js...
// see the Data Fetching Lesson for local JSON files (prev. chapter)
export async function getStaticProps(context) {
  const projectRoot = process.cwd(); 
  const filepath = path.join(projectRoot, "/public/data.json");
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);

  return { props: { info: data } }; // supply findings as rhe comp ƒ()'s props
}

export default function HomePage(props) {
  return (
    <ul>
      <li>Product 1</li>
      <li>Product 2</li>
      <li>{props.info[0].name}</li>
      <li>Product 3</li>
    </ul>
  );
}
```

The output is the exact same
Let's check out the webpage source to see if our dynamic content is present

![image-20211003153436201](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211003153436201.png)



### Potentially Outdated Info on SSG Webpages

When making static pages with SSG, we need to make sure that we aren't potentially rendering outdated information

#### Why Outdated Info Matters

As explained in the previous lesson, pre-rendering the page occurs during the build process
We then deploy our site afterwards. 

- What happens if the data we grab in getStaticProps() from the backend gets more data added to it after deployment?
- What we've rendered on our webpage won't be up to date, which can be a problem on blog sites where we need comments to be updated fairly regularly (just 1 example)

#### Solution 1: Rebuild and Redeploy with Regular SSG

This solution is only meant for sites where data doesn't change too frequently. 

- For example, blog sites change when you add new articles once or twice a week, but not every couple of hours
- If you make a major update to the data rendered on your site, rebuild and redeploy it on whatever hosting site you're using

I don't have a code oriented example because you'd rebuild and redeploy on a hosting service



### ISR: 2nd Soln for Outdated Info

If the data on your webpage changes somewhat frequently, use this solution to pay attention to any changes in the backend

> https://github.com/Jason2B3/next-chap5			commit n92

#### My Demo

We're going to manually change some data in our Firebase backend, then reload to see the data update in our rendered webpage

![image-20211003170118223](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211003170118223.png)

pages/index.js

```react
export async function getStaticProps(context) {
  const request = await fetch(
    "https://todo-list-1-befa6-default-rtdb.firebaseio.com/data.json"
  );
  const data = await request.json();
  return { props: { counterValue: data.counter }, revalidate: 1 }; 
    // refresh after 1 second
}

export default function HomePage(props) {
  console.log(props);  
  return ( <h3>Current Value: {props.counterValue}</h3>);
} // Only showing dynamic JSX
```

#### Revalidate Frequency

Choosing a reasonable frequency will change depending on what kind of site you're making

How Next.js docs explains `revalidate`:	 ![image-20210928015051335](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210928015051335.png)

Keep the "at most" part in mind. 

- You can change your backend data, have a stale-time of 1000 seconds, then have your latest visitor get served an updated version of your site within 5 seconds 
- Also, you will not notice any difference between ISR and SSG in development mode
  That mode always insures it has the latest data
- It will matter in production after `npm run build`

If you want proof of the revalidate timer only re-evaluating methods after the time interval, watch the second half of this: [Next.js & React - The Complete Guide (incl. Two Paths!) | Udemy](https://www.udemy.com/course/nextjs-react-the-complete-guide/learn/lecture/25145656#notes)

ONE FILE AT A TIME

- This method let's you rebuild webpages 1 at a time, which is great for scalability
- Not needing to rebuild an entire website is great for enterprise level websites with God-knows-how-many files

#### Demo made by a Random

Add reactions to the Github page, then watch them be reflected in the hosted Vercel app

- You will only notice differences in counts when you reload the Vercel page though
  This is thanks to "stale-while-revalidate" kicking in
- This aligns with how Next.js described the revalidate feature (see previous subsection)

Site 1: [Static Reactions Demo (reactions-demo.vercel.app)](https://reactions-demo.vercel.app/)
Site 2: [Add Your Reaction Here · Issue #1 · chibicode/reactions (github.com)](https://github.com/chibicode/reactions/issues/1)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210928020502154.png" alt="image-20210928020502154" style="zoom:67%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210928021759820.png" alt="image-20210928021759820" style="zoom: 67%;" />

### Context Parameter & Redirects

> https://github.com/Jason2B3/next-chap5		commit n94 (2 versions)

#### The Context Parameter

This built-in parameter inside of getStaticProps and even getServerSideProps helps you do a number of things

> ![image-20211004120434310](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211004120434310.png)
>
> params will be used when dealing with dynamic pages, and synergizes with getStaticPaths

#### Redirects

EXAMPLE:
Make searching the `https:our.domain/` URL actually lead us to `https:our.domain/page` instead

```react
export async function getStaticProps(context) {
  const request = await fetch(
    "https://todo-list-1-befa6-default-rtdb.firebaseio.com/data.json"
  );
  const data = await request.json();
  return {
    props: { counterValue: data.counter },
    redirect: { destination: "/page" }, // redirect to the /page path 
  };
}
```



### Error Handling: Conditional 404 Page Rendering

You can add an additional KVP in the return block:

```react
notFound: true OR false
```

- This will render your 404 error page whenever this URL is visited
- It sounds pointless, but we can set this value programmatically
  Ex. If you search a JSON file and you return no results, simply render an error page

#### Demo 

pages/index.js 	(only getStaticProps)

```react
export async function getStaticProps(context) {
  const request = await fetch(
    "https://todo-list-1-befa6-default-rtdb.firebaseio.com/data.json"
  );
  const data = await request.json();
  let show404 = false;
  if (data.counter === 0) show404 = true; // show404 if Firebase counter value's 0 
  return {
    props: { counterValue: data.counter },
    revalidate: 1000,
    notFound: show404,
  }; // supply findings as the comp ƒ()'s props
}
```

> My demo from the ISR: 2nd soln lesson
> You can test it out by manually editing the Firebase database values
>
> ![image-20211003170118223](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211003170118223.png)



### Series 1: Dynamic Pages and getStaticPaths

#### Dynamic Pages don't Pre-render by Default

Next.js will pre-render static webpages by default, and when you use getStaticProps or getServerSideProps- but it won't if a page's dedicated JS file is dynamic

WHY:
Next.js doesn't know how many dynamic pages it should pre-render, since a dynamic page can produce one or several thousand versions of the same dynamic page with different data inputted each time

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211004185341162.png" alt="image-20211004185341162" style="zoom: 33%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211004185420998.png" alt="image-20211004185420998" style="zoom: 33%;" />

HOW TO PRE-RENDER DYNAMIC PAGES:

- Use getStaticPaths and getStaticProps together
- This method requires you to give Next.js more information...
  1) Which [id] values are available
  2) How many instances of the [id].js file there will be

#### getStaticPaths

params key ▼ 

- Set it equal to an object literal containing KVP's based on the dynamic expressions that may get you to the file you're coding in
- If you're coding inside a dynamic JS file inside of a dynamic folder, that means you'll have multiple

This is just one part of the demo we'll show in the next lesson

> ![image-20211004191911620](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211004191911620.png)
>
> [pid] will take us to our.domain/[pid]
> We only have one dynamic expression to place inside the params object here

#### Catch all Routes

Consult the documentation if you need to write getStaticPaths for one of those
[Basic Features: Data Fetching | Next.js (nextjs.org)](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation)

![image-20211004221407744](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211004221407744.png)



### Series 2: getStaticPaths Demo

WARP KEY: DP109V4	(we perform this with getServerSideProps later on)

#### Objectives

1. For our home page, provide 2 links that lead to our dynamic pages rendered by [pid].js
2. There should only be 2 dynamic pages created by that file

- Any other paths like localhost:3000/p99 should render an error page 
- To do this, you'll need to tell getStaticPaths exactly how many dynamic pages it should pre-render

IMAGES:

> Our data.json file which acts as a mock-backend	&& 	our project's file structure
>
> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211006163300165.png" alt="image-20211006163300165" style="zoom:67%;" /> 												![image-20211006163517506](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211006163517506.png)

localhost:3000

![image-20211006163137077](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211006163137077.png)

localhost:3000/p1 	and	localhost:3000/p2

![image-20211006163154637](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211006163154637.png) ![image-20211006163209019](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211006163209019.png)

#### Hardcoded Solution

PREMISE: 
Code while knowing that we'll only have 2 products to render dynamic pages for

> https://github.com/Jason2B3/next-chap5			commit n97 hardcoded

pages/[pid].js

```react
import path from "path";
import fs from "fs/promises";

//# Enable pre-rendering for dynamic webpages
export async function getStaticPaths() {
  return {
    paths: [{ params: { pid: "p1" } }, { params: { pid: "p2" } }],
    fallback: false,
  };
}

//# GET YOUR PRE-RENDERING INFO FROM data.json
export async function getStaticProps(context) {
  // Grab the data.json content
  const projectRoot = process.cwd();
  const filepath = path.join(projectRoot, "/public/data.json");
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);
  // Specify the dynamically defined page id for pages/[pid].js
  const { params } = context; 
  // params is a key-value pair that equals...  pid: p1	   or...   pid: p2
  // p1 or p2 depends on which page the user is currently visiting
  const productId = params.pid; // only 1 dynamic string this time

  // Sort through the json content and grab the data you need according to [pid]
  const productData = data.find((obj) => obj.id === productId);
  let show404 = false;
  if (!productData) show404 = true; // show errorPg if we find nothing in the file
  return { props: { loadedProduct: productData }, notFound: show404 }; 
  // supply the array entry returned from find() as the comp ƒ()'s props
}

export default function ProductDetail({ loadedProduct }) {
  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>Product ID: {loadedProduct.id}</p>
      <p>{loadedProduct.descrip}</p>
    </>
  );
}
```

pages/index.js is straightforward enough to exclude from our explanation

#### Dynamic Solution

PREMISE:

- While coding, act as if you have no idea how many products you'll need to render dynamic pages for
- Fetch the JSON data file, then use the # of array entries inside to determine how many dynamic [pid].js pages will be necessary

> https://github.com/Jason2B3/next-chap5				commit n101

getJSON function

```JS
  async function getJSON() {
    const projectRoot = process.cwd();
    const filepath = path.join(projectRoot, "/public/data.json");
    const jsonData = await fs.readFile(filepath);
    return JSON.parse(jsonData);
  }
  const parsedData = await getJSON(); // Call function to get the JSON file data
```

- We are forced into redefining this function then invoking it three separate times, because we can't import it from a helper file due to all the node code inside
- Any function that includes node code must be declared and used inside getStatic or getServerSide methods (maybe others as well, but they crash the site when declared on the global scope)

Imagine we redefine the function each time you see the following in our code snippets below

```js
async function getJSON() {} // function contents omitted for brevity
```

——————————————————————————————————————————————————————
LET'S BEGIN!

pages/index.js

```react
import Link from "next/link";
import fs from "fs/promises";
import path from "path";

// Grab JSON data from "backend", then render a Link list dynamically
export async function getStaticProps(context) {
  async function getJSON() {} // function contents omitted for brevity
  const parsedData = await getJSON();
  return { props: { parsedData } };
}

export default function HomePage(props) {
  const { parsedData } = props; // this data's visible client-side
  // Decide how many Links there will be based on the JSON file
  return (
    <>
      <h1>Check out the details for each of our products!</h1>
      <ul>
        {parsedData.map((ent) => {
          return (
            <li key={ent.id}>
              <Link href={`/${ent.id}`}>{`Product ${ent.id[1]}`}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
```

pages/[pid].js

```react
import path from "path";
import fs from "fs/promises";

//# Enable pre-rendering for dynamic webpages
export async function getStaticPaths() {
  async function getJSON() {} // function contents omitted for brevity
  const parsedData = await getJSON();
  const pathsArr = parsedData.map((ent) => {
    return { params: { pid: ent.id } };
  });
  console.log(pathsArr); // logs to the terminal
  return {
    paths: pathsArr,
    fallback: false,
  };
}

//# Get data for pre-rendering from data.json
export async function getStaticProps(context) {
  // Grab the data.json content
  async function getJSON() {} // function contents omitted for brevity
  const parsedData = await getJSON();
  // Specify the dynamically defined page id for pages/[pid].js
  const { params } = context;
  const productId = params.pid;
  // Sort through the json content and grab the data you need according to productId
  const productData = parsedData.find((obj) => obj.id === productId);
  let show404 = false;
  if (!productData) show404 = true;
  // Supply the array entry returned from find() as the comp ƒ()'s props
  return { props: { loadedProduct: productData }, notFound: show404 };
}

export default function ProductDetail({ loadedProduct }) {
  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>Product ID: {loadedProduct.id}</p>
      <p>{loadedProduct.descrip}</p>
    </>
  );
}
```



### notFound vs fallback (skimmed)

Go into the previous lesson's last commit (n101), and look at `pages/[pid].js`
You can test out different combinations by editing the code in this file

#### Table

> MY FAVE COMBINATION:
> notFound = true if our data fetching gives us nothing back
> fallback= false in getStaticPaths

|          | part of...     | if true                                                      | if false                                                |
| -------- | -------------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| notFound | getStaticProps | renders a 404 not found page                                 | does nothing                                            |
| fallback | getStaticPaths | tries to render a fallback version of the page if paths cannot be generated, often leading to a page crash | any paths not returned by get will result in a 404 page |

Explanations

- A fallback page is just the page we wanted rendered all along, but with insufficient data
  Oftentimes this just leads to page crashes
- When it comes to `notFound`, you can programmatically make a 404 page render at any time, but it's typically used when your data fetch operation yields no results

![image-20211007164434061](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211007164434061.png)

#### Use Cases

`notFound= true and fallback = true` can be useful for when you want some loading state to fire off before a 404 page renders due to no meaningful results being fetched

> Shown in this video:
> [Next.js & React - The Complete Guide (incl. Two Paths!) | Udemy](https://www.udemy.com/course/nextjs-react-the-complete-guide/learn/lecture/25145700#questions)
>
> Can test inside:
> https://github.com/Jason2B3/next-chap5		commit n101









### Debugging Backend Code in Next.js (almost done)

Neither console logging or devtools breakpoints will help you debug the code you write inside of server-side functions like getStaticProps or getServerSideProps

- The browser can't access code written inside them, so it won't log anything from inside there
- You must rely on Node-debugging, which requires a bit of setup

#### Console Logging Server-side Next.js

Use `console.log()` to print things out to the terminal instead of the devtools
Just make sure you're visiting the page you're running your logs on

![image-20211007151510450](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211007151510450.png)

#### VS-Code Debugging on HTML/CSS/JS Projects

You do not need the debugger extensions for chrome/edge/firefox for this

PROCEDURE:  [In video form](https://www.youtube.com/watch?v=tC91t9OvVHA)

1. Create a standard project then run it with live server
   Should run on localhost:5500
2. Enter the debug tab then hit this option

- It'll create a launch.json file that you should edit so it runs against the server the preview's on
- The picture below shows it runs against localhost:5500, the liver server's... server
  It wasn't equal to that upon initial creation

![image-20211006203002540](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211006203002540.png)  <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211006203131667.png" alt="image-20211006203131667" style="zoom:67%;" />

3. Enter the file you wish to debug in VS-Code

- Place breakpoints, then press the play button on the upper left
- Make sure you're launching edge against localhost, assuming that's the browser that live server is broadcasting to at the moment (can launch against other browsers too)

![image-20211006203513340](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211006203513340.png)

4. Debug as you would in the dev tools from here on
   Place breakpoints by clicking left of the code line numbers

#### Buttons

|                                                              | NAME      | PURPOSE                                                      |
| ------------------------------------------------------------ | --------- | ------------------------------------------------------------ |
| ![image-20211006203729227](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211006203729227.png) | launch    | runs the server rendering the preview in debug mode<br />new window opens and we can debug in VSC |
| ![image-20211006203906045](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211006203906045.png) | stop      | stops debug mode and closes the new window that opened<br />can enter debug mode again with launch button |
| ![image-20211006204013217](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211006204013217.png) | restart   | restarts debug mode<br />works like pressing stop → launch   |
| ![image-20211006204054197](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211006204054197.png) | continue  | continues the webpage execution, if it's been halted by a breakpoint |
| ![image-20211006204208832](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211006204208832.png) | step over | Fast forwards through the execution of a nested function call, then breaks afterwards- if you're paused on a line that has one. <br/>If you aren't then this acts like a normal step |
| ![image-20211006204217911](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211006204217911.png) | step into | step through and debug a function 1 line at a time<br />if other nested functions are called inside it, we'll travel there too |
| ![image-20211006204230405](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211006204230405.png) | step out  | Fast forwards through the entire execution of the function you're in, then breaks after that (does not enter any nested function calls either) |

#### Setting up Node Debugging

Experiment on...

> https://github.com/Jason2B3/next-chap5				commit n97 dynamic

Links

[Advanced Features: Debugging | Next.js (nextjs.org)](https://nextjs.org/docs/advanced-features/debugging)

[node.js - 'NODE_OPTIONS' is not recognized as an internal or external command - Stack Overflow](https://stackoverflow.com/questions/53948521/node-options-is-not-recognized-as-an-internal-or-external-command)

[5 Steps to debugging Next.js/Node.js from VSCode or Chrome DevTools - DEV Community](https://dev.to/vvo/5-steps-to-debugging-next-js-node-js-from-vscode-or-chrome-devtools-497o)

NOTE:

- You edited some commands from both articles by commint n97
- It seems to be working okay, but I have no idea how VS code debugging works, and the browser side debug method isn't showing us localhost3000



# Server-side Rendering (SSR)

Using SSR has some upsides over SSG/ISR
The methods used in SSG/ISR don't give you access to the request object, which you may need

- Certain use-cases like authentication need access to this object so it can perform server-side checks that would not be possible to do during build time
- Some actions must be done after a user sends a request to a server

### Theory: Rendering Dynamic Webpages with SSR

> Sources:
> [Server-Side Rendering VS. Client-Side Rendering (clariontech.com)](https://www.clariontech.com/blog/server-side-rendering-vs.-client-side-rendering)
> [Client-Side v/s Server-Side Rendering: What to Choose When? - DZone Web Dev](https://dzone.com/articles/client-side-vs-server-side-rendering-what-to-choos)

#### Assumption

I'm assuming your webpage requires some backend data to render properly
By that I mean you fetch data from an API or need to grab data held on some server

EXAMPLE 1: Facebook

- It grabs all your photos that you've saved, plus the names of your friends and subscriptions
- This data is all saved on their private servers 
  They don't have these files saved in project folders for the site

EXAMPLE 2: Google Maps

- With the "use my current location" option they can find exactly where you are now
  To do this, they use some sort of geolocation API
- They may use the fetchAPI to request code that is hosted on the API owner's private servers
- It's a misconception that using the fetchAPI counts as being exclusively front-end code
  It can be considered backend code much like Node.js or PHP, even if we can use it inside JS files

#### Server-side Rendering

1. User requests a webpage from some server by searching a URL
2. The server compiles/prepares the HTML before it sends it to the browser 
   (during server runtime)
3. The server sends the HTML to the client's browser, and the site becomes visibile
   SEO improves since web crawlers can look at the HTML 
4. Browser downloads the HTML and makes the site visible to the user
5. Browser then downloads and executes the JS, making the page interactive

> <img src="https://dz2cdn1.dzone.com/storage/temp/12844895-1576565677882.png" alt="Server-side rendering" style="zoom:50%;" />
>
> It's the server's responsibility to prepare the HTML before the browser gets it
> This is why it's called Server-side-rendering

#### Server-side Pros and Cons

PROS:

- The initial page loading is faster than CSR's
- Good for SEO since the browser receives a rendered HTML file with info already on it
  Perfect for web crawlers
- Is a good choice over SSG if we need to render dynamic/personalized content on a page
- Your website data will always be up to date in terms of the data it uses

CONS:

- You make server requests often, which increases the task load on the server
- Non-initial page loads slower than CSR's
  When you make a request to visit a new page, an entirely new and rendered HTML file is returned

VERDICT: Use SSR when...

- The webpage you're coding for renders dynamic/personalized data
- You need good SEO for public-facing websites that are mostly informative and not overly interactive



### getServerSideProps

In the Static Site Generation chapter we learned about a process called `Incremental Static Regeneration`

- It refreshes data when info we fetch from a backend to use on our webpages get updated
  Also helps with SEO, just check the source files to see how
- You need to reload before any changes are reflected, at least with that approach

We're now learning about the SSR equivalent to getStaticProps, getServerSideProps- which accomplishes the same thing in a different way

#### SSR Compared to SSG

Use case table:

|                            | when to use                                                  | why                                       |
| -------------------------- | ------------------------------------------------------------ | ----------------------------------------- |
| SSG + getStaticProps()     | use by default unless certain actions are impossible with it | much faster than SSR                      |
| SSR + getServerSideProps() | when site data changes often- like multiple times per sec<br />or when you need request/response data (Node.js and authentication related) | dynamic updates and request/response data |

- Both sets of methods only work when part of a page component file
  (One of the JS files in the pages folder)
- CANNOT use both on the same page component file at the same time- they clash with each other

#### Explained

SECURITY:
No code inside this function is executed client-side, so you can place confidential data here since it is executed on a private server, just like getStaticProps and getStaticPaths

- It's job is the same as getStaticProps
  Run backend code, use whatever info it finds to feed props to the component function
- It has a context parameter which gives it more utilities than getStaticProps (at the cost of speed)

WHEN IT'S CHOSEN OVER SSG METHODS:
SSR methods give you access to the request object, which you may need

- Certain use-cases like authentication need access to this object so it can perform server-side checks that would not be possible to do during build time
- Some actions must be done after a user sends a request to a server

> DEMO: 
> check out the "Data Refresh Challenge" lesson	(compares SSR, SSG, CSR)

#### What else SSR can do

There are actually many more uses for getServerSideProps what we haven't explored yet due to not knowing Node.js when first learning Next.js

> MAKE A POINT TO READ THESE:
>
> What you can use getServerSodeProps' context object to do
> https://youtu.be/Day-eJ6-4fQ?t=230
>
> Official Documentation for getServerSideProps:
> https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering



### Demonstrate getServerSideProps

#### Demo 1: Static Webpage

This example is just to show you the basic syntax
Normally you wouldn't need SSR for a task this simple

> https://github.com/Jason2B3/next-chap5			commit n104

pages/cyber		

```react
export async function getServerSideProps(context) {
  console.log(context) // contains WAY more than the context obj in getStaticProps
  return {
    props: { username: "Johnny Silverhand" },
    // no need for revalidate since SSR will fire again after each new request
  };
}

// passes props to the main component function
export default function trySSR(props) {
  return <h2>Welcome to the show, {props.username}</h2>;
}
```

![image-20211008130832911](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211008130832911.png)

the context object is so huge it took multiple screens, so I can't show it here

#### Some Important Parts of the Context Object

The SSR built in context object is huge and full of info you'll need only in niche situations, but these 3 parts are used very frequently

![image-20211008131204318](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211008131204318.png)

BACKEND OPERATIONS:	

- In Node/Express, people often write server side code that requires a request and response object
- Read through the request object and note what headers and cookies are attached to it
- You can manipulate and change the response object according to the situation, then send back an appropriate response

Manipulating a response object can mean adding extra headers or a cookie

> To read more about req and res... (the default node objects for messages and responses)
>
> [Node docs: ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse)
> [Node docs: IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage)

#### Typical Use Case: Authentication

Imagine a user makes a request to a URL that contains private data

- The user likely has cookies saved onto their machines that help the server determine whether they should access that hidden content or not. 
- This is a common example of when SSG would not work. 
  You can't assume which user will log in when you have multiple

In this demonstration, we will implement mock-authentication
We'll do it for real in a later chapter- but the main point is to showcase getServerSideProps syntax

### getServerSideProps with Data Fetching

In this example, we're going to fetch data from a mock-backend (JSON file), then use that data for the main component function's props

#### Objectives Illustrated

TLDR:
Code detailed product pages
We performed this exact same task when learning getStaticProps → WARP KEY: DP109V4

1. For our home page, provide 2 links that lead to our dynamic pages rendered by [pid].js
2. There should only be 2 dynamic pages created by that file

- Any other paths like localhost:3000/p99 should render an error page 
- To do this, you'll need to tell getStaticPaths exactly how many dynamic pages it should pre-render

IMAGES:

> Our data.json file which acts as a mock-backend	&& 	our project's file structure
>
> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211006163300165.png" alt="image-20211006163300165" style="zoom:67%;" /> 											![image-20211008135049911](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211008135049911.png)

localhost:3000

![image-20211006163137077](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211006163137077.png)

localhost:3000/p1 	and	localhost:3000/p2

![image-20211006163154637](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211006163154637.png) ![image-20211006163209019](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211006163209019.png)

#### Don't need getStaticPaths

Note that with getServerSide props, you don't need getStaticPaths

- Defining how many dynamic pages you'll be creating is pointless since SSR pre-generates a page after a request is made, and not during the build phase
- If a user requests a URL that leads to a dynamic page, one will be created for him/her unless we used notFound to conditionally render a 404 page

EX. 
In our demo, we want to render pages for localhost:3000/p1 and p2
localhost:3000/9 should render a 404 page

#### Solution

pages/index.js

```react
import Link from "next/link";
import fs from "fs/promises";
import path from "path";

// Grab JSON data from "backend", then render a Link list dynamically
export async function getServerSideProps(context) {
  async function getJSON() {
    const projectRoot = process.cwd();
    const filepath = path.join(projectRoot, "/public/data.json");
    const jsonData = await fs.readFile(filepath);
    return JSON.parse(jsonData);
  }
  const parsedData = await getJSON();
  return { props: { parsedData } };
}

export default function HomePage(props) {
  const { parsedData } = props; // this data's visible client-side
  // Decide how many Links there will be based on the JSON file
  return (
    <>
      <h1>Check out the details for each of our products!</h1>
      <ul>
        {parsedData.map((ent) => {
          return (
            <li key={ent.id}>
              <Link href={`/${ent.id}`}>{`Product ${ent.id[1]}`}</Link>
            </li>
          );
        })}
        <li><Link href="/cyber">Cyberpunk page</Link></li>
      </ul>
    </>
  );
}
```

pages/[pid].js

```react
import path from "path";
import fs from "fs/promises";

//# Get data for pre-rendering from data.json
export async function getServerSideProps(context) {
  // Grab the data.json content
  async function getJSON() {
    const projectRoot = process.cwd();
    const filepath = path.join(projectRoot, "/public/data.json");
    const jsonData = await fs.readFile(filepath);
    return JSON.parse(jsonData);
  }
  const parsedData = await getJSON();
  // Specify the dynamically defined page id for pages/[pid].js
  const { params } = context;
  const productId = params.pid;

  // Sort through the json content and grab the data you need according to productId
  const productData = parsedData.find((obj) => obj.id === productId);
  let show404 = false;
  if (!productData) show404 = true;
  // Supply the array entry returned from find() as the comp ƒ()'s props
  return { props: { loadedProduct: productData }, notFound: show404 };
}

export default function ProductDetail({ loadedProduct }) {
  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>Product ID: {loadedProduct.id}</p>
      <p>{loadedProduct.descrip}</p>
    </>
  );
}
```



# Client-side Rendering (CSR) 

### Theory: Rendering Dynamic Webpages with CSR

#### Process

1. User requests a webpage from some server by searching a URL
2. User's browser downloads a mostly empty HTML file, and the JS files

- You will likely see a loading animation or a flicker if one is not programmed
- An empty HTML file is bad for SEO because that's what the search recommendation web crawler bots receive when they look over our website

3. Browser fetches data from a backend/API/server, assuming it needs that info to render your webpage content
4. Once the data is processed, it renders your desired webpage

- From here on, visiting new pages won't require you to download a new HTML file
- Your HTML file will be emptied out and rendered with new content per each new page visited
  This is what gives CSR such high loading speeds on every load but the first

> <img src="https://dz2cdn1.dzone.com/storage/temp/12844895-1576565677882.png" alt="Client-Side v/s Server-Side Rendering: What to Choose When? - DZone Web Dev" style="zoom: 50%;" />
>
> It's the browser's job to render the HTML once it recieves an emty file from the server
> This is why the method's referred to as Client-side rendering

#### Client-side Pros and Cons

PROS:

- Non-initial load times are very fast since we don't fetch new HTML files with each new URL request
  We just render new content on the 1 HTML file we received

CONS:

- Website has a slow initial load time
- SEO is bad with CSR, unless you configure it properly- which is more of a hassle than using an alternative method like SSR for dynamic pages (or SSG for static ones)

VERDICT: Use CSR when creating web apps, mostly

- Web apps are highly user interactive, so we value the fast non-initial page load times 
- You can advertise a web app on a site with SEO, so we don't care if a paid service you need to log into is SEO optimized or not

#### When CSR is Justified

1. Situations where data changes with extremely high frequency
   EX. On a live stock exchange site, values change constantly

- Pre-rendering would be pointless regardless of whether we chose SSG or SSR because the data presented would be outdated anyway
- Better to render a loading spinner and update the data in-real-time in the background

2. When we're displaying highly-user-specific data 
   EX. The cart section of an online shop

- No SEO is wanted for something this private

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211008160731089.png" alt="image-20211008160731089" style="zoom:80%;" />



### CSR with Data Fetching

We've seen CSR unknowingly when learning how to code in React several times before
CSR is our default choice in React.js, and 1 of 3 rendering options in Next.js

What counts as CSR...

- Any time we've made an http request inside our component function which changes its JSX
- Can be in useEffect, an event handler.... etc

#### Demo Explanation

![image-20210929004627051](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210929004627051.png)

This demo is taken from the data refresh challenge lesson, where we compare all rendering methods to each other.

> [Jason2B3/static-regen (github.com)](https://github.com/Jason2B3/static-regen)			commit n109 on the csr-test branch

ALL YOU NEED TO KNOW:

- The number on display in the center is fetched from a Firebase realtime database
- We do the fetching using an async function defined offscreen but called inside useEffect
  This useEffect function is invoked on startup only
- We use CSR and coded a loading spinner to appear for the short time period before that number is fetched

#### Solution

pages/csr.js

```react
import React, { useEffect, useRef, useState } from "react";
import classes from "./index.module.css";
import { putFB, getFB } from "../helpers/httpRequests";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Indy() {
  const [display, setDisplay] = useState(undefined); // strts as undefined
  const inputRef = useRef();
  useEffect(() => {
    get(); // http fetching occurs in this helper function
  }, []);

  const get = async () => {
    const parsedResponse = await getFB();
    setDisplay(parsedResponse);
  }; // remember, useEffect runs after this code on the root level of the comp ƒ()
  const putHandler = async () => {
    const inputVal = inputRef.current.value;
    await putFB({ 1: inputVal }); // needs a ref
    inputRef.current.value = "";
  };
  // If the display value is not defined yet, render a spinner
  if (!display) return <LoadingSpinner />;
  // Otherwise, render the webpage as shown in the photo above
  return (
    <section className={classes.section}>
      <h1>Current data on the backend:</h1>
      <p>{display}</p>
      <div>
        <button onClick={putHandler}>PUT on backend</button>
        <input ref={inputRef} placeholder="Will be sent to Firebase..."></input>
      </div>
    </section>
  );
}
```



### useSWR Hook: Faster CSR-style Data Fetching 

#### Purpose

SWR is a custom hook created by Vercel that can be used in Next.js or React
It lets you write data fetching functions faster than you can regularly, but only for CSR

- It abstracts away the need to write pending and error-handling code
- This is an extremely common operation that requires boiler plate syntax to be done correctly

General Form:    (feel free to tweak it)

```REACT
import useSWR from 'swr'

function Profile() {
  const { data, error } = useSWR('/api/user', fetcher)   // fetcher is optional

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
} // limitation → only works inside React component functions
```

#### How useSWR Works

FETCHER

- Create a simple http request function that you can use as the fetcher
- Don't bother coding in error handling or a pending state

RE-FORMATTING FETCHED DATA

- Typically, the data returned to you from a backend or API won't be perfectly organized for your specific needs- it'll likely come with a lot of data you don't need with keywords you dislike
- You have 2 options for reorganizing your data

1. Define fetcher, then include data formatting somewhere inside
2. Reformat your data inside useEffect, and supply the useSWR data variable as a dependency
   Must place this before any error/pending state handling

#### Demo

> commit n109 swr	

pages/swr.js

```react
import React, { useEffect, useRef, useState } from "react";
import classes from "./index.module.css";
import useSWR from "swr";
import { putFB, getFB } from "../helpers/httpRequests";
import LoadingSpinner from "../components/LoadingSpinner";

const simpleFetch = async function () {
  const projectLink = "https://auth-learn-ca7ef-default-rtdb.firebaseio.com";
  const jsonFile = "/info.json";
  const pullData = await fetch(`${projectLink}${jsonFile}`);
  return await pullData.json();
}; // no error handling or pending states! That's taken care of

export default function Indy() {
  const { data, error } = useSWR(
    "https://auth-learn-ca7ef-default-rtdb.firebaseio.com/info.json",
    simpleFetch
  );
    
  // Reformat data, but ONLY when the data variable changes
  // Must be before the error/pending state handling
  const [reformatted, setReformatted] = useState([]);
  useEffect(() => {
    if (data) {
      console.log(data);
      setReformatted([data, "filler"]);
    }
  }, [data]);
  // Error and pending states handled easily, in that order specifically
  if (error) return <p>Failed to retreive data</p>;
  if (!data) return <LoadingSpinner />;
  // Careful! at the moment, we have infinite loading if our database is empty
  
  return (
    <section className={classes.section}>
      <h1>Current data on the backend:</h1>
      <p>{reformatted[0]}</p>
    </section>
  );
}
```

![image-20211009002711804](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211009002711804.png)

We load data from a firebase realtime database on startup. That's it

#### Other http Requests

Although useSWR is mainly for GET request, it appears that it may also work for POST requests as well
I wouldn't recommend it though- it seems more complex, and any bugs will be tough to spot

> Check out this page in their documentation if you absolutely must
> https://swr.vercel.app/docs/mutation



### Combining CSR with SSR or SSG

#### Use-case Scenarios

1. You want existing pre-rendered data to change as a result of user action

EXAMPLE: Udemy shopping cart

- When you initially visit this page, you see the number of courses you wish to buy 
  It could be pre-rendered via SSG/ISR or SSR
- If you add more items into the cart as a result of users pressing a purchase button, you'd have to update your cart's data client-side
- There's no way to pre-render that, since we wouldn't know the specifics ahead of time?
  Will the customer buy more? If so, what would he/she buy and how many?

This typically involves making the starting value of a useState() equal some props data that originated from getStaticProps or getServerSideProps

——————————————————————————————————————————————————————

2. Initial Render should include a loading visual

- Sometimes you want a partially-complete snapshot of your website to appear at first
- Afterwards you can have other content that hasn't been fetched/rendered yet to do so after a loading spinner or message (like lazy loading images, but with spinners instead of hazy visuals)

EXAMPLE:

> Most of the Facebook page is loaded using SSR, since this involves personalized data
> The image is being fetched on the client-side and has a loading image active until it's done
> Once it finishes, the pre-rendered parts of the site still remain
>
> <img src="https://uploads.sitepoint.com/wp-content/uploads/2014/10/1412252445facebook-screenshot.png" alt="3 Tips To Make Your Application Feel Faster - SitePoint" style="zoom:67%;" />

#### Demos Explained

> [Jason2B3/firebase-testing (github.com)](https://github.com/Jason2B3/firebase-testing)		commit n110
>
> pages/testSSR.js			version 1
> pages/index.js				 version 2

VERSION 1 OBJECTIVE:

1. Pass hardcoded data into your component function with SSR
   This data should be inside an array so you can render a list
2. Add onto that list using an input field

- The initial list is pre-rendered, while new data we add is rendered on the client-side
- The new data has to be rendered client-side, because visitors create and submit it before it gets rendered immediately afterward

——————————————————————————————————————————————————————

VERSION 2 OBJECTIVE

1. Pass data hosted on a Firebase backend to your component function using SSR
   Data should be converted to an array format (firebase always returns objects)
2. Add onto that list using an input field

- Send that data to the backend so revisiting the page lets you see what was added last time
- Render the newly added data onto the list on-screen right away
  Otherwise you'll have to reload the page to see what you added (similar to ISR's limitation)E:

#### Demo 1

pages/testSSR.js

```react
import React, { useState, useEffect, useRef } from "react";

export async function getServerSideProps(context) {
  return {
    // feed your new array as the comp ƒ() props
    props: { display: ["fauna", "materialUI"] },
  };
}

export default function testSSR({ display }) {
  const inputRef = useRef();
  const [list, setList] = useState(display);
    
  // CSR takes place here: We render new data browser-side after this is called
  const postHandler = function (e) {
    e.preventDefault();
    setList((prev) => [...prev, inputRef.current.value]);
  }; // we don't need useEffect for this to count as CSR
    
  return (
    <>
      <div>
        {list.map((ent, index) => {
          return <p key={index}>{ent}</p>;
        })}
      </div>
      <div>
        <button onClick={postHandler}>Add to list</button>
        <input ref={inputRef} placeholder="Will be added to list"></input>
      </div>
    </>
  );
}
```



#### Demo 2

This demo is the exact same as the previous one, but it involves http request functions

- Since Firebase returns data inside objects by default, you're going to have to reformat data you receive from GET requests into an array for simplicity's sake
- Must do this in your helper functions, and in getServerSideProps

requests.js                    <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211010013602714.png" alt="image-20211010013602714" style="zoom:80%;" />

pages/index.js

```react
import React, { useEffect, useRef, useState } from "react";
import { firebaseGET, firebasePOST, reformat } from "../helpers/requests";
import classes from "./index.module.css";

export async function getServerSideProps(context) {
  const firebaseLink =
    "https://auth-learn-ca7ef-default-rtdb.firebaseio.com/test.json";

  const pullData = await fetch(firebaseLink);
  const parsedData = await pullData.json();
  const arrayVersion = reformat(parsedData); // obj → array

  return {
    props: { display: arrayVersion },
  };
}

export default function index({ display }) {
  // Load the data from firebase (has been reformatted into an array)
  const [list, setList] = useState(display);
  const inputRef = useRef();
  const firebaseLink =
    "https://auth-learn-ca7ef-default-rtdb.firebaseio.com/test.json";

  // Send data to Firebase backend, and update the list browser-side as well
  function postHandler(e) {
    e.preventDefault();
    firebasePOST(firebaseLink, inputRef.current.value);
    setList((prev) => [...prev, inputRef.current.value]);
    // inputRef.current.value="" // causes a bug where list items get rendered blank
  }

  // Give people a chance to send data up if your list is empty
  if (!list) {
    return (
      <div>
        <button onClick={postHandler}>POST on backend</button>
        <input ref={inputRef} placeholder="Will be sent to Firebase..."></input>
      </div>
    );
  }
  // If we do have data in our backend, render the following
  return (
    <section className={classes.section}>
      <h1>Current data on the backend:</h1>
      <ul>
        {list.map((ent, index) => {
          return <li key={index}>{ent}</li>;
        })}
      </ul>
      <div>
        <button onClick={postHandler}>POST on backend</button>
        <input ref={inputRef} placeholder="Will be sent to Firebase..."></input>
      </div>
    </section>
  );
}
```



### Tips

1. Incorporating a 404 not found page is optional, especially when data fetching
   You can simply use JSX to render something else if you want

EXAMPLE: Project from the Combine CSR with SSG/SSR lesson

- We use SSR to data fetch info on our Firebase backend which is used to render that list (img 1)
- If that database is empty, we'd prefer not to render a 404 page
  Instead, we'd like to give visitors a chance to send something up themselves (img 2)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211009233708776.png" alt="image-20211009233708776" style="zoom:80%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211009233847824.png" alt="image-20211009233847824" style="zoom:80%;" />

2. You can import helper functions so they can be used inside of pre-rendering methods like getStaticProps or getServerSideProps, as long as they are not asynchronous

![image-20211009234459148](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211009234459148.png)

3. If you don't know which end your code is running on, use the following snipper and find out

```js
  if (typeof window !== "undefined") {
    console.log("we are running on the client");
  } else {
    console.log("we are running on the server");
  }
```

