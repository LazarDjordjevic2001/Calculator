const inputbox=document.querySelector("#inputbox")
const buttons=document.querySelectorAll("button")

let string='';

buttons.forEach(element=>{
    element.addEventListener('click',(e)=>{
        if(e.target.innerText=='='){
            string=String(eval(string))
            inputbox.value= string;
        }
        else if(e.target.innerText=='AC'){
            string=''
            inputbox.value=string;
        }
        else if(e.target.innerText=='Del'){
            string=string.substring(0,string.length-10)
            inputbox.value=string;
        }
        else if(e.target.id=='plusminus'){
            string=String(-eval(string))
            inputbox.value=string
        }
        else{
            string+= e.target.innerText
            inputbox.value=string
        }
    })
})
