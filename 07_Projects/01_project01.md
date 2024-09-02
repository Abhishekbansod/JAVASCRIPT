# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code -> Background Color Changer

## project 1

```javascript

let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body');

buttons.forEach((eachButton) => {
  console.log(eachButton);
  eachButton.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);

    //using if statement
    // if(e.target.id === "grey"){
    //   body.style.backgroundColor = "grey"
    //   //another way to style the body
    //   //body.style.backgroundColor = e.target.id
    // }
    // if(e.target.id === "white"){
    //   body.style.backgroundColor = e.target.id
    // }
    // if(e.target.id === "blue"){
    //   body.style.backgroundColor = e.target.id
    // }
    // if(e.target.id === "yellow"){
    //   body.style.backgroundColor = e.target.id
    // }

    //by using switch case
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;

      case 'white':
        body.style.backgroundColor = e.target.id;
        break;

      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;

      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;

      default:
        body.style.backgroundColor = 'black';
    }
  });
});


```