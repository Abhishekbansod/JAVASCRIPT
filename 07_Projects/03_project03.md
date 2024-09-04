# Projects related to Events

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code -> Unlimited Colors

## project 3

```javascript

//generating a random color to be displayed 
let randomColor = function(){
  let hexValue = '0123456789ABCDEF'
  let color = '#'

  for(let i=0; i < 6; i++){
    color += hexValue[Math.floor(Math.random() * 16)]
  }
  return color;
}

let intervalId;
//performing setInterval
let startChangingColor = function(){

  let changeColor = function(){
    document.body.style.backgroundColor = randomColor()
  }

  if(!intervalId){
    intervalId = setInterval(changeColor, 1000)
  }
  
}

// clearing/removing the interval
let stopChangingColor = function(){
  clearInterval(intervalId)
  intervalId = null;
}

//implementing event on start and stop button
document.getElementById('start').addEventListener('click', startChangingColor)

document.getElementById('stop').addEventListener('click', stopChangingColor)


```