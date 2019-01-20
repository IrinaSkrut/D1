Game.Final=function(game){};

Game.Final.prototype.preload=function(){};

Game.Final.prototype.create=function(){
    this.game.world.removeAll();
    this.game.add.tileSprite(0, 0, 640, 640, 'background');
    this.add.sprite(70, 60, 'congratulations')
    this.game.add.button(250,300,"reset",this.resetTheGame,this);
}
Game.Final.prototype.resetTheGame=function(){
    this.game.state.start("MainMenu");
}