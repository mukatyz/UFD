const buttomNumber = document.getElementsByName('number');
const buttomOperator = document.getElementsByName('operator');
let buttomEqual = document.getElementsByName('equal')[0];
const buttomClean = document.getElementsByName('clean')[0]; 
let result = document.getElementsByName('result')[0]; 
let newValue = '25';
console.log(buttomNumber);
console.log(buttomOperator);
console.log(buttomEqual);
console.log(buttomClean);
buttomNumber.forEach(function(boton){
    boton.addEventListener('click' , function(){
        addNumber(boton.value)
    })
});

function addNumber(clickNumber){
    newValue = clickNumber;
}

buttomClean.addEventListener('click' , function(){
    cleanDisplay();
});

function refreshDisplay(){
    result.value = newValue;
}
function cleanDisplay(){
    newValue = 0;
    refreshDisplay();
}
refreshDisplay();

