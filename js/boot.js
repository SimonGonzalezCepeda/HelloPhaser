/**
 * Created by sylver on 7/04/16.
 */
var HelloPhaser = HelloPhaser || {}

HelloPhaser.Boot = function(){};

//This prototype is for the loading screen. We will load the assets and make the code for it.
HelloPhaser.Boot.prototype = {
    init: function() {
        //Setting the multi-touch for the game.
        this.input.maxPointers = 2;

        //With this setting when the tab loose focus it will be paused.
        this.stage.disableVisibilityChange = true;

        if (this.game.device.desktop)
        {
            //Config to ceter it horizontal
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
        }
        else
        {
            //  Those are for mobile settings
            //  In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(480, 260, 1024, 768);
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally = true;
        }
    },

    preload: function() {
        //Assets for Loading Screen
        this.load.image('preloadbar', 'assets/preloader-bar.png');
    },

    create: function() {
        //We set the background here
        this.game.stage.backgroundColor = '#000';

        this.state.start('Preload');
    }
}