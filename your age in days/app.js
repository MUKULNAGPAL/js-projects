
function clicked() {
    var display = parseInt(prompt("enter your age year"))
    var AgeInDays = (2021 - display) * 365

    var writtenText = document.createTextNode("you are " + AgeInDays + " years old");
    document.getElementById('box').appendChild(writtenText);

}


function reset() {
    document.getElementById('box').remove();
}