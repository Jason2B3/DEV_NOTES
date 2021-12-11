# Flow Charts

- Typora will store all our notes. Will need a markdown -> PDF converter when moving our content to new machines
- Google draw will be used to create flowcharts to visualize our logic
- Our starter shell software will be Spyder. Our practice files will be labelled and named in sequential order

https://www.youtube.com/watch?v=SWRDqTx8d4k&ab_channel=RobotRiedinger

**Flow Chart Shape Meanings:**

Start/End: All code requires a start. An end may not always exist

> Process: A verb or action. 
>
> ​			Ex. Add 1, Turn on a motor, turn off the light, rotate a part

> Decision: Outcome will be yes or no- each of which has its own path afterwards
>
> ​			Ex. Is this number above 10? Does the weight meet specifications? Has the count been reached?

Arrow: Indicate the flow of our code. They go from the output of 1 block to the input of another

> <img src="C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201103132834487.png" alt="image-20201103132834487" style="zoom:33%;" />

Example 1: Feed your dog if his bowl isn't full

> ![image-20201103134109747](C:\Users\jason\AppData\Roaming\Typora\typora-user-images-repo1\image-20201103134109747.png)

# Assigning Variables

<u>Assigning Variables Fast</u>

```python
x,y,z = 3,11,12 
```

<u>Assigning Variables the Same Value</u>

```python
q=f=g= 1000
```

<u>Redefining Numeric Variables</u>

If we assign a=10 THEN a=40 later
Python will recognize a=40 from then on

```python
b,c,d= 5,20,1
c= e+7
# Basic algebra tells us c=13. But e is undefined atm, so python produces an error

c= b+d 		# (Turns c from 20 t0 6)
# This causes no error b/c we simply are redefining c here
```

<u>**Redefining String Variables**</u>

- Strings in python cannot be reassigned once defined

  ```python
  a= 'Howdy there world'
  a[0]='P'
  # Trying to redefine "H" as a "P" produces an error
  ```

<u>**Math Operators**</u>

When you define variables, you can use them in expressions involving math symbols 
/	*	+	- 	are all common sense
%	is the modulus symbol that gives the remainder after division

# **Strings**

- You can add strings to each other in sequence
  There is no such thing as subtracting strings. 
  Behold! Keep in mind we inputted everything in the console for this example

> ![img](https://lh5.googleusercontent.com/YH4-c0BqlVGbNuzsm5pq3kSC5okCspPhDSG_q8mUJefmFjM6Spwj9qwkeKN5a7Gv0X1d5lq3FAlCqe-jH6wiHivuLiBHyPZFOdCQ4IBL_qwkoB6o4wJmyRteH5a60cChA8jlWEg)

> You can also multiply strings so they repeat:
> ![img](https://lh6.googleusercontent.com/PV9egmoHhFyFlpDzS5wd6H1IFQPns_yGUao5pTq2xYKwRojQjTxVl_dzvBELLt9Uxa4N3tQ92PNfqC8Wu1L0fY8BV2pCPOKiwwXoxsEWDJY9ABmwinHfU34GN49EQCfCA8rt7Mk)

<u>**Indexing Rules for Strings**</u>

- When we type out a string, each letter and space has its own index with a value saved

- Python counts values starting from 0. Meaning the 6th letter in a sentence would be called upon as index number 5

- When calling upon a RANGE of index values, remember that python does not include the very last index number ( 0:5 calls upon values 01234)

  > ![img](https://lh6.googleusercontent.com/ZpzMOMcX9uo4vfazgkC5BAnwqf2aOpJsfxNZleanLSv9w8mhZBsjm5CxTEnUeH31pVGCMa62f-AfZ_Gj-JgrOi7TQGsNHkBpmVlxSyBi78YXiigtv0zf46dh7UGZ0RUmovqJGfg)![img](https://lh3.googleusercontent.com/sMrGmhuERFK9btYhXcK3j5X-WOr0JVpxjHC7pNg06j3m_IsBexvhcgtn9qyk2Tj2l-_uWb5z7tNiN0IcLNFG3UebrGq34HaztXjXXplUArcbL03lyvBWI7QhdsGAj8g5rsmmt64)

- Notice how we know the “o” in NFuego is index number 5. 

- But when we ask python to displace all the index values from 0 to 5, it neglects index 5.			What a range really means: Display indexes UP TO BUT NOT INCLUDING

- We also demonstrated a diff way to express our range. :5 means python should take every index from the beginning up to but not including the 5th


<u>Ranges with Negative Numbers</u>

PHRASE: NFuego was a smash God

![img](https://lh4.googleusercontent.com/osztIQFbdC97p_ucDMIRxdjW8M12MzF6I37T5oRRR3IDbuCcM3RapwNY_ucyAzDcfZGB8TJH5lPOkewmfcVFTbpHtd1qic42IUxF_3UVaca8GOYqjpcB4aRWlF7nukIRHSL1Nvk)		The above syntax: sent1[-3] demands python to give me the 3rd last index. There is no counting from zero when we talk about the right side/end of a string

![img](https://lh5.googleusercontent.com/E7Yt9UAhrC9Ono9_3NDVBFCPg_Obq0en6HSEljoz-t1F5CpVj6QDjLrAlUx1FmuTsu4Oa22p8ByJtfxV0-LZzoRky3L5oEC3XeAhx0Z7S6GKIG5qocNAUHkLGXsmwQmNOg-6Fa8)	Our final example here uses a range with a negative number. This means “give me every index value except for the final 3”

<u>Placeholders</u>

- When typing out strings that will be paired with variables containing names or numbers, it can be tiring to watch the spacing and create sentences with a STRING + VARIABLE format.
- We can speed up and simplify this process using placeholders

**Placeholder:** A special kind of variable you place in a string that will be filled up later w/ what you specify. 

**Placeholder Syntax**:
%s	String placeholder
%d	Number placeholder



----------------------------------------------------------****

HI JASON FROM THE FUTURE! Have you completed your web dev training? 
Now that you're back for python, use these 2 sites to get back up to speed. I found a great youtube series by Corey Schafer and this one link for diff data types

https://www.tutorialspoint.com/python/python_variable_types.htm

https://www.youtube.com/c/Coreyms