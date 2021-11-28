let txt= "fnfjfjffjjf"
console.log(txt.length);
let txt1="bar shvarzman";
let txt2= txt1.replace("bar","gal");
console.log(txt2);
let txt3= txt1.concat(" and ", txt2);
console.log(txt3);

const d= new Date();
console.log(d);

var h= d.getHours();
console.log(h);

function greet () {
    if (h < 18) {
    let greeting = "good morning";
    document.getElementById("GreetingP").innerHTML=greeting;
}
else {
    let greeting = "good evening";
    document.getElementById("GreetingP").innerHTML=greeting;
}
}

let car = ["toyota", "honda", "mazda"];
console.log(car);
let j;
let text= " ";
for(j=0; j<car.length; j++) {
    text += car[j]+ " ";
    console.log(text);
}

function stopMotion () {
    document.getElementById("img").src="flower.png";
}

var imgs = ["flower.png","flower2.jfif"];
var i=0;
function stopMotion () {
    setTimeOut(()=>{
                document.getElementById("img").src= imgs[i];
                i++;
                if (i < imgs.length) {
                    stopMotion ();
                }
                else {
                    i=0;
                }
},500);
}


