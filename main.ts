enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    nextCard = myShoe.nextCard
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite2.setImage(myShoe.getCardImage(nextCard, CardSpriteSize.ThirtyTwoByThirtyTwo))
    mySprite2.say(nextCard.name)
    pause(2000)
    mySprite2.sayText("Hit or stand?")
    total = nextCard.faceValue
    info.setScore(total)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 3; index++) {
        nextcard3 = myShoe.nextCard
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        mySprite4.setImage(myShoe.getCardImage(nextcard3, CardSpriteSize.ThirtyTwoByThirtyTwo))
        mySprite4.say("Dealers hand")
        pause(1000)
        mySprite4.say(nextcard3.name)
    }
    dealerTotal = nextcard3.faceValue
    if (dealerTotal < total) {
        game.over(true, effects.confetti)
        game.splash(dealerTotal)
    } else if (dealerTotal > total) {
        game.over(false, effects.dissolve)
        game.splash(dealerTotal)
    } else if (dealerTotal == total) {
        game.splash("Draw! Press B to restart")
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    nextCard = myShoe.nextCard
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite3.setImage(myShoe.getCardImage(nextCard, CardSpriteSize.ThirtyTwoByThirtyTwo))
    mySprite3.say(nextCard.name)
    pause(2000)
    mySprite3.sayText("Hit or stand?")
    total = nextCard.faceValue + nextCard.length
    info.setScore(total)
    if (total > 21) {
        game.over(false)
    } else if (total == 21) {
        game.over(true)
    }
})
let mySprite3: Sprite = null
let dealerTotal = 0
let mySprite4: Sprite = null
let nextcard3: Card = null
let total = 0
let mySprite2: Sprite = null
let nextCard: Card = null
let myShoe: Shoe = null
info.setScore(0)
myShoe = playingCards.createPokerDeck()
myShoe.shuffle()
let mySprite = sprites.create(img`
    ..............ccccccccc........
    ............cc555555555cc......
    ...........c5555555555555c.....
    ..........c55555555555555dc....
    .........c555555555555b5bdc....
    .........555bc1555555555bdcccc.
    ........c555ccc55555555bbdccddc
    ........c555bcb5555555ccddcdddc
    .......c555555555551ccccddbdddc
    .......c555555b555c1cccbddbbdbc
    .......c5555555bbc33333ddddbcc.
    .......c555555555bc333555ddbc..
    .......c5555555555555555555c...
    .......cd555555555555cccc555c..
    .......cd55555555555c555c555c..
    .......cdd555555555b5555b555c..
    .......cddd55555ddbb555bb555c..
    .......cdddd55555555555b5555c..
    .......cddddd5555555ddb5555dc..
    c......cdddddd555555555555dcc..
    cc...ccddddddd555555555555dc...
    cdccccdddddd555555d55555ddcc...
    cdddddddddbd5555555ddddddccccc.
    ccdddddddbb55555555bddddccbddc.
    .ccddddddbd55555555bdddccdddc..
    ..cccddddbd5555555cddcccddbc...
    ....ccccccd555555bcccc.cccc....
    .........cc555555bc............
    .........cc55555555c...........
    ..........cccccccccc...........
    `, SpriteKind.Player)
mySprite.sayText("Welcome to Blackjack!")
pause(2000)
effects.clearParticles(mySprite)
mySprite.sayText("Press A to start!")
pause(1000)
mySprite.destroy()
