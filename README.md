## Cylon 7bot

### Installation 

#### Part I: Installing firmware on your 7bot

1. Download the [Arduino IDE](https://www.arduino.cc/en/Main/Software) version 1.6 or greater.
2. Install support for the Arduino Due by opening `Tools -> Board -> Boards Manager` and installing `Arduino SAM Boards`.
3. Connect the 7bot to your computer via the USB cable.
4. Select the Due board from the menu `Tools -> Board -> Arduino Due (Programming Port)`.
5. Install the firmware by opening `File -> Examples -> Firmata -> StandardFirmata`, and pressing the `Upload` button.

#### Part II: Installing Cylon 7bot on your computer

1. Install [Node.js](https://nodejs.org/en/download/).
2. Clone this repository to your computer and install its dependencies by running the following command in the terminal:

    ```bash
    git clone https://github.com/djbutler/cylon-7bot.git
    cd cylon-7bot
    npm install
    ```

### Usage

For a super simple demo, run:

```node app.js```

The arm base should rotate back and forth between 45 and 135 degrees.

NOTE: You may have to change the serial port name, which is currently hard-coded in `app.js`. To find out the name of your serial port, one useful tool is [Gort](http://gort.io/). Once you've installed Gort, you can run `gort scan serial` to get a list of your serial connections. Try a few until you find the right one!
