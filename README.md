```
$ npm install
$ npm start
```

#### Using .print() (normal memory usage)

1. Click `print()` button, wait for print dialog to load,
1. On OSX, change dropdown in bottom left of print dialog to "Save as PDF".
1. Choose output path. Observe memory usage remain normal during print. (Takes ~40 seconds)


#### Using .printToPDF() (excessive memory usage)

1. Click `printToPDF()` button, observe memory usage exceed 4gb.
