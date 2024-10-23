window.onload = function() {
    const keyPress = document.getElementById("keyPress");

    document.addEventListener("keydown", function(event){
        displayKey(event);
    });

    document.addEventListener("keyup", function(){
    resetStyle()
    });
 
}

function displayKey(event) {
    key = event.key;
    if (event.code == 'Space') {
        key = 'Space';
    }
    keyPress.textContent = key;
    keyPress.style.transition = "none";
    keyPress.style.opacity = "1"; 
    keyPress.style.transform = "scale(2)"; 
}


function resetStyle() {
    setTimeout(() => {
        keyPress.style.transition = "transform 1s, opacity 0.5s"; 
        keyPress.style.opacity = "0"; 
        keyPress.style.transform = "scale(1)"; 
    }, 10); 
}