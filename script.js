$(document).ready(onReady);

function onReady() {
    console.log('in on ready!');

    $("body").on('click', ".generateBtn", addDiv)
        
    }
    
function addDiv() {
    console.log('in add div');
    $("body").append(`<div>`);
    
}

function render() {
    

    
}