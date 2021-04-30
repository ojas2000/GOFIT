var onoff = 0;
var conn = "";
document.getElementById("hide2").style.cssText="display:none;";

document.getElementById("jcon1").style.cssText = "border-bottom:solid 1px black;"
function ar() {
    conn = "Apurva Reddy";
    console.log(conn);
    document.getElementById("conendbut").innerHTML = "CONSULT " + conn;
}
function as() {
    conn = "Aarav Saini";
    console.log(conn);
    document.getElementById("conendbut").innerHTML = "CONSULT " + conn;
}
function hg() {
    conn = "Harish Gole";
    console.log(conn);
    document.getElementById("conendbut").innerHTML = "CONSULT " + conn;
}
function sr() {
    conn = "Sathwik Ravel";
    console.log(conn);
    document.getElementById("conendbut").innerHTML = "CONSULT " + conn;
}
function gform() {
    console.log("form");
    if (conn == "") {
        alert("please select a consultent")
    }
    else{
        document.getElementById("hide1").style.cssText="display:none;";
        document.getElementById("hide2").style.cssText="display:block;";
        document.getElementById("consultantn").value=conn;
    }
}
function gurugram() {
    document.getElementById("constt1").style.cssText = "display:block";
    document.getElementById("constt2").style.cssText = "display:none";
    document.getElementById("constt3").style.cssText = "display:none";
    document.getElementById("constt4").style.cssText = "display:none";
    document.getElementById("jcon2").style.cssText = "border-bottom:solid 1px black;"
    document.getElementById("jcon1").style.cssText = "border-bottom:transparent 1px black;"
    document.getElementById("jcon3").style.cssText = "border-bottom:transparent 1px black;"
    document.getElementById("jcon4").style.cssText = "border-bottom:transparent 1px black;"
    document.getElementById("jcon5").style.cssText = "border-bottom:transparent 1px black;"
}
function india() {
    document.getElementById("constt2").style.cssText = "display:block";
    document.getElementById("constt3").style.cssText = "display:block";
    document.getElementById("constt4").style.cssText = "display:block";
    document.getElementById("constt1").style.cssText = "display:block";
    document.getElementById("jcon1").style.cssText = "border-bottom:solid 1px black;"
    document.getElementById("jcon5").style.cssText = "border-bottom:transparent 1px black;"
    document.getElementById("jcon4").style.cssText = "border-bottom:transparent 1px black;"
    document.getElementById("jcon3").style.cssText = "border-bottom:transparent 1px black;"
    document.getElementById("jcon2").style.cssText = "border-bottom:transparent 1px black;"
}
function chennai() {
    document.getElementById("constt1").style.cssText = "display:none";
    document.getElementById("constt2").style.cssText = "display:none";
    document.getElementById("constt3").style.cssText = "display:block";
    document.getElementById("constt4").style.cssText = "display:none";
    document.getElementById("jcon3").style.cssText = "border-bottom:solid 1px black;"
    document.getElementById("jcon1").style.cssText = "border-bottom:transparent 1px black;"
    document.getElementById("jcon2").style.cssText = "border-bottom:transparent 1px black;"
    document.getElementById("jcon4").style.cssText = "border-bottom:transparent 1px black;"
    document.getElementById("jcon5").style.cssText = "border-bottom:transparent 1px black;"
}
function goa() {
    document.getElementById("constt1").style.cssText = "display:none";
    document.getElementById("constt2").style.cssText = "display:none";
    document.getElementById("constt3").style.cssText = "display:none";
    document.getElementById("constt4").style.cssText = "display:block";
    document.getElementById("jcon4").style.cssText = "border-bottom:solid 1px black;"
    document.getElementById("jcon1").style.cssText = "border-bottom:transparent 1px black;"
    document.getElementById("jcon2").style.cssText = "border-bottom:transparent 1px black;"
    document.getElementById("jcon3").style.cssText = "border-bottom:transparent 1px black;"
    document.getElementById("jcon5").style.cssText = "border-bottom:transparent 1px black;"
}
function delhi() {
    document.getElementById("constt1").style.cssText = "display:none";
    document.getElementById("constt2").style.cssText = "display:block";
    document.getElementById("constt3").style.cssText = "display:none";
    document.getElementById("constt4").style.cssText = "display:none";
    document.getElementById("jcon5").style.cssText = "border-bottom:solid 1px black;"
    document.getElementById("jcon1").style.cssText = "border-bottom:transparent 1px black;"
    document.getElementById("jcon2").style.cssText = "border-bottom:transparent 1px black;"
    document.getElementById("jcon4").style.cssText = "border-bottom:transparent 1px black;"
    document.getElementById("jcon3").style.cssText = "border-bottom:transparent 1px black;"
}
function heartclick() {
    if (onoff == 0) {
        document.getElementById("boxeheart").style.cssText = "background-color:palevioletred;";
        document.getElementById("boxeheart2").style.cssText = "background-color:palevioletred;";
        document.getElementById("boxeheart3").style.cssText = "background-color:palevioletred;";

        onoff = 1;
        console.log(onoff)
    }
    else {
        document.getElementById("boxeheart").style.cssText = "background-color:rgb(255, 176, 176)";
        document.getElementById("boxeheart2").style.cssText = "background-color:rgb(255, 176, 176)";
        document.getElementById("boxeheart3").style.cssText = "background-color:rgb(255, 176, 176)";
        onoff = 0;
    }

}
function heartclick1() {
    if (onoff == 0) {
        document.getElementById("boxheart").style.cssText = "background-color:palevioletred;";
        document.getElementById("boxheart2").style.cssText = "background-color:palevioletred;";
        document.getElementById("boxheart3").style.cssText = "background-color:palevioletred;";

        onoff = 1;
        console.log(onoff)
    }
    else {
        document.getElementById("boxheart").style.cssText = "background-color:rgb(255, 176, 176)";
        document.getElementById("boxheart2").style.cssText = "background-color:rgb(255, 176, 176)";
        document.getElementById("boxheart3").style.cssText = "background-color:rgb(255, 176, 176)";
        onoff = 0;
    }

}

function tyend()
{
    window.location="consult.html";   
    
}    
function CALCULATE() {

    var height = document.getElementById("height").value / 100;
    var weight = document.getElementById("weight").value;


    if (height == 0 || weight == 0) {
        document.getElementById("ansb").innerHTML = "please enter the values";
    }
    else {
        var bmi = (weight / (height * height));
        bmi = bmi.toFixed(1);
        if (bmi < 18.5) {
            document.getElementById("ansb").innerHTML = "your bmi is " + bmi + " and you are under weight";
        }
        else if (bmi >= 18.5 && bmi <= 25) {
            document.getElementById("ansb").innerHTML = "your bmi is " + bmi + " and you are healthy";
        }
        else {
            document.getElementById("ansb").innerHTML = "your bmi is " + bmi + " and you are over weight";
        }
    }
}



var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
 
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    window.location="thank.html";
    form.reset()
  }).catch(error => {
    alert("error :(");
    window.location="consult.html";
  });
}
form.addEventListener("submit", handleSubmit)
