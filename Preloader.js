Game.Preloader = function(game){
    this.preloader = null;
};


Game.Preloader.prototype ={




preload: function () {

  /* this.preloadBar = this.add.sprite(this.world.centerX,this.world.centerY,'preloadBar');
   this.preloadBar.anchor.setTo(8.5,8.5);
    this.time.advancedTiming = true;
    this.load.setPreloadSprite(this.preloadBar);*/



    this.load.crossOrigin = 'anonymous';
    this.load.audio('audio','assets/1.mp3');
    this.load.image('trees', 'assets/trees2.png');
    this.load.image('clouds', 'assets/Clouds (2).png');
    this.load.image('rocks', 'assets/Rocks.png');
    this.load.image('platform', 'assets/platform1.png');
    this.load.image('ice-platform', 'assets/ice-platform.png');
    this.load.spritesheet('dude', 'assets/1.png', 85, 80);
    this.load.spritesheet('letter', 'assets/apple(1).png',89 , 100);

    this.load.image('logo', 'assets/logo.png');
    this.load.image('title', 'assets/title10.png');
    this.load.image('PlayButton', 'assets/SB.png');
    this.load.image('WordButton', 'assets/WB.png');
    this.load.image('QuitButton', 'assets/qb.png');



    this.game.load.spritesheet( 'apple', 'assets/apple.png', 90, 90 );
    this.game.load.spritesheet( 'pear', 'assets/Pear.png', 90, 90 );
    this.game.load.spritesheet( 'orange', 'assets/orange.png', 90, 90 );
    this.game.load.spritesheet( 'reset', 'assets/reset.png', 150, 154 );
    this.game.load.spritesheet('congratulations', 'assets/congratulations.png',505, 185);
    this.game.load.image('background', 'assets/bg.png');


},




    create: function () {


        this.state.start('LoadingBar');


    }

};