> CURRENT DECIDED ORDER: 
> Learn 3, 5 → Practice 4 6
> Learn 7, 8 → Practice 9
> Learn 10 → Practice 11
> Learn 12, 13
>
> ![image-20210930015820471](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210930015820471.png)



# ========== BAS ICS ==========

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
OR
yarn create next-app
```

3. Run `git init` in the new folder that was just produced
4. To start the development preview

```
npm run dev
OR 
yarn run dev
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

> Viewed Page Source (what the search engine bots receive)
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
  const [display, setDisplay] = useState(undefined); // starts as undefined
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

// SSG BELOW
export async function getStaticProps(context){
  // context parameter gives this new utilities not shown here
  let responseData= await getFB()
  return { 
  	props: { display: responseData }, 
  	revalidate: 2 // refresh data every 60 seconds, 
  };
}

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
```

#### Method C: SSR

> [Jason2B3/static-regen (github.com)](https://github.com/Jason2B3/static-regen)				commit 335: SSR Test

pages/index.js

```REACT
import React, { useEffect, useRef, useState } from "react";
import classes from "./index.module.css";
import { putFB, getFB } from "../helpers/httpRequests";

// SSR BELOW
export async function getServerSideProps(context){
  // context parameter gives this new utilities not shown here
  let responseData= await getFB()
  return { 
  	props: { display: responseData }, 
  };
}

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
```

#### Outcome with All Methods

![image-20210929004627051](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210929004627051.png)





### Choose which Pre-rendering Method to Use (FINALE)

#### SSR:

- When you need request or response object data to perform actions
  Ex. Authentication requires knowing what headers and cookies are attached to the request object
- When you're building a dynamic page with personalized data that must be fetched from some backend
- When the data on your webpages changes very often and you need to update the data rendered every time someone makes a new URL request by visiting your site

#### SSG or ISR: 

When the above does not apply, default to using this



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

# ========= DATABASES =========

# Optimization (skipped over)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211010014145483.png" alt="image-20211010014145483" style="zoom:80%;" />

### Head Metadata

WHY HEAD METADATA MATTERS:

- If we don't deliberately add content to the `<head>` section of our webpages, they will be empty except for the default parts that Next.js includes for all projects
- This is bad for SEO since crawlers analyze the title/description that are supposed to be in there

#### Adding Head Data



# API Routes- Private Node FN's



### Definitions and Explanations

#### URI vs URL vs URN

Source: https://www.youtube.com/watch?v=vpYct2npKD8

|                                      | is a string used to identify a resource on the internet using.... |
| ------------------------------------ | ------------------------------------------------------------ |
| URI<br />Uniform Resource Identifier | a name, location, or both                                    |
| URL<br />Uniform Resource Locator    | a location <br />(the most commonly used option of the 3)    |
| URN<br />Uniform Resource Name       | a name                                                       |

All URL's and URN's are considered URI's - but the reverse is not true
A URI may look up a resource via location only, so we can't consider it a URN for example

#### REST API, Routes, Endpoints, Resources

REST API:

- A webserver that allows you to make requests using URL's that are open to the public
- The responses sent back to you are not always a new HTML page. 
  Most often, data is returned to you in JSON format

Route:
The full URL used to access data by making a request (Ex. http://www.mywebsite.com/)

Endpoint:
Part of the route which dictates what happens when a request is made with your URL

- You might have an endpoint that makes your request GET/POST/DELETE data
- Your action is dependent on the endpoint which is part of the route

Resource:
The data returned from a request

#### Understand

- Different endpoints can give a developer access to the same resources
- Also, an API may be completely reworked which may lead to new endpoints directing you to the same old resources

![image-20211011152249677](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211011152249677.png) ![image-20211011152315287](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211011152315287.png)

#### Demo

> Source:  https://www.titanwolf.org/Network/q/0f9a405a-0d44-451b-85fd-21a3aed5f08f/y

Routes ▼

```
https://stackoverflow.com/questions/56075017/difference-between-route-and-endpoint

https://stackoverflow.com/questions/56040846/how-to-use-the-classweight-option-of-model-fit-in-tensorflow-js
```

Endpoints ▼

```
/56075017/difference-between-route-and-endpoint

/56040846/how-to-use-the-classweight-option-of-model-fit-in-tensorflow-js
```

Both routes shown return different data



### What are API Routes?

We don't always want to request pages when we make requests to different servers.

- Sometimes we want to fetch data in certain formats like JSON, or send data so it can be stored in a  database somewhere
- Ex. If you sign up for a newsletter, your email gets saved to a backend for the service's mailing list

#### What they are

API Routes is a Next.js feature that allows us to to build our own REST API as part of our Next.js app

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211011153201755.png" alt="image-20211011153201755" style="zoom:80%;" />

IN THE ABOVE SCENARIO...

- Making a POST request to `/api/feedback` will add data to a file or server backend
- Making a GET request to `/api/feedback` will pull data down from that same backend
- A GET request to `/api/feedback/f1` will pull data organized in a different way 
  We can customize that in our code however we want

#### Security Benefits

> Source:	[How to Connect Angular (or React...) to a Database (academind.com)](https://academind.com/tutorials/connect-to-database)

It is highly insecure to connect your React web app to a database on the client-side

- Since anyone can see what runs on the browser using dev tools, placing your database credentials and queries where someone can tamper with them may lead to problems
- Any code that talks to a database should run on the server-side
  On startup, we can use getStaticProps or getServerSideProps
  After that, we can use API routes to run backend code that's kept a secret from all visitors

EXCEPTIONS: "No-backend" solutions

![image-20211011172306617](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211011172306617.png)

#### Uses for the Routes Created

By doing this, we'll be creating certain routes/URL's that are not meant to be entered into the browser
They're meant to be used in your JS code to make http requests

EXAMPLE: 	https://api.jsonbin.io/v3 
This hosted JSON file has little use unless we make an http request to it
Simply loading it in your browser is somewhat pointless

Eventually, you'll be able to add features like newsletter signup, user feedback, submissions...etc

### Creating API Routes

#### Procedure

STEP 1. CREATE API FOLDER

Make a folder inside the pages folder- it must be named `api`
Any js files inside this folder will be treated in a special way

- The JS file names inside the API folder are up to you
- They create paths just like regular pages- but you'll be sending requests to them instead of visiting them with a search bar or website `<Link>`

![image-20211011164114846](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211011164114846.png)

STEP 2. CREATE THE API ROUTE FILE

We don't export React components inside pages in the API folder

- Create a default export function named `handler`, and give it 2 parameters; `req and res`
  The function name is not mandatory, but this is the typical convention
- Syntax inside this function is considered server-side code
  None of it is visible on the client-side

```react
export default function handler() {
	// Node goes here (all private and hidden from the browser)
}
```

STEP 3. MAKE A FETCH REQUEST TO THE API ROUTE FILE

| fetch() method parameters | Equals...                                                    |
| ------------------------- | ------------------------------------------------------------ |
| fetch URL                 | An absolute link to reference your API Route file in your fetch request |
| method                    | GET, POST, PUT, DELETE..etc                                  |
| body                      | the data you wish to add onto your JSON file<br />be sure to convert it to JSON format before this line or during it |
| headers                   | `'Content-Type': 'application/json'`                         |



### Use them to POST or GET Data to a JSON File

#### Objectives Explained

- We have a file named `feedback.json` located in a folder called `data` which is on the root level of our project folder- initially, it contains an array
- This will act as a mock-backend
  We will learn how to interact with a real database like MongoDB later in the chapter

![image-20211011202947236](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211011202947236.png) <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211011230443471.png" alt="image-20211011230443471"  />

| button                 | should...                                                    |
| ---------------------- | ------------------------------------------------------------ |
| Send Feedback          | Add new array entries of data into the `feedback.json` file<br />Each new array entry should contain an email, a feedback string, and a mock ID which you can create using the current date. |
| View Existing Feedback | Display the code currently in `feedback.json` on the webpage |

APPROACH:

- Use Node.js code inside of an API route function which you can call on the client-side
  Code specific actions for GET and POST requests
- Client-side JS file of interest: `pages/index.js`
  Server-side Node file of interest: `api/feedback.js` (must be in the `pages/api` folder to work)

#### Code

> [Jason2B3/next-api (github.com)](https://github.com/Jason2B3/next-api)			commit n142

pages/index.js	(client-side)

```react
function HomePage() {
  const [show, setShow] = useState(null);
  // SEND FEEDBACK ONCLICK FUNCTION ▼
  const submitFormHandler = function (event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
    // Make a request to your API route in api/feedback.js
    // Should add new array entries for each feedback submission
    fetch("/api/feedback", {
      method: "POST", // we coded API actions for this request type
      body: JSON.stringify({
        email: enteredEmail, // convert the data you're storing into JSON
        text: enteredFeedback,
      }),
      headers: { "Content-Type": "application/json" },
    });
  }; // skipped validation for email/password

  // VIEW EXISTING FEEDBACK ONCLICK FUNCTION ▼
  const viewFeedbackHandler = async function () {
    const response = await fetch("/api/feedback");
    const parsedData = await response.json();
    console.log(parsedData);
    setShow(parsedData) // show data on the webpage
  };

  // other JSX omitted for brevity
  return ( <code>{show? JSON.stringify(show):""}</code>) 
}

export default HomePage;
```

pages/api/feedback/js	(server-side)

```react
import fs from "fs";
import path from "path";

//# Create our API Route File (no syntax inside here is public)
export default function handler(req, res) {
  if (req.method === "POST") {
    // Extract data from incoming POST request
    const email = req.body.email;
    const feedbackText = req.body.text;
    // Reformat/organize the data sent to this function by the request
    const newFeedback = {
      id: new Date().toISOString(), //@ dummy ID value for development only
      email: email,
      text: feedbackText,
    };
    // Store the reformatted data object in a file or database
    const filePath= path.join(process.cwd(), 'data', "feedback.json") // 1
    const jsonData= fs.readFileSync(filePath) // 2
    const jsData= JSON.parse(jsonData) // 3
    jsData.push(newFeedback) // 4
    fs.writeFileSync(filePath, JSON.stringify(jsData)) // 5 
    res.status(201).json({message: 'New resources created!'}) // 6
  } 
  if (req.method === "GET") {
    const filePath= path.join(process.cwd(), 'data', "feedback.json") // 1
    const jsonData= fs.readFileSync(filePath) // 2
    const jsData= JSON.parse(jsonData) // convert to JS in here
    res.status(200).json({message: 'Data fetched successfully', data: jsData}) // 6
  } 
  else {
    res.status(404).json({message: 'No useful actions for that request type!'})
  }
} 

//# Explanation for storing the reformatted data
// 1-2) Create a filepath to your local JSON file then read it
// 3) Convert the JSON file data into JS, 
// 4) Add to it using .push (feedback.json is an array, not an object. Just look)
// 5.0) Convert your updated jsonData object back to JSON format
// 5.1) Overwrite the file that filepath points to with your updated JSON data

// 6) Send a response object back with the 201 success code (used for POST reqs)
//    Can also send back the data we updated our json file with if you want 
//    res.status(404).json({message: '', data: jsData})
```

#### Send Feedback: Output

Every time you submit using the "Send Feedback" button, a new object of data appears in the local JSON file.

![image-20211011204306285](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211011204306285.png)

Each array entry is an object that looks like the following:

```js
const newFeedback = {
    id: new Date().toISOString(), //@ dummy ID value for development only
    email: email,
    text: feedbackText,
};
```

#### View Existing Feedback: Output

We're pressing the "View existing feedback" button right after we tested the "send feedback" button for the previous subsection

![image-20211011232325288](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211011232325288.png)

FUN FACT! 

- You don't need to code a button to test out GET requests
- Enter a URL in the search bar, then hit ENTER to submit a GET request with your browser



### API Routes + Pre-rendering Methods

Having API Routes does not stop you from using SSG/SSR methods like getStaticProps and getServerSideProps- but there is a rule you must follow...

#### Security Rule

Never use the fetch method to communicate with your API Routes directly inside getStaticProps and getServerSideProps- it's a very insecure thing to do, security-wise. 

- The only exception to using fetch() there is if you communicate via a service like Firebase
  You don't actually communicate directly to a backend with that service
- You make requests to an API that talks to the backend for you, making it less of a risk to expose your credentials

#### Workaround for the Rule

- Write helper functions that use fetch on your local API, then export them to the file with getStaticProps and getServerSideProps
- These helper functions can exist from any location, even the api folder if you want
- If you import a function that only gets used inside one of the aforementioned methods, Next.js will not reveal it on the client side- you're safe!

GACHA:
This works best if your entire project is running on one server
If it isn't, Google what to do (this won't be a problem until you start working professionally)

#### Demo Explained

We have a file named `feedback.json` located in a folder called `data` which is on the root level of our project folder- initially, it contains an array

> FILE HEIRARCHY && feedback.json
>
> ![image-20211011202947236](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211011202947236.png) ![image-20211012011313343](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211012011313343.png) 

OBJECTIVE:

- You have a local JSON file named `feedback.json`
- On startup, load the initial contents of this file and log it to the console
  You could use it for potentially anything, but let's keep this simple

APPROACH

- To load things initially, use SSG's getStaticProps method
- Remember that you can't use fetch() directly inside to talk to local files- so rely on imported Node.js functions

#### Code

> [Jason2B3/next-api (github.com)](https://github.com/Jason2B3/next-api)		commit n143

pages/api/feedback.js		(though these helper functions could be defined anywhere)

```react
import fs from "fs";		// writing Node.js
import path from "path";

// Create a filepath to your local JSON file
export function buildFeedbackPath(){
  return path.join(process.cwd(), "data", "feedback.json"); // 
}

// Read local JSON file data and convert it to JS
// If we were working with firebase, we'd use fetch() instead
export function extractFeedback(filePath){
  const jsonData = fs.readFileSync(filePath); // 2
  const data= JSON.parse(jsonData); // 3
  return data;
}

//# API Route below
export default function handler(req, res) {
	// not important for this lesson   
}
```

pages/index.js	(client-side)

```react
import { buildFeedbackPath, extractFeedback } from "../pages/api/feedback";

export function getStaticProps() {
  // Use helper functions to make a GET request to our local file feedback.json
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  // Feed the data we retreive as props for the component function
  return {
    props: { feedbackItems: data },
  };
}

function HomePage(props) {
  console.log(props.feedbackItems); // could do more with this data 
}
```

![image-20211012011405462](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211012011405462.png)

The helper methods we created work together to form the code needed to make a GET request to an API route (just look at the dedicated lesson and compare)



### Dynamic API Routes

Just like webpages, Next.js also allows you to have hardcoded or dynamic API Routes

#### Rules

The rules for dynamic API routes are the same as the ones for dynamic webpages
I will review some basic rules in case you've forgotten

MATCHING PRIORITY 

- Hardcoded routes > dynamic routes
- Dynamic routes > catch-all routes

​                              ![image-20211012105833593](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211012105833593.png)                        Alternative:  ![image-20211012110256993](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211012110256993.png)

| make a request to... | this file gets selected |
| -------------------- | ----------------------- |
| `/api/feedback`      | feedback.js             |
| `/api/df`            | [feedbackId].js         |
| `/api/df/g`          | [...other].js           |

You're also free to define files in a different way- as proven by the alt photo on the right
The left image has a file named feedback.js, but we can define it as `/api/feedback/index.js`	 

#### Extract Query Strings

Since dynamic API routes don't have hardcoded file names, we must be able to find out what query strings have been typed to match that file



EXAMPLE 1: Get 1 query string

Imagine we matched with `[feedbackId].js` using `/api/goomy`

```react
export default function handler(req, res) {
  const { feedbackId } = req.query
  res.end(`Post: ${pid}`)
}
```

EXAMPLE 2: Get multiple query strings (return2)

```react

