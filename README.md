# Project Name

Server Side Calculator

## Description

I present to you a calculator. This calculator is pretty simple and not quite as complex as the ones on our phones but it can handle basic math with two numbers. The calculator itself takes up most of the app. As per the assignment there is a history of the calculations run below it as well as a button to delete that history to start fresh. 

Putting this together was a lot of fun. First I made a detailed to-do list and broke down the assignment. I tried to think through what I needed to do to set-up as well as break down what the assignment was really asking. Once I got my list, base mode of the assignment went pretty smoothly. I took it step by step and logged everything along the way to make sure everything was connected and working well. 

Once I got base mode set up I wanted to set it up like a basic calculator with the number buttons. I got bootstrap to help with my buttons and set them up one by one and used grid in CSS. I knew that the display would work easiest as a string so I set up the buttons to append to the display. In retrospect I would have tackled this issue differently in the future. Each of my number buttons or operator buttons work almost identical to their counterpoints. After talking to Kevin about our projects, I saw that if I had given the buttons a data attribute in the html I could have used the same function to identify the data of the button being clicked and reused the same function. Would have cut down on my client.js quite a bit. Live and learn. 

Another issue for me was falling down the rabbit hole in calculator logic. I ultimately tried to keep it as simple as possible and not allow the calculator to accept an incomplete equation or single number. I REALLY wanted to get it similar to a phone calculator but there was just too much logic to consider like if you type '2 + 2' and then hit '-' it will run that equation and then start the next calculation as '4 - next number'. I had some issues using string.includes() giving me what I wanted but I ultimately got the results I wanted through moving some of the conditions around to different parts of my runCalculator function. 

From there I just had to adjust my runCalculator function to break apart the string on the display into an array, push the corresponding array indexes into an object and send it to the server. I didn't have to change anything on the server side. From there it was styling. I spent a fair amount of time on this but I really enjoyed setting up the look of it and am pretty happy with how it turned out. 

I wanted to at least look at the delete history stretch goal and ended up getting it working but to be honest am not sure its how to properly use DELETE. I couldn't find too much online other than the basic structure of an app.delete. I took that and kind of guessed what the ajax would look like based on our GET and POST work. It works though so I cant complain. 

Bottom line, fun times indeed.


