var word;
var a;
var wrapper;
var wordLenght;
function createWord(){
    word = document.getElementById('wordInput').value;
    if(word == "" ||
    word.includes(" ") ||
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
        wordLenght = word.length;
        document.getElementById('letters').style.visibility = "visible";
        document.getElementById('hiddenLetters').style.visibility = "visible";
        document.getElementById('createPanel').style.visibility = "hidden";
        wrapper = document.createElement("div");
        wrapper.style.display = "flex";
        wrapper.style.justifyContent = "center";
        for (let i = 0; i < wordLenght; i++) {
            a = document.createElement("button");
            a.value = word[i];
            a.innerHTML = "";
            a.style.backgroundColor = "rgb(164, 16, 129)";
            a.style.border = "none";
            a.style.borderBottom = "2px solid rgb(89, 0, 148)";
            a.style.margin = "0px 10px";
            a.style.fontSize = "40px";
            a.style.width = "50px";
            a.id = word[i];
            wrapper.appendChild(a);
        }
        document.body.appendChild(wrapper);
    }
}
function f(leter){
    document.getElementById(leter).style.visibility = "hidden";
}
