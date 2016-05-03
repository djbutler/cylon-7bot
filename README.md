## Cylon 7bot

Cylon 7bot is a GUI and Javascript interface for controlling the 7bot robot arm. It's completely unofficial, so use at your own risk.

Discussion, videos, ideas, etc. can be posted to the [7bot-users](https://groups.google.com/forum/#!forum/7bot-users) Google Group.

[![Screenshot](https://raw.githubusercontent.com/djbutler/cylon-7bot/master/images/playback-screenshot.png "The playback interface in action")](https://youtu.be/V05zRz-Z_Lk)
[![Screenshot](https://raw.githubusercontent.com/djbutler/cylon-7bot/master/images/sliders-screenshot.png "The slider interface in action")](https://youtu.be/TGK0B03KznM)

### Installation 

#### Part I: Installing firmware on your 7bot

1. Download the [Arduino IDE](https://www.arduino.cc/en/Main/Software) version 1.6 or greater.
2. Install support for the Arduino Due by opening `Tools -> Board -> Boards Manager` and installing `Arduino SAM Boards`.
3. Connect the 7bot to your computer via the USB cable.
4. Select the Arduino Due board by clicking `Tools -> Board -> Arduino Due (Programming Port)`.
5. Install the firmware by opening `File -> Examples -> Firmata -> StandardFirmata`, and pressing the `Upload` button.

#### Part II: Installing Cylon 7bot on your computer

1. Install [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en/download/).
2. Run the following commands in the terminal (the last line may take a while):

    ```bash
    git clone https://github.com/djbutler/cylon-7bot.git
    cd cylon-7bot
    npm install
    ```

### Usage

For a super simple demo, run:

```node simple-demo.js```

The arm base should rotate back and forth between 45 and 135 degrees.

For a slightly more interesting demo, run:

```node app.js```

and in another terminal, run:

```
cd frontend/app
python -m SimpleHTTPServer
```

Then visit [http://localhost:8000/](http://localhost:8000/) to see the app in action. You can control the angle of each joint by moving a slider.

#### Troubleshooting

You may have to change the serial port name, which is currently hard-coded in `app.js`. To find out the name of your serial port, one useful tool is [Gort](http://gort.io/). Once you've installed Gort, you can run `gort scan serial` to get a list of your serial connections. Try a few until you find the right one!

### Developers

The app is very barebones right now, and not organized in a sophisticated way.

The backend code lives in `app.js`. The frontend code lives in `frontend/app/src/x-app.html`. 

At this stage, I would be very open to reorganizing the code to make it more readable, maintainable, modular, etc. Please do make pull requests!

---

The MIT License (MIT)
Copyright (c) 2016 Daniel J Butler

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
