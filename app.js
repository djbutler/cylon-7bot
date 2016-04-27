'use strict';

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

var Cylon = require('cylon');

Cylon.robot({
  name: '7bot',

  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/cu.usbmodemfd121' }
  },

  devices: {
    joint0: { driver: 'servo', pin: 2 },
    joint1: { driver: 'servo', pin: 3 },
    joint2: { driver: 'servo', pin: 4 },
    joint3: { driver: 'servo', pin: 5 },
    joint4: { driver: 'servo', pin: 6 },
    joint5: { driver: 'servo', pin: 7 },
  },

  work: function() {
    // interact with robot via socket API from the browser
  }
});

Cylon.api('socketio',
{
  host: '0.0.0.0',
  port: '3000'
});

Cylon.start();
