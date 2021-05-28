# Life Cycle Component

Game demo available at: https://typer.emmasandbox.com

## Component Analysis

To show the MOUNT, UPDATE and UNMOUNT cycles, the class component located in LetterWars.jsx can be used has example:

### MOUNT cycle

In this cycle the CONSTRUCTOR is called to initialize the props and state of the component and to bind the helper methods. Then, RENDER is also called to display the necessary elements. Finally, COMPONENTDIDMOUNT initializes the interval used to change the letter displayed on the screen every second using setState.

### UPDATE cycle

This cycle is used each time the state changes (via the interval initialized in the mounting or by user input). RENDER is called to update the display content and then COMPONENTDIDUPDATE is used to check if the user made an input and, if that is the case, to update the score.

### UNMOUNT cycle

COMPONENTWILLUNMOUNT is called when the user uses the stop button and in this case it clears the interval.

### ERROR Handling

A error was introduced to test the error handling cycle. In LetterWars.jsx, if the user score is less than 0, an error will be thrown. This component is wrapped by an ErrorBoundary component whose function is to handle the error with COMPONENTDIDCATCH and display the error message without affecting other sections of the page (:fire: the solution of the error is to comment the line 54 and uncomment the line 53 the error was introduce as an example for error handling :fire:).

## Instructions

The purpose of this exercise is to understand how the different life cycles work.

- [X] Create a component using the MOUNT cycle.
- [X] Create a component using the UPDATE cycle.
- [X] Create a component using the UNMOUNT cycle.
- [X] Create a component using the ERROR HANDLING.
