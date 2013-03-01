// Copyright (c) 2013 Vijay Ganduri. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

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

function show() {
  var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
  var hour = time[1] % 12 || 12;               // The prettyprinted hour.
  var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
  var notification = window.webkitNotifications.createNotification(
    '48.png',                      // The image.
    hour + time[2] + ' ' + period, // The title.
    'Time to make the toast.'      // The body.
  );
  notification.show();
}

window.onload = function() {
  console.log("function onload");
  document.getElementById('searchIdButton').onclick = findID;

};
