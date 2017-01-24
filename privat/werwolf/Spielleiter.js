var a = 0;
var b = 0;
var seher = 0;
var bewohner = 8;
var Bürger = 7;
var Werwolf = 1;
function programm(){
  werkzeug("#sieg1").hide();
  werkzeug("#sieg2").hide();
  werkzeug("#qualle").click(Seher);
  werkzeug("#Abstimmunggg").hide();
  werkzeug("#Werwolf").hide();
  werkzeug("#Seher").hide();
  werkzeug("#bereich1").show();
  werkzeug("#bereich2").hide();
  werkzeug("#bereich3").hide();
  werkzeug("#bereich4").hide();
  werkzeug("#bereich5").hide();
  werkzeug("#bereich6").hide();
  werkzeug("#bereich7").hide();
  werkzeug("#bereich8").hide();
  werkzeug("#bild1").hide();
  werkzeug("#bild2").hide();
  werkzeug("#bild3").hide();
  werkzeug("#bild4").hide();
  werkzeug("#bild5").hide();
  werkzeug("#bild6").hide();
  werkzeug("#bild7").hide();
  werkzeug("#bild8").hide();
  werkzeug("#bild9").show();
  werkzeug("#bild10").show();
  werkzeug("#bild11").show();
  werkzeug("#bild12").show();
  werkzeug("#bild13").show();
  werkzeug("#bild14").show();
  werkzeug("#bild15").show();
  werkzeug("#bild16").show();
  werkzeug("#wal").hide();
  werkzeug("#Auswaahl").hide();
  werkzeug("#Auswaaahl").hide();
  werkzeug("#LOL").hide();
  werkzeug("#lol").hide();
  werkzeug("#Abstimmung").hide();
  werkzeug("#As1").hide();
  werkzeug("#As2").hide();
  werkzeug("#As3").hide();
  werkzeug("#As4").hide();
  werkzeug("#As5").hide();
  werkzeug("#As6").hide();
  werkzeug("#As7").hide();
  werkzeug("#As8").hide();
  werkzeug("#b1").hide();
  werkzeug("#b2").hide();
  werkzeug("#auswahlfeld").click(einblenden_eines_Objekts);
}
function einblenden_eines_Objekts(event){
  var button1 = werkzeug("#Auswahl1");
  var button2 = werkzeug("#Auswahl2");
  var button3 = werkzeug("#Auswahl3");
  var button4 = werkzeug("#Auswahl4");
  var button5 = werkzeug("#Auswahl5");
  var button6 = werkzeug("#Auswahl6");
  var button7 = werkzeug("#Auswahl7");
  var button8 = werkzeug("#Auswahl8");
  var button9 = werkzeug("#Auswahl9");
  var button10 = werkzeug("#Auswahl10");
  var button11 = werkzeug("#Auswahl11");
  var button12 = werkzeug("#Auswahl12");
  var button13 = werkzeug("#Auswahl13");
  var button14 = werkzeug("#Auswahl14");
  var button15 = werkzeug("#Auswahl15");
  var button16 = werkzeug("#Auswahl16");
  var b = werkzeug("#Auswaahl")
  var selected_button = werkzeug(event.target);
  if (selected_button.is(b)){
   werkzeug.start(werwolf)
  }

if (selected_button.is(button1)){
 werkzeug("#bereich1").hide();
 werkzeug("#bereich2").show();

}
if (selected_button.is(button2)){
 werkzeug("#bereich1").hide();
 werkzeug("#bereich2").hide();
 werkzeug("#bereich3").show();
}
if (selected_button.is(button3)){
 werkzeug("#bereich1").hide();
 werkzeug("#bereich2").hide();
 werkzeug("#bereich3").hide();
 werkzeug("#bereich4").show();
}
if (selected_button.is(button4)){
 werkzeug("#bereich1").hide();
 werkzeug("#bereich2").hide();
 werkzeug("#bereich3").hide();
 werkzeug("#bereich4").hide();
 werkzeug("#bereich5").show();
}
if (selected_button.is(button5)){
 werkzeug("#bereich1").hide();
 werkzeug("#bereich2").hide();
 werkzeug("#bereich3").hide();
 werkzeug("#bereich4").hide();
 werkzeug("#bereich5").hide();
 werkzeug("#bereich6").show();
}
if (selected_button.is(button6)){
 werkzeug("#bereich1").hide();
 werkzeug("#bereich2").hide();
 werkzeug("#bereich3").hide();
 werkzeug("#bereich4").hide();
 werkzeug("#bereich5").hide();
 werkzeug("#bereich6").hide();
 werkzeug("#bereich7").show();
}
if (selected_button.is(button7)){
 werkzeug("#bereich1").hide();
 werkzeug("#bereich2").hide();
 werkzeug("#bereich3").hide();
 werkzeug("#bereich4").hide();
 werkzeug("#bereich5").hide();
 werkzeug("#bereich6").hide();
 werkzeug("#bereich7").hide();
 werkzeug("#bereich8").show();
}
if (selected_button.is(button9)){
 werkzeug("#bereich1").show();
 werkzeug("#bereich2").hide();
 werkzeug("#bereich3").hide();
 werkzeug("#bereich4").hide();
 werkzeug("#bereich5").hide();
 werkzeug("#bereich6").hide();
 werkzeug("#bereich7").hide();
 werkzeug("#bereich8").hide();
 werkzeug("#bild1").show();
 werkzeug("#bild2").hide();
 werkzeug("#bild3").hide();
 werkzeug("#bild4").hide();
 werkzeug("#bild5").hide();
 werkzeug("#bild6").hide();
 werkzeug("#bild7").hide();
 werkzeug("#bild8").hide();
}
if (selected_button.is(button10)){
 werkzeug("#bereich1").hide();
 werkzeug("#bereich2").show();
 werkzeug("#bereich3").hide();
 werkzeug("#bereich4").hide();
 werkzeug("#bereich5").hide();
 werkzeug("#bereich6").hide();
 werkzeug("#bereich7").hide();
 werkzeug("#bereich8").hide();
 werkzeug("#bild1").hide();
 werkzeug("#bild2").show();
 werkzeug("#bild3").hide();
 werkzeug("#bild4").hide();
 werkzeug("#bild5").hide();
 werkzeug("#bild6").hide();
 werkzeug("#bild7").hide();
 werkzeug("#bild8").hide();
}
if (selected_button.is(button11)){
 werkzeug("#bereich1").hide();
 werkzeug("#bereich2").hide();
 werkzeug("#bereich3").show();
 werkzeug("#bereich4").hide();
 werkzeug("#bereich5").hide();
 werkzeug("#bereich6").hide();
 werkzeug("#bereich7").hide();
 werkzeug("#bereich8").hide();
 werkzeug("#bild1").hide();
 werkzeug("#bild2").hide();
 werkzeug("#bild3").show();
 werkzeug("#bild4").hide();
 werkzeug("#bild5").hide();
 werkzeug("#bild6").hide();
 werkzeug("#bild7").hide();
 werkzeug("#bild8").hide();
}
if (selected_button.is(button12)){
 werkzeug("#bereich1").hide();
 werkzeug("#bereich2").hide();
 werkzeug("#bereich3").hide();
 werkzeug("#bereich4").show();
 werkzeug("#bereich5").hide();
 werkzeug("#bereich6").hide();
 werkzeug("#bereich7").hide();
 werkzeug("#bereich8").hide();
 werkzeug("#bild1").hide();
 werkzeug("#bild2").hide();
 werkzeug("#bild3").hide();
 werkzeug("#bild4").show();
 werkzeug("#bild5").hide();
 werkzeug("#bild6").hide();
 werkzeug("#bild7").hide();
 werkzeug("#bild8").hide();
}
if (selected_button.is(button13)){
 werkzeug("#bereich1").hide();
 werkzeug("#bereich2").hide();
 werkzeug("#bereich3").hide();
 werkzeug("#bereich4").hide();
 werkzeug("#bereich5").show();
 werkzeug("#bereich6").hide();
 werkzeug("#bereich7").hide();
 werkzeug("#bereich8").hide();
 werkzeug("#bild1").hide();
 werkzeug("#bild2").hide();
 werkzeug("#bild3").hide();
 werkzeug("#bild4").hide();
 werkzeug("#bild5").show();
 werkzeug("#bild6").hide();
 werkzeug("#bild7").hide();
 werkzeug("#bild8").hide();
}
if (selected_button.is(button14)){
 werkzeug("#bereich1").hide();
 werkzeug("#bereich2").hide();
 werkzeug("#bereich3").hide();
 werkzeug("#bereich4").hide();
 werkzeug("#bereich5").hide();
 werkzeug("#bereich6").show();
 werkzeug("#bereich7").hide();
 werkzeug("#bereich8").hide();
 werkzeug("#bild1").hide();
 werkzeug("#bild2").hide();
 werkzeug("#bild3").hide();
 werkzeug("#bild4").hide();
 werkzeug("#bild5").hide();
 werkzeug("#bild6").show();
 werkzeug("#bild7").hide();
 werkzeug("#bild8").hide();
}
if (selected_button.is(button15)){
 werkzeug("#bereich1").hide();
 werkzeug("#bereich2").hide();
 werkzeug("#bereich3").hide();
 werkzeug("#bereich4").hide();
 werkzeug("#bereich5").hide();
 werkzeug("#bereich6").hide();
 werkzeug("#bereich7").show();
 werkzeug("#bereich8").hide();
 werkzeug("#bild1").hide();
 werkzeug("#bild2").hide();
 werkzeug("#bild3").hide();
 werkzeug("#bild4").hide();
 werkzeug("#bild5").hide();
 werkzeug("#bild6").hide();
 werkzeug("#bild7").show();
 werkzeug("#bild8").hide();
}
if (selected_button.is(button16)){
 werkzeug("#bereich1").hide();
 werkzeug("#bereich2").hide();
 werkzeug("#bereich3").hide();
 werkzeug("#bereich4").hide();
 werkzeug("#bereich5").hide();
 werkzeug("#bereich6").hide();
 werkzeug("#bereich7").hide();
 werkzeug("#bereich8").show();
 werkzeug("#bild1").hide();
 werkzeug("#bild2").hide();
 werkzeug("#bild3").hide();
 werkzeug("#bild4").hide();
 werkzeug("#bild5").hide();
 werkzeug("#bild6").hide();
 werkzeug("#bild7").hide();
 werkzeug("#bild8").show();
}
if (selected_button.is(button8)){
 werkzeug.start(Seher)
}
}
function Seher(){
  werkzeug("#Abstimmunggg").hide();
  werkzeug("#Werwolf").hide();
  werkzeug("#Seher").show();
  werkzeug("#bereich1").show();
  werkzeug("#bereich2").show();
  werkzeug("#bereich3").show();
  werkzeug("#bereich4").show();
  werkzeug("#bereich5").show();
  werkzeug("#bereich6").show();
  werkzeug("#bereich7").show();
  werkzeug("#bereich8").show();
  werkzeug("#bild1").hide();
  werkzeug("#bild2").hide();
  werkzeug("#bild3").hide();
  werkzeug("#bild4").hide();
  werkzeug("#bild5").hide();
  werkzeug("#bild6").hide();
  werkzeug("#bild7").hide();
  werkzeug("#bild8").hide();
  werkzeug("#bild9").show();
  werkzeug("#bild10").show();
  werkzeug("#bild11").show();
  werkzeug("#bild12").show();
  werkzeug("#bild13").show();
  werkzeug("#bild14").show();
  werkzeug("#bild15").show();
  werkzeug("#bild16").show();
  werkzeug("#Auswahl1").hide();
  werkzeug("#Auswahl2").hide();
  werkzeug("#Auswahl3").hide();
  werkzeug("#Auswahl4").hide();
  werkzeug("#Auswahl5").hide();
  werkzeug("#Auswahl6").hide();
  werkzeug("#Auswahl7").hide();
  werkzeug("#Auswahl8").hide();
  werkzeug("#Auswahl9").hide();
  werkzeug("#Auswahl10").hide();
  werkzeug("#Auswahl11").hide();
  werkzeug("#Auswahl12").hide();
  werkzeug("#Auswahl13").hide();
  werkzeug("#Auswahl14").hide();
  werkzeug("#Auswahl15").hide();
  werkzeug("#Auswahl16").hide();
  werkzeug("#Abstimmung").hide();
  werkzeug("#bild9").click(erstes);
  werkzeug("#bild10").click(zweites);
  werkzeug("#bild11").click(drittes);
  werkzeug("#bild12").click(viertes);
  werkzeug("#bild13").click(fünftes);
  werkzeug("#bild14").click(sechstes);
  werkzeug("#bild15").click(siebtes);
  werkzeug("#bild16").click(achtes);
  werkzeug("#Auswaaahl").hide();
  werkzeug("#Auswaaahl").hide();
  function erstes(){
    werkzeug("#bereich1").show();
    werkzeug("#bereich2").show();
    werkzeug("#bereich3").show();
    werkzeug("#bereich4").show();
    werkzeug("#bereich5").show();
    werkzeug("#bereich6").show();
    werkzeug("#bereich7").show();
    werkzeug("#bereich8").show();
    werkzeug("#bild1").show();
    werkzeug("#bild2").hide();
    werkzeug("#bild3").hide();
    werkzeug("#bild4").hide();
    werkzeug("#bild5").hide();
    werkzeug("#bild6").hide();
    werkzeug("#bild7").hide();
    werkzeug("#bild8").hide();
    werkzeug("#bild9").hide();
    werkzeug("#bild10").hide();
    werkzeug("#bild11").hide();
    werkzeug("#bild12").hide();
    werkzeug("#bild13").hide();
    werkzeug("#bild14").hide();
    werkzeug("#bild15").hide();
    werkzeug("#bild16").hide();
    werkzeug("#Auswaahl").show();
  }
  function zweites(){
    werkzeug("#bereich1").show();
    werkzeug("#bereich2").show();
    werkzeug("#bereich3").show();
    werkzeug("#bereich4").show();
    werkzeug("#bereich5").show();
    werkzeug("#bereich6").show();
    werkzeug("#bereich7").show();
    werkzeug("#bereich8").show();
    werkzeug("#bild1").hide();
    werkzeug("#bild2").show();
    werkzeug("#bild3").hide();
    werkzeug("#bild4").hide();
    werkzeug("#bild5").hide();
    werkzeug("#bild6").hide();
    werkzeug("#bild7").hide();
    werkzeug("#bild8").hide();
    werkzeug("#bild9").hide();
    werkzeug("#bild10").hide();
    werkzeug("#bild11").hide();
    werkzeug("#bild12").hide();
    werkzeug("#bild13").hide();
    werkzeug("#bild14").hide();
    werkzeug("#bild15").hide();
    werkzeug("#bild16").hide();
    werkzeug("#Auswaahl").show();
  }
  function drittes(){
    werkzeug("#bereich1").show();
    werkzeug("#bereich2").show();
    werkzeug("#bereich3").show();
    werkzeug("#bereich4").show();
    werkzeug("#bereich5").show();
    werkzeug("#bereich6").show();
    werkzeug("#bereich7").show();
    werkzeug("#bereich8").show();
    werkzeug("#bild1").hide();
    werkzeug("#bild2").hide();
    werkzeug("#bild3").show();
    werkzeug("#bild4").hide();
    werkzeug("#bild5").hide();
    werkzeug("#bild6").hide();
    werkzeug("#bild7").hide();
    werkzeug("#bild8").hide();
    werkzeug("#bild9").hide();
    werkzeug("#bild10").hide();
    werkzeug("#bild11").hide();
    werkzeug("#bild12").hide();
    werkzeug("#bild13").hide();
    werkzeug("#bild14").hide();
    werkzeug("#bild15").hide();
    werkzeug("#bild16").hide();
    werkzeug("#Auswaahl").show();
  }
  function viertes(){
    werkzeug("#bereich1").show();
    werkzeug("#bereich2").show();
    werkzeug("#bereich3").show();
    werkzeug("#bereich4").show();
    werkzeug("#bereich5").show();
    werkzeug("#bereich6").show();
    werkzeug("#bereich7").show();
    werkzeug("#bereich8").show();
    werkzeug("#bild1").hide();
    werkzeug("#bild2").hide();
    werkzeug("#bild3").hide();
    werkzeug("#bild4").show();
    werkzeug("#bild5").hide();
    werkzeug("#bild6").hide();
    werkzeug("#bild7").hide();
    werkzeug("#bild8").hide();
    werkzeug("#bild9").hide();
    werkzeug("#bild10").hide();
    werkzeug("#bild11").hide();
    werkzeug("#bild12").hide();
    werkzeug("#bild13").hide();
    werkzeug("#bild14").hide();
    werkzeug("#bild15").hide();
    werkzeug("#bild16").hide();
    werkzeug("#Auswaahl").show();
  }
  function fünftes(){
    werkzeug("#bereich1").show();
    werkzeug("#bereich2").show();
    werkzeug("#bereich3").show();
    werkzeug("#bereich4").show();
    werkzeug("#bereich5").show();
    werkzeug("#bereich6").show();
    werkzeug("#bereich7").show();
    werkzeug("#bereich8").show();
    werkzeug("#bild1").hide();
    werkzeug("#bild2").hide();
    werkzeug("#bild3").hide();
    werkzeug("#bild4").hide();
    werkzeug("#bild5").show();
    werkzeug("#bild6").hide();
    werkzeug("#bild7").hide();
    werkzeug("#bild8").hide();
    werkzeug("#bild9").hide();
    werkzeug("#bild10").hide();
    werkzeug("#bild11").hide();
    werkzeug("#bild12").hide();
    werkzeug("#bild13").hide();
    werkzeug("#bild14").hide();
    werkzeug("#bild15").hide();
    werkzeug("#bild16").hide();
    werkzeug("#Auswaahl").show();
  }
  function sechstes(){
    werkzeug("#bereich1").show();
    werkzeug("#bereich2").show();
    werkzeug("#bereich3").show();
    werkzeug("#bereich4").show();
    werkzeug("#bereich5").show();
    werkzeug("#bereich6").show();
    werkzeug("#bereich7").show();
    werkzeug("#bereich8").show();
    werkzeug("#bild1").hide();
    werkzeug("#bild2").hide();
    werkzeug("#bild3").hide();
    werkzeug("#bild4").hide();
    werkzeug("#bild5").hide();
    werkzeug("#bild6").show();
    werkzeug("#bild7").hide();
    werkzeug("#bild8").hide();
    werkzeug("#bild9").hide();
    werkzeug("#bild10").hide();
    werkzeug("#bild11").hide();
    werkzeug("#bild12").hide();
    werkzeug("#bild13").hide();
    werkzeug("#bild14").hide();
    werkzeug("#bild15").hide();
    werkzeug("#bild16").hide();
    werkzeug("#Auswaahl").show();
  }
  function siebtes(){
    werkzeug("#bereich1").show();
    werkzeug("#bereich2").show();
    werkzeug("#bereich3").show();
    werkzeug("#bereich4").show();
    werkzeug("#bereich5").show();
    werkzeug("#bereich6").show();
    werkzeug("#bereich7").show();
    werkzeug("#bereich8").show();
    werkzeug("#bild1").hide();
    werkzeug("#bild2").hide();
    werkzeug("#bild3").hide();
    werkzeug("#bild4").hide();
    werkzeug("#bild5").hide();
    werkzeug("#bild6").hide();
    werkzeug("#bild7").show();
    werkzeug("#bild8").hide();
    werkzeug("#bild9").hide();
    werkzeug("#bild10").hide();
    werkzeug("#bild11").hide();
    werkzeug("#bild12").hide();
    werkzeug("#bild13").hide();
    werkzeug("#bild14").hide();
    werkzeug("#bild15").hide();
    werkzeug("#bild16").hide();
    werkzeug("#Auswaahl").show();
  }
  function achtes(){
    werkzeug("#bereich1").show();
    werkzeug("#bereich2").show();
    werkzeug("#bereich3").show();
    werkzeug("#bereich4").show();
    werkzeug("#bereich5").show();
    werkzeug("#bereich6").show();
    werkzeug("#bereich7").show();
    werkzeug("#bereich8").show();
    werkzeug("#bild1").hide();
    werkzeug("#bild2").hide();
    werkzeug("#bild3").hide();
    werkzeug("#bild4").hide();
    werkzeug("#bild5").hide();
    werkzeug("#bild6").hide();
    werkzeug("#bild7").hide();
    werkzeug("#bild8").show();
    werkzeug("#bild9").hide();
    werkzeug("#bild10").hide();
    werkzeug("#bild11").hide();
    werkzeug("#bild12").hide();
    werkzeug("#bild13").hide();
    werkzeug("#bild14").hide();
    werkzeug("#bild15").hide();
    werkzeug("#bild16").hide();
    werkzeug("#Auswaahl").show();
  }
}
function werwolf(){
  werkzeug("#Abstimmunggg").hide();
  werkzeug("#Werwolf").show();
  werkzeug("#Seher").hide();
  werkzeug("#LOL").show();
  werkzeug("#bereich1").show();
  werkzeug("#bereich2").show();
  werkzeug("#bereich3").show();
  werkzeug("#bereich4").show();
  werkzeug("#bereich5").show();
  werkzeug("#bereich6").show();
  werkzeug("#bereich7").show();
  werkzeug("#bereich8").show();
  werkzeug("#bild1").hide();
  werkzeug("#bild2").hide();
  werkzeug("#bild3").hide();
  werkzeug("#bild4").hide();
  werkzeug("#bild5").hide();
  werkzeug("#bild6").hide();
  werkzeug("#bild7").hide();
  werkzeug("#bild8").hide();
  werkzeug("#bild9").show();
  werkzeug("#bild10").show();
  werkzeug("#bild11").show();
  werkzeug("#bild12").show();
  werkzeug("#bild13").show();
  werkzeug("#bild14").show();
  werkzeug("#bild15").show();
  werkzeug("#bild16").show();
  werkzeug("#Auswahl1").hide();
  werkzeug("#Auswahl2").hide();
  werkzeug("#Auswahl3").hide();
  werkzeug("#Auswahl4").hide();
  werkzeug("#Auswahl5").hide();
  werkzeug("#Auswahl6").hide();
  werkzeug("#Auswahl7").hide();
  werkzeug("#Abstimmung").hide();
  werkzeug("#Auswahl8").hide();
  werkzeug("#Auswahl9").hide();
  werkzeug("#Auswahl10").hide();
  werkzeug("#Auswahl11").hide();
  werkzeug("#Auswahl12").hide();
  werkzeug("#Auswahl13").hide();
  werkzeug("#Auswahl14").hide();
  werkzeug("#Auswahl15").hide();
  werkzeug("#Auswahl16").hide();
  werkzeug("#Peter1").click(erste);
  werkzeug("#Peter2").click(zweite);
  werkzeug("#Peter3").click(dritte);
  werkzeug("#Peter4").click(vierte);
  werkzeug("#Peter5").click(fünfte);
  werkzeug("#Peter6").click(sechste);
  werkzeug("#Peter7").click(siebte);
  werkzeug("#Peter8").click(achte);
  werkzeug("#Auswaaahl").hide();
  werkzeug("#Auswaahl").hide();
}
function erste(){
  werkzeug("#bereich1").addClass("tot")
  werkzeug("#Auswaaahl").show();
  bewohner --;
  Bürger --;
  if(Bürger == 0){
    werkzeug("#sieg1").show();
       werkzeug("#auswahlfeld").hide();
  }
  if(Werwolf == 0){
    werkzeug("#sieg2").show();
    werkzeug("#auswahlfeld").hide();
  }
werkzeug.start(Abstimmung)
}
function zweite(){
  werkzeug("#bereich2").addClass("tot")
  werkzeug("#Auswaaahl").show();
  bewohner --;
  Werwolf --;
  if(Bürger == 0){
    werkzeug("#sieg1").show();
       werkzeug("#auswahlfeld").hide();
  }
  if(Werwolf == 0){
    werkzeug("#sieg2").show();
    werkzeug("#auswahlfeld").hide();
  }
werkzeug.start(Abstimmung)
}
function dritte(){
  werkzeug("#bereich3").addClass("tot")
  werkzeug("#Auswaaahl").show();
  bewohner --;
  Bürger --;
  if(Bürger == 0){
    werkzeug("#sieg1").show();
       werkzeug("#auswahlfeld").hide();
  }
  if(Werwolf == 0){
    werkzeug("#sieg2").show();
    werkzeug("#auswahlfeld").hide();
  }
werkzeug.start(Abstimmung)
}
function vierte(){
  werkzeug("#bereich4").addClass("tot")
  werkzeug("#Auswaaahl").show();
  bewohner --;
  Bürger --;
  if(Bürger == 0){
    werkzeug("#sieg1").show();
       werkzeug("#auswahlfeld").hide();
  }
  if(Werwolf == 0){
    werkzeug("#sieg2").show();
    werkzeug("#auswahlfeld").hide();
  }
werkzeug.start(Abstimmung)
}
function fünfte(){
  werkzeug("#bereich5").addClass("tot")
  werkzeug("#Auswaaahl").show();
  bewohner --;
  Bürger --;
  if(Bürger == 0){
    werkzeug("#sieg1").show();
       werkzeug("#auswahlfeld").hide();
  }
  if(Werwolf == 0){
    werkzeug("#sieg2").show();
    werkzeug("#auswahlfeld").hide();
  }
werkzeug.start(Abstimmung)
}
function sechste(){
  werkzeug("#bereich6").addClass("tot")
  werkzeug("#Auswaaahl").show();
  bewohner --;
  Bürger --;
  if(Bürger == 0){
    werkzeug("#sieg1").show();
       werkzeug("#auswahlfeld").hide();
  }
  if(Werwolf == 0){
    werkzeug("#sieg2").show();
    werkzeug("#auswahlfeld").hide();
  }
werkzeug.start(Abstimmung)
}
function siebte(){
  werkzeug("#bereich7").addClass("tot")
  werkzeug("#Auswaaahl").show();
  bewohner --;
  Bürger --;
  if(Bürger == 0){
    werkzeug("#sieg1").show();
       werkzeug("#auswahlfeld").hide();
  }
  if(Werwolf == 0){
    werkzeug("#sieg2").show();
    werkzeug("#auswahlfeld").hide();
  }
   werkzeug.start(Abstimmung)
}
function achte(){
  werkzeug("#bereich8").addClass("tot")
  werkzeug("#Auswaaahl").show();
Bürger --;
bewohner --;
if(Bürger == 0){
  werkzeug("#sieg1").show();
     werkzeug("#auswahlfeld").hide();
}
if(Werwolf == 0){
  werkzeug("#sieg2").show();
  werkzeug("#auswahlfeld").hide();
}
  werkzeug.start(Abstimmung)
}
function Abstimmung(){
  werkzeug("#Abstimmunggg").show();
  werkzeug("#Werwolf").hide();
  werkzeug("#Seher").hide();
  werkzeug("#lol").show();
  werkzeug("#bereich1").hide();
  werkzeug("#bereich2").hide();
  werkzeug("#bereich3").hide();
  werkzeug("#bereich4").hide();
  werkzeug("#bereich5").hide();
  werkzeug("#bereich6").hide();
  werkzeug("#bereich7").hide();
  werkzeug("#bereich8").hide();
  werkzeug("#bild1").hide();
  werkzeug("#bild2").hide();
  werkzeug("#bild3").hide();
  werkzeug("#bild4").hide();
  werkzeug("#bild5").hide();
  werkzeug("#bild6").hide();
  werkzeug("#bild7").hide();
  werkzeug("#bild8").hide();
  werkzeug("#bild9").show();
  werkzeug("#bild10").show();
  werkzeug("#bild11").show();
  werkzeug("#bild12").show();
  werkzeug("#bild13").show();
  werkzeug("#bild14").show();
  werkzeug("#bild15").show();
  werkzeug("#bild16").show();
  werkzeug("#Auswahl1").hide();
  werkzeug("#Auswahl2").hide();
  werkzeug("#Auswahl3").hide();
  werkzeug("#Auswahl4").hide();
  werkzeug("#Auswahl5").hide();
  werkzeug("#Auswahl6").hide();
  werkzeug("#Auswahl7").hide();
  werkzeug("#Auswahl8").hide();
  werkzeug("#Auswahl9").hide();
  werkzeug("#Auswahl10").hide();
  werkzeug("#Auswahl11").hide();
  werkzeug("#Auswahl12").hide();
  werkzeug("#Auswahl13").hide();
  werkzeug("#Auswahl14").hide();
  werkzeug("#Auswahl15").hide();
  werkzeug("#Auswahl16").hide();
  werkzeug("#Auswaaahl").hide();
  werkzeug("#Auswaaaahl").hide();
  werkzeug("#Abstimmung").show();
  werkzeug("#As1").show();
  werkzeug("#LOL").hide();
  werkzeug("#auswahlfeld").click(Abstimmung2)
  werkzeug("#bild9").click(kakadu);
   werkzeug("#bild10").click(kakadu2);
    werkzeug("#bild11").click(kakadu3);
     werkzeug("#bild12").click(kakadu4);
      werkzeug("#bild13").click(kakadu5);
       werkzeug("#bild14").click(kakadu6);
        werkzeug("#bild15").click(kakadu7);
         werkzeug("#bild16").click(kakadu8);
  function kakadu(){
    werkzeug("#bereich1").addClass("tot")
    werkzeug("#bild1").hide()
    Bürger --;
    if(Bürger == 0){
      werkzeug("#sieg1").show();
         werkzeug("#auswahlfeld").hide();
    }
    if(Werwolf == 0){
      werkzeug("#sieg2").show();
      werkzeug("#auswahlfeld").hide();
    }
  }
  function kakadu2(){
    werkzeug("#bereich2").addClass("tot")
    werkzeug("#bild2").hide()
    Werwolf --;
    if(Bürger == 0){
      werkzeug("#sieg1").show();
         werkzeug("#auswahlfeld").hide();
    }
    if(Werwolf == 0){
      werkzeug("#sieg2").show();
      werkzeug("#auswahlfeld").hide();
    }
}
    function kakadu3(){
      werkzeug("#bereich3").addClass("tot")
    werkzeug("#bild3").hide();
  Bürger --;  if(Bürger == 0){
      werkzeug("#sieg1").show();
         werkzeug("#auswahlfeld").hide();
    }
    if(Werwolf == 0){
      werkzeug("#sieg2").show();
      werkzeug("#auswahlfeld").hide();
    }
  }
      function kakadu4(){
        werkzeug("#bereich4").addClass("tot")
        werkzeug("#bild4").hide();
        Bürger --;
        if(Bürger == 0){
          werkzeug("#sieg1").show();
             werkzeug("#auswahlfeld").hide();
        }
        if(Werwolf == 0){
          werkzeug("#sieg2").show();
          werkzeug("#auswahlfeld").hide();
        }
      }
        function kakadu5(){
          werkzeug("#bereich5").addClass("tot")
          werkzeug("#bild5").hide();
          Bürger --;
          if(Bürger == 0){
            werkzeug("#sieg1").show();
               werkzeug("#auswahlfeld").hide();
          }
          if(Werwolf == 0){
            werkzeug("#sieg2").show();
            werkzeug("#auswahlfeld").hide();
          }
      }
          function kakadu6(){
            werkzeug("#bereich6").addClass("tot")
            werkzeug("#bild6").hide();
            Bürger --;
            if(Bürger == 0){
              werkzeug("#sieg1").show();
                 werkzeug("#auswahlfeld").hide();
            }
            if(Werwolf == 0){
              werkzeug("#sieg2").show();
              werkzeug("#auswahlfeld").hide();
            }
      }
            function kakadu7(){
              werkzeug("#bereich7").addClass("tot")
              werkzeug("#bild7").hide();
              Bürger --;
              if(Bürger == 0){
                werkzeug("#sieg1").show();
                   werkzeug("#auswahlfeld").hide();
              }
              if(Werwolf == 0){
                werkzeug("#sieg2").show();
                werkzeug("#auswahlfeld").hide();
              }
      }
              function kakadu8(){
                werkzeug("#bereich8").addClass("tot")
                werkzeug("#bild8").hide();
                Bürger --;
                if(Bürger == 0){
                  werkzeug("#sieg1").show();
                     werkzeug("#auswahlfeld").hide();
                }
                if(Werwolf == 0){
                  werkzeug("#sieg2").show();
                  werkzeug("#auswahlfeld").hide();
                }
                console.log(Bürger)
      }
    }
