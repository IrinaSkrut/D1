Game.MainMenu = function(game){};

Game.MainMenu.prototype ={

    create: function () {

        this.game.add.image(0,0,'title')

        var playButton = this.game.add.button(this.game.width*0.5,this.game.height*0.45,
            'PlayButton', this.startGame, this);
        playButton.input.priorityID = 1;
        playButton.anchor.set(0.5);
        var wordButton = this.game.add.button(this.game.width*0.5,this.game.height*0.62,
            'WordButton', this.wordButton, this);
        wordButton.input.priorityID = 1;
        wordButton.anchor.set(0.5);

        var quitButton = this.game.add.button(this.game.width*0.5,this.game.height*0.8,
            'QuitButton', this.exitGame, this);
        quitButton.input.priorityID = 1;
        quitButton.anchor.set(0.5);

    },

    update: function(){

    },
    startGame(){
        this.state.start('Level1');
    },

    wordButton(){
        this.state.start('Main');
    },

    exitGame(){
        this.game.destroy();
    }

};



/*this.createButton(this.world.centerX,this.world.centerY + 32, 150, 100,
      function(){
      this.state.start('Level1');
      });

  //titlescreen = this.add.sprite(this.world.centerX,this.world.centerY - 50,'title');
  //titlescreen.anchor.setTo(0.5,0.5);

},

update: function () {

},
createButton: function (game, x, y, w, h, callback){
  var button1= this.add.button(x,y,'button1',callback, this,2,1,0) ;
  button1.anchor.setTo(0.5,0.5);
  button1.width = w;
  button1.height = h;

}*/