How did event.preventDefault() help in handling form submission?

The event.preventDefault() allowed for the client side validation to be done without refreshing the page each time the user tries to submit an invalid form. So it makes it less frustrating for the user.


What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

HTML validation is built in and preset, with JS validation we can set more specific and custom validations and also control when then show up or how. It is good to use both because some input fields like emails are hard to deal with and the html built in validation will work well enough for that.


Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?

First upon load I searched local storage for a saved username using localStorage.getItem(), which I mistakenly had set as sessionStorage.setItem() in my earlier commits. And in the event listener for the submit button I assed a line to save the valid username using localStorage.setItem().


Describe a challenge you faced in implementing the real-time validation and how you solved it.

The realtime validation was tough because there was a lot of the same logic that needed to be repeated in each event listener, so it would get a but confusing to follow. After some time and googling I found it was better to just use factory functions, this made the code modular and easier to implement the repeating patterns and ideas.


How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?
I used if statements combined with input.validity and setCustomValidity() where neccessary to make sure that depending on the edge case the span error message value would change or disappear altogether. 