```

![image-20211012105833593](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211012105833593.png)

Having dynamic routes is useful for when you want to fetch specific bits of information from a backend instead of the entire thing

### Using Dynamic API Routes

Remember, you can program actions for any type of http request inside a dynamic API route file
In this lesson, we'll be coding actions for GET and DELETE

#### Project Starting State

At the moment we can send additional feedback with our form, and an additional array entry will be added to our `feedback.json` file

  <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211012151943706.png" alt="image-20211012151943706" style="zoom: 56%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211012132243784.png" alt="image-20211012132243784" style="zoom: 67%;" /> ![image-20211012135248823](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211012135248823.png)

ABOUT OUR PROJECT'S CURRENT STATE:
In the below example, we've already fetched all the data from `feedback.json` and used it to render the list of emails in `pages/index.js`

- We could easily just sort through this data if we wanted specific entries in the JSON array
- However, we want to showcase how to extract bits of our file, instead of the whole thing- even though it would be redundant if we did this IRL

#### Goals

| button                   | desired outcome                                              | approach                                        |
| ------------------------ | ------------------------------------------------------------ | ----------------------------------------------- |
| Show array entry details | show the JSON array entry dedicated to the email the button is beside | code actions for a GET request in [email].js    |
| Delete array entry       | delete the JSON array entry dedicated to the email the button is beside | code actions for a DELETE request in [email].js |

Both operations involve pinpointing one bit of data in our `feedback.json` file instead of returning the entire thing. To do so, we'll need to use query strings to search through all that data

#### Code: Get Specific Data with Query Strings

> [Jason2B3/next-api (github.com)](https://github.com/Jason2B3/next-api)			commit n144
>
> files of interest are...
> EmailListItem.js	[email].js	pages/index.js	feedback.js	feedback.json

Helper functions from another file

```js
// Create a filepath to your local JSON file
export function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "feedback.json"); // 1
}
// Read local JSON file data and convert it to JS
export function extractFeedback(filePath) {
  const jsonData = fs.readFileSync(filePath); // 2
  const data = JSON.parse(jsonData); // 3
  return data;
}
```

pages/api/[email].js

```react
export default function handler(req, res) {
    
  //% GET action: Retreive one array entry
  if (req.method === "GET") {
    // Get the query string from the request made to this [email].js file
    const email = req.query.email;
    // Create a filepath to the json file, then read it
    const filePath = buildFeedbackPath();
    const jsData = extractFeedback(filePath); // data in JS format
    // Find ONE array entry from the JSON data returned to us in JS form
    const arrayEntry = jsData.find((ent) => {
      return ent.email === email;
    });
    res.status(200).json({ entry: arrayEntry }); // return that entry
  }
    
  //% DELETE action: delete one array entry
  if (req.method === "DELETE") {
    // Get the query string from the request made to this file
    const email = req.query.email;
    // Create a filepath to the json file, then read it
    const filePath = buildFeedbackPath(); 
    const jsData = extractFeedback(filePath); 
    // Remove one array entry from the JS data, based on the request's query string
    const entryIndexNumber = jsData.findIndex((ent) => {
      return ent.email === email; 
      // ▲ [email] must match the JSON array entry's email KVP
    });
    if (entryIndexNumber !== -1) jsData.splice(entryIndexNumber, 1);
    // Overwrite the original JSON file with your updated data
    fs.writeFileSync(filePath, JSON.stringify(jsData)); 
    res.status(201).json({ message: "Array entry removed" }); 
  }
}
```

We call upon this handler using a simple fetch method inside an event handler for those buttons

- Showing a picture because using the data returned from these API Routes is straightforward
- We use the `show` variable to render some JSX (check out the commit if you're curious)

![image-20211012153025976](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211012153025976.png)

#### Outcome

Pressing the "Show array entry details" button

![image-20211012153109474](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211012153109474.png)

Pressing the "Delete array entry" button

- Simply removes the entry from the JSON file
- You need to reload the page to notice on our UI, but fixing this bug is not the main focus of this lesson anyway, so I'll leave it 



# MongoDB Theory and Setup

### Why we Need Databases

When we learned about SSR we discovered how to programmatically edit JSON files that we use as a mock database- so why bother using real ones at all?

#### Why JSON Files cannot Replace Databases

1. Scalability

- If a JSON file must be loaded to get your webpage working, we must prepare for when a site gets enough user data submitted to make that JSON file very long
- If your JSON file gets too big, your performance will suffer

2. Multiple people may access a file at the same time
   Even with MongoDB, you need to code things correctly to avoid this typically file-exclusive issue

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211017221426894.png" alt="image-20211017221426894" style="zoom:90%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211017221555925.png" alt="image-20211017221555925" style="zoom:85%;" />

MORE REASONS:
As a front-end only dev as of writing this, most of the following answer sounds foreign to me
It'll make sense eventually

> Source:	[overflow](https://softwareengineering.stackexchange.com/questions/273340/when-to-use-a-nosql-database-such-as-mongodb-over-mysql?rq=1)
>
> ![image-20211017222104717](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211017222104717.png)

### Collection Document Model

I could dedicate an entire lesson to listing the differences between SQL and NoSQL databases. 
One major difference is the way they store data. 

- SQL databases store data using tables, then they relate data through foreign keys
- NoSQL databases store data in multiple other ways 
  MongoDB specifically uses the Collection Document Model 

#### How it Works

GENERAL:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211019142708233.png" alt="image-20211019142708233" style="zoom: 67%;" />

EXAMPLE:

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211019143417959.png" alt="image-20211019143417959" style="zoom: 80%;" />

| TERM       | COLOR  | EXPLAINED                                                    |
| ---------- | ------ | ------------------------------------------------------------ |
| database   | green  | A container for a collection or several<br />Each project usually has its own database full of different collections |
| collection | yellow | A group of documents inside of a database<br />can have as many collections as we want in a database |
| document   | blue   | one unit of data stored in a collection<br />the data inside is stored using JSON format |
| field      | N/A    | A key value pair inside a document<br />A field can contain values such as JSON objects and arrays, instead of just string, numbers, Booleans...etc (unlike in SQL databases) |

#### Schema-less Data

MongoDB has no schema, which is not the case with all other SQL databases

- You can have multiple documents in the same collection whose KVP values are allowed to equal different types- which offers greater flexibility
- Collection 1: `"gender": true`           `Collection 2: "gender": "FEMALE"`
- That being said, you shouldn't abuse this added flexibility or even use it at all if possible

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211019144137274.png" alt="image-20211019144137274" style="zoom:67%;" />

In SQL databases, tables adhere to a schema you define. 
So, "gender" would be forced to equal a Boolean or a String depending on what you chose. 
You wouldn't be able to mix things up like you do above. 



### Setup on your Computer

#### Computer Installs

> Source: https://www.youtube.com/watch?v=wcx3f0eUiAw

1. Install the community version of MongoDB on your computer 
   https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

- Get the free version, along with the compass GUI
- Install it as a windows service 

2. Install Mongosh- the shell necessary for accessing and reading database queries
   https://docs.mongodb.com/mongodb-shell/install/

#### GUI's

You have options for which GUI you want to use
Keep in mind the Studio3T is paid, and it's free version Robo3T has way less features

1. Install Studio3T,  a GUI that helps visualize all your databases (pick the most powerful version)
   https://studio3t.com/download/
2. Install MongoDB compass

#### Your MongoDB Install Folder

Go 1 version folder deeper starting here: 	C:\Program Files\MongoDB\Server\

![image-20211019205832095](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211019205832095.png)

| FOLDER | CONTAINS                                                     |
| ------ | ------------------------------------------------------------ |
| bin    | where all your executables are (pin this to quick-access in windows)<br />including the Mongo shell which we use to communicate with databases from the command line |
| data   | where all your database information will be stored           |
| logs   | where all logs are going to be stored                        |

#### Testing if you Installed MongoDB Properly

Reminder Mongo's version will change from 5.0 to something else later on ▼▼

```
Find your MongoDB folder in the file explorer, then enter the bin folder
C:\Program Files\MongoDB\Server\5.0\bin			(assuming standard config options)
```

> ![image-20211019204926464](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211019204926464.png)
>
> EXECUTABLES:
> mongod - The database server.
> mongos - Sharding router.
> mongo  - The MongoDB shell (uses interactive javascript)

Press the `mongo` application, as highlighted in the image, then a command window will open
Enter `show dbs`, then you should receive the following...

![image-20211019205406769](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211019205406769.png)



### Initially Connect to the MongoDB Database

You have 2 general approaches when it comes to connecting with your database: Drivers, and ODM's

#### Drivers

- MongoDB has many drivers that let you communicate with their databases- and they're language dependent
- We'll be using the Node.js driver, but you can check out the others here
  https://docs.mongodb.com/drivers/

#### ODM's

- Like drivers, MongoDB has a multitude of language dependent ODM's that help you connect to servers and perform CRUD operations
- The most popular ODM for JS is Mongoose

Which to Learn First:

Learn drivers first because you can use your knowledge of it as a base
It makes learning ODM's much easier afterwards

#### Connect to Database

When working with databases, it's ideal to look at the data your messing with using a GUI
In MongoDB compass, you should connect to your database first

- If you're using MongoDB Atlas, connect using a cluster ID
- If using regular MongoDB, connect using localhost:27017- that's the default port



### Tips and Tricks

#### Fast Access to Mongo Shell

Pin the Mongo shell button to the taskbar or quick access menu to get access to it with 1 or 2 clicks
This saves a lot of time compared to searching for its location in the file explorer

#### Easier Command Typing

Type out all your commands in VS Code, or use edited versions of this chapter's code snippets
Afterwards, copy paste them into the MongoDB shell

VSC EDITOR > MONGO SHELL

1. Autocomplete double brackets

- Less confusing than remembering when to close them 1 by 1
- Also, the MongoDB commands are extremely nesting heavy

2. Auto formatting with Prettier
3. Alerts you with red squiggly lines if you make a syntax error
4. Can click the middle of a sentence or code line to edit there directly
   Mongo Shell makes you back arrow all the way through

#### Indication your Command Failed

If your Mongo Shell command contains a syntax error, you'll get a block of text returned to you
However, if your command affected nothing, the indication is a bit more subtle

- Look at the response object after a command is entered, every time
  You should test complex commands in the terminal before placing them in your code
- If `matchedCount and modifiedCount` both equal 0, then your command affected nothing in the database you're in

![image-20211021205927528](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021205927528.png)

# MongoDB Commands

> CRASH-COURSE SOURCE: 	https://www.youtube.com/watch?v=62C0Zs34WTE&t=2305s

Remember, we're going to be performing a lot of actions using...

- The MongoDB shell, which looks like a terminal window
- A MongoDB GUI, which can be used in place of the shell (or you can mix your usage)

Many commands you learn can be applied programmatically in your future projects
You must learn what their effects are first

TEST THINGS OUT WITH THE FOLLOWING JSON FILE

```
[
    {
        "type": "elephant",
        "name": "Sammy",
        "age": 54,
        "gender": false,
        "weight": 400 
    },
    {
        "type": "elephant",
        "name": "Ed",
        "age": 24,
        "gender": true,
        "weight": 367 
    },
    {
        "type": "elephant",
        "name": "John",
        "age": 54,
        "gender": true,
        "weight": 450 
    },
    {
        "type": "bear",
        "name": "Beary",
        "age": 33,
        "gender": false,
        "weight": 250 
    },
    {
        "type": "lion",
        "name": "Sam",
        "age": 20,
        "gender": true,
        "weight": 200 
    },
    {
        "type": "bear",
        "name": "Eddy",
        "age": 24,
        "gender": true,
        "weight": 120 
    },
    {
        "type": "sloth",
        "name": "Lily",
        "age": 14,
        "gender": false,
        "weight": 10 
    },
    {
        "type": "cheetah",
        "name": "John",
        "age": 20,
        "gender": true,
        "weight": 50 
    },
    {
        "type": "horse",
        "name": "Morgan",
        "age": 15,
        "gender": false,
        "weight": 150 
    },
    {
        "type": "mouse",
        "name": "Shelby",
        "age": 3,
        "gender": false,
        "weight": 0.3 
    }
]
```



### Basic Actions in the Mongo Shell

The Mongo shell looks exactly like a windows command prompt window, and it behaves similarly

#### Basic Commands

These commands help you see where the shell is
Make sure to check what database you're in before you start making changes

```
show dbs			shows all databases in current MongoDB instance
db					shows the name of the current database the shell is in
show collections	lists out all collections in the database you're in currently

cls				clears screen, but maintains the state you're in
CTRL W			clear current line (may require more than 1 press sometimes)

exit			close MongoDB shell
CTRL C 			close MongoDB shell
```

#### Preferred Settings

![image-20211020133014338](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211020133014338.png)

#### Copy Pasting

COPY:

```
highlight text → CTRL C → left click inside of window
```

PASTE METHOD 1:
This works with keyboard shortcuts too, but it triggers a noise for some reason

```
CTRL V → wait a sec → right click → left click inside of window		
```

PASTE METHOD 2:
Right click the upper border of the shell's window

![image-20211020132554425](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211020132554425.png)

#### Prettify Outputs

By default, the results you get back are pretty ugly and unformatted
Tack on `.pretty()` at the end of a command, and you'll prettify your results

DIFFERENCE:

![image-20211020145120560](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211020145120560.png)

### Creating Databases, Collections, Documents, Fields

ASSUMPTION:
You navigated to the database you wish to edit before you enter any of these commands

```
use database-name
```

——————————————————————————————————————————————————————

#### Create Documents

Create a document inside a specified collection
If the collection under your supplied name does not exist yet, it will create a new one

```
db.collection-name.insertOne({ name: "Eli" })
```

Create multiple new documents inside a specified collection

```
db.collection-name.insertMany([{ name: "Eli", age: 15 }, { name: "Aya", age: 29 }])
```

#### Example: Create Database, Collection, & Documents

CREATE A DATABASE

```
use animals		create a database and nav there immediately
```

INSERT DOCUMENTS AFTER CREATING A mammals COLLECTION:

```
db.mammals.insertOne({ name: "dog", "legs": 4 })
db.mammals.insertMany([{name:"cat", legs: 4}, {name:"kanga", legs: 2}])
```

FINAL RESULT:
Notice how each document gets a unique object ID generated, just like in Firebase

> Database and collection we created ▼
> Database = animals         collection = mammals 
>
> ![image-20211019234726515](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211019234726515.png)

#### Insert or Update Fields (Upserting) 

EXAMPLE : 
Create a new field for the current data named "lastModified" and set it equal to the date

- This field does not exist initially, so it gets added
- If it did exist initially, it would get updated instead

```
db.mammals.updateOne(
  { _id: ObjectId("6172197925222a90f6b8c6d1") },
  { $set: { lastModified: new Date() } }
);
```

​								![image-20211021215423376](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021215423376.png)			→				![image-20211021220512051](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021220512051.png)



### Read Data with Filters

When looking through a database, we oftentimes don't want to look at every document
We need to apply filters to our searches- which is often referred to as querying

ASSUMPTION:
You navigated to the database you wish to edit before you enter any of these commands

```
use database-name
```

——————————————————————————————————————————————————————

#### How Matching Works

Matching operates using strict equality

![image-20211020120025327](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211020120025327.png)

The following command would not match with the above document:

```
db.collection-name.find( "address.street": "123 Main St")
```

However, this command would

```
db.collection-name.find( "address.street": "123 Main Street")
```



#### Fetch Documents with/without a Filter

![image-20211020105754293](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211020105754293.png)

Get all documents

```
db.collection-name.find()
```

——————————————————————————————————————————————————————
Get all documents that match a filter object

```
db.collection-name.find({ name: "kyle" })	 
gets all docs with the following KVP... name:kyle 

