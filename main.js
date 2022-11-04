var word;
function createWord(){
    word = document.getElementById('wordInput').value;
    if(word == "" ||
    word.includes("1") ||
    word.includes("2") ||
    word.includes("3") ||
    word.includes("4") ||
    word.includes("5") ||
    word.includes("6") ||
    word.includes("7") ||
    word.includes("8") ||
    word.includes("9") ||
    word.includes("0") ||
    word.includes("!") ||
    word.includes("@") ||
    word.includes("#") ||
    word.includes("$") ||
    word.includes("%") ||
    word.includes("^") ||
    word.includes("&") ||
    word.includes("*") ||
    word.includes(")") ||
    word.includes("(") ||
    word.includes("-") ||
    word.includes("+") ||
    word.includes("*") ||
    word.includes("/") ||
    word.includes(",") ||
    word.includes(".") ||
    word.includes("?") 
    ){
        window.alert("Try again");
        document.getElementById('wordInput').value = "";
    }
    else{
        word = document.getElementById('wordInput').value;
        var wordLenght = word.length;
        console.log(word)
        document.getElementById('letters').style.visibility = "visible";
        document.getElementById('hiddenLetters').style.visibility = "visible";
        document.getElementById('createPanel').style.visibility = "hidden";
    }
}
function f(leter){
    document.getElementById(leter).style.visibility = "hidden";
}