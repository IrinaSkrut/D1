Game.Main=function(game){};
Game.Main.prototype.preload=function(){};

var wordApple =[];
var wordAppleCopy=[];
var wordPear =[];
var wordPearCopy=[];
var wordOrange=[];
var wordOrangeCopy=[];
Game.Main.prototype.create=function(){
    this.physics.arcade.gravity.y = false;
    this.game.add.tileSprite(0, 0, 640, 640, 'background');
    var i;
    var j;
    var k;
    for(i=0;i<5;i++) {
        wordApple[i] = this.add.sprite(1 + 90 * i, 1, 'apple', i);
        this.game.physics.arcade.enable(wordApple[i]);
        wordApple[i].tint = 0xFFAA88;
    }
    for(j=0;j<4;j++) {
        wordPear[j] = this.add.sprite(1 + 90 * j, 100, 'pear', j);
        this.game.physics.arcade.enable(wordPear[j]);
        wordPear[j].tint = 0xFF88AA;
    }
    for(k=0;k<6;k++) {
        wordOrange[k] = this.add.sprite(1 + 90 * k, 200, 'orange', k);
        this.game.physics.arcade.enable(wordOrange[k]);
        wordOrange[k].tint = 0xEE7788;
    }
    for(k=0;k<6;k++) {
        wordOrangeCopy[k] = this.game.add.sprite(Math.random()*500-Math.random()*100+100, 500, wordOrange[k].key, k);
        wordOrangeCopy[k].tint = 0x222222;
    }
    for(j=0;j<4;j++) {
        wordPearCopy[j] = this.game.add.sprite(Math.random()*500-Math.random()*100+100, 435, wordPear[j].key, j);
        wordPearCopy[j].tint = 0x222222;
    }

    for(i=0;i<5;i++) {
        wordAppleCopy[i] = this.game.add.sprite(Math.random()*500-Math.random()*100+100, 370, wordApple[i].key, i);
        this.game.physics.arcade.enable(wordAppleCopy[i]);
        wordAppleCopy[i].inputEnabled = true;
        wordAppleCopy[i].input.enableDrag();
    }



    wordAppleCopy[0].originalPosition = wordAppleCopy[0].position.clone();
    wordAppleCopy[0].events.onDragStop.add(function(currentSprite){
        this.stopDrag(currentSprite, wordApple[0]);
    }, this);

    wordAppleCopy[1].originalPosition = wordAppleCopy[1].position.clone();
    wordAppleCopy[1].events.onDragStop.add(function(currentSprite){
        this.stopDrag(currentSprite, wordApple[1]);
    }, this);

    wordAppleCopy[2].originalPosition = wordAppleCopy[2].position.clone();
    wordAppleCopy[2].events.onDragStop.add(function(currentSprite){
        this.stopDrag(currentSprite, wordApple[2]);
    }, this);

    wordAppleCopy[3].originalPosition = wordAppleCopy[3].position.clone();
    wordAppleCopy[3].events.onDragStop.add(function(currentSprite){
        this.stopDrag(currentSprite, wordApple[3]);
    }, this);

    wordAppleCopy[4].originalPosition = wordAppleCopy[4].position.clone();
    wordAppleCopy[4].events.onDragStop.add(function(currentSprite){
        this.stopDrag(currentSprite, wordApple[4]);
    }, this);

    wordPearCopy[0].originalPosition = wordPearCopy[0].position.clone();
    wordPearCopy[0].events.onDragStop.add(function(currentSprite){
        this.stopDrag(currentSprite, wordPear[0]);
    }, this);

    wordPearCopy[1].originalPosition = wordPearCopy[1].position.clone();
    wordPearCopy[1].events.onDragStop.add(function(currentSprite){
        this.stopDrag(currentSprite, wordPear[1]);
    }, this);
    wordPearCopy[2].originalPosition = wordPearCopy[2].position.clone();
    wordPearCopy[2].events.onDragStop.add(function(currentSprite){
        this.stopDrag(currentSprite, wordPear[2]);
    }, this);

    wordPearCopy[3].originalPosition = wordPearCopy[3].position.clone();
    wordPearCopy[3].events.onDragStop.add(function(currentSprite){
        this.stopDrag(currentSprite, wordPear[3]);
    }, this);

    wordOrangeCopy[0].originalPosition = wordOrangeCopy[0].position.clone();
    wordOrangeCopy[0].events.onDragStop.add(function(currentSprite){
        this.stopDrag(currentSprite, wordOrange[0]);
    }, this);

    wordOrangeCopy[1].originalPosition = wordOrangeCopy[1].position.clone();
    wordOrangeCopy[1].events.onDragStop.add(function(currentSprite){
        this.stopDrag(currentSprite, wordOrange[1]);
    }, this);

    wordOrangeCopy[2].originalPosition = wordOrangeCopy[2].position.clone();
    wordOrangeCopy[2].events.onDragStop.add(function(currentSprite){
        this.stopDrag(currentSprite, wordOrange[2]);
    }, this);

    wordOrangeCopy[3].originalPosition = wordOrangeCopy[3].position.clone();
    wordOrangeCopy[3].events.onDragStop.add(function(currentSprite){
        this.stopDrag(currentSprite, wordOrange[3]);
    }, this);

    wordOrangeCopy[4].originalPosition = wordOrangeCopy[4].position.clone();
    wordOrangeCopy[4].events.onDragStop.add(function(currentSprite){
        this.stopDrag(currentSprite, wordOrange[4]);
    }, this);

    wordOrangeCopy[5].originalPosition = wordOrangeCopy[5].position.clone();
    wordOrangeCopy[5].events.onDragStop.add(function(currentSprite){
        this.stopDrag(currentSprite, wordOrange[5]);
    }, this);
}
Game.Main.prototype.stopDrag=function(currentSprite, endSprite){
    if (!this.game.physics.arcade.overlap(currentSprite, endSprite, function() {
        currentSprite.input.draggable = false;
        currentSprite.position.copyFrom(endSprite.position);
        currentSprite.anchor.setTo(endSprite.anchor.x, endSprite.anchor.y);
    })) { currentSprite.position.copyFrom(currentSprite.originalPosition);
    }
}