db.collection-name.find({ "address.street": "123 Main St" })
gets all docs with the following KVP... address : { street: "123 Main St" }
```

——————————————————————————————————————————————————————
Get all documents that match a filter object
But only return certain fields that you specify using argument 2, the `<selectObject>`

```
db.collection-name.find({ name: "kyle" }, { name: 1, age: 1 })
get all docs with a name:kyle KVP
but only return the name, age, & _id fields
```

——————————————————————————————————————————————————————
Get the first doc that matches the filter object

```
db.collection-name.findOne({ name: "kyle" })
get the first doc with the following KVP... name:kyle 
```

#### Count Matching Documents

Return the number of documents that match the filter object

```
db.collection-name.countDocuments({ name: "kyle" })
Return the number of docs that have the following KVP... name:kyle 
```

#### Verifying Uniqueness

In your API routes, a common operation will be for you to add a new document, but only if the email or username the visitor provides is unique

- To verify uniqueness, search a database for a document that has a certain email/username field
- If that search brings up nothing, its value will be null
  Base the rest of your code's actions on that

EXAMPLE: 
Unique email to make a new account document (from authentication chapter)

```react
export default async function handler(req, res) {
  if ((req.method = "POST")) {
    // Extract data from the request body
    const { email, password } = req.body;
    const hashedPassword = await encrypt(password); // hash the password 
    // Access db instance
    const client = await connectToDatabase();
    const db = client.db();
    // Check if a user with the submitted email exists already
    const existingUser = await db.collection("users").findOne({ email: email });
    console.log(existingUser)
    // If a user with this email exists, end the API route early
    if (existingUser) {
      res
        .status(422)
        .json({ message: "Account with this email exists already" });
      client.close();
      return;
    } 
    // If the email's unique, enter the "users" collection to make a new account doc
    const result = await db.collection("users").insertOne({
      email,
      password: hashedPassword, // is encrypted before insertion
    });
    client.close();
    res.status(201).json({ message: "Created user!" });
    //! WARNING: No error handling here yet
  }
}
```



### Read Modifiers

![image-20211021111236384](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021111236384.png) ![image-20211021111246064](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021111246064.png)

#### Pagination Combo

Skip the first 3 documents then show the next 2 afterwards

```
db.mammals.find().skip(3).limit(2)
```

![image-20211021114407266](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021114407266.png)

​										![image-20211021114318289](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021114318289.png)		 ![image-20211021114338505](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021114338505.png)



#### Sort Orders for +1 and -1

| SORTING...  | ORDER                      | undefined fields appear... |
| ----------- | -------------------------- | -------------------------- |
| Booleans +1 | false → true               | first                      |
| Booleans -1 | true → false               | last                       |
|             |                            |                            |
| Numbers +1  | lowest → highest           | first                      |
| Numbers -1  | highest → lowest           | last                       |
|             |                            |                            |
| Strings +1  | alphabetical order         | first                      |
| Strings -1  | reverse alphabetical order | last                       |

HOW THIS APPLIES:
Sort based on the numeric value of age (lowest first, highest last)

```
db.mammals.find().sort({age:1})
```

#### How Undefined Fields Affect Sorting

Sometimes the field your sorting is based on won't exist in one of your documents
If that's the case, the doc containing the undefined field will still be sorted along with the others

EXAMPLE: 
Sort based on type, which Greg's object does not have
Since type is a Boolean, let's search using...

```
db.mammals.find().sort({type:+1})		(Boolean +1)
```

![image-20211021113630092](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021113630092.png)

![image-20211021113259869](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021113259869.png)





### Comparison Operators for Complex Filtered Reads

We can add certain syntax that gives us more specific ways to search for documents
Mix and match the options we demonstrate below

#### Comparison Operators

> ![image-20211020143350767](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211020143350767.png)
>
> ![image-20211020143619839](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211020143619839.png)

#### Tests + Interesting Findings

EXAMPLE 1: 
Learned undefined equals false
Find documents whose gender KVP's are not equal to true

```
db.mammals.find({ gender: {$nin:[true]}}).pretty()
```

![image-20211020150056190](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211020150056190.png) ![image-20211020150125087](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211020150125087.png)

Our Greg object is considered a match for this query since not having that KVP is considered false by JavaScript

EXAMPLE 2: 
Write the same command in different ways

```
db.mammals.find({ age : 24, gender: true}).pretty()

db.mammals.find({ age : 24, gender: { $nin: [false]}}).pretty()
```

Both commands above accomplish the same thing, assuming our database only contains Boolean values for gender

1) Find docs with `age:24` and `gender:true`
2) Find docs with `age:24` and `gender: anything but false`

EXAMPLE 3:
Search for mammals whose age is greater then their weight

```
db.mammals.find({ $expr: { $gt: [ "$age", "$weight"]}}).pretty()
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211020153222370.png" alt="image-20211020153222370" style="zoom: 67%;" />

Updating and Upserting Data

In SQL databases, upserting is to insert a row into a database if it does not already exist
With NoSQL, the equivalent would be to add a KVP that doesn't exist

### Update Data

ASSUMPTION:
You navigated to the database you wish to edit before you enter any of these commands

```
use database-name
```

#### Update one Specific Document

UPDATE ONE DOCUMENT BASED ON ITS _ID
Change it so Sammy the elephant is now aged at 55, and weights 410 pounds
To target exactly one document, use its unique ID inside the filter object of updateOne()

```
db.mammals.updateOne(
  { _id: ObjectId("6170245aa6a655eb0c92df36") },	
  { $set: { age: 55, weight: 410 } }
);
```

![image-20211021134948632](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021134948632.png)	    →   	![image-20211021135307782](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021135307782.png)

UPDATE THE FIRST DOCUMENT THAT MATCHES THE FILTER OBJECT
Update the first animal with the name "Lily" and change its age to 18

```
db.mammals.updateOne(
  { name: "Lily" },	
  { $set: { age: 18 } }
);
```

![image-20211021140448603](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021140448603.png)		→		![image-20211021140629660](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021140629660.png)



#### Update Multiple Documents

UPDATE ALL DOCUMENTS IN A COLLECTION
Change all documents so that they have a new KVP: `trunk:true`

```
db.mammals.updateMany({}, { $set: { trunk: true } });
```



UPDATE ALL DOCS THAT MATCH A FILTER OBJECT:
Change all documents with `type:"elephant"` to have a new KVP: `trunk:true`

```
db.mammals.updateMany(
  { type: "elephant" },	
  { $set: { trunk: true } }
);
```

![image-20211021141403277](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021141403277.png)



### Relative & Time-based Updates

We don't always want to completely overwrite a document's field. 
Sometimes we'd like to change the field values based on what they currently are

#### $inc & $mul: Relative Num Changes 

Increase every document's age by 2 
Decrease every document's age by 5

```
db.mammals.updateMany({}, { $inc: { age: 2 } })
db.mammals.updateMany({}, { $inc: { age: -5 } })
// we can edit this command's filter object to make this change to specific docs
```

increase by 2:			![image-20211021150607249](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021150607249.png)		→			![image-20211021150623226](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021150623226.png)		

Multiply a document's weight value by negative 1.5, and its age value by 2

```
db.mammals.updateOne(
  { _id: ObjectId("61720be525222a90f6b8c6cc") },
  { $mul: { weight: NumberDecimal("-1.5"), age: 2 } }
)
```

​										![image-20211021205614557](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021205614557.png)			→			![image-20211021210230886](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021210230886.png)

#### $min & $max: Update based on a Comparison

Keep in mind this operator works on all sorts of data types
We're testing it on dates in this sub section

EXAMPLE 1:
Decide whether to change the dateEntered field based on a comparison
Update if the specified command value is LESS THAN the existing one

Starting date: `2013-10-01T05:00:00.000+00:00`
Specified date: `new Date("2013-09-25")`	(can make a new stamp instead of specifying outright)

```
db.mammals.updateOne(
  { _id: ObjectId("61720fe525222a90f6b8c6d0") },
  { $min: { dateEntered: new Date("2013-09-25") } }
);
```

​					![image-20211021212029122](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021212029122.png)			→			![image-20211021212117926](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021212117926.png)

The dateEntered field changed because the new date we proposed was older 
(less than equivalent for dates)

——————————————————————————————————————————————————————
EXAMPLE 2:
Decide whether to update the dateEntered field based on a comparison
Update if the specified command value is GREATER THAN the existing one

Starting date: `2013-09-25` unix timestamp
Specified date: `new Date("2019-11-25")`

```
db.mammals.updateOne(
  { _id: ObjectId("61720fe525222a90f6b8c6d0") },
  { $max: { dateEntered: new Date("2019-11-25") } }
);
```

​							![image-20211021212117926](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021212117926.png)			→			![image-20211021212514605](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021212514605.png)

#### $currentDate: Time-based Field Values

The examples for this operator are pretty complicated (and only work when updating existing fields)
Here are some alternative methods 

EXAMPLE 1: 
Create a new field for the current data named "lastModified" and set it equal to the date

```
db.mammals.updateOne(
  { _id: ObjectId("6172197925222a90f6b8c6d1") },
  { $set: { lastModified: new Date() } }
);
```

​								![image-20211021215423376](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021215423376.png)			→				![image-20211021220512051](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021220512051.png)

EXAMPLE 2: 
Update the "lastModified" field with the current Unix timestamp

```
db.mammals.updateOne(
  { _id: ObjectId("6172197925222a90f6b8c6d1") },
  { $set: { lastModified: new Date().getTime() } }
);
```

​								![image-20211021220512051](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021220512051.png)		→				![image-20211021222345290](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021222345290.png)

### The Remaining Complex Update Operators

#### $rename: Change field key names

Change the "age" field to a "years-old" field for all documents

```
db.mammals.updateMany({}, { $rename: { age: "years-old" } });
// could selectively choose documents with the filter object if we wished
```

​								![image-20211021150607249](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021150607249.png)		→			 ![image-20211021180602108](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021180602108.png)

#### $unset: Remove fields from documents

Remove the "years-old" field from every single document

```
db.mammals.updateMany({}, { $unset: { "years-old": "" } });
// could selectively choose documents with the filter object if we wished
```

​								![image-20211021180602108](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021180602108.png)			→			![image-20211021180905503](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021180905503.png)	

#### $push: Add Entries to the end of Arrays

Change 1 document's "arr" field, which is set equal to an array
Append 65 to the end of it

```
db.mammals.updateOne(
  { _id: ObjectId("6171e59b7a7a742927b90ff6") },
  { $push: { arr: 65 } }
);
// could make this change apply to all docs with a different filter object and updateMany instead of updateOne
```

​								![image-20211021181218648](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021181218648.png)			→			![image-20211021182251944](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021182251944.png)

#### $pull:  Remove Entry Values from Arrays

Remove the value 65 from the "arr" array inside of 1 document

```
db.mammals.updateOne(
  { _id: ObjectId("6171e59b7a7a742927b90ff6") },
  { $pull: { arr: 65 } }
);
```

​								![image-20211021182251944](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021182251944.png)			→			![image-20211021181218648](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211021181218648.png)



### Deleting Data

ASSUMPTION:
You navigated to the database you wish to edit before you enter any of these commands

```
use database-name
```

#### Wipe Entire Collections and Databases

DELETE AN ENTIRE DATABASE FROM EXISTENCE

```
db.dropDatabase()
```

DELETE ALL DOCUMENTS IN A COLLECTION
The collection itself and the database it belongs to will still exist afterwards

```
db.users.remove({})		wipe out all documents in the users collection inside
```

#### Delete Docs using Filter Objects

DELETE THE FIRST DOC THAT MATCHES THE FILTER OBJECT:
Remove the first doc that has `age:24`

```
db.mammals.deleteOne({ age: 24 });
```

DELETE ALL DOCS THAT MATCH THE FILTER OBJECT
Remove all documents that have `type:"elephant"`

```
db.mammals.deleteMany({ type: "elephant" });
```



### Perform Actions in the GUI

> To learn about all major features, check this out:
> https://www.youtube.com/watch?v=ydXCcLAi5aU&list=PLV2XyUzUBmk-_zKlaMeLxBhF_ZE8Drhbf&index=2&t=150s

#### Make Databases & Collections

CREATE YOUR DATABASE 		  ![image-20211019235109804](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211019235109804.png)  ![image-20211019235125689](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211019235125689.png)

CREATE A COLLECTION:	  		 ![image-20211019234911381](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211019234911381.png)

Regardless of how you make changes to the database, refresh the GUI to notice changes

![image-20211020020148475](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211020020148475.png)

#### Add new Fields

1. Hover over one of the documents, then hit the pen symbol which represents "Edit Document"

2. Add in a new field by hitting the + symbol that appears when you hover to the left of a field that's already present

   ​										![image-20211022005323177](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211022005323177.png)				 ![image-20211022005410266](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211022005410266.png)

3. Enter your field key value pair
   Remember you can change your value data types by hitting a drop down menu on the right

![image-20211022005622584](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211022005622584.png)

#### Edit Existing Fields

Hit the pen icon to edit your existing documents
Redefine the field values, and don't forget to specify the type (Double means number)

![image-20211022005323177](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211022005323177.png)

![image-20211022010357613](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211022010357613.png)

#### View Data in Table Form

Hit the button indicated by the blue arrow
Then type of each field will be shown beside the column name

![image-20211022005848644](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211022005848644.png)

#### Filter and Sort

Follow the prompts in this drop down menu and use standard Mongo Shell commands

![image-20211022010504523](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211022010504523.png)

### More Advanced Techniques

#### Combining Operators

There may be times where you need to combine several operators and methods at once to get a single complex task done in a single command. 

- Experiment with them during your project, and trial your error your way into a good solution
- Alternatively you can just break 1 complex task down into a series of simpler commands that you execute sequentially

#### Consult Documentation

- This crash course gives us a solid foundation for how to use MongoDB, but there are many methods and complex examples we haven't gotten to yet
- If a command is confusing you, look it up in the docs

