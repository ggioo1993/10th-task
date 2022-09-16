function onof(){
    let shuqi = document.getElementById("antebaa");
    if(shuqi.src.match("img/on.png")){
        document.getElementById("antebaa").src="img/off.png"
        document.getElementById("anteba").innerHTML="ანთება"
    }
    else{
        document.getElementById("antebaa").src="img/on.png"
        document.getElementById("anteba").innerHTML="ჩაქრობა"
    }
}