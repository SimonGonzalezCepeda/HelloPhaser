/**
 * Created by sylver on 7/04/16.
 */
var HelloPhaser = HelloPhaser || {}

HelloPhaser.Preload = function (){}

HelloPhaser.Preload.prototype = {
    preload: function() {
        //Now we are showing the loading screen itself
        //Here we load asign to the variable.
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
        this.preloadBar.anchor.setTo(0.5);

        //Here we show it
        this.load.setPreloadSprite(this.preloadBar);

        //Loading background/map assets
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');

        //Loading items
        this.load.image('star', 'assets/star.png');

        //loading sprites
        this.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    },

    create: function() {
        //We start loading the game.
        this.state.start('Game');
    }
}