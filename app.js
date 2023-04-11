(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
      

    // to check whos button was pressed 
    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
           let value = e.target.dataset.num;
           screen.value += value;
        })
    })





})();

