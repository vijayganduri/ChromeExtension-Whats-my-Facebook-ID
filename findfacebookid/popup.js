// Copyright (c) 2013 Vijay Ganduri. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function findID(){
	chrome.browserAction.setBadgeBackgroundColor({color:[0, 200, 0, 100]});
	var x = document.getElementById("fbUserName").value;
	if(x=="" || x==null){
		alert("Please enter any facebook username or page name !!");
	}else{
		document.getElementById("facebookIDDisplayArea").innerHTML="345136789";
	}
}


