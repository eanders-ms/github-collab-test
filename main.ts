function start_Richards_code () {
    dir = 1
    x = 0
    y = 0
    while (true) {
        if (on) {
            led.unplot(x, y)
        } else {
            led.plot(x, y)
        }
        if (x == 2 && y == 2) {
            dir = 1
            x = 0
            y = 0
            on = !(on)
            continue;
        }
        if (dir == 0) {
            y += -1
        } else if (dir == 1) {
            x += 1
        } else if (dir == 2) {
            y += 1
        } else {
            x += -1
        }
        if (should_spiral_turn(x, y)) {
            if (dir == 0) {
                y += 1
            } else if (dir == 1) {
                x += -1
            } else if (dir == 2) {
                y += -1
            } else {
                x += 1
            }
            dir = (dir + 1) % 4
            if (dir == 0) {
                y += -1
            } else if (dir == 1) {
                x += 1
            } else if (dir == 2) {
                y += 1
            } else {
                x += -1
            }
        }
        basic.pause(20)
    }
}
input.onButtonPressed(Button.A, function () {
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
function start_Erics_code () {
    while (thisworks) {
        basic.pause(20)
    }
}
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
})
function should_spiral_turn (x: number, y: number) {
    if (x < 0 || y < 0 || (x > 4 || y > 4)) {
        return true
    } else if (led.point(x, y) != on) {
        return true
    }
    return false
}
let on = false
let y = 0
let x = 0
let dir = 0
let thisworks = false
music.setVolume(10)
thisworks = true
basic.showString("Hello")
basic.forever(function () {
    datalogger.log(datalogger.createCV("useful-data", input.soundLevel()))
})
control.inBackground(function () {
    // Richard don't block the main thread or events / forever won't run >:( >:( >:(
    start_Richards_code()
    start_Erics_code()
})
