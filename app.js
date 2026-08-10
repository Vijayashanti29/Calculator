let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('.btn');

for(item of buttons){
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if(buttonText == 'C'){
            screen.value = '';
        }
        else if(buttonText == '←'){
            screen.value = screen.value.slice(0, -1);
        }
        else if(buttonText == '='){
            try{
                screen.value = eval(screen.value);
            }
            catch{
                screen.value = "Error";
            }
        }
        else{
            screen.value += buttonText;
        }
        

    })
}