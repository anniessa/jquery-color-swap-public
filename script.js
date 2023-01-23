$(document).ready(onReady);

let generateCount = 1;

function onReady() {
    console.log('in on ready!');

    $("body").on('click', ".generateBtn", render)
    $(document).on('click', ".yellowBtn", changeYellow)
    $(document).on('click', ".deleteBtn", deleteDiv)

        
    }
    
function changeYellow() {
    $(this).css("backgroundColor", "yellow");
    
}

function deleteDiv() {
    console.log('in delete div');
    $(this).closest('div');
    
}
    
function render() {
    console.log('in add div');
    $("body").append(`<div>`);
    $("div").append(`
    <p>${generateCount++}</p>
    <button class="yellowBtn">Yellow</button>
    <button class="deleteBtn">Delete</button>
    `)
    
}
