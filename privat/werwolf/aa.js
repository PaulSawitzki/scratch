function programm(){
werkzeug("#bild1").hide();
werkzeug("#bild2").hide();
werkzeug("#bild3").hide();
werkzeug("#bild4").hide();
werkzeug("#bild5").show();
werkzeug("#bereich1").hide();
werkzeug("#bereich2").hide();
werkzeug("#bereich3").hide();
werkzeug("#Auswahl1").click(einblenden_eines_Objekts);
werkzeug("#Auswahl2").click(Engel);
}
var min = 1;
var max = 4;
var x = 1
function einblenden_eines_Objekts(){
if(x == 1){
  werkzeug("#bild1").show();
  werkzeug("#bild5").hide();
  werkzeug("#Auswahlfeld").hide();
}
if(x == 2){
  werkzeug("#bild2").show();
  werkzeug("#bild5").hide();
  werkzeug("#Auswahlfeld").hide();
}
if(x == 3){
  werkzeug("#bild3").show();
  werkzeug("#bild5").hide();
  werkzeug("#Auswahlfeld").hide();
}
if(x == 4){
  werkzeug("#bild4").show();
  werkzeug("#bild5").hide();
  werkzeug("#Auswahlfeld").hide();
}
}
var min2 = 1;
var max2 = 7;
var y = Math.round(Math.random() * (max2 - min2)) + min2;
function Engel(){
if(y == 1){
  werkzeug("#bereich1").show();
  werkzeug("#bild1").hide();
  werkzeug("#bereich2").hide();
  werkzeug("#Auswahlfeld").hide();
}
if(y == 2){
  werkzeug("#bereich3").show();
  werkzeug("#bild1").hide();
  werkzeug("#bild1").hide();
  werkzeug("#Auswahlfeld").hide();
}
else{
  werkzeug("#bereich2").show();
  werkzeug("#bild1").hide();
}
}
console.log(y);
console.log(x);
werkzeug.start(programm);
