// Desctop icons
new Main.Icon({ name: 'Другое',img: 'folder', entry: '#app', ID: 'another-files' });
new Main.Icon({ name: 'Мои документы',img: 'folder', entry: '#app', ID: 'my-files' });
new Main.Icon({ name: 'Много файлов',img: 'folder', entry: '#app', ID: 'many-files' });

// Windows
var another = new Main.Win({
	action: '#another-files',
	ID: 'another'
});
var myFiles = new Main.Win({
	action: '#my-files',
	ID: 'myFiles'
});
var manyFiles = new Main.Win({
	action: '#many-files',
	ID: 'manyFiles'
});

// Data for windows
new Main.Icon({ name: 'Текстовый файл 1', img: 'text-file', entry: '#another' }),
new Main.Icon({ name: 'Текстовый файл 2', img: 'text-file', entry: '#another' }),
new Main.Icon({ name: 'Текстовый файл 3', img: 'text-file', entry: '#another' }),
new Main.Icon({ name: 'Текстовый файл 4', img: 'text-file', entry: '#another' })
new Main.Icon({ name: 'Текстовый файл 1', img: 'text-file', entry: '#myFiles' }),
new Main.Icon({ name: 'Текстовый файл 2', img: 'text-file', entry: '#myFiles' }),
new Main.Icon({ name: 'Текстовый файл 3', img: 'text-file', entry: '#myFiles' }),
new Main.Icon({ name: 'Текстовый файл 4', img: 'text-file', entry: '#myFiles' }),
new Main.Icon({ name: 'Видео-файл 1', img: 'movie', entry: '#myFiles' }),
new Main.Icon({ name: 'Видео-файл 2', img: 'movie', entry: '#myFiles' }),
new Main.Icon({ name: 'Видео-файл 3', img: 'movie', entry: '#myFiles' }),
new Main.Icon({ name: 'Видео-файл 4', img: 'movie', entry: '#myFiles' })

new Main.Icon({ name: 'Текстовый файл 1', img: 'text-file', entry: '#manyFiles' }),
new Main.Icon({ name: 'Текстовый файл 2', img: 'text-file', entry: '#manyFiles' }),
new Main.Icon({ name: 'Текстовый файл 3', img: 'text-file', entry: '#manyFiles' }),
new Main.Icon({ name: 'Текстовый файл 4', img: 'text-file', entry: '#manyFiles' }),
new Main.Icon({ name: 'Текстовый файл 5', img: 'text-file', entry: '#manyFiles' }),
new Main.Icon({ name: 'Текстовый файл 6', img: 'text-file', entry: '#manyFiles' }),
new Main.Icon({ name: 'Видео-файл 1', img: 'movie', entry: '#manyFiles' }),
new Main.Icon({ name: 'Видео-файл 2', img: 'movie', entry: '#manyFiles' }),
new Main.Icon({ name: 'Видео-файл 3', img: 'movie', entry: '#manyFiles' }),
new Main.Icon({ name: 'Видео-файл 4', img: 'movie', entry: '#manyFiles' }),
new Main.Icon({ name: 'Видео-файл 5', img: 'movie', entry: '#manyFiles' }),
new Main.Icon({ name: 'Видео-файл 6', img: 'movie', entry: '#manyFiles' })



closeAllWindows('.window-header__close');