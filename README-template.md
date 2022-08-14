#  Advice generator app 
 Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents


  - [The challenge](#the-challenge)
  - [Built with](#built-with)
  - [What I learned](#what-I-learned)


### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon



### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- API




### What I learned

I used API and learned to use hover effect - 

```js
axios
    .get("https://api.adviceslip.com/advice")
    .then((response) => {
        console.log(response);
        adviceContainer.innerText = response.data.slip.advice;
    })
```


```SCSS 
.button:hover {
    cursor: pointer;
    background-color: hsl(150, 100%, 82%);
    box-shadow: 0 0 10px hsl(150, 100%, 82%), 0 0 10px hsl(150, 100%, 82%), 0 0 80px hsl(150, 100%, 82%);
}
```


