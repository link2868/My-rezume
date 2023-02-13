elem.onclick = function() {
    alert ('Привіт учителю!');
};    
      
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var backgroundColor = '#';
    for (var i = 0; i < 6; i++) {
        backgroundColor += letters[Math.floor(Math.random() * 16)];
    }
    return backgroundColor;
}

function changeRandomColor(){
    const style = document.getElementsByClassName('button-null')[0].style;
    const randomColor = getRandomColor();
  
    style.backgroundColor = randomColor;
}

function changeColor(){
    const style = document.getElementsByClassName('button-null')[0].style;
    
   if (style.backgroundColor === "green") style.backgroundColor = "lightgray"
    else  style.backgroundColor = "green";
}