### Connect to database through your Code

Knowing how to perform actions from the shell is great for testing, but we'll need to know how to implement them in our projects

#### Procedure

1. Create a `connectToDatabase` function in a helper file- you will be reusing it where ever you want to run command-like actions programmatically

```react
import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const cluster = {
    username: "JasonAdmin",
    password: "somethin",
    db: "auth-chap13",
  };
  // Get the URI from connecting to your project's db (connect to application)
  const mongoURI = `mongodb+srv://${cluster.username}:${cluster.password}@cluster0.ufiop.mongodb.net/${cluster.db}?retryWrites=true&w=majority`; 
  const client = await MongoClient.connect(mongoURI);
  return client;
} // no error handling used (warning)
```

2. In your Next.js code, connect to your database somewhere sensible and do the following:

```js
import { connectToDatabase } from "../../../helpers/db";
// inside a handler or something...
        const client = await connectToDatabase();
        const db = client.db();
        // Search the users collection for a doc/account with the submitted email
        const user = await db.collection("users").findOne({
          email: credentials.email,
        }); // can place any command here
		// after everything else ....

		client.close();
  		res.status(200).json({ message: "Password updated!" });
  		return;
```



# MongoDB Atlas: Access Database on your Code Editor

At this point, we know how to interact with hosted databases to perform CRUD operations
Now, let's learn how to access a database hosted on the cloud from our code in Next.js



### Series 1: Setup a MongoDB Cluster 

#### Actions on the MongoDB Atlas

> In video form:  (watch until 3:05)
> https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25616858#overview

1. Log into `cloud.mongodb.com` then click on the Atlas tab
2. Build a database and choose the Free/Shared option
   Leave all the default options chosen for your personal projects
3. Hit the "Database Access" Tab → Add a new database user for yourself
   Give yourself permission to "Read and Write to any database" (unlimited privileges)

> ![image-20211023145056018](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211023145056018.png)

4. Hit the "Network Access" tab then add your current IP address to the list of IP's that are allowed to make requests to the cluster

- All other IP's will get their requests blocked
- You can allow all IP's for test projects if you wish

> ![image-20211023150723600](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211023150723600.png)

5. Hit the "Connect" button → "Connect your Application" → Choose Node.js driver 
   Choose the Node.js Driver on the following modal that should have appeared
6. Copy/paste then edit the link
   To test if you did it properly, connect to your cluster using your edited link on MongoDB compass

> ![image-20211023121108873](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211023121108873.png)
>
> The code I circled in red will be crucial for connecting your Next.js application to the cluster
> myFirstDatabase will be one of the database names in your cluster
> <password> and JasonB will be different when you create other users

#### Actions in your Project Files

1. Install the official MongoDB driver on your Next project:  
   https://www.npmjs.com/package/mongodb

- We'll use it to communicate with MongoDB using the server side code inside our API routes
- Do not use it in the client-side (security risk)
  To talk to a database, we'll need credentials which must not be exposed to the dev tools

```
npm i mongodb
```

2. The same page with the npm install link also contains instructions to link our project to a MongoDB database- and we'll be following it partially

- These instructions are for connecting to a regular MongoDB server
- The only difference for us is that we're connecting to a MongoDB cluster hosted on the cloud
  The URL we use will be different



### Series 2: How to Connect to your Next.js Project 

These tables provide some guidelines that tell you where and how to connect then talk to your database depending on the location you need it in

#### fetch Rules Depending on Location

| never fetch() inside...                            | exceptions                                           | correct alternative approach                                 |
| -------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------ |
| client side code to talk to databases specifically | Backend-as-a-service providers like Firebase (SDK's) | Call an API route whose code is server-side and hidden       |
| pre-render methods to call a local API route       | using fetch() on a 3rd party or external API         | Write the server side code inside the pre-render method instead |

#### How to Safely use Credentials to Talk to Databases

Due to security rules we must abide by, we cannot simply talk to a database anywhere we want. 

- We use login credentials to tell the DB that we're allowed to access its private information
- These details are in our code, so we must ensure that they're hidden from anyone who knows how the dev tools work
- We can achieve this by placing our credentials inside server-side code
  The following table tells you how to talk to a database depending on where you wish to do so

| talk to database inside... | approach                                                     | details                                                      |
| -------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| a pre-render method        | connect and talk to cloud database directly inside           | use `MongoClient.connect()` and not fetch()                  |
| client-side code           | create an API route that talks to the cloud database using `MongoClient.connect() `and performs CRUD operations based on the request type it receives | `fetch("/api-route/absURL")` inside your client-side code to make a request to your local API |

It may be possible to call an API route inside a pre-render method, but it is not recommended according to the Next.js docs

> https://nextjs.org/docs/basic-features/data-fetching#write-server-side-code-directly
>
> ![image-20211025154906014](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211025154906014.png)



### Series 3: CRUD Demonstration

> https://github.com/Jason2B3/next-api				commit NF1		
>
> pages/index.js								where we invoke the API routes
> pages/api/mongo/crud.js			where we define the API routes

#### CRUD Objectives

We're reusing a demo we initially created in the API Routes chapter. 

- There, we performed CRUD operations using a JSON file as a mock backend. 
- Now we'll perform the same tasks plus a few extra with a real database instead

ALL OBJECTIVES OUTLINED:

|        | when                                                         | action                                                       |
| ------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| CREATE | Send feedback button pressed                                 | add a new document whose fields are based on the input fields<br />(if the email is not in the database collection already) |
| READ   | On startup                                                   | display the associated document's contents                   |
| UPDATE | Send feedback button's pressed with an existing email typed in the field | change the "comment" field for that document                 |
| DELETE | Remove feedback button's pressed with an existing email typed in the field | remove the document from the database                        |

Existing email: An email that's already got a dedicated document in the database this webpage edits

> ![image-20211025030351505](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211025030351505.png)
>
> Keep in mind that for now, you must reload the page to notice changes on the bottom
> We can fix this, but that requires more work which is unrelated to learning about MongoDB

#### Atlas Cluster Information

> Account associated:		jasonxtuyotech@gmail.com
> Cluster name: 					cluster0	(was named first-cluster when the following pic was taken)
>
> Database: 													email-list
> Collection we'll be working with: 		  demo2

![image-20211024154209605](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211024154209605.png)

#### The API Route

> FILE:	 pages/api/mongo/crud.js		
> (contains no error handling, so remember to incorporate that in your future projects)

Code:

```react
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const cluster = {
    username: "JasonAdmin",
    mongoPassword: "2BReborn",
    database: "email-list",
    collection: "demo2",
  };
  const mongoURI= `mongodb+srv://JasonAdmin:${cluster.mongoPassword}@cluster0.ufiop.mongodb.net/${cluster.database}?retryWrites=true&w=majority`
  
  if (req.method === "POST") {
    // Organize the data you made the request with
    const feedbackObj = {
      email: req.body.email,
      comment: req.body.comment,
    };
    const client = await MongoClient.connect(mongoURI);
    const db = client.db(); // get ahold of that database

    // See if this email has been used in the database already
    const check = await db
      .collection(cluster.collection)
      .findOne({ email: req.body.email });

    // Check if a doc with that email exists yet (check=null if it doesn't)
    // Create a new doc in this case
    console.log(check);
    if (!check) {
      await db.collection(cluster.collection).insertOne(feedbackObj);
      client.close();
      res.status(200).json({ message: "POST complete" });
      return;
    }

    // If a doc with that email does exist, update it instead of creating a new doc
    if (check) {
      await db
        .collection(cluster.collection)
        .updateOne({ _id: check._id }, { $set: feedbackObj });
      client.close();
      res.status(200).json({ message: "UPDATE complete" });
      return;
    }
  }
  // -----------------------------------------------------------------
  if (req.method === "DELETE") {
    const client = await MongoClient.connect(mongoURI);
    const db = client.db(); // get ahold of that database
    // See if this email has been used in the database already
    const check = await db
      .collection(cluster.collection)
      .findOne({ email: req.body.email });
    // If a doc with that email does exist, delete it
    if (check) {
      await db.collection(cluster.collection).deleteOne({ _id: check._id });
      client.close();
      res.status(200).json({ message: "DELETE complete" });
      return;
    }
    // If a doc with that email does not exist, return an error
    if (!check) {
      client.close();
      res.status(404).json({ message: "No account found for this email" });
      return;
    }
  } 
  else {
    res
      .status(404)
      .json({ message: "No useful actions for that request type!" });
  }
}
```

#### Invoking API Routes in your Client-Side Code and Pre-render Methods

The following images are snapshots of the code used for the lesson in part 3 of this series
Look at how we follow the approaches outlined in the tables from the previous lesson

> FILE THESE PICTURES ARE IN:	pages/index/js

IN PRE-RENDER METHODS:

> ![image-20211025170420441](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211025170420441.png)

CLIENT-SIDE:

```react
import { MongoClient } from "mongodb"; // near the top, as shown in the prev. photo
```

![image-20211025170643720](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211025170643720.png)

#### If No Data is in the Collection we Read

If no data exists in that collection we read inside getStaticProps, `mongoData= []`
Write conditional JSX in case `props.mongoData.length===0`

![image-20211025172953528](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211025172953528.png)

Test this out by searching for a collection that does not exist yet

![image-20211025173049030](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211025173049030.png)		![image-20211025173106936](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211025173106936.png)

### Series 4: Error Handling MongoDB API Routes

In the 3rd lesson in this series, we neglected to include error handling because it would add a lot of extra code that makes it harder to understand how we communicate with our MongoDB database

#### Demo

This example's much too long to include in my notes, but reading these code commits with the notes should be sufficient

> https://github.com/Jason2B3/next-api			entire repo
> https://github.com/Jason2B3/next-api/blob/master/pages/api/mongo/crud.js	file of interest
>
> commit NF1: 	without error handling
> commit NF2: 	commit NF2: CRUD error handling included but needs refactoring (images' source)
> commit NF3:	 refactored CRUD with error handling

#### Where to Handle Errors 

1. When we connect to the database using `MongoClient.connect()`

![image-20211026013311281](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211026013311281.png)

2. When we make any sort of query to the database 
   Could be `insertOne, deleteOne, updateOne` ... whatever

![image-20211026013423232](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211026013423232.png)

#### How to Handle Errors

Create a try/catch block for every instance where error handling's required

TRY:

- The try block contains the code you want executed to successfully implement your desired action
- The final successful operation in the process should enact `res.status(200).json({message: "operation complete"})`, or something similar

CATCH:
The catch block contains code you want executed if your desired actions fail
Each one should do 3 things:

1. Close the database client session
2. Enact ` res.status(500).json({ message: "Operation failed!" });` or something similar
3. End the function execution with `return`

> ![image-20211026013535167](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211026013535167.png)
>
> TRY EXPLAINED:
> we have a series of try/catches leading up to this point (hence the Part 3)
> if this try block succeeds, the API route is finished successfully
> so, we include res.status(200).json({message: "success"})
>
> CATCH EXPLAINED well enough already

#### Refactoring Helper Function

If you look at commit NF2, you'll see that all CRUD operations work and have error handling
The problem is, there is a ton of repeated code which can be abstracted into a helper function

Replace multiple instances of code like this:	
(error/success code numbers, and messages vary)

```react
  client.close()
  res.status(500).json({message:"Account deletion failed"})
  return;
```

With this helper function

```react
  function close_res_return(client, endSession, codeNum, message) {
    if (endSession) client.close(); // can hold off on ending the db session
    res.status(codeNum).json({ message });
    return; // exits the helperFN, but the API route still goes on
  }
```

How to call the helper function:

```react
  close_res_return(client, true, 200, "operation succeeded")
  return // you still must end the API route manually 
```

#### Refactoring Demonstrated in commit NF3

Before: ![image-20211026013535167](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211026013535167.png)

After:  ![image-20211026031120186](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211026031120186.png)



### Series 5: Error Handling Pre-rendered Mongo Queries

Let's learn how to error-handle when we talk to databases inside our pre-render methods

FULL DISCLOSURE:
I haven't seen anyone error handle pre-render methods yet, and I devised the following approaches to doing so myself

#### Approach

Handle errors similarly to how we did in the series 4 lesson

- Use try/catch on every `MongoClient.connect()` and database query
- Instead of ending API routes, return props to be used by the component function
  Conditionally render specific JSX if we return a `props.error` object

#### Demo

> https://github.com/Jason2B3/next-api			commit NF5

pages/index.js

```react
export async function getStaticProps() {
  // READ our database on startup
  const cluster = {  details not relevant to this lesson};
  const mongoURI = ... long URL
  let client;
  try {
    client = await MongoClient.connect(mongoURI);
  } catch (err) {
    return {
      props: { mongoData: null, error: "Could not connect to database" },
    };
  }
  const db = client.db(); // get ahold of that database
  let collection, results;
  try {
    collection = db.collection(cluster.collection);
    results = await collection.find().sort().toArray(); 
  } catch (err) {
	client.close(); // close the database instance
    return {
      props: { mongoData: null, error: "Could not read database" },
      // create some conditional JSX if props.error exists
    };
  }
  // Bug workaround ▼▼ (just parse your JSON-ified return from the database)
  const parsedResults = JSON.parse(JSON.stringify(results));
  client.close(); // close the database instance
  return {
    props: { mongoData: parsedResults },
  };
} 
```

Later in this same JS file...

```react
if (props.error) return <p>{props.error}</p>;
```

![image-20211026035315781](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211026035315781.png)

### Helper Functions 

#### Connect to Database

Use this anytime you need to connect to the db for whatever reason

```react
import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const cluster = {
    username: "JasonAdmin",
    password: "2BReborn",
    db: "auth-chap13",
  };
  const mongoURI = `mongodb+srv://${cluster.username}:${cluster.password}@cluster0.ufiop.mongodb.net/${cluster.db}?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(mongoURI);
  return client;
} // no error handling used here yet (fyi)
```



# ======= AUTHENTICATION =======



# Authentication Theory

Next.js makes authentication easier to implement- especially when you use a library like "next-auth"

### How Authentication Works in General

#### Examples of Protected Resources

You don't want users with no accounts or malicious attackers to access the following...

- Content behind paywalls if you're making mobile games or subscription services
- Private personal data like your address, bank details, identification numbers
- The ability to make requests to certain server endpoints
  Ex. You only want a logged in bank account holder to be able to request cash withdrawals

```
What if someone were to enter the following into their search bar?
www.mobilebanking.com/user-jason/send-funds 

We should only send successful requests while already logged into the correct profile for that specific link- or else there's anarchy
```

PROTECTED ROUTES ▼
A component that redirects users who are not authenticated or shows them a page that does not contain the relevant protected info 

PROTECTED SERVER ENDPOINTS (not an official term, I just made this up) ▼
Certain requests to a server require you to be signed in 
Ex. Making a password change request to a server needs you to be logged in, obviously

#### Authentication Process Explained

1. The website user enters data into a form, then submits it
   This sends a request using JS to the server which contains everyone's account data
2. On the server, your submission is validated or rejected

- It looks for an account with that email you gave, then checks if the associated password's correct
- It will send back a yes or no response, with more data attached 

