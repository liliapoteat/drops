var LevelReview = function () {};

LevelReview.prototype = {
  preload: function() {
    this.optionCount = 1;
  },

  init: function() {
    this.titleText = game.make.text(game.world.centerX, 300, 'Level Review', {
      font: '60pt Karla',
      fill: '#FDFFB5',
      align: 'center'
    });
    this.titleText.setShadow(3, 3, 'rgba(0, 0, 0, 0.5)', 5);
    this.titleText.anchor.set(0.5);

    this.clean_percentage = 0;
  },

  addMenuOption: function(text, callback) {
    var txt = game.add.text(30, this.optionCount * 80 + 600, text, {
      font: '30pt Karla',
      fill: 'white',
      align: 'center'
    });
    var onOver = function(target) {
      target.fill = '#FEFFD5';
      target.stroke = "rgba(200,200,200,0.5)";
    };
    var onOut = function(target) {
      target.fill = 'white';
      target.stroke = "rgba(0,0,0,0)";
    };
    
    txt.stroke = "rgba(0,0,0,0)"; 
    txt.strokeThickness = 4;
    txt.inputEnabled = true;
    txt.events.onInputUp.add(callback);
    txt.events.onInputOver.add(onOver);
    txt.events.onInputOut.add(onOut);
    this.optionCount++;
  },

  create: function() {
    game.add.sprite(0, 0, 'menu-bg');
    game.add.existing(this.titleText);
    game.stage.disableVisibilityChange = true; // prevents game from
                                               // pausing when tabbed out
   	this.addMenuOption('Start', function (target) {
      game.state.start('game');
    });
    this.addMenuOption('About', function (target) {
      console.log('You clicked About!');
    });
  },

  update: function() {
    
    /*
    I think you can just access game.drops_collected, game.blue_collected, etc. directly
    However, it is probably best practice to write functions to access these
    variables, although I'm not sure how to write functions to communicate
    between game.js and levelreview.js
    */

    /*
    How the math is done to calculate clean_percentage:
    Right now, there is no concept of green = +1, brown = -1, and blue = neutral
    Green and blue are both worth the same (clean water) and brown contaminates that water
    */

    this.clean_percentage = (game.blue_collected + game.green_collected) / (game.drops_collected);

    //TODO: add this percentage as text on the screen

    /*
    The "average bucket" for this particular region should probably be left
    until after the MVP is done, since displaying it visually would require animation with
    more sprites drawn/seems non-trivial
    */ 
  }
};