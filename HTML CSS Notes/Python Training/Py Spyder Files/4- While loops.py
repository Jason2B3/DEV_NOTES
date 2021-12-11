'EX 1: Simple While Loop'

# c=0 
# while c<5:
#     print(c)
#     c=c+1 

'EX 1 Explanation'
# Start c at 0
# While c is less than 5, print the c values
# c= c+1 increments c upwards so that it wuill eventually turn false 
# Once the loop is false, it will ends
# Expected outcome: 0 1 2 3 4


'EX 2: Break Statement'

# c=0
# while c<5:
#     print (c)
#     if c==3:
#         break
#     c=c+1

'EX 2 Explanation'
# Start c at 0
# While c<5: print c
# Break if c equals 3. If it does not, increment c by +1 then repeat
# Final output should be a 3 since the print function is above break

'EX 2a: Indentation error testing'
# c=0
# while c<5:
#     print (c)
#     if c==3:
#         break
#         c=c+1

# We placed the increment inside of the if block
# Infinite zeros ensue b/c the +1 increment no longer occurs in the while loop
# The if block has the incrementer now. But it's never used 
# The while loop repeats forever because the if loop never has its condition met
    

'EX 3: Continue'

# c=0
# while c<5:
#     c=c+1
#     if c==4:
#         continue
#     print(c)

'EX 3 Explanation'
# Start c at 0
# Increment c up by 1 immediately
# If c=4, ignore the rest of the code for that iteration (all that's left is a print function)
# Output should be 1 2 3 5 (skip print if c equals 4)

'EX 4: Pass'
c=0
while c<5:
    c=c+1
    if c==3:
        pass
    print(c)
# Start c at 0, enter while loop. Increment c up by 1 immediately
# If c==3, do something that we'll specify later. For now, write pass
# The pass is just a placeholder. It's as if python executes an action with no effect
# The if loop breaks and the increment value is printed
# The cycle repeats. Even the output 3 is printed because pass doesn't break or skip that iteration