3. If a yes response is sent back to the browser, it can access private resources afterwards

- That being said, there is more to a yes/no response than just an acceptance or rejection
- You need Auth Tokens or a Server-side session to make sure that a YES response is not being faked by a malicious third party (see why in the following lesson)

### Server-side Sessions, Auth Tokens, and JWT's

#### Why Auth Tokens and Server-Side Sessions Exist

Look at the image below- it shows us that a yes/no response from a server can allow the browser to give us access to private data or endpoints. 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211016231213624.png" alt="image-20211016231213624" style="zoom:80%;" />

- Anyone can reasonably fake a request saying yes, so there needs to be an added layer of proof
- This is where Authentication Tokens or Server-side Sessions come into play
  Although typically SPA's tend to go with Auth-Tokens... specifically JWT's

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211016232822869.png" alt="image-20211016232822869" style="zoom:80%;" />

#### Server-side Sessions

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210922003311969.png" alt="image-20210922003311969" style="zoom:80%;" />

Each step explained:

1. User submits a login form, that requires email/password to be correct to get a YES response back
   The correct combinations are stored on a private database 
2. The server creates a session in the database, then sends back ` session ID + YES`
   Since only the server can create this ID, fake YES responses won't work 

- This identifier will be saved in the browser's cookie jar
- The cookie jar is a place in the browser to save KVP's that will be sent to the server on each subsequent request. 
- The cookie can be configured in a way that its not accessible through JS to prevent vs cross scripting attacks

3. Make a request when the cookies have session ID KVP's to go along with them
4. Server will respond with the private data you requested for the account you're logged into

IN 1 SENTENCE:
We have a stateful session between the browser and backend server

#### Auth Tokens

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210922010316561.png" alt="image-20210922010316561" style="zoom:45%;" /> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210922010226874.png" alt="image-20210922010226874" style="zoom:45%;" />

1. User submits a login form, that requires email/password to be correct to get a YES response back
   The correct combinations are stored on a private database 
2. The server creates a JSON web token (JWT) using a private key known only by the server, then it's sent back to the browser where it's typically placed in localStorage
3. On future requests, the JWT will be added to the authorization header, prefixed with `Bearer`
   A JWT is just a very long string with some data encoded into that string
4. The server must validate the signature
   There's no need to search for a unique ID stored this time, which is more efficient for distributed cloud systems

Why fake YES responses don't work against auth tokens:

- Only the server knows how to generate that string because of the aforementioned private key
- You can create a very long string of equal length, but the server won't consider it valid since you need a secret key to create it in the first place

AUTOGRAPH ANALOGY:
Consider the JWT string you receive from the server as a signed string 
Any requests to protected data need a signed string, and regular strings will be rejected

#### Differences

