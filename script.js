$(document).ready(onReady);

let generateCount = 0;

function onReady() {
    console.log('in on ready!');

    $("body").on('click', ".generateBtn", calculateGenerate)
    $(document).on('click', "div", changeYellow)
    $(document).on('click', ".deleteBtn", deleteDiv)

    }

function calculateGenerate() {
    console.log('in calculate generate');
    generateCount++
    render();
}
    
function changeYellow() {
    console.log('in change yellow:');
    $(this).addClass('yellowBackground');
}

function deleteDiv() {
    console.log('in delete div');
    $(this).closest('div').remove(); 
}
    
function render() {
    console.log('in add div');
    $("body").append(`
    <div>
    <p>${generateCount}</p>
    <button class="yellowBtn">Yellow</button>
    <button class="deleteBtn">Delete</button>
    </div>
    `)
    
}
