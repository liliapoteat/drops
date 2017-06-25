var Preview2 = function() {};

Preview2.prototype = {

  create: function() {
    var background = game.add.sprite(0, 0, 'bg');
    this.titleText = game.add.text(game.world.centerX, 480, 'Level 2: Charleston, WV', {
      font: '60pt Karla-Bold',
      fill: '#404040',
      align: 'center'
    });
    this.titleText.anchor.set(0.5);

    var text = "\n\nWelcome to Charleston! \nAreas like this with \nmany industrial plants \nare prone to chemical\n and coal ash leaks. \n\nThese make the \ndrinking water unsafe \nand cause short-term \nhealth problems.";
    var score_text = game.add.text(game.world.centerX, game.world.centerY, text, {
      font: '48pt Karla',
      fill: '#404040',
      align: 'center'
    });
    score_text.anchor.set(0.5);
  },
  
  update: function() {
    if (game.input.keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
      drops_collected=0;
      blue_collected=0;
      green_collected=0;
      brown_collected=0;
      game.state.start('game2');
    }
  }
};
