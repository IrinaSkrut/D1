Game.LoadingBar = function (game) {


};
var barGreen,barYellow,maxWidth,tween;
Game.LoadingBar.prototype = {
    preload: function () {

    },

create:function (){


    this.add.sprite(140,200, 'logo');
    barGreen = this.add.graphics(170,350);
    barGreen.beginFill(0xEAF516);
    barGreen.drawRect(0,0,350,50);

    barYellow = this.add.graphics(170,350);
    barYellow.beginFill(0x4BFAF7);
    barYellow.drawRect(0,0,350,50);

    maxWidth = 350;
    barYellow.width=0;

    tween = this.add.tween(barYellow);
    tween.to({width:maxWidth},1000);
    tween.start();

    this.game.time.events.add(3000,()=>{
        this.state.start('MainMenu');
    });
   //this.state.start('MainMenu');
}

};
