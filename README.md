# JasmineChallenge1
First challenge in test driven development with Jasmine

## Drink About Game

Drink About is a simple function that will check the age and return a drink appropriate for your age. Create a function called whatCanIDrink. This function should take in age as parameter. The function should do the following:

If the age is less than 0, then it should return "Sorry. I can’t tell what drink because that age is incorrect!"
If the age is less than 14, then it should return "Drink Toddy"
If the age is less than 18, then it should return "Drink Coke"
If the age is less than 21, then it should return "Drink Beer"
If the age is less than 130, then it should return "Drink Whisky"
Else return "Sorry. I can’t tell what drink because that age is incorrect!"

### Red-Green-Refactor principle
A few tests will be written in the file drinkAboutSpec.js that will fail in the Jasmine framework. Just enough code is written in the drinkAbout.js file to make the test pass. Refactoring the function makes it work.