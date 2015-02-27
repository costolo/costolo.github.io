[Week 7 Home](../)
# U3.W7: Design Your Own Code Combat Mission [SOLO CHALLENGE](https://github.com/Devbootcamp/phase-0-handbook/blob/master/solo-challenges.md)

## Learning Competencies
- Define local variables in JavaScript
- Create, add properties to, delete properties from, and access property values of JavaScript Object literals
- BONUS: Integrate HTML, CSS, and JavaScript to display and manipulate objects

## Summary
You now have some practice with JavaScript so it's time to get creative. In this challenge, **you are not expected to create a real, working mission on Code Combat's website**. Rather, we want you to have fun designing a simple game by creating some basic objects and functions. You don't need to visit Code Combat to do this, just write out your solution in the `my_solution.js` file.

This is an open-ended challenge so there are a lot of things you can do with it (and ways to make it really hard or fairly simple). It's up to you to decide how much detail you want to go in to. If you are having fun, keep working and solidifying your understanding of JavaScript concepts. If you're bored and feel like you've gotten enough out of it after writing a few objects and functions that work together, consider yourself done. That said, make sure you go through the work flow and complete each release.

**In order to fully complete the challenge, you will need to:**
- Create at least 2 objects with properties
- Create at least 2 functions that interact with those objects by adding or modifying the object's properties
- Call each function (invoke the function) **Make sure the output is actually what you expect!**

You should use time-management strategies to keep yourself on task. Check in with yourself often. This can be a simple challenge if you design it that way, or you could build an elaborate game. Keep it simple at first. You can always add on later.

To see an example of one student's theme creativity, click [here](http://imears.github.io/super_starfish/SuperStarFish.html). There is no reason to make your solution Code Combat themed, and there is also no reason to go this in depth unless you have the time. START with and MVP and start SMALL. If you have time, desire, and energy, THEN make it more complex and do the bonus release. No one is comparing your code to other cohort-mates. This challenge is all about you, your learning, and your creativity. The overall goal is simply to create objects and functions that interact. Period. See [this example](example_solution.js) to see a solution that is solid, simple, and fulfills the expectations.

## Release 0: Design your Mission

Remember how Code Combat had goals to complete a mission? They were visible at the top left of each challenge.

![Mission goals](../imgs/cc-mission.png)

Write an outline of your overall mission and goals to complete your mission as comments in your [my_solution.js](my_solution.js) file. Remember to keep them simple!

Then consider:
- Who are the main characters in your mission? They will be an object. What properties should they have? Write these as comments in the description section.If you look to Code Combat for an example, you can see an Objects properties when you hover over `this`. In the image below, you can see Tharin (the object) and his properties to give you an example of how your objects could look.
- Consider any other objects you need. Do you need a sword? What about a cannon, death ray, gold, magic seeds, etc.? Write those as comments in the description section as well.

Remember, you need to have at least two objects defined and used in this challenge.

![objects](../imgs/cc-objects.png)

- Write at least two functions you'll need to manipulate your objects to complete your goals as well.

For example, if your mission is to collect gold, then you would need to have gold objects, and a way to add gold to your object. You would probably also want a way to calculate how much gold you have. you could use a function `pickUp` that requires two arguments, the object picking up the gold, and what they are picking up.

Your functions don't have to actually create movement on the screen, but think about how to pass information between objects using functions. Think about what information the functions need to have access to. You'll also need to consider how you will model behavior using code.

If you want more inspiration, you can view Code Combat's documentation to see a bit of how their functions are built and used.

![functions](../imgs/cc-functions.png)

## Release 1: [Pseudocode](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/pseudocode.md)

Now that you have defined your objects and functions, it's time to pseudocode. Make sure your pseudocode is broken down to easily implementable steps.*

## Release 2: Write your [initial solution](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/initial-solution.md)

You will know you are done with the initial solution when you have at least:
- 2 objects with properties
- 2 functions that interact with those objects by adding or modifying the object's properties

## Release 3: Check your code!
You need to make sure your functions are manipulating the objects as you expect it. This means you need to invoke the functions on your objects (just like you did in challenges 3 and 4). You should do this for each of the objects and functions you have. They should work together without any errors.

For example, if I had a `tharin` object who had a goldCount property, I could invoke the functions like this:

```Javascript
console.log(tharin) // should log a tharin Object to the console with a goldCount of 0
pickUp(tharin, gold) //should add a count of 1 to tharin's goldCount

```

## Release 4: [Refactor](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/refactoring.md)

## Release 5: Manipulate objects on the DOM (Optional)
NOTE: This could take a lot of time and is self-directed. Attempt this release at your own risk.

Add your JavaScript objects to an HTML page. Use CSS to make it pretty. You may want to consider using ascii art. Then look up how to manipulate objects on a page with JavaScript using your functions.

Avoid JQuery for now. You may want to check out the [W3 Schools JavaScript Intro](http://www.w3schools.com/js/js_intro.asp) or [JavaScript - HTML DOM Methods](http://www.w3schools.com/js/js_htmldom_methods.asp) for help.

## Release 6: [Reflect](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/reflection-guidelines.md)
