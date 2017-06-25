var LevelReview = function() {};

LevelReview.prototype = {

  init: function() {
    this.titleText = game.make.text(game.world.centerX, 480, 'game over!', {
      font: '120pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });
    this.titleText.anchor.set(0.5);
    this.clean_percentage = 0;
  },

  create: function () {
    game.stage.disableVisibilityChange = true;
    game.add.sprite(0, 0, 'menu-bg');
    game.add.existing(this.titleText);
    utils.makeTextBox('Let\'s review this level!', 800, true);

    
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

    this.clean_percentage = (blue_collected + green_collected) / (drops_collected);
    utils.makeTextBox('Your accuracy: ' + this.clean_percentage, 900, false);

    /*
    The "average bucket" for this particular region should probably be left
    until after the MVP is done, since displaying it visually would require animation with
    more sprites drawn/seems non-trivial
    */ 

  }
};