function Abstimmung2(event){
  var as1 = werkzeug("#Abstimmung1");
  var as2 = werkzeug("#Abstimmung2");
  var wal = werkzeug("#wal")
  var selected_button = werkzeug(event.target)
  if(selected_button.is(as1)){
 a ++}
if(selected_button.is(as2)){
 b ++}
 if (a > 1/2*bewohner){
   werkzeug("#b1").show();
   werkzeug("#wal").show();
   werkzeug("#bereich1").show();
   werkzeug("#bereich2").show();
   werkzeug("#bereich3").show();
   werkzeug("#bereich4").show();
   werkzeug("#bereich5").show();
   werkzeug("#bereich6").show();
   werkzeug("#bereich7").show();
   werkzeug("#bereich8").show();
   werkzeug("#Abstimmung").hide();
 }
 if (b > 1/2*bewohner){
   werkzeug("#b2").show();
   werkzeug("#wal").show();
   werkzeug("#bereich1").show();
   werkzeug("#bereich2").show();
   werkzeug("#bereich3").show();
   werkzeug("#bereich4").show();
   werkzeug("#bereich5").show();
   werkzeug("#bereich6").show();
   werkzeug("#bereich7").show();
   werkzeug("#bereich8").show();
   werkzeug("#Abstimmung").hide();
 }
 if(selected_button.is(wal)){
   werkzeug("#bild9").show();
   werkzeug("#bild10").show();
   werkzeug("#bild11").show();
   werkzeug("#bild12").show();
   werkzeug("#bild13").show();
   werkzeug("#bild14").show();
   werkzeug("#bild15").show();
   werkzeug("#bild16").show();
 }
 }
 console.log(Bürger);
 console.log(Werwolf)
werkzeug.start(programm);
