var Level1Review = function() {};

Level1Review.prototype = {

	create: function() {
		var background = game.add.sprite(0, 0, 'bg');
		this.titleText = game.add.text(game.world.centerX, 480, 'level 1', {
			font: '60pt Karla',
			fill: '#404040',
			align: 'center'
		});
		this.titleText.anchor.set(0.5);

    this.clean_percentage = (blue_collected + green_collected) / (drops_collected);

    var text = "Your bucket is \n" + this.clean_percentage + "\n % clean";
    var score_text = game.add.text(game.world.centerX, game.world.centerY, text, {
      font: '60pt Karla-Bold',
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
