var colors1 = ["green", "yellow","red","lightgrey"],   // the color choices
    index1 = 0;                                     // index of the current color
    
document.getElementById("colorify1").onclick = function() {
  this.style.backgroundColor = colors1[index1];  // set the color of body to the current color
  index1 = (index1 + 1) % colors1.length;             // increment index to point to the next color (if it goes beyond the length of the coices array get it back to 0 using the modulo %)
}

var colors2= ["green", "yellow","red","lightgrey"],   // the color choices
    index2 = 0;                                     // index of the current color
document.getElementById("colorify2").onclick = function() {
  this.style.backgroundColor = colors2[index2];  // set the color of body to the current color
  index2 = (index2 + 1) % colors2.length;             // increment index to point to the next color (if it goes beyond the length of the coices array get it back to 0 using the modulo %)
}

var colors3= ["green", "yellow","red","lightgrey"],   // the color choices
    index3 = 0;
document.getElementById("colorify3").onclick = function() {
  this.style.backgroundColor = colors3[index3];  // set the color of body to the current color
  index3 = (index3 + 1) % colors3.length;             // increment index to point to the next color (if it goes beyond the length of the coices array get it back to 0 using the modulo %)
}

var colors4= ["green", "yellow","red","lightgrey"],   // the color choices
    index4 = 0;
document.getElementById("colorify4").onclick = function() {
  this.style.backgroundColor = colors4[index4];  // set the color of body to the current color
  index4 = (index4 + 1) % colors4.length;             // increment index to point to the next color (if it goes beyond the length of the coices array get it back to 0 using the modulo %)
}

var colors5= ["green", "yellow","red","lightgrey"],   // the color choices
    index5 = 0;
document.getElementById("colorify5").onclick = function() {
  this.style.backgroundColor = colors5[index5];  // set the color of body to the current color
  index5 = (index5 + 1) % colors5.length;             // increment index to point to the next color (if it goes beyond the length of the coices array get it back to 0 using the modulo %)
}

var colors6= ["green", "yellow","red","lightgrey"],   // the color choices
    index6 = 0;
document.getElementById("colorify6").onclick = function() {
  this.style.backgroundColor = colors6[index6];  // set the color of body to the current color
  index6 = (index6 + 1) % colors6.length;             // increment index to point to the next color (if it goes beyond the length of the coices array get it back to 0 using the modulo %)
}

var colors7= ["green", "yellow","red","lightgrey"],   // the color choices
    index7= 0;
document.getElementById("colorify7").onclick = function() {
  this.style.backgroundColor = colors7[index7];  // set the color of body to the current color
  index7 = (index7 + 1) % colors7.length;             // increment index to point to the next color (if it goes beyond the length of the coices array get it back to 0 using the modulo %)
}