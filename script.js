$(document).ready(onReady);

function onReady() {
    console.log('in on ready!');

    $("body").on('click', "#generateBtn", buttonDiv)
        
    }
    

function buttonDiv() {
    console.log('in button div');
    $("body").append("div")
    render();
}

function render() {
    $("body").append("div")

    
}