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

        //Loading assets and tiles for the map
        this.load.tilemap('lvl1', 'assets/mapa.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('Background', 'assets/Tiles/Background.png');
        this.load.image('mapsheet', 'assets/Tiles/_Spritesheet.png');
        this.load.image('Tile1', 'assets/Tiles/Tile_1.png');
        this.load.image('Tile2', 'assets/Tiles/Tile_2.png');
        this.load.image('Tile3', 'assets/Tiles/Tile_3.png');
        this.load.image('Tile4', 'assets/Tiles/Tile_4.png');
        this.load.image('Tile5', 'assets/Tiles/Tile_5.png');
        this.load.image('Tile6', 'assets/Tiles/Tile_6.png');
        this.load.image('Tile7', 'assets/Tiles/Tile_7.png');
        this.load.image('Tile8', 'assets/Tiles/Tile_8.png');
        this.load.image('Tile9', 'assets/Tiles/Tile_9.png');
        this.load.image('Tile10', 'assets/Tiles/Tile_10.png');
        this.load.image('Tile11', 'assets/Tiles/Tile_11.png');
        this.load.image('Tile12', 'assets/Tiles/Tile_12.png');
        this.load.image('Tile13', 'assets/Tiles/Tile_13.png');
        this.load.image('Tile14', 'assets/Tiles/Tile_14.png');
        this.load.image('Tile15', 'assets/Tiles/Tile_15.png');

        //Loading player
        this.load.image('static1', 'assets/Character/state1.png');
        this.load.image('static2', 'assets/Charater/state2.png');

        //Loading items
        this.load.image('star', 'assets/star.png');

    },

    create: function() {
        //We start loading the game.
        this.state.start('Game');
    }
}