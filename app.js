const myName = document.getElementById(
    'name'
);
const myInput = document.getElementById('inputName');
const myButton = document.getElementById('nameButton');

// telling the button to listen for clicks
myButton.addEventListener('click', () => {
    console.log(Date());
    //grab the current value of the text input
    const inputName = myInput.value;
    myName.textContent = inputName;
});