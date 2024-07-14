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
    music.stopAllSounds()
    music.play(music.createSong(assets.song`mySong2`), music.PlaybackMode.LoopingInBackground)
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
    sprites.destroy(mySprite)
    scene.setBackgroundColor(8)
    scene.setBackgroundImage(assets.image`Background`)
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
    tiles.setCurrentTilemap(tilemap`level5`)
    music.play(music.createSong(assets.song`Marchin Into Town`), music.PlaybackMode.LoopingInBackground)
}
function Music () {
    characterAnimations.runFrames(
    mySprite,
    assets.animation`myAnim`,
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
    pause(600)
    sprites.destroy(mySprite)
    scene.setBackgroundImage(assets.image`myImage0`)
    textSprite = textsprite.create("Song " + Music_Counter, 13, 15)
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.stopAllSounds()
    console.log(In_Music)
    if (mySprite.y == 40) {
        Playing = 1
        Play()
    } else if (mySprite.y == 65) {
        In_Music = 1
        Music()
    }
    if (In_Music > 0) {
        Play_Music()
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
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.y == 40) {
        mySprite.y += 25
    } else if (mySprite.y == 65) {
    	
    }
})
function Play_Music () {
    if (Music_Counter == 1) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`Song`), music.PlaybackMode.LoopingInBackground)
    } else if (Music_Counter == 2) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`Theme`), music.PlaybackMode.LoopingInBackground)
    } else if (Music_Counter == 3) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`Title Intro`), music.PlaybackMode.LoopingInBackground)
    } else if (Music_Counter == 4) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`Title`), music.PlaybackMode.LoopingInBackground)
    } else if (Music_Counter == 5) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.LoopingInBackground)
    } else if (Music_Counter == 6) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`mySong1`), music.PlaybackMode.LoopingInBackground)
    } else if (Music_Counter == 7) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`mySong0`), music.PlaybackMode.LoopingInBackground)
    } else if (Music_Counter == 8) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`mySong3`), music.PlaybackMode.LoopingInBackground)
    }
}
let Playing = 0
let Music_Counter_Max = 0
let textSprite: TextSprite = null
let Facing_R = false
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
