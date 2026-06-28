function changeFont(fontName){
    const text = document.getElementById("myText");
    text.style.fontFamily = fontName;
}

function changeSize(size){
    const text = document.getElementById("myText");
    if(size === "small") {
        text.style.fontSize = "16px";
    }else if(size === "medium"){
        text.style.fontSize = "24px";
    }else if(size === "large"){
        text.style.fontSize = "32px";
    }else if(size === "xLarge"){
        text.style.fontSize = "42px";
    }
}