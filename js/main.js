/**
 * Created by sylver on 7/04/16.
 */
var HelloPhaser = HelloPhaser || {}

HelloPhaser.game = new Phaser.Game(800, 600, Phaser.AUTO, '');

HelloPhaser.game.state.add('Boot', HelloPhaser.Boot);
HelloPhaser.game.state.add('Preload', HelloPhaser.Preload);
HelloPhaser.game.state.add('Game', HelloPhaser.Game);

HelloPhaser.game.state.start('Boot');