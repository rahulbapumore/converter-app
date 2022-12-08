let firstselect = document.getElementById("first");
let secondselect = document.getElementById("second");
let convert = document.getElementById("convert");
let swap = document.getElementById("swap");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let val = firstselect.value;

firstselect.addEventListener("change",(event)=>
{
    
    let missingoption = document.createElement("option");
    missingoption.setAttribute("value" ,val);
    let val1 = val.charAt(0).toUpperCase() + val.slice(1);
    missingoption.innerHTML = val1;
    secondselect.appendChild(missingoption);
    //alert(event.target.value);
    let deleteoption = secondselect.querySelector(`option[value="${event.target.value}"]`);
    //alert(deleteoption.innerHTML);
    secondselect.removeChild(deleteoption);
    val = event.target.value;    
});


convert.addEventListener("click",(event)=>
{
    let from = firstselect.value;
    let to = secondselect.value;
    
    let input1val = input1.value;
    let input2val = input2.value;
    if(from==="decimal" && to==="binary")
    {
        let binary = parseInt(input1val).toString(2);
        input2.value = binary;
    }
    else if(from==="decimal" && to==="octal")
    {
        let octal = parseInt(input1val).toString(8);
        input2.value = octal;
    }
    else if(from==="decimal" && to==="hexadecimal")
    {
        //alert(from + "  "+to);
        let hexa = parseInt(input1val).toString(16);
        input2.value = hexa;
    }
    else if(from==="binary" && to==="decimal")
    {
        let decim = parseInt(input1val, 2).toString(10);
        input2.value = decim;
    }
    else if(from==="binary" && to==="octal")
    {
        let octal = parseInt(input1val, 2).toString(8);
        input2.value = octal;
    }
    else if(from==="binary" && to==="hexadecimal")
    {
        let hex = parseInt(input1val, 2).toString(16);
        input2.value = hex;
    }
    else if(from==="octal" && to==="decimal")
    {
        let decim = parseInt(input1val, 8).toString(10);
        input2.value = decim;
    }
    else if(from==="octal" && to==="binary")
    {
        let binary = parseInt(input1val, 8).toString(2);
        input2.value = binary;
    }
    else if(from==="octal" && to==="hexadecimal")
    {
        let hex = parseInt(input1val, 8).toString(16);
        input2.value = hex;
    }
    else if(from==="hexadecimal" && to==="decimal")
    {
        let decim = parseInt(input1val, 16).toString(10);
        input2.value = decim;
    }
    else if(from==="hexadecimal" && to==="binary")
    {
        let bin = parseInt(input1val, 16).toString(2);
        input2.value = bin;
    }
    else if(from==="hexadecimal" && to==="octal")
    {
        let octal = parseInt(input1val, 16).toString(8);
        input2.value = octal;
    }
    
    
});

swap.addEventListener("click",(event)=>
{
    let temp = input1.value;
    input1.value = input2.value;
    input2.value = temp;

    
})






