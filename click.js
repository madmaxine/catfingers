
var mousedown = false;
var isCounting = false;
var resultInt = 0;
var result = $('.result');

document.onmousedown = function() {
    mousedown = true;   
}

document.onmouseup = function() {
    mousedown = false;
}

var t = window.setInterval(function() {
    if(mousedown && !isCounting) {
        isCounting = true;
        var f = window.setTimeout(function() {
            isCounting = false;
            resultInt = parseInt(result.text());
            resultInt++;
            console.log(resultInt);
            result.text(resultInt);
        }, 1000);
        
    }
    
}, 1000/60);