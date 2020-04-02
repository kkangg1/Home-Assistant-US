$(document).ready(function()
{
  $("h1.title2").each(function()
  {
    if ($(this).is(":empty"))
    {
      $(this).closest("div").children("h1.title").css("line-height","35px");
    }
  });
});
function time()
{
  var now= new Date();
  var year=now.getFullYear();
  var month=now.getMonth();
  var date=now.getDate();
  var hours = now.getHours();
	var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  if(hours<10){
    hours = "0" + hours;
  }
  if(minutes<10){
    minutes = "0" + minutes;
  }
  if(seconds<10){
    seconds = "0" + seconds;
  }
  var txt_weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
 document.getElementById("info1").innerHTML=year+"年"+(month+1)+"月"+date+"日" + txt_weekdays[now.getDay()];
 document.getElementById("info2").innerHTML=hours+":"+minutes+":"+seconds; 
} 
setInterval(time,1000)
setInterval(color_scheme,1000)
window.onload = time;
window.onload = color_scheme;
var day = true;
var night = false;
function color_scheme(){
  if(get_state("sun.sun").state == "below_horizon"){
    night =true;
    console.log("a")
  }else{
    night =false;
    console.log("b")
  }
  if(day && night){
  document.documentElement.setAttribute('data-theme', 'dark');
  day =false
  console.log("c")
}else if(!day && !night){
  document.documentElement.setAttribute('data-theme', 'light');
  day = true;
  console.log("d")
}
}
const day_skin = 'light';
const night_skin = 'dark';
const skin_list = 'input_select.skin_list';
//  - "function searchParam(key){"
//  - "  key = encodeURI(key);  var kvp = document.location.search.substr(1).split('&');  var i=kvp.length;  var x;"
//  - "  while(i--){"
//  - "      x = kvp[i].split('=');"
//  - "      if (x[0]==key){"
//  - "          return x[1];break;"
//  - "      }"
//  - "  }"
//  - "  return '';"
//  - "}"
function get_state(entity){
  var request = new XMLHttpRequest(); request.open('GET', document.location.origin + '/api/appdaemon/state/default/' + entity, false);var ret;
  request.onload = function () {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400){
      // console.log(data);console.log(data.state);"
      ret = data.state;
    } else { console.log('Ge_state for ' + entity + 'error'); }
  }
  request.send();
  return ret;
}
//  - "function insertParam(key, value){"
//  - "  key = encodeURI(key); value = encodeURI(value); var kvp = document.location.search.substr(1).split('&'); var i=kvp.length; var x;"
//  - "  while(i--) {"
//  - "    x = kvp[i].split('=');"
//  - "    if (x[0]==key) {"
//  - "      x[1] = value; kvp[i] = x.join('='); break;"
//  - "    }"
//  - "  }"
//  - "  if(i<0) {"
//  - "    kvp[kvp.length] = [key,value].join('=');"
//  - "  } "
//  - "  document.location.search = kvp.join('&'); "
//  - "}"

//  - "function verify_skin(){"
//  - "  var skin_selected= get_state(skin_list);"
//  - "  if (skin_selected =='AUTO'){"
//  - "    var skin_actual= searchParam('skin');var sun= get_state('sun.sun');"
//  - "    if ((sun == 'above_horizon') && (skin_actual != day_skin)){"
//  - "      insertParam('skin',day_skin);"
//  - "    } else if ((sun == 'below_horizon') && (skin_actual != night_skin)){"
//  - "      insertParam('skin',night_skin);"
//  - "    }"
//  - "  }"
//  - "  setTimeout(verify_skin,600000);//10minutes"
//  - "}"
//  - "verify_skin();"
