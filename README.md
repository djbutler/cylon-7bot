# Cylon 7bot

## Dependencies

### Part I: Installing firmware on your 7bot

1. Download the [Arduino IDE](https://www.arduino.cc/en/Main/Software) version 1.6 or greater.
2. Install support for the Arduino Due by opening `Tools -> Board -> Boards Manager` and selecting the Due.
3. Connect the 7bot to your computer via the USB cable.
4. Select the Due board from the menu `Tools -> Board`.
5. Install the firmware by opening `File -> Examples -> Firmata -> StandardFirmata`, and pressing the `Upload` button.

Next, clone this repository to your computer by running the following command in the terminal:

```bash
git clone https://github.com/djbutler/cylon-7bot.git
```

Then install node.js dependencies:

```bash
cd cylon-7bot
npm install
```

NOTE: You may have to change the serial port name, which is currently hard-coded in `app.js`. To find out the name of your serial port, one useful tool is [Gort](http://gort.io/). Once you've installed Gort, you can run `gort scan serial` to get a list of your serial connections. Try a few until you find the right one!

## Usage

For a super simple demo, run:

```node app.js```

The arm base should rotate back and forth between 45 and 135 degrees.

