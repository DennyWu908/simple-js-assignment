// JavaScript Document



// Use JS to add header text into 'main-header' without button click.
document.getElementById("main-header").innerHTML = "<h1>JS Practice</h1>";



// Use JS to add paragraph text into 'action1-message' with button click from 'action1-btn'. -->
document.getElementById("action1-btn").addEventListener("click", function(){
    document.getElementById("action1-message").innerHTML = "Action #1 Button was Clicked!";
});



// Use JS to add an h2 into 'heading2' with button click.
// The HTML has been created, this is your chance to add JS. 

document.getElementById("header2-btn").addEventListener("click", function(){
    document.getElementById("header2-message").innerHTML = "<h2>You clicked the button! Here is the second Heading!</h2>";
});



// Create 3 examples of JS being added to the HTML page immediately. 
// You'll need to create both the HTML and JS for this. 

document.getElementById("number-four-one").innerHTML = "<p>Example 1</p>";
document.getElementById("number-four-two").innerHTML = "<p>Example 2</p>";
document.getElementById("number-four-three").innerHTML = "<p>Example 3</p>";


// Create 3 examples of JS being added to the HTML page based on button clicks. 
// You'll need to create both the HTML and JS for this. 

document.getElementById("step5-btn").addEventListener("click", function(){
    document.getElementById("step5-message-one").innerHTML = "<p>Here is a sentence created with JS code!</p>";
    document.getElementById("step5-message-two").innerHTML = "<p>Here is another sentence created with JS code!</p>";
    document.getElementById("step5-message-three").innerHTML = "<p>Here is a third sentence created with JS code!</p>";
});

