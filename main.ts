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
    } else if (Facing_L == true) {
        Facing_L = true
        Facing_R = false
        animation.runImageAnimation(
        mySprite,
        assets.animation`Pirate Swing w Sword0`,
        100,
        false
        )
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
let Facing_L = false
let mySprite: Sprite = null
let Facing_R = false
Facing_R = true
tiles.setCurrentTilemap(tilemap`level`)
mySprite = sprites.create(assets.image`Pirate`, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
assets.animation`Pirate Stand`,
200,
true
)
controller.moveSprite(mySprite, 50, 50)
music.play(music.createSong(assets.song`mySong0`), music.PlaybackMode.LoopingInBackground)
