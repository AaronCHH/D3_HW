alert("Hello, JS 3!")

function showMsg(){
  alert("好好玩");
}

function showMsg2(msg){
  alert(msg + "好好玩");
}

function showMsg3(msg1, msg2){
  alert(msg1 + msg2);
}

function showMsg4(msg1, msg2){
  var msgAll = msg1 + msg2;
  return msgAll;
//  alert(msg1 + msg2);
}