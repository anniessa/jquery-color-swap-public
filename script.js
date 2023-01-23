$(document).ready(onReady);

let generateCount = 0;

function onReady() {
    console.log('in on ready!');

    $("body").on('click', ".generateBtn", addDiv)
        
    }
    
function addDiv() {
    console.log('in add div');
    $("body").append(`<div>`);
    <p>${generateCount}++ I want this to show how many times generate button was pushed</p>

    
}

function render() {
    

    
}