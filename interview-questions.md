# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.   

1. What is a function? Why would you use one?

  Your answer: A function is a block of code that does a certain task. This code is stored in a function name and can be called upon multiple times. Functions are useful becaseu they can be used multiple times for situations that are similar, but when the specific data to be assessed is different.

  Researched answer: Same answer as mine. Also, functions allow for a greater legability. Since we don't have to rewrite the same functions over and over again, but simply call them when needed, it makes code a lot easier to read and manipulate.



2. What is the difference between map and filter?

  Your answer: While both .map and .filter are array functions that iterate through the entire array and both return a new array separete from the one that the function was called upon, these functions are different in that .map performs an embeded function on the array that it is called on, while .filter just selects certain subset of the data based on the criterion specified in the embeded function.

  Researched answer: .map performs an action on the data in the function so that the values of each element in the set are changed and stored in a new array (the original array is preservered). .filter doens't change the values of the array but instead chooses certain data elements to saved to a new array (the original array is also preserved).


3. What is the difference between map/filter and a for loop?

  Your answer: The difference between .map/.filter and a for loop is that a for loop is a logic structure that allows you to iterate througha a set of data and perform an action at each data element while .map/.filter are functions that use loops. For loops are not themselves functions and do not have a return functionality. For loops are only part of what allows .map and .filter to do what they do. 

  Researched answer: For for loops, you can change how you interate through a data set (it doesn't have to be every one). YOu have to speficy the conditions of when the loop ends. .map assumes every element in an array will be used. .map has to be used on an array while for loop does not. Also, the information I had in my answer above.



4. What is the difference between console.log() and return?

  Your answer: Console.log just outputs whatever is in the parentheses to the terminal while return does print to the terminal. However, the info in the console.log isn't being help by the computer to be used potentially by another function. Return on the other hand, just means that the result to be returned is being stored/help by the computer to be immediately called upon/used by another command or function.

  Researched answer: Console.log() is a function that prints the argument on the terminal. THi sfunction is usually used for debugging purposes. Return just returns the result of a function to the caller. 



5. In regards to functions, what is an argument?

  Your answer: An argument is a data element or another function that is going to be used or called upon in the function that the argument pertains to.  

  Researched answer: The arguments are the values that are plugged into the parameter placeholders in a function. 



6. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer: Pair programming is when two people are working on a singel file of code on one monitor. One person acts as the "driver", who is the one typing. The other person is the "navigator" and is the one who is helping the driver think through logic, spot misktakes in the code and helps discuss ideas. In pair programming, there should be a lot of communication and sharing of ideas so that both are on the same page. 

  Researched answer: Same as my anser above and also the roles whould be switched regularly.



7. What is something we did in class this week you found helpful?  

  Your answer: I really appreciated how we took a whole day to go over orientation, meeing the staff, going over expections, etc. Even though is was long, it helped me feel like I knew what to expect and just get more settled at LEARN. In a way, I think it helped me just focus on learning code because I didn't have a bunch of quesetions and concerns going on in the background of my mind.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- Jest:a open source library used to test JavaScript code. To use it, you would usually make a new file related to the file you are testing.
- Class inheritance: Basically, inheritance is when a class obtains the same properties from the higher class that it is derived from. JS is uniquwe in that it uses a prototypal form of inheritance, which is dofferent than calssical inheritance.
- React: React is a library that is used to help build UIs for websites.
- Yarn: Yarn is a package manager. Package managers facilitate the importing of libraries to your project.
- React State: React components have a state object that can be used to store values belonging to a child class of React Components
- this: A keyword that refers to the owner of a method. One example of its use is when a function for a class is being created. This would refer to any object using the function.
