var Cylon = require('cylon');

Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/cu.usbmodemfd121' }
  },

  devices: {
    servo: { driver: 'servo', pin: 2 }
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

