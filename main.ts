namespace SpriteKind {
    export const Cursor = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.y == 65) {
        mySprite.y += -25
    } else if (mySprite.y == 40) {
    	
    }
})
function Play () {
    game.gameOver(true)
}
function Music () {
    game.gameOver(true)
}
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.y == 40) {
        Play()
    } else if (mySprite.y == 65) {
        Music()
    }
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
    if (mySprite.y == 40) {
        mySprite.y += 25
    } else if (mySprite.y == 65) {
    	
    }
})
let Facing_R = false
let Facing_L = false
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Menu`)
game.setDialogTextColor(10)
game.showLongText("Welcome to the unused gallery!", DialogLayout.Bottom)
game.showLongText("Select 'Play' to play the engine.", DialogLayout.Bottom)
game.showLongText("Select 'Music' to hear unused music.", DialogLayout.Bottom)
game.showLongText("Have fun! :)", DialogLayout.Bottom)
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Cursor)
mySprite.setPosition(30, 40)
