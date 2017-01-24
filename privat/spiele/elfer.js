var min = 1;
var max = 3;
var Zahl1 = 0;
var y ="Jup";
var x = Math.round(Math.random() * (max - min)) + min;
console.log(x)
function einblenden_eines_Objekts(event){
  var button1 = werkzeug("#Auswahl1");
  var button2 = werkzeug("#Auswahl2");
  var button3 = werkzeug("#Auswahl3");
  var selected_button = werkzeug(event.target);
  if(selected_button.is(button1)){
  Zahl1 = 1
    }
    if(Zahl1 == x){
      console.log(y);
    }
}
console.log(Zahl1)
