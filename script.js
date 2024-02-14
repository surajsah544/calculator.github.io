let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = ""; // Change 'strings' to 'string'
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string); // Change 'string' to 'string'
            input.value = string;
        }
        else if(e.target.innerHTML=='AC'){
            string = "";
            input.value=string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1); // Change 'strings' to 'string'
            input.value = string;
        }
        else{
            string += e.target.innerHTML; // Change 'strings' to 'string'
            input.value = string;
        }
    })
});
