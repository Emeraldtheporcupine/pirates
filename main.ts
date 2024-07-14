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
    characterAnimations.runFrames(
    mySprite,
    assets.animation`myAnim`,
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
    pause(600)
    textSprite = textsprite.create("")
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.y == 40) {
        Play()
    } else if (mySprite.y == 65) {
        Music()
    }
})
function Music () {
    characterAnimations.runFrames(
    mySprite,
    assets.animation`myAnim`,
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
    pause(600)
    game.gameOver(true)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.y == 40) {
        mySprite.y += 25
    } else if (mySprite.y == 65) {
    	
    }
})
let textSprite: TextSprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Menu`)
game.setDialogTextColor(10)
game.showLongText("Welcome to the unused gallery!", DialogLayout.Bottom)
game.showLongText("Select 'Play' to play the engine.", DialogLayout.Bottom)
game.showLongText("Select 'Music' to hear unused music.", DialogLayout.Bottom)
game.showLongText("Have fun! :)", DialogLayout.Bottom)
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Cursor)
mySprite.setPosition(30, 40)
