elem.onclick = function() {
    alert ('Привіт учителю!');
};

let i=1;
function changeColor(){
    i++;
    if (i==2) { document.getElementsByClassName('button-null')[0].style.backgroundColor = '#6d9bf5';};
    if (i==3) { document.getElementsByClassName('button-null')[0].style.backgroundColor = 'lightgray'; i=1};
}