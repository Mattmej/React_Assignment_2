# React Assignment 2

### NOTE: This is a React app. For more info on React apps, please read the file "react_readme.md"

This assignment accomplishes the following goals:

1. Create an input field inside the root app component with a change listener that outputs the length of the entered text below it.
2. Create a new component (e.g. ValidationComponent) which receives the text length as a prop.
3. Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length).
4. Create another component (e.g. CharComponent) and style it as an inline box
    * display: inline-block;
    * padding: 16px; 
    * text-align: center;
    * margin: 16px;
    * border: 1px solid black
5. Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
6. When you click a CharComponent, it should be removed from the entered text. 

Given Hint: Keep in mind that JavaScript strings are "basically" arrays!