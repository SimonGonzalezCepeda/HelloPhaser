/**
 * Created by sylver on 7/04/16.
 */
var HelloPhaser = HelloPhaser || {}

HelloPhaser.Game = function(){};

HelloPhaser.Game.prototype = {
    create: function () {
        //  We're going to be using physics, so enable the Arcade Physics system
        this.physics.startSystem(Phaser.Physics.ARCADE);

        //Adding map
        this.map = this.game.add.tilemap('lvl1');
        this.map.addTilesetImage('Background', 'Background');
        this.map.addTilesetImage('sprite', 'mapsheet');

        this.player = this.game.add.sprite(result[0].x, result[0].y, 'player');
        this.cursors = this.input.keyboard.createCursorKeys();

    },
    update: function () {
            //  Collide the player and the stars with the platforms
            //this.physics.arcade.collide(this.player, this.platforms);

            //  Reset the players velocity (movement)
            this.player.body.velocity.x = 0;

            if (this.cursors.left.isDown)
            {
                //  Move to the left
                this.player.body.velocity.x = -150;

                this.player.animations.play('left');
            }
            else if (this.cursors.right.isDown)
            {
                //  Move to the right
                this.player.body.velocity.x = 150;

                this.player.animations.play('right');
            }
            else
            {
                //  Stand still
                this.player.animations.stop();

               this.player.frame = 4;
            }

            //  Allow the player to jump if they are touching the ground.
            if (this.cursors.up.isDown && this.player.body.touching.down)
            {
                this.player.body.velocity.y = -300;
            }
    }
}