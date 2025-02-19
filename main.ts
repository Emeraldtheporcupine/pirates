namespace SpriteKind {
    export const Cursor = SpriteKind.create()
}
function stuuuuuuuuuuuuuuuf () {
    // Swingin' ye sword!
    music.play(music.createSoundEffect(WaveShape.Noise, 5000, 5000, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    tiles.setWallAt(tiles.getTileLocation(0, 0), false)
    // Ye DIED. Too bad.
    music.play(music.createSoundEffect(WaveShape.Noise, 5000, 5000, 129, 0, 25, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    // Ye got HIT?!
    music.play(music.createSoundEffect(WaveShape.Sine, 745, 1, 217, 0, 75, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.y == 65) {
        mySprite.y += -25
    } else if (mySprite.y == 40) {
    	
    }
    if (Playing > 0) {
        Swinging_Sword = 0
        animation.runImageAnimation(
        mySprite,
        assets.animation`Walk Back`,
        200,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Swinging_Sword > 0) {
        info.changeCountdownBy(5)
        sprites.destroy(otherSprite)
    } else {
        info.changeCountdownBy(-5)
        sprites.destroy(otherSprite)
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
    info.startCountdown(30)
    tiles.setCurrentTilemap(tilemap`level5`)
    music.play(music.createSong(assets.song`Marchin Into Town`), music.PlaybackMode.LoopingInBackground)
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (Playing > 0) {
        Swinging_Sword = 0
        animation.runImageAnimation(
        mySprite,
        assets.animation`Pirate Stand L`,
        200,
        true
        )
    }
})
info.onCountdownEnd(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    Playing = 0
    music.stopAllSounds()
    Menu_Main()
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (Playing > 0) {
        Swinging_Sword = 0
        animation.runImageAnimation(
        mySprite,
        assets.animation`Pirate Stand`,
        200,
        true
        )
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
    sprites.destroy(mySprite)
    scene.setBackgroundImage(assets.image`myImage0`)
    textSprite = textsprite.create("Song " + Music_Counter, 13, 15)
    Music_Counter_Max = 8
    textSprite.setPosition(75, 60)
}
function Menu_Main () {
    Swinging_Sword = 0
    music.stopAllSounds()
    music.play(music.createSong(assets.song`mySong2`), music.PlaybackMode.LoopingInBackground)
    scene.setBackgroundImage(assets.image`Menu`)
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    mySprite = sprites.create(assets.image`myImage`, SpriteKind.Cursor)
    mySprite.setPosition(30, 40)
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (Playing > 0) {
        Swinging_Sword = 0
        animation.runImageAnimation(
        mySprite,
        assets.animation`Wait Back`,
        200,
        true
        )
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Playing > 0) {
        Swinging_Sword = 0
        animation.runImageAnimation(
        mySprite,
        assets.animation`Pirate Walk0`,
        200,
        true
        )
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (In_Music > 0) {
        sprites.destroy(textSprite)
        Music_Counter += 1
        textSprite = textsprite.create("Song " + Music_Counter, 13, 15)
        textSprite.setPosition(75, 60)
        if (Music_Counter_Max < Music_Counter) {
            sprites.destroy(textSprite)
            Music_Counter = 1
            textSprite = textsprite.create("Song " + Music_Counter, 13, 15)
            textSprite.setPosition(75, 60)
        }
    }
    if (Playing > 0) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`Pirate Walk`,
        200,
        true
        )
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.y == 40) {
        music.stopAllSounds()
        Playing = 1
        Play()
    } else if (mySprite.y == 65) {
        music.stopAllSounds()
        In_Music = 1
        Music()
    }
    if (In_Music > 0) {
        music.stopAllSounds()
        Play_Music()
    }
    if (Playing > 0) {
        if (controller.A.isPressed()) {
            Swinging_Sword = 1
            animation.runImageAnimation(
            mySprite,
            assets.animation`Pirate Swing w Sword`,
            50,
            false
            )
            pause(250)
            Swinging_Sword = 0
            animation.runImageAnimation(
            mySprite,
            assets.animation`Pirate Stand`,
            200,
            true
            )
        }
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
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.y == 40) {
        mySprite.y += 25
    } else if (mySprite.y == 65) {
    	
    }
    if (Playing > 0) {
        Swinging_Sword = 0
        animation.runImageAnimation(
        mySprite,
        assets.animation`Walk Forward`,
        200,
        true
        )
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (In_Music > 0) {
        music.stopAllSounds()
        In_Music = 0
        Menu_Main()
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (Playing > 0) {
        Swinging_Sword = 0
        animation.runImageAnimation(
        mySprite,
        assets.animation`Wait Forward`,
        200,
        true
        )
    }
})
let Militia: Sprite = null
let Music_Counter_Max = 0
let textSprite: TextSprite = null
let Facing_R = false
let Swinging_Sword = 0
let Playing = 0
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
game.onUpdateInterval(2000, function () {
    if (Playing > 0) {
        Militia = sprites.create(assets.image`Police`, SpriteKind.Enemy)
        tiles.placeOnTile(Militia, tiles.getTileLocation(randint(1, 9), randint(4, 6)))
        Militia.follow(mySprite, 25)
        animation.runImageAnimation(
        Militia,
        assets.animation`Police Walk`,
        200,
        true
        )
    }
})
