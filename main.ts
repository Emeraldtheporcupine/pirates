controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Facing_R == true) {
        Facing_R = true
        Facing_L = false
        animation.runImageAnimation(
        mySprite,
        assets.animation`Pirate Walk`,
        200,
        true
        )
    } else if (Facing_L == true) {
        Facing_L = true
        Facing_R = false
        animation.runImageAnimation(
        mySprite,
        assets.animation`Pirate Walk0`,
        200,
        true
        )
    }
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (Facing_R == true) {
        Facing_R = true
        Facing_L = false
        animation.runImageAnimation(
        mySprite,
        assets.animation`Pirate Stand`,
        200,
        true
        )
    } else if (Facing_L == true) {
        Facing_L = true
        Facing_R = false
        animation.runImageAnimation(
        mySprite,
        assets.animation`Pirate Stand L`,
        200,
        true
        )
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Facing_R == true) {
        Facing_R = true
        Facing_L = false
        animation.runImageAnimation(
        mySprite,
        assets.animation`Pirate Swing w Sword`,
        100,
        false
        )
        music.play(music.createSoundEffect(WaveShape.Noise, 5000, 5000, 255, 0, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    } else if (Facing_L == true) {
        Facing_L = true
        Facing_R = false
        animation.runImageAnimation(
        mySprite,
        assets.animation`Pirate Swing w Sword0`,
        100,
        false
        )
        music.play(music.createSoundEffect(WaveShape.Noise, 5000, 5000, 255, 0, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    Facing_L = true
    Facing_R = false
    animation.runImageAnimation(
    mySprite,
    assets.animation`Pirate Stand L`,
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    Facing_R = true
    Facing_L = false
    animation.runImageAnimation(
    mySprite,
    assets.animation`Pirate Stand`,
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Facing_R = true
    Facing_L = false
    animation.runImageAnimation(
    mySprite,
    assets.animation`Pirate Walk`,
    200,
    true
    )
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Pirate Stand`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Facing_L = true
    Facing_R = false
    animation.runImageAnimation(
    mySprite,
    assets.animation`Pirate Walk0`,
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Facing_R == true) {
        Facing_R = true
        Facing_L = false
        animation.runImageAnimation(
        mySprite,
        assets.animation`Pirate Walk`,
        200,
        true
        )
    } else if (Facing_L == true) {
        Facing_L = true
        Facing_R = false
        animation.runImageAnimation(
        mySprite,
        assets.animation`Pirate Walk0`,
        200,
        true
        )
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Pirate Parry`,
    100,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (Facing_R == true) {
        Facing_R = true
        Facing_L = false
        animation.runImageAnimation(
        mySprite,
        assets.animation`Pirate Stand`,
        200,
        true
        )
    } else if (Facing_L == true) {
        Facing_L = true
        Facing_R = false
        animation.runImageAnimation(
        mySprite,
        assets.animation`Pirate Stand L`,
        200,
        true
        )
    }
})
let mySprite: Sprite = null
let Facing_L = false
let Facing_R = false
game.setDialogTextColor(10)
game.showLongText("Welcome to the unused gallery!", DialogLayout.Bottom)
game.showLongText("Select 'Play' to play the engine.", DialogLayout.Bottom)
game.showLongText("Select 'Music' to hear unused music.", DialogLayout.Bottom)
game.showLongText("Have fun! :)", DialogLayout.Bottom)
