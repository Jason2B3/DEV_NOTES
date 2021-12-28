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