Source: [(1) Session vs Token Authentication in 100 Seconds - YouTube](https://www.youtube.com/watch?v=UBUNrFtufWo)

|                       | authentication state is managed where? | problems                                                     |
| --------------------- | -------------------------------------- | ------------------------------------------------------------ |
| server-side           | on the server                          | performance issues for horizontally scaled cloud based systems |
| Authentication tokens | on the client-side                     | tokens can be hijacked from the user, are difficult to invalidate, and cannot be used to authenticate the user in the background on a server (very rare though, and this method's still viable) |

Horizontally scaled cloud based systems:

- Refers to situations where you may have your SPA served by server A, while the backend is with server B (very common these days)
- We generally prefer that the server remain "stateless"- so holding these identifiers there is typically not what we want

> Most common choice for SPA's → JWT's (JSON Web Tokens)
> For the record, most SPA's use Authentication tokens for reasons that is shown in this video
>
> [Next.js & React - The Complete Guide (incl. Two Paths!) | Udemy](https://www.udemy.com/course/nextjs-react-the-complete-guide/learn/lecture/25146406#questions)

#### Why SPA's Prefer Auth Tokens

In Next.js you learn how to pre-generate static pages using SSG and ISR

- These pages will be pre-rendered, meaning a request will not be sent to a server each time they're visited- therefore a stateful session between the browser and server isn't a good idea
- This is what some people call a "detached" front end and backend

DETACHED FRONT-END AND BACKEND
When some pages are static/stateless and do not care about the components connected to them

- The states of their connected components are irrelevant, so these pages are able to be pre-rendered They'll be the same every time regardless of circumstance
- Keep in mind that not all pages on a site are like this
  Any webpage rendered with SSR is automatically not detached



### JWT's, OAuth, Anonymous Authentication

> Source:
> https://www.udemy.com/course/nextjs-react-the-complete-guide/learn/lecture/25146406#notes

#### Parts of a JSON Web Token

JSON Web Tokens are generated with 3 main blocks:

1. Issuer data
   Data is automatically added into a token by the server when that token is generated

- This is metadata that's usually pre-configured by 3rd party authentication packages
- Developers don't usually set this up

2. Custom data- Ex. user data which changes per person
3. Secret key
   We set up this key on a server, and the client never gets to see it

- Having this key allows you to create valid tokens which are accepted by the server
- Only the server must know that key- we can't have anyone be able to generate keys that may give them access to sensitive information

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211013013048337.png" alt="image-20211013013048337" style="zoom:80%;" />

#### What makes JWT's Secure?

Tokens are just very long strings that contain user data expressed in a cryptic way

- They are not encrypted, meaning anyone with access to your laptop can unpack it and read the data inside without knowing the secret key
- Even so, the secret key is not part of the JWT
  You cannot read it even if you were to unpack the token

PURPOSE OF THE SECRET KEY
To prove that a certain server created a specific token

- If someone generates a fake token string, they'd use it to make a request to your server if they have malicious intentions
- The server would check if making that exact string was possible using its secret key. 
  If it couldn't have then the request gets rejected

#### What is OAuth?

HOW SIGNUP WORKED BEFORE:
Back in the early days of the web, people would give 3rd party websites their email and email-password to gain access to their services

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211013121707245.png" alt="image-20211013121707245" style="zoom:80%;" />

Nowadays that's practically unheard of because of OAuth. 
People no longer have to give out private information to potentially shady companies

HOW SIGNUP WORKS NOW

- You give your password to the 3rd party website or application, but after that you are immediately sent to a different webpage or tab that's hosted by the OAuth server
- Enter your email password there, then you're immediately logged into the 3rd party service
- You now only give your private data to one other party, instead of dozens or hundreds across your lifetime on the web

> Other benefits of OAuth:
> https://youtu.be/KT8ybowdyr0?t=190

#### Anonymous Authentication

Anonymous Authentication gives visitors the ability to access protected content without needing to supply a username and password

USE CASES

- It can be used to show users data before they sign up officially, much like how Amazon lets your browse products
- You create temporary anonymous accounts for them, which change after they sign up for real
  After that, their sign in credentials get linked to the anonymous account



### .env Variables in Next.js

#### Purpose

When writing code related to authentication, we have a lot of strings that need to be kept private
Ex. API keys, JWT's, passwords...etc

- We can't place these details in a good portion of our Next.js project files, because they get pushed to Github and are visible via dev tools
- The .env file is used to privately store data that you can call when building your project later on
  Imagine global variables, but private and not on the global scope per se 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211103001222623.png" alt="image-20211103001222623" style="zoom:80%;" />

#### Setting .env Variables

STARTING PREP:

1. Place any .env files inside .gitIgnore 

![image-20211103002201152](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211103002201152.png)

DECLARING YOUR .ENV VARIABLES

- Next.js supports `.env.local` by default, as long as you use that file name on the root level of your project
- When writing your .env file, use # to start a comment

.env.local

```
# Let's store some secret yet globally available variables
DB_USER=Jason
DB_PASSWORD=V1 345
```

CHANGING .ENV VARIABLE VALUES

- The values will remain the same after they're declared, even if you change their values in `.env.local` while in development mode
- To reset their values, shut off the `npm run dev` session, edit the variable values in `.env.local`, then run `npm run dev` once more



#### Using .env in Server-side Code

EXAMPLE:

```React
export async function getServerSideProps(){
  // Access .env.local variables and use them in backend code
  const user= process.env.DB_USER
  const password= process.env.DB_PASSWORD
  return {
    props: {user,password}
  }
}
export default function checkemail({user,password}) {
  console.log(user,password)
  return <CheckEmail1 />;
}
// OUTPUT: Jason V1 345
```

#### Access .env in Client-side Code

Next.js has a built in way to access .env variables in the front end

.env.local

```
NEXT_PUBLIC_SOMETHING=29string
```

any client-side js file

```js
export default function checkemail() {
  const vet = process.env.NEXT_PUBLIC_SOMETHING;
  console.log(vet);
  return <CheckEmail1 />;
} // console output is 29string
```

#### After Deployment

- Since your .env.local file stays private on your computer, any operations dependent on its variables will fail once your site gets deployed
- You must set environment variables on whatever platform you choose to host your webapps

> Setting environment variables on Vercel: 
> https://medium.com/geekculture/why-and-how-to-get-started-with-next-auth-61740558b45b#:~:text=without%20the%20delay.-,Deployment,-I%20will%20create



### NextAuth: Capabilities and Limitations

#### What NextAuth can do:

1. It simplifies the authentication process by offering several different sign-in methods 
   Email and password, Google account, Facebook, Twitter, Auth0...etc
2. A default page for sign in is automatically generated, but you can choose to design your own custom ones if you wish (same applies to other pages that the library supplies by default)
3. Generates authentication tokens for us (JWT's)

![image-20211017173953562](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211017173953562.png)

#### Client and Server-side Verification

NextAuth has server-side and client-side capabilities. 
We'll need to know whether users are logged in on both the front and back ends of our websites

CLIENT-SIDE USE CASES:
We may want to render different JSX for users depending on their login status

- When logged in, a page will render protected content on the webpage
- When not logged in, a page may redirect you to the login page before it shows you anything

SERVER-SIDE USE-CASES
Some API routes need to be protected or else any unauthorized person can trigger them

- Before someone attempts to change a password, you may force a user to give their user name and password to you
- If that API route wasn't protected, anyone could change the password of an account that does not belong to them

#### The 4 Sign-in Provider Types

A user can be signed in via 4 different methods

To get an understanding of how to implement each, check this out: 
https://next-auth.js.org/configuration/providers#available-providers

| METHOD                  | EXPLAIN                                                      | Requires Database |
| ----------------------- | ------------------------------------------------------------ | ----------------- |
| Built-in OAuth Provider | GitHub, Google, Twitter...etc<br />All have built in OAuth capabilities | No                |
| Custom OAuth Provider   | You can use an OAuth provider that isn't built-in by using a custom object | ??                |
| Email                   | Uses magic links that get sent to your email so you can sign in | Yes               |
| Credentials             | Arbitrary credentials like Username and password that apply only to your site (also works for 2-factor-auth) |                   |

TIPS

You should typically have an email provider set up to go along with Built-in ones
In case they lose access to their account on a different platform

> Built-in OAuth Provider:	
> https://next-auth.js.org/configuration/providers#oauth-providers
>
> Custom OAuth Provider: 
> https://next-auth.js.org/configuration/providers#using-a-custom-provider
>
> Email:					https://next-auth.js.org/configuration/providers#email-provider
> Credentials:		 https://next-auth.js.org/configuration/providers#credentials-provider

#### NextAuth Limitations

User creation is not handled by this library- code that in yourself when necessary 

- This is a negative only when you're going with email/password approach
- Most built-in OAuth providers already handle that themselves- so this point doesn't apply to them
  Ex. If you have a gmail, you have a Google account already

REWORDED:
Next Auth helps us authenticate users, and to generate tokens for those users
When it comes to creating the users themselves, we must do some legwork



### NextAuth: Installs & General Setup

ADDITIONAL SERVICES WE USE:

Before starting, we signed up for accounts on OAuth and SendGrid
You won't always need these services, but some tasks in this chapter require it

- For the record, SendGrid is often blocked by email providers because of their free tier
  Scammers use it to send suspicious emails, leading to the service's sketchy rep
- On professional projects, swap out SendGrid for an alternative that only offers paid plans
  Choose from this list:    [Well-known services (nodemailer.com)](http://nodemailer.com/smtp/well-known/)

#### npm installs

1. Install the library- make sure the documentation you're reading matches the installed version
   Syntax changes when switching from v3 → v4 for example

```
npm install --save next-auth		installs v3 (no longer maintained)
npm install next-auth@beta			installs v4
```

2. Install a hasing library
   When storing passwords on a database, you need to hash them instead of saving them outright

- If an employee or 3rd party hacker compromises MongoDB or whatever database you rely on, they'll be able to see everything
- If they're hashed, they will have to decrypt them- which is not easy to do

```
npm install bcryptjs
```

#### _app.js 

Wrap `<Provider>` tags around all the JSX in the return statement 

```react
import { Provider } from "next-auth/client"; // v3 syntax (seems to work in v4 beta)

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
       <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
```

WHY USE THESE?
The code you write in your components and page files isn't changed by this Provider tag

> This video explains it better, but since the fix is so simple... whatever
> https://www.udemy.com/course/nextjs-react-the-complete-guide/learn/lecture/25146450#notes

- This helps eliminate redundant requests that check whether we are authorized, which boosts performance a bit
- This only works times where it's known that we are authorized before the page renders
  Aka. Whenever a page has server side guards to confirm login status before the page renders



### NextAuth: Reserved API Routes

NextAuth reserves a few API routes for itself, and we should avoid using them when making our own JS files in our Next project's pages folder

#### List

> Check out what each one does here: 
> https://next-auth.js.org/getting-started/rest-api

To keep things brief, I'll simply list each of these reserved routes as of late 2021

```
/api/auth/signin
/api/auth/signin:providerName
/api/auth/signout

/api/auth/providers
/api/auth/callback/:providerName
/api/auth/session
/api/auth/csrf
```



# Sending Emails

### Demo Project

> https://github.com/Jason2B3/email-testing

#### Description

We're going to learn how to send emails from the client-side, and the backend
Each approach requires a different library

![image-20211110224600887](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211110224600887.png)

- The JSX used to render this isn't particularly important. 
- Know that we use refs to capture the text inputs to these fields and use them to define our target emails for sending



### Send emails fr/ Backend

You can use API routes to send emails containing info you'd like to keep hidden from the front end

#### SendGrid Setup

1. Create an account then login

- Hit the Email API Tab → Integration guide → Web API → Follow the instructions there
- Save the API key for step 2

![image-20211110185816243](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211110185816243.png)

2. Create environment variables in .env.local 

```
SENDGRID_API=https://api.sendgrid.com/v3/mail/send
SENDGRID_API_KEY=SG.lfjifenihfufhgygeugyuwghdeyhg7373yy38yr0784
```

3. Install

```
npm install @sendgrid/mail
```

#### Front end Code

You can implement email sending in many ways. In our demo, we use a form whose submit button sends an API Route request using the input field's text content

pages/index.js

```react
  //% Make a request to sendVerificationEmail API route
  const submitHandler = async function () {
    const targetEmail = emailInput2.current.value; // from input field
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify({ email: targetEmail }),
      headers: { "Content-Type": "application/json" },
    });
    const parsed = await res.json();
    if(parsed.message==="Email sent") alert("Success operations")
    else alert("Failure operations")
    return;
  };
```

#### Backend Code

We define an API Route which sends an email using information from the request object- the target email being the most important thing

- Feel free to create more elegant emails to send out by creating your own custom template on the SendGrid platform
- The html KVP is how you go about using your custom template in your Next.js project code

pages/sendEmail.js

```react
const sgMail = require("@sendgrid/mail");

export default async function handler(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY); // connect to SendGrid account
  const { email } = req.body; 	// gave API route the target email via body
    
  // Specifics for the email that'll get sent
  const msg = {
    to: email, // Change to your recipient
    from: "jason2b3@gmail.com", // Change to your verified sender
    subject: "insert generic subject line",
    text: "Junebug",
    // Place email template in HTML form below (simplistic one used here)
    html: "<p>Secret code is GHF568</p>",
  };
  // Send the email 
  const request = await sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ message: "Email sent" });
    })
    .catch((error) => {
      console.error(error.text);
    }); // returns nothing- just sends an email
}
```



### Send Emails fr/ Front End

This library helps you send emails from either the front or backend. We'd like to email our new users signing up their verification PIN- private data. We'll use the backend capabilities

Tutorial:
https://www.youtube.com/watch?v=NgWGllOjkbs&t=225s

Install:

```
npm install emailjs-com
```

#### Collect Strings

Log into https://dashboard.emailjs.com/admin then collect the following strings
Place them in .env.local - where they can remain private yet accessible throughout your project

| PARAMETER   | LOCATION ON EMAILJS PLATFORM |
| ----------- | ---------------------------- |
| user_id     | Integration tab              |
| accessToken | Integration tab              |
| service_id  | Email services tab           |
| template_id | Email templates tab          |

#### Template Creation

- Anything defined in 2 sets of curly braces is a dynamic parameter
  Define these in the templateParams object in your front end code
- You can edit email templates or create new ones in your EmailJS platform

![image-20211109164942863](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211109164942863.png)

#### Front End Code

pages.index.js

```react
  // Send an email from the client side
  // BE AWARE: Your private keys from the EmailJS account are exposed this way
  // JUST USE THE BACKEND METHOD INSTEAD, IF POSSIBLE
  const submitFront = async function (e) {
    e.preventDefault();
    const email1 = emailInput1.current.value;
    const templateParams = {
      target: email1,
      message: "915GHT",
      from_name: "Jason2B3",
    };
    let sendMail;
    try {
      sendMail = await emailjs.send(
        "service_dayd5jv",
        "template_g2esr3na",
        templateParams,
        "user_dl0dPfS6T4kxFW3nogy"
      );
      if (sendMail.status !== 200) throw new Error(sendMail.text);
      alert("success! Email's been sent");
    } catch (errorObj) {
      console.log(errorObj);
      alert(errorObj.text);
    }
  };
```



# NextAuth Credentials Provider PART 1: Basic Setup & Helpers

List of featured tutorials for NextAuth

> https://next-auth.js.org/tutorials

### Chapter Project Requirements

#### localhost:3000

Should be visible to everyone, regardless of login status

![image-20211025203229400](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211025203229400.png)

#### localhost:3000/auth

- Should only be accessible if we are not logged in yet
- If visited while logged in or a successful login/signup occurs, redirect to the /profile webpage
- Sign up: Create an account and store credentials in a Mongo Atlas cluster
  Log in: Once an account is created, let users log in using this webpage

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211025203300664.png" alt="image-20211025203300664" style="zoom:80%;" /> 		<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211025203321009.png" alt="image-20211025203321009" style="zoom:80%;" />

#### localhost:3000/profile

- Get here by pressing the Profile Button while logged in only
- If the user is not logged in, we should get redirected to the /auth page
- Code the logic that let's people change their passwords

![image-20211028035215598](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211028035215598.png)

![image-20211025203404219](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211025203404219.png)



### Signup Process: Create Users on a DB, Hash Passwords

This lesson actually does not involve Next Auth in any way

> commit n220 or n220B

#### Objectives

1. Accept email and password submissions from the form shown below
2. Use an API route to save user accounts to our MongoDB database in the cloud
3. Make sure accounts use a unique email address 

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211025203321009.png" alt="image-20211025203321009" style="zoom:80%;" />

#### Creating an API Route to Create new Users

DISCLAIMER:
We have not incorporated error handling in most of our functions here, to keep things lean
In professional projects, this will need to be accounted for

HELPER FUNCTIONS:

helpers.db.js	→ connects us to the Mongo database and creates a session

```react
import { MongoClient } from "mongodb";
export async function connectToDatabase() {
  const cluster = {
    username: "JasonAdmin",
    password: "2BReborn",
    db: "auth-chap13",
  };
  const mongoURI = 'long URI string';
  const client = await MongoClient.connect(mongoURI);
  return client;
} // no error handling used (warning)
```

helpers/auth.js	→	hashes a password we feed it

```react
import { hash } from "bcryptjs";
export async function encrypt(password) {
  // the higher the num, the more secure, but the slower this function takes
  const hashed = await hash(password, 12); // 12 is considered good
  return hashed;
}
```

API ROUTE TO CREATE A NEW USER:	/pages/api/auth/signup.js

```react
import { connectToDatabase } from "../../../helpers/db";
import { encrypt } from "../../../helpers/auth";

export default async function handler(req, res) {
  if ((req.method = "POST")) {
    // Extract data from the request body
    const { email, password } = req.body;
    const hashedPassword = await encrypt(password); // encrypt the password
    // Access db instance
    const client = await connectToDatabase();
    const db = client.db();
    // Check if a user with the submitted email exists already
    const existingUser = await db.collection("users").findOne({ email: email });
    console.log(existingUser)
    // If this email's already in use, end the API route early
    if (existingUser) {
      res
        .status(422)
        .json({ message: "Account with this email exists already" });
      client.close();
      return;
    }
    // If email's unused, enter the "users" collection to make a new account doc
    const result = await db.collection("users").insertOne({
      email,
      password: hashedPassword, // is encrypted before insertion
    });
    client.close();
    res.status(201).json({ message: "Created user!" });
  } //! WARNING: No error handling here 
}
```

#### Calling the API Route

In our component, we simply make a POST request to our API route and supply the email/password in the body (nothing special here)

![image-20211026160003985](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211026160003985.png)

![image-20211026155943040](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211026155943040.png)



### Login Process via the Credentials Auth Provider

HOW LOGIN STATUS AFFECTS BOTH ENDS:
Let's learn how to log users in on the client side and the server side

- On the client-side, login status changes what we see and changes or even disables certain webpages or "routes" (not api routes, mind you)
- On the server-side , we need certain API routes to be off limits unless you're logged in

#### Backend Code

`pages/api/auth/[...nextauth].js`		(this file name is mandatory)

```react
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { verifyPassword } from "../../../helpers/auth";
import { connectToDatabase } from "../../../helpers/db";

export default NextAuth({
  session: { jwt: true }, // enable JWT's
  providers: [
      
    Providers.Credentials({
      // This async FN runs when we get a login request
      // Place your own verification logic inside
      async authorize(credentials) {
        // Connect to the database and grab hold of the db instance
        const client = await connectToDatabase();
        const db = client.db();
        // Search the users collection for a doc/account with the submitted email
        const user = await db.collection("users").findOne({
          email: credentials.email,
        });
        // If an account is not found, throw an error
        // Will redirect user to a new page by default, but we can override it later
        
        if (!user) {
          client.close();
          throw new Error("No user found for that email");
        }
        // If an account is found, check if the associated password's correct
        // Compare the login attempt password to the encrypted one in MongoDB
        const isValid = await verifyPassword(
          credentials.password, // from input field
          user.password // encrypted version stored in MongoDB
        );
        // If the passwords do not match, throw an error and close the db session
        if (!isValid) {
          client.close();
          throw new Error("Incorrect password");
        }
        // If password match, the operation's a success so return an object
        client.close();
        return { email: user.email };
        // Place the user email inside- not the entire user obj (insecure)
      },
    }),
      
  ],
});
```

#### Front End Code

components/auth/auth-form.js 	(what matters)

```react
  async function submitHandler(e) {
    //% If we're in "log in" mode, sign into your existing account
    if (isLogin) {
      const result = await signIn("credentials", {
        // prevents authorize FN from redirecting to a new page if an error occurs
        redirect: false, 
        email: enteredEmail, // will equal credentials.email in the backend
        password: enteredPassword, // will equal credentials.password in the backend
      });
      console.log(result)	// just log how our login went for now
      //! Next, find a way to save our authenticated state (future lesson)
      //! Context API and Redux won't cut it since they reset on reload
      // Use getSession or useSession
    }
  }
```

To see the console logs showing what signIn() returns, take a look at this lesson's final subsection

#### signIn() Explained

We don't need to make a request to a local API route to sign in
The NextAuth library makes the sign in process easy by having you call the signin() method

```
signIn('providerName', {configurationObject})
```

EXAMPLE: Credentials provider with email/password

```react
// this would be somewhere inside an async function like a submitHandler
import { signIn } from 'next-auth/client';

const result= await signIn('credentials',{
    redirect: false,
    email: enteredEmail, 		// will equal credentials.email in the backend
    password: enteredPassword,  // will equal credentials.password in the backend
})
// enteredEmail and enteredPassword are just what's typed in the input fields 
```

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211027000932071.png" alt="image-20211027000932071" style="zoom:80%;" />

#### What signIn() Returns

Understand that this method is asynchronous which means it returns a promise

- This promise will always resolve, even if an error's thrown in our backend code where `NextAuth()` is called with our `authorize()` method and list of providers
- If the NextAuth() method fails, it simply returns an object that contains info about that failure
  The promise will not reject, just to reiterate
- If the NextAuth() method succeeds, it returns data that you specified when you coded it
  Just check the final return line

Upon successful login:       ![image-20211027022407208](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211027022407208.png)

Upon failed login to an account that doesn't exist:

![image-20211027024244744](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211027024244744.png)

Upon failed login to an account that exists:
The error message was assigned by the error we threw in our backend code [...nextauth].js

![image-20211027024211277](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211027024211277.png)





### NextAuth() Methods from Prev. Lesson Explained

#### Overview

What is it?

- This imported method returns a new function once it is called, a handler function to be specific
- NextAuth is technically an API route, which explains why it's the default return and why it returns another function in the first place

What does it do?

- This method's used to define what provider we plan to use for authentication
- In this chapter we're using Credentials
  Later we'll see built in OAuth providers like Google or Github
- This method requires a configuration object to be passed to it, so we can control how the login process works

#### Configure this with the Docs

The NextAuth documentation has dedicated webpages that explain how we can configure the NextAuth() method

> LINK : https://next-auth.js.org/configuration/options#session
>
> Left side of v4 docs ▼												Right side of v4 docs ▼
>
> ![image-20211026220440285](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211026220440285.png)                ![image-20211026220526904](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211026220526904.png) ![image-20211026220611303](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211026220611303.png)

#### async authorize(credentials)

This is an function Next.js calls when it receives an incoming login request

- It is asynchronous and returns a promise
- As an argument, we get the credentials that were submitted (email/password)

PURPOSE:
Use your own logic inside of it to verify whether the submitted credentials match those of an existing account 

DEFAULT BEHAVIOURS:

- If you `throw new Error()` inside the authorize method, it will redirect the visitor to another page by default- thankfully you can override this behavior so you stay on the same page
- If you return an object in this function, NextAuth considers the authentication as a success
  The credentials you provide must reach the point in the function where an obj is returned though

#### Overriding Default Redirect

Most of the time, we don't want an error inside authorize() to take us to a new error page
A small message on the page we're currently on is usually enough

- To override the default redirect when an error's thrown inside the authorize method, use the signIn() method on the front end
- This method's used when you want to start the login process in response to something the website's visitor does

![image-20211027000723681](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211027000723681.png)           ![image-20211027000932071](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211027000932071.png)

#### session: { }

An object where you can configure how the authenticated user will be managed
In this project we set `jwt:true` so we use JWT's instead of server-side sessions

> https://next-auth.js.org/configuration/options#session
>
> ![image-20211026225112636](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211026225112636.png)



### connectToDatabase() Helper Function

#### Procedure

CREATE HELPER FUNCTION:

Create a `connectToDatabase` function in a helper file- you will be reusing it where ever you want to run command-like actions programmatically

```react
import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const cluster = {
    username: "JasonAdmin",
    password: "somethin",
    db: "auth-chap13",
  };
  // Get the URI from connecting to your project's db (connect to application)
  const mongoURI = `mongodb+srv://${cluster.username}:${cluster.password}@cluster0.ufiop.mongodb.net/${cluster.db}?retryWrites=true&w=majority`; 
  const client = await MongoClient.connect(mongoURI);
  return client;
} // no error handling used (warning)
```

CALL IT WHERE YOU WANT TO TALK TO YOUR DB:

```js
import { connectToDatabase } from "../../../helpers/db";
// inside a handler, API route or something (works on both front and backend)

        const client = await connectToDatabase();
        const db = client.db();
        // Search the users collection for a doc/account with the submitted email
        const user = await db.collection("users").findOne({
          email: credentials.email,
        }); // can place any command here
		// after everything else ....

		client.close();
  		res.status(200).json({ message: "Password updated!" });
  		return;
```



### Hashing with bcrypt.js

When we store sensitive information like passwords on databases, it's not wise to save them outright
If anyone breaches that database, private info is openly available

#### Hashing vs Decrypting

COMPARE:

|            | reversible | how to check for matched strings                             |
| ---------- | ---------- | ------------------------------------------------------------ |
| hashing    | no         | submit a regular string, hash it, then compare it to an already-hashed version to see if they're the same |
| encryption | yes        | decryption<br />maybe you can pull the same trick hashing uses.. i don't know atm |

Hashing is a 1-way procedure that turns an ordinary string into a complex typed one 
This is what gives our stored data extra security

> ![image-20211028222439930](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211028222439930.png)
>
> The original password i submitted for email@hotmail.com was only a few letters long

#### bcrypt.js Helper Functions

INSTALL FIRST:

```
npm i bcryptjs
```

USEFUL HELPER FUNCTIONS:

1. Hashes your information into a complex string 
2. Compares a regular string to the same string that has been encrypted already
   Great for hashed password comparisons

```js
import { compare, hash } from "bcryptjs";

// Hash a string before you store it in a database (password for example)
export async function encrypt(password) {
  // the higher the num, the more secure, but the slower this function takes
  const hashed = await hash(password, 12); // 12 is considered good
  return hashed;
}

// See if arg 1's regularly typed password matches arg 2's which is encrypted
export async function verifyPassword(password, hashedVersion) {
  const isValid = await compare(password, hashedVersion);
  return isValid; // T/F
}
```

#### Mistake in my notes

I have referred to hashing as "encryption" numerous times, and even named my hashing helper function `encrypt()` 

- This is technically misinformation, so I'll have to redo my notes for the Credentials Provider if I choose to teach someone NextAuth
- Any readers should be aware of this error- I apologize (hi June-bug)



# NextAuth Cred Provider PART 2: Protect Front & Backends

### ---- Protect the Frontend ----



### useSession()  and signOut()

- Once a user signs in, we must ensure that they remain signed in, for a while
- We can't use a tool like Redux or Context API to save our auth state in the memory, because it gets reset on each reload

#### NextAuth Session Tokens

Next.js adds cookies after we sign in successfully with NextAuth. 
Find them in the devtools: 	Application tab → cookies → select your domain

![image-20211027030914394](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211027030914394.png)

To maintain our login status, we must check whether a valid JWT token exists in that location
We could do this manually, but NextAuth has a dedicated method for this; `useSession()`

#### useSession() Explained

![image-20211027202445523](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211027202445523.png)

```react
import { useSession } from "next-auth/client";

// inside a comp function...
const [session, loading] = useSession();
console.log("session:", session);
console.log("loading:", loading);
```

session: Describes the active session
loading: Tells us whether Next.js is currently logging in or not (Boolean)

VALUES DEPENDING ON DIFFERENT LOGIN STATES:

> When not logged in:  	![image-20211027155026862](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211027155026862.png) 	
>
> When logged in:   	 ![image-20211027035027662](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211027035027662.png)

Extra details:

- The email KVP inside the user object is the email that we're currently logged in with
- The expiration date will be prolonged automatically so long as the user is active on the webpage

#### Conditional JSX based on useSession

Consider useSession like an auth-version of useState. 
Render JSX conditionally based on the values of `session` and `loading`

COMMON PATTERNS I'VE NOTICED:

| scenario                                                     | session   | loading | if condition              |
| ------------------------------------------------------------ | --------- | ------- | ------------------------- |
| not logged in                                                | undefined | false   | `if(!session)`            |
| logged in                                                    | object    | false   | `if(session && !loading)` |
| logged in and you visit a new page<br />infinite loading bug | undefined | true    | use getSession instead    |

- Take these with a grain of salt- I could be wrong about them
- You should test what these values end up being while logged on/off on each page anyway

#### signOut()

This imported method signs out the user whenever it's called
It clears the JWT cookie that NextAuth saves to keep us logged in

- `signOut()` is an async method that returns a promise, but we don't need to await it or even place it inside an async function
- getSession or useSession variables change as soon as `signOut()` fires anyway, so we don't have to do anything ourselves

```react
// used alongside useSession or getSession
import { useSession, signOut } from "next-auth/client";  

// somewhere inside a component function...
const logoutHandler = () => signOut();
// this will be assigned to the logout button you see in one of the next photos
```

#### Demo

Make the following changes to the navbar

1. Render a message on the navbar that tells us what our login status is
2. Only show the Login link if we are not logged in- otherwise, do not render it
3. Only show the Profile and Logout links if we are currently logged in
4. Make the logout button log us out

![image-20211027131117766](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211027131117766.png)

![image-20211027132147498](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211027132147498.png)

/components/layout/main-navigation.js

```react
import { useSession, signOut } from "next-auth/client";

function MainNavigation() {
  const [session, loading] = useSession();

  // Clear the JWT cookie that keep the user logged in
  const logoutHandler = () => signOut();
  // CONDITIONAL JSX BASED ON getSession()
  let loginStatus;
  if (!session) loginStatus = "signed off";
  if (session && !loading) loginStatus = "logged in";
  // Only show the login link if we are not logged in already
  // Only show the Profile and Logout links when we are logged in
  return(view photos below)
}
```

Titular header: ![image-20211027132712649](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211027132712649.png)

Conditional nav buttons:	 ![image-20211027132745606](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211027132745606.png)

### getSession() : useSession() alt.

![image-20211027202518794](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211027202518794.png)

#### Problem with useSession()

> PROBLEM DEMONSTRATED HERE:	
> https://github.com/Jason2B3/auth-chap13		commit n225 part 1

When you log in then travel to a new page, sometimes you'll encounter the "infinite loading" bug
It's when you visit a page while logged in and useSession produces the following values...

​																	![image-20211027203652207](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211027203652207.png)			 

You'll likely render JSX conditionally based on these values, which is a problem since `loading=true`

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211027203847231.png" alt="image-20211027203847231" style="zoom:80%;" /> ![image-20211027204256655](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211027204256655.png)

#### useSession vs getSession

useSession

- We immediately get the session and loading values, and they change when session data is fetched
- If session data is not fetched, their values won't change
  This is the case whether we stay logged off or stay logged in while travelling to new pages

getSession
We manage our own loading state, which is more accurate but requires extra legwork

- Sends a new request to get the latest session data
- We can react to the answer to the response we get back from it

BONUS: 
getSession() works in Node code, so feel free to use it inside pre-render methods or API routes

EXAMPLE:
Check out the following lesson where we implement Route Protection using getSession()



### Client-side Page Guards (CSPG)

Route protection is when you deliberately render different content or redirect to a new page if a user visits a URL while not authenticated

- Since the relevant content cannot be viewed unless logged in, it is protected 
- We use page guards to do that- either client or server-side page guards

#### Demo: Route Protection with getSession

> https://github.com/Jason2B3/auth-chap13			commit n225 part 2	

/components/profile/user-profile

```react
import React, { useEffect, useState } from "react";
import { getSession } from "next-auth/client";

export default function UserProfile() {
  // Create/manage your own loading and session states
  const [isLoading, setIsLoading] = useState(true);
  const [loadedSession, setLoadedSession] = useState(null);
  console.log(isLoading, loadedSession);
    
  useEffect(() => {
    const confirmSession = async function () {
      const session = await getSession(); // falsy if we aren't logged in
      setLoadedSession(session); // update our session state
      // If getSession returns a falsy, we must not be logged in
      // In this case, redirect the visitor to to the /auth path for authentication
      // WARNING: this method of redirecting resets our app (all state lost)
      if (!session) window.location.href = "/auth";
      else setIsLoading(false); // update our loading state (we're done now)
    };
    confirmSession();
  }, []);

  if (isLoading) return <p className={classes.profile}>Loading...</p>;
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}
```

When logged in, we see the following webpage: localhost:3000/profile

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211027214428234.png" alt="image-20211027214428234" style="zoom:67%;" />

When logged out, we get redirected to localhost:3000/auth (login page you've seen earlier in this chap)

#### What Happens when we Visit a Page while Logged In

We're specifically visiting localhost:3000/profile

![image-20211027212612370](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211027212612370.png)

This image tells a story.

|                                            | `isLoading`                                              | `loadedSession` |
| ------------------------------------------ | -------------------------------------------------------- | --------------- |
| when we first arrive at our page           | true, b/c that's the initial useState value  that we set | null            |
| when getSession is called inside useEffect | true                                                     | object          |
| when getSession async function completes   | false                                                    | object          |

#### Flickering

The previous subsection shows an image of the loading and session state values changing twice when we first visit a page

- It describes 3 phases: 	arrival → process of logging in → being logged in
- Whatever JSX we render in the "process of logging in" phase  will show for a short time
  This is what I refer to as "the flicker"

FROM THE EARLIER EXAMPLE:

```react
// snippet from the demo (could render a spinner or loading component instead)
if (isLoading) return <p className={classes.profile}>Loading...</p>;
```

Check out this video- I log in and you can briefly see what's rendered by the above JSX

> https://www.youtube.com/watch?v=R6AJs2JPrZQ

SOLUTION:
Using server-side page guards eliminates the flickering
It's up to you to decide whether that approach is worth using (it comes at a cost)



### Server-side Page Guards (SSPG)

#### Overview

Why Server-side Guards over Client-side ones?

- Server-side page guards accomplish the same things that client-side guards do, with a bonus
- SSPG's don't cause loading flickers- the previous lesson's final subsection explains what that is
  Instead, you just get a pause before the new webpage appears- when it does it's 100% ready

How SSPG's work:

- We use server-side code to determine whether a user is logged in or not- inside getServerSideProps
  That method is important, b/c we need to check for authorization after each individual request
- You can use getSession in the backend code within getServerSideProps() 
  useSession doesn't work in the backend, if you were wondering

​                      ![image-20211027202445523](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211027202445523.png)                          ![image-20211027202518794](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211027202518794.png)

#### Where to Apply Server-side Guards

- In the previous lesson, we implement client-side guards on `/components/profile/user-profile`
  This time, we'll apply server-side guards on `pages/profile`
- These files are closely related, since `pages/profile`'s JSX is entirely just the `user-profile.js` component

`pages/profile` before SSPG's:   <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211028004416865.png" alt="image-20211028004416865" style="zoom:80%;" />

If we tried to apply SSPG's in the `<UserProfile>` JS file, they wouldn't do anything

#### Demo Code

> https://github.com/Jason2B3/auth-chap13			commit n226

pages/profile

```react
import { getSession } from "next-auth/client";
import UserProfile from "../components/profile/user-profile";

export async function getServerSideProps(context) {
  // session = falsy if we aren't logged in, and equals a session obj if we are
  const session = await getSession({ req: context.req });
  // If the user is not logged in, redirect them to "/auth"
  if (!session) {
    return {
      redirect: {
        destination: "/auth", // redirect to this path
        permanent: false, 
        // ^^ don't always want to redirect (only if user's not logged in)
      },
    };
  }
  // If the user is logged in, don't redirect
  // Just pass the session through props in case <UserProfile> needs it
  return { props: { session } };
}

function ProfilePage() {
  return <UserProfile />;
}

export default ProfilePage;
```

/components/profile/user-profile

We removed all the code for the client-side page guards, even the loading phase code
Remember, SSPG's eliminate flickering altogether 

![image-20211028010025971](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211028010025971.png)



### ---- Protect the Backend ----

### Protecting API Routes

So far we've learned how to protect content on webpages 
Now, let's learn how to protect API routes from being hit by people without authorization

- This is debatably the most important part of authentication
- API routes dictate backend actions that greatly affect a user's account

#### Why API Route Protection Matters

COMMON USE-CASE EXAMPLES:

1. Let's say you manage an online shop

- Certain API routes would control which products you list up for sale, and at what price
- You can't have unauthorized users accessing this
  Even if another non-admin user was logged in, that API route would have to be off limits for them

2. Password change requests

- Only your logged in account should be able to access the API route that causes your authentication password to change
- No one should be able to change your password while logged into another account or not logged in at all

FORGED API CALLS:
People can make requests to your local API routes even without being on your website

- You can make calls with the command line, or even with tools like Postman
- This is another reason why we must ensure API routes only get called successfully by authenticated sources

#### Objective & Approach

Our goal is to protect the API route that lets us change our account's password

![image-20211025203404219](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211025203404219.png)

#### Demo

pages/profile.js

```react
import { getSession } from "next-auth/client";
import UserProfile from "../components/profile/user-profile";

export async function getServerSideProps(context) {
  // session = falsy if we aren't logged in, and equals a session obj if we are
  const session = await getSession({ req: context.req });
  console.log(session) 
  // If the user is not logged in, redirect them to "/auth"
  if (!session) {
    return {
      redirect: {
        destination: "/auth", // redirect to this path
        permanent: false, // DN always wanna redirect (only if user's not logged in)
      },
    };
  }
  // If the user is logged in, don't redirect
  // Just pass the session through props in case <UserProfile> needs it
  return { props: { session } };
}

export default function ProfilePage() {
  return <UserProfile />;
}
```



### ------- Useful Features -------



### Change Password

#### Objective & Approach

OBJECTIVE:
We're going to code the logic for this page in order to let authorized users change their passwords

APPROACH:

0. By now, this page should only be accessible by users who are logged in
1. Get the current logged in email
2. Pair that email together with what's typed in the "Old Password" field

- If this pair matches a document in our database, then allow the change to happen using what's typed in the "New Password" field
- If that's not a match, reject the proposition

![image-20211025203404219](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211025203404219.png)

#### Get the current logged in Email

ASSUMPTION: We are currently logged in, and are trying to access your logged in email

Getting this only requires one line of code if you set up `pages/api/auth/[...nextAuth].js` well.
It should include a return line like this at the end:

![image-20211028124208497](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211028124208497.png)

This allows us to access the currently logged in email from the session object returned by getSession()while we work on backend code for API routes or pre-render functions

IN OUR BACKEND CODE:

```js
const session = await getSession({ req: req }); // equals falsy if logged off
  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  } // Past this point, the users are confirmed to be logged in
  // Grab the current logged in email
  const userEmail= session.user.email // only works b/c of [...nextAuth]'s return 
```

#### Demo Part 1: API Route

pages/api/user/change-password

```react
//# API Route that allows the authenticated to change their account password
import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../../helpers/db";
import { encrypt, verifyPassword } from "../../../helpers/auth"; // encrytion FN's
export default async function handler(req, res) {
  // Only let this run if a user makes a PATCH request
  if (req.method !== "PATCH") return;
  // If we're not logged in, return an error status num and a JSON message
  const session = await getSession({ req: req }); // equals falsy if logged off
  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  } // Past this point, the users are confirmed to be logged in
  // Grab the old and new password form submissions
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;
  // Grab the current logged in email
  // only works b/c of [...nextAuth].js: return { email: user.email } at end
  const userEmail = session.user.email;
  // Check the db for an account with the exact userEmail we have
  const client = await connectToDatabase();
  const db = client.db();
  const userAccount = await db
    .collection("users")
    .findOne({ email: userEmail }); // equals falsy if we can't find it

  if (!userAccount) {
    res.status(405).json({ message: "Something went wrong!" });
    return; // if account's not found, end the route here
  }
  // If we find it, compare our oldPassword submission to the encryted db one
  const passwordsMatch = await verifyPassword(
    oldPassword,
    userAccount.password
  ); // T/F
  if (!passwordsMatch) {
    res.status(408).json({ message: "Old password is not correct" });
    return; // if password's wrong, end the route here
  }
  // If passwords match, encrypt the newPassword and replace the old one
  const hashedNewPassword = await encrypt(newPassword);
  console.log(hashedNewPassword) // aparently an object
  await db
    .collection("users")
    .updateOne({ email: userEmail }, { $set: { password: hashedNewPassword } });
  client.close();
  res.status(200).json({ message: "Password updated!" });
  return;
}
// WARNING: we did not include error handling for any of the mongodb commands
```

#### Demo Part 2: Call API Route in Front End



### Auto-login after Signup

#### How

This feature's real easy to implement

1. Implement your sign up procedure as you would normally
2. In the front end, you'll have accepted email and password submissions to create a new account
   After signup concludes, call the API route used to log in with existing credentials

You should probably refactor your code a bit since the login procedure will now be tacked onto the end of the signup procedure

#### Demo

> https://github.com/Jason2B3/auth-chap13		commit X1

I won't go into the finer details of how signIn works, since I gave it its own lecture

EXPLANATION:

- Just understand that `quickLogin()` is a helper function that logs us in
- It requires 2 arguments; an email and a password corresponding to the login credentials of an existing account in our database
- We use it when we're coding actions for the login form AND the sign up form
- Our sign up procedure involves creating a new user then logging them in with the same credentials used for creation right after we save their info to our database hosted in the cloud

components/auth/auth-form

![image-20211029000506816](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211029000506816.png)

![image-20211029000102872](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211029000102872.png)

The enteredEmail and enteredPassword are what's typed in the "Your Email" and "Your Password" fields

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211025203300664.png" alt="image-20211025203300664" style="zoom:80%;" /> 		<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211025203321009.png" alt="image-20211025203321009" style="zoom:80%;" />



### Forgot Password 

#### Approach

If the user tries to log in and forgot their password, send them an email containing the old one

#### Alt

Alternatively, you could send them a link to reset their password instead- 



### New Features to Implement

1. Switch email option
   Sounds fairly easy- as long as the user logs in before attempting this
2. Forgot password functionality- think about how to implement that

- I do not currently know how to send emails or text messages that let you change account details
- I could do passwordless sign in, but there's 1 main problem
  If i log someone in from a magic link in an email, they could access everything else in the account
- All they'd have to do is hit the magic link, then search a new URL



# NextAuth 3rd Party Providers

SOURCES:

> Email and GitHub Provider Instructions:
> https://www.youtube.com/watch?v=o_wZIVmWteQ&t=1191s
>
> Google Provider Instructions: (was not as simple as GitHub's)
> https://medium.com/geekculture/why-and-how-to-get-started-with-next-auth-61740558b45b
>
> Custom NextAuth Pages
> https://next-auth.js.org/configuration/pages
>
> Followed this tutorial loosely, with plenty of other articles to assist
> https://www.youtube.com/watch?v=o_wZIVmWteQ&t=1191s



### Slack Project V1 Description

> REPO: https://github.com/Jason2B3/slack-auth/tree/provider-only

#### Home Page

![image-20211111153036187](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211111153036187.png)

- Dynamically display whether the user's online or offline
- Provide a link to a secret page which should only render when users are currently online 

#### signin Page

![image-20211111153202951](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211111153202951.png) ![image-20211111153329774](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211111153329774.png)

- Offer GitHub and Google sign in options
- After pressing one of these buttons, you will automatically get redirected to the 3rd party's own sign up page- we don't need to code any of that

#### secret Page

![image-20211111154116393](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211111154116393.png)

- Display which provider you chose to log in
- Offer a sign out option

#### Logged In Time

The amount of time you're logged in for is managed by the providers you choose to log in with

### Client ID's and Secrets for .env.local

We need to find the CLIENT_ID and CLIENT_SECRET of each 3rd party provider we wish to log in with

- Each one has different requirements for getting these 2 strings- some more complex than others
- Either way, we must gather these strings then place them within your `.local.env` file for your specific Next project

#### .env.local @ finish

This file not pushed to git, because its supposed to be private and part of .gitignore

- Make this file on the root level of our project during development
- During production, we must set these variables on the deployment website

.env.local

```
# The following variable remains the same in development/production
NEXTAUTH_URL= http://localhost:3000 
DATABASE_URL= mongodb+srv://JasonAdmin:2BReborn@cluster0.ufiop.mongodb.net/auth-chap13?retryWrites=true&w=majority

# Github Variables
GITHUB_CLIENT_ID=8a0a6256ef53cb7cdd58
GITHUB_CLIENT_SECRET=e58dd9607042d8eb71f1444b09b7376fc5a6961a

# Google Variables
GOOGLE_CLIENT_ID=431775751630-k2ihhpl8urkv66mtcp0fa3ss8fb240gd.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
```

#### GitHub 

> Setup new Project then gather ID and secret:
> https://github.com/settings/applications/new

![image-20211106161514119](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211106161514119.png)

#### Google

> Setup new Project then gather ID and secret:
> https://console.cloud.google.com/apis/credentials

Your authorized redirect URI: http://localhost:3000/api/auth/callback/google

![image-20211106161445932](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211106161445932.png)



### Starting Setup for NextAuth v4

#### NextAuth v4 Starting Setup

_app.js

```react
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
  );
}
```

pages/api/auth/[...nextauth].js

```react
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],

  // After signIn() is called, we get directed to /signin, a page we designed
  pages: {
    signIn: "/signin",   
  },
};

