radio.setGroup(100)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        radio.sendNumber(1)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        radio.sendNumber(2)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        radio.sendNumber(3)
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        radio.sendNumber(4)
    }
    if (input.isGesture(Gesture.ScreenDown)) {
        radio.sendNumber(5)
    }
})