Game.Main.prototype.update=function() {
    if (wordAppleCopy[0].x === wordApple[0].x && wordAppleCopy[1].x === wordApple[1].x
        && wordAppleCopy[2].x === wordApple[2].x && wordAppleCopy[3].x === wordApple[3].x && wordAppleCopy[4].x === wordApple[4].x) {

        for ( j = 0; j < 4; j++) {
            this.game.physics.arcade.enable(wordPearCopy[j]);
            wordPearCopy[j].inputEnabled = true;
            wordPearCopy[j].input.enableDrag();
            wordPearCopy[j].tint = 0xFFFFFF;
        }
    }
    if (wordPearCopy[0].x === wordPear[0].x && wordPearCopy[1].x === wordPear[1].x
        && wordPearCopy[2].x === wordPear[2].x && wordPearCopy[3].x === wordPear[3].x) {
        for ( k = 0; k < 6; k++) {
            this.game.physics.arcade.enable(wordOrangeCopy[k]);
            wordOrangeCopy[k].inputEnabled = true;
            wordOrangeCopy[k].input.enableDrag();
            wordOrangeCopy[k].tint = 0xFFFFFF;
        }

    }
    if (wordOrangeCopy[0].x === wordOrange[0].x && wordOrangeCopy[1].x === wordOrange[1].x && wordOrangeCopy[2].x === wordOrange[2].x &&
        wordOrangeCopy[3].x === wordOrange[3].x && wordOrangeCopy[4].x === wordOrange[4].x && wordOrangeCopy[5].x === wordOrange[5].x ){

        this.game.state.start("Final");
    }
}