export default (req, res) => NextAuth(req, res, options);
```

#### Enabled Custom Pages

- By default, NextAuth creates several pages for us- and that includes signIn
- We'd like to use the pages we designed for our slack project, so we need to enable custom pages in [...nextauth].js



### SignIn/SignOut Buttons

The sign in/out buttons are very easy to implement with NextAuth, since they just require you to import one of their custom functions then declare them as an onClick handler

#### Basic signIn() 

We created and styled these buttons manually, and can sign in by using the `signIn()` method NextAuth provides

```react
import { signIn, getSession } from "next-auth/client";
		
	  // <Google/> and <Github/> are SVG's I found and resized
	  <button onClick={() => signIn("google")} className={classes.btn1}>
        <Google />
        &nbsp;&nbsp;Continue with Google
      </button>
      <button onClick={() => signIn("github")} className={classes.btn2}>
        <Github />
        &nbsp;&nbsp;Continue with Github
      </button>
```

![image-20211108221536478](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211108221536478.png)

#### signIn w/ more Operations

Oftentimes just signing in is not enough for your app. 

- In our case, we wanted to namedrop the provider we used to log in on the /secret page. 
- To do that we used localStorage, which meant we needed to save the provider name right before we used `signIn()`

pages/signin.js

![image-20211111171747167](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211111171747167.png)

#### signOut

Signing out is as simple as logging in. 
In our project we just added an extra step to the sign out process. 

- We remove a KVP from local storage that gets created when we log in- the provider's name 
- This coincides with the previous subsection's description
- Keep in mind this is not required for every single project

pages/secret

![image-20211111172104863](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211111172104863.png)

### Client-side Page Protection

We'll need to protect our pages from non-authorized users often, so we've created a set of hooks you can use anytime you wish to offer client-side page protection

#### My Custom Hook Explanations

| hook name                | purpose                                                     |
| ------------------------ | ----------------------------------------------------------- |
| `useLoginCheck`          | check whether the user is online or offline                 |
| `useRedirectWhenOffline` | if the user is offline, redirect them to a path you specify |
| `useRedirectWhenOnline`  | if the user is online, redirect them to a path you specify  |

How to use the variables returned from these hooks:
Each hook is applied and utilized in component files in mostly the exact same way

| returned variable | means __ if TRUTHY       | means __ if FALSY            |
| ----------------- | ------------------------ | ---------------------------- |
| isLoading         | we are currently loading | we are not currently loading |
| loadedSession     | we're online             | we're offline                |

#### Demo

Visit the last commit on the provider-only branch of our chapter-wide repo

pages/index.js

```react
export default function Home(props) {
  // Use our custom hook that checks if we're logged in or loading
  //% Render different JSX based on our login status
  const { isLoading, loadedSession } = useLoginCheck();

  return (
    <div className={classes.container}>
      <h1>Login status: {!loadedSession ? "offline" : "online"}</h1>
      {!loadedSession && <button onClick={() => signIn()}>Sign in</button>}
      {loadedSession && <button onClick={() => signOut()}>Sign out</button>}
      <Link href="/secret">Visit secret page- only works when logged in</Link>
    </div>
  );
}
```

- We render JSX content conditionally based on whether we're logged on or off
- This is not possible if we use one of the hooks with redirects coded inside

OTHER CUSTOM HOOKS

We could have alternatively used one of those, and we do in certain other components

```js
  //% If we're offline, redirect to /signin
  const { isLoading, loadedSession } = useRedirectWhenOffline("/signin");
  //% If we're online, redirect to /secret
  const { isLoading, loadedSession } = useRedirectWhenOnline("/secret");
