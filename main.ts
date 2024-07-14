namespace SpriteKind {
    export const Cursor = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.y == 65) {
        mySprite.y += -25
    } else if (mySprite.y == 40) {
    	
    }
})
function Menu_Main () {
    scene.setBackgroundImage(assets.image`Menu`)
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    mySprite = sprites.create(assets.image`myImage`, SpriteKind.Cursor)
    mySprite.setPosition(30, 40)
}
function Play () {
    characterAnimations.runFrames(
    mySprite,
    assets.animation`myAnim`,
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
    pause(600)
    game.setGameOverMessage(true, "Not Done Yet.")
    game.gameOver(true)
}
function Music () {
    characterAnimations.runFrames(
    mySprite,
    assets.animation`myAnim`,
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
    pause(600)
    scene.setBackgroundImage(assets.image`myImage0`)
    textSprite = textsprite.create("Song " + Music_Counter, 1, 15)
    Music_Counter_Max = 8
    textSprite.setPosition(75, 60)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (In_Music > 0) {
        music.stopAllSounds()
        In_Music = 0
        Menu_Main()
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (In_Music > 0) {
        sprites.destroy(textSprite)
        Music_Counter += 1
        textSprite = textsprite.create("Song " + Music_Counter, 1, 15)
        textSprite.setPosition(75, 60)
        if (Music_Counter_Max < Music_Counter) {
            sprites.destroy(textSprite)
            Music_Counter = 1
            textSprite = textsprite.create("Song " + Music_Counter, 1, 15)
            textSprite.setPosition(75, 60)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log(In_Music)
    if (mySprite.y == 40) {
        Play()
    } else if (mySprite.y == 65) {
        In_Music = 1
        Music()
    }
    if (In_Music > 0) {
        Play_Music()
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.y == 40) {
        mySprite.y += 25
    } else if (mySprite.y == 65) {
    	
    }
})
function Play_Music () {
    if (Music_Counter == 1) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`Song`), music.PlaybackMode.InBackground)
    } else if (Music_Counter == 2) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`Theme`), music.PlaybackMode.InBackground)
    } else if (Music_Counter == 3) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`Title Intro`), music.PlaybackMode.InBackground)
    } else if (Music_Counter == 4) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`Title`), music.PlaybackMode.InBackground)
    } else if (Music_Counter == 5) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.InBackground)
    } else if (Music_Counter == 6) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`mySong1`), music.PlaybackMode.InBackground)
    } else if (Music_Counter == 7) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`mySong0`), music.PlaybackMode.InBackground)
    } else if (Music_Counter == 8) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`mySong3`), music.PlaybackMode.InBackground)
    }
}
let Music_Counter_Max = 0
let textSprite: TextSprite = null
let mySprite: Sprite = null
let Music_Counter = 0
let In_Music = 0
In_Music = 0
Music_Counter = 1
scene.setBackgroundImage(assets.image`Menu`)
game.setDialogTextColor(10)
game.showLongText("Welcome to the unused gallery!", DialogLayout.Bottom)
game.showLongText("Select 'Play' to play the engine.", DialogLayout.Bottom)
game.showLongText("Select 'Music' to hear unused music.", DialogLayout.Bottom)
game.showLongText("Have fun! :)", DialogLayout.Bottom)
Menu_Main()
