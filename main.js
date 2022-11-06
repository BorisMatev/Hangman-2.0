var word;
var originalWord;
var arrayObj = [];
var a;
var wrapper;
var wordLenght;
var divContainer = document.getElementById('container');
function createWord() {
    arrayObj = [];
    word = document.getElementById('wordInput').value;
    if (word == "" ||
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
    ) {
        window.alert("Try again");
        document.getElementById('wordInput').value = "";
    }
    else {
        word = document.getElementById('wordInput').value.toLowerCase();
        console.log(word);

        originalWord = document.getElementById('wordInput').value;
        wordLenght = word.length;
        document.getElementById('keyboard').style.visibility = "visible";
        document.getElementById('hiddenLetters').style.visibility = "visible";
        document.getElementById('createPanel').style.visibility = "hidden";
        wrapper = document.createElement("div");
        wrapper.setAttribute("style", "")
        for (let i = 0; i < wordLenght; i++) {
            a = document.createElement("button");
            a.id = word[i];
            a.innerHTML = "";
            a.style.backgroundColor = "rgb(164, 16, 129)";
            a.style.border = "none";
            a.style.borderBottom = "2px solid rgb(89, 0, 148)";
            a.style.margin = "0px 10px";
            a.style.fontSize = "40px";
            a.style.width = "50px";
            arrayObj.push(a);
            wrapper.appendChild(a);
        }
        divContainer.appendChild(wrapper);
        alfabetV();
        document.getElementById('container').style.visibility = "visible";
    }
}
var fullSpaces = 0;
var vremennaPromenliva = 0;
function guessLetter(leter) {
    document.getElementById(leter + 1).style.visibility = "hidden";
    if (!word.includes(leter)) {
        fullSpaces++;
    }
    else {
        vremennaPromenliva = 0;
        arrayObj.forEach(x => {
            if (x.id == leter) {
                x.innerHTML = leter;
            }
            if (x.innerHTML != "") {
                vremennaPromenliva++;
            }
        });
        if (vremennaPromenliva == wordLenght) {
            document.getElementById('answer').innerHTML = originalWord;
            document.getElementById("winAlert").style.visibility = "visible";
            document.getElementById('keyboard').style.visibility = "hidden";
            document.getElementById('hiddenLetters').style.visibility = "hidden";
            document.getElementById('createPanel').style.visibility = "hidden";
            divContainer.style.visibility = "hidden";
        }
    }
    if (fullSpaces == 7) {
        fullSpaces = 0;
        document.getElementById("loseAlert").style.visibility = "visible";
        document.getElementById('keyboard').style.visibility = "hidden";
        document.getElementById('hiddenLetters').style.visibility = "hidden";
        document.getElementById('createPanel').style.visibility = "hidden";
        divContainer.style.visibility = "hidden";
    }
}
document.getElementById("btn").addEventListener("click", newGame);
function newGame() {
    document.getElementById("loseAlert").style.visibility = "hidden";
    document.getElementById("winAlert").style.visibility = "hidden";
    document.getElementById('keyboard').style.visibility = "hidden";
    document.getElementById('hiddenLetters').style.visibility = "hidden";
    document.getElementById('createPanel').style.visibility = "visible";
    document.getElementById('wordInput').value = "";
    alfabetH();
    arrayObj.forEach(x => {
        x.remove();
    });
}

function alfabetV(){
    document.getElementById('a1').style.visibility = "visible";
    document.getElementById('q1').style.visibility = "visible";
    document.getElementById('w1').style.visibility = "visible";
    document.getElementById('e1').style.visibility = "visible";
    document.getElementById('r1').style.visibility = "visible";
    document.getElementById('t1').style.visibility = "visible";
    document.getElementById('y1').style.visibility = "visible";
    document.getElementById('u1').style.visibility = "visible";
    document.getElementById('i1').style.visibility = "visible";
    document.getElementById('o1').style.visibility = "visible";
    document.getElementById('p1').style.visibility = "visible";
    document.getElementById('a1').style.visibility = "visible";
    document.getElementById('s1').style.visibility = "visible";
    document.getElementById('d1').style.visibility = "visible";
    document.getElementById('f1').style.visibility = "visible";
    document.getElementById('g1').style.visibility = "visible";
    document.getElementById('h1').style.visibility = "visible";
    document.getElementById('j1').style.visibility = "visible";
    document.getElementById('k1').style.visibility = "visible";
    document.getElementById('l1').style.visibility = "visible";
    document.getElementById('z1').style.visibility = "visible";
    document.getElementById('x1').style.visibility = "visible";
    document.getElementById('c1').style.visibility = "visible";
    document.getElementById('v1').style.visibility = "visible";
    document.getElementById('b1').style.visibility = "visible";
    document.getElementById('n1').style.visibility = "visible";
    document.getElementById('m1').style.visibility = "visible";
}
function alfabetH(){
    document.getElementById('a1').style.visibility = "hidden";
    document.getElementById('q1').style.visibility = "hidden";
    document.getElementById('w1').style.visibility = "hidden";
    document.getElementById('e1').style.visibility = "hidden";
    document.getElementById('r1').style.visibility = "hidden";
    document.getElementById('t1').style.visibility = "hidden";
    document.getElementById('y1').style.visibility = "hidden";
    document.getElementById('u1').style.visibility = "hidden";
    document.getElementById('i1').style.visibility = "hidden";
    document.getElementById('o1').style.visibility = "hidden";
    document.getElementById('p1').style.visibility = "hidden";
    document.getElementById('a1').style.visibility = "hidden";
    document.getElementById('s1').style.visibility = "hidden";
    document.getElementById('d1').style.visibility = "hidden";
    document.getElementById('f1').style.visibility = "hidden";
    document.getElementById('g1').style.visibility = "hidden";
    document.getElementById('h1').style.visibility = "hidden";
    document.getElementById('j1').style.visibility = "hidden";
    document.getElementById('k1').style.visibility = "hidden";
    document.getElementById('l1').style.visibility = "hidden";
    document.getElementById('z1').style.visibility = "hidden";
    document.getElementById('x1').style.visibility = "hidden";
    document.getElementById('c1').style.visibility = "hidden";
    document.getElementById('v1').style.visibility = "hidden";
    document.getElementById('b1').style.visibility = "hidden";
    document.getElementById('n1').style.visibility = "hidden";
    document.getElementById('m1').style.visibility = "hidden";
}
