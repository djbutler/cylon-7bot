/*

Below is some information about which pins control which servos (aka joints).

Note that the Arduino board is a Due, 

Courtesy of anykeynl (http://forum.7bot.cc/read.php?1,6,6#msg-6).

Axis 1; Readout = A0 ; ServoControl D2 
Axis 2; Readout = A1 ; ServoControl D3 
Axis 3; Readout = A2 ; ServoControl D4 
Axis 4; Readout = A3 ; ServoControl D5 
Axis 5; Readout = A4 ; ServoControl D6 
Axis 6; Readout = A5 ; ServoControl D7 
Axis 7; Readout = A6 ; ServoControl D8 

Pomp Valve; Control D10 ; Low means open (suction); High closed (no suction) 
Pomp motor; Control D11 ; High is on; Low is off 
Beep; Control D12 ; High is very irritating noise, Low is peace 

Left Button; Readout D71 
Right Button; Readout D70 

*/

var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

var Cylon = require('cylon');

Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: config.port }
  },

  devices: {
    // pin D2 is the base servo
    servo: { driver: 'servo', pin: 7 }
  },

  work: function(my) {
    var angle = 0;
    var increasing = true;
    every(10, function() {
        if (angle > 135) {
            increasing = false;
        }
        if (angle < 45) {
            increasing = true;
        }
        if (increasing) {
            angle += 1;
        } else {
            angle -= 1;
        }
        my.servo.angle(angle);
    }); 
  }
}).start();

