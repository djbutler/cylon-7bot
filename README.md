# Cylon 7bot

## Dependencies

First install "Standard Firmata" on your 7bot. This can be done by downloading the [Arduino IDE](https://www.arduino.cc/en/Main/Software) version 1.6 or greater, opening `File -> Examples -> Firmata -> StandardFirmata`, and pressing the `Upload` button.

Next, clone this repository to your computer by running the following command in the terminal:

```bash
git clone https://github.com/djbutler/cylon-7bot.git
```

Then install node.js dependencies:

```bash
cd cylon-7bot
npm install
```

You may have to change the serial port name, which is currently hard-coded in `app.js`. To find out the name of your serial port, one useful tool is [Gort](http://gort.io/). Once you've installed Gort, you can run `gort scan serial` to get a list of your serial connections. Try a few until you find the right one!

## Usage

For a super simple demo, run:

```node app.js```

The arm base should rotate back and forth between 45 and 135 degrees.

