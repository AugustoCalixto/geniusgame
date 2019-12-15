var express = require('express');
var app = express();
var path = require('path');

var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(4, 'out'); //use GPIO pin 4 as output
var pushButton = new Gpio(17, 'in', 'both'); //use GPIO pin 17 as input, and 'both' button presses, and releases should be handled

pushButton.watch(function (err, value) { //Watch for hardware interrupts on pushButton GPIO, specify callback function
  if (err) { //if an error
    console.error('There was an error', err); //output error message to console
  return;
  }
  LED.writeSync(value); //turn LED on or off depending on the button state (0 or 1)
});

function unexportOnClose() { //function to run when exiting program
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport LED GPIO to free resources
  pushButton.unexport(); // Unexport Button GPIO to free resources
};

process.on('SIGINT', unexportOnClose); //function to run when user closes using ctrl+c







app.get('/', function(req, res) {
    app.use(express.static('C:/Users/gutod/Documents/GitHub/genius/simon-game-master'));
    res.sendFile(path.join('C:/Users/gutod/Documents/GitHub/genius/simon-game-master/index.html'));
});

app.listen(8080, '192.168.0.125');