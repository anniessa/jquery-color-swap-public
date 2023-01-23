$(document).ready(onReady);

let generateCount = ;

function onReady() {
    console.log('in on ready!');

    $("body").on('click', ".generateBtn", addDiv)
        
    }
    
function addDiv() {
    console.log('in add div');
    $("body").append(`<div>`);
    render();
    
}

function render() {
    console.log('in render');
    $("div").append(`
    <p>${generateCount}++</p>
    `)
    

    
}