```

#### Syntax

useLoginCheck

```react
import React, { useState, useEffect } from "react";
import { getSession } from "next-auth/react";

export default function useLoginCheck() {
  // Create and manage your own loading and session states
  const [isLoading, setIsLoading] = useState(true);
  const [loadedSession, setLoadedSession] = useState(null);
  //% If we are not logged in, redirect to a path specified by props
  useEffect(() => {
    const confirmSession = async function () {
      const session = await getSession(); // falsy if we aren't logged in
      setLoadedSession(session); // update our session state
      setIsLoading(false); // update our loading state (we're done now)
      // session equals null or a session object
    };
    confirmSession();
  }, []);
  return { isLoading, loadedSession };
}
```

useRedirectWhenOffline

```react
import React, { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function useLoginCheck(redirectPath) {
  const router = useRouter();
  // Create and manage your own loading and session states
  const [isLoading, setIsLoading] = useState(true);
  const [loadedSession, setLoadedSession] = useState(null);
  //% If we are not logged in, redirect to a path specified by props
  useEffect(() => {
    const confirmSession = async function () {
      const session = await getSession(); // falsy if we aren't logged in
      setLoadedSession(session); // update our session state
      // WARNING: this method of redirecting resets our app (all state lost)
      if (!session) {
        router.push(redirectPath);
      } else setIsLoading(false); // update our loading state (we're done now)
    };
    confirmSession();
  }, []);
  return { isLoading, loadedSession };
}
```

useRedirectWhenOnline

```react
import React, { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function useLoginCheck(redirectPath) {
  const router = useRouter();
  // Create and manage your own loading and session states
  const [isLoading, setIsLoading] = useState(true);
  const [loadedSession, setLoadedSession] = useState(null);
  //% If we are not logged in, redirect to a path specified by props
  useEffect(() => {
    const confirmSession = async function () {
      const session = await getSession(); // falsy if we aren't logged in
      setLoadedSession(session); // update our session state
      // WARNING: this method of redirecting resets our app (all state lost)
      if (session) {
        setIsLoading(false);
        router.push(redirectPath);
      } // update our loading state (we're done now)
    };
    confirmSession();
  }, []);
  return { isLoading, loadedSession };
}
```



### Server-side Page Protection

We created our own helper function to help us recycle logic we need to use when guarding our webpages using Node.js 

loginCheckSSR

```REACT
import { getSession } from "next-auth/react";

// Move the logic that would be in the API route to this helper
export async function loginCheckSSR(getSeshParameter) {
  const session = await getSession(getSeshParameter);
  if (session) {
    return session; // a truthy 
  } else {
    return null;
  }
}
```

#### Demo

Visit the last commit on the provider-only branch of our chapter-wide repo

pages/secret.js

```react
import { loginCheckSSR } from "../helpers/loginCheckSSR";
import classes from "../components/auth/secret.module.scss";

export async function getServerSideProps(context) {
  const getSeshParam = { req: context.req };
  const response = await loginCheckSSR(getSeshParam); // equals null or an obj
  // If we're offline, redirect to /
  if (!response) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  // If we're online, then we let this page be visible
  return {
    props: { session: response }, // passes nothing
  };
}

// Component function only renders if we are online
export default function Secret(props) {...}
```



### .env.local @ end

This file won't be saved in the git repository, so I've jotted down each variable here in case you clone this project on a new computer

```
# The following variable remains the same in development/production
NEXTAUTH_URL=http://localhost:3000 
DATABASE_URL=mongodb+srv://JasonAdmin:Lya8x2wwqyEqgxrD@clusterzero.g9k83.mongodb.net/slack-auth?retryWrites=true&w=majority

# Github Variables
GITHUB_CLIENT_ID=8a0a6256ef53cb7cdd58
GITHUB_CLIENT_SECRET=e58dd9607042d8eb71f1444b09b7376fc5a6961a

# Google Variables
GOOGLE_CLIENT_ID=431775751630-k2ihhpl8urkv66mtcp0fa3ss8fb240gd.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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

# SendGrid Variables
SENDGRID_API=https://api.sendgrid.com/v3/mail/send
SENDGRID_API_KEY=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
```



### Implement Later

#### Database Functionality

1. Create a document each time you log in with a new email

- I know how to do this with credentials, but not providers
- The signIn() method is a 1 line process, and it just logs us in without me specifying anything but the provider

2. When you log in with an email that has an account already, display account data on /secret

- This is what happens in services like Mongo Atlas
  They found a way to access stored data about you when you log in with Google

#### Practical Functionality

1. Find a way to verify if an email input is in fact, a valid email
   Do more than just check for @ symbols
2. Find a library that checks password strength and implement it



# Backburner

### NextAuth

1. We have a list of things to implement on our slack-auth v1 project
   Look at the end of "NextAuth 3rd party providers chapter"
2. Figure out Email Magic Links / passwordless login with SendGrid
3. Figure out how to use OAuth's login portal

# Rework these Lessons

### Errors to Watch out for

#### Dot Notation on a non-string

![image-20211001202956102](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211001202956102.png)

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211001203335574.png" alt="image-20211001203335574" style="zoom:80%;" />

<img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211001203412326.png" alt="image-20211001203412326" style="zoom:80%;" />

### Generating Dynamic Pages (URGENT NEED 2 FINISH)

By combining dynamic folders/files, we can iterate over arrays or objects of data and give each entry its own dedicated page

EXAMPLE:

![image-20210930190938883](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20210930190938883.png)

You'll need to give the file we link to data via props
getStaticProps may require the getStaticPaths method which i don't understand yet

[React - The Complete Guide (incl Hooks, React Router, Redux) | Udemy](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25616848#overview)

^^ above video explains it best

1. Rekindle your Facebook Profile Page visit idea inside of next-learn
2. Create a reusable hook that allows you to send data to a specific firebase backend 
   Save it in your notes and files becasue placing data inside Firebase by manually typing sucks

### Sql vs NoSQL (incomplete)

VERY INFORMATIVE SERIES OF ARTICLES TO FOLLOW
https://beginnersbook.com/2017/09/mongodb-tutorial/

Field description from Web Dev Simplified's cheat sheet:![image-20211019144556733](C:\Users\jason\AppData\Roaming\Typora\typora-user-images\image-20211019144556733.png)

https://beginnersbook.com/2017/09/mapping-relational-databases-to-mongodb/

![RDBMS MongoDB Mapping](https://beginnersbook.com/wp-content/uploads/2017/09/RDBMS_MongoDB_Mapping.jpg)

https://beginnersbook.com/2017/09/mapping-relational-databases-to-mongodb/

![Format mapping relational database_to_MongoDB](https://beginnersbook.com/wp-content/uploads/2017/09/Format_mapping_relational_database_to_MongoDB.jpg)



### Potential Misinformation / QUESTION

I know the differences between SSG and SSR, but both seem to update your data whenever you make a request to the URL by searching it or reloading

What if I want instantaneous updates to my site like if I was making FB messenger?
No one reloads to wait for new messages to render on screen

#### Server-side Rendering with getServerSideProps

###### The Need for Dynamically Updated Backend Data

Some websites rely on dynamically updated information- like Google Docs for example

- If a group writes a report, we need each change to be reflected in the document right away or else there will be a lot of clashing 
- Updating your backend information using the SSR approach is just as helpful as the SSG approach when it comes to improving SEO - just check the source files after your following demonstration!

# Common Bugs

Look for Next.js errors in the console when you render a webpage

- If you have errors present, read the error message and look inside that page's file
- Look inside any external files that webpage relies on as well
  Ex. Components rendered on that page that were defined elsewhere`<Navbar>` in pages/order.js

### className did not match

#### Procedure

1. Check to see if you labeled any classes as `class=` instead of `className=`
   Use CTRL F to scour the files your webpage is involved with
2. If you do not have any `class=` present, and you've checked all files the webpage with this problem uses... delete to .next folder, then run `npm run dev` to recreate it