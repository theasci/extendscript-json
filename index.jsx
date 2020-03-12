var Global = Global || {};
Global.extenscriptJsonRootPath = new File($.fileName).parent;
Global.rootPath = Global.rootPath || Global.extenscriptJsonRootPath;

//Load libraries
$.evalFile(Global.extenscriptJsonRootPath + '/lib/json2.js');
