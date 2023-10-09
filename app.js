(function () {
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let clear = document.querySelector('.btn-clear');
  let equal = document.querySelector('.btn-equal');

  // Check the button is pushed in the screen 
  buttons.forEach(function (button) {
      button.addEventListener('click', function (e) {
          let value = e.target.innerText;
          screen.value += value;
      })
  });
  equal.addEventListener('click', function (e) {
    if (screen.value === '') {
        screen.value = "";
    } else {

      let expression = screen.value.replace(/=$/, '');
        console.log("Before eval:", expression);

        try {
            let answer = eval(expression);
            console.log("After eval:", answer);

            if (isNaN(answer) || !isFinite(answer)) {
                console.error("Invalid result:", answer);
                screen.value = "Error";
            } else {
                screen.value = '' + answer;
            }
        } catch (error) {
            console.error("Evaluation error:", error);
            screen.value = "Error";
        }
      }
    });
})();