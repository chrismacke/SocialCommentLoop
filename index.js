/*

We're creating a comment system. A user will enter text into
the text field in the HTML file and its contents will be added
to an array. 

We need to do four things:

  1) Create a variable named comments that will store all of the user comments in an array. It will start off as an empty array.

  2) Create a function called saveComment that will get the value (the comment) of the text field and add ("push") it to the array.
      
      tip: You'll want to use jQuery to get the value of the text field, 
           store it in a variable, and then "push" the value into the array.
           Google is your friend. Try searching for jQuery val() if you get stuck.

  3)  Create a function called displayComments. Using a for loop, loop through the comments array (Google "JS for loop" if you get stuck).
      Using the jQuery append function, append each comment as an LI to the UL element named commentContainer. 
      Go back to your saveComment function and call your displayComments function at the end of saveComments.

  4)  Create a click listener for the post button (you'll need to find the button ID in the HTML file) and attach
      it to your saveComment function. Remember that this listener needs to be placed inside 
      a jQuery document ready function.
 
 
We're almost done! You'll notice two strange behaviours. 
The comment in the text field never resets (disapears)
when the user saves a post. Also, you'll notice 
duplicate comments displayed in your unordered list.
Let's fix that!      
 
  5)  Create a function called resetComments. It needs to do two things:
        Clear out the UL before we re-append the comments (hint: we can use the jQuery .html("") function)
        Clear out the text field when a comment is added (hint: we can use the jQuery .val("") function)
        Challenge: when do we call the resetComments() function for it to work properly?
        Hint: it's somewhere inside the displayComments function.



START CODING BELOW:

*/
