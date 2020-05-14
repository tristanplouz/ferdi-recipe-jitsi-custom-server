"use strict";


var path = require("path");
const {remote} = require('electron');
const webContents = remote.getCurrentWebContents();
const {session} = webContents;

module.exports = Franz => {
	session.setPermissionCheckHandler((webContents, permission) => {
		console.log(permission);
		if(permission=='media'){
			return true;
		}
		return false;	
	});
	session.setPermissionRequestHandler((webContents, permission, callback) => {
		console.log(permission);
		if(permission=='media'){
			callback(true);
		}
		callback(false);
	})
	if(document.location.href.match(/close/)
	||document.location.href.endsWith("/")){
		document.location=path.join("file://",__dirname, './main.html');
	}
	//alert(path.join(__dirname, './main.html'));
	//

    
}
