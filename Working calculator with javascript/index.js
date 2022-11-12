let display = document.getElementById('display');

let buttons=Array.from(document.querySelectorAll('.button'));

let dis = display.innerText;

document.addEventListener('keydown',(event)=>{
    let name=event.key;
    switch(name){
        case "Enter":
            display.innerText=eval(display.innerText);
            break;
        case "Backspace":
            display.innerText=display.innerText.slice(0,-1);
            break;
        case "Escape":
            display.innerText="";
            break;
        default:
            // let re=/[0-9]/;
            if(name=="Shift"||name=="Control"||name=="Alt"||name=="Meta"||name=="CapsLock"||name=="Tab"){

            }else{

                display.innerText+=name;
            }
    }
})
buttons.map(button =>{
    button.addEventListener('click',(e)=>{
       switch(e.target.innerText){
        case 'C':
            display.innerText='';
        break;
        case '←':
            if(display.innerText){

                display.innerText=display.innerText.slice(0,-1);
            }
        break;
        case '=':
            try{

                display.innerText=eval(display.innerText);
            }catch{
                display.innerText="Error!";
            }
        break;
        case '*':
            if(display.innerText==""){
                // display.innerText=null;
            }else{
                display.innerText+=e.target.innerText
            }
        break;
        case '/':
            if(display.innerText==""){
                // display.innerText=null;
            }else{
                display.innerText+=e.target.innerText
            }
        
        break;
        default:
            display.innerText+=e.target.innerText;
       }
    })
})