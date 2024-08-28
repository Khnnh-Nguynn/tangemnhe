var a=0;
document.getElementById("a1").addEventListener("click", f1)
function f1(){
    document.getElementById("q1").style.display="none";
    document.getElementById("q2").style.display="block";
}
document.getElementById("a21").addEventListener("click", f21)
function f21(){
    document.getElementById("q2").style.display="none";
    document.getElementById("q3").style.display="block";
}
document.getElementById("a22").addEventListener("click", f22)
function f22(){
    document.getElementById("q2").style.display="none";
    document.getElementById("q4").style.display="block";
}
document.getElementById("a3").addEventListener("click", f3)
function f3(){
    document.getElementById("q3").style.display="none";
    document.getElementById("b1").style.display="block";
}document.getElementById("a4").addEventListener("click", f4)
function f4(){
    document.getElementById("q4").style.display="none";
    document.getElementById("b1").style.display="block";
}
document.getElementById("no1").addEventListener("mouseover",function1)
function function1(){
    if(a==0){
        document.getElementById("b1").style.display="none";
        document.getElementById("b2").style.display="block";}
    else if(a<=5){
        document.getElementById("no1").style.display="none";
        document.getElementById("subno").style.display="inline";
    }
    else if(a>5&&a<10){
        document.getElementById("no1").value="YES";
        document.getElementById("yes1").value="NO";
    }
    else if(a%10==0){
        document.getElementById("b1").style.display="none";
        document.getElementById("ddtc").style.display="block";
    }
    else{
        document.getElementById("no1").value="YES";
        document.getElementById("yes1").value="NO";
    }
    a=a+1;
    
}
document.getElementById("warning").addEventListener("click",con)
function con(){
    document.getElementById("b1").style.display="block";
    document.getElementById("ddtc").style.display="none";
}
document.getElementById("yes1").addEventListener("mouseover",swap)
function swap(){
    if(a>5){
        document.getElementById("no1").value="NO";
        document.getElementById("yes1").value="YES";
    }
    
}
document.getElementById("subno").addEventListener("mouseover",sub)
function sub(){
    if(a<=6){
        document.getElementById("subno").style.display="none";
        document.getElementById("no1").style.display="inline";
    }
    a=a+1;
}
document.getElementById("no2").addEventListener("mouseover",function2)
function function2(){
    document.getElementById("b2").style.display="none";
    document.getElementById("b3").style.display="block";
}
document.getElementById("no3").addEventListener("mouseover",function3)
function function3(){
    document.getElementById("b3").style.display="none";
    document.getElementById("b4").style.display="block";
}
document.getElementById("no4").addEventListener("mouseover",function4)
function function4(){
    document.getElementById("b4").style.display="none";
    document.getElementById("b5").style.display="block";
}
document.getElementById("no5").addEventListener("mouseover",function5)
function function5(){
    document.getElementById("b5").style.display="none";
    document.getElementById("b6").style.display="block";
}
document.getElementById("no6").addEventListener("mouseover",function6)
function function6(){
    document.getElementById("b6").style.display="none";
    document.getElementById("b7").style.display="block";
}
document.getElementById("no7").addEventListener("mouseover",function7)
function function7(){
    document.getElementById("b7").style.display="none";
    document.getElementById("b8").style.display="block";
}
document.getElementById("no8").addEventListener("mouseover",function8)
function function8(){
    document.getElementById("b8").style.display="none";
    document.getElementById("b1").style.display="block";
}
