function programm(){
  var links = werkzeug("#links a");
  werkzeug.shuffle(links)
  var div = werkzeug("#links");
  div.html("");
  links.appendTo(div);

}
werkzeug.start(programm);
