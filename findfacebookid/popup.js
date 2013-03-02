// Copyright (c) 2013 Vijay Ganduri. All rights reserved.

function findID(){
	var x = document.getElementById("fbUserNameInput").value;
	if(x=="" || x==null){
		alert("Please enter any facebook username or page name !!");
		return;
    }
//	}else{
//		document.getElementById("facebookIDDisplayArea").innerHTML=x;

  $.getJSON("https://graph.facebook.com/"+x, function(data) {    
	document.getElementById("fbId").innerHTML=data.id;
	document.getElementById("fbUserName").innerHTML=data.username;
	document.getElementById("fbProfileName").innerHTML=data.name;
	document.getElementById("fbpic").innerHTML="<img src=http://graph.facebook.com/"+data.id+"/picture?width=100&height=100></img>";
  });

}

window.onload = function() {
  console.log("function onload");
  document.getElementById('searchIdButton').onclick = findID;

};
