$(document).ready(onReady);

let generateCount = 1;

function onReady() {
    console.log('in on ready!');

    $("body").on('click', ".generateBtn", addDiv)
        
    }
    
function addDiv() {
    console.log('in add div');
    $("body").append(`<div>`);
    $("div").append(`
    <p>${generateCount++}</p>
    <button>Yellow</button>
    <button>Delete</button>
    `)
    
}
