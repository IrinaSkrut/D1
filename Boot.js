
var Game={};
    Game.Boot = function(game){};





Game.Boot.prototype = {

    init: function () {

        this.game.renderer.renderSession.roundPixels = true;

        this.world.resize(640, 2000);
        this.scale.pageAlignHorizontally = true;

        this.physics.startSystem(Phaser.Physics.ARCADE);

        this.physics.arcade.gravity.y = 750;
        this.physics.arcade.skipQuadTree = false;

    },

    preload: function () {

    },
    create: function () {
        this.state.start('Preloader');

    }

};