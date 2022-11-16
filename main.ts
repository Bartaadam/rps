let elem = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # # # .
        . . . # .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # # . .
        . . . # .
        . . . # .
        . . # . .
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . # # . .
        # . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(200)
    elem = randint(1, 3)
    if (elem == 1) {
        basic.showLeds(`
            . . # # .
            . # # # .
            . # # # #
            # # # # #
            # # # # #
            `)
    }
    if (elem == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (elem == 3) {
        basic.showLeds(`
            # # . # #
            # # # # #
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
