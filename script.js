let string = "";
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerHTML;

    if (buttonText === '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    } else if (buttonText === 'C') {
      string = "";
      document.querySelector('input').value = string;
    } else {
      console.log(e.target);
      string += buttonText;
      document.querySelector('input').value = string;
    }
  });
});
