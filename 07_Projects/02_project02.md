# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code -> BMI Calculator Project

## project 2

```javascript

let form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  //everytime we have set the form to default
  e.preventDefault();

  //getting the height and weight values
  //values come in string format
  //need to change to number using parseInt
  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);

  let results = document.querySelector('#results');

  //logic & checks
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    //used the BMI calculator formula through internet
    let BMI = (weight / ((height * height) / 10000)).toFixed(2);
    //results.innerHTML = `<span>${BMI}</span>`;

    if (BMI < 18.6) {
      results.innerHTML = `<span>BMI value : ${BMI} is under-weight!</span>`;
    } else if (BMI > 18.6 && BMI < 24.9) {
      results.innerHTML = `<span>BMI value : ${BMI} is in normal-range!</span>`;
    } else {
      results.innerHTML = `<span>BMI value : ${BMI} is over-weight!</span>`;
    }
  }
});


```