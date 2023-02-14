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

function changeWidthHeight(){
    const styleWH = document.getElementsByClassName('result')[0].style;
   if (styleWH.width ==='160px' && styleWH.height === '42px') 
        styleWH.width = '80px', styleWH.height = '21px'
     else styleWH.width = '160px', styleWH.height = '42px';
     console.log(styleWH.width);
     console.log(styleWH.height);
}

function Rotate(){
    const styleRotate = document.getElementsByClassName('result')[0].style;
    if (styleRotate.transform === 'rotate(90deg)') 
        styleRotate.transform = 'rotate(0deg)', styleRotate.margin = '0 4px 0 4px'
     else styleRotate.transform = 'rotate(90deg)',
          styleRotate.margin = '40px 0px 50px 0px'; 
}

function Dell(){
    const styleDell = document.getElementsByClassName('result')[0].style;
    if (styleDell.display === 'none') styleDell.display = 'block'
      else styleDell.display = 'none';
}


