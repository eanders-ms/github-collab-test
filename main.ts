function start_Richards_code () {
    direction = 1
    x = 0
    y = 0
    while (true) {
        if (on) {
            led.unplot(x, y)
        } else {
            led.plot(x, y)
        }
        if (x == 2 && y == 2) {
            direction = 1
            x = 0
            y = 0
            on = !(on)
            continue;
        }
        if (direction == 0) {
            y += -1
        } else if (direction == 1) {
            x += 1
        } else if (direction == 2) {
            y += 1
        } else {
            x += -1
        }
        if (should_spiral_turn(x, y)) {
            if (direction == 0) {
                y += 1
            } else if (direction == 1) {
                x += -1
            } else if (direction == 2) {
                y += -1
            } else {
                x += 1
            }
            direction = (direction + 1) % 4
            if (direction == 0) {
                y += -1
            } else if (direction == 1) {
                x += 1
            } else if (direction == 2) {
                y += 1
            } else {
                x += -1
            }
        }
        basic.pause(20)
    }
}
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
let direction = 0
basic.showString("Hello!")
start_Richards_code()
basic.forever(function () {
	
})
