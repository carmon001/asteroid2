function overlap () {
	
}
function hero () {
    joker = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . f f f f . . . . . . . . 
. . . f 7 7 7 7 f . . . . . . . 
. . f 7 7 7 7 7 7 f . . . . . . 
. f 1 7 7 1 1 7 7 7 f . . . . . 
f 1 1 7 1 1 1 1 7 7 7 f . . . . 
f 1 1 1 1 1 f 1 1 7 7 f . . . . 
f f 1 1 1 f 1 d 1 7 1 f . . . . 
f 1 f 1 f f 1 1 d 1 1 f . . . . 
f 1 f 1 f f 1 1 d 1 f . . . . . 
f 1 1 1 1 1 1 2 1 1 f . . . . . 
. f 1 2 2 2 2 1 1 f . . . . . . 
. . f 1 1 1 1 1 f . . . . . . . 
. . . f f f f f . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    joker.setPosition(78, 97)
    controller.moveSprite(joker, 100, 0)
}
function projectile () {
    projectile2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 5 . . 5 . 5 . . 5 . . . . 
. . 5 . . . 5 5 5 . . . 5 . . . 
. 5 5 . . . 5 5 5 . . . 5 5 . . 
5 5 5 5 . 5 5 5 5 5 . 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 . 5 . 5 5 5 . 5 . 5 5 . . 
. . 5 . . . . 5 . . . . 5 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, 0)
}
function score () {
    info.changeScoreBy(1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    overlap()
    game.over(false)
})
let projectile2: Sprite = null
let joker: Sprite = null
hero()
game.onUpdateInterval(200, function () {
    projectile()
    score()
})
