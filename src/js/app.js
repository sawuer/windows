// Init desctop icons
for (var i = 0; i < desctopIconsAndFolders.length; i++) {
	new Main.Icon(desctopIconsAndFolders[i]);	
}

// Init windows
for (var i = 0; i < windows.length; i++) {
	new Main.Win(windows[i]);
}

// Init icons in windows
for (var i = 0; i < anotherFolder.length; i++) {
	new Main.Icon(anotherFolder[i]);
}
for (var i = 0; i < myFilesFolder.length; i++) {
	new Main.Icon(myFilesFolder[i]);
}
for (var i = 0; i < manyFilesFolder.length; i++) {
	new Main.Icon(manyFilesFolder[i]);
}

closeAllWindows('.window-header__close');