var Preview3 = function() {};

Preview3.prototype = {

	create: function() {
		var background = game.add.sprite(0, 0, 'bg');
		this.titleText = game.add.text(game.world.centerX, 480, 'Level 3: Sebring, OH', {
			font: '60pt Karla-Bold',
			fill: '#404040',
			align: 'center'
		});
		this.titleText.anchor.set(0.5);

    var text = "\n\n\nWelcome to Sebring! \nIn the US, 6-8 million\nhomes still get water\nfrom lead pipelines. \n\nThese corrode and \ninfect water toxins, \nleading to chronic \nhealth problems for \nfamilies and children.";
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
      game.state.start('game3');
    }
  